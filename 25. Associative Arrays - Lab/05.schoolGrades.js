function schoolGrades(arr) {
    let students = {};

    for (let student of arr) {
        let tokens = student.split(" ");
        let name = tokens.shift();
        let grades = tokens.map((a) => Number(a));

        if (students[name]) {
            students[name] = students[name].concat(grades);
        } else {
            students[name] = grades;
        }
    }

    let studentNames = Object.keys(students);
    studentNames.sort();

    for (let name of studentNames) {
        let grades = students[name];
        let averageGrade = (
            grades.reduce((acc, grade) => acc + grade, 0) / grades.length
        ).toFixed(2);
        console.log(`${name}: ${averageGrade}`);
    }
}
schoolGrades(["Lilly 4 6 6 5", "Tim 5 6", "Tammy 2 4 3", "Tim 6 6"]);
console.log("-----");
schoolGrades(["Steven 3 5 6 4", "George 4 6", "Tammy 2 5 3", "Steven 6 3"]);
