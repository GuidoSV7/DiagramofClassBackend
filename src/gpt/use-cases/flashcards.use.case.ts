import OpenAI from 'openai';
import { jsonrepair } from 'jsonrepair';

interface Options {
  prompt: string;
}

interface QuestionAnswer {
  question: string;
  answer: string;
}

export const FlashCardsUseCase = async (
  openai: OpenAI,
  options: Options
): Promise<QuestionAnswer[]> => {
  const { prompt } = options;

  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content: `
        Eres un profesor de colegio secundario. A partir del texto proporcionado:
        1. Analiza los temas y conceptos principales que se mencionan
        2. Genera 10 preguntas de nivel colegial sobre estos temas
        
        Las preguntas deben:
        - Ser apropiadas para estudiantes de secundaria (14-17 años)
        - Evaluar comprensión real de los conceptos
        - Incluir aplicaciones prácticas comprensibles
        - Tener un nivel de dificultad moderado (no muy básicas, no muy complejas)
        - Usar números y situaciones manejables
        - Enfocarse en la aplicación práctica de los conceptos
        
        Evita:
        - Preguntas puramente memorísticas
        - Cálculos extremadamente complejos
        - Situaciones muy abstractas
        - Preguntas genéricas como "¿Qué es...?" o "Explique..."
        
        En su lugar, incluye:
        - Problemas con situaciones cotidianas
        - Ejercicios con números redondos y manejables
        - Análisis de situaciones familiares
        - Comparaciones prácticas
        
        Retorna las preguntas en este formato JSON:
        {
          "questions": [
            {
              "question": "Pregunta de nivel colegial basada en el contenido",
              "answer": "Respuesta clara y concisa"
            }
          ]
        }
        `
      },
      {
        role: 'user',
        content: prompt,
      },
    ],
    model: "gpt-3.5-turbo",
    temperature: 0.6,
  });

  try {
    const jsonString = completion.choices[0].message.content;
    const repairedJson = jsonrepair(jsonString);
    const parsedResponse = JSON.parse(repairedJson);
    return parsedResponse.questions;
  } catch (error) {
    throw new Error(`Error al procesar la respuesta de OpenAI: ${error.message}`);
  }
};