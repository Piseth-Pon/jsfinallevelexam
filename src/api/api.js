import PocketBase from '../lib/pocketbase.es.mjs';

const url = 'https://fintaltest.pockethost.io/'
const pb = new PocketBase(url)

async function getAllCourses() {
  const records = await pb.collection('courses').getFullList()
  return records
}

async function getOneCourse(id) {
  const record = await pb.collection('courses').getOne(id)
  return record
}

async function deleteCourse(id) {
  const record = await pb.collection('courses').delete(id);
  return record
}

async function getAllStudents() {
  const records = await pb.collection('students').getFullList()
  return records
}

async function addNewStudent(data) {
  await pb.collection('students').create(data);
  return true
}

async function deleteStudent(id) {
  await pb.collection('students').delete(id);
  return true
}

export {
  url,
  getAllCourses,
  getOneCourse,
  deleteCourse,
  addNewStudent,
  getAllStudents,
  deleteStudent
}