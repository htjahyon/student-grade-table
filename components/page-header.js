class PageHeader {
  constructor(headerElement) {
    this.headerElement = headerElement;
  }
  updateAverage(newAverage) {
    this.headerElement.textContent = Math.round(newAverage);
  }
}
