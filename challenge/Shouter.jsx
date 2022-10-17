import { useState } from "react"

function Shouter() {
    const [text, setText] = useState("");
    function updateText(event) {
        setText(event.target.value);
    }
    return (
        <form onSubmit={updateText}>
            <input value = {text} onChange={updateText} />
            <output>{text.toUpperCase()}</output>
        </form>
        )
}

export default Shouter