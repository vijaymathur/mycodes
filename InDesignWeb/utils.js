var oUtils = (function(){
  /*var helperMethod = function(){

  };*/
   var getSeperateValuesFromArray = function (x, y, arr) {
    x.val = arr[0];
    y.val = arr[1];
  };
  return ({

    getCoordinatesFromArray: function (TLX, TLY, TRX, TRY, BLX, BLY, BRX, BRY, obj) {

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

    },
    getLength: function (x1, y1, x2, y2) {
      var a, b;
      a = x2.val - x1.val;
      a *= a;
      b = y2.val - y1.val;
      b *= b;
      return (Math.sqrt(a + b));
    }
  });
})();