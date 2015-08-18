var Frame = React.createClass({
   getFramesView: function(obj){
      var aFr=[];
      for (var i = 0; i < obj.length; i++) {
        var TLX = {"val": 0}, TLY = {"val": 0}, TRX = {"val": 0}, TRY = {"val": 0}, BLX = {"val": 0}, BLY = {"val": 0}, BRX = {"val": 0}, BRY = {"val": 0};
        oUtils.getCoordinatesFromArray(TLX, TLY, TRX, TRY, BLX, BLY, BRX, BRY, obj[i]);
        var height = oUtils.getLength(TLX, TLY, BLX, BLY);
        var width = oUtils.getLength(TLX, TLY, TRX, TRY);
        var oStyle= {
          height:height + "px",
          width: width + "px",
          id : 'frame' + i,
          position : "absolute",
          left : TLX.val + "px",
          top : TLY.val + "px",
          zIndex : 1
        };
        aFr.push(<div className='frame' style={oStyle}/>);
      }
    return(aFr);
  },

  render: function () {
    var aFrames = this.getFramesView(this.props.data.Spreads[0].Pages[0].Frames);
    return (
        <div >
          {aFrames}
        </div>
    );
  }
});