// Interface from Task 1
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
}

// ✅ New Interface for Task 2
interface Directors extends Teacher {
  numberOfReports: number;
}

// ✅ Test Object
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

// ✅ Function interface
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// ✅ Function definition
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// ✅ Test the function
console.log(printTeacher("John", "Doe")); // Output: J. Doe

// ✅ Interface describing constructor
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

// ✅ Interface describing the class methods
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// ✅ Class implementing the interface
class StudentClass implements StudentClassInterface {
  constructor(private firstName: string, private lastName: string) {}

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// ✅ Usage
const student = new StudentClass("Allen", "Muzorera");
console.log(student.displayName());      // Output: Allen
console.log(student.workOnHomework());  // Output: Currently working
