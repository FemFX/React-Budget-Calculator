import React, { useState } from 'react';
import Value from './Value';
import Results from './Results';
import '../App.css'

export default function Form() {
    const [val, setValue]           = useState('')
    const [isPlus, setIsPlus]       = useState(false)
    const [isMinus, setIsMinus]     = useState(false)
    const [budget, setBudget]       = useState(0)
    const [isClicked, setIsClicked] = useState(false)


    const [totalPlus, setTotalPlus]         = useState(0)
    const [totalMinus, setTotalMinus]       = useState(0)

    function handleClick() { 
        if (val !== ''){
            
            if (isPlus) {
                setBudget(budget  + parseInt(val))
                setTotalPlus(totalPlus + parseInt(val))
                setIsPlus(false)
                setIsClicked(true)
            } 
        
            if (isMinus) {
                setBudget(budget - parseInt(val))
                setTotalMinus(totalMinus + parseInt(val))
                setIsMinus(false)
                setIsClicked(true)
            }
            
        }
     }
     function plusFunc() {
        setIsPlus(true)
     }
     function minusFunc() {
        setIsMinus(true)
     }
    return (
        <div>
            <div className="container">
                <input 
                    type="text" 
                    className="form-control mt-5" 
                    id="inp" 
                    value={val}
                    onChange={e => setValue(e.target.value)}
                />
                <div className="buttons mt-2">
                    <button className="btn btn-success" onClick={() => plusFunc()}>+</button>
                    <div className="container">
                        <button className="btn btn-block btn-primary" onClick={()=> handleClick()}>Добавить значение</button>
                    </div>
                    <button className="btn btn-danger" onClick={() => minusFunc()}>-</button>
                </div>
            </div>
            <Value 
                budget = {budget}
            />
            {isClicked 
                ? <Results 
                    totalP = { totalPlus  }
                    totalM = { totalMinus }
                /> 
                : false}
        </div>
    )
}
