class GradeTable {
  constructor(tableElement) {
    this.tableElement = tableElement;
  }
  updateGrades(grades) {
    var tbodyElement = document.querySelector("tbody");
    for(var i = 0; i < grades.length; i++) {
    var rowElement = document.createElement("tr");
    tbodyElement.appendChild(rowElement);
    var studentElement = document.createElement("td");
    var courseElement = document.createElement("td");
    var gradeElement = document.createElement("td");
      studentElement.textContent = grades[i].name;
      courseElement.textContent = grades[i].course;
      gradeElement.textContent = grades[i].grade;
      rowElement.append(studentElement, courseElement, gradeElement);
    }
  }
}
