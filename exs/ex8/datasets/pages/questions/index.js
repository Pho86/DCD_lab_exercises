import { GetName, qs, ChangeAnswers } from '../../data/que_content'
import Options from '../../comps/Question/Options'
import { useRouter } from 'next/router';

export default function Questions(){
  const nm = GetName();
  const r = useRouter();
  var {qnum} = r.query;

  if (qnum === undefined) {
    qnum = 0;
  }
  return <div>
    <h1>Hi {nm} </h1>
    Answer some questions
    <Options q={qs[qnum].title}
    arr={qs[qnum].ops}
    />

  {
  Number(qnum) < qs.length -1 && 
    <button onClick={
      ()=>r.push({
        pathname:'/questions',
        query:{
          qnum:Number(qnum) + 1 > qs.length-1 ? 2  : Number(qnum)+1
        }
      })
    }>Next Quest</button>
  }
  { 
    Number(qnum) >= qs.length - 1 && 
    <button onClick={
      ()=>r.push({
        pathname:'/questions/results'
      })
    }>Go to Results</button>
  }
  </div>
  
}