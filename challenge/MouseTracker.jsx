import { useEffect, useState } from "react"

function MouseTracker() {
    const [ coord, setCoord ] = useState("")

    useEffect (() => {
        function updateCoord({clientX, clientY}) {
            const coordinates = clientX + "," + clientY
            setCoord(coordinates)
        }
        window.addEventListener("mousemove", updateCoord)
        return () => window.removeEventListener("mousemove", updateCoord)
    }, []);

    return <output >{coord}</output>
}

export default MouseTracker