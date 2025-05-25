 document.addEventListener('DOMContentLoaded', function () {
  window.displaySubjectInfo = function () {
    const scienceEl = document.getElementById('science');
    const mathEl = document.getElementById('math');
    const englishEl = document.getElementById('english');
    const resultEl = document.getElementById('result');
    const science = parseInt(scienceEl.value);
    const math = parseInt(mathEl.value);
    const english = parseInt(englishEl.value);
    if (
      isNaN(science) || isNaN(math) || isNaN(english) ||
      science < 66 || science > 100 ||
      math < 66 || math > 100 ||
      english < 66 || english > 100
    ) {
      resultEl.textContent = "Invalid input. Please enter numbers between 66 and 100 for all subjects.";
      return;
    }
    const average = Math.round((science + math + english) / 3);
    let message;
    if (average >= 94) {
      message = 'Excellent!';
    } else if (average >= 87) {
      message = 'Above Standard!';
    } else if (average >= 80) {
      message = 'Standard!';
    } else if (average >= 75) {
      message = 'Needs Improvement';
    } else {
      message = 'You have failed.';
    }
    resultEl.textContent = `Your average grade is ${average}. ${message}`;
  }
});
