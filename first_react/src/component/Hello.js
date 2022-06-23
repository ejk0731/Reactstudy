import { useState } from "react";
import Username from "./Username";

export default function Hello({age}){
    const [name, setName] = useState('Mike');
    const msg = age > 19 ? "성인 입니다." : "미성년자 입니다.";

    return (
        <div>
            <h2 id="name">
                {name}({age}세) : {msg} 
            </h2>
            <Username name = {name}/>
            <button 
                onClick={() => {
                    setName(name === "Mike" ? "Jane" : "Mike");
                }}
            >
                Change
            </button>
        </div>
    ); 
    
}