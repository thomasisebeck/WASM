import './App.css'
import {useState} from "react";
import init from './wasm/adder_wasm.wasm?init'

function App() {

    const [numbers, setNumbers] = useState({a: 0, b: 0})
    const [result, setResult] = useState(0)

    const handleClick = () => {

        init().then((instance) => {
            const result = instance.exports.adder(numbers.a, numbers.b);
            setResult(result)
        })
    }

    return (
        <>
            <input type={"number"} onChange={e => setNumbers({...numbers, a: e.target.value})}/>
            <input type={"number"} onChange={e => setNumbers({...numbers, b: e.target.value})}/>
            <br/>
            <button onClick={handleClick}>get result</button>
            <p>Result: {result}</p>
        </>
    )
}

export default App
