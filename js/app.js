// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables */
var synth = window.speechSynthesis;
var textToSpeak = ''; // This will hold the full sentence
var storyParts = {
    subject: '',
    verb: '',
    adjective: '',
    object: '',
    place: ''
};

// Arrays for the random word selection
var subjects = ['The turkey', 'Mom', 'Dad', 'The dog', 'My teacher', 'The elephant', 'The cat'];
var verbs = ['sat on', 'ate', 'danced with', 'saw', 'doesn\'t like', 'kissed'];
var adjectives = ['a funny', 'a scary', 'a goofy', 'a slimy', 'a barking', 'a fat'];
var objects = ['goat', 'monkey', 'fish', 'cow', 'frog', 'bug', 'worm'];
var places = ['on the moon', 'on the chair', 'in my spaghetti', 'in my soup', 'on the grass', 'in my shoes'];

/* Functions */
function speakNow(string) {
    var utterThis = new SpeechSynthesisUtterance(string);
    synth.speak(utterThis);
}

// Function to select a random word from an array
function getRandomWord(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// Update the story parts and display the sentence in the paragraph
function updateStoryPart(part, value) {
    storyParts[part] = value;
    var fullStory = `${storyParts.subject} ${storyParts.verb} ${storyParts.adjective} with ${storyParts.object} ${storyParts.place}.`;
    document.getElementById('story-output').textContent = fullStory;
    textToSpeak = fullStory;
}

/* Event Listeners */
document.getElementById('subject-btn').onclick = function() {
    updateStoryPart('subject', getRandomWord(subjects));
};

document.getElementById('verb-btn').onclick = function() {
    updateStoryPart('verb', getRandomWord(verbs));
};

document.getElementById('adjective-btn').onclick = function() {
    updateStoryPart('adjective', getRandomWord(adjectives));
};

document.getElementById('object-btn').onclick = function() {
    updateStoryPart('object', getRandomWord(objects));
};

document.getElementById('place-btn').onclick = function() {
    updateStoryPart('place', getRandomWord(places));
};

document.getElementById('speak-btn').onclick = function() {
    speakNow(textToSpeak);
};
