const marker = "clicloud-vite-e2e-ready";
document.querySelector("#app").innerHTML = `
  <h1>CLI Cloud Vite deployment</h1>
  <p data-proof="${marker}">${marker}</p>
`;
