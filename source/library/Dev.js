import Stats from "stats.js"

const dev = new class Dev {
    constructor() {
        // this.isEnabled = false // !!
        this.isEnabled = true
        if(this.isEnabled != true) return

        this.stats = new Stats()
        this.stats.dom.style.position = "absolute"
        this.stats.dom.style.display = "flex"
        this.stats.dom.style.flexDirection = "column"
        this.stats.dom.style.zIndex = -1
        Object.values(this.stats.dom.children).forEach((child) => child.style = "block")
        this.stats.dom.addEventListener("click", (event) => event.stopPropagation(), true)
        document.body.appendChild(this.stats.dom)
    }
    atStartOfLoop() {
        if(this.isEnabled != true) return
        this.stats.begin()
    }
    atEndOfLoop() {
        if(this.isEnabled != true) return
        this.stats.end()
    }
}

export default dev
