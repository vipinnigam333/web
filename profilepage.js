// Simulating user data (replace with actual data retrieval logic)
const user = {
    name: "Sumit Saini",
    type: "Participent", // or "Admin"
    email: "sumit.saini@example.com",
    studentId: "******",
    Event: "Technical",
    yearOfStudy: "1st Year",
    department: "Mechanical Department",
    role: "User"
};

// Populate profile data
document.getElementById('userName').textContent = user.name;
document.getElementById('userType').textContent = user.type;
document.getElementById('userEmail').textContent = user.email;

if (user.type === "Student") {
    document.getElementById('studentId').textContent = user.studentId;
    document.getElementById('major').textContent = user.major;
    document.getElementById('yearOfStudy').textContent = user.yearOfStudy;
    document.getElementById('adminInfoGroup').style.display = 'none';
    document.getElementById('adminInfoGroup2').style.display = 'none';
} else if (user.type === "Admin") {
    document.getElementById('department').textContent = user.department;
    document.getElementById('role').textContent = user.role;
    document.getElementById('studentInfoGroup').style.display = 'none';
    document.getElementById('studentInfoGroup2').style.display = 'none';
    document.getElementById('studentInfoGroup3').style.display = 'none';
}

function editProfile() {
    // Implement edit profile functionality
    alert("Edit profile functionality to be implemented");
}
