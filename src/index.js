import inquirer from "inquirer";
import fs from "fs";
import boxen from "boxen";
import { questions } from "./questions.js";

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

const currentDirectory = process.cwd();

// Questions
inquirer
  .prompt(questions)
  .then((answers) => {
    console.log(answers);
    const { project, projectName, language, customization, styling } = answers;

    fs.mkdirSync(`${currentDirectory}/${projectName}`);

    // Creating React Project
    if (project === "react") {
      if (language === "javascript" && customization === "blank") {
        ReactJSNoCustomization();
      }

      if (language === "typescript" && customization === "blank") {
        ReactTSNoCustomization();
      }
    }
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log(error.isTtyError);
    } else {
      console.log("Something went wrong", error);
    }
  });

// Creating template
function createDirectoryFiles(templatePath) {
  const filesToCreate = fs.readdirSync();
}
