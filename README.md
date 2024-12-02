# **OdontoBot**

## **Visão Geral**
OdontoBot é um projeto desenvolvido para estudo e pesquisa, voltado para pessoas interessadas na área da odontologia. O principal objetivo é fornecer informações, suporte técnico e educacional sobre diversos tópicos odontológicos de maneira automatizada e acessível. Este bot utiliza inteligência artificial para responder dúvidas, ajudar estudantes, profissionais e entusiastas, e explorar conceitos relacionados à odontologia.

## **Principais Funcionalidades**
- **Respostas Automatizadas:** Utilize inteligência artificial (GPT) para responder dúvidas odontológicas.
- **Interface Intuitiva:** Design responsivo e amigável, com exibição organizada das respostas em formato HTML estilizado.
- **Personalização e Estudo:** Perfeito para quem deseja aprender ou aprofundar conhecimentos na área odontológica.
- **Foco Educacional:** Explicações claras e objetivas sobre tópicos como diagnósticos, tratamentos, prevenção e reabilitação oral.
- **Flexibilidade:** Integrado a tecnologias modernas para personalização e expansibilidade.

## **Público-Alvo**
- Estudantes de odontologia.
- Profissionais da área odontológica.
- Entusiastas interessados em aprender mais sobre saúde bucal.
- Pesquisadores explorando a aplicação de inteligência artificial na odontologia.

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
