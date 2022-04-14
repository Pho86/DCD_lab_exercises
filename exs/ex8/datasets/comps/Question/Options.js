import styled from 'styled-components';
import { useRouter } from 'next/router';
import { ChangeAnswers } from '../../data/que_content';

const OpsCont = styled.div`

`

const QsTitle = styled.h3`
`

const OpsButton = styled.button`

`


export default function Options({
  q = "What is your fav food?",
  arr = ["Nice", "Bad"]
}) {
  const r = useRouter();
  var { qnum } = r.query;
  if (qnum === undefined) {
    qnum = 0;
  }

  return <OpsCont>
    <QsTitle>{q}</QsTitle>
    {arr.map((o, i) => <OpsButton onClick={
      () => ChangeAnswers(o, qnum)}>{o}</OpsButton>)}
  </OpsCont>
}