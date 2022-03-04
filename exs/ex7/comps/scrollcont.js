//MUST HAVE - CREATE A TEMPLATE TAG
var template_scrollcont = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_scrollcont.innerHTML = `
<style>
    #cont {
        position:fixed;
        left: 0;
        top:0;
        width:100vw;
        height:100vh;
        overflow-y:auto;
        overflow-x:none;
    }
</style>

<div id='cont'>
    <scroll-text id='scroll1'></scroll-text>
    <scroll-text id='scroll2'></scroll-text>
    <scroll-text id='scroll3'></scroll-text>
    <scroll-text id='scroll4'></scroll-text>
    <scroll-text id='scroll5'></scroll-text>
</div>
`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class ScrollCont extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_scrollcont.content.cloneNode(true)); //use the template to make a clone
        //style the main container!
        // (e) -> is the event variable that the browser is sending back. The event variable has data about the event such as mouse positions etc.... 
        this.shadowRoot.querySelector('#cont').onscroll = (e) => this.handleContScroll(e.target.scrollTop);
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
    handleContScroll(scrollNum = 0) { // var scrollNum = e.target.scrollTop
        if(scrollNum > 200) {
            this.shadowRoot.querySelector('#scroll1').slideRight();
        } if (scrollNum > 500 ) {
            this.shadowRoot.querySelector('#scroll2').slideRight();
        } if (scrollNum > 700 ) {
            this.shadowRoot.querySelector('#scroll3').slideRight();
        } if (scrollNum > 800 ) {
            this.shadowRoot.querySelector('#scroll4').slideRight();
        } if (scrollNum > 900 ) {
            this.shadowRoot.querySelector('#scroll5').slideRight();
        }
        console.log(scrollNum)
    }
}

//MUST HAVE - define the tag for the custom elements
customElements.define("scroll-cont", ScrollCont)