import { moment } from "@tuval/core";
import { css, useState } from "@tuval/forms";
import React, { useEffect } from "react";



export const ClockComponent = () => {
    let timer = null;
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        if (timer == null) {
            timer = setInterval(() => {
                setTime(new Date());
            }, 1 * 1000);
        }

        return () => clearInterval(timer);

    })

    const className = css`
    & .clock {
        font-size: 30px;
    }
    `
    return (
        <div className={className}>
            <span className="clock">
                {/* print the string prettily */}
                {moment(time).format('HH:mm')}
            </span>
        </div>
    );
}