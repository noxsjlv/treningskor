// Definišemo objekat sa vezbama i njihovim poenima
const exercises = {
    "kuperov test": 0.1,
    "negativni zgib": 5,
    "australijski zgib": 3,
    "sajlovački zgib": 1,
    "zgib": 20,
    "propadanja": 5,
    "sklekovi": 1,
    "trbusnjaci": 0.5,
    "plenk": 0.5,
    "ledjnjaci": 0.5,
    "lopatice": 0.5,
    "letenja ramena": 1,
    "cucnjevi": 0.75,
    "listovi": 0.25
};

// Funkcija za generisanje liste vežbi
function generateExerciseList() {
    const exerciseList = document.getElementById('exerciseList');
    Object.keys(exercises).forEach(exercise => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `${exercise}: <input type="number" min="0" step="1" name="${exercise}" value="0">`;
        exerciseList.appendChild(listItem);
    });
}

// Funkcija za izračunavanje skora
function calculateScore() {
    let totalScore = 0;
    Object.keys(exercises).forEach(exercise => {
        const repetitions = parseFloat(document.getElementsByName(exercise)[0].value);
        totalScore += repetitions * exercises[exercise];
    });
    const scoreOutput = document.getElementById('scoreOutput');
    scoreOutput.textContent = `Konačni skor: ${totalScore} bodova`;
}

// Event listener za dugme "Izračunaj skor"
document.getElementById('calculateScoreBtn').addEventListener('click', calculateScore);

// Pozivamo funkciju za generisanje liste vežbi pri učitavanju stranice
generateExerciseList();