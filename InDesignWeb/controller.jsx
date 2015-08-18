var AppController = React.createClass({
  render: function () {
    return (
        <div >
            <Canvas data={this.props.data}/>
        </div>
    );
  }
});
