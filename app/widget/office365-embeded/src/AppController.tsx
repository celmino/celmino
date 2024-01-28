import { is } from '@tuval/core';
import {
    Button,
    HStack,
    Icon,
    Icons,
    MenuButton,
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

declare var windowOpen;

const getPopupPositionProperties = ({
    width = 600,
    height = 600,
}) => {
    const left = (screen.width / 2) - (width / 2);
    const top = (screen.height / 2) - (height / 2);
    return `left=${left},top=${top},width=${width},height=${height}`;
}

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
                    MenuButton()
                        .icon(Icons.Share)
                        .model([
                            {
                                title: 'Linkedin',
                                onClick: () => {
                                    windowOpen(`https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}`, '_blank', getPopupPositionProperties({ width: 600, height: 600 }));
                                }
                            }
                        ])
                    ,
                    ReactView(
                        <a href={url} target="_blank">{
                            HStack(
                                Icon(Icons.ExternalPage)
                            )
                                .cursor('pointer')
                                .background({ default: '', hover: '#CCE5FF' })
                                .allWidth(32).allHeight(32).cornerRadius(4)
                                .render()
                        }
                        </a>
                    ),
                      
                    
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
                                    src={`${url}&action=embedview&wdbipreview=true`}
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
                            Text('Shared URL '),
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
                        .initial({ width: '0px' }).animate({ width: (showSettings || (is.nullOrUndefined(url) && is.nullOrEmpty(url))) ? '300px' : '0px' })
                        .borderLeft('1px solid #C3C6D4')
                    //.border('1px solid gray')

                )
            )

        )
    }


}