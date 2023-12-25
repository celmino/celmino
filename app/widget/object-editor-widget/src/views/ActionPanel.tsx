import { HStack, Icon, Spacer, UIViewBuilder, useConfig, useDialogStack } from "@tuval/forms";
import React from "react";


const fullSize = () => (
    <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" aria-hidden="true" ><path d="M16.25 3H12a.75.75 0 0 0 0 1.5h2.44l-3.47 3.47a.75.75 0 0 0 1.06 1.06l3.47-3.47V8A.75.75 0 0 0 17 8V3.75a.75.75 0 0 0-.75-.75ZM3.75 17H8a.75.75 0 0 0 0-1.5H5.56l3.47-3.47a.75.75 0 1 0-1.06-1.06L4.5 14.44V12A.75.75 0 0 0 3 12v4.25a.75.75 0 0 0 .75.75Z"></path></svg>
)

const activity = () => (
    <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" aria-hidden="true" ><path fill-rule="evenodd" clip-rule="evenodd" d="M5.545 4.07A7.417 7.417 0 1 1 2.583 10a.75.75 0 0 1 1.5 0 5.917 5.917 0 1 0 2.62-4.913h.592a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75v-2.5a.75.75 0 0 1 1.5 0v.733ZM10 5.917a.75.75 0 0 1 .75.75v3.022l1.864 1.864a.75.75 0 0 1-1.061 1.06L9.47 10.53a.75.75 0 0 1-.22-.53V6.667a.75.75 0 0 1 .75-.75Z"></path></svg>
)

const share = () => (
    <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M10.53 2.22a.75.75 0 0 0-1.06 0L6.97 4.72a.75.75 0 0 0 1.06 1.06l1.22-1.22v6.69a.75.75 0 1 0 1.499 0V4.56l1.219 1.22a.75.75 0 1 0 1.06-1.06l-2.499-2.5Z"></path><path d="M5.416 7A2.415 2.415 0 0 0 3 9.417v5.166c0 .225.078.538.17.797.096.267.264.638.537.912.046.046.063.065.085.09.02.022.044.05.099.106.08.085.197.196.363.29.326.182.709.222 1.162.222h9.169c.64 0 1.254-.255 1.707-.708.274-.274.442-.645.537-.912.093-.26.171-.572.171-.797V9.417A2.417 2.417 0 0 0 14.585 7h-.837a.75.75 0 0 0 0 1.5h.837a.916.916 0 0 1 .916.917v5.149c-.001.006-.004.03-.014.074a2.011 2.011 0 0 1-.174.472.57.57 0 0 1-.08.12.916.916 0 0 1-.649.268H5.417c-.282 0-.393-.023-.425-.031a.616.616 0 0 1-.017-.017l-.051-.056-.027-.03a3.96 3.96 0 0 0-.128-.134.569.569 0 0 1-.081-.12 2.039 2.039 0 0 1-.173-.472c-.01-.04-.013-.064-.014-.072V9.416a.917.917 0 0 1 .916-.916h.836a.75.75 0 0 0 0-1.5h-.836Z"></path></svg>
)

const showAttributesPanelIcon = () => (
    <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M15 12.25a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1 0-1.5h1ZM15.75 10a.75.75 0 0 0-.75-.75h-1a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 .75-.75ZM15 6.25a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1 0-1.5h1Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M4.25 3A2.25 2.25 0 0 0 2 5.25v9.5A2.25 2.25 0 0 0 4.25 17h11.5A2.25 2.25 0 0 0 18 14.75v-9.5A2.25 2.25 0 0 0 15.75 3H4.25ZM3.5 5.25a.75.75 0 0 1 .75-.75H11v11H4.25a.75.75 0 0 1-.75-.75v-9.5Zm9 10.25v-11h3.25a.75.75 0 0 1 .75.75v9.5a.75.75 0 0 1-.75.75H12.5Z"></path></svg>
)

const selectAttributesIcon = () => (
    <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M1 10a6 6 0 0 1 6-6h6a6 6 0 0 1 0 12H7a6 6 0 0 1-6-6Zm1.5 0A4.5 4.5 0 0 1 7 5.5h6a4.5 4.5 0 1 1 0 9H7A4.5 4.5 0 0 1 2.5 10Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M13 12.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"></path></svg>
)

const menuIcon = () => (
    <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M6.5 10a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm3.5 1.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"></path></svg>

)

const closeIcon = () => (
    <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M3.728 15.172a.778.778 0 1 0 1.1 1.1L10 11.1l5.172 5.172a.778.778 0 0 0 1.1-1.1L11.1 10l5.172-5.172a.778.778 0 0 0-1.1-1.1L10 8.9 4.828 3.728a.778.778 0 1 0-1.1 1.1L8.9 10l-5.172 5.172Z"></path></svg>

)

