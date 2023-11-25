var courseName = document.getElementById("courseName");
var startDate = document.getElementById("startDate");
var endDate = document.getElementById("endDate");
var startTime = document.getElementById("startTime");
var endTime = document.getElementById("endTime");
var duration = document.getElementById("duration");
var trainerName = document.getElementById("trainerName");
var description = document.getElementById("description");
var objective = document.getElementById("objective");
var details = document.getElementById("details");
var mode = document.getElementById("mode");
var capacity = document.getElementById("capacity");
var tags = document.getElementById("tags");
var place = document.getElementById("location");
var form = document.getElementById("form");
var courseFull = document.getElementById("courseFull");
var tagsSelect = document.getElementsByClassName("tags-select");
var tagcount = 5;

$(document).ready(function () {
  $(".tags-select").select2({
    // maximumSelectionLength: 5,
    tags: true,
    placeholder: "Enter Tags",
  });

  $(".tags-select").on("select2:select select2:unselect", function (e) {
    var selectedTags = $(".tags-select").val();

    if (selectedTags.length >= 5) {
      $(".tags-select").val(selectedTags.slice(0, 4));
      e.preventDefault();
    } else {
      setSuccess(tags);
    }
    var msg = tagcount - selectedTags.length;
    if (msg == 0) {
      setError(tags, "Only 5 tags allowed!");
    }
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (validityform()) {
  }
});

function validityform() {
  const courseNameval = courseName.value.trim();
  const startDateval = startDate.value.trim();
  const endDateval = endDate.value.trim();
  const durationval = duration.value.trim();
  const trainerNameval = trainerName.value.trim();
  const descriptionval = description.value.trim();
  const objectiveval = objective.value.trim();
  const detailsval = details.value.trim();
  const startTimeval = startTime.value.trim();
  const endTimeval = endTime.value.trim();
  const locationval = place.value.trim();
  const modeval = mode.value.trim();
  const capacityval = capacity.value.trim();
  const tagsval = tags.value.trim();
  let success = true;

  if (courseNameval === "") {
    setError(courseName, "CourseName is required");
    success = false;
  } else setSuccess(courseName);
  if (endDateval === "") {
    setError(endDate, "Enter correct Date");
    success = false;
  } else setSuccess(endDate);
  if (durationval === "") {
    setError(duration, "Duration is required");
    success = false;
  } else setSuccess(duration);
  if (trainerNameval === "") {
    setError(trainerName, "Trainer Name is required");
    success = false;
  } else setSuccess(trainerName);
  if (descriptionval === "") {
    setError(description, "Description is required");
    success = false;
  } else setSuccess(description);
  if (objectiveval === "") {
    setError(objective, "Objective is required");
    success = false;
  } else setSuccess(objective);
  if (detailsval === "") {
    setError(details, "Details is required");
    success = false;
  } else setSuccess(details);

  if (startDateval === "") setError(startDate, "Enter Start Date");
  else setSuccess(startDate);
  if (endDateval === "") setError(endDate, "Enter End Date");
  else setSuccess(endDate);

  if (startTimeval === "") {
    setError(startTime, "Enter Start Time");
    success = false;
  } else setSuccess(startTime);
  if (endTimeval === "") {
    setError(endTime, "Enter End Time");
    success = false;
  } else setSuccess(endTime);

  if (modeval === "Mode") {
    setError(mode, "Mode is required");
    success = false;
  } else setSuccess(mode);
  if (locationval === "Location") {
    setError(place, "Location is required");
    success = false;
  } else setSuccess(place);
  if (capacityval === "") {
    setError(capacity, "Capacity is required");
    success = false;
  } else setSuccess(capacity);
  if (tagsval == "") setError(tags, "Tags are required");
  else {
    setSuccess(tags);
  }
  return success;
}

function setError(element, message) {
  const inputGroup = element.parentElement;
  const errorElement = inputGroup.querySelector(".error");
  errorElement.innerText = message;
  inputGroup.classList.add("error");
  inputGroup.classList.remove("success");
}
function setSuccess(element) {
  const inputGroup = element.parentElement;
  const errorElement = inputGroup.querySelector(".error");
  errorElement.innerText = "";
  inputGroup.classList.add("success");
  inputGroup.classList.remove("error");
}

document.addEventListener("DOMContentLoaded", function () {
  var textarea = document.querySelectorAll(".autoresizing");
  textarea.forEach((element) => {
    element.addEventListener("input", function () {
      element.style.height = "auto";
      element.style.height = element.scrollHeight + "px";
    });
    
  });
});
var charDesc = 100;
var charObj = 300;
var charDet = 500;
var charCou = 100;

var d = document.getElementById("count-desc");
var o = document.getElementById("count-obj");
var det = document.getElementById("count-det");
var course = document.getElementById("count-course");

d.innerHTML = charDesc;
o.innerHTML = charObj;
det.innerHTML = charDet;
course.innerHTML = charCou;

objective.addEventListener("input", () => {
  var inputValue = objective.value;
  o.innerHTML = charObj - inputValue.length;
  if (o.innerHTML == 0) {
    document.getElementById("rem-obj-target").style.color = "red";
    document.getElementById("count-obj").style.color = "red";
  } else {
    document.getElementById("rem-obj-target").style.color = "";
    document.getElementById("count-obj").style.color = "";
  }
});

description.addEventListener("input", () => {
  var inputValue = description.value;
  d.innerHTML = charDesc - inputValue.length;
  if (d.innerHTML == 0) {
    document.getElementById("rem-desc-target").style.color = "red";
    document.getElementById("count-desc").style.color = "red";
  } else {
    document.getElementById("rem-desc-target").style.color = "";
    document.getElementById("count-desc").style.color = "";
  }
});

details.addEventListener("input", () => {
  var inputValue = details.value;
  det.innerHTML = charDet - inputValue.length;
  if (det.innerHTML == 0) {
    document.getElementById("rem-det-target").style.color = "red";
    document.getElementById("count-det").style.color = "red";
  } else {
    document.getElementById("rem-det-target").style.color = "";
    document.getElementById("count-det").style.color = "";
  }
});

courseName.addEventListener("input", () => {
  var inputValue = courseName.value;
  course.innerHTML = charCou - inputValue.length;

  if (course.innerHTML == 0) {
    document.getElementById("count-course").style.color = "red";
    document.getElementById("count-course-target").style.color = "red";
  } else {
    document.getElementById("count-course").style.color = "";
    document.getElementById("count-course-target").style.color = "";
  }
});

//validation for Course Name
courseName.addEventListener("input", function () {
  var courseNameInputValue = courseName.value;
  var noSpecialCharsRegex = /^[a-zA-Z0-9.-\s]+$/;
  if (
    !noSpecialCharsRegex.test(courseNameInputValue) &&
    courseNameInputValue.length != 0
  ) {
    courseName.value = courseNameInputValue.replace(/[^a-zA-Z0-9.-\s]/g, "");
    setError(courseName, "No Special Characters allowed");
  } else {
    setSuccess(courseName);
  }
});

// validation for Trainer Name
trainerName.addEventListener("input", function () {
  var trainerNameValue = trainerName.value;
  var allowedCharsRegex = /^[a-zA-Z\s]*$/;
  if (
    !allowedCharsRegex.test(trainerNameValue) &&
    trainerNameValue.length != 0
  ) {
    trainerName.value = trainerNameValue.replace(/[^a-zA-Z.\s]/g, "");
    setError(trainerName, "No Special Characters allowed");
  } else {
    setSuccess(trainerName);
  }
});

//Validation for capacity
capacity.addEventListener("input", function () {
  var capacityInputValue = capacity.value;
  var numbersOnlyRegex = /^[0-9]+$/;
  if (
    capacityInputValue.includes(".") ||
    !numbersOnlyRegex.test(capacityInputValue)
  ) {
    capacity.value = capacityInputValue.replace(/[^0-9]/g, "");
    setError(capacity, "Only Numbers Allowed");
  } else {
    setSuccess(capacity);
  }
});

//validation for textarea
description.style.resize = "none";
objective.style.resize = "none";
details.style.resize = "none";

//validation form
form.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
  }
});

