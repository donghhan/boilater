import fs from "fs";
import path from "path";
import { CURRENT_WORKING_DIRECTORY } from "./utils/variable";

export function CreateTemplate(projectPath: string) {
  if (fs.existsSync(projectPath)) {
    console.log(
      `Folder ${projectPath} already exists. Delete or use another name.`
    );
    return false;
  }

  fs.mkdirSync(projectPath);
  return true;
}

export function CreateDirectoryContents(
  templatePath: string,
  projectName: string,
  language?: string
) {
  const filesToCreate = fs.readdirSync(templatePath);
  console.log(filesToCreate);
}
