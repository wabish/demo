var React = require('react');
var ReactRouter = require('react-router');

var Link = ReactRouter.Link;

// 电影列表
var Movies = React.createClass({
  render: function() {
    return (
      <ul>
        <li><Link to="/movie/1">捉妖记</Link></li>
        <li><Link to="/movie/2">寻龙诀</Link></li>
        <li><Link to="/movie/3">微微一笑很倾城</Link></li>
      </ul>
    );
  }
});

module.exports = Movies;