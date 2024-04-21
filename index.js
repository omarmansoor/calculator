#! /usr/bin/env node
//shahbang
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "enter first number", type: "number", name: "firstnumber" },
    { message: "enter second number", type: "number", name: "secondnumber" },
    {
        message: "select one of the operators to perfom operation",
        type: "list",
        name: "operator",
        choices: ["addition", "subtraction", "multiplication", "division"],
    },
]);
if (answer.operator == "addition") {
    console.log(answer.firstnumber + answer.secondnumber);
}
else if (answer.operator == "subtraction") {
    console.log(answer.firstnumber - answer.secondnumber);
}
else if (answer.operator == "multiplication") {
    console.log(answer.firstnumber * answer.secondnumber);
}
else if (answer.operator == "division") {
    console.log(answer.firstnumber / answer.secondnumber);
}
else {
    console.log("plase select valid operator");
}
