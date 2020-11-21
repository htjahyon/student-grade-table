class GradeTable {
  constructor(tableElement) {
    this.tableElement = tableElement;
  }
  updateGrades(grades) {
    var tbodyElement = document.querySelector("tbody");
    var totalGrade = 0;
    for(var i = 0; i < grades.length; i++) {
    var rowElement = document.createElement("tr");
    tbodyElement.appendChild(rowElement);
    var studentElement = document.createElement("td");
    var courseElement = document.createElement("td");
    var gradeElement = document.createElement("td");
      studentElement.textContent = grades[i].name;
      courseElement.textContent = grades[i].course;
      gradeElement.textContent = grades[i].grade;
      totalGrade += grades[i].grade;
      rowElement.append(studentElement, courseElement, gradeElement);
    }
    var avgGradeElement = document.querySelector(".avg-grade");
    avgGradeElement.textContent = totalGrade / grades.length;
  }
}
