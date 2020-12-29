// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "@import \"../web_modules/tailwindcss/dist/base.css\";\n\n@import \"../web_modules/tailwindcss/dist/components.css\";\n\n@import \"../web_modules/tailwindcss/dist/utilities.css\";\n\n@import \"../web_modules/bootstrap/dist/css/bootstrap.css\";\n\n/*@import \"../web_modules/bulma/css/bulma.css\";*/\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n    monospace;\n}\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';

  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}