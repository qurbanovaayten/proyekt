import React, { useState, useEffect} from 'react'
import {HiSun} from 'react-icons/hi'
import {WiMoonWaxingCrescent3} from 'react-icons/wi'

function useThemeSwitcher () {
    const [mode, setMode] = useState(()=>localStorage.getItem("mode"));
    useEffect(()=>{
        if(mode === "dark"){
            document.body.classList.add("dark-mode");
            localStorage.setItem("mode", "dark");
        }else{
            document.body.classList.remove("dark-mode");
            localStorage.setItem("mode", "light");
        }
    }, [mode])
    return (
    <div className='mode'>
        <span style={{color: mode=== "dark" ? 'grey' : "yellow"}}><HiSun/></span>
        <div className="switch-checkbox" >
            <label className='switch'>
                <input type="checkbox" 
                onClick={()=> 
                setMode(mode => mode=== "dark" ? "light" : "dark")}/>
                <span className='slide1 round'></span>
            </label>
        </div>
        <span className='me-2' style={{color: mode=== "dark" ? '#c96dfd' :  "grey"}}>
            <WiMoonWaxingCrescent3/>
        </span>
    </div>
  )
}
export default useThemeSwitcher