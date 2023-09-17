import { itens_container } from "../constants/data.js";

const ItemInformacao = (item) => {
  return `
    <div class="item-informacao">
      <div class="item-img">
        <img src="${item.img}" alt="${item.descricao_img}">
      </div>
      <h4>${item.titulo}</h4>
      <p>${item.texto}.</p>
    </div>
  `;
};

export const Elementos_SessaoInformacao = () => {
  return itens_container.map((item) => {
    return `${ItemInformacao(item)}`;
  });
};
