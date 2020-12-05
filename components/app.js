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
    this.handleCreateGradeError = this.handleCreateGradeError.bind(this);
    this.handleCreateGradeSuccess = this.handleCreateGradeSuccess.bind(this);
    this.deleteGrade = this.deleteGrade.bind(this);
    this.handleDeleteGradeError = this.handleDeleteGradeError.bind(this);
    this.handleDeleteGradeSuccess = this.handleDeleteGradeSuccess.bind(this);
    this.changeGrade = this.changeGrade.bind(this);
    this.handleChangeGradeError = this.handleChangeGradeError.bind(this);
    this.handleChangeGradeSuccess = this.handleChangeGradeSuccess.bind(this);
    this.identityNum = this.identityNum.bind(this);
  }
  handleGetGradeError(error) {
    console.log("Error!");
  }
  handleGetGradeSuccess(grades) {
    var avg = this.gradeTable.updateGrades(grades);
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
    $.ajax('https://sgt.lfzprototypes.com/api/grades', {
        type: 'POST',
        error: this.handleCreateGradeError,
        success: this.handleCreateGradeSuccess,
        headers: {
                  'X-Access-Token': 'qCk8Xlz9'
                },
        data: {
                name: name,
                course: course,
                grade: grade
              }
    });
  }
  handleCreateGradeError(error) {
    console.error("Grade creation failed: Network connection could not be established");
  }
  handleCreateGradeSuccess() {
    this.getGrades();
  }
  deleteGrade(id) {
    $.ajax('https://sgt.lfzprototypes.com/api/grades/' + id, {
        type: 'DELETE',
        error: this.handleDeleteGradeError,
        success: this.handleDeleteGradeSuccess,
        headers: {
                  'X-Access-Token': 'qCk8Xlz9'
                },

      });
  }
  handleDeleteGradeError(error) {
    console.error("Delete grade failed.");
  }
  handleDeleteGradeSuccess() {
    this.getGrades();
  }
  changeGrade(name, course, grade) {
    $.ajax('https://sgt.lfzprototypes.com/api/grades/' + this.id, {
        type: 'PATCH',
        error: this.handleChangeGradeError,
        success: this.handleChangeGradeSuccess,
        headers: {
          'X-Access-Token': 'qCk8Xlz9'
        },
        data: {
                name: name,
                course: course,
                grade: grade
        }
      });
  }
  handleChangeGradeError(error) {
    console.error("Change grade failed.");
  }
  handleChangeGradeSuccess() {
    this.getGrades();
  }
  identityNum(id) {
    this.id = id;
  }
}
