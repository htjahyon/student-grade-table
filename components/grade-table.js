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
      var rowElement = this.renderGradeRow(grades[i], this.deleteGrade, this.identityNum);
      this.tableElement.appendChild(rowElement);
      totalGrade += grades[i].grade;
    }
    if (grades.length === 0) {
      this.noGradesElement.classList.remove = "d-none";
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
  renderGradeRow(data, deleteGrade, identityNum) {
    var actionElement = document.querySelector(".action");
    var submitElement = document.querySelector(".submit");
    var rowElement = document.createElement("tr");
    this.tableElement.appendChild(rowElement);
    var studentElement = document.createElement("td");
    var courseElement = document.createElement("td");
    var gradeElement = document.createElement("td");
    var operationElement = document.createElement("td");
    var changeElement = document.createElement("button");
    var deleteElement = document.createElement("button");
    studentElement.textContent = data.name;
    courseElement.textContent = data.course;
    gradeElement.textContent = data.grade;
    changeElement.textContent = "CHANGE";
    changeElement.className = "badge badge-primary";
    deleteElement.textContent = "DELETE";
    deleteElement.className = "badge badge-danger";
    operationElement.append(changeElement, deleteElement);
    rowElement.append(studentElement, courseElement, gradeElement, operationElement);
    var addForm = document.querySelector("#addform-element");
    var updateForm = document.querySelector("#updateform-element");
    deleteElement.addEventListener('click', function() {
      addForm.classList.remove("d-none");
      updateForm.classList.add("d-none");
      deleteGrade(data.id);
    });
    changeElement.addEventListener('click', function() {
      addForm.classList.add("d-none");
      updateForm.classList.remove("d-none");
      var inputName = document.querySelector("#name2");
      var inputCourse = document.querySelector("#course2");
      var inputGrade = document.querySelector("#grade2");
      inputName.setAttribute('value', data.name);
      inputCourse.setAttribute('value', data.course);
      inputGrade.setAttribute('value', data.grade);
      identityNum(data.id);
      });
    return rowElement;
  }
  identityTransfer(identityNum) {
    this.identityNum = identityNum;
  }
}
