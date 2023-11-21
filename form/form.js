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

// In your Javascript (external .js resource or <script> tag)
$(document).ready(function () {
  $(".tags-select").select2({ tags: true, placeholder: "Enter Tags" });
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

  if (startDate.value > endDate.value || startDateval === "") {
    setError(startDate, "Enter Correct Date");
  } else {
    setSuccess(startDate);
    const startDateInput = startDate.value;
    const endDateInput = endDate.value;

    const startDateComponents = startDateInput.split("-").map(Number);
    const endDateComponents = endDateInput.split("-").map(Number);

    const startDateObj = new Date(
      startDateComponents[2],
      startDateComponents[1] - 1,
      startDateComponents[0]
    );
    const endDateObj = new Date(
      endDateComponents[2],
      endDateComponents[1] - 1,
      endDateComponents[0]
    );

    const timeDifference = endDateObj - startDateObj;
    const durationInDays = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
    console.log(durationInDays);
  }

  if (endTimeval === "") {
    setError(endTime, "Enter Correct Time");
    success = false;
  } else setSuccess(endTime);
  if (startTime.value >= endTime.value) {
    setError(startTime, "Enter Correct Time");
  } else {
    setSuccess(startTime);
    const startTimeInput = startTime.value;
    const endTimeInput = endTime.value;

    const startDateObj = new Date(`2000-01-01 ${startTimeInput}`);
    const endDateObj = new Date(`2000-01-01 ${endTimeInput}`);

    const timeDifference = endDateObj - startDateObj;
    const duration = timeDifference / (1000 * 60 * 60);
    const durationInHours = duration.toFixed(2);
    console.log(durationInHours);
  }
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
  if (badgeContainer.childElementCount == 0)
    setError(tags, "Tags are required");
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

async function postData() {
  const data = {
    courseName: courseName.value,
    startDate: startDate.value,
    endDate: endDate.value,
    duration: duration.value,
    trainerName: trainerName.value,
    description: description.value,
    objective: objective.value,
    details: details.value,
  };

  await axios
    .post("https://localhost:7182/training/addcourse", data)
    .then((res) => console.log(res.data));
}

document.addEventListener("DOMContentLoaded", function () {
  var textarea = document.querySelectorAll(".autoresizing");
  console.log(textarea);
  textarea.forEach((element) => {
    element.addEventListener("input", function () {
      element.style.height = "auto";
      element.style.height = element.scrollHeight + "px";
    });
    1;
  });
});
var charObj = 100;
var charDesc = 300;
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

description.addEventListener("input", () => {
  var inputValue = description.value;
  d.innerHTML = charDesc - inputValue.length;
  if (d.innerHTML == 0) {
    console.log(d.innerHTML);
    document.getElementById("rem-desc-target").style.color = "red";
    document.getElementById("count-desc").style.color = "red";
  } else {
    document.getElementById("rem-desc-target").style.color = "";
    document.getElementById("count-desc").style.color = "";
  }
  // console.log(inputValue.length);
});

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
  var noSpecialCharsRegex = /^[a-zA-Z0-9.\s]+$/;
  if (!noSpecialCharsRegex.test(courseNameInputValue)) {
    courseName.value = courseNameInputValue.replace(/[^a-zA-Z0-9.\s]/g, "");
    setError(courseName, "No Special Characters allowed");
  }
});

// validation for Trainer Name
trainerName.addEventListener("input", function () {
  var trainerNameValue = trainerName.value;
  var allowedCharsRegex = /^[a-zA-Z\s]*$/;
  if (!allowedCharsRegex.test(trainerNameValue)) {
    trainerName.value = trainerNameValue.replace(/[^a-zA-Z.\s]/g, "");
    setError(trainerName, "No Special Characters allowed");
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

//tags
// function addTag() {
//   var badgeContainer = document.getElementById("badgeContainer");
//   var tagsInputValue = tags.value.trim().split(",");
//   var existingBadges = badgeContainer.getElementsByClassName("badge");
//   var noOfBadges = existingBadges.length + tagsInputValue.length;
//   if (noOfBadges > 5) {
//     alert("Only 5 tags are allowed.");
//     return;
//   }

//   // Add a badge for each tag
//   tagsInputValue.forEach(function (tag) {
//     if (tag !== "") {
//       var badge = document.createElement("span");
//       badge.className = "badge";
//       badge.textContent = tag;

//       var deleteIcon = document.createElement("span");
//       deleteIcon.className = "delete-icon";
//       deleteIcon.textContent = " X ";

//       deleteIcon.onclick = function () {
//         badge.remove();
//       };

//       badge.appendChild(deleteIcon);
//       badgeContainer.appendChild(badge);
//     }
//   });
//   tags.value = "";
// }

startDate.addEventListener("blur", function () {
  if (startDate.value !== "") {
    let dateComponents = startDate.value.split("-");
    let formattedStartDate =
      dateComponents[2] + "-" + dateComponents[1] + "-" + dateComponents[0];

    startDate.value = formattedStartDate;
  }
});

endDate.addEventListener("blur", function () {
  if (endDate.value !== "") {
    let dateComponents = endDate.value.split("-");
    let formattedEndDate =
      dateComponents[2] + "-" + dateComponents[1] + "-" + dateComponents[0];

    endDate.value = formattedEndDate;
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
  }
});
