const courseData = {
    "CS101": 3,
    "MA101": 4,
    "PH101": 4,
    "HS101": 3,
    "OS101":4,
    "DB101": 5,
    // Add more courses and their credit values here
};

function generateCourseFields() {
    const numCourses = document.getElementById('num-courses').value;
    const coursesContainer = document.getElementById('courses-container');
    coursesContainer.innerHTML = '';

    for (let i = 0; i < numCourses; i++) {
        const courseDiv = document.createElement('div');
        courseDiv.classList.add('course');

        const courseLabel = document.createElement('label');
        courseLabel.textContent = `Course ${i + 1} Code:`;
        courseDiv.appendChild(courseLabel);

        
        
        const courseInput = document.createElement('input');
        courseInput.type = 'text';
        courseInput.name = `course${i + 1}`;
        courseInput.required = true;
        courseDiv.appendChild(courseInput);

        const gradeLabel = document.createElement('label');
        gradeLabel.textContent = `Course ${i + 1} Grade:`;
        courseDiv.appendChild(gradeLabel);

        const gradeInput = document.createElement('input');
        gradeInput.type = 'number';
        gradeInput.name = `grade${i + 1}`;
        gradeInput.min = '0';
        gradeInput.max = '10';
        gradeInput.step = '0.1';
        gradeInput.required = true;
        courseDiv.appendChild(gradeInput);

        coursesContainer.appendChild(courseDiv);
    }

    document.getElementById('grades-form').style.display = 'block';
}

function calculateCGPA() {
    const numCourses = document.getElementById('num-courses').value;
    let totalWeightedCredits = 0;
    let totalCredits = 0;

    for (let i = 0; i < numCourses; i++) {
        const courseCode = document.querySelector(`input[name="course${i + 1}"]`).value;
        const grade = parseFloat(document.querySelector(`input[name="grade${i + 1}"]`).value);

        if (courseData[courseCode]) {
            const credits = courseData[courseCode];
            totalWeightedCredits += credits * grade;
            totalCredits += credits;
        } else {
            alert(`Course code ${courseCode} not found in data sheet.`);
            return;
        }
    }

    const cgpa = totalWeightedCredits / totalCredits;
    document.getElementById('result').textContent = `Your CGPA is: ${cgpa.toFixed(2)}`;
}
