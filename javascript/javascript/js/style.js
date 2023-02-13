var messageElement = document.getElementById("message")
const add = () => {
    console.log("Add!")
    messageElement.classList.add("active")
}

const remove = () => {
    console.log("Remove!")
    messageElement.classList.remove("active")
}

const toggle = () => {
    console.log("Toggle!")
    messageElement.classList.toggle("active")

}

const replace = () => {
    console.log("Replace!")
    messageElement.classList.replace("message","frame")
}

function over(element){
    console.log(element)
    element.classList.add("fadein")
}

function out(element){
    console.log(element)
    element.classList.remove("fadein")
}