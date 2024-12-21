import { url, getOneCourse, addNewStudent, getAllStudents, deleteStudent } from "../api/api.js";

function displayCourse(course) {

  const courseDetail = document.querySelector(".courseDetail")
  courseDetail.style.backgroundImage = `url(${url}/api/files/${course.collectionId}/${course.id}/${course.thumbnail})`
  courseDetail.innerHTML = `
  <div class="overlay">
      <h4>Title: ${course.title}</h4>
      <p>Description: ${course.description}</p>
      <p>Duration: ${course.duration}</p>
      <p>Start Date: ${course.startDate}</p>
      <h2>Price: ${course.price} USD</h2>
    </div>
  
  
  `
}

async function displayStudentTable(courseId) {
  const students = await getAllStudents()
  console.log(students)

  const studentsInThisCourse = students.filter((student) => student.courseId == courseId)
  console.log(studentsInThisCourse)

  const tbody = document.querySelector("tbody")
  tbody.innerHTML = ``
  for (let i = 0; i < studentsInThisCourse.length; i++) {
    const student = studentsInThisCourse[i]
    tbody.innerHTML = tbody.innerHTML + `
    <tr>
      <td>${i + 1}</td>
      <td>${student.name}</td>
      <td>${student.age}</td>
      <td>${student.email}</td>
      <td>
        <button id="deleteBtn" data-id="${student.id}">Delete</button>
      </td>
    </tr>
    `
  }

  const deleteBtns = document.querySelectorAll("#deleteBtn")
  for(let i = 0; i < deleteBtns.length; i++) {
    deleteBtns[i].addEventListener("click", async () => {
      await deleteStudent(deleteBtns[i].dataset.id)
      alert("student is deleted successfully")
      displayStudentTable(courseId)
    })
  }
}


window.addEventListener("DOMContentLoaded", async () => {
  
  const params = new URLSearchParams(window.location.search)
  const id = params.get('id')

  const course = await getOneCourse(id)
  displayCourse(course)

  displayStudentTable(id)

  const addStudentForm = document.querySelector("#addStudentForm")
  addStudentForm.addEventListener("submit", async (e) => {
    e.preventDefault()

    const name = document.querySelector("#name")
    const age = document.querySelector("#age")
    const email = document.querySelector("#email")

    const data = {
      "name": name.value,
      "age": parseInt(age.value),
      "email": email.value,
      "courseId": id
    };

    await addNewStudent(data)
    alert("new student is added successfully")

    name.value = ``
    age.value = ``
    email.value = ``

    displayStudentTable(id)

  })



})