/**
 * Test1Nav Component
 * Navigation component for the Test1 SPA
 */
export class Test1Nav extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <nav class="spa-nav">
        <a href="/test1/" data-spa-link data-nav="home">Home</a>
        <a href="/test1/section1/" data-spa-link data-nav="section1">Section 1</a>
        <a href="/test1/section2/" data-spa-link data-nav="section2">Section 2</a>
        <a href="/test1/section3/" data-spa-link data-nav="section3">Section 3</a>
      </nav>
    `;
  }

  setActive(section) {
    const links = this.querySelectorAll('a[data-nav]');
    links.forEach(link => {
      const navSection = link.getAttribute('data-nav');
      if (navSection === section) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }
}
