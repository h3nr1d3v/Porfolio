Esos son los codigos completos y funcional de mi pagina web de un portafilo personal con Astro, HTML, CSS y TailwindCSS, al hacer npm run build me aparece este error,                      ~

src/components/Certifications.astro:23:5 - warning ts(6133): 'autoplayInterval' is declared but its value is never read.

23 let autoplayInterval: ReturnType<typeof setInterval> | null = null;
       ~~~~~~~~~~~~~~~~
src/components/Certifications.astro:200:7 - error ts(2322): Type 'Timeout' is not assignable to type 'number'.

200       autoplayInterval = setInterval(nextSlide, 5000);
          ~~~~~~~~~~~~~~~~

src/components/Navbar.astro:4:11 - warning ts(6196): 'HTMLElementWithOffset' is declared but never used.

4 interface HTMLElementWithOffset extends HTMLElement {
            ~~~~~~~~~~~~~~~~~~~~~
src/components/Navbar.astro:175:33 - error ts(2304): Cannot find name 'HTMLElementWithOffset'.

175       document.querySelectorAll<HTMLElementWithOffset>("section[id]");
                                    ~~~~~~~~~~~~~~~~~~~~~

src/components/Projects.astro:65:5 - warning ts(6133): 'autoplayInterval' is declared but its value is never read.

65 let autoplayInterval: ReturnType<typeof setInterval> | null = null;
       ~~~~~~~~~~~~~~~~

src/components/ThemeToggle.astro:46:13 - warning ts(6133): 'mobileMenu' is declared but its value is never read.

46     private mobileMenu: HTMLElement | null;
               ~~~~~~~~~~
src/components/ThemeToggle.astro:45:13 - warning ts(6133): 'mobileMenuButton' is declared but its value is never read.

45     private mobileMenuButton: HTMLElement | null;
               ~~~~~~~~~~~~~~~~
src/components/ThemeToggle.astro:43:13 - warning ts(6133): 'button' is declared but its value is never read.

43     private button: HTMLElement | null;
               ~~~~~~

src/layouts/Layout.astro:70:37 - warning ts(6133): 'rel' is declared but its value is never read.

70       onload="this.onload=null;this.rel='stylesheet'"
                                       ~~~
src/layouts/Layout.astro:70:20 - warning ts(6133): 'onload' is declared but its value is never read.

70       onload="this.onload=null;this.rel='stylesheet'"
                      ~~~~~~
src/layouts/Layout.astro:64:37 - warning ts(6133): 'rel' is declared but its value is never read.

64       onload="this.onload=null;this.rel='stylesheet'"
                                       ~~~
src/layouts/Layout.astro:64:20 - warning ts(6133): 'onload' is declared but its value is never read.

64       onload="this.onload=null;this.rel='stylesheet'"
                      ~~~~~~

Result (20 files): 
- 2 errors
- 0 warnings
- 59 hints

puedes darme los codigos completos corregidos, ademas de arreglar  en el navbar que cuando este en version mobil o una version inferior a la de desktop y le de click a algun seccion desde el navbar este nabvar se cierre automaticamente