import type { MouseEvent, KeyboardEvent } from 'react';
import { MouseSensor as LibMouseSensor, KeyboardSensor as LibKeyboardSensor } from '@dnd-kit/core';
export declare class MyMouseSensor extends LibMouseSensor {
    static activators: {
        eventName: "onMouseDown";
        handler: ({ nativeEvent: event }: MouseEvent) => boolean;
    }[];
}
export declare class MyKeyboardSensor extends LibKeyboardSensor {
    static activators: {
        eventName: "onKeyDown";
        handler: ({ nativeEvent: event }: KeyboardEvent<Element>) => boolean;
    }[];
}