const favoriteIcon = () => (
    <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" aria-hidden="true" ><path fill-rule="evenodd" clip-rule="evenodd" d="M9.469 1.532a1.195 1.195 0 0 1 1.062 0c.289.143.444.397.524.542.086.154.175.354.268.562l1.643 3.685 4.013.424c.226.024.444.047.617.08.162.033.452.101.677.332.262.267.383.64.329 1.01-.047.32-.242.545-.354.666-.12.13-.283.276-.452.429l-2.997 2.7.837 3.948c.047.223.093.437.114.613.02.163.044.46-.106.746-.173.33-.49.562-.859.624-.318.054-.593-.06-.743-.13-.16-.074-.35-.184-.547-.297L10 15.45l-3.496 2.016c-.197.113-.386.223-.547.297-.15.07-.424.184-.742.13a1.195 1.195 0 0 1-.86-.624c-.15-.286-.125-.582-.105-.746.02-.176.066-.39.114-.613l.837-3.947-2.998-2.701c-.169-.153-.331-.3-.452-.429-.112-.121-.306-.347-.353-.666-.054-.37.067-.743.328-1.01.226-.23.516-.3.678-.331.173-.034.39-.057.617-.081l.029-.003 3.984-.42 1.63-3.66.013-.026c.092-.208.181-.408.268-.562.08-.145.235-.399.524-.542Zm.53 1.82-1.604 3.6-.012.029c-.044.1-.122.279-.254.425a1.195 1.195 0 0 1-.402.292c-.18.08-.375.1-.483.11-.011 0-.021.002-.03.003l-3.92.414 2.928 2.639.023.02c.08.072.227.202.326.373.083.145.136.306.153.472a1.56 1.56 0 0 1-.045.493l-.006.03-.818 3.857 3.415-1.97.026-.015c.094-.055.263-.155.456-.196.163-.034.332-.034.496 0 .193.041.362.14.455.196l.027.015 3.415 1.97-.818-3.857a1.56 1.56 0 0 1-.051-.524c.017-.165.07-.326.153-.471.098-.17.245-.3.326-.373a1.87 1.87 0 0 0 .023-.02l2.928-2.64-3.92-.413-.03-.003a1.56 1.56 0 0 1-.483-.11 1.195 1.195 0 0 1-.402-.292 1.558 1.558 0 0 1-.266-.454L10 3.352Z"></path></svg>

)

const findIcon = () => (

    <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.75 15.835a7.055 7.055 0 0 0 4.378-1.515l3.782 3.771a.835.835 0 0 0 1.18-1.182l-3.78-3.768a7.085 7.085 0 1 0-5.56 2.694ZM3.335 8.75a5.415 5.415 0 1 1 10.83 0 5.415 5.415 0 0 1-10.83 0Z"></path></svg>

)

const copyLinkIcon = () => (


    <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="m10.063 10.808 2.06-.03c.55-.001 1.075-.218 1.463-.604a2.054 2.054 0 0 0 .001-2.909 2.07 2.07 0 0 0-1.461-.602L6.757 6.66c-.527 0-1.034.2-1.417.562A2.043 2.043 0 0 0 4.7 8.6l-.011.129a.839.839 0 0 1-1.433.574.829.829 0 0 1-.238-.591A2.276 2.276 0 0 1 3 8.483a3.704 3.704 0 0 1 1.18-2.457 3.739 3.739 0 0 1 2.549-.994L12.133 5c.964.04 1.875.45 2.542 1.142a3.71 3.71 0 0 1-.003 5.154 3.754 3.754 0 0 1-2.543 1.145l-2.02.024a.836.836 0 0 1-.798-.806.83.83 0 0 1 .752-.851Zm-5.024.932a3.726 3.726 0 0 1 1.1-2.628c.7-.697 1.65-1.09 2.64-1.094l2.02-.025a.836.836 0 0 1 .799.807.83.83 0 0 1-.752.85l-2.038.007c-.548 0-1.074.218-1.462.604a2.054 2.054 0 0 0-.001 2.909 2.07 2.07 0 0 0 1.461.601l5.369.004c.527 0 1.035-.201 1.417-.562.383-.361.612-.855.64-1.379l.011-.13a.83.83 0 0 1 .845-.822.837.837 0 0 1 .826.84 3.712 3.712 0 0 1-1.194 2.714 3.747 3.747 0 0 1-2.546.996l-5.375.003a3.756 3.756 0 0 1-2.646-1.075 3.72 3.72 0 0 1-1.114-2.62Z"></path></svg>

)

export const ActionsPanelButton = (icon, action = void 0) => (
    HStack(

        Icon(icon),
    )
        .foregroundColor('rgb(109, 122, 131)')
        .cursor('pointer')
        .cornerRadius(6)
        .padding(10)
        .background({ hover: 'rgba(109, 122, 131, 0.15)' })
        .transition('all .15s ease-out')
        .width(28).height(28).onClick(() => {
            action()
        })
)

export const ActionPanel = () => UIViewBuilder(() => {
    const { closeDialog } = useDialogStack();
    return (
        HStack({ spacing: 5 })(
            /*   _StatusMarker(task?.stage_id),
                 EditableHeader(task?.title).size(EditableHeadingSizes.MEDIUM), */
            ActionsPanelButton(findIcon),
            ActionsPanelButton(favoriteIcon),
            ActionsPanelButton(copyLinkIcon),



            Spacer(),

            ActionsPanelButton(fullSize),
            ActionsPanelButton(activity),
            ActionsPanelButton(share),
            ActionsPanelButton(showAttributesPanelIcon),
            ActionsPanelButton(selectAttributesIcon),
            ActionsPanelButton(menuIcon),
            ActionsPanelButton(closeIcon, () => {
                closeDialog();
            }),


            /*  Text('Close').onClick(() => {
                 navigate(`/app/${getAppFullName()}/team/${team_id}/workspace/${workspace_id}/folder/${folder_id}/applet/${applet_id}/scope/${scope_id}/view/${view_id}`)
             }) */
        ).height().padding(8)
    )
})

