var Wok = require('worker!./worker.js');

var worker = new Wok();
var SKY = (() => {
  worker.onmessage = function({ data }) {
    var { type, data } = data;
    SKY.trigger(type, data);
  };

  var onEventMap = {};
  var sky = {
    emit: (type, data) => {
      worker.postMessage({ type, data });
      return sky;
    },

    on: (type, handle) => {
      if (!onEventMap[type]) {
        onEventMap[type] = [];
      }
      onEventMap[type].push(handle);
      return sky;
    },

    trigger: (type, ...data) => {
      var fns = onEventMap[type];
      if (fns && fns.length) {
        for (let i = 0, fn; fn = fns[i++];) {
          fn.apply(this, data);
        }
      }
      return sky;
    },

    off: (type, fn) => {
      var fns = onEventMap[type];
      if (fns) {
        if (!fn) {
          fns && (fns.length = 0);
        } else {
          for (let len = fns.length - 1; len >= 0; len--) {
            let _fn = fns[len];
            if (_fn === fn) {
              fns.splice(len, 1);
            }
          }
        }
      }
      return sky;
    }
  };
  return sky;
})();
export default SKY;
