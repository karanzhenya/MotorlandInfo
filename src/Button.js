import './App.css';
import {useState} from "react";
import state from "./state";

function Button(props) {
    let [data, setData] = useState("")

    function callName(id) {
        let selectedCar = props.state.find(k => k.id === id)
        console.log(selectedCar)
        let typeSelectedCar = selectedCar.models.map(t => ({type: t.type,info: t.info}))
        console.log(typeSelectedCar)
        setData(typeSelectedCar.map(type => <button className={"data"} onClick={() => {alert(type.info)}}>{type.type}</button>))
    }

    return (
        <div>
            <div className={"nameAvto"}>
                {state.map(n => <button onClick={() => {
                    callName(n.id)
                }}>{n.name}</button>)}
            </div>
            <div className={"types"}>{data}</div>
        </div>
    );
}

export default Button;
