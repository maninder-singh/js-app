(function (utils) {
    'use strict';

    function _getDOMElement(selector) {
        var elms = document.querySelectorAll(selector);
        return elms;
    }

    function _elmExists(context) {
        return context.elements ? true : false;
    }

    function DOM(selector) {
        if(!(this instanceof DOM)){
            return new DOM(selector);
        }
        this.elements = _getDOMElement(selector);
    }

    DOM.prototype.addClass = function (className) {
        if(className && _elmExists(this)){
            var elms = this.elements;
            for(var i = 0 ; i < elms.length;i++){
                elms[i].classList.add(className);
            }
        }
        return this;
    };

    DOM.prototype.removeClass = function (className) {
        if(className && _elmExists(this)){
            var elms = this.elements;
            for(var i = 0 ; i < elms.length;i++){
                elms[i].className = elms[i].className.replace(className,"");
            }
        }
        return this;
    };

    utils.dom = DOM;
})(app.utils);