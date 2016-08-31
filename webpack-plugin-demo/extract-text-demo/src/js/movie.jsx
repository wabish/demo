require('../css/movie.css');
var React = require('react');

// 电影
var Movie = React.createClass({
  render: function() {
    return (
      <article className="movieStyle">
        <h1>电影的 id 为：{this.props.params.id}</h1>
      </article>
    );
  }
});

module.exports = Movie;