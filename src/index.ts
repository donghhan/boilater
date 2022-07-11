import boxen from "boxen";
import inquirer from "inquirer";
import { questions } from "./questions";

// Welcome box
console.log(
  boxen(
    "Welcome and thank you for using Boilater!\nPlease select options for creating your boilerplate!",
    {
      padding: 1,
      margin: 1,
      textAlignment: "center",
      title: "Boilater",
      titleAlignment: "center",
      borderStyle: "double",
      borderColor: "cyan",
    }
  )
);

inquirer
  .prompt(questions)
  .then((answers) => console.log(answers))
  .catch((error: any) => console.log(error));
