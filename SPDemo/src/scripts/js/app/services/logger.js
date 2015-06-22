var logger = (function () {
    var loggerModule = function (p_moduleName) {

        function log(p_msg) {
            console.group(p_moduleName);
            console.log(msg);
        };

        return {
            Log: log
        }
    };

    return loggerModule;
})();

define(logger)
