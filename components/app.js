/* global $ */
class App {
  constructor(gradeTable, pageHeader) {
    this.gradeTable = gradeTable;
    this.pageHeader = pageHeader;
    this.handleGetGradeError = this.handleGetGradeError.bind(this);
    this.handleGetGradeSuccess = this.handleGetGradeSuccess.bind(this);
  }
  handleGetGradeError(error) {
    console.log("Error!");
  }
  handleGetGradeSuccess(grades) {
    this.gradeTable.updateGrades(grades);
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
  }
}
