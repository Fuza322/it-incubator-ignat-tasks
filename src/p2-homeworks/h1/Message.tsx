import React from "react"
import {MessageDataPropsType} from "./HW1"
import style from "./Message.module.css"

export function Message(props: MessageDataPropsType) {
    return (
        <div className={style.divMessageContainer}>
            <div className={style.divImageMessageSize}>
                <img className={style.imageMessageSize} src={props.avatar} alt="User's avatar"/>
            </div>
            <div className={style.divMessageInfo}>
                <div className={style.divMessageUserName}>
                    {props.name}
                </div>
                <div className={style.divMessageText}>
                    {props.message}
                </div>
            </div>
            <div>
                {props.time}
            </div>
        </div>
    )
}