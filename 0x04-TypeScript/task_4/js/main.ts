/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/Java.ts" />
/// <reference path="./subjects/React.ts" />

// ✅ Create teacher with experienceTeachingC
const cTeacher: Subjects.Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  experienceTeachingC: 10
};

// ✅ Create subject instances
export const cpp = new Subjects.Cpp();
export const java = new Subjects.Java();
export const react = new Subjects.React();

// ✅ Assign teacher to each subject
cpp.setTeacher(cTeacher);
java.setTeacher(cTeacher);
react.setTeacher(cTeacher);

// ✅ Cpp Output
console.log('C++');
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

// ✅ Java Output
console.log('Java');
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

// ✅ React Output
console.log('React');
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
