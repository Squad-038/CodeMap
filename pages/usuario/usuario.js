import {Navbar,Footer} from "../../components/index.js";
  
  const header = document.querySelector("header");
  header.innerHTML = Navbar();
  
  const footer = document.querySelector(".footer");
  footer.innerHTML = Footer();