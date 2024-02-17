import {
    BiosController,
    QueryClient,
    ReactView,
    Text,
    UIController,
    UIView
} from "@tuval/forms";
import { Routes } from "./routes/+routes";
import useDrivePicker from 'react-google-drive-picker'
import React from "react";
declare var google: any;




const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 5000 * 60 * 1000, // 5 minutes
            retry: false
        }
    },
});


export class BiosMainController extends UIController {
    public override LoadView(): UIView {
        return (
            Routes()
        )
    }
}


const AUTH_TOKEN = 'ya29.a0AfB_byAwIWHhaL_zqPcDldDQYPhva6cfApDLzHHE3Yjp54ajKeERKNcZxtQ8ThJ6ljU_HgfeyN0Qdjay8-4iEarhlLLnGdrO_44QlLAveEMKWKKyP0mim72ua3DCj0H_DL45tHon7hleMJY2_cMcIx-VWPM_QFXitQaCgYKAVISARASFQHGX2Mi4XEZnu71ex9RBkPsLZYhXA0169'
class GoogleDrive extends React.Component<any,any> {
    lastChange: number;
    thumbnails: any;
    constructor(props) {
      super(props);
      this.state = this.initialState()
      this.handleClick = this.handleClick.bind(this)
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
      this.lastChange = 0
    }
    initialState(){
      return {
        data: [], 
        loading: false,
        current : {},
        parents : [{
          id: 'root',
          mimeType: 'application/vnd.google-apps.folder',
          name: "Root"
        }],
        thumbnails: false
      }
    }
    reset(){
      this.setState(this.initialState())
    }
    handleClick(item){
      var self = this
      return function(e){
        console.log(item)
        if (item.mimeType == 'application/vnd.google-apps.folder'){
          var parents=[]
          for(var i=0; i<self.state.parents.length; i++){
            if (self.state.parents[i].id==item.id){
              break;
            }
            parents.push(self.state.parents[i])
          }
          parents.push(item)
          self.setState({ data: [], current : item, parents: parents }) 
          window.setTimeout(() => {
            self.loadData()
          }, 300);
        }else{
          var height=Math.max(document.body.clientHeight-50,600)
          var width=Math.max(document.body.clientWidth-40,800)
          
          window.open(item.webViewLink,'preview','width='+height+',height='+width)
          //window.open(item.webContentLink)
        }
        
      }
    }
    handleChange(event){
        //this.setState({search: event.target.value});
    }
    handleSubmit(event){
        event.preventDefault();
        var self = this
        window.clearTimeout(this.lastChange)
        this.setState({data: []});
        this.lastChange = window.setTimeout(() => {
            self.loadData()
        }, 300);
        return false;
    }
    copyFile(id){
      var url="https://www.googleapis.com/drive/v3/files/"+ id + "/copy"
      var headers = {
        Authorization : 'Bearer ' + AUTH_TOKEN
      }
      fetch(url,{method: 'POST', headers,})
        .then(response => response.json())
        .then(data => { 
             console.log(data)
            });
    }
    loadData(){
        //AUTH_TOKEN = "ya29.GltjBlFp1_IiifotwFMgCllpXuyC9IFHLYURXTbfZcwheGTAxxmOaO-7cwU8YSRHli2NIJIT53wEPpnSMEvSDzQTVz49WJtBUREcKXSpoArztBYuhQYwP4NRoCmK"
        var headers = {
          Authorization : 'Bearer ' + AUTH_TOKEN
        }
        var parent='root'
        if (this.state.current.id){
          parent=this.state.current.id
        }
        console.log(parent, this.state.current.id, this.state.current)
        this.setState({loading: true})
        var conditions = []
        conditions.push("trashed = false")
        //conditions.push("mimeType = 'application/vnd.google-apps.folder'")
        conditions.push("'"+parent+"' in parents")
        var query=encodeURIComponent(conditions.join(" and "))
        var url = "https://www.googleapis.com/drive/v3/files?q="+ query + "&fields=files(copyRequiresWriterPermission%2CcreatedTime%2Cdescription%2CiconLink%2Cid%2Ckind%2CmimeType%2Cname%2CownedByMe%2Cparents%2Cproperties%2Cshared%2CsharingUser%2Csize%2CteamDriveId%2CthumbnailLink%2Ctrashed%2CwebContentLink%2CwebViewLink)%2CincompleteSearch%2Ckind%2CnextPageToken&key="
        //url = 'response.json'
        fetch(url,{method: 'GET', headers,})
        .then(response => response.json())
        .then(data => { 
            if (data.files){
              this.setState({ data : data.files }) 
            }
            this.setState({loading: false}) 
            });
    }
    listFiles(parent,callback){
      console.log("listing", parent)
      var self=this
      var headers = {
        Authorization : 'Bearer ' + AUTH_TOKEN
      }
      var conditions = []
      conditions.push("trashed = false")
      //conditions.push("mimeType = 'application/vnd.google-apps.folder'")
      conditions.push("'"+parent+"' in parents")
      var filesFields="copyRequiresWriterPermission,createdTime,description,iconLink,id,kind,mimeType,name,ownedByMe,parents,properties,shared,sharingUser,size,teamDriveId,thumbnailLink,trashed,webContentLink,webViewLink"
      var fields=encodeURIComponent("files("+filesFields+"),incompleteSearch,kind,nextPageToken")
      var query=encodeURIComponent(conditions.join(" and "))
      var url = "https://www.googleapis.com/drive/v3/files?q="+ query + "&fields=" + fields + "&key="
      //url = 'response.json'
      fetch(url,{method: 'GET', headers,})
      .then(response => response.json())
      .then(data => { 
          if (!data.files){
            return
          }
          for(var i=0;i<data.files.length; i++){
            var file=data.files[i]
            var item={
              id:file.id,
              name:file.name,
              dir:file.mimeType=="application/vnd.google-apps.folder",
              owned:file.ownedByMe
            }
            //console.log(item.name,item.owned)
            callback(item)
            if (file.mimeType=="application/vnd.google-apps.folder"){
              var id=file.id
              var name=file.name
              setTimeout(self.listFiles,200+i*100,id,callback)
            }
          
            
          }
        });
    }
    setOwnerByEmail(email,parentid){
      var self=this;
      var headers = {
        Authorization : 'Bearer ' + AUTH_TOKEN
      }
      var permUrl="https://www.googleapis.com/drive/v2/permissionIds/"+email
      fetch(permUrl,{method: 'GET', headers,})
        .then(response => response.json())
        .then(data => { 
            console.log(data)
            if (data.id){
              var ownerid=data.id;
              var list=[]
              self.listFiles(parentid,function(file){
                if (file.owned){
                  setTimeout(self.setFileOwner,100+list.length*100,file.id,ownerid)
                }
              })
            }
          });
    }
    setFileOwner(fileid,ownerid){
      var headers = {
        'Authorization' : 'Bearer ' + AUTH_TOKEN,
        'Content-Type': 'application/json'
      }
      var perm = {
        "kind":"drive#permission",
        "id":ownerid,
        "type":"user",
        "role":"owner",
        "result":{
          "kind":"drive#permission",
          "id":ownerid,
          "type":"user",
          "role":"writer"
         }
        }
  
      var permUrl="https://www.googleapis.com/drive/v2/files/"+fileid+"/permissions/"+ownerid+"?transferOwnership=true&alt=json"
      fetch(permUrl,{
        method: 'PUT', 
        headers:headers,
        body:JSON.stringify(perm)
      })
        .then(response => response.json())
        .then(data => { 
          console.log(data)
        })
    }
    render() {
      var self = this
      var itemComp= function(item, margin, header) {
        var style: any = {
          cursor: 'pointer'
        }
        if (header){
          style.fontWeight = 'bold'
        }
        if (margin>0){
          style.marginLeft = (margin*10) + 'px'
        }
        var img: any = ""
        if (item.iconLink) {
          img = <img src={item.iconLink} title={item.id} ></img>
        }
        var thumb: any = ""
        if (self.thumbnails && item.thumbnailLink){
          thumb = <span><br/><img src={item.thumbnailLink} title={item.id} ></img></span>
        }
        return <li style={style} key={item.id} className="collection-item" onClick={self.handleClick(item)} >
            {img} {item.name}
            {thumb}
        </li>
      }
      var cardComp= function(item, margin, header) {
        var style: any = {}
        if (header){
          style.fontWeight = 'bold'
        }
        if (margin>0){
          style.marginLeft = (margin*10) + 'px'
        }
        var img: any = ""
        if (item.iconLink) {
          img = <img src={item.iconLink} title={item.id} ></img>
        }
        var thumb: any = ""
        var thumbnailImage = item.thumbnailLink ? item.thumbnailLink : item.iconLink
        var imageStyle = {
          backgroundImage: 'url('+thumbnailImage+')',
          backgroundPosition: 'center center',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          height: '160px'        
        }
        if (!item.thumbnailLink){
          imageStyle.backgroundSize = '50px';
        }
        thumb = <div className="card-image" style={imageStyle} >
          <span className="card-title" ></span>
        </div>
        var labelStyle = {
          height: '60px',
          lineHeight: '1.1em',
          overflow: 'hidden',
          padding: '10px'
        }
        var clickable={
          cursor:'pointer'
        }
        return <div key={item.id} style={clickable} className="col s6 m4 l3" >
              <div className="card hoverable"
               onClick={self.handleClick(item)} >
                <span>{thumb}</span>
                <div className="card-content" style={labelStyle} >
                {img} {item.name}
                </div>
              </div>
            </div>
      }
      
      const parentItems = this.state.parents.map( function(item,pos){ return itemComp(item,pos,true) });
      const listItems = this.state.data.map( function(item,pos){ return cardComp(item,self.state.parents.length,false) });
      return (
        <main >
            <div className="container">
              <ul className="collection">
              {parentItems}
              </ul>
            <div className="row">
              {listItems}
            </div>
            { this.state.loading ? <img width="100%" src="loading.gif" /> : null }
            </div>
        </main>  
      );
    }
    componentDidMount() {
        this.loadData()
    }
  }

