(function (utils) {
    'use strict';

    function config(maxLen, isCvvRequired, cvvLen,isExpiryRequired) {
        return {"maxLength":maxLen,"isCvvRequired":isCvvRequired,"cvvLength":cvvLen,"isExpiryRequired":isExpiryRequired};
    }

    function CardValidator() {
        this.mestro = config(16,true,3,true);
        this.visa = config(16,true,3,true);
        this.amex = config(16,true,3,true);
        this.diner = config(16,true,3,true);
        this.masterCard = config(16,true,3,true);
        this.rupay = config(16,true,3,true);
    }

    CardValidator.prototype.validateMestro = function (card) {

    };

    CardValidator.prototype.validateVisa = function (card) {

    };

    CardValidator.prototype.validateAmex = function (card) {

    };

    CardValidator.prototype.validateDiner = function (card) {

    };

    CardValidator.prototype.validateMasterCard = function (card) {

    };

    CardValidator.prototype.validateRupay = function (card) {

    };

    utils.cardValidator = new CardValidator();
})(app.utils);