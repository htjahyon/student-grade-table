var tableElement = document.querySelector(".table");
var pElement = document.querySelector("#no-grades");
var gradeTable = new GradeTable(tableElement, pElement);
var headerElement = document.querySelector(".avg-grade");
var pageHeader = new PageHeader(headerElement);
var form = document.querySelector("form");
var gradeForm = new GradeForm(form);
var app = new App(gradeTable, pageHeader, gradeForm);
app.start();
