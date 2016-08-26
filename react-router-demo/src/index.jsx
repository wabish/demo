var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Link = ReactRouter.Link;
var hashHistory = ReactRouter.hashHistory;

// 应用入口
var App = React.createClass({
  render: function() {
    return (
      <div className="app">
        <nav>
          <Link to="movies">电影</Link>
          <Link to="books">书籍</Link>
        </nav>
        <section>
          {this.props.children}
        </section>
      </div>
    );
  }
});

var Movies = function(location, callback) {
  require.ensure([], function(require) {
    callback(null, require('./movies.jsx'));
  }, 'movies');
};

var Movie = function(location, callback) {
  require.ensure([], function(require) {
    callback(null, require('./movie.jsx'));
  }, 'movie');
};

var Books = function(location, callback) {
  require.ensure([], function(require) {
    callback(null, require('./books.jsx'));
  }, 'books');
};

var Book = function(location, callback) {
  require.ensure([], function(require) {
    callback(null, require('./book.jsx'));
  }, 'book');
};

ReactDOM.render((
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <Route path="movies" getComponent={Movies} />
        <Route path="/movie/:id" getComponent={Movie} />
        <Route path="books" getComponent={Books} />
        <Route path="/book/:id" getComponent={Book} />
      </Route>
    </Router>
  ),
  document.getElementById('main')
);
