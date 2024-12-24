document.getElementById("studentForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("studentName").value;
    const age = document.getElementById("studentAge").value;
    const grade = document.getElementById("studentGrade").value;
    if (name && age && grade) {
      const studentList = document.getElementById("studentsList");
      const li = document.createElement("li");
      li.textContent = `${name}, Age: ${age}, Grade: ${grade}`;
      studentList.appendChild(li);
   
      document.getElementById("studentName").value = "";
      document.getElementById("studentAge").value = "";
      document.getElementById("studentGrade").value = "";
    } else {
      alert("Please fill all the fields!");
    }
  });
   
  document.getElementById("teacherForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const name = document.getElementById("teacherName").value;
    const subject = document.getElementById("subject").value;
  
    if (name && subject) {
      const teacherList = document.getElementById("teachersList");
      const li = document.createElement("li");
      li.textContent = `${name}, Subject: ${subject}`;
      teacherList.appendChild(li);
   
      document.getElementById("teacherName").value = "";
      document.getElementById("subject").value = "";
    } else {
      alert("Please fill all the fields!");
    }
  });
   
  const scheduleData = [
    { className: "Math 101", teacher: "Mr. Smith", time: "9:00 AM - 10:00 AM" },
    { className: "Science 102", teacher: "Ms. Johnson", time: "10:30 AM - 11:30 AM" },
    { className: "History 103", teacher: "Mr. Lee", time: "12:00 PM - 1:00 PM" },
  ];
  
  const scheduleList = document.getElementById("scheduleList");
  scheduleData.forEach(item => {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${item.className}</td><td>${item.teacher}</td><td>${item.time}</td>`;
    scheduleList.appendChild(tr);
  });
  