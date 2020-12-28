/* global $ */
class App {
  constructor(gradeTable, pageHeader, gradeForm) {
    this.gradeTable = gradeTable;
    this.pageHeader = pageHeader;
    this.gradeForm = gradeForm;
    this.handleGetGradeError = this.handleGetGradeError.bind(this);
    this.handleGetGradeSuccess = this.handleGetGradeSuccess.bind(this);
    this.handleCreateGradeError = this.handleCreateGradeError.bind(this);
    this.handleCreateGradeSuccess = this.handleCreateGradeSuccess.bind(this);
    this.handleDeleteGradeError = this.handleDeleteGradeError.bind(this);
    this.handleDeleteGradeSuccess = this.handleDeleteGradeSuccess.bind(this);
    this.handleChangeGradeError = this.handleChangeGradeError.bind(this);
    this.handleChangeGradeSuccess = this.handleChangeGradeSuccess.bind(this);
    this.createGrade = this.createGrade.bind(this);
    this.deleteGrade = this.deleteGrade.bind(this);
    this.changeGrade = this.changeGrade.bind(this);
    this.transferData = this.transferData.bind(this);
    this.array = [];
    this.rowNum = 0;
    this.id = 0;
    this.refresh = this.refresh.bind(this);
  }
  handleGetGradeError(error) {
    console.log("Error!");
  }
  handleGetGradeSuccess(grades) {
    for(var i = 0; i < grades.length; i++) {
      this.array.push(grades[i]);
    }
    this.refresh();
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
    this.gradeTable.onTransferClick(this.transferData);
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
    this.array.push({
      id: this.array.length - 1,
      name: name,
      course: course,
      grade: Number(grade)
    });
  }
  handleCreateGradeError(error) {
    console.error("Grade creation failed: Network connection could not be established");
  }
  handleCreateGradeSuccess() {
    this.refresh();
  }
  deleteGrade(rowNum, id) {
      $.ajax('https://sgt.lfzprototypes.com/api/grades/' + id, {
        type: 'DELETE',
        error: this.handleDeleteGradeError,
        success: this.handleDeleteGradeSuccess,
        headers: {
          'X-Access-Token': 'qCk8Xlz9'
        }
      });
    this.array.splice(rowNum, 1);
  }
  handleDeleteGradeError(error) {
    console.error("Delete grade failed.");
  }
  handleDeleteGradeSuccess() {
    this.refresh();
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
    this.array[this.rowNum].name = name;
    this.array[this.rowNum].course = course;
    this.array[this.rowNum].grade = Number(grade);
  }
  handleChangeGradeError(error) {
    console.error("Change grade failed.");
  }
  handleChangeGradeSuccess() {
    this.refresh();
  }
  refresh() {
    var avg = this.gradeTable.updateGrades(this.array);
    this.pageHeader.updateAverage(avg);
  }
  transferData(rowNum, id) {
    this.rowNum = rowNum;
    this.id = id;
  }
}
