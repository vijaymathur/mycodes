var Spread = React.createClass({
  render: function () {
    var h = 936, w = 2448;
    var oSstyle = {
      height : h + "px",
      width : w + "px",
      position : "absolute",
      left : "50px",
      top : "50px",
      zIndex : 0
    };
    return (
        <div className="spread" classId="spread1" style={oSstyle}>
          <Page data={this.props.data}/>
        </div>
    );
  }
});
