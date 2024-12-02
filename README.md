# Odontobot

Odontobot é um projeto destinado a automatizar operações de clínicas odontológicas. Este README fornece uma visão geral do projeto, instruções de configuração e diretrizes de uso.

## Visão Geral

Odontobot é uma aplicação React que utiliza a API da OpenAI para responder a dúvidas odontológicas de forma clara e educacional. A aplicação inclui uma interface de usuário simples com um campo de entrada para perguntas e uma área para exibir as respostas geradas.

## Estrutura do Projeto

- `src/`
  - `components/`
    - `Home.js`: Componente principal que contém a lógica para interagir com a API da OpenAI.
    - `Navbar.js`: Componente de navegação.
    - `Footer.js`: Componente de rodapé.
  - `img/`
    - `odonto.png`: Imagem do logotipo do OdontoBot.
  - `App.js`: Componente raiz da aplicação.
  - `index.js`: Ponto de entrada da aplicação.
  - `App.css`: Estilos globais da aplicação.
  - `Home.css`: Estilos específicos para o componente Home.

## Configuração

### Pré-requisitos

- Node.js
- npm (gerenciador de pacotes do Node.js)

### Instalação

1. Clone o repositório:

   ```sh
   git clone https://github.com/mapsegundo/odontobot.git
   cd odontobot

   ```

2. Instale as dependências:

   ```sh
   npm install
   ```

3. Crie um arquivo `.env` na raiz do projeto e adicione sua chave de API da OpenAI:

   ```properties
   REACT_APP_OPENAI_API_KEY=your_openai_api_key
   ```

### Scripts Disponíveis

No diretório do projeto, você pode executar:

- `npm start`: Inicia o servidor de desenvolvimento.
- `npm run build`: Cria uma build otimizada para produção.
- `npm run eject`: Ejecta a configuração do Create React App.

## Uso

1. Inicie o servidor de desenvolvimento:

   ```sh
   npm start
   ```

2. Abra [http://localhost:3000](http://localhost:3000) para visualizar no navegador.

3. Digite sua dúvida odontológica no campo de entrada e clique em "Enviar". A resposta gerada será exibida abaixo do campo de entrada.

## Estrutura do Código

### Home.js

O componente `Home` é responsável por:

- Renderizar a interface de usuário.
- Capturar a entrada do usuário.
- Fazer chamadas à API da OpenAI.
- Exibir a resposta gerada.

### Navbar.js

O componente `Navbar` é responsável por renderizar a barra de navegação no topo da página.

### Footer.js

O componente `Footer` é responsável por renderizar o rodapé na parte inferior da página.

## Estilos

### App.css

Contém estilos globais para a aplicação.

### Home.css

Contém estilos específicos para o componente `Home`, incluindo a formatação das respostas geradas.

## Dependências

- `bootstrap`: Framework CSS para estilização.
- `html-react-parser`: Biblioteca para analisar e renderizar HTML.
- `openai`: Biblioteca para interagir com a API da OpenAI.
- `react`: Biblioteca principal do React.
- `react-dom`: Biblioteca para manipulação do DOM com React.
- `react-scripts`: Scripts e configuração para Create React App.
- `react-toastify`: Biblioteca para exibir notificações.
- `web-vitals`: Biblioteca para medir métricas de desempenho da web.

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
