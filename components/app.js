/* global $ */
class App {
  constructor(gradeTable, pageHeader, gradeForm) {
    this.gradeTable = gradeTable;
    this.pageHeader = pageHeader;
    this.gradeForm = gradeForm;
    this.id = 0;
    this.handleGetGradeError = this.handleGetGradeError.bind(this);
    this.handleGetGradeSuccess = this.handleGetGradeSuccess.bind(this);
    this.createGrade = this.createGrade.bind(this);
    this.deleteGrade = this.deleteGrade.bind(this);
    this.changeGrade = this.changeGrade.bind(this);
    this.identityNum = this.identityNum.bind(this);
    this.array = [];
  }
  handleGetGradeError(error) {
    console.log("Error!");
  }
  handleGetGradeSuccess(grades) {
    for(var i = 0; i < grades.length; i++) {
      this.array.push(grades[i]);
    }
    var avg = this.gradeTable.updateGrades(this.array);
    this.pageHeader.updateAverage(avg);
  }
  getGrades() {
  $.ajax('https://sgt.lfzprototypes.com/api/grades', {
      type: 'GET',
      error: this.handleGetGradeError,
      success: this.handleGetGradeSuccess,
      headers: {
                'X-Access-Token': 'qCk8Xlz9'
              }
    });
  }
  start() {
    this.getGrades();
    this.gradeForm.onSubmit(this.createGrade);
    this.gradeForm.onUpdate(this.changeGrade);
    this.gradeTable.onDeleteClick(this.deleteGrade);
    this.gradeTable.identityTransfer(this.identityNum);
  }
  createGrade(name, course, grade) {
      this.array.push( {
                         id: this.array.length - 1,
                         name: name,
                         course: course,
                         grade: grade
      });
    this.gradeTable.updateGrades(this.array);
    }
  deleteGrade(rowNum) {
    this.array.splice(rowNum, 1);
    this.gradeTable.updateGrades(this.array);
  }

  changeGrade(name, course, grade) {
    this.array[this.id].name = name;
    this.array[this.id].course = course;
    this.array[this.id].grade = grade
    this.gradeTable.updateGrades(this.array);
  }
  identityNum(id) {
    this.id = id;
  }
}
