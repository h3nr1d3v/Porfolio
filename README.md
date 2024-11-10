Esos son los codigos completos y funcional de mi pagina web de un portafilo personal con Astro, HTML, CSS y TailwindCSS, al ejecutar npm run build me aparece este error, 
src/components/Navbar.astro:145:11 - error ts(2322): Type 'string | null' is not assignable to type 'string'.
  Type 'null' is not assignable to type 'string'.

145           activeSection = sectionId;
              ~~~~~~~~~~~~~

src/components/ThemeToggle.astro:43:21 - error ts(7006): Parameter 'theme' implicitly has an 'any' type.

43   function setTheme(theme) {
                       ~~~~~

Result (19 files): 
- 2 errors
- 0 warnings
- 49 hints podrias darme el codigo completo corregido.