export const Navbar = () => {
    return `<nav>
        <div class="navBar">
            <a href="#" id="perfil" onclick="mostrarMenu()"><img src="../../assets/imgs/icons8-cardápio-48.png"></a>
            <a href="#" id="perfil">PERFIL<img src="../../assets/imgs/icons8-convidado-masculino-48.png" alt="Ícone perfil de usuário"></a>
        </div>
        <div class="navList">
          <ul>
            <li><a href="#" class="nav-link">HOME</a></li>
            <li><a href="#" class="nav-link">CADASTRO</a></li>
            <li><a href="#" class="nav-link">SOBRE</a></li>
            <li><a href="#" class="nav-link">CONTATO</a></li>
          </ul>
        </div>
    </nav>`
}
