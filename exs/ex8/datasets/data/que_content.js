export const header = "Answer these questions!";

export const qs = [
    {
        title: "How are you doing?",
        ops: ["Good", "Bad"]
    },
    {
        title: "How are you feeling?",
        ops: ["Happy", "Anxious", "Sad"]
    },
    {
        title: "What are you planning to do today?",
        ops: ["Do nothing", "Go running"]
    },
]
export const rs = {
    Good: {
        text: [
            "Great to hear that you're feeling good",
            "I love your positive attitude"
        ],

        img: "https://placekitten.com/200/200"
    },

}
// export const ops = [
//     ["Nice", "Bad"],
//     ["Happy", "Anxious", "Sad"],
//     ["Do nothing", "Go running"]
// ]

// we store the answers from the UI
var answers = [];
export function ChangeAnswers(n, qnum) {
    answers[qnum] = n;
    console.log(answers)
}

export function GetAnswers() {
    return answers;
}

// we store the name from the UI
var name = '';

export function ChangeName(n) {
    name = n;
    console.log(name);
}

export function GetName() {
    return name;
}