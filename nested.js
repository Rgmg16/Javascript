// nested object
const student= {
    name: 'Morgan',
    age: 12,
    marks: {
        Science: 80,
        math: 85
    }
};

console.log(student);

// accessing property of student object using dot notation
console.log(student.marks);
console.log(student.marks.math);

//accessing property of student object using bracket notation
console.log(student["name"]);