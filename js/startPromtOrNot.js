// ask user if he wants to start prompts
function startPromtOrNot() {
  const checkPrompt = confirm('Бажаєш запустити промпти?');

  if (!checkPrompt) {
    throw new Error('Скасовано користувачем')
  }
}

export default startPromtOrNot;