var charactor = {
    id: 1,
    name: "Alice",
    job: "wizard",
    level: 1,
    hp: 10,
    mp: 10,
    exp: 0,
}
const battle = () => {
    charactor.hp -= 2
    charactor.mp -= 2
    charactor.exp += 5
    showstatus()
}

const showstatus =() => {
document.getElementById("name").innerHTML = charactor.name;
document.getElementById("job").innerHTML = charactor.job;
document.getElementById("level").innerHTML = charactor.level;
document.getElementById("hp").innerHTML = charactor.hp;
document.getElementById("mp").innerHTML = charactor.mp;
document.getElementById("exp").innerHTML = charactor.exp;
}


console.log(charactor)
console.log(charactor.id)
showstatus()