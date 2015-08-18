/**
 * Created by CS16 on 11-08-2015.
 */
var json = {
  "Name": "Untitled-3.indd",
  "Spreads": [
    {
      "Index": "0",
      "Pages": [
        {
          "Frames": [
            {
              "LeftBottom": "(306.5,755.5)",
              "RightBottom": "(575.5,755.5)",
              "RightTop": "(575.5,214.5)",
              "TopLeft": "(306.5,214.5)"
            },
            {
              "LeftBottom": "(36.5,213.5)",
              "RightBottom": "(305.5,213.5)",
              "RightTop": "(305.5,36.5)",
              "TopLeft": "(36.5,36.5)"
            }
          ],
          "Index": "0",
          "PageC": [
            {
              "LeftBottom": "(0,792)",
              "RightBottom": "(612,792)",
              "RightTop": "(612,0)",
              "TopLeft": "(0,0)"
            }
          ]
        }
      ]
    }
  ]
};

var getLength = function (x1, y1, x2, y2) {
  var a, b;
  a = x2.val - x1.val;
  a *= a;
  b = y2.val - y1.val;
  b *= b;
  return (Math.sqrt(a + b));
};

var renderPages = function (obj) {
  var TLX = {"val": 0}, TLY = {"val": 0}, TRX = {"val": 0}, TRY = {"val": 0}, BLX = {"val": 0}, BLY = {"val": 0}, BRX = {"val": 0}, BRY = {"val": 0};
  getCoordinatesFromArray(TLX, TLY, TRX, TRY, BLX, BLY, BRX, BRY, obj);
  var height = getLength(TLX, TLY, BLX, BLY);
  var width = getLength(TLX, TLY, TRX, TRY);
  var page = document.createElement('div');
  $('body').append(page);
  page.style.height = height + "px";
  page.style.width = width + "px";
  page.className = 'page';
  page.id = 'page1';
  page.style.position = "absolute";
  page.style.left = 0;
  page.style.top = 0;
  page.style.zIndex = 0;
  var mHeight = height - 72;
  var mWidth = width - 72;
  var mpage = document.createElement('div');
  mpage.style.height = mHeight + "px";
  mpage.style.width = mWidth + "px";
  mpage.className = 'innerpage';
  mpage.id = 'inpage';
  mpage.style.position = "absolute";
  mpage.style.top = "36px";
  mpage.style.left = "36px";
  $('#page1').append(mpage);
};

var renderFrames = function (obj) {

  for (var i = 0; i < obj.length; i++) {
    var TLX = {"val": 0}, TLY = {"val": 0}, TRX = {"val": 0}, TRY = {"val": 0}, BLX = {"val": 0}, BLY = {"val": 0}, BRX = {"val": 0}, BRY = {"val": 0};
    getCoordinatesFromArray(TLX, TLY, TRX, TRY, BLX, BLY, BRX, BRY, obj[i]);
    var height = getLength(TLX, TLY, BLX, BLY);
    var width = getLength(TLX, TLY, TRX, TRY);
    var frame = document.createElement('div');
    $('#page1').append(frame);
    frame.style.height = height + "px";
    frame.style.width = width + "px";
    frame.className = 'frame';
    frame.id = 'frame' + i;
    frame.style.position = "absolute";
    frame.style.left = TLX.val + "px";
    frame.style.top = TLY.val + "px";
    frame.style.zIndex = 1;
  }

};

var render = function (obj) {
  renderPages(obj.Spreads[0].Pages[0].PageC[0]);
  renderFrames(obj.Spreads[0].Pages[0].Frames);
};

var getSeperateValuesFromArray = function (x, y, arr) {
  x.val = arr[0];
  y.val = arr[1];
};

var getCoordinatesFromArray = function (TLX, TLY, TRX, TRY, BLX, BLY, BRX, BRY, obj) {

   var aTL, aTR, aBL, aBR;

  aTL = obj.TopLeft.replace(/[{()}]/g, '');
  aTR = obj.RightTop.replace(/[{()}]/g, '');
  aBL = obj.LeftBottom.replace(/[{()}]/g, '');
  aBR = obj.RightBottom.replace(/[{()}]/g, '');

  aTL = aTL.split(",");
  aTR = aTR.split(",");
  aBL = aBL.split(",");
  aBR = aBR.split(",");

  getSeperateValuesFromArray(TLX, TLY, aTL);
  getSeperateValuesFromArray(TRX, TRY, aTR);
  getSeperateValuesFromArray(BLX, BLY, aBL);
  getSeperateValuesFromArray(BRX, BRY, aBR);

};



$(document).ready(function () {
  render(json);
});
