function payRateCalculate() {
  let workDays = (document.getElementById("workDays").value).trim();
  let selectObj = document.getElementById("year");
  let yearOfStudy = parseInt(selectObj.options[selectObj.selectedIndex].value);
  //alert("yearOfStudy = "+yearOfStudy);
  
  if (yearOfStudy === 1) {
    hourlyRate = 55;
  } else if (yearOfStudy === 2) {
    hourlyRate = 65;
  } else if (yearOfStudy === 3) {
    hourlyRate = 75;
  } else if (yearOfStudy === 4) {
    hourlyRate = 85;  
  } else {
    hourlyRate = 55; // กำหนดอัตราเริ่มต้นหากไม่ตรงกับเงื่อนไข
  }

  let weeklyPayRate = workDays * hoursPerDay * hourlyRate;
  return weeklyPayRate;
}


