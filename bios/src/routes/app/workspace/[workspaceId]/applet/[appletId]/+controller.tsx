import { useGetDocument } from '@realmocean/sdk';
import { ModuleLoader } from '@tuval/core';
import { cTopLeading, HStack, ReactView, Spinner, Text, UIFormController, UIView, useEffect, useLocation, useParams, useState, VStack } from '@tuval/forms';
import React, { Fragment } from 'react';
import usePromise from "react-promise-suspense";
//import { useGetApplet } from '@celmino/sdk';

export interface IOPA {
    name: string;
    content: string;
    onSave: Function
    controller: Function;
}
export class OPA extends React.Component<any, any> {
    public get Name(): string {
        return this.props.name;
    }
    constructor(props) {
        super(props);
        this.state = {};
    }
    public render(): React.ReactNode {
        return (
            <this.props.controller content={this.props.content} onSave={this.props.onSave}></this.props.controller>
        )
    }
}

export function getAppName() {
    try {
        let regex = /\/app\/com\.([A-Za-z]+)\.([A-Za-z]+)\.([A-Za-z]+)/i;

        // Alternative syntax using RegExp constructor
        // const regex = new RegExp('(?:^\\/app\\/+|\\G(?!^)\\.)\\K\\w+', 'g')

        const str = window.location.href;

        let m;
        console.log(m = regex.exec(str))
        return m[3];
    }
    catch {
        return '';
    }
}

const AppCache = {}
export const Paths = {}

export const OpaLoader = ({ opa_name }) => {
    //const { opa_name } = useParams();
    //let opa_name = 'com.tuvalsoft.opa.task';
    const location = useLocation();


    /* if (`/app/${app_name}` === location.pathname && Paths[app_name] != null && Paths[app_name] !== `/app/${app_name}`) {
        console.log(`/app/${app_name}` === location.pathname)
        return (<Navigate to={Paths[app_name]}></Navigate>)
    } else {
        Paths[app_name] = location.pathname;
    } */

    const controllerPromise = new Promise((resolve, reject) => {
        if (AppCache[opa_name]) {
            resolve(AppCache[opa_name]);
        } else {
            const app_path = `/realmocean/store/app/open-testing/${opa_name}`;
            // alert(app_path)
            const app_path_local = `/system/${opa_name}`;
            ModuleLoader.LoadBundledModule(app_path_local, opa_name).then((_app: any) => {
                if (_app != null) {
                    const app = new _app();
                    AppCache[opa_name] = app.GetMainController();
                    resolve(app.GetMainController());
                } else {

                }
            });
        }

        /*   setTimeout(() => {
              const app = AppStore.find(app => app.name === app_name)
              resolve(app.controller)
          }, 2000
          ) */
    })

    const fetchController = input => controllerPromise.then(res => res);
    const contoller: any = usePromise(fetchController, [opa_name]);

    return (<OPA name={opa_name} controller={contoller} ></OPA>)
};

export class AppletController extends UIFormController {

    public override LoadView(): UIView {

        const {workspaceId, appletId } = useParams();

        const { document: applet, isLoading } = useGetDocument({
            projectId:workspaceId,
            databaseId:'workspace',
            collectionId:'applets',
            documentId: appletId
        })


        return (
            isLoading ? Text('Applet Loading...') :
                VStack(
                    HStack({ alignment: cTopLeading })(
                        // LeftSideMenuView(''),
                        HStack(
                            //  NotesLeftMenu(note_id),
                            VStack(
                                VStack({ alignment: cTopLeading })(
                                    HStack({ alignment: cTopLeading })(
                                        ReactView(
                                            <React.Suspense fallback={
                                                <Fragment>
                                                    {
                                                        VStack(
                                                            Spinner()
                                                        ).render()
                                                    }
                                                </Fragment>
                                            } >
                                                <ErrorBoundary>
                                                    <OpaLoader opa_name={applet.type}></OpaLoader>
                                                </ErrorBoundary>
                                            </React.Suspense>
                                        ).frame(true).width('100%').height('100%')
                                    )
                                ).overflow('hidden')



                            ).background('white')
                        )
                    ).background('#FAFBFC')

                )


        )

    }

}


/**
 * NEW: The error boundary has a function component wrapper.
 */
function ErrorBoundary({ children }) {
    const [hasError, setHasError] = useState(false);
    const location = useLocation();
    useEffect(() => {
        if (hasError) {
            setHasError(false);
        }
    }, [location.key]);
    return (
        /**
         * NEW: The class component error boundary is now
         *      a child of the functional component.
         */
        <ErrorBoundaryInner
            hasError={hasError}
            setHasError={setHasError}
        >
            {children}
        </ErrorBoundaryInner>
    );
}



/**
 * NEW: The class component accepts getters and setters for
 *      the parent functional component's error state.
 */
class ErrorBoundaryInner extends React.Component<any, any> {
    private ref;
    constructor(props) {
        super(props);
        this.state = { hasError: false };
        this.ref = React.createRef();
    }

    static getDerivedStateFromError(_error) {
        return { hasError: true };
    }

    componentDidUpdate(prevProps, _previousState) {
        if (!this.props.hasError && prevProps.hasError) {
            this.setState({ hasError: false });
        }
    }

    componentDidCatch(_error, _errorInfo) {

        if (_errorInfo && _errorInfo.componentStack) {
            // The component stack is sometimes useful in development mode
            // In production it can be somewhat obfuscated, so feel free to omit this line.
            //console.log(_errorInfo.componentStack);
        }


        _error['Hey'] = 'sdfsdf'
        _error['Mert'] = 'sdfsdf'


        //Tracker.track(_error);


        this.props.setHasError(true);
        this.setState({ errorText: JSON.stringify(_error) });
    }

    render() {
        return this.state.hasError
            ? <p>{this.state.errorText}</p>


            : this.props.children;
    }
}