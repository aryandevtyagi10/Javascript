// Game data
const locations = [
    "Manor", "Mansion", "Hotel", "Train", "Cruise Ship", "Museum", "University", "Theater"
];

const firstNames = [
    "James", "Victoria", "Charles", "Eleanor", "Henry", "Margaret", "Richard", "Catherine"
];

const lastNames = [
    "Blackwood", "Worthington", "Ashworth", "Montgomery", "Fairfax", "Sinclair", "Kensington", "Harrington"
];

const motives = [
    "inheritance", "revenge", "jealousy", "blackmail", "a secret affair", "a business deal gone wrong", 
    "a disputed will", "a stolen invention", "political ambitions", "a family feud"
];

const weapons = [
    "candlestick", "knife", "revolver", "rope", "lead pipe", "wrench", "poison", "scarf"
];

const clueTypes = [
    "fingerprints", "a threatening note", "witness testimony", "a torn piece of clothing",
    "a suspicious alibi", "financial records", "a hidden letter", "a broken item"
];

// Game state
let gameState = {
    victim: null,
    murderer: null,
    suspects: [],
    clues: [],
    location: "",
    weapon: "",
    solved: false
};

// DOM elements
const locationEl = document.getElementById('location');
const victimInfoEl = document.getElementById('victim-info');
const caseSummaryEl = document.getElementById('case-summary');
const cluesContainerEl = document.getElementById('clues-container');
const suspectsContainerEl = document.getElementById('suspects-container');
const accuseBtn = document.getElementById('accuse-btn');
const accusationModal = document.getElementById('accusation-modal');
const accusationOptions = document.getElementById('accusation-options');
const submitAccusation = document.getElementById('submit-accusation');
const resultEl = document.getElementById('result');
const newGameBtn = document.getElementById('new-game');

// Initialize game
function initGame() {
    gameState = {
        victim: null,
        murderer: null,
        suspects: [],
        clues: [],
        location: "",
        weapon: "",
        solved: false
    };
    
    // Clear UI
    cluesContainerEl.innerHTML = '';
    suspectsContainerEl.innerHTML = '';
    resultEl.innerHTML = '';
    accusationModal.style.display = 'none';
    newGameBtn.style.display = 'none';
    
    // Generate new mystery
    generateMystery();
    renderGame();
}

// Generate random mystery
function generateMystery() {
    // Set location
    gameState.location = locations[Math.floor(Math.random() * locations.length)];
    locationEl.textContent = gameState.location;
    
    // Set weapon
    gameState.weapon = weapons[Math.floor(Math.random() * weapons.length)];
    
    // Create victim
    gameState.victim = {
        firstName: firstNames[Math.floor(Math.random() * firstNames.length)],
        lastName: lastNames[Math.floor(Math.random() * lastNames.length)],
        occupation: "wealthy socialite"
    };
    
    // Create 5 suspects (including the murderer)
    const suspectCount = 5;
    for (let i = 0; i < suspectCount; i++) {
        const isMurderer = i === 0; // First suspect is the murderer
        
        const suspect = {
            firstName: firstNames[Math.floor(Math.random() * firstNames.length)],
            lastName: lastNames[Math.floor(Math.random() * lastNames.length)],
            occupation: ["butler", "doctor", "artist", "businessman", "journalist", "governess"][Math.floor(Math.random() * 6)],
            motive: isMurderer ? motives[Math.floor(Math.random() * motives.length)] : "",
            isMurderer: isMurderer
        };
        
        gameState.suspects.push(suspect);
        
        if (isMurderer) {
            gameState.murderer = suspect;
        }
    }
    
    // Shuffle suspects so murderer isn't always first
    gameState.suspects = shuffleArray(gameState.suspects);
    
    // Generate 3-5 clues (some pointing to murderer, some red herrings)
    const clueCount = 3 + Math.floor(Math.random() * 3);
    const murdererClueCount = 1 + Math.floor(Math.random() * 2);
    
    for (let i = 0; i < clueCount; i++) {
        const isMurdererClue = i < murdererClueCount;
        const suspect = isMurdererClue ? gameState.murderer : 
            gameState.suspects[Math.floor(Math.random() * gameState.suspects.length)];
        
        const clue = {
            type: clueTypes[Math.floor(Math.random() * clueTypes.length)],
            suspect: suspect,
            isMurdererClue: isMurdererClue,
            description: ""
        };
        
        // Generate clue description based on type
        if (clue.type.includes("note")) {
            clue.description = `Found ${clue.type}: "${suspect.firstName}, I know about ${isMurdererClue ? gameState.murderer.motive : motives[Math.floor(Math.random() * motives.length)]}. Meet me at midnight."`;
        } else if (clue.type.includes("witness")) {
            clue.description = `Witness reports seeing ${suspect.firstName} ${suspect.lastName} near the scene around the time of the murder`;
        } else if (clue.type.includes("financial")) {
            clue.description = `${clue.type} show ${suspect.firstName} ${suspect.lastName} ${isMurdererClue ? "stood to gain from the victim's death" : "had recent financial troubles"}`;
        } else {
            clue.description = `Found ${clue.type} linking ${suspect.firstName} ${suspect.lastName} to the crime scene`;
        }
        
        gameState.clues.push(clue);
    }
    
    // Shuffle clues
    gameState.clues = shuffleArray(gameState.clues);
}

