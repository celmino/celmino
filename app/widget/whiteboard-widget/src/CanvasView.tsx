
import { Excalidraw } from "@excalidraw/excalidraw";
import { ExcalidrawImperativeAPI } from "@excalidraw/excalidraw/types/types";
import { deepEqual, is } from "@tuval/core";
import { ReactView, UIViewBuilder, useEffect, useState } from "@tuval/forms";
import React, { useCallback } from "react";
import { restoreLibraryItems } from "@excalidraw/excalidraw";
import { LibraryItems, NetworkLibraryItems } from "./LibraryItems";


export const CanvasView = ({ id, initialData, onSaveProject }) =>
    UIViewBuilder(() => {

        if (is.string(initialData)) {
            initialData = JSON.parse(initialData)
        }
        const [
            prevData,
            setPrevData
        ] = useState<any>(initialData);

        console.log(initialData)

        useEffect(() => {

            //  restoreElements(initialData.elements , null);
            const id = setInterval(() => {

                if (excalidrawAPI) {
                    let data = {
                        files: {},
                        source: "http://localhost:5050",
                        type: "excalidraw",
                        version: 2,
                        appState: { ...excalidrawAPI.getAppState() },
                        elements: excalidrawAPI.getSceneElements()
                    }

                    delete data.appState['collaborators'];


                    //serializeAsJSON(excalidrawAPI.getSceneElements(), excalidrawAPI.getAppState(), excalidrawAPI.getFiles(), 'local');

                    if (!deepEqual(data, prevData)) {
                        onSaveProject(data);
                        setPrevData(data);
                    }
                }
            }, 2000)

            return () => clearInterval(id)
        })

        const [
            excalidrawAPI,
            setExcalidrawAPI
        ] = useState<ExcalidrawImperativeAPI | null>(null);

        const handleOnChange = useCallback(() => {
            console.log('onchange')
            //setIsDirty(true)
        }, [])


        return (
            ReactView(
                /*  <Editor id={id} document={document} showUI={true} onSaveProject={onSaveProject} /> */
                <Excalidraw
                    initialData={initialData}
                    //  onChange={handleOnChange}
                    ref={(api: ExcalidrawImperativeAPI) => {
                        const libraryItems = [...LibraryItems, ...NetworkLibraryItems];
                          api.updateLibrary({
                            libraryItems:libraryItems as any,
                            openLibraryMenu: true,
                          });
                        setExcalidrawAPI(api)
                    }}
                />
            ).frame(true).width('100%').height('100%')
        )
    })





