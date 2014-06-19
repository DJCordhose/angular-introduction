"use strict";

function HelloController() {
    this.greeting = {
        text: 'Hello'
    };
}

HelloController.prototype.func = function() {
    this.greeting.text = "Soso";
};
