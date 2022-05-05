import styled, {keyframes} from 'styled-components'

import Inputs from './Inputs'
import Switch from './Switch'
import {useState} from 'react'

export default function Card({
  //attributes / props
  title="",
  description=""
}){

  const [is_edit, setIsEdit] = useState(false);



  return <div>
    {/* Card Stuff
    {title} - {description} */}
    <Inputs txt = {title} edit={is_edit} />

    <Inputs txt = {description} edit={is_edit}/>

    <Switch onSwitch={(val)=>setIsEdit(val)}/> - Edit

  </div>
}