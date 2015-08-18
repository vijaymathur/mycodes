var Canvas = React.createClass({
  render: function () {
    var h = 1036, w = 2548;
    var oCstyle = {
        height : h + "px",
        width : w + "px",
        position : "absolute",
        left : "100px",
        top : "100px",
        zIndex : 0
    };
    return (
      <div className="canva" classId="canva1" style={oCstyle}>
        <Spread data={this.props.data}/>
      </div>
    );
  }
});
