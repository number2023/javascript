var users = [
    { name: 'A', score: 65 },
    { name: 'B', score: 92 },
    { name: 'C', score: 81 },
    { name: 'D', score: 71 },
    { name: 'E', score: 72 },
]

var sumElement = document.getElementById('sum')
var avgElement = document.getElementById('average')
var varElement = document.getElementById('variarance')
var sdElement = document.getElementById('sd')
var scoreBody = document.getElementById('score_body')

// sum
var sum = 0
sum = users.reduce((sum, i) => sum + i.score, 0);
sumElement.innerHTML = sum;

// average
var average = 0
average = sum / users.length;
avgElement.innerHTML = average;


// variarance
var variarance = 0
var varria = 0
variarance = users.reduce((variarance,i) => (i.score -average)**2 / users.length,0 )
varElement.innerHTML = variarance;


// Standard Deviation
var sd = 0
sd =  Math.sqrt(variarance)
sdElement.innerHTML = sd;


const makeScore = () => {
    for (const user of users) {
        scoreBody.innerHTML = user;
    }
}