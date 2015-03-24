/*
* v0.1.0 by @mathias
* forked by khalidsalomao
* also combined with http://stackoverflow.com/questions/5917344/jquery-value-change-event-delay 
*/


jQuery.fn.input = function(fn) {
	var _this = this;   
    if (fn) {
        return _this.bind("input propertychange", function (event) {
            // if it's the propertychange event, make sure it's the value that changed.
            if (window.event && event.type === "propertychange" && event.propertyName !== "value") {
                return;
            }

            // clear any previously set timer before setting a fresh one
            window.clearTimeout(_this.data("timeout"));
            _this.data("timeout", setTimeout(function () {
                fn.call(this, event);
            }, 350));
        });
    }
	return _this.trigger('keydown.input');
};
