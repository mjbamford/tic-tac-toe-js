(function () {
    function login(password) {
        return password === 'Password!'
    }

    function attemptLoginFactory(maxAttempts = 3) {
        let attempts = 0;
        return function (password) {
            if (++attempts <= maxAttempts) {
                return login(password);
            } else {
                throw `You failed after ${maxAttempts} attempts!`;
            }
        }
    }

    var password = 'password!';
    var threeAttemptedLogin = attemptLoginFactory();
    var attemptedLogin = attemptLoginFactory(1);
})();