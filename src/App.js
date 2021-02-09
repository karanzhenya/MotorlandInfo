import './App.css';
import state from './state'
import Button from "./Button";


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


    return (
        <div className={"app-wrapper"}>
            <Button state={state}/>
            {/*{state.map(s => <Button id={s.id} data={data}/>)}*/}
            {/* {visible ? state.map(s => <Button id={s.id} name={s.name} changeVisible={changeVisible}/>) :
                <div>
                    <button onClick={changeVisible}>Back</button>
                    <br/>
                    {state.map(b => <button onClick={() => {
                        alert(b.model)
                    }}>{"xxx"}</button>)}
                </div>}
                <div>
                    <button onClick={changeVisible}>Back</button>
                    <br/>
                    <button onClick={() => {
                        alert(state[17].info[0])
                    }}>{state[17].model[1]}
                    </button>
                    <br/>
                    <button onClick={() => {
                        alert(state[17].info[1])
                    }}>{state[17].model[2]}
                    </button>
                    <br/>
                    <button onClick={() => {
                        alert(state[17].info[2])
                    }}>{state[17].model[3]}
                    </button>
                    <br/>
                    <button onClick={() => {
                        alert(state[17].info[3])
                    }}>{state[17].model[5]}
                    </button>
                    <br/>
                    <button onClick={() => {
                        alert(state[17].info[4])
                    }}>{state[17].model[6]}
                    </button>
                    <br/>
                </div>*/}
        </div>
    )
}


