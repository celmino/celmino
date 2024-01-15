
export const AddFormulaField = (onAction: Function) => ({
    "title": 'Create formula field',
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
            "value": 'formula'
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
        "formula": {
            "label": "Formula",
            "type": "text",
            "multiline": true,
            "name": "formula",
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

