// form and studentListDiv parameters to access the form and list
const form = document.getElementById("studentForm");
const studentListDiv = document.getElementById("studentList");

// by default to load list if present
window.onload = function () {
    displayStudents();
};

// validation for contact
document.getElementById("contact").addEventListener("input", function () {
    this.value = this.value.replace(/[^0-9]/g, "").slice(0, 10);
});

// final submit 
form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const studentId = document.getElementById("studentId").value.trim();
    const email = document.getElementById("email").value.trim();
    const contact = document.getElementById("contact").value.trim();

    // Name validation (only letters)
    if (!/^[A-Za-z ]+$/.test(name)) {
        alert("Student Name should contain only letters");
        return;
    }

    // Student ID validation (only numbers)
    if (!/^[0-9]+$/.test(studentId)) {
        alert("Student ID should contain only numbers");
        return;
    }

    // Email validation
    if (!/^\S+@\S+\.\S+$/.test(email)) {
        alert("Enter a valid email address");
        return;
    }

    // Contact validation (min 10 digits)
    if (!/^[0-9]{10,}$/.test(contact)) {
        alert("Contact number must be at least 10 digits");
        return;
    }

    // Take the values from the form and push it to registered table list
    const student = { name, studentId, email, contact };

    let students = JSON.parse(localStorage.getItem("students")) || [];

    if (editIndex !== null) {
        students[editIndex] = student;
        editIndex = null;
        document.getElementById("submitBtn").innerText = "Register Student";
    } else {
        students.push(student);
    }

    localStorage.setItem("students", JSON.stringify(students));

    displayStudents();
    form.reset();
});

// Function to display students in table
function displayStudents() {
    let students = JSON.parse(localStorage.getItem("students")) || [];
    const outputBox = document.getElementById("outputBox");

    studentListDiv.innerHTML = "";

    // Student will be visible only if count greater than 0
    if (students.length > 0) {
        outputBox.style.display = "block";

        students.forEach((s, index) => {
            studentListDiv.innerHTML += `
                <tr>
                    <td>${s.name}</td>
                    <td>${s.studentId}</td>
                    <td>${s.email}</td>
                    <td>${s.contact}</td>
                    <td>
    <div class="action-buttons">
        <button class="edit-btn" onclick="editStudent(${index})">Edit</button>
        <button class="delete-btn" onclick="deleteStudent(${index})">Delete</button>
    </div>
</td>
                </tr>
            `;
        });

    } else {
        outputBox.style.display = "none";
    }
}

// Function To delete the student
function deleteStudent(index) {
    let students = JSON.parse(localStorage.getItem("students")) || [];

    students.splice(index, 1);

    localStorage.setItem("students", JSON.stringify(students));

    // reset edit mode if needed
    editIndex = null;
    document.getElementById("submitBtn").innerText = "Register Student";

    displayStudents();
}

// Function to edit the student
let editIndex = null;
function editStudent(index) {
    let students = JSON.parse(localStorage.getItem("students")) || [];
    const s = students[index];

    document.getElementById("name").value = s.name;
    document.getElementById("studentId").value = s.studentId;
    document.getElementById("email").value = s.email;
    document.getElementById("contact").value = s.contact;

    editIndex = index;

    // Change button text whie edit is selected
    document.getElementById("submitBtn").innerText = "Update Student";
}

