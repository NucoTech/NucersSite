import React from "react"
import Typed from "typed.js"

const TypedDisplay = () => {
    React.useEffect(() => {
        new Typed("#typed-strings", {
            strings: ["Hello Nucer, ^2000", "Welcome to Nucers Community!"],
            typeSpeed: 50,
            backSpeed: 30,
            smartBackspace: false,
        })
    })
    return (
        <div
            style={{
                textAlign: "center",
                margin: "0 auto 20px",
                color: "white",
                fontWeight: 600,
                fontSize: "x-large",
                padding: "20px",
                textShadow: "0 0 2px black",
            }}
        >
            <span id="typed-strings"></span>
        </div>
    )
}

export default TypedDisplay
