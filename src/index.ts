#!/usr/bin/env node
import path from "path";
import inquirer from "inquirer";
import WelcomeBox from "./welcomeBox";
import { CreateTemplate, CreateDirectoryContents } from "./templateCreator";
import { questions } from "./questions";
import { ICliOptions } from "./utils/interface";
import { CURRENT_WORKING_DIRECTORY } from "./utils/variable";

WelcomeBox();

inquirer
  .prompt(questions)
  .then(({ templateType, projectName, language, customization, styling }) => {
    // boilater/templates/react/{language}
    const templatePath = path.join(
      CURRENT_WORKING_DIRECTORY,
      "templates",
      templateType,
      language,
      (styling = customization === "customize" ? styling : "")
    );
    // boilater/{projectName}
    const targetPath = path.join(CURRENT_WORKING_DIRECTORY, projectName);
  })
  .catch((error: any) => console.log(error));

function createFiles() {}
