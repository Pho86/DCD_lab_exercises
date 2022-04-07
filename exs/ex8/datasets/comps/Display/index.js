import styled from 'styled-components';
import {useRouter} from 'next/router'

const DisplayCont = styled.div`
display:flex;

`;

const ImageCont = styled.div `
width:200px;
height:200px;
border-radius:50%;
border:purple double 10px;
margin:10px;
`

const DispImage = styled.img`
width:100%;
height:100%;
object-fit:cover;
border-radius:50%;
`

export default function Display({
  arr=[]
}) {
  const r = useRouter();

  return <DisplayCont>
    {
      arr.map((o, i) => 
      <ImageCont onClick={
        ()=>r.push({
          pathname:"/categories/results",
          query:{
            item:o.route
          }
        })
      }>
        <DispImage src={o.img}/>
        </ImageCont>)
    }
  </DisplayCont>
}