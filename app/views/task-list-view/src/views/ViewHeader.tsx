
import { EditableHeader, EditableHeadingSizes, Fragment, HStack, ReactView, UIViewBuilder, cLeading, useEffect } from "@tuval/forms";

import { TextConsole, Umay, is } from "@tuval/core";
import {useRef} from 'react'
import React from "react";


const fontFamily = 'ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
export const ViewHeader = (header, onHeaderChange = void 0) => UIViewBuilder(() => {

    
    /*  const { access_type, team_id, applet_id, view_id } = useParams();
 
     const navigate = useNavigate(); */


/* useEffect(()=> {
    //debugger
     const umay = new Umay(); 
     umay.StartLoop();
     umay.Wait(2)
     umay.Task(() => console.log('Task 1'));
     umay.EndLoop();
     umay.Run();
}, []) */
     

    // umay.Task(() => console.log('Task 1'));
    /*  umay.WaitP( new Promise((resolve)=> {
         setTimeout(()=> resolve(null), 10000)
     }), ()=> void 0) */
    // umay.Task(() => StartBios(MainController));
     //umay.Task(() => console.log('Task 2'));
 
     

    return (
        HStack({ alignment: cLeading, spacing: 5 })(
                is.string(header) ?
                    EditableHeader(header).size(EditableHeadingSizes.MEDIUM)
                        .onChange((e) => onHeaderChange(e))
                        .fontSmoothing('auto')
                        .foregroundColor('#212526')
                        .fontSize(28).fontFamily(fontFamily).fontWeight('500')
                        .lineHeight('1.25')
                        .kerning('-0.003em')
                    :
                    is.function(header) ? header() : Fragment(),
            )
            .background('white')
            .height().padding(8)
            .borderBottom('1px solid #F2F2F2') 
     

    )

})