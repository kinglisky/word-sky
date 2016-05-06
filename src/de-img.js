var can = document.createElement('canvas');
var ctx = can.getContext('2d');
export default {
  run: (url, callback) => {
    var img = new Image();
    img.onload = () => {
      can.width = img.width;
      can.height = img.height;
      ctx.drawImage(img, 0, 0, img.width, img.height);
      var src = can.toDataURL();
      callback(src);
    };

    img.src = url;
  },

  toSrc: (canvas, callback) => {
  	callback(canvas.toDataURL());
  }
}
