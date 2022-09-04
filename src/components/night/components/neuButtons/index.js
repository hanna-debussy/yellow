import StyleSheet from "./style.css"

const buttonTemplate = document.createElement("template")

buttonTemplate.innerHTML = `
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
    this.shadowRoot?.appendChild(buttonTemplate.content.cloneNode(true))

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

  attributeChangedCallback(attr, oldValue, newValue) {
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


const toggleTemplate = document.createElement("template")

toggleTemplate.innerHTML = `
  <style>
    ${StyleSheet}
  </style>
  <div class="toggle-container">
    <div class="bar"></div>
    <div class="bar-shadow"></div>
    <div class="bar-background"></div>
    <div class="bar-background-shadow"></div>
    <div class="onBar"></div>
    <div class="switch"></div>
    <div class="switch-shadow"></div>
    <div class="switch-background"></div>
  </div>
`

class HNeuToggle extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open"})
    this.shadowRoot?.appendChild(toggleTemplate.content.cloneNode(true))

    this.toggleValue = false
  }

  toggle = () => {
    this.toggleValue = !this.toggleValue
    const toggleWidth = this.getAttribute("width")
    const toggleHeight = toggleWidth * 0.4
    const switchDiameter = toggleHeight * 0.7
    const switchPosition = toggleHeight * 0.15
    const switchOn = (toggleWidth - switchDiameter - switchPosition) + "px"
    const switchOff = switchPosition + "px"
    
    if (this.toggleValue) {
      this.shadowRoot.querySelector(".toggle-container .switch").style.left = switchOn
      this.shadowRoot.querySelector(".toggle-container .switch-shadow").style.left = switchOn
      this.shadowRoot.querySelector(".toggle-container .switch-background").style.left = switchOn
      this.shadowRoot.querySelector(".toggle-container .switch").style.boxShadow = "-5px 0px 15px rgb(24, 25, 27)"
      this.shadowRoot.querySelector(".toggle-container .onBar").style.width = switchOn

      this.shadowRoot.querySelector(".toggle-container .bar").style.backgroundColor = "rgb(122, 157, 228)"
      this.shadowRoot.querySelector(".toggle-container .bar-background").style.background = "linear-gradient(to right, rgb(142, 177, 248),rgb(155, 135, 241))"
      this.shadowRoot.querySelector(".toggle-container .bar-background").style.boxShadow = "inset 5px 5px 12px rgb(142, 177, 248)"
      this.shadowRoot.querySelector(".toggle-container .bar-background-shadow").style.boxShadow = "inset -5px -5px 7px rgb(148, 132, 238)"
    } else {
        this.shadowRoot.querySelector(".toggle-container .switch").style.left = switchOff
        this.shadowRoot.querySelector(".toggle-container .switch-shadow").style.left = switchOff
        this.shadowRoot.querySelector(".toggle-container .switch-background").style.left = switchOff
        this.shadowRoot.querySelector(".toggle-container .switch").style.boxShadow = "5px 0px 15px rgb(24, 25, 27)"
        this.shadowRoot.querySelector(".toggle-container .onBar").style.width = switchOff

        this.shadowRoot.querySelector(".toggle-container .bar").style.backgroundColor = "rgb(52, 57, 73)"
        this.shadowRoot.querySelector(".toggle-container .bar-background").style.background = "rgb(38, 42, 54)"
        this.shadowRoot.querySelector(".toggle-container .bar-background").style.boxShadow = "inset 5px 5px 12px rgb(32, 34, 37)"
        this.shadowRoot.querySelector(".toggle-container .bar-background-shadow").style.boxShadow = "inset -5px -5px 7px rgb(40, 42, 46)"
        }
  }

  static get observedAttributes() {
    return ["width"]
  }
  
  attributeChangedCallback(attr, oldValue, newValue) {
    const toggleWidth = this.getAttribute("width")
    const toggleHeight = toggleWidth * 0.4
    this.shadowRoot.querySelector(".toggle-container").style.width = `${toggleWidth}px`
    this.shadowRoot.querySelector(".toggle-container").style.height = `${toggleHeight}px`
    this.shadowRoot.querySelector(".toggle-container .bar-background").style.width = `${toggleWidth - (toggleHeight * 0.12)}px`
    this.shadowRoot.querySelector(".toggle-container .bar-background").style.height = `${toggleHeight * 0.88}px`
    this.shadowRoot.querySelector(".toggle-container .bar-background-shadow").style.width = `${toggleWidth - (toggleHeight * 0.12)}px`
    this.shadowRoot.querySelector(".toggle-container .bar-background-shadow").style.height = `${toggleHeight * 0.88}px`

    this.shadowRoot.querySelector(".toggle-container .bar-background").style.top  = `${(toggleHeight * 0.06)}px`
    this.shadowRoot.querySelector(".toggle-container .bar-background-shadow").style.top = `${(toggleHeight * 0.06)}px`
    this.shadowRoot.querySelector(".toggle-container .bar-background").style.left  = `${(toggleHeight * 0.06)}px`
    this.shadowRoot.querySelector(".toggle-container .bar-background-shadow").style.left = `${(toggleHeight * 0.06)}px`

    this.shadowRoot.querySelector(".toggle-container .bar").style.borderRadius = `${toggleWidth * 0.2}px`
    this.shadowRoot.querySelector(".toggle-container .bar-shadow").style.borderRadius  = `${toggleWidth * 0.2}px`
    this.shadowRoot.querySelector(".toggle-container .bar-background").style.borderRadius  = `${toggleWidth * 0.2}px`
    this.shadowRoot.querySelector(".toggle-container .bar-background-shadow").style.borderRadius = `${toggleWidth * 0.2}px`

    const switchDiameter = `${toggleHeight * 0.7}px`
    const switchPosition = `${toggleHeight * 0.15}px`
    this.shadowRoot.querySelector(".toggle-container .switch").style.width = switchDiameter
    this.shadowRoot.querySelector(".toggle-container .switch-shadow").style.width = switchDiameter
    this.shadowRoot.querySelector(".toggle-container .switch-background").style.width = switchDiameter
    this.shadowRoot.querySelector(".toggle-container .switch").style.height = switchDiameter
    this.shadowRoot.querySelector(".toggle-container .switch-shadow").style.height = switchDiameter
    this.shadowRoot.querySelector(".toggle-container .switch-background").style.height = switchDiameter
    this.shadowRoot.querySelector(".toggle-container .switch").style.top = switchPosition
    this.shadowRoot.querySelector(".toggle-container .switch-shadow").style.top = switchPosition
    this.shadowRoot.querySelector(".toggle-container .switch-background").style.top = switchPosition
    this.shadowRoot.querySelector(".toggle-container .switch").style.left = switchPosition
    this.shadowRoot.querySelector(".toggle-container .switch-shadow").style.left = switchPosition
    this.shadowRoot.querySelector(".toggle-container .switch-background").style.left = switchPosition
    this.shadowRoot.querySelector(".toggle-container .switch").style.borderRadius = switchDiameter
    this.shadowRoot.querySelector(".toggle-container .switch-shadow").style.borderRadius = switchDiameter
    this.shadowRoot.querySelector(".toggle-container .switch-background").style.borderRadius = switchDiameter

    this.shadowRoot.querySelector(".toggle-container .onBar").style.width = switchDiameter
    // this.shadowRoot.querySelector(".toggle-container .switch").css({"width": `${toggleHeight * 0.8}px`, "height": `${toggleHeight * 0.8}px`, "border-radius": `${toggleHeight * 0.8}px`})
  }

  connectedCallback () {
    this.shadowRoot.querySelector(".toggle-container .switch-background").addEventListener("click", this.toggle)
  }

  disconnectedCallback() {
    this.shadowRoot.querySelector(".toggle-container .switch-background").removeEventListener("click", this.toggle)
  }
}


export {HNeuButton, HNeuToggle}
