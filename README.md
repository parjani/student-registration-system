# Student Registration System

## Project Overview

The **Student Registration System** is a simple web-based application that allows users to register, view, edit, and delete student records. It is built using **HTML, CSS, and JavaScript**, with data persistence handled using **Local Storage**.

This project demonstrates CRUD operations (Create, Read, Update, Delete) along with responsive design and form validation.

---

## Features

1) Add new student records
2) Edit existing student details
3) Delete student records
4) Data stored in **Local Storage** (persists after refresh)
5) Input validation:

* Student ID → Only numbers
* Contact Number → Minimum 10 digits
* Email → Valid email format

6) Prevent empty form submission
7) Dynamic vertical scrollbar
8) Fully responsive design:

* Mobile (≤ 640px)
* Tablet (641px – 1024px)
* Desktop (≥ 1025px)

---

## Technologies Used

* HTML
* CSS
* JavaScript
* Local Storage (Browser API)

---

## Project Structure

```
Student-Registration-System/
│
├── index.html        # Main HTML file
├── style.css         # Styling file
├── script.js         # JavaScript logic
├── README.md         # Project documentation
```

---

## How to Run the Project

1. Download or clone the repository:

```
git clone https://github.com/your-username/student-registration-system.git
```

2. Open the project folder.

3. Double-click on:

```
index.html
```

4. The application will open in your browser 🎉

---

## Screenshots

* Registration Form
  <img width="1892" height="858" alt="image" src="https://github.com/user-attachments/assets/ab3d39de-819c-4aa9-ae4d-7efc10db92d3" />

* Student List Table & Edit/Delete Functionality
  <img width="1895" height="862" alt="image" src="https://github.com/user-attachments/assets/240b547e-b3bc-4738-bb6d-69603a38f68e" />
  <img width="1898" height="810" alt="image" src="https://github.com/user-attachments/assets/a21cc6fd-0dd4-43f7-8bb5-31fa8d97443a" />


---

## Key Functionalities Explained

### 🔹 Add Student

* Takes input from form
* Validates data
* Stores in Local Storage

### 🔹 Edit Student

* Loads selected record into form
* Updates data after submission

### 🔹 Delete Student

* Removes selected record from Local Storage

### 🔹 Data Persistence

* Uses `localStorage` so data remains after refresh

---

## Validation Rules

* Name → Only characters allowed
* No empty fields allowed
* Student ID must be numeric
* Contact number must be at least 10 digits
* Email must follow valid format

---

## Responsiveness

The UI is designed to adapt across:

* Mobile devices
* Tablets
* Desktops

---

## Future Improvements

* Add search and filter functionality
* Add pagination for large data
* Connect with backend (Node.js / Firebase)
* Add authentication system

---

## Author

**Parjani Prashant Sangvikar**

---

## GitHub Repository

https://github.com/parjani/student-registration-system

---

## Submission Notes

* Separate commits for:

  * HTML
  * CSS
  * JavaScript
  * README
* Clean and readable code structure
* Fully tested functionality

---
