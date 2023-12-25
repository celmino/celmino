

export const AddNumberFieldDialog = (onAction: Function) => ({
    "title": 'Add number field',
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
            "value": 'number'
        },
        "key": {
            "label": "Key",
            "type": "text",
            "name": "key"
        },
        "name": {
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

