import {
  HStack,
  Text,
  UIController, UIView,
  UIViewBuilder,
  UIWidget,
  VStack,
  cHorizontal,
  cTopLeading,
  useDialogStack,
  useEffect,
  useState
} from '@tuval/forms';
import { useRef } from 'react';
import ReactDOM from 'react-dom/client';

import {
  BeforeCellFormatArgs, BeforeCellUpdateArgs, BeforeHyperlinkArgs, BeforeSelectEventArgs, CellEditEventArgs, CellModel, CellRenderEventArgs, CellSaveEventArgs, MenuSelectEventArgs, SelectEventArgs, Spreadsheet,
  SpreadsheetModel, UISpreadsheet, getCell, getRangeIndexes, getSelectedRange, setCell
} from '@realmocean/spreadsheet';
import { deepEqual } from '@tuval/core';
import React from 'react';
import { DynoDialog } from './Dialog';

export class MyTestController extends UIController {
  public override LoadView(): UIView {
    const { openDialog } = useDialogStack();

    const { onChange = void 0, defaultValue = null, workspaceId, height = '100%', onSelf = () => void 0 } = this.props.config || {};

    console.log('defaultValue')
    console.log(defaultValue)

    const [prevValue, setPrevValue] = useState<any>(null);


    useEffect(() => {
      const timerID = setInterval(() => {
        if (spreadsheetRef.current != null && !(spreadsheetRef as any).loading) {
          spreadsheetRef.current.saveAsJson().then((content) => {

          
            console.log("Content")
            console.log(content);
            console.log("PrevValue")
            console.log((spreadsheetRef as any).prevContent);
            if (!deepEqual(content, (spreadsheetRef as any).prevContent)) {
              onChange(content);
              console.log('content')
              console.log(content)
            }
            (spreadsheetRef as any).prevContent = content;

          })
        }
      }, 5000)
      return () => {
        clearInterval(timerID);

      };
    }, []);
    // ...


    const promise = () => new Promise((resolve) => {
      resolve('dsfdf')
    })
    function roundDownHandler(value) {
      return value;
    }


    // const [spreadsheet, setSpreadsheet] = useState<any>();
    const spreadsheetRef = useRef<Spreadsheet>();
    //const aa = ()=> alert(spreadsheet?.toString());
    return (
      VStack({ alignment: cTopLeading })(
        UISpreadsheet({
          height,
          allowOpen: true,
          showRibbon: true,
          cellStyle: {
            fontFamily: 'Roboto',
          },
          
          openComplete: (e) => {


            (spreadsheetRef as any).loading = true;
            if (spreadsheetRef.current != null) {
              spreadsheetRef.current.saveAsJson().then((content) => {
                (spreadsheetRef as any).prevContent = content;
                (spreadsheetRef as any).loading = false;
              })
            }
          },


          contextMenuBeforeOpen: (args): void => {
            if (args.element.id === (spreadsheetRef.current as any).element.id + '_contextmenu') {
              spreadsheetRef.current.addCustomFunction(roundDownHandler, 'DOCUMENT');
              // To add context menu items.
              spreadsheetRef.current.addContextMenuItems([{ text: 'Releationship', id: 'Mert' }], 'Paste Special', false);
              //To pass the items, Item before / after that the element to be inserted, Set false if the items need to be inserted before the text.
            }
          },
          beforeHyperlinkClick: (args: BeforeHyperlinkArgs) => {
            const info = JSON.parse(args.hyperlink as any);
            openDialog({
              title: info.name,
              view:

                UIViewBuilder(() => {
                  return (
                    UIWidget(info.viewer)
                      .config({
                        workspaceId: info.workspaceId,
                        appletId: info.appletId,
                        documentId: info.$id
                      })
                  )
                })




            })
            args.cancel = true;
          },
          /*  select: (args: BeforeSelectEventArgs) => {
             let range = getSelectedRange(spreadsheetRef.current.getActiveSheet())
 
           }, */
          contextMenuItemSelect: (args: MenuSelectEventArgs) => {
            if (args.item.id === 'Mert') {

              DynoDialog.Show(workspaceId).then((info) => {
                let range = getSelectedRange(spreadsheetRef.current.getActiveSheet());
                spreadsheetRef.current.addHyperlink(JSON.stringify({
                  type: info.item.type,
                  workspaceId: info.workspaceId,
                  appletId: info.appletId,
                  $id: info.item.$id,
                  name: info.item.name,
                  viewer: info.item.viewer
                }), range, info.item.name);
              })

              // spreadsheetRef.current.updateCell({ formula: '=DOCUMENT(23432434)' });

              //const ranges = getRangeIndexes(range);
              /*   const cell = getCell(ranges[0], ranges[1],spreadsheetRef.current.getActiveSheet());
                 console.log(cell) */
              //console.log(ranges)
              //setCell(ranges[0], ranges[1], spreadsheetRef.current.getActiveSheet(), {value:'#Document' }, false);

            }
          },
          cellSave: (args: CellSaveEventArgs) => {
            //alert()
          }
          /*  beforeCellRender: (args: CellRenderEventArgs) => {
             if (args.cell?.value !== undefined) {
               const root = ReactDOM.createRoot(
                 args.element
               );
               const element = HStack(
                 Text(args.cell?.value)
               )
                 .onClick(() => {
                   openDialog({
                     title: 'Open',
                     view: Text(args.cell?.value)
                   })
                 })
                 .render()
               root.render(element);
               
             }
 
           }, */

          /*  cellSave: (args: CellSaveEventArgs) => {
 
             if (args.value !== undefined) {
               const root = ReactDOM.createRoot(
                 args.element
               );
               const element = HStack(
                 Text(args.value)
               )
                 .onClick(() => {
                   openDialog({
                     title: 'Open',
                     view: Text(args.value)
                   })
                 })
                 .render()
               root.render(element);
             }
 
           } */


        } as SpreadsheetModel)
          /* .cellSave( (e) => {
              alert(spreadsheet?.toString())
          }
          ) */
          .model(defaultValue?.jsonObject)
          // .model(content)
          .self((_self) => {
            spreadsheetRef.current = _self;
            onSelf(_self);
          })
      )

    ).overflow('hidden')

  }

}

