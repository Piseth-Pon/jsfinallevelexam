import { url, getOneCourse, addNewStudent, getAllStudents, deleteStudent } from "../api/api.js";

// This function is defined to display the course detail
function displayCourse(course) {
  console.log("here is the course data: ", course)
  // Step1: select .courseDetail
  // Step2: update its innerHTML with the data passed in << course >> object

}

// This function is defined to display the student table that register in the selected course
async function displayStudentTable(courseId) {
  console.log("here is the course id: ", courseId)
  // Part I: handle dipslay student table
  // Step1: get all students data from api endpoint << getAllStudents >>
  // Step2: filter the students data just to get only students that registered in the selected course
  // Step3: select the table body then clear its innerHTML
  // Step4: loop through the filter course data to display the table
  

  // Part II: handle delete student
  // Step1: using querySelectorAll to select all delete button
  // Step2: loop through array of delete button to get access to each delete btn
    // Step2.a: add event listener to each delete button
      // Step2.a.i: get the id that attached in the delete button
      // Step2.a.ii: pass the id to the api endpoin << deleteStudent >> to delete the data from api
      // Step2.a.iii: display alert message "student is deleted successfully"
      // Step2.a.iv: recall << displayStudentTable >> to rerender the page

}


window.addEventListener("DOMContentLoaded", async () => {
  console.log("everything in course page is running from here")
  // the code is given to get the course id we attached in the url
  const params = new URLSearchParams(window.location.search)
  const courseId = params.get('id')
  console.log("course id is: ", courseId)

  // PartI: display course detail
  // Step1: pass the < courseId > to << getOneCourse >> get the course data from api
  // Step2: pass the course data you get to << displayCourse >> to display the detail






  // PartII: display student table
  // Step1: pass < courseId > to << displayStudentTable >> to display the student table



  



  // PartIII: handle add student form
  // Step1: select addStudentForm
  // Step2: add event listener to the form when the form is submitted
    // Step2.a: select the input elements in the form: name, age, email
    // Step2.b: prepare the data object to be sent to the api to create new record with the value from input elements
    // Step2.c: pass the data object you prepared to the endpoint << addNewStudent >>
    // Step2.d: display alert message "student is added successfully" to confirm
    // Step2.e: clear the input data from input elements
    // Step2.f: recall << displayStudentTable >> to rerender the page




})