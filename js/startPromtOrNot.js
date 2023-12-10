// ask user if he wants to start prompts
function startPromtOrNot() {
  const checkPrompt = confirm('Бажаєш запустити промпти?');

  if (!checkPrompt) {
    throw new Error('Промпти скасовані користувачем.')
  }
}

export default startPromtOrNot;