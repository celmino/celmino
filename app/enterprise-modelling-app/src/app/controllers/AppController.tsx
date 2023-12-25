import {
    ReactView,
    Text,
    UIController, UIView, useParams
} from '@tuval/forms';


import React from 'react';

import { Routes } from '../Routes';
export class MyTestController extends UIController {


    public override LoadView(): UIView {
        const { space_id, folder_id, item_id } = useParams();



        return (
            Routes()
        )
    }

}