export class MainController extends BiosController {
    public override LoadBiosView(): UIView {

        const CLIENT_ID = '371171867863-sn17pmbfubttmcr7j646qf8uhfvrp4u7.apps.googleusercontent.com';
        const API_KEY = 'AIzaSyDxz6OCqsMIFTzNrSfgRThEubqQaYeJb5o';

       

        const [openPicker, authResponse] = useDrivePicker();
        const handleOpenPicker = () => {
            openPicker({
                clientId: "371171867863-sn17pmbfubttmcr7j646qf8uhfvrp4u7.apps.googleusercontent.com",
                developerKey: "AIzaSyDxz6OCqsMIFTzNrSfgRThEubqQaYeJb5o",
                viewId: "DOCS",
                // token: token, // pass oauth token in case you already have one
                showUploadView: true,
                showUploadFolders: true,
                supportDrives: true,
                multiselect: true,
                // customViews: customViewsArray, // custom view
                callbackFunction: (data) => {
                    if (data.action === 'cancel') {
                        console.log('User clicked cancel/close button')
                    }
                    console.log(data)
                },
            })
        }

        function test() {
            const defaultScopes = ['https://www.googleapis.com/auth/drive.readonly']
            const client = google.accounts.oauth2.initTokenClient({
                client_id: CLIENT_ID,
                scope: [...defaultScopes].join(' '),
                callback: (tokenResponse: any) => {
                    alert(tokenResponse)
                    /*  setAuthRes(tokenResponse)
                     createPicker({ ...config, token: tokenResponse.access_token }) */
                },
            })

            client.requestAccessToken()
        }

        return (
            //Routes()
            ReactView(
                <div>
                    {
                        JSON.stringify(authResponse)
                    }
                    <button onClick={() => handleOpenPicker()}>Open Picker</button>
                    <GoogleDrive></GoogleDrive>
                </div>
            )
        )
    }
}