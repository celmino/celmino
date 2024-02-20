import {
    ForEach, HStack, Icon, Icons, Spinner, Text, UIController,
    UINavigate, UIView, WorkProtocol, cHorizontal, cLeading,
    getAppFullName, useNavigate, useProtocol, useState, str2rgb, ReactView
} from '@tuval/forms';
import { TabItem } from './views/TabItem';
import { SelectAnalyseDialog } from './SelectAnalyseDialog';
import { is } from '@tuval/core';
import { Models } from '@realmocean/sdk';



import { getAssetUrlsByMetaUrl } from '@tldraw/assets/urls'

//const assetUrls = getAssetUrlsByMetaUrl()

import React from 'react';

import { BaseBoxShapeUtil, Editor, HTMLContainer, TLBaseShape, TLEditorComponents, TLUiOverrides, Tldraw, toDomPrecision, toolbarItem, useTransform } from '@tldraw/tldraw'
import './css/global.scss'
import { useCallback, useRef } from 'react'
import { CatDogUtil } from './custom/my-shape/my-shape-util';
import { CatDogTool } from './custom/my-shape/my-shape-tool';

const colors = [
    '#4A4A4A',
    '#6A849B',
    '#BEC5CC',
    '#D40915',
    '#E72065',
    '#9C2BAF',
    '#673DB6'


]

const customShapeUtils = [CatDogUtil]
const customTools = [CatDogTool]

export const uiOverrides: TLUiOverrides = {
	tools(editor, tools) {
		// Create a tool item in the ui's context.
		(tools as any).catdog = {
			id: 'catdog',
			icon: 'color',
			label: 'Catdog',
			kbd: 'c',
			onSelect: () => {
				editor.setCurrentTool('catdog')
			},
		}
		return tools
	},
	toolbar(_app, toolbar, { tools }) {
		// Add the tool item from the context to the toolbar.
		toolbar.push(toolbarItem(tools.catdog))
		return toolbar
	},
}

export class MyTestController extends UIController {


    public override LoadView(): UIView {

        const { views, view_id, actions, selectedIndex = 0,
            onChange = void 0, isLoading = false } = this.props.config || {};

        const [selectedIndexState, setSelectedIndexState] = useState(selectedIndex);

        //const selectedIndex = views?.findIndex(view => view.id === view_id);

        return (
            ReactView(

                    <Tldraw
                        shapeUtils={customShapeUtils}
                        // Pass in the array of custom tools
                        tools={customTools}
                        overrides={uiOverrides}
                    />
            )
        )
    }
}

