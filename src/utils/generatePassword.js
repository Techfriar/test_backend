/**
 * Generates a random password of the specified length.
 * @param {number} length - The length of the password.
 * @returns {Promise<string>} A Promise that resolves to the generated password.
 */
export default async function generatePassword(length) {
  const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
  const digits = "0123456789";
  const symbols = "!@#$%^&*|";

  const allCharacters = uppercaseLetters + lowercaseLetters + digits + symbols;

  let password = "";
  for (let i = 0; i < length; i++) {
    // Choose a random character from the 'allCharacters' string and append it to the password.
    password += allCharacters[Math.floor(Math.random() * allCharacters.length)];
  }

  return password;
}
