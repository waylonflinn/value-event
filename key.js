var BaseEvent = require('./base-event.js');

module.exports = BaseEvent(keyLambda);

var base = {};
base.SHIFT = 16;
base.CONTROL = 17;
base.ALT = 18;
base.OPTION = base.ALT;
base.META = 224;
base.COMMAND = base.META;

var properties = {};
properties[base.SHIFT] = "shiftKey";
properties[base.CONTROL] = "ctrlKey";
properties[base.ALT] = "altKey";
properties[base.META] = "metaKey";


function keyLambda(ev, broadcast) {
    var key = this.opts.key,
        hasModifier = true;

    if(this.opts.modifier){
        var eventProperty = properties[this.opts.modifier];
        hasModifier = ev[eventProperty];
    }

    if (ev.keyCode === key && hasModifier) {
        broadcast(this.data);
    }
}
