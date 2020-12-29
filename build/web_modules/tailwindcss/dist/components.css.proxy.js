// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".container {\n  width: 100%\n}\n\n@media (min-width: 640px) {\n  .container {\n    max-width: 640px\n  }\n}\n\n@media (min-width: 768px) {\n  .container {\n    max-width: 768px\n  }\n}\n\n@media (min-width: 1024px) {\n  .container {\n    max-width: 1024px\n  }\n}\n\n@media (min-width: 1280px) {\n  .container {\n    max-width: 1280px\n  }\n}\n\n@media (min-width: 640px) {\n  .sm\\:container {\n    width: 100%\n  }\n\n  @media (min-width: 640px) {\n    .sm\\:container {\n      max-width: 640px\n    }\n  }\n\n  @media (min-width: 768px) {\n    .sm\\:container {\n      max-width: 768px\n    }\n  }\n\n  @media (min-width: 1024px) {\n    .sm\\:container {\n      max-width: 1024px\n    }\n  }\n\n  @media (min-width: 1280px) {\n    .sm\\:container {\n      max-width: 1280px\n    }\n  }\n}\n\n@media (min-width: 768px) {\n  .md\\:container {\n    width: 100%\n  }\n\n  @media (min-width: 640px) {\n    .md\\:container {\n      max-width: 640px\n    }\n  }\n\n  @media (min-width: 768px) {\n    .md\\:container {\n      max-width: 768px\n    }\n  }\n\n  @media (min-width: 1024px) {\n    .md\\:container {\n      max-width: 1024px\n    }\n  }\n\n  @media (min-width: 1280px) {\n    .md\\:container {\n      max-width: 1280px\n    }\n  }\n}\n\n@media (min-width: 1024px) {\n  .lg\\:container {\n    width: 100%\n  }\n\n  @media (min-width: 640px) {\n    .lg\\:container {\n      max-width: 640px\n    }\n  }\n\n  @media (min-width: 768px) {\n    .lg\\:container {\n      max-width: 768px\n    }\n  }\n\n  @media (min-width: 1024px) {\n    .lg\\:container {\n      max-width: 1024px\n    }\n  }\n\n  @media (min-width: 1280px) {\n    .lg\\:container {\n      max-width: 1280px\n    }\n  }\n}\n\n@media (min-width: 1280px) {\n  .xl\\:container {\n    width: 100%\n  }\n\n  @media (min-width: 640px) {\n    .xl\\:container {\n      max-width: 640px\n    }\n  }\n\n  @media (min-width: 768px) {\n    .xl\\:container {\n      max-width: 768px\n    }\n  }\n\n  @media (min-width: 1024px) {\n    .xl\\:container {\n      max-width: 1024px\n    }\n  }\n\n  @media (min-width: 1280px) {\n    .xl\\:container {\n      max-width: 1280px\n    }\n  }\n}\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';

  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}