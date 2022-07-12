import fs from "fs";
import path from "path";

export const CURRENT_WORKING_DIRECTORY = process.cwd();

export const TEMPLATE_CHOICES = fs.readdirSync(
  path.join(CURRENT_WORKING_DIRECTORY, "templates")
);
