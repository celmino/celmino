import { is } from '@tuval/core';
import {
    Button,
    HStack,
    Icon,
    Icons,
    ReactView,
    ScrollView,
    Spacer,
    Spinner,
    Text,
    TextField,
    UIFormController,
    UIRouteOutlet,
    UIView,
    UIWidget,
    VStack,
    WorkProtocol,
    cAll,
    cTopLeading,
    cVertical,
    getAppFullName,
    useEffect,
    useNavigate,
    useParams,
    useProtocol,
    useState
} from '@tuval/forms';
import React from 'react';
import { EmptyView } from './views/EmptyView';
import Route from 'route-parser';


export class MyTestController extends UIFormController {

    public override LoadView(): UIView {

        const { onChange = void 0, defaultValue = null } = this.props.config || {};

        const [showSettings, setShowSettings] = useState<any>(false);
        const [url, setUrl] = useState<any>(defaultValue?.url);



        const mustShowSettings = !!(showSettings || (is.nullOrUndefined(url) && is.nullOrEmpty(url)));

        return (
            VStack(
                HStack(
                    Spacer(),
                    HStack(
                        Icon(Icons.Settings)
                    )
                        .cursor('pointer')
                        .background({ default: '', hover: '#CCE5FF' })
                        .allWidth(32).allHeight(32).cornerRadius(4)
                        .onClick(() => setShowSettings(!showSettings))
                )
                    .height()
                    .padding(8)
                    .padding(cVertical, 4)
                    .borderBottom('1px solid #E8EAED')
                ,

                HStack(
                    HStack(
                        (is.nullOrUndefined(url) && is.nullOrEmpty(url)) ? EmptyView() :
                            ReactView(
                                <iframe
                                    title="integration"
                                    // src={`https://docs.google.com/spreadsheets/d/e/2PACX-1vSx_uSnXuXJxx6pu9gV6dYZKGF8PIzj4FGq7xjE5N9yBeAim-KaKFhg-VMUjJUW83DwzLw6jbRmJMwv/pubhtml`}
                                    src={url}
                                    data-embed-supports-dark-mode="false"
                                    width="100%"
                                    height="100%"
                                    allow="microphone; camera; fullscreen"
                                    //@ts-ignore
                                    frameborder="0"
                                    //@ts-ignore
                                    referrerpolicy="no-referrer">
                                </iframe>
                            )
                    ),
                    HStack(
                        VStack({ alignment: cTopLeading, spacing: 5 })(
                            Text('Google Sheets URL').fontSize(14).fontWeight('500').whiteSpace('nowrap'),
                            Text('Enter your Google Sheets URL').fontSize(14).whiteSpace('nowrap'),


                            TextField().defaultValue(url).value(url)
                                .onChange((e) => {
                                    setUrl(e);
                                    onChange({
                                        url: e
                                    })
                                }),
                        ).padding()
                    )
                        .width(null)
                        .overflow('hidden')
                        .initial({ width: '0px', 'min-width': '0px' }).animate({ width: showSettings ? '300px' : '0px', 'min-width': showSettings ? '300px' : '0px' })
                        .borderLeft('1px solid #C3C6D4')
                    //.border('1px solid gray')

                )
            )

        )
    }


}