// import inquirer from "inquirer";

export const questions = [
  {
    type: "list",
    name: "project",
    message: "I want to make my project of... (1/4)",
    choices: ["react"],
    filter(val: string) {
      return val.toLowerCase();
    },
  },
  {
    type: "input",
    name: "projectName",
    message: "My project name is... (2/4)",
    validate(value: string) {
      const valid = value.match(/^[a-z_-]{1,}/g);
      if (valid) {
        return true;
      }
      return "Project name can only include lowercases, - and _ and it cannot be omitted.";
    },
    filter: String,
  },
  {
    type: "list",
    name: "language",
    message: "I would like to build my project with... (3/4)",
    choices: ["JavaScript", "TypeScript"],
    filter(val: string) {
      return val.toLowerCase();
    },
  },
  {
    type: "list",
    name: "customization",
    message: "How would you like to set up your project? (4/4)",
    choices: ["blank", "customize"],
    filter(val: string) {
      return val.toLowerCase();
    },
  },
  {
    type: "list",
    name: "styling",
    message: "I would like to choose styling of... (1/2)",
    choices: ["sass/scss", "styled-components", "tailwindcss"],
    filter(val: string) {
      return val.toLowerCase();
    },
    when: (answers: any) => answers.customization !== "blank",
  },
  //   {
  //     type: "checkbox",
  //     message: "Let's add some more... (2/2)",
  //     name: "extra",
  //     choices: [
  //       new inquirer.Separator(" = The Cheeses = "),
  //       {
  //         name: "Mozzarella",
  //         checked: true,
  //       },
  //       {
  //         name: "Cheddar",
  //       },
  //       {
  //         name: "Parmesan",
  //       },
  //       new inquirer.Separator(" = The usual ="),
  //       {
  //         name: "Mushroom",
  //       },
  //       {
  //         name: "Tomato",
  //       },
  //       new inquirer.Separator(" = The extras = "),
  //       {
  //         name: "Pineapple",
  //       },
  //       {
  //         name: "Olives",
  //         disabled: "out of stock",
  //       },
  //       {
  //         name: "Extra cheese",
  //       },
  //     ],
  //     validate(answer) {
  //       if (answer.length < 1) {
  //         return "You must choose at least one topping.";
  //       }

  //       return true;
  //     },
  //   },
];
