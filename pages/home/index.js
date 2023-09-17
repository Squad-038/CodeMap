import { Navbar, Footer, Sessao_Informacoes } from "../../components/index.js";

const header = document.querySelector("header");
header.innerHTML = Navbar();

const footer = document.querySelector("footer");
footer.innerHTML = Footer();

const sessao_informacoes = document.querySelector("section.informacoes");
sessao_informacoes.innerHTML = Sessao_Informacoes();
