import { modules, students, mentors, classes } from "./hyf.js";

/**
 * We would like to have a list of everyone that is currently participating in a class.
 * This means the students, but also the mentors that are currently teaching the class.
 * The students should be self explanatory, but to find the mentors you will need to follow these steps:
 * - Check what the `currentModule` of the class is
 * - Find the mentor(s) that are `nowTeaching` that module
 *
 * Should return the list of names and their roles. So something like:
 *
 *  [{ name: 'John', role: 'student' }, { name: 'Mary', role: 'mentor' }]
 */
const getPeopleOfClass = (className) => {

  const currentStudents = students.filter(student => {return student.class.includes(className)});
  const currentStudentsRole = currentStudents.map(student => {
    student.role = 'student';
    return {name: student.name, role: student.role}});

  const currentModule = classes
  .filter(class_ => {return class_.name === className;})
  .map(class_ => {return class_.currentModule});

  const currentMentor = mentors
  .filter(mentor => {return mentor.nowTeaching === currentModule.toString()})
  .map(mentor => {
    mentor.role = 'mentor';
    return {name: mentor.name, role: mentor.role}});
  
  return [...currentStudentsRole,...currentMentor];
};
// You can uncomment out this line to try your function
console.log(getPeopleOfClass('class34'));

/**
 * We would like to have a complete overview of the current active classes.
 * First find the active classes, then for each get the people of that class.
 *
 * Should return an object with the class names as properties.
 * Each class name property contains an array identical to the return from `getPeopleFromClass`. So something like:
 *
 *  {
 *    class34: [{ name: 'John', role: 'student' }, { name: 'Mary', role: 'mentor' }],
 *    class35: [{ name: 'Jane', role: 'student' }, { name: 'Steve', role: 'mentor' }]
 *  }
 */
const getActiveClasses = () => {
  const activeClasses = classes
  .filter(class_ => {return class_.active === true;})
  .map(class_ => {return class_.name});
  
  const obj = {};

  const people = activeClasses.map(activeClass => {
    return obj[activeClass] = getPeopleOfClass(activeClass);});

  return obj;
};
// You can uncomment out this line to try your function
console.log(getActiveClasses());
