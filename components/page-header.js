class PageHeader {
  constructor(headerElement) {
    this.headerElement = headerElement;
  }
  updateAverage(newAverage) {
    var avgGradeElement = document.querySelector(".avg-grade");
    avgGradeElement.textContent = newAverage;
  }
}
