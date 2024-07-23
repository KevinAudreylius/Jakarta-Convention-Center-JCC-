document.getElementById('contact-form').addEventListener('submit', (event) => {
    event.preventDefault()

    const username = document.getElementById('name').value
    const useremail = document.getElementById('email').value
    const numberphone = document.getElementById('phone').value
    const msg = document.getElementById('message').value
    const choosephone = document.getElementById('choose1').checked
    const chooseemail = document.getElementById('choose2').checked
    
    if(username.length < 5 || username.length > 15){
        alert('Username length must be beetwen 5 - 15 characters')
        return
    }
    
    if(choosephone == false && chooseemail == false){
        alert('Prefered contact must be filled')
        return
    }

    if(useremail.endsWith('gmail.com') === false){
        alert('Email must ends with @gmail.com')
        return
    }
    let digit_count = 0
    for(let i = 0; i < numberphone.length; i++){
        if(isNaN(numberphone[i])){
            digit_count++
        }
    }

    if(numberphone.length < 12 || numberphone.length > 12){
        alert('phone number must be 12 digits');
        return
    }
    if(numberphone[0] != '0' || numberphone[1] != '8'){
        alert("phone number must be start with '08'")
        return
    }
    
    
    if(digit_count != 0){
        alert('phone number must be numeric')
        return
    }

    if(msg === ""){
        alert('please fill your message')
        return
    }

    alert('Message Sent Successfuly!')
    window.location.href = '/home.html'

})