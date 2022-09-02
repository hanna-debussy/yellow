import StyleSheet from "./style.css"

const template = document.createElement("template")

template.innerHTML = `
  <style>
   ${StyleSheet}
  </style>
  <div class="button-container">
    <div class="neu-btn-shadow">
    </div>
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
    return ["buttonText"]
  }

  attributeChangedCallback(buttonText, oldValue, newValue) {
    this.shadowRoot.querySelector(".neu-btn").innerText = this.getAttribute("buttonText");
  }

  connectedCallback() {
    this.shadowRoot.querySelector(".button-container").addEventListener("click", this.toggleOnOff)
  }

  disconnectedCallback() {
    this.shadowRoot.querySelector(".button-container").removeEventListener("click", this.toggleOnOff)
  }
}

export default HNeuButton