import React from "react"

/**
 * 抵消ContentBox的影响
 */
export default (props: any) => (
    <div
        style={{
            margin: "-20px 0",
        }}
    >
        {props.children}
    </div>
)
