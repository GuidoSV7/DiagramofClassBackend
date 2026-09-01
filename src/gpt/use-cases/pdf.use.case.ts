import OpenAI from 'openai';
import { jsonrepair } from 'jsonrepair';

interface Options {
  prompt: string;
}

interface Question {
  question: string;
  options: {
    a: string;
    b: string;
    c: string;
    d: string;
  };
  correctAnswer: string;
}

export const PdfUseCase = async (
  openai: OpenAI,
  options: Options
): Promise<Question[]> => {
  const { prompt } = options;

  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content: `
        Eres un profesor de colegio secundario. A partir del texto proporcionado:
        1. Analiza los temas y conceptos principales
        2. Genera 5 preguntas de opción múltiple de nivel colegial (14-17 años)
        
        Las preguntas deben:
        - Evaluar comprensión real de los conceptos
        - Usar situaciones prácticas y comprensibles
        - Tener un nivel de dificultad moderado
        - Incluir aplicaciones cotidianas
        - Usar números y casos manejables
        
        IMPORTANTE - Para las respuestas correctas:
        - DEBES VARIAR la opción correcta entre a, b, c y d
        - NO coloques la respuesta correcta siempre en la misma opción
        - Distribuye las respuestas correctas de forma balanceada
        - Asegúrate de que no todas sean "a" o cualquier otra letra
        
        Características de las opciones:
        - Las 4 opciones deben ser plausibles
        - Evitar opciones obviamente incorrectas
        - Usar distractores basados en errores comunes
        - La opción correcta NO debe destacar por su longitud o formato
        - No usar "Todas las anteriores" o "Ninguna de las anteriores"
        
        Para cada pregunta:
        1. Primero decide la respuesta correcta
        2. Luego asígnala aleatoriamente a una de las opciones (a, b, c, d)
        3. Distribuye las otras opciones de manera que no haya un patrón
        
        Retorna las preguntas en este formato JSON:
        {
          "questions": [
            {
              "question": "Pregunta basada en una situación práctica",
              "options": {
                "a": "Primera opción",
                "b": "Segunda opción",
                "c": "Tercera opción",
                "d": "Cuarta opción"
              },
              "correctAnswer": "[letra aleatoria entre a, b, c, d]"
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
    temperature: 0.8, // Aumentada para mayor variabilidad
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