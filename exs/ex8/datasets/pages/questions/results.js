import { GetAnswers, GetName, rs} from "../../data/que_content"

export default function QResults() {
    const nm = GetName();
    const an = GetAnswers();
    return <div>
        Here are your results!
        <div>Hi {nm}, I see that you are doing {an[0]}, and you are feeling {an[1]}. This is why you are going to {an[2]} today. Is this right?</div>

        
        <h3>
            {rs[an[0]].text[
            Math.round(Math.random()*rs[an[0].length])
        ]}
        </h3>
        <img src={rs[an[0]].img}></img>
        
    </div>
}

