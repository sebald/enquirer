const Prompt = require('../prompts/password');
const prompt = new Prompt({
  name: 'password',
  message: 'What is your password?'
});

prompt.run()
  .then(answer => console.log('Answer:', answer))
  .catch(console.error);
