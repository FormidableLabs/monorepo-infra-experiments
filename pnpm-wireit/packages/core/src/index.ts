/**
 * Greets the dog.
 * Warning: logs PII
 */
export const welcome = ({ name, description }: Dog) => {
  console.log(`Hello ${name}!`);
  console.log(`Here's what we've learned about you: ${description}`);
}

export interface Dog {
  name: string;
  description: string;
}
