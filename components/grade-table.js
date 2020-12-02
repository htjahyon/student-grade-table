class GradeTable {
  constructor(tableElement) {
    this.tableElement = tableElement;
  }
  updateGrades(grades) {
    var tbodyElement = document.querySelector("tbody");
    if(tbodyElement.childNodes.length > 1) {
      this.destroy();
    }
    var totalGrade = 0;
    for(var i = 0; i < grades.length; i++) {
    var rowElement = document.createElement("tr");
    rowElement.className = "dataRow";
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
    return totalGrade/grades.length;
  }
  destroy() {
    var tbodyElement = document.querySelector("tbody");
    var currentRow = document.getElementsByClassName("dataRow");
    for (var j = tbodyElement.childNodes.length - 1; j >= 0; j--) {
        currentRow[j].remove();
    }
  }
}
