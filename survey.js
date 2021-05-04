const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Hello! What\'s your name? (Nicknames are allowed, too!) ', (nameAnswer) => {
  rl.question('What is your favorite hobby? ', (hobbyAnswer) => {
    rl.question('Who is your favorite musician? ', (musicAnswer) => {
      rl.question('What is your favorite music genre? ', (genreAnswer) => {
        rl.question('What\'s your favorite food? ', (foodAnswer) => {
          rl.question('Finally, talk about your \'superpower\'!', (superpowerAnswer) => {

  // GENERATE PROFILE BASED ON ANSWERS
  console.log('Here is your custom online profile description based on your answers:', '\n', `My name is ${nameAnswer}, and my hobby is ${hobbyAnswer}. I'm a big fan of ${musicAnswer}, and listening to ${genreAnswer}. When it comes to food, I can't resist ${foodAnswer}. I'm amazing at ${superpowerAnswer}!`);

  rl.close();

          });
        });
      });
    });
  });
});