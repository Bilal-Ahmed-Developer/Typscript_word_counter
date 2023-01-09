#!usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";

const sleep = () => {
      return new Promise((res, rejc) => {
            setTimeout(res, 1500)
      })
}

async function Welcome() {
      const rainbowtitle = chalkAnimation.rainbow("------  Let's Start ------")
      await sleep()
      rainbowtitle.stop()

      const answer = await inquirer.prompt([{
            type: "input",
            name: "str",
            message: chalk.rgb(100, 170, 100)("Please enter your paragraph you want to convert"),
      }])
      let count_Word = answer.str.split(' ')
      console.log(count_Word)
      console.log(`${count_Word.length}`, chalk.greenBright("Words in this paragraph"))
      let character_Count = answer.str.replace(/ /g, " ");
      console.log(`${character_Count.length}`, chalk.greenBright("Characters in this paragraph"))
}
async function restart() {
      do {
            await Welcome()
            var playagain = await inquirer.prompt([{
                  name: 'playA',
                  type: 'input',
                  message: "Do you want to play again / Yes : No"
            }])
      } while (playagain.playA == "y" || playagain.playA == "yes" || playagain.playA == "Yes");
}
restart()