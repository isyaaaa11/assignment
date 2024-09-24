
function calculateBMI() {
    // Get the input values
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    // Validate inputs
    if (weight <= 0 || height <= 0) {
        alert('Please enter valid weight and height values.');
        return;
    }

    // Convert height from cm to meters
    const heightInMeters = height / 100;

    // Calculate BMI
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);

    // Display the result
    const result = document.getElementById('bmiResult');
    result.textContent = `Your BMI is ${bmi}.`;

    // Determine BMI category
    let category = '';
    if (bmi < 18.5) {
        category = 'Underweight';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        category = 'Normal weight';
    } else if (bmi >= 25 && bmi <= 29.9) {
        category = 'Overweight';
    } else {
        category = 'Obesity';
    }

    // Display the BMI category
    result.textContent += ` This is considered ${category}.`;
}
