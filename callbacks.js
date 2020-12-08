(function () {
    function sleep(callback) {
        setTimeout(callback, 1000);
    }

    var message = function() {
        console.log('Slept! Awake now')
    }

    sleep(message);
    // (...args) => { }
    sleep(() => { console.log('Finished too!')});
})();