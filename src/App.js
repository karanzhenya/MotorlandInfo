import './App.css';
import state from './state'
import {Button} from "./Button";
import {useState} from "react";
import {Grid} from "@material-ui/core";


export default function App(props) {

    /*let names = state.map(t => t.name)
    console.log(names)
    let model = state.map(m => m.models)
    console.log(model)*/
    /*function callName (id) {
        let a = state.find(k => k.id === id)
        console.log(a)
        let b = a.models.map(ab => console.log(ab.type))
    }*/

    let [password, setPassword] = useState("");
    const changePassword = (e) => {
        setPassword(e.currentTarget.value)
    }
    return (
        <div className={"app-wrapper"}>
            <Grid container>
                <input onChange={changePassword} className={'password'} value={password} type={"password"}/>
            </Grid>
            {password == "1111" ? <Grid item> <Button state={state}/> </Grid> : ""}
        </div>
    )
}


