
export const AddTextFieldDialog = (onAction: Function) => ({
    "title": 'Create text field',
    "actions": [
        {
            "label": "Save",
            "onAction": onAction,
            "type": "genericAction"
        }
    ],
    "fieldMap": {
        "type": {
            "name": "type",
            "type": "virtual",
            "value": 'text'
        },
        "key": {
            "label": "Key",
            "type": "text",
            "name": "key",
            "category": 'General'
        },
        "name": {
            "label": "Name",
            "type": "text",
            "name": "name",
            "category": 'General'
        },
        "description": {
            "label": "Description",
            "type": "text",
            "multiline": true,
            "name": "description",
            "category": 'General'
        },
        "required": {
            "label": "Required",
            "type": "checkbox",
            "name": "required",
            "category": 'Settings'
        },

    },
    "layout": {
        "type": "category"
    }
})

