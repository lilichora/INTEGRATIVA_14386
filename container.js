// Componente Contenedor
class MyContainer extends HTMLElement {
    constructor() {
      super();
      // Crear Shadow DOM
      this.attachShadow({ mode: 'open' });
      // Enlazar el archivo CSS externo
      const linkElem = document.createElement('link');
      linkElem.setAttribute('rel', 'stylesheet');
      linkElem.setAttribute('href', 'styles.css');
      this.shadowRoot.appendChild(linkElem);
      // Definir la estructura del componente contenedor con slots
      this.shadowRoot.innerHTML = `
        <div>
          <!-- Slot para el Encabezado -->
          <div id="headerSlot"><slot name="header"></slot></div>
          <!-- Slot para el Contenido -->
          <div id="contentSlot"><slot name="content"></slot></div>
          <!-- Slot para el Pie de Página -->
          <div id="footerSlot"><slot name="footer"></slot></div>
        </div>
      `;
    }
  }
  
  // Registrar el componente contenedor
  customElements.define('my-container', MyContainer);
  
  // Componente de Encabezado
  class MyHeader extends HTMLElement {
    constructor() {
      super();
      // Crear Shadow DOM
      this.attachShadow({ mode: 'open' });
      // Definir la estructura del componente de encabezado
      this.shadowRoot.innerHTML = `
        <header>
          <slot></slot>
        </header>
      `;
    }
  }
  
  // Registrar el componente de encabezado
  customElements.define('my-header', MyHeader);
  
  // Componente de Contenido
  class MyContent extends HTMLElement {
    constructor() {
      super();
      // Crear Shadow DOM
      this.attachShadow({ mode: 'open' });
      // Definir la estructura del componente de contenido
      
    }
  }
  
  // Registrar el componente de contenido
  customElements.define('my-content', MyContent);
  