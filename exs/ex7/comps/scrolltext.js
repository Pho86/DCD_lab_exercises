//MUST HAVE - CREATE A TEMPLATE TAG
var template_scrolltext = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_scrolltext.innerHTML = `
<style>
h1 {
  position:relative;
  transition:left 1s;
  left:0vw;
  margin:300px 0;
}
</style>
<h1 class='head'>Hi</h1>
`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class ScrollText extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_scrolltext.content.cloneNode(true)); //use the template to make a clone
        
        
        // this.shadowRoot.querySelector('.head').onclick = () => this.slideRight(); // testing ui states
        //assign variables!
    }
    //To-do - CREATE THE FUNCTIONALITIES HERE!
    slideRight() {
        this.shadowRoot.querySelector('.head').style.cssText = `
            left:100vw;
        `
    }
    slideLeft() {
        this.shadowRoot.querySelector('.head').style.cssText = `
            left:0vw;
        `
    }
}

//MUST HAVE - define the tag for the custom elements
customElements.define("scroll-text", ScrollText)