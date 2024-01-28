import { HStack, Heading, ReactView, Text, TextAlignment, UIImage, UIViewBuilder, VStack, cLeading, cTopLeading } from "@tuval/forms";
import { Step1Image } from "../resource/Step1Image";
import { Step2Image } from "../resource/Step2Image";
import React from "react";


export const EmptyView = () => UIViewBuilder(() => {

    return (
        VStack({ alignment: cTopLeading })(  
            UIImage('/images/com.document.view.trello/empty_image.svg')
          /*  HStack({alignment:cLeading, spacing: 20 })(
                HStack(
                    Text('Step 1')
                        .fontSize(30)
                        .fontWeight('500')
                )
                   
                    .allWidth(200),
                HStack({alignment:cLeading, spacing: 100})(
                    Text('File -> Share -> Publish To Web')
                    .fontSize(20)
                    .fontWeight('500')
                    .multilineTextAlignment(TextAlignment.leading),
                    UIImage(Step1Image).imageHeight('100%').imageWidth('100%').maxWidth(639).maxHeight(264)
                )
                    .padding(50)
                    .overflow('hidden')
                   
                    .background('#DCDFEC')
                    .cornerRadius(10)
            )
            
            .height()
            .padding(20),

            HStack({alignment:cLeading, spacing: 20 })(
                HStack(
                    Text('Step 2')
                        .fontSize(30)
                        .fontWeight('500')
                )
                   
                    .allWidth(200),
                HStack({alignment:cLeading, spacing: 100})(
                    Heading('Click Publish and copy the link').ellipsis(true).ellipsisMaxLines(2).h4()
                    ,
                    UIImage(Step2Image).imageHeight('100%').imageWidth('100%').maxWidth(550).maxHeight(540)
                )
                    .padding(50)
                    .overflow('hidden')
                   
                    .background('#DCDFEC')
                    .cornerRadius(10)
            )
            
            .height()
            .padding(20) */
        )
        .maxWidth('80%')
    )
})