// Helper function to shuffle array
function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

// Render game UI
function renderGame() {
    // Victim info
    victimInfoEl.innerHTML = `
        <h2>Victim: ${gameState.victim.firstName} ${gameState.victim.lastName}</h2>
        <p>${gameState.victim.occupation}, found dead in the ${gameState.location.toLowerCase()} with signs of foul play.</p>
    `;
    
    // Case summary
    caseSummaryEl.innerHTML = `
        <h3>Case Summary</h3>
        <p>Time of death: between 10 PM and midnight</p>
        <p>Weapon: ${gameState.weapon}</p>
        <p>Location: ${gameState.location}</p>
    `;
    
    // Clues
    cluesContainerEl.innerHTML = '<h3>Clues</h3>';
    gameState.clues.forEach(clue => {
        const clueEl = document.createElement('div');
        clueEl.className = 'clue';
        clueEl.innerHTML = clue.description;
        cluesContainerEl.appendChild(clueEl);
    });
    
    // Suspects
    suspectsContainerEl.innerHTML = '<h3>Suspects</h3>';
    gameState.suspects.forEach(suspect => {
        const suspectEl = document.createElement('div');
        suspectEl.className = 'suspect';
        suspectEl.innerHTML = `
            <h4>${suspect.firstName} ${suspect.lastName}</h4>
            <p>Occupation: ${suspect.occupation}</p>
            ${suspect.motive ? `<p>Possible motive: ${suspect.motive}</p>` : ''}
        `;
        suspectEl.dataset.suspectId = gameState.suspects.indexOf(suspect);
        suspectsContainerEl.appendChild(suspectEl);
    });
}

// Event listeners
accuseBtn.addEventListener('click', () => {
    accusationModal.style.display = 'block';
    accusationOptions.innerHTML = '';
    
    gameState.suspects.forEach((suspect, index) => {
        const option = document.createElement('div');
        option.className = 'suspect';
        option.innerHTML = `
            <h4>${suspect.firstName} ${suspect.lastName}</h4>
            <p>Occupation: ${suspect.occupation}</p>
            ${suspect.motive ? `<p>Possible motive: ${suspect.motive}</p>` : ''}
        `;
        option.addEventListener('click', () => makeAccusation(index));
        accusationOptions.appendChild(option);
    });
});

function makeAccusation(suspectIndex) {
    const accused = gameState.suspects[suspectIndex];
    const isCorrect = accused.isMurderer;
    
    accusationModal.style.display = 'none';
    
    if (isCorrect) {
        resultEl.innerHTML = `
            <div class="correct">
                <h3>Case Solved!</h3>
                <p>You correctly identified ${accused.firstName} ${accused.lastName} as the murderer!</p>
                <p>Their motive was ${accused.motive}.</p>
            </div>
        `;
    } else {
        resultEl.innerHTML = `
            <div class="incorrect">
                <h3>Wrong Accusation!</h3>
                <p>${accused.firstName} ${accused.lastName} was not the murderer.</p>
                <p>Keep investigating!</p>
            </div>
        `;
    }
    
    gameState.solved = isCorrect;
    if (isCorrect) {
        newGameBtn.style.display = 'block';
    }
}

newGameBtn.addEventListener('click', initGame);

// Start the game
initGame();
