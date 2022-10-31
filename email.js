class Email {
    constructor(email) {
        this._email = email
    }

    get(){
        return this._email
    }

    isValid(){
        var regex = /^(([^À-ü<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return new Boolean(regex.test(String(this._email).toLowerCase()));
    }

}

var email = new Email('rgbernardi@gmail.com')

console.log('O email: ' + email.get() + ' é válido = ' + email.isValid())
