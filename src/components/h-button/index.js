import styleSheet from './style.css'

const template = document.createElement("template")

template.innerHTML = `
  <style>
    ${styleSheet}
  </style>
  
  <div class="control-btns">
    <button class="small">Small</button>
    <button class="original">Turn Back</button>
    <button class="large">Large</button>
    <button id="yellow">Yellow</button>
    <button id="purple">Purple</button>
    <button class="light">Light On</button>
  </div>
  <div>
    <button id="hanna">
      콕
    </button>
  </div>
`
class HButton extends HTMLElement {
  constructor() {
    super();
    // 어떤 요소에든 shadowRoot를 연결
    this.attachShadow({ mode: "open" })
    // shadowRoot에.appendChild한다(근데 이제 template content를.cloneNode해서)
    this.shadowRoot?.appendChild(template.content.cloneNode(true))
    
    this.lightSwitch = false
  }

  changeToYellow = () => {
    this.lightOnOff = false
    this.getLightOnOff()

    this.shadowRoot.querySelector("#hanna").style.backgroundColor = "#ffe033"
    this.shadowRoot.querySelector("#hanna").style.color = "#000"
  }

  changeToPurple = () => {
    this.lightOnOff = false
    this.getLightOnOff()

    this.shadowRoot.querySelector("#hanna").style.backgroundColor = "#906eff"
    this.shadowRoot.querySelector("#hanna").style.color = "#fff"
  }

  getLightOnOff = () => {
    this.buttonColor = this.shadowRoot.querySelector("#hanna").style.backgroundColor

    this.shadowRoot.querySelector("#hanna").style.boxShadow = 
    this.lightOnOff ? `0 0 5px ${this.buttonColor}, 0 0 8px ${this.buttonColor}, 0 0 17px ${this.buttonColor}, 0 0 35px ${this.buttonColor}` : "none"
    this.shadowRoot.querySelector(".light").innerHTML = 
    this.lightOnOff ? "Light Off" : "Light On"
    this.lightOnOff = !this.lightOnOff
  }

  getSmaller = () => {
    this.lightOnOff = false
    this.getLightOnOff()
    const Hanna = this.shadowRoot.querySelector("#hanna")
    Hanna.style.width = "150px"
    Hanna.style.height = "50px"
    Hanna.style.backgroundColor = "#ffe96e"
    Hanna.style.border = "4px"
    Hanna.style.fontSize = "1rem"
  }

  getOriginal = () => {
    this.lightOnOff = false
    this.getLightOnOff()
    const Hanna = this.shadowRoot.querySelector("#hanna")
    Hanna.style.width = "200px"
    Hanna.style.height = "70px"
    Hanna.style.backgroundColor = "#ffe033"
    Hanna.style.border = "none"
    Hanna.style.borderRadius = "30px"
    Hanna.style.fontSize = "1.5rem"
    Hanna.style.boxShadow = "none"

  }

  getLarger = () => {
    this.lightOnOff = false
    this.getLightOnOff()
    const Hanna = this.shadowRoot.querySelector("#hanna")
    Hanna.style.width = "350px"
    Hanna.style.height = "90px"
    Hanna.style.backgroundColor = "#ffd000"
    Hanna.style.border = "40px"
    Hanna.style.fontSize = "2rem"
  }

  // 특성이 추가/변경될 때마다 호출
  attributeChangedCallback(name, oldValue, newValue) {
    // this.shadowRoot.querySelector("#hanna").style.backgroundColor = this.getAttribute("color")
  }

  connectedCallback() {
    this.shadowRoot.querySelector("#yellow").addEventListener("click", this.changeToYellow)
    this.shadowRoot.querySelector("#purple").addEventListener("click", this.changeToPurple)
    this.shadowRoot.querySelector(".light").addEventListener("click", this.getLightOnOff)
    this.shadowRoot.querySelector(".small").addEventListener("click", this.getSmaller)
    this.shadowRoot.querySelector(".original").addEventListener("click", this.getOriginal)
    this.shadowRoot.querySelector(".large").addEventListener("click", this.getLarger)
  }

  disconnectedCallback() {
    this.shadowRoot?.querySelector("#yellow").removeEventListener("click", this.changeToYellow)
    this.shadowRoot.querySelector("#purple").removeEventListener("click", this.changeToPurple)
    this.shadowRoot.querySelector(".light").removeEventListener("click", this.lightOnOff)
    this.shadowRoot.querySelector(".small").removeEventListener("click", this.getSmaller)
    this.shadowRoot.querySelector(".original").removeEventListener("click", this.getOriginal)
    this.shadowRoot.querySelector(".large").removeEventListener("click", this.getLarger)
  }
}

export default HButton