startDate.addEventListener("blur", function () {
  if (startDate.value !== "") {
    let dateComponents = startDate.value.split("-");
    let formattedStartDate =
      dateComponents[2] + "-" + dateComponents[1] + "-" + dateComponents[0];

    startDate.value = formattedStartDate;
  }
  autoFillDuration();
});

endDate.addEventListener("blur", function () {
  if (endDate.value !== "") {
    let dateComponents = endDate.value.split("-");
    let formattedEndDate =
      dateComponents[2] + "-" + dateComponents[1] + "-" + dateComponents[0];
    endDate.value = formattedEndDate;
    autoFillDuration();
  }
});

startTime.addEventListener("blur", function () {
  if (startTime.value !== "") {
    let startTimeComponents = startTime.value.split(":");
    let hours = parseInt(startTimeComponents[0], 10);
    let minutes = startTimeComponents[1];
    let ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    hours = hours < 10 ? "0" + hours : hours;
    let formattedStartTime = hours + ":" + minutes + " " + ampm;
    startTime.value = formattedStartTime;
  }
  autoFillDuration();
});

endTime.addEventListener("blur", function () {
  if (endTime.value !== "") {
    let endTimeComponents = endTime.value.split(":");
    let hours = parseInt(endTimeComponents[0], 10);
    let minutes = endTimeComponents[1];
    let ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;

    hours = hours < 10 ? "0" + hours : hours;

    let formattedEndTime = hours + ":" + minutes + " " + ampm;

    endTime.value = formattedEndTime;
    autoFillDuration();
  }
});

