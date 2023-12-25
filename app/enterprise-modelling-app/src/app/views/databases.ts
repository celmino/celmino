

export const databaseTemplates = [
    {
        "name": "Enterprise Modelling",
        "id": "enterprise_modelling",
        "category": "app",
        "collections": [
            {
                "name": "Folders",
                "id": "em_folders",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    },
                    {
                        "key": "Parent",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "Models",
                "id": "em_models",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    },
                    {
                        "key": "Parent",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "Model Types",
                "id": "model_types",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    },
                    {
                        "key": "OrginalName",
                        "type": "string"
                    },
                    {
                        "key": "TypeNumber",
                        "type": "number"
                    },
                    {
                        "key": "ApiName",
                        "type": "string"
                    },
                    {
                        "key": "Type",
                        "type": "string"
                    }

                ],
                "documents": [
                    {
                        "Name": "Organizational chart",
                        "TypeNumber": 1,
                        "ApiName": "MT_ORG_CHRT",
                        "Type": "Default"
                    },
                    {
                        "Name": "Screen diagram",
                        "TypeNumber": 2,
                        "ApiName": "MT_SCRN_DGM",
                        "Type": "Default"
                    },
                    {
                        "Name": "Network topology ",
                        "TypeNumber": 3,
                        "ApiName": "MT_NW_TOPLG",
                        "Type": "Default"
                    },
                    {
                        "Name": "Network diagram",
                        "TypeNumber": 5,
                        "ApiName": "MT_NW_DGM",
                        "Type": "Default"
                    },
                    {
                        "Name": "eERM",
                        "TypeNumber": 6,
                        "ApiName": "MT_EERM",
                        "Type": "Default"
                    },
                    {
                        "Name": "SAP SERM",
                        "TypeNumber": 7,
                        "ApiName": "MT_SAP_SERM",
                        "Type": "Default"
                    },
                    {
                        "Name": "eERM attribute allocation diagram",
                        "TypeNumber": 8,
                        "ApiName": "MT_EERM_ATTR_ALLOC_DGM",
                        "Type": "Default"
                    },
                    {
                        "Name": "Relations diagram",
                        "TypeNumber": 9,
                        "ApiName": "MT_REL_DGM",
                        "Type": "Default"
                    },
                    {
                        "Name": "Attribute allocation diagram",
                        "TypeNumber": 10,
                        "ApiName": "MT_ATTR_ALLOC_DGM",
                        "Type": "Default"
                    },
                    {
                        "Name": "Table diagram",
                        "TypeNumber": 11,
                        "ApiName": "MT_TBL_DGM",
                        "Type": "Default"
                    },
                    {
                        "Name": "Value-added chain diagram",
                        "TypeNumber": 12,
                        "ApiName": "MT_VAL_ADD_CHN_DGM",
                        "Type": "Default"
                    },
                    {
                        "Name": "EPC",
                        "TypeNumber": 13,
                        "ApiName": "MT_EPC",
                        "Type": "Default"
                    },
                    {
                        "Name": "Function allocation diagram",
                        "TypeNumber": 14,
                        "ApiName": "MT_FUNC_ALLOC_DGM",
                        "Type": "Default"
                    },
                    {
                        "Name": "Information flow diagram",
                        "TypeNumber": 15,
                        "ApiName": "MT_INFO_FLOW_DGM",
                        "Type": "Default"
                    },
                    {
                        "Name": "Access diagram",
                        "TypeNumber": 16,
                        "ApiName": "MT_ACS_DGM",
                        "Type": "Default"
                    },
                    {
                        "Name": "Access diagram (physical)",
                        "TypeNumber": 17,
                        "ApiName": "MT_ACS_DGM_PHYs",
                        "Type": "Default"
                    },
                    {
                        "Name": "PCD",
                        "TypeNumber": 18,
                        "ApiName": "MT_PCD",
                        "Type": "Default"
                    },
                    {
                        "Name": "Function tree",
                        "TypeNumber": 19,
                        "ApiName": "MT_FUNC_TREE",
                        "Type": "Default"
                    },
                    {
                        "Name": "Application system type diagram",
                        "TypeNumber": 21,
                        "ApiName": "MT_FUNC_TREE",
                        "Type": "Default"
                    },
                    {
                        "Name": "Tecnical terms model",
                        "TypeNumber": 22,
                        "ApiName": "MT_TEC_TERMS_MDL",
                        "Type": "Default"
                    },
                    {
                        "Name": "Event diagram",
                        "TypeNumber": 23,
                        "ApiName": "MT_EVNT_DGM",
                        "Type": "Default"
                    },
                    {
                        "Name": "Rule diagram",
                        "TypeNumber": 24,
                        "ApiName": "MT_RULE_DGM",
                        "Type": "Default"
                    },
                    {
                        "Name": "Function organizational level diagram",
                        "TypeNumber": 25,
                        "ApiName": "MT_FUNC_ORG_LVL_DGM",
                        "Type": "Default"
                    },
                    {
                        "Name": "Process selection matrix",
                        "TypeNumber": 28,
                        "ApiName": "MT_PROC_SEL_MTRX",
                        "Type": "Default"
                    },
                    {
                        "Name": "Y diagram",
                        "TypeNumber": 30,
                        "ApiName": "MT_Y_DGM",
                        "Type": "Default"
                    },
                    {
                        "Name": "SAP application diagram",
                        "TypeNumber": 31,
                        "ApiName": "MT_SAP_APP_DGM",
                        "Type": "Default"
                    },
                    {
                        "Name": "Classfication diagram",
                        "TypeNumber": 36,
                        "ApiName": "MT_CLSF_DGM",
                        "Type": "Default"
                    },
                    {
                        "Name": "Objective diagram",
                        "TypeNumber": 37,
                        "ApiName": "MT_OBJ_DGM",
                        "Type": "Default"
                    },
                    {
                        "Name": "Application system diagram",
                        "TypeNumber": 38,
                        "ApiName": "MT_APP_SYS_DGM",
                        "Type": "Default"
                    },
                    {
                        "Name": "OMT Object model",
                        "TypeNumber": 39,
                        "ApiName": "MT_APP_SYS_DGM",
                        "Type": "Default"
                    },
                    {
                        "Name": "OMT Dynamic model",
                        "TypeNumber": 40,
                        "ApiName": "MT_OMT_DYN_MDL",
                        "Type": "Default"
                    },
                    {
                        "Name": "OMT Functional model",
                        "TypeNumber": 41,
                        "ApiName": "MT_OMT_FUNC_MDL",
                        "Type": "Default"
                    },
                    {
                        "Name": "E Data model",
                        "TypeNumber": 42,
                        "ApiName": "MT_E_DATA_MDL",
                        "Type": "Default"
                    },
                    {
                        "Name": "OMT Data value decomposition",
                        "TypeNumber": 43,
                        "ApiName": "MT_OMT_DATA_VAL_DCMPS",
                        "Type": "Default"
                    },
                    {
                        "Name": "Class diagram",
                        "TypeNumber": 44,
                        "ApiName": "MT_CLS_DGM",
                        "Type": "Default"
                    },
                    {
                        "Name": "System attributes",
                        "TypeNumber": 45,
                        "ApiName": "MT_SYS_ATTRS",
                        "Type": "Default"
                    },
                    {
                        "Name": "System attribute domain",
                        "TypeNumber": 46,
                        "ApiName": "MT_SYS_ATTRS_DOM",
                        "Type": "Default"
                    },
                    {
                        "Name": "SeDaM model",
                        "TypeNumber": 47,
                        "ApiName": "MT_SEDAM_MDL",
                        "Type": "Default"
                    },
                    {
                        "Name": "Technical resources",
                        "TypeNumber": 48,
                        "ApiName": "MT_TEC_RCS",
                        "Type": "Default"
                    },
                    {
                        "Name": "Material diagram",
                        "TypeNumber": 49,
                        "ApiName": "MT_MTRL_DGM",
                        "Type": "Default"
                    },
                    {
                        "Name": "EPC (material flow)",
                        "TypeNumber": 50,
                        "ApiName": "MT_EPC_MTRL_FLOW",
                        "Type": "Default"
                    },
                    {
                        "Name": "PCD (material flow)",
                        "TypeNumber": 51,
                        "ApiName": "MT_PCD_MTRL_FLOW",
                        "Type": "Default"
                    },
                    {
                        "Name": "Communications diagram",
                        "TypeNumber": 52,
                        "ApiName": "MT_COMM_DGM",
                        "Type": "Default"
                    },
                    {
                        "Name": "Program flow chart",
                        "TypeNumber": 53,
                        "ApiName": "MT_PRG_FLOW_CHRT",
                        "Type": "Default"
                    },
                    {
                        "Name": "Cost category diagram",
                        "TypeNumber": 54,
                        "ApiName": "MT_CST_CAT_DGM",
                        "Type": "Default"
                    },
                    {
                        "Name": "OMT Class description model",
                        "TypeNumber": 55,
                        "ApiName": "MT_OMT_CLS_DESC_MDL",
                        "Type": "Default"
                    },
                    {
                        "Name": "RAMS",
                        "TypeNumber": 56,
                        "ApiName": "MT_RAMS",
                        "Type": "Default"
                    },
                    {
                        "Name": "SAP ALE function model",
                        "TypeNumber": 57,
                        "ApiName": "MT_SAP_ALE_FUNC_MDL",
                        "Type": "Default"
                    },
                    {
                        "Name": "SAP ALE filter model",
                        "TypeNumber": 58,
                        "ApiName": "MT_SAP_ALE_FLTR_MDL",
                        "Type": "Default"
                    },
                    {
                        "Name": "SAP ALE message flow model",
                        "TypeNumber": 59,
                        "ApiName": "MT_SAP_ALE_MSG_FLOW_MDL",
                        "Type": "Default"
                    },
                    {
                        "Name": "SAP ALE message type model",
                        "TypeNumber": 60,
                        "ApiName": "MT_SAP_ALE_MSG_TYP_MDL",
                        "Type": "Default"
                    },
                    {
                        "Name": "EPC (instance)",
                        "TypeNumber": 61,
                        "ApiName": "MT_EPC_INST",
                        "Type": "Default"
                    },
                    {
                        "Name": "Material flow diagram",
                        "TypeNumber": 62,
                        "ApiName": "MT_MTRL_FLOW_DGM",
                        "Type": "Default"
                    },
                    {
                        "Name": "PPC",
                        "TypeNumber": 63,
                        "ApiName": "MT_PPC",
                        "Type": "Default"
                    },
                    {
                        "Name": "Information carrier diagram",
                        "TypeNumber": 64,
                        "ApiName": "MT_INFO_CRR_DGM",
                        "Type": "Default"
                    },
                    {
                        "Name": "Task allocation diagram",
                        "TypeNumber": 65,
                        "ApiName": "MT_TSK_ALLOC_DGM",
                        "Type": "Default"
                    },
                    {
                        "Name": "Privileges diagram",
                        "TypeNumber": 66,
                        "ApiName": "MT_PRIV_DGM",
                        "Type": "Default"
                    },
                    {
                        "Name": "Event diagram (instance)",
                        "TypeNumber": 67,
                        "ApiName": "MT_EVNT_DGM_INST",
                        "Type": "Default"
                    },
                    {
                        "Name": "Business controls diagram",
                        "TypeNumber": 68,
                        "ApiName": "MT_BUS_CTRL_DGM",
                        "Type": "Default"
                    },
                    {
                        "Name": "Product/Service exchange diagram (graphic)",
                        "TypeNumber": 69,
                        "ApiName": "MT_PROD_EXCH_DGM",
                        "Type": "Default"
                    },
                    {
                        "Name": "Product/Service tree (graphic)",
                        "TypeNumber": 69,
                        "ApiName": "MT_PROD_TREE_GRAPHIC",
                        "Type": "Default"
                    },
                    {
                        "Name": "Product tree",
                        "TypeNumber": 70,
                        "ApiName": "MT_PROD_TREE",
                        "Type": "Default"
                    },
                    {
                        "Name": "Product selection matrix",
                        "TypeNumber": 71,
                        "ApiName": "MT_PROD_SEL_MTRX",
                        "Type": "Default"
                    },
                    {
                        "Name": "Office process",
                        "TypeNumber": 72,
                        "ApiName": "MT_OFFICE_PROC",
                        "Type": "Default"
                    },
                    {
                        "Name": "Product allocation diagram",
                        "TypeNumber": 73,
                        "ApiName": "MT_PROD_ALLOC_DGM",
                        "Type": "Default"
                    },
                    {
                        "Name": "Competition model",
                        "TypeNumber": 74,
                        "ApiName": "MT_COMP_MDL",
                        "Type": "Default"
                    },
                    {
                        "Name": "Industrial process",
                        "TypeNumber": 75,
                        "ApiName": "MT_IND_PROC",
                        "Type": "Default"
                    },
                    {
                        "Name": "Process instantiation model",
                        "TypeNumber": 76,
                        "ApiName": "MT_PROC_INST_MDL",
                        "Type": "Default"
                    },
                    {
                        "Name": "Shift calendar",
                        "TypeNumber": 77,
                        "ApiName": "MT_SHIFT_CAL",
                        "Type": "Default"
                    },
                    {
                        "Name": "CD Diagram",
                        "TypeNumber": 78,
                        "ApiName": "MT_CD_DGM",
                        "Type": "Default"
                    },
                    {
                        "Name": "Input/Output diagram",
                        "TypeNumber": 79,
                        "ApiName": "MT_IN_OUT_DGM",
                        "Type": "Default"
                    },
                    {
                        "Name": "Knowledge structure diagram",
                        "TypeNumber": 80,
                        "ApiName": "MT_KNW_STRC_DGM",
                        "Type": "Default"
                    },
                    {
                        "Name": "Knowledge map",
                        "TypeNumber": 81,
                        "ApiName": "MT_KNW_MAP",
                        "Type": "Default"
                    },
                    {
                        "Name": "UML Class description diagram",
                        "TypeNumber": 82,
                        "ApiName": "MT_UML_CLS_DESC_DGM",
                        "Type": "Default"
                    },
                    {
                        "Name": "Product/Service tree",
                        "TypeNumber": 83,
                        "ApiName": "MT_PROD_SER_TREE",
                        "Type": "Default"
                    },
                    {
                        "Name": "Product/Service exchange diagram",
                        "TypeNumber": 84,
                        "ApiName": "MT_PROD_SER_EXCH_DGM",
                        "Type": "Default"
                    },
                    {
                        "Name": "Structuring model",
                        "TypeNumber": 85,
                        "ApiName": "MT_STRC_MDL",
                        "Type": "Default"
                    },
                    {
                        "Name": "EPC (column display)",
                        "TypeNumber": 86,
                        "ApiName": "MT_EPC_COL_DPLY",
                        "Type": "Default"
                    },
                    {
                        "Name": "Program flow chart (PF)",
                        "TypeNumber": 87,
                        "ApiName": "MT_PRG_FLOW_CHRT_PF",
                        "Type": "Default"
                    },
                    {
                        "Name": "EPC (row display)",
                        "TypeNumber": 88,
                        "ApiName": "MT_EPC_ROW_DPLY",
                        "Type": "Default"
                    },
                    {
                        "Name": "Process selection diagram",
                        "TypeNumber": 89,
                        "ApiName": "MT_PROC_SEL_DGM",
                        "Type": "Default"
                    },
                    {
                        "Name": "Authorization map",
                        "TypeNumber": 90,
                        "ApiName": "MT_AUTH_MAP",
                        "Type": "Default"
                    },
                    {
                        "Name": "Authorization hierarchy",
                        "TypeNumber": 91,
                        "ApiName": "MT_AUTH_HIER",
                        "Type": "Default"
                    },
                    {
                        "Name": "Role diagram",
                        "TypeNumber": 92,
                        "ApiName": "MT_ROLE_DGM",
                        "Type": "Default"
                    },
                    {
                        "Name": "E-Business scenario diagram",
                        "TypeNumber": 93,
                        "ApiName": "MT_E_BUS_SCN_DGM",
                        "Type": "Default"
                    },
                    {
                        "Name": "KPI allocation diagram",
                        "TypeNumber": 94,
                        "ApiName": "MT_KPI_ALLOC_DGM",
                        "Type": "Default"
                    },
                    {
                        "Name": "DW structure",
                        "TypeNumber": 95,
                        "ApiName": "MT_DW_STRC",
                        "Type": "Default"
                    },
                    {
                        "Name": "DW transformation",
                        "TypeNumber": 96,
                        "ApiName": "MT_DW_TRNS",
                        "Type": "Default"
                    },
                    {
                        "Name": "EPC (table display)",
                        "TypeNumber": 97,
                        "ApiName": "MT_EPC_TBL_DPLY",
                        "Type": "Default"
                    },
                    {
                        "Name": "Input/Output diagram (inverse)",
                        "TypeNumber": 98,
                        "ApiName": "MT_IN_OUT_DGM_INV",
                        "Type": "Default"
                    },
                    {
                        "Name": "RAD",
                        "TypeNumber": 99,
                        "ApiName": "MT_RAD",
                        "Type": "Default"
                    },
                    {
                        "Name": "Quick model",
                        "TypeNumber": 100,
                        "ApiName": "MT_QUICK_MDL",
                        "Type": "Default"
                    },
                    {
                        "Name": "DTD",
                        "TypeNumber": 101,
                        "ApiName": "MT_DTD",
                        "Type": "Default"
                    },
                    {
                        "Name": "c3 method",
                        "TypeNumber": 102,
                        "ApiName": "MT_C3_MTHD",
                        "Type": "Default"
                    },
                    {
                        "Name": "Risk diagram",
                        "TypeNumber": 103,
                        "ApiName": "MT_RISK_DGM",
                        "Type": "Default"
                    },
                    {
                        "Name": "Screen design",
                        "TypeNumber": 104,
                        "ApiName": "MT_SCREEN_DESIGN",
                        "Type": "Default"
                    },
                    {
                        "Name": "Screen navigation",
                        "TypeNumber": 105,
                        "ApiName": "MT_SCREEN_NAV",
                        "Type": "Default"
                    },
                    {
                        "Name": "Service architecture diagram",
                        "TypeNumber": 106,
                        "ApiName": "MT_SER_ARCH_DGM",
                        "Type": "Default"
                    },
                    {
                        "Name": "Service architecture diagram (column display)",
                        "TypeNumber": 107,
                        "ApiName": "MT_SER_ARCH_DGM_COL_DPLY",
                        "Type": "Default"
                    },
                    {
                        "Name": "Application system type diagram (column display)",
                        "TypeNumber": 108,
                        "ApiName": "MT_APP_SYS_TYP_DGM_COL_DPLY",
                        "Type": "Default"
                    },
                    {
                        "Name": "Service allocation diagram",
                        "TypeNumber": 109,
                        "ApiName": "MT_SER_ALLOC_DGM",
                        "Type": "Default"
                    },
                    {
                        "Name": "EPC (horizontal table display)",
                        "TypeNumber": 110,
                        "ApiName": "MT_EPC_HOR_TBL_DPLY",
                        "Type": "Default"
                    },
                    {
                        "Name": "SAP functions mapping (Solution Manager)",
                        "TypeNumber": 111,
                        "ApiName": "MT_SAP_FUNC_MAP_SM",
                        "Type": "Default"
                    },
                    {
                        "Name": "Functions mapping (Solution Manager)",
                        "TypeNumber": 112,
                        "ApiName": "MT_FUNC_MAP_SM",
                        "Type": "Default"
                    },
                    {
                        "Name": "Business segment matrix",
                        "TypeNumber": 113,
                        "ApiName": "MT_BUS_SEG_MTRX",
                        "Type": "Default"
                    },
                    {
                        "Name": "BPMN process diagram (BPMN 1.x)",
                        "TypeNumber": 114,
                        "ApiName": "MT_BPMN_PROC_DGM",
                        "Type": "Default"
                    },
                    {
                        "Name": "SAP integration process (XI)",
                        "TypeNumber": 115,
                        "ApiName": "MT_SAP_INT_PROC_XI",
                        "Type": "Default"
                    },
                    {
                        "Name": "Swimlane tree",
                        "TypeNumber": 116,
                        "ApiName": "MT_SWIM_TREE",
                        "Type": "Default"
                    },
                    {
                        "Name": "Service collaboration diagram",
                        "TypeNumber": 117,
                        "ApiName": "MT_SER_COL_DGM",
                        "Type": "Default"
                    },
                    {
                        "Name": "Process support map",
                        "TypeNumber": 118,
                        "ApiName": "MT_PROC_SUPP_MAP",
                        "Type": "Default"
                    },
                    {
                        "Name": "SAP allocation diagram",
                        "TypeNumber": 119,
                        "ApiName": "MT_SAP_ALLOC_DGM",
                        "Type": "Default"
                    },
                    {
                        "Name": "IT architecture mapping",
                        "TypeNumber": 120,
                        "ApiName": "MT_IT_ARCH_MAP",
                        "Type": "Default"
                    },
                    {
                        "Name": "IT architecture matrix",
                        "TypeNumber": 121,
                        "ApiName": "MT_IT_ARCH_MTRX",
                        "Type": "Default"
                    },
                    {
                        "Name": "BPMN allocation diagram (BPMN 1.x)",
                        "TypeNumber": 122,
                        "ApiName": "MT_BPMN_ALLOC_DGM",
                        "Type": "Default"
                    },
                    {
                        "Name": "SAP organizational elements mapping",
                        "TypeNumber": 123,
                        "ApiName": "MT_SAP_ORG_ELM_MAP",
                        "Type": "Default"
                    },
                    {
                        "Name": "Matrix model",
                        "TypeNumber": 124,
                        "ApiName": "MT_MTRX_MDL",
                        "Type": "Default"
                    },
                    {
                        "Name": "Process schedule",
                        "TypeNumber": 125,
                        "ApiName": "MT_PROC_SCH",
                        "Type": "Default"
                    },
                    {
                        "Name": "Transformation",
                        "TypeNumber": 126,
                        "ApiName": "MT_TRNS",
                        "Type": "Default"
                    },
                    {
                        "Name": "Mapping model",
                        "TypeNumber": 127,
                        "ApiName": "MT_MAP_MDL",
                        "Type": "Default"
                    },
                    {
                        "Name": "XML model",
                        "TypeNumber": 128,
                        "ApiName": "MT_XML_MDL",
                        "Type": "Default"
                    },
                    {
                        "Name": "Schedule",
                        "TypeNumber": 129,
                        "ApiName": "MT_SCH",
                        "Type": "Default"
                    },
                    {
                        "Name": "Composite schedule",
                        "TypeNumber": 130,
                        "ApiName": "MT_COMP_SCH",
                        "Type": "Default"
                    },
                    {
                        "Name": "Project schedule",
                        "TypeNumber": 131,
                        "ApiName": "MT_PRJ_SCH",
                        "Type": "Default"
                    },
                    {
                        "Name": "Work breakdown structure",
                        "TypeNumber": 132,
                        "ApiName": "MT_WRK_BRK_STRC",
                        "Type": "Default"
                    },
                    {
                        "Name": "Requirements tree",
                        "TypeNumber": 133,
                        "ApiName": "MT_REQ_TREE",
                        "Type": "Default"
                    },
                    {
                        "Name": "Requirement allocation diagram",
                        "TypeNumber": 134,
                        "ApiName": "MT_REQ_ALLOC_DGM",
                        "Type": "Default"
                    },
                    {
                        "Name": "Data flow diagram",
                        "TypeNumber": 135,
                        "ApiName": "MT_DATA_FLOW_DGM",
                        "Type": "Default"
                    },
                    {
                        "Name": "Transformation profile model",
                        "TypeNumber": 136,
                        "ApiName": "MT_TRNS_PROF_MDL",
                        "Type": "Default"
                    },
                    {
                        "Name": "BPMN allocation diagram (2.0 beta)",
                        "TypeNumber": 137,
                        "ApiName": "MT_BPMN_ALLOC_DGM_2",
                        "Type": "Default"
                    },
                    {
                        "Name": "Whiteboard",
                        "TypeNumber": 138,
                        "ApiName": "MT_WHITEBOARD",
                        "Type": "Default"
                    },

















                ]
            },
            // Model Type Tables Start
            {
                "name": "Organizational chart",
                "id": "MT_ORG_CHRT",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },

            {
                "name": "Screen diagram",
                "id": "MT_SCRN_DGM",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },

            {
                "name": "Network topology",
                "id": "MT_NW_TOPLG",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },

            {
                "name": "Network diagram",
                "id": "MT_NW_DGM",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },

            {
                "name": "eERM",
                "id": "MT_EERM",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },

            {
                "name": "SAP SERM",
                "id": "MT_SAP_SERM",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },

            {
                "name": "eERM attribute allocation diagram",
                "id": "MT_EERM_ATTR_ALLOC_DGM",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },

            {
                "name": "Relations diagram",
                "id": "MT_REL_DGM",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },

            {
                "name": "Attribute allocation diagram",
                "id": "MT_ATTR_ALLOC_DGM",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },

            {
                "name": "Table diagram",
                "id": "MT_TBL_DGM",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },

            {
                "name": "Value-added chain diagram",
                "id": "MT_VAL_ADD_CHN_DGM",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },

            {
                "name": "EPC",
                "id": "MT_EPC",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },

            {
                "name": "Function allocation diagram",
                "id": "MT_FUNC_ALLOC_DGM",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },

            {
                "name": "Information flow diagram",
                "id": "MT_INFO_FLOW_DGM",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },

            {
                "name": "Access diagram",
                "id": "MT_ACS_DGM",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },

            {
                "name": "Access diagram (physical)",
                "id": "MT_ACS_DGM_PHYs",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },

            {
                "name": "PCD",
                "id": "MT_PCD",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },

            {
                "name": "Function tree",
                "id": "MT_FUNC_TREE",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },

            {
                "name": "Application system type diagram",
                "id": "MT_APP_SYS_TYP_DGM",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },

            {
                "name": "Tecnical terms model",
                "id": "MT_TEC_TERMS_MDL",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },

            {
                "name": "Event diagram",
                "id": "MT_EVNT_DGM",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },

            {
                "name": "Rule diagram",
                "id": "MT_RULE_DGM",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },

            {
                "name": "Function organizational level diagram",
                "id": "MT_FUNC_ORG_LVL_DGM",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },

            {
                "name": "Process selection matrix",
                "id": "MT_PROC_SEL_MTRX",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },

            {
                "name": "Y diagram",
                "id": "MT_Y_DGM",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },

            {
                "name": "SAP application diagram",
                "id": "MT_SAP_APP_DGM",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },

            {
                "name": "Classfication diagram",
                "id": "MT_CLSF_DGM",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },

            {
                "name": "Objective diagram",
                "id": "MT_OBJ_DGM",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },

            {
                "name": "Application system diagram",
                "id": "MT_APP_SYS_DGM",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },

            {
                "name": "OMT Object model",
                "id": "MT_OMT_OBJ_MDL",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },

            {
                "name": "OMT Dynamic model",
                "id": "MT_OMT_DYN_MDL",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "OMT Functional model",
                "id": "MT_OMT_FUNC_MDL",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "E Data model",
                "id": "MT_E_DATA_MDL",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "OMT Data value decomposition",
                "id": "MT_OMT_DATA_VAL_DCMPS",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "Class diagram",
                "id": "MT_CLS_DGM",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "System attributes",
                "id": "MT_SYS_ATTRS",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "System attribute domain",
                "id": "MT_SYS_ATTRS_DOM",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "SeDaM model",
                "id": "MT_SEDAM_MDL",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "Technical resources",
                "id": "MT_TEC_RCS",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "Material diagram",
                "id": "MT_MTRL_DGM",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "EPC (material flow)",
                "id": "MT_EPC_MTRL_FLOW",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "PCD (material flow)",
                "id": "MT_PCD_MTRL_FLOW",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "Communications diagram",
                "id": "MT_COMM_DGM",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "Program flow chart",
                "id": "MT_PRG_FLOW_CHRT",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "Cost category diagram",
                "id": "MT_CST_CAT_DGM",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "OMT Class description model",
                "id": "MT_OMT_CLS_DESC_MDL",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "RAMS",
                "id": "MT_RAMS",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "SAP ALE function model",
                "id": "MT_SAP_ALE_FUNC_MDL",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "SAP ALE filter model",
                "id": "MT_SAP_ALE_FLTR_MDL",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "SAP ALE message flow model",
                "id": "MT_SAP_ALE_MSG_FLOW_MDL",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "SAP ALE message type model",
                "id": "MT_SAP_ALE_MSG_TYP_MDL",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "EPC (instance)",
                "id": "MT_EPC_INST",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "Material flow diagram",
                "id": "MT_MTRL_FLOW_DGM",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "PPC",
                "id": "MT_PPC",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "Information carrier diagram",
                "id": "MT_INFO_CRR_DGM",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "Task allocation diagram",
                "id": "MT_TSK_ALLOC_DGM",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "Privileges diagram",
                "id": "MT_PRIV_DGM",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "Event diagram (instance)",
                "id": "MT_EVNT_DGM_INST",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "Business controls diagram",
                "id": "MT_BUS_CTRL_DGM",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "Product/Service exchange diagram (graphic)",
                "id": "MT_PROD_EXCH_DGM",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "Product/Service tree (graphic)",
                "id": "MT_PROD_TREE_GRAPHIC",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "Product tree",
                "id": "MT_PROD_TREE",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "Product selection matrix",
                "id": "MT_PROD_SEL_MTRX",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "Office process",
                "id": "MT_OFFICE_PROC",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "Product allocation diagram",
                "id": "MT_PROD_ALLOC_DGM",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "Competition model",
                "id": "MT_COMP_MDL",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "Industrial process",
                "id": "MT_IND_PROC",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "Process instantiation model",
                "id": "MT_PROC_INST_MDL",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "Shift calendar",
                "id": "MT_SHIFT_CAL",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "CD Diagram",
                "id": "MT_CD_DGM",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "Input/Output diagram",
                "id": "MT_IN_OUT_DGM",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "Knowledge structure diagram",
                "id": "MT_KNW_STRC_DGM",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "Knowledge map",
                "id": "MT_KNW_MAP",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "UML Class description diagram",
                "id": "MT_UML_CLS_DESC_DGM",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "Product/Service tree",
                "id": "MT_PROD_SER_TREE",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "Product/Service exchange diagram",
                "id": "MT_PROD_SER_EXCH_DGM",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "Structuring model",
                "id": "MT_STRC_MDL",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "EPC (column display)",
                "id": "MT_EPC_COL_DPLY",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "Program flow chart (PF)",
                "id": "MT_PRG_FLOW_CHRT_PF",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "EPC (row display)",
                "id": "MT_EPC_ROW_DPLY",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "Process selection diagram",
                "id": "MT_PROC_SEL_DGM",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "Authorization map",
                "id": "MT_AUTH_MAP",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "Authorization hierarchy",
                "id": "MT_AUTH_HIER",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "Role diagram",
                "id": "MT_ROLE_DGM",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "E-Business scenario diagram",
                "id": "MT_E_BUS_SCN_DGM",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "KPI allocation diagram",
                "id": "MT_KPI_ALLOC_DGM",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "DW structure",
                "id": "MT_DW_STRC",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "DW transformation",
                "id": "MT_DW_TRNS",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "EPC (table display)",
                "id": "MT_EPC_TBL_DPLY",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "Input/Output diagram (inverse)",
                "id": "MT_IN_OUT_DGM_INV",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "RAD",
                "id": "MT_RAD",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "Quick model",
                "id": "MT_QUICK_MDL",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "DTD",
                "id": "MT_DTD",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "c3 method",
                "id": "MT_C3_MTHD",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "Risk diagram",
                "id": "MT_RISK_DGM",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "Screen design",
                "id": "MT_SCREEN_DESIGN",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "Screen navigation",
                "id": "MT_SCREEN_NAV",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "Service architecture diagram",
                "id": "MT_SER_ARCH_DGM",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "Service architecture diagram (column display)",
                "id": "MT_SER_ARCH_DGM_COL_DPLY",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "Application system type diagram (column display)",
                "id": "MT_APP_SYS_TYP_DGM_COL_DPLY",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "Service allocation diagram",
                "id": "MT_SER_ALLOC_DGM",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "EPC (horizontal table display)",
                "id": "MT_EPC_HOR_TBL_DPLY",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "SAP functions mapping (Solution Manager)",
                "id": "MT_SAP_FUNC_MAP_SM",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "Functions mapping (Solution Manager)",
                "id": "MT_FUNC_MAP_SM",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "Business segment matrix",
                "id": "MT_BUS_SEG_MTRX",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "BPMN process diagram (BPMN 1.x)",
                "id": "MT_BPMN_PROC_DGM",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "SAP integration process (XI)",
                "id": "MT_SAP_INT_PROC_XI",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "Swimlane tree",
                "id": "MT_SWIM_TREE",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "Service collaboration diagram",
                "id": "MT_SER_COL_DGM",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "Process support map",
                "id": "MT_PROC_SUPP_MAP",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "SAP allocation diagram",
                "id": "MT_SAP_ALLOC_DGM",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "IT architecture mapping",
                "id": "MT_IT_ARCH_MAP",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "IT architecture matrix",
                "id": "MT_IT_ARCH_MTRX",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "BPMN allocation diagram (BPMN 1.x)",
                "id": "MT_BPMN_ALLOC_DGM",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "SAP organizational elements mapping",
                "id": "MT_SAP_ORG_ELM_MAP",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "Matrix model",
                "id": "MT_MTRX_MDL",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "Process schedule",
                "id": "MT_PROC_SCH",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "Transformation",
                "id": "MT_TRNS",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "Mapping model",
                "id": "MT_MAP_MDL",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "XML model",
                "id": "MT_XML_MDL",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "Schedule",
                "id": "MT_SCH",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "Composite schedule",
                "id": "MT_COMP_SCH",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "Project schedule",
                "id": "MT_PRJ_SCH",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "Work breakdown structure",
                "id": "MT_WRK_BRK_STRC",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "Requirements tree",
                "id": "MT_REQ_TREE",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "Requirement allocation diagram",
                "id": "MT_REQ_ALLOC_DGM",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "Data flow diagram",
                "id": "MT_DATA_FLOW_DGM",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "Transformation profile model",
                "id": "MT_TRNS_PROF_MDL",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "BPMN allocation diagram (2.0 beta)",
                "id": "MT_BPMN_ALLOC_DGM_2",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "Whiteboard",
                "id": "MT_WHITEBOARD",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },


















            // Model Type Tables End
            {
                "name": "Object Types",
                "id": "object_types",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    },
                    {
                        "key": "OrginalName",
                        "type": "string"
                    },
                    {
                        "key": "TypeNumber",
                        "type": "number"
                    },
                    {
                        "key": "ApiName",
                        "type": "string"
                    },
                    {
                        "key": "Type",
                        "type": "string"
                    },

                ],
                "documents": [
                    {
                        "Name": "Action",
                        "TypeNumber": 284,
                        "ApiName": "OT_ACTION",
                        "Type": "Default"
                    },

                ]
            },
            {
                "name": "Action",
                "id": "OT_ACTION",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            }
        ]
    }
]