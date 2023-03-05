// Function for demonstrating changes
// (suppose we want to fetch something on input change)
var getData = function (event) {
    var value = event.target.value;
    console.log('Fetching data...', value);
};
// Debounced function
var debounced = function (func, msDelay) {
    var timer;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(function () {
            func.apply(void 0, args);
        }, msDelay);
    };
};
window.addEventListener('DOMContentLoaded', function () {
    var input = document.getElementById('debounced-input');
    var debouncedData = debounced(getData, 500);
    input.addEventListener('keyup', debouncedData);
});
