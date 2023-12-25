
export const AddSpaceDialog = () => ({
    "title": 'Create project space',
    "method": "create",
    "resource": "spaces",
    /*   "mutation":"_create_workspace", */
    "actions": [
        {
            "label": "Save",
            "type": "saveSpace"
        }
    ],
    "fieldMap": {
        "space_name": {
            "label": "Name",
            "type": "text",
            "name": "name"
        },
        "description": {
            "label": "Description",
            "type": "text",
            "multiline": true,
            "name": "description"
        },

    }
})