class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.tardies = 0;
  }

  //   Instance method
  fullName() {
    return `Your ful name is ${this.firstName} ${this.lastName}`;
  }

  makeLate() {
    this.tardies += 1;

    if (this.tardies >= 3) {
      return "YOU ARE EXPELLED!!!";
    }
    return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`;
  }

  static enrollStudents([...students]) {
    // Send emails
    return "Sent emails to students";
  }
}

// Instantiate new student object
let firstStudent = new Student("John", "Mwendwa");
let secondStudent = new Student("Colt", "Steele");

console.log(firstStudent.makeLate());
console.log(firstStudent.makeLate());
console.log(firstStudent.makeLate());
console.log(Student.enrollStudents([firstStudent, secondStudent]));
