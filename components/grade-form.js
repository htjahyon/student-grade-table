class GradeForm {
  constructor(formElement) {
    this.formElement = formElement;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.formElement.addEventListener('submit',this.handleSubmit);
  }
  onSubmit(createGrade) {
    this.createGrade = createGrade;
  }
  handleSubmit(event) {
    event.preventDefault();
    /*var formData = new FormData(document.querySelector('form'));
    var name = formData.get('name');
    var course = formData.get('course');
    var grade = formData.get('grade');*/
    var name = document.querySelector("#name1").value;
    var course = document.querySelector("#course1").value;
    var grade = document.querySelector("#grade1").value;
    this.createGrade(name, course, grade);
    event.target.reset();
  }
}
