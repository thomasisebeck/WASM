import './App.css'
import {useEffect, useRef, useState} from "react";
import init from './wasm/adder_wasm.wasm?init'

interface Params {
    a: number,
    b: number
}

function App() {
    const [numbers, setNumbers] = useState<Params>({a: 0, b: 0})
    const [result, setResult] = useState<number>(0)
    const adder = useRef<CallableFunction | null>(null);

    useEffect(() => {
        const loadWasm = () => {
            init().then((instance) => {
                adder.current = instance.exports.adder as CallableFunction;
            })
        }
        loadWasm();
    }, []);

    const handleClick = () => {
        setResult(adder.current!(numbers.a, numbers.b))
    }

    return (
        <>
            <input type={"number"} onChange={e => setNumbers({...numbers, a: Number(e.target.value)})}/>
            <input type={"number"} onChange={e => setNumbers({...numbers, b: Number(e.target.value)})}/>
            <br/>
            <button onClick={handleClick}>get result</button>
            <p>Result: {result}</p>
        </>
    )
}

export default App
