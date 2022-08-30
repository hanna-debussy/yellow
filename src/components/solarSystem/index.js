const template = document.createElement("template")

template.innerHTML = `
`

class SolarSystem extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" })

  }
}