var React = require('react');

var List = React.createClass({
  render: function(){
    var styles = {
      listGroup: {
        margin: '5px 0'
      },
      removeItem: {
        fontSize: 20,
        position: "absolute",
        top: 12,
        left: 6,
        cursor: "pointer",
        color: "rgb(222, 79, 79)",
        border: "none",
        background: "none",
        padding: 0
      },
      todoItem: {
        paddingLeft: 20,
        fontSize: 17
      }
    };
    var that = this;
    var listItems = this.props.items.map(function(item, index){
      return (
        <li key={index} className="list-group-item" style={styles.listGroup}>
          <button
            className="glyphicon glyphicon-remove"
            style={styles.removeItem}
            onClick={that.props.remove.bind(null, index)}
          />
          <span style={styles.todoItem}>
            {item}
          </span>
        </li>
      )
    });
    return(
      <div className="col-sm-12">
        <ul className="list-group">
          {listItems}
        </ul>
      </div>
    )
  }
});

module.exports = List;