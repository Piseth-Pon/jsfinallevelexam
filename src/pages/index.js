import { url, getAllCourses, deleteCourse } from "../api/api.js";

async function displayAllCourses() {
  const courses = await getAllCourses()
  const coursesWrapper = document.querySelector(".coursesWrapper")
  coursesWrapper.innerHTML = ``

  for (let i = 0; i < courses.length; i++) {
    coursesWrapper.innerHTML += `
    <div class="course">
        <img src="${url}/api/files/${courses[i].collectionId}/${courses[i].id}/${courses[i].thumbnail}" alt="">
        <h4>Title: ${courses[i].title}</h4>
        <p>Duration: ${courses[i].duration}</p>
        <a href="course.html?id=${courses[i].id}" id="detailBtn" role="button">Detail</a>
        <button id="deleteBtn" data-id="${courses[i].id}">Delete</button>
    </div>
    `
  }


  const deleteBtns = document.querySelectorAll("#deleteBtn")
  for (let i = 0; i < deleteBtns.length; i++) {
    deleteBtns[i].addEventListener("click", async () => {
      let id = deleteBtns[i].dataset.id
      await deleteCourse(id)
      alert("course is deleted successfully")
      displayAllCourses()
    })
  }

} 


window.addEventListener("DOMContentLoaded", async () => {


  displayAllCourses()





})