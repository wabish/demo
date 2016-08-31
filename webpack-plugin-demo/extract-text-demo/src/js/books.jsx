require('../css/books.css');
var React = require('react');
var ReactRouter = require('react-router');

var Link = ReactRouter.Link;

// 图书列表
var Books = React.createClass({
  render: function() {
    return (
      <ul className="bookList">
        <li><Link to="/book/1">《活着》</Link></li>
        <li><Link to="/book/2">《盗墓笔记》</Link></li>
        <li><Link to="/book/3">《挪威的森林》</Link></li>
      </ul>
    );
  }
});

module.exports = Books;