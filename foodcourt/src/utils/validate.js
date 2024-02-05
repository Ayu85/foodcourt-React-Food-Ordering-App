import React from 'react'

const validate = (email, password) => {
    if (email === null || password === null) return
    let passwordError = null;
    let emailError = false;
    var regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    passwordError = regularExpression.test(password)
    if (!email.endsWith("@gmail.com"))
        emailError = true;

    return [emailError, !passwordError]

}

export default validate
