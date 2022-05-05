import styled, { keyframes } from 'styled-components'
import { useState, useEffect } from 'react'

const SwitchCont = styled.div`
padding:20px;
`

const SwitchBox = styled.div`
background:${props => props.bg || "#CCC"}; //active is #CCF, inactive = #CCC;
width:100px;
height:30px;
display:flex;
align-items:center;
transition: background 0.3s;
`;

const SwitchToggle = styled.div`
background:${props => props.bg || "#AAA"}; //active = #AAF, and inactive = #AAA;
width:50px;
height:50px;
//transform or translateX
position:relative;
left:${props => props.left || "0px"}; //active = 50px;
transition: left 0.3s, background 0.3s;
`;

const switch_data = {
  active: {
    boxbg: "#CCF",
    togglebg: "#AAF",
    toggleleft: "50px"
  },
  inactive: {
    boxbg: "#CCC",
    togglebg: "#AAA",
    toggleleft: "0px"
  }
}
export default function Switch({
  //attributes / props
  active = false,
  onSwitch = () => { }
  // retaught
}) {
  // const [a_state, setAState] = useState(active ? "active" : "inactive"); bad way for the future
  const [a_state, setAState] = useState(active ? "active" : "inactive");

  //synchronize the prop (active) and a_state together
  useEffect(() => {

    //mimic a state change 
    if (active === true) {
      setAState("active");
    }
    else {
      setAState("inactive");
    }
    // if the prop (active) is changed, perform this function
  }, [active]);

  useEffect(() => {
    if (a_state === "inactive") {
      onSwitch(false);
    } else {
      onSwitch(true)
    }
  }, [a_state])

  return <SwitchCont>
    <SwitchBox
      bg={
        switch_data[a_state].boxbg
        // a_state ? switch_data.active.boxbg : switch_data.inactive.boxbg} 
      }
      onClick={
        () => {
          setAState(a_state === "inactive" ? "active" : "inactive")
          // setAState(!a_state)
        }
      }>
      <SwitchToggle
        bg={switch_data[a_state].togglebg}
        left={switch_data[a_state].toggleleft}
      // bg={a_state ? switch_data.active.togglebg : switch_data.inactive.togglebg}
      // left={a_state ? switch_data.active.toggleleft : switch_data.inactive.toggleleft}


      >
      </SwitchToggle>
    </SwitchBox>
  </SwitchCont>
}