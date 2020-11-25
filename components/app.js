/* global $ */
class App {
  constructor(gradeTable, pageHeader, gradeForm) {
    this.gradeTable = gradeTable;
    this.pageHeader = pageHeader;
    this.gradeForm = gradeForm;
    this.handleGetGradeError = this.handleGetGradeError.bind(this);
    this.handleGetGradeSuccess = this.handleGetGradeSuccess.bind(this);
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
  }
}