function dateValidation() {
  if (startDate.value > endDate.value) {
    setError(endDate, "Enter Correct Date");
  } else {
    setSuccess(endDate);
  }
}

function convertTo24HourFormat(timeString) {
  const [hours, minutes, period] = timeString.split(/:|\s/);
  const convertedHours =
    period === "PM" ? parseInt(hours, 10) + 12 : parseInt(hours, 10);

  const formattedHours = String(convertedHours).padStart(2, "0");
  const formattedMinutes = String(minutes).padStart(2, "0");

  return `${formattedHours}:${formattedMinutes}`;
}

function autoFillDuration() {
  if (
    endTime.value !== "" &&
    startTime.value !== "" &&
    startDate.value !== "" &&
    endDate.value !== ""
  ) {
    const startDateString = startDate.value;
    const startTimeString = convertTo24HourFormat(startTime.value);
    const endDateString = endDate.value;
    const endTimeString = convertTo24HourFormat(endTime.value);

    const [startDay, startMonth, startYear] = startDateString.split("-");
    const dateA = new Date(
      `${startYear}-${startMonth}-${startDay}T${startTimeString}`
    );

    const [endDay, endMonth, endYear] = endDateString.split("-");
    const dateB = new Date(`${endYear}-${endMonth}-${endDay}T${endTimeString}`);

    const timeDifference = dateB - dateA;

    if (dateA > dateB) {
      duration.value = "";
    } else {
      const totalHours = Math.floor(timeDifference / (1000 * 60 * 60));
      const remainingMinutes = Math.floor(
        (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
      );

      duration.value = `${totalHours} hours and ${remainingMinutes} minutes`;
    }
  } else if (startDate != null && endDate != null) {
    const startDateString = startDate.value;
    const endDateString = endDate.value;

    const [startDay, startMonth, startYear] = startDateString.split("-");
    const dateA = new Date(`${startYear}-${startMonth}-${startDay}`);

    const [endDay, endMonth, endYear] = endDateString.split("-");
    const dateB = new Date(`${endYear}-${endMonth}-${endDay}`);

    if (dateA > dateB) {
      duration.value = "";
      setError(endDate, "Enter Correct Date");
    } else {
      setSuccess(endDate);
    }
  }
}

tagsEvent.addEventListener("input", () => {
  console.log(count.childElementCount);
});
