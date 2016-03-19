var BaseEvent = require('./base-event.js');

module.exports = BaseEvent(keyLambda);


function keyLambda(ev, broadcast) {
    var key = this.opts.key;

    if (ev.keyCode !== key) return;

    if (this.opts.alt !== void(0) && this.opts.alt !== ev.altKey) return;
    if (this.opts.ctrl !== void(0) && this.opts.ctrl !== ev.ctrlKey) return;
    if (this.opts.meta !== void(0) && this.opts.meta !== ev.metaKey) return;
    if (this.opts.shift !== void(0) && this.opts.shift !== ev.shiftKey) return;

    if (this.opts.preventDefault && ev.preventDefault) {
        ev.preventDefault();
    }

    broadcast(this.data);

}
