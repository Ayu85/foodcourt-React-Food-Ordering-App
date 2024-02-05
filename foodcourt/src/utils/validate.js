import React from 'react'

const validate = (email, password) => {
    const passwordError = false;
    const emailError = false;
    var regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    passwordError = regularExpression.test(password)
    if (!email.endsWith("@gmail.com"))
        emailError = false;

    return [passwordError, emailError];

}

export default validate
