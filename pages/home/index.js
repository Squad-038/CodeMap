import {
  Navbar,
  Footer,
  Elementos_SessaoInformacao,
} from "../../components/index.js";

const header = document.querySelector("header");
header.innerHTML = Navbar();

const footer = document.querySelector(".footer");
footer.innerHTML = Footer('home');

const sessao_informacoes = document.querySelector(".containers-informacao");
sessao_informacoes.innerHTML = Elementos_SessaoInformacao();
