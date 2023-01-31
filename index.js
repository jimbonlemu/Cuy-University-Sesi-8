let passwordLength = document.getElementById('passwordLength')
let password = document.getElementById('password')
let saveButton = document.getElementById('saveButton')

function generatePassword(length) {
    const lowerAlphabet = "abcdefghijklmnopqrstuvwxyz"
    const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const numeric = "0123456789"
    const symbol = "!@#$%^&*()_+-=[]{}\|:;,./<>?"
    
    const data = lowerAlphabet + upperAlphabet + lowerAlphabet + symbol

    let generator =  '';
    for (let index = 0; index < length; index++) {
        generator+= data [~~(Math.random() * data.length)]
    }

return generator
}

function getPassword() {
    if (passwordLength.value == 0) {
        alert('Panjang password tidak boleh 0!')
    }else if(passwordLength.value <= 6){
        passwordLength.value = ""
        alert('Panjag password tidak boleh kurang dari 6 karakter!')
    } 
    else {
        const newPass =  generatePassword(passwordLength.value)
        password.value = newPass
        alert('Password telah di buat!')
        
    }

}

function savePassword() {
    document.title = password.value
    saveButton.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(`Password saya : ${document.title}`))
    saveButton.setAttribute('download', 'PassGenerate.txt')
    alert('password berhasil disimpan <3')    
}