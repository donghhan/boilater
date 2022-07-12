import boxen from "boxen";

export default function WelcomeBox() {
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
}
