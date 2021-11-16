## <Maria Voucher>
 
<h1 align="center">Talent Fest</h1>

<h2 align="center"> ## Squad Zé Delivery </h2>

<h3 align="center"> ## Hackaton realizado realizado no bootcamp SAP006 da Laboratória</h3><br>

## Índice

1. [Definição do Produto](#dart-definição-do-produto)
2. [Histórias de Usuários](#pencil2-histórias-de-usuários)
3. [Protótipos](#art-protótipos)
4. [Como Utilizar](#gear-como-utilizar)
5. [Tecnologias Utilizadas](#robot-tecnologias-utilizadas)
6. [Sobre as desenvolvedoras](#woman_technologist-sobre-as-desenvolvedoras)

---

## 💻 1. Definição do Produto

Seja bem-vinde! Somos a [Maria Voucher](https://tf-ze-delivery.web.app/)
Com a chegada da pandemia, muitas empresas passaram a trabalhar de forma totalmente remota e,
por questões de segurança, os happy hours passaram a acontecer também remotamente.
Pensando nisso, surgiu a Maria Voucher, uma aplicação Web com foco em empresas que quisessem
confraternizar de forma virtual, aonde o representante da empresa possa se cadastrar, escolher a
quantidade de vouchers e seus valores, efetuar o pagamento, gerar os vouchers e compartilhar com seu time.

 --
Saudades de um Happy Hour, né, minha filha? 
Compre com Maria Voucher os melhores cupons pra toda a galera da empresa sextar de forma segura e com qualidade.
<br>

<div align="center">
  <img alt="logo" height="250" width="200" src="./src/img/mariaVoucher.jpeg">
</div>

<br>

<div align="center">
 
  <h4> Você pode acessar a aplicação utilizando um dos logins de teste abaixo:</h4>

|  #  |      Informações      |     |
| :-: | :-------------------: | :-: |
| 🆔  | teste-maria@gmail.com |
| key |        123456         |

</div>

---

## 📃 Histórias de Usuários

**Historia de usuário 1:**
<br>
- [ x ]Eu, como membro de uma empresa quero me cadastrar ou logar e ser encaminhado para o dashboard de vouchers.

**Historia de usuário 2:**

- [ x ] Eu como membro de uma empresa quero definir valores, adicionar ou excluir pedidos de vouchers, e poder enviar essas informações para a página de criação de vouchers.

**Historia de usuário 3:**

- [ x ]Eu como membro de uma empresa quero realizar os pagamentos dos vouchers por meio de cartão de crédito ou PIX.

<br>
---
<br>

## 💡 Protótipos

O processo de criação do prototipo foi pensado buscando um layout intuitivo, minimalista e de fácil compreensão.

Durante o processo, criamos a identidade visual e definimos a paleta de cores inspirada no Ze Delivery.

Usamos o Figma para desenvolver o protótipo de alta fidelidade.

### Paleta de Cores

<div align="center">
  <img alt="paleta-cores" src="./src/img/paleta.jpeg">
</div>

---

### Planejamento e Organização

O projeto foi realizado por um squad composto por 6 desenvolvedoras front-end em um prazo de 3 dias. O primeiro desafio encontrado foi fazer um planejamento no qual todas pudessem colaborar com ideias, referências e funcionalidades. Para isso, a organização e o planejamento foram feitos em conjunto através do GitHub projects, usando o método FDP (Fatiar, Dispensar e Priorizar). Essa ferramenta também foi utilizada para compartilhar referências e atribuir as tarefas individuais a serem feitas por cada integrante do squad. Tambem no GitHub trabalhamos com branch's para otimizar o trabalho em equipe.

<div align="center" >
  <img alt="planning-login" src="./src/img/planning.png">

</div>

---

## Como Utilizar

- A tela inicial da aplicação traz a **Página de Login** que apresenta ao usário as opções de fazer o login com email e senha já cadastrados e entrar na plataforma da Maria Voucher ou prosseguir para a Página de Cadastro;
- Na **Página de Cadastro**, o usuário pode cadastrar-se inserindo seus dados de Nome, E-mail, Senha, Data de nascimento e CPF;
- Ao realizar qualquer uma dessas formas de acesso, o usuário será encaminhado para o seu respectivo ambiente:<br/>
  **Dashboard**: opções para acessar a compra ou consulta de vouchers
- <br/>
  

---
## 🚀 Tecnologias Utilizadas

<br>

<table>
  <tr>
      <td align="center">
            <a href="#">
            <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"  alt="HTML5"/><br>
            </a>
      </td>
    <td align="center">
      <a href="#">
        <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3"/><br>
      </a>
    </td>
    <td align="center">
            <a href="#">
            <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" alt="JavaScript"/><br>
            </a>
      </td>
   
  </tr>
</table>

<table>
      <tr>
      <td>
      <a href="#">
            <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React"/><br>
            </a>    
      </td>
      <td>
            <a href="#">
            <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" alt="Git"/><br>
            </a>
      </td>
      <td>
            <a href="#">
            <img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white" alt="Figma"/><br>
            </a>
      </td>
      </tr>

</table>

---

## Estrutura dos Principais Arquivos

```
.
├── 📁public
|
├── 📁src
|   ├── 📁components
|   |   ├── 📁Button
|   |   ├── 📁BuyVoucher
|   |   ├── 📁CardMask
|   |   ├── 📁Header
|   |   ├── 📁Input
|   |   ├── 📁InputMask
|   |   ├── 📁Modal
|   |   ├── 📁Navbar
|   |   |-  📁Orders
|   |   |   📁PayVoucher
|   |   |   📁Pix
|   |   |   📁SeeVoucher
|   |   |   📁Sidebar
|   |   |   📁Validation
|   |
|   ├── 📁img
|   |
|   ├── 📁pages
|   |   ├── 📁Dashboard
|   |   ├── 📁Login
|   |   ├── 📁PageNotFound
|   |   |── 📁Register
|   |   └── 📁Welcome
|   |
|   |
|   ├── 📄
|   ├── 📄
|   └── 📄
|   └── 📄
|
├── 📄README.md
└── 📄package.json
```

---

## ✔️ Resultados

- #### Desktop
<br>
<div align="center">
  <img alt="desktop" src="./src/img/Desktop1.gif">
</div>
<br>
<div align="center">
  <img alt="desktop" src="./src/img/Desktop2.gif">
</div>
<br>

- #### Mobile
<br>
<div align="center">
  <img alt="desktop" width="261" src="./src/img/mobile1.gif">
  <img alt="desktop"  width="261"src="./src/img/mobile2.gif">
</div>
<br>



---
 
<h2 align="center"> 👩‍💻 Colaboradoras</h2><br>

<table align="center">
  <tr>
      <td align="center">
            <a href="#">
            <img src="https://avatars.githubusercontent.com/u/62296172?v=4" width="100px" alt="Foto de Bruna Calixto no GitHub"/><br>
            <sub>
            <b>Bruna Calixto</b><br>
            </sub>
            </a>
      </td>
    <td align="center">
      <a href="#">
        <img src="https://avatars.githubusercontent.com/u/72632554?v=4" width="100px;" alt="Foto de Sabrina Araújo no GitHub"/><br>
        <sub>
          <b>Sabrina Araújo</b><br>
        </sub>
      </a>
    </td>
    <td align="center">
            <a href="#">
            <img src="https://avatars.githubusercontent.com/u/73398102?v=4" width="100px" alt="Foto de Tauana Pacheco no GitHub"/><br>
            <sub>
            <b>Tauana Pacheco</b><br>
            </sub>
            </a>
      </td>
   
  </tr>
</table>

<table align="center">
      <tr>
      <td>
      <a href="#">
            <img src="https://avatars.githubusercontent.com/u/78503528?v=4" width="100px" alt="Foto de Kamila Moura no GitHub"/><br>
            <sub>
            <b>Kamila Moura</b><br>
            </sub>
            </a>    
      </td>
      <td>
            <a href="#">
            <img src="https://avatars.githubusercontent.com/u/64505863?v=4" width="100px" alt="Foto de Larissa Siqueira no GitHub"/><br>
            <sub>
            <b>Larissa Siqueira</b><br>
            </sub>
            </a>
      </td>
      <td>
            <a href="#">
            <img src="https://media-exp1.licdn.com/dms/image/C4E03AQFlpqm0oOMyYQ/profile-displayphoto-shrink_800_800/0/1622144377901?e=1642032000&v=beta&t=a4r2xnRCB0ZE6bHMij_wlR-gAI1kY0XtHRR9zskUBdk" width="100px" alt="Foto de Michele Martins no GitHub"/><br>
            <sub>
            <b>Michele Martins</b><br>
            </sub>
            </a>
      </td>
      </tr>

</table>
