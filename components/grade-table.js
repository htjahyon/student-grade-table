class GradeTable {
  constructor(tableElement, noGradesElement) {
    this.tableElement = tableElement;
    this.noGradesElement = noGradesElement;
  }
  updateGrades(grades) {
    this.noGradesElement.className = "d-none";
    this.destroy();
    var totalGrade = 0;
    for(var i = 0; i < grades.length; i++) {
      var rowElement = this.renderGradeRow(grades[i], this.deleteGrade);
      this.tableElement.appendChild(rowElement);
      totalGrade += grades[i].grade;
    }
    if (grades.length === 0) {
      this.noGradesElement.className = "d-block";
      return 0;
    }
    return totalGrade/grades.length;
  }
  destroy() {
    const tbodyLength = this.tableElement.childNodes.length;
    for (var j = 0; j < tbodyLength; j++) {
        this.tableElement.childNodes[0].remove();
    }
  }
  onDeleteClick(deleteGrade) {
    this.deleteGrade = deleteGrade;
  }
  renderGradeRow(data, deleteGrade) {
    var rowElement = document.createElement("tr");
    this.tableElement.appendChild(rowElement);
    var studentElement = document.createElement("td");
    var courseElement = document.createElement("td");
    var gradeElement = document.createElement("td");
    var deleteElement = document.createElement("td");
    var buttonElement = document.createElement("button")
    studentElement.textContent = data.name;
    courseElement.textContent = data.course;
    gradeElement.textContent = data.grade;
    buttonElement.textContent = "DELETE";
    buttonElement.className = "badge badge-danger";
    deleteElement.appendChild(buttonElement);
    rowElement.append(studentElement, courseElement, gradeElement, deleteElement);
    buttonElement.addEventListener('click', function() {
      deleteGrade(data.id);
    });
    return rowElement;
  }
}
