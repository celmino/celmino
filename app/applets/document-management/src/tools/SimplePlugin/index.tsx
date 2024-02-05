import { useGetMe, Services } from '@realmocean/sdk';
import { Button, HStack, Icon, ReactView, Text, UIView, UIViewBuilder, UIWidget, cLeading, useParams } from '@tuval/forms';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { SelectTreeDialog } from '../../dialogs/SelectTreeDialog';


const DocumentLinkIcon = () => (
  <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" aria-hidden="true" ><g><path d="M6 4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h4.286v-4.286c0-.789.64-1.428 1.428-1.428H16V12h-4v4l4-4V6a2 2 0 0 0-2-2H6Z"></path></g></svg>
)

const CircleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="m10 17.55-1.77 1.72a2.47 2.47 0 0 1-3.5-3.5l4.54-4.55a2.46 2.46 0 0 1 3.39-.09l.12.1a1 1 0 0 0 1.4-1.43 2.75 2.75 0 0 0-.18-.21 4.46 4.46 0 0 0-6.09.22l-4.6 4.55a4.48 4.48 0 0 0 6.33 6.33L11.37 19A1 1 0 0 0 10 17.55ZM20.69 3.31a4.49 4.49 0 0 0-6.33 0L12.63 5A1 1 0 0 0 14 6.45l1.73-1.72a2.47 2.47 0 0 1 3.5 3.5l-4.54 4.55a2.46 2.46 0 0 1-3.39.09l-.12-.1a1 1 0 0 0-1.4 1.43 2.75 2.75 0 0 0 .23.21 4.47 4.47 0 0 0 6.09-.22l4.55-4.55a4.49 4.49 0 0 0 .04-6.33Z" id="link"></path></svg>
)
export class SimpleImage {
  api: any;
  readOnly: any;
  titlePlaceholder: any;
  messagePlaceholder: any;
  info: any;
  config: any;
  document: any;
  selected: boolean = false;
  view: () => UIView;
  wrapper: HTMLDivElement;

  static get toolbox() {
    return {
      title: 'Link To Document',
      icon: '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" width="20" height="20" class="ifqe6sa" fill="currentColor" aria-hidden="true" style="display: inline-block; position: relative; top: 0px; left: 0px;"><g><path d="M6 4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h4.286v-4.286c0-.789.64-1.428 1.428-1.428H16V12h-4v4l4-4V6a2 2 0 0 0-2-2H6Z"></path></g></svg>'
    };
  }



  constructor({ data, config, api, readOnly }) {
    this.api = api;
    this.readOnly = readOnly;

    this.config = config;

    this.view = config.view;

    this.info = data?.info;
    this.selected = data?.selected;

    /* console.log('AAAA')
    console.log(args) */

    if (this.info != null) {
      Services.Databases.getDocument(this.info.workspaceId, this.info.appletId, 'dm_tree', this.info.item.$id).then((document) => {

        this.document = document;
        this.renderView();
      });
    }

  }

  render() {
    this.wrapper = document.createElement('div');

    if (!this.selected) {
      SelectTreeDialog.Show(this.config.workspaceId).then((info) => {
        this.info = info;
        this.selected = true;
        Services.Databases.getDocument(this.info.workspaceId, this.info.appletId, 'dm_tree', this.info.item.$id).then((document) => {
          this.document = document;
          this.renderView();
        });
      })

    } else {
      /*   Services.Databases.getDocument(this.info.workspaceId, this.info.appletId, 'dm_tree', this.info.item.$id).then((document) => {
          this.document = document; */
      this.renderView();
      //   });

    }



    return this.wrapper;
  }
  public renderView() {
    if (this.wrapper != null) {
      const root = ReactDOM.createRoot(
        this.wrapper
      );


      const view = HStack({ alignment: cLeading, spacing: 10 })(
        HStack(
          Icon(DocumentLinkIcon)
        ).width().height().foregroundColor('#4568FB'),
        Text(this.document?.name),
        HStack(
          Icon(CircleIcon)
        ).width().height().foregroundColor('#6D7A83'),
      )
       // .background('#6D7A83')
        .cornerRadius(10)
        .width().height()
        .padding('.4em 0')
        .cursor('pointer')

        .onClick(() => {
          this.config.openDialog({
            title: this.document?.name,
            view:
              UIViewBuilder(() => {
                return (
                  UIWidget('com.tuvalsoft.viewer.document')
                    .config({
                      workspaceId: this.info.workspaceId,
                      appletId: this.info.appletId,
                      documentId: this.info.item.$id
                    })
                )
              })




          })
        })


      root.render(view.render());
    }


  }
  validate(savedData) {
    return this.selected;
  }

  save(blockContent) {
    return {
      info: this.info,
      selected: this.selected
    };

  }
}