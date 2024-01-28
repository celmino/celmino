import { UIView, UIButtonClass } from '@tuval/forms';
export declare function SelectButton(value: string): UIButtonClass;
export declare function AcceptButton(value: string, disabled?: boolean): UIButtonClass;
export declare function CancelButton(value: string): UIButtonClass;
export declare function DefaultButton(...content: UIView[]): UIButtonClass;
