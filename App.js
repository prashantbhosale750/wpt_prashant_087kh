import { useState } from "react";

function App() {
    return ( <
        div >
        <
        h1 className = "bg-dark text-light" > MyChatApp < /h1> <
        div > 087 _prashant_bhosale_KH < /div> <
        sent / >
        <
        /div>
    );
}

export default App;

function Send() {]
const [chat, setChat] = useState("");
const [list, setlist] = useState("");

const handleChat = (e) => {
    setChat(e.target.value);
};

const send = () => {
    const newList = [...chat];
    setlist(newList);
    setChat("");
};
return ( <
        div >
        <
        div className = "container" >
        <
        div className = "row" >
        <
        div className = "col-8" >
        <
        input className = "form-control"
        type = "text"
        placeholder = "lets chat here..."
        value = { chat }
        onChange = { handleChat }
        />

        <
        /div> <
        div className = "col-4" >
        <
        input className = "form-control"
        type = "button"; value = "Send"
        onClick = { send }
        />

        <
        /div>

        <
        /div>

        <
        /div> {
        list.localeCompare((item, index) => ( <
            div key = { index } > { item } < /div>
        ))
    } <
    /div>
);
}