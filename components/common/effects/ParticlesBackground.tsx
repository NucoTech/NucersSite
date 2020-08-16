import React from "react"
const Particles = require("particlesjs")

const ParticlesBackground = () => {
    React.useEffect(() => {
        Particles.init({
            selector: "#background-partices",
            connectParticles: true,
            minDistance: 70,
            speed: 0.3,
            responsive: [
                {
                    breakpoints: 1180,
                    options: {
                        maxParticles: 90,
                        minDistance: 20,
                        speed: 0.5,
                    },
                },
                {
                    breakpoints: 414,
                    options: {
                        maxParticles: 90,
                        minDistance: 10,
                        speed: 0.5,
                    },
                },
            ],
        })
    })
    return (
        <canvas
            id="background-partices"
            style={{
                position: "absolute",
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                zIndex: 0,
            }}
        ></canvas>
    )
}

export default ParticlesBackground
