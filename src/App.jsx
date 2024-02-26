import { useState, useCallback } from "react"
function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setnumAllowed] = useState(false);
  const [s_charAllowed, s_setcharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  
  const passGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTabcdefghijklmnopqrst";
    if(numAllowed) str+= "12345607890";
    if(s_charAllowed) str+= "!@#$%^&*()-_+={}[]:;\|,./?<>~`";
    
    for (let i = 1; i <=length; i++) {
      let char = Math.floor(Math.random() * str.length +1);
      pass = str.charAt(char);
    }
      setPassword(pass);
  }, [length, numAllowed, s_charAllowed, setPassword])

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg my-8 text-center text-orange-500 bg-gray-800">
      <h1 className="text-white text-center my-3">Password generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
      <input type="text"
             placeholder="Password"
             className="w-full rounded-lg outline-none px-3 py-1"
             value={password}
             readOnly />
             <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">Copy</button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input type="range"
          min={6}
          max={100}
          value={length}
          className="cursor-pointer"
          onChange={(e)=>{setLength(e.target.value)}}/>
          <label>Length: {length}</label>
        </div>
        <div className="flex text-sm gap-x-2">
          <input type="checkbox" 
          id="numberInput" 
          defaultChecked={numAllowed}
          onChange={() =>{
            setnumAllowed((prev) => {!prev});
          }}/>
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className="flex text-sm gap-x-2">
          <input type="checkbox" 
          id="s_charInput" 
          defaultChecked={s_charAllowed}
          onChange={() =>{
            s_setcharAllowed((prev) => {!prev});
          }}/>
          <label htmlFor="s_charInput">Numbers</label>
        </div>
      </div>
    </div>
    
  )
}

export default App
