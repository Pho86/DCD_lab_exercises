let c_template = document.createElement("template"); //<template></template>
c_template.innerHTML = `
<style> 
    body {
        width: 100vw;
        height:100vh; 
        display:flex;
        justify-content: center;
        align-items: center;
    }
    </style>
<body>
    <style>
        .counter {
            background-color: wheat;
            display:flex;
            border-radius: 10%;
            padding: 0.2rem;
        }
        .counter > button {
            width: 2vw;
            height: 2vh;
            border: none;
            border-radius: 1rem;
            background-color: royalblue;
        }
        .counter > div {
            flex:1;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0.2rem;
            
        }
        .bar {
            width:0px;
            height: 15px;
            background-color: seagreen;
        }
    </style>
    <div class="counter">
        <button id="d_but">-</button>
        <div id="number">0</div>
        <button id="i_but">+</button>
    </div>
    <div id="bar"></div> 
`;

class TheCounter extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode:"open"});
        this.num = 0;
    }

    connectedCallback() {
        this.shadowRoot.appendChild(c_template.content.cloneNode(true));
        this.shadowRoot.querySelector(".i_but").onClick = () => this.increase();
        this.shadowRoot.querySelector(".d_but").onClick = () => this.decrease();
    }
    decrease() {
        this.num = this.num - 1;
        this.shadowRoot.querySelector(".number").innerText = this.num;
        this.shadowRoot.querySelector(".bar").style.width = (this.num*10)+"px";
    }
    increase() {
        this.num = this.num + 1;
        this.shadowRoot.querySelector(".number").innerText = this.num;
        this.shadowRoot.querySelector(".bar").style.width = (this.num*10)+"px";
    }
}

customElements.define("the-counter", TheCounter);


