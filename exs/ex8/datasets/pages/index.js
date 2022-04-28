import styled, { keyframes } from 'styled-components'
import Card from '../comps/Card';
import { fadeIn, fadeOut } from '../data/animation';
import shows from '../data/disney_shows.json';
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react';

const HomeCont = styled.div`
background:#DAA;
animation:${fadeIn} 5s;
`

const HomeH1 = styled.h1`
animation:${fadeOut} 10s;
`

const ShowCont = styled.div`
background:${props => props.bg || '#AAD'};
animation:${props => props.fade} 3s;
padding:10px;
position:relative;
animation-delay:${props => props.delay || "0s"};
animation-fill-mode:both;
`

export default function Home({

}) {
  const r = useRouter();
  var { show } = r.query;

  const [words, setWords] = useState('Welcome to my app!');
  const [f, setF] = useState(fadeIn);
  // const [selected, setSelected] = useState(false);
  const [selected, setSelected] = useState(0);

  if (show === undefined) {
    show = 0;
  }
  //fade Out -> qnum increase (next show) -> fade In
  const NextShow = () => {
    //fade out
    setF(fadeOut);

    setTimeout(() => {
      // change shows
      r.push({
        pathname: "/",
        query: {
          show: Number(show) + 5
        }
      })
      //fade back in
      setF(fadeIn);

    }, 7000)
  }
  //only when show changes fade in 
  useEffect(() => {
    setF(fadeIn);
  }, [show]);

  show = Number(show)
  return (
    <HomeCont>
      {/* show some cards here */}
      <HomeH1>{words}</HomeH1>
      <button onClick={
        () =>
          setWords('Hi, the values have changed.')
      }>Change Words </button>

      <ShowCont
        fade={f}
        delay="0s"
        bg={selected === show ? "#ADA" : "#AAD"}
        onClick={
          () => setSelected(show)
        }>
        {shows[show].title} -
        {shows[show].release_year}
      </ShowCont>

      <ShowCont
        fade={f}
        delay="1s"
        bg={selected === show + 1 ? "#ADA" : "#AAD"}
        onClick={
          () => setSelected(show + 1)
        }>
        {shows[show + 1].title} -
        {shows[show + 1].release_year}
      </ShowCont>

      <ShowCont
        fade={f}
        delay="2s"
        bg={selected === show + 2 ? "#ADA" : "#AAD"}
        onClick={
          () => setSelected(show + 2)
        }>
        {shows[show + 2].title} -
        {shows[show + 2].release_year}
      </ShowCont>

      <ShowCont
        fade={f}
        delay="3s"
        bg={selected === show + 3 ? "#ADA" : "#AAD"}
        onClick={
          () => setSelected(show + 3)
        }>
        {shows[show + 3].title} -
        {shows[show + 3].release_year}
      </ShowCont>

      <ShowCont
        fade={f}
        delay="4s"
        bg={selected === show + 4 ? "#ADA" : "#AAD"}
        onClick={
          () => setSelected(show + 4)
        }>
        {shows[show + 4].title} -
        {shows[show + 4].release_year}
      </ShowCont>

        <h3>You've selected {shows[selected].title}</h3>


      <div>
        <button onClick={
          () => NextShow()
        }>Next Shows</button>

        <button onClick={
          () => setF(fadeOut)
        }>Fade Out</button>
      </div>
    </HomeCont>
  )
}
