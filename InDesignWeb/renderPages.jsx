var Page = React.createClass({
      render: function () {
        var TLX = {"val": 0}, TLY = {"val": 0}, TRX = {"val": 0}, TRY = {"val": 0}, BLX = {"val": 0}, BLY = {"val": 0}, BRX = {"val": 0}, BRY = {"val": 0};
        oUtils.getCoordinatesFromArray(TLX, TLY, TRX, TRY, BLX, BLY, BRX, BRY, this.props.data.Spreads[0].Pages[0].PageC[0]);
        var h = oUtils.getLength(TLX, TLY, BLX, BLY);
        var w = oUtils.getLength(TLX, TLY, TRX, TRY);
        //var h = 792, w = 612;
        var oPstyle = {
          height: h + "px",
          width: w + "px",
          position: "absolute",
          left: "1224px",
          top: "72px",
          zIndex: 0
        };
        var oMstyle = {
          height: (h - 72) + "px",
          width: (w - 72) + "px",
          position: "absolute",
          left: "36px",
          top: "36px",
          zIndex: 0
        };
        return (
            <div className="page" classId="page1" style={oPstyle}>
              <div className="innerpage" style={oMstyle}></div>
              <Frame data={this.props.data}/>
            </div>
        );

      }
    })
    ;
