import { WorkProtocol } from "@tuval/forms";

export const AppletDescriptionDialog = (applet_id: string) => ({
    "title": 'Update description',
    "mode": "update",
    "protocol": WorkProtocol,
    "resource": "workspace-applets",
    "resourceId": applet_id,
    "fieldMap": {
        "name": {
            type: "editorjs",
            defaultValue: '{{ description }}',
            name: "description"
        }
    }
})