/**
 * Prompts the user for input via the terminal and returns the response.
 * Useful for quick interactive feedback or CLI tools before implementing a web interface.
 *
 * Usage example:
 * const favoriteColor = await askQuestion('What’s your favorite color?');
 *
 * IMPORTANT: When importing, include the '.js' extension:
 * import { askQuestion } from './utils/promptUtils.js';
 */


import pkgs from 'enquirer';
const { prompt } = pkgs;

export async function askQuestion(message: string): Promise<string> {
  const response = await prompt<{ answer: string }>({
    type: 'input',
    name: 'answer',
    message,
  });
  return response.answer;
}
