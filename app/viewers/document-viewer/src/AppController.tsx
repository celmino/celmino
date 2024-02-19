import { UIController, UIView, useParams, Routes, Text, UIWidget, VStack, ReactView, DialogStack, Fragment, cTopLeading } from "@tuval/forms";

import React from "react";
import { useGetDocument, useUpdateDocument } from "@realmocean/sdk";
import { is } from "@tuval/core";
import { ActionPanel } from "./views/ActionPanel";
import { DocumentHeader } from "./views/ViewHeader";
import { SimpleImage } from "./tools/SimplePlugin";
import FormBuilder from "editorjs-form-builder";
import EmailQuestion from "./tools/EmailQuestion";

const onChange = (data) => {
    console.log(data); // 
  };
  
  const initialData = [
      {
          "id": "8Z7TsKEv7e",
          "type": "textQuestion",
          "data": {
              "label": "First Name",
              "help": "",
              "placeholder": "Eg Uche",
              "required": true
          }
      },
      {
          "id": "pCtsEP685y",
          "type": "multipleChoiceQuestion",
          "data": {
              "label": "Countries",
              "help": "",
              "required": false,
              "multipleChoice": false,
              "options": [
                  {
                      "id": "d077745e-7cb3-4aaa-a9f6-bd8f60f5578a",
                      "label": "Niger"
                  },
                  {
                      "id": "722c49bb-1a03-4ae8-b332-2a84c1bcb112",
                      "label": "Ghana"
                  },
                  {
                      "id": "874a231a-300e-4035-b435-234b502e7523",
                      "label": "Liberia"
                  }
              ]
          }
      },
      {
          "id": "7ZcdGLmOCO",
          "type": "emailQuestion",
          "data": {
              "label": "Email",
              "help": "",
              "placeholder": "your email",
              "required": true
          }
      },
      {
          "id": "hcuBk3QFKb",
          "type": "numberQuestion",
          "data": {
              "label": "Age",
              "help": "",
              "placeholder": "",
              "required": true
          }
      }
  ]

export class MyTestController extends UIController {


    public override LoadView(): UIView {

        const { workspaceId, appletId, documentId = this.props.documentId } = this.props.config;
        const { document, isLoading: isDocumentLoading } = useGetDocument({
            projectId: workspaceId,
            databaseId: appletId,
            collectionId: 'dm_documents',
            documentId: documentId
        })

        const { document: content, isLoading } = useGetDocument({
            projectId: workspaceId,
            databaseId: appletId,
            collectionId: 'dm_document_contents',
            documentId: documentId
        })

        const { updateDocument } = useUpdateDocument(workspaceId);

        return (
            (isDocumentLoading || isLoading) ? Fragment() :

                VStack({ alignment: cTopLeading })(
                    ActionPanel(),
                    DocumentHeader(document?.name, (e) => {
                        updateDocument({
                            databaseId: appletId,
                            collectionId: 'dm_documents',
                            documentId: documentId,
                            data: {
                                name: e
                            }
                        })
                    }),
                  /*   ReactView(
                        <FormBuilder onChange={onChange} initialData={initialData} />
                    ), */
                    UIWidget(document?.type)
                        .config({
                            defaultValue: is.nullOrEmpty(content?.content) ? null : JSON.parse(content.content),
                            tools: {
                                image: SimpleImage,
                                FormEmail: EmailQuestion
                            },
                            onChange: (data) => {
                                console.log(data)
                                updateDocument({
                                    databaseId: appletId,
                                    collectionId: 'dm_document_contents',
                                    documentId: documentId,
                                    data: {
                                        content: JSON.stringify(data)
                                    }
                                })
                            }
                        })
                )
                    .background('white')
        )

    }

}