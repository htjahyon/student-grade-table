/* global $ */
class App {
  handleGetGradeError(error) {
    console.log("Error!");
  }
  handleGetGradeSuccess(grades) {
    console.log("Success!");
  }
  constructor() {
    this.handleGetGradeError();
    this.handleGetGradeSuccess();
  }
  getGrades() {
  $.ajax('https://sgt.lfzprototypes.com', {
    error: this.handleGetGradeError,
    success: this.handleGetGradeSuccess,
  });
  }
  start() {
    this.getGrades();
  }
}
