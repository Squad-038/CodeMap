const itens_container = [
  {
    img: "../../assets/imgs/icone-informacao-1.svg",
    descricao_img: "",
    titulo: "100% ONLINE",
    texto:
      "Acesse cursos em casa para uma jornada de aprendizado conveniente e flexível.",
  },
  {
    img: "../../assets/imgs/icone-informacao-2.svg",
    descricao_img: "",
    titulo: "+CODIGO",
    texto: "Domine programação com cursos online flexíveis e atualizados.",
  },
  {
    img: "../../assets/imgs/icone-informacao-3.svg",
    descricao_img: "",
    titulo: "+ROADMAP",
    texto: "Alcance seus objetivos educacionais com orientação personalizada.",
  },
];

const repetirContainersInformacao = () =>
  itens_container.map((item) => {
    return `
    <div class="item-informacao">
    <div class="item-img">
        <img src="${item.img}" alt="${item.descricao_img}">
    </div>
    <h4>${item.titulo}</h4>
    <p>${item.texto}.</p>
</div>`;
  });

export const Sessao_Informacoes = () => {
  return `<h2>POR QUE ESCOLHER O CODEMAP</h2>
    <section class="containers-informacao">
    ${repetirContainersInformacao()}
    </section>`;
};
