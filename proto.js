
/* prototype */

function counter(competence, target) {
    let count = 0;
    let i = 0;
    while (i < competence.length) {
        if (competence[i] === target) {
            count++;
        }
        i++;
    }
    return count;
}
let skills = ["C1", "C4", "C1", "C2", "C8", "C1", "C5", "C3"];
let usercode = prompt("Enter the skill to search => ");
let result = counter(skills, usercode);
if (result === 0) {
    console.log("The code " + usercode + " was not found in this list. ");
}else {
    console.log("The code " + usercode + " repeated " + result + " times. ");
}
