require('../css/book.css');
var React = require('react');

// 图书
var Book = React.createClass({
  render: function() {
    return (
      <article className="bookStyle">
        <h1>图书的 id 为：{this.props.params.id}</h1>
      </article>
    );
  }
});

module.exports = Book;