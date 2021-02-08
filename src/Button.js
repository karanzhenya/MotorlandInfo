import './App.css';
import {useState} from "react";
import state from "./state";

function Button(props) {
 let [state, setState] = useState(props.state)
    function callName (id) {
        let a = state.find(k => k.id === id)
        console.log(a)
        let b = a.models.map(ab => console.log(ab.type))
    }
    return (
        <div className={"nameAvto"}>
            {state.map(n => <button onClick={() => {callName(n.id)}}>{n.name}</button>)}
        </div>
    );
}

export default Button;
