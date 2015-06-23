

var application = function ($,p_logger) {

    var appModule = function () {

        var logger = new p_logger("Demo");

        function init() {

            // This code runs when the DOM is ready and creates a context object which is needed to use the SharePoint object model
            $(document).ready(function () {
                logger.log("Application Start.")

                var context = SP.ClientContext.get_current();
                var user = context.get_web().get_currentUser();

                getUserName();

                // This function prepares, loads, and then executes a SharePoint query to get the current users information
                function getUserName() {
                    context.load(user);
                    context.executeQueryAsync(onGetUserNameSuccess, onGetUserNameFail);
                }

                // This function is executed if the above call is successful
                // It replaces the contents of the 'message' element with the user name
                function onGetUserNameSuccess() {
                    $('#message').text('Hello ' + user.get_title());
                }

                // This function is executed if the above call fails
                function onGetUserNameFail(sender, args) {
                    alert('Failed to get user name. Error:' + args.get_message());
                }

                logger.log("Application End.")

            });
        };

        return {
            Init: init

        };
    };
    
    return appModule;
    
};

define('app/pages/default',['jquery', 'app/services/logger'], application);
