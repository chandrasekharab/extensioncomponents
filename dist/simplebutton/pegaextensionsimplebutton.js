pega.ui.extensioncomponents.register('simplebutton', function (dom, contextObj) {
    dom.appendChild(document.createElement('simple-button'));
});

class SimpleButton extends HTMLElement {
    constructor() {
        super();
        // Attach a shadow root to the element.
        let shadowRoot = this.attachShadow({
            mode: 'open'
        });
        shadowRoot.innerHTML = `<button>hello world</button>`;
    }
}
customElements.define('simple-button', SimpleButton);