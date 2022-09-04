import StyleSheet from "./style.css"

const template = document.createElement("template")

template.innerHTML = `
  <style>
   ${StyleSheet}
  </style>
  <div class="button-container">
  <div class="inner-circle"></div>
  <div class="inner-circle-shadow"></div>
  <div class="neu-btn-inner"></div>
  <div class="neu-btn-inner-shadow"></div>

    <div class="neu-btn-shadow"></div>
    <div class="neu-btn">
      <slot name="buttonText">
    </div>
  </div>
`

class HNeuButton extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open"})
    this.shadowRoot?.appendChild(template.content.cloneNode(true))

    this.onOff = false
  }

  toggleOnOff = () => {
    this.onOff = !this.onOff
    this.onOff ? this.getOn() : this.getOff()
  }

  getOff = () => {
    this.shadowRoot.querySelector(".neu-btn-shadow").style.boxShadow = "5px 5px 12px rgb(21, 22, 26)"
    this.shadowRoot.querySelector(".neu-btn").style.boxShadow = "-5px -5px 7px rgb(73, 78, 92)"
  }

  getOn = () => {
    this.shadowRoot.querySelector(".neu-btn-shadow").style.boxShadow = "inset -4px -4px 7px rgb(73, 78, 92)"
    this.shadowRoot.querySelector(".neu-btn").style.boxShadow = "inset 4px 4px 7px rgb(24, 25, 27)"
  }

  static get observedAttributes() {
    return ["buttonText", "type"]
  }

  attributeChangedCallback(buttonText, oldValue, newValue) {
    if (this.getAttribute("type") == "default") {
      this.shadowRoot.querySelector(".neu-btn").style.borderRadius = "20px"
      this.shadowRoot.querySelector(".neu-btn-shadow").style.borderRadius = "20px"
    } else if (this.getAttribute("type") == "round") {
      this.shadowRoot.querySelector(".neu-btn").style.borderRadius = "100%"
      this.shadowRoot.querySelector(".neu-btn-shadow").style.borderRadius = "100%"
    } 
    
    if (this.getAttribute("type") == "circle") {
      this.shadowRoot.querySelector(".neu-btn").style.borderRadius = "100%"
      this.shadowRoot.querySelector(".neu-btn-shadow").style.borderRadius = "100%"
      this.shadowRoot.querySelector(".neu-btn-inner").style.visibility = "visible"
      this.shadowRoot.querySelector(".neu-btn-inner-shadow").style.visibility = "visible"
      this.shadowRoot.querySelector(".inner-circle").style.visibility = "visible"
      this.shadowRoot.querySelector(".inner-circle-shadow").style.visibility = "visible"
      this.shadowRoot.querySelector(".button-container").removeEventListener("click", this.toggleOnOff)
    } else {
      this.shadowRoot.querySelector(".neu-btn-inner").style.visibility = "hidden"
      this.shadowRoot.querySelector(".neu-btn-inner-shadow").style.visibility = "hidden"
      this.shadowRoot.querySelector(".inner-circle").style.visibility = "hidden"
      this.shadowRoot.querySelector(".inner-circle-shadow").style.visibility = "hidden"
      this.shadowRoot.querySelector(".button-container").addEventListener("click", this.toggleOnOff)
    }
  }

  connectedCallback() {
    if (this.getAttribute("type") != "circle") {
      this.shadowRoot.querySelector(".button-container").addEventListener("click", this.toggleOnOff)
    }
  }

  disconnectedCallback() {
    this.shadowRoot.querySelector(".button-container").removeEventListener("click", this.toggleOnOff)
  }
}

export default HNeuButton