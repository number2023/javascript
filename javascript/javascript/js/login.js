function login(){
    console.log("Login!!")
    var emailElements = document.getElementsByName("email")
    var passwordElements = document.getElementsByName("password")
    
    // console.log(emailElements[0])
    // console.log(passwordElements[0])
    
    var email = emailElements[0].value
    var password = passwordElements[0].value

    console.log(email,password)

    var error_email = ""
    var error_password = ""

    if(!email) error_email = "Emailを入力してください"
    if(!password) error_password = "パスワードを入力してください"
    
    document.getElementById("message_email").innerHTML = error_email
    document.getElementById("message_password").innerHTML = error_password

    return !(error_email||error_password)
}