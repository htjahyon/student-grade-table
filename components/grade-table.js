class GradeTable {
  constructor(tableElement, noGradesElement) {
    this.tableElement = tableElement;
    this.noGradesElement = noGradesElement;
  }
  updateGrades(grades) {
    var pElement = document.querySelector("#no-grades");
    if(grades.length === 0) {
      pElement.className = "d-block";
    }
    else {
      pElement.className = "d-none";
    }
    var tbodyElement = document.querySelector("tbody");
    if(tbodyElement.childNodes.length > 1) {
      this.destroy();
    }
    var totalGrade = 0;
    for(var i = 0; i < grades.length; i++) {
      var rowElement = this.renderGradeRow(grades[i], this.deleteGrade);
      tbodyElement.appendChild(rowElement);
      totalGrade += grades[i].grade;
    }
    return totalGrade/grades.length;
  }
  destroy() {
    var tbodyElement = document.querySelector("tbody");
    const tbodyLength = tbodyElement.childNodes.length;
    for (var j = 1; j <= tbodyLength; j++) {
        tbodyElement.childNodes[0].remove();
    }
  }
  onDeleteClick(deleteGrade) {
    this.deleteGrade = deleteGrade;
  }
  renderGradeRow(data, deleteGrade) {
    var tbodyElement = document.querySelector("tbody");
    var rowElement = document.createElement("tr");
    tbodyElement.appendChild(rowElement);
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
