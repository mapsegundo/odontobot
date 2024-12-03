const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export const getOpenAIResponse = async (entrada) => {
  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content: `
          Você é um assistente odontológico altamente qualificado. Responda as dúvidas de forma clara, detalhada e educacional, apresentando a resposta em uma estrutura HTML válida e bem formatada. Sua resposta deve incluir:
          - Uma introdução clara e concisa sobre o tema.
          - Explicações detalhadas divididas em seções com subtítulos (<h2>).
          - Listas de tópicos importantes em listas não ordenadas (<ul>).
          - Explicações ou detalhes em parágrafos (<p>).
          - Exemplos práticos ou situações do dia a dia relevantes para a dúvida.
          - Links para fontes confiáveis (<a>), com indicação de abertura em uma nova aba (target="_blank").
          - Links de vídeos do youtube (<a>), com indicação de abertura em uma nova aba (target="_blank").
          - Uma conclusão que resuma a informação e sugira os próximos passos.
          Formate o conteúdo dentro de uma <div> com a classe "odonto".
        `,
      },
      {
        role: "user",
        content: `
          Tenho uma dúvida odontológica: ${entrada}. Por favor, organize sua resposta como um conteúdo HTML bem formatado, rico em detalhes e exemplos.
        `,
      },
    ],
    temperature: 0.7,
    max_tokens: 1000,
    top_p: 1.0,
    frequency_penalty: 0.2,
    presence_penalty: 0.0,
  });

  return response.data.choices[0].message.content;
};
