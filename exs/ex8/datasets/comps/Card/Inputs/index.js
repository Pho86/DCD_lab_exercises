import styled, {keyframes} from 'styled-components'
import {useState, useEffect} from 'react'

const InputsInputs = styled.input`
padding:20px;
border:#CCC double 1px;
color:#999;
`
export default function Inputs({
  //attributes / props
  txt='',
  edit=false
}){

  const [val, setVal] = useState(txt);


  //sychronize the prop (txt) with val
  useEffect(()=>{
    setVal(txt)
  }, [txt]);
  if (edit === false) {
    return <div>
    {val}
  </div>
  }

  return <div>  
    <InputsInputs type='text' value = {val}
    onChange = {
      (e)=>setVal(e.target.value)
    }/>
  </div>
}