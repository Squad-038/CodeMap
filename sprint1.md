# Documentação da API do CODEMAP

# Sprint 1
## Listar Matérias

- **Endpoint**: `GET /materias`
- **Descrição**: Retorna uma lista de todas as matérias disponíveis no sistema.
- **Critérios de aceite**: Nenhum.

## Cadastrar Usuário (Professor)

- **Endpoint**: `POST /professor`
- **Descrição**: Esta rota é usada para cadastrar um novo professor no sistema.
- **Critérios de aceite**:
  - Validação dos campos obrigatórios: 
    - `nome`
    - `email`
    - `senha`
  - A senha deve ser criptografada utilizando um algoritmo de criptografia confiável.
  - O campo de e-mail no banco de dados deve ser único para cada registro, não permitindo dois professores com o mesmo e-mail.

## Cadastrar Usuário (Aluno)

- **Endpoint**: `POST /aluno`
- **Descrição**: Esta rota é usada para cadastrar um novo aluno no sistema.
- **Critérios de aceite**:
  - Validação dos campos obrigatórios: 
    - `nome`
    - `email`
    - `senha`
  - A senha deve ser criptografada utilizando um algoritmo de criptografia confiável.
  - O campo de e-mail no banco de dados deve ser único para cada registro, não permitindo dois alunos com o mesmo e-mail.

**ATENÇÃO**: Todas as funcionalidades (endpoints) a seguir, a partir desse ponto, deverão exigir o token de autenticação do usuário logado, recebendo no header com o formato Bearer Token. Portanto, em cada funcionalidade será necessário validar o token informado.

## Listar Professores

- **Endpoint**: `GET /professores`
- **Descrição**: Retorna uma lista de todos os professores cadastrados no sistema.
- **Critérios de aceite**: Nenhum.

## Detalhar Perfil do Usuário Logado (Professor)

- **Endpoint**: `GET /professor`
- **Descrição**: Retorna detalhes do perfil do professor logado.
- **Critérios de aceite**: Somente professores autenticados podem acessar esta rota.

## Detalhar Perfil do Usuário Logado (Aluno)

- **Endpoint**: `GET /perfil`
- **Descrição**: Retorna detalhes do perfil do aluno logado.
- **Critérios de aceite**: Somente alunos autenticados podem acessar esta rota.

## Editar Perfil do Usuário Logado (Aluno)

- **Endpoint**: `PUT /aluno`
- **Descrição**: Permite ao usuário logado editar seu próprio perfil.
- **Critérios de aceite**: Somente o usuário autenticado pode editar seu próprio perfil.


## Editar Perfil do Usuário Logado (Professor)

- **Endpoint**: `PUT /professor`
- **Descrição**: Permite ao usuário logado editar seu próprio perfil.
- **Critérios de aceite**: Somente o usuário autenticado pode editar seu próprio perfil.
- 
Certifique-se de que todas as rotas estejam devidamente protegidas com autenticação e que os dados fornecidos atendam aos critérios de aceite especificados.

## Critérios de Aceitação

- Valide os campos obrigatórios, como nome, email, senha, etc.
- A senha deve ser criptografada usando um algoritmo seguro.
- O campo de email no banco de dados deve ser único para cada registro, não permitindo que dois usuários possuam o mesmo email.
