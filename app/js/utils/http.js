(function (utils) {
    "use strict";

    function _ajax(options) {
        var xhr = new XMLHttpRequest();
        xhr.open(options.method,options.url);
        if(!options.contentType){
            xhr.setRequestHeader("Content-type","application/json");
        }

        xhr.onreadystatechange = function () {
            if(this.readyState === 4){
                if(this.status >= Http.STATUS.OK && this.status <= 499) {
                    // success callback
                }

                if(this.status >= Http.STATUS.BAD_REQUEST && this.status <= 599){
                    // error callback

                }
            }
        };
        if(options.data){
            // POST,PUT request with data payload
            xhr.send(options.data);
        }else{
            // GET , DELETE request
            xhr.send();
        }
    }

    function Http() {

    }

    Http.prototype.METHOD = {"GET":"GET", "POST":"POST"};
    Http.prototype.STATUS = {"OK":200, "CREATED":201,"BAD_REQUEST":400,"SERVER_ERROR":500};

    Http.prototype.get = function (options) {
        options.method = Http.METHOD.GET;
        _ajax(options);
    };

    Http.prototype.post = function (options) {
        options.method = Http.METHOD.POST;
        options.data = JSON.stringify(options.data);
        _ajax(options);
    };

    utils.http = new Http();
})(app.utils);