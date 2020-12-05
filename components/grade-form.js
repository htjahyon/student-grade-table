class GradeForm {
  constructor(addFormElement, updateFormElement) {
    this.addFormElement = addFormElement;
    this.updateFormElement = updateFormElement;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.addFormElement.addEventListener('submit',this.handleSubmit);
    this.updateFormElement.addEventListener('submit', this.handleUpdate);
    var cancel2Element = document.querySelector(".cancel2");
    cancel2Element.addEventListener('click', function() {
      addFormElement.classList.remove("d-none");
      updateFormElement.classList.add("d-none");
    })
  }
  onSubmit(createGrade) {
    this.createGrade = createGrade;
  }
  onUpdate(changeGrade) {
    this.changeGrade = changeGrade;
  }
  handleSubmit(event) {
    event.preventDefault();
    var formData = new FormData(event.target);
    var name = formData.get('name');
    var course = formData.get('course');
    var grade = formData.get('grade');
    this.createGrade(name, course, grade);
    event.target.reset();
  }
  handleUpdate(event) {
    event.preventDefault();
    var formData = new FormData(event.target);
    var name = formData.get('name');
    var course = formData.get('course');
    var grade = formData.get('grade');
    this.changeGrade(name, course, grade);
    this.addFormElement.classList.remove("d-none");
    this.updateFormElement.classList.add("d-none");
    event.target.reset();
  }
}
