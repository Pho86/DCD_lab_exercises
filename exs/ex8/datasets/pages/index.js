import styled, { keyframes } from 'styled-components'
import Card from '../comps/Card';
import Switch from '../comps/Card/Switch'
import shows from '../data/disney_shows.json'

import { options, ChangeOptions } from '../data/global_content';


export default function Home() {
  return (
    <div>
      {/* show some cards here */}
      {/* <Switch active={options.op1} onSwitch={(val)=>ChangeOptions("op1", val)}/>
      <Switch active={options.op2} onSwitch={(val)=>ChangeOptions("op2", val)}/>
      <Switch active={options.op3} onSwitch={(val)=>ChangeOptions("op3", val)}/> */}
      
      <Card 
        title={shows[0].title}
        description={shows[0].description}
      />
    </div>
  )
}
