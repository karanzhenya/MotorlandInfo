import './App.css';
import {useState} from "react";
import state from "./state";

function Button(props) {
 let [state, setState] = useState(props.state)
    let [data, setData] = useState("")
    function callName (id) {
        let a = state.find(k => k.id === id)
        console.log(a)
        let b = a.models.map(ab => ab.type)
        setData(b.map(d => <button>{d}</button>))
    }

    return (
        <div>
        <div className={"nameAvto"}>
            {state.map(n => <button onClick={() => {callName(n.id)}}>{n.name}</button>)}
        </div>
            <div>{data}</div>
        </div>
    );
}

export default Button;
