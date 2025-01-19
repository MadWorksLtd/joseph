function calculateAge(birthDate) {  
    const today = new Date();  
    let age = today.getFullYear() - birthDate.getFullYear();  
    const monthDifference = today.getMonth() - birthDate.getMonth();  

    // Adjust age if the birthday hasn't occurred yet this year  
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {  
        age--;  
    }  

    return age;  
}  

function updateAge() {  
    const birthDate = new Date(2007, 8, 20); // Month is 0-indexed (September is 8)  
    const ageDisplay = document.getElementById('ageDisplay');  
    const age = calculateAge(birthDate);  
    ageDisplay.textContent = age;  
}  

// Call updateAge on page load  
updateAge();  