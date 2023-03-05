// Function for demonstrating changes
// (suppose we want to fetch something on input change and want throttle this function)
var getUserData = function (event) {
    var value = event.target.value;
    console.log('Fetching user by name...', value);
};
// Throttled function
var throttled = function (func, timeToThrottle) {
    var isThrottling = false;
    var timer;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (isThrottling) {
            return;
        }
        clearTimeout(timer);
        func.apply(void 0, args);
        isThrottling = true;
        timer = setTimeout(function () {
            isThrottling = false;
        }, timeToThrottle);
    };
};
window.addEventListener('DOMContentLoaded', function () {
    var input = document.getElementById('throttled-input');
    var throttledGetUserData = throttled(getUserData, 500);
    input.addEventListener('keypress', throttledGetUserData);
});
