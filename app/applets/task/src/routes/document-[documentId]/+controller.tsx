import { UIController, UIView, useParams, Routes, Text, UIWidget, VStack, ReactView, DialogStack } from "@tuval/forms";
import { ActionPanel } from "../../views/ActionPanel";
import { ViewHeader } from "../../views/ViewHeader";
import React from "react";

export class DocumentController extends UIController {


    public override LoadView(): UIView {
        const { documentId } = useParams();
        return (
            ReactView(
                <DialogStack>
                    {
                        VStack(
                            ActionPanel(),
                            ViewHeader('test'),
                            UIWidget('com.tuvalsoft.widget.editorjs')
                                .config({})
                        )
                        .background('white')
                        .render()
                    }
                </DialogStack>
            )

        )
    }

}