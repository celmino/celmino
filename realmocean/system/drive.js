function initClient() {
    gapi.client.init({
      apiKey: 'AIzaSyDxz6OCqsMIFTzNrSfgRThEubqQaYeJb5o',
      clientId: '371171867863-sn17pmbfubttmcr7j646qf8uhfvrp4u7.apps.googleusercontent.com',
      discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"],
      scope: 'https://www.googleapis.com/auth/drive.metadata.readonly'
    }).then(function() {
      // Handle the authorization flow.
      // You can now make API calls.
    });
  }