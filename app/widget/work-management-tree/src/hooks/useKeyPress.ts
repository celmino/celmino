import { is } from "@tuval/core";
import { useState, useEffect } from "@tuval/forms";
import {useCallback } from "react";

export function useKeyPress(targetKey) {
    // State for keeping track of whether key is pressed
    const [keyPressed, setKeyPressed] = useState<boolean>(false);
    // If pressed key is our target key then set to true
    function downHandler({ key, keyCode }) {
        if (is.string(targetKey)) {
            if (key === targetKey) {
                setKeyPressed(true);
            }
        } else {
            if (keyCode === targetKey) {
                setKeyPressed(true);
            }
        }

    }
    // If released key is our target key then set to false
    const upHandler = ({ key, keyCode }) => {
        if (is.string(targetKey)) {
            if (key === targetKey) {
                setKeyPressed(false);
            }
        } else {
            if (keyCode === targetKey) {
                setKeyPressed(false);
            }
        }
    };
    // Add event listeners
    useEffect(() => {
        window.addEventListener("keydown", downHandler);
        window.addEventListener("keyup", upHandler);
        // Remove event listeners on cleanup
        return () => {
            window.removeEventListener("keydown", downHandler);
            window.removeEventListener("keyup", upHandler);
        };
    }, []); // Empty array ensures that effect is only run on mount and unmount
    return keyPressed;
}

export function useKeyPressEvent(targetKey, func: Function) {
    const eventFunc = useCallback(() => func(), [])

    function downHandler({ key, keyCode }) {
        if (is.string(targetKey)) {
            if (key === targetKey) {
                eventFunc();
            }
        } else {
            if (keyCode === targetKey) {
                eventFunc();
            }
        }

    }
    ;
    // Add event listeners
    useEffect(() => {
        window.addEventListener("keydown", downHandler);
        ;
        // Remove event listeners on cleanup
        return () => {
            window.removeEventListener("keydown", downHandler);
            ;
        };
    }, []); // Empty array ensures that effect is only run on mount and unmount
    return eventFunc;
}
