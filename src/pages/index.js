import { url, getAllCourses, deleteCourse } from "../api/api.js";

// this function is defined to display all course cards from database (api) and delete the course
async function displayAllCourses() {
  
  // PartI: Display the course cards
  // Step1: get all courses data from api << getAllCourses >>
  // Step2: select .coursesWrapper and clear its content 
  // Step3: write the for loop to loop through courses data to generate course card in coursesWrapper
  // Note: to display image follow the format
  // <img src="${url}/api/files/COLLECTION_ID_OR_NAME/RECORD_ID/FILENAME" alt="">


  // PartII. Handle delete course card
  // Step1: using querySelectorAll to select all deleteBtn
  // Step2: loop through the array of deleteBtn to get access to each button
    // Step2.a: add event listener to each button
      // Step2.a.i: get the id that attached in button
      // Step2.a.ii: pass the id to the api endpoint << deleteCourse >> to delete the course
      // Step2.a.iii: alert a message "course is deleted successfully"
      // Step2.a.iv: recall << displayAllCourses >> to re-render/update the page


} 


window.addEventListener("DOMContentLoaded", async () => {
  console.log("everything in index.html page is running from here")
  // STEP1: call/trigger function << displayAllCourses >> to display all course cards


})