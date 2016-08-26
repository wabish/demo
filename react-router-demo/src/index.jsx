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

// 电影
var Movie = React.createClass({
  render: function() {
    return (
      <article>
        <h1>电影的 id 为：{this.props.params.id}</h1>
      </article>
    );
  }
});

// 图书列表
var Books = React.createClass({
  render: function() {
    return (
      <ul>
        <li><Link to="/book/1">《活着》</Link></li>
        <li><Link to="/book/2">《盗墓笔记》</Link></li>
        <li><Link to="/book/3">《挪威的森林》</Link></li>
      </ul>
    );
  }
});

// 图书
var Book = React.createClass({
  render: function() {
    return (
      <article>
        <h1>图书的 id 为：{this.props.params.id}</h1>
      </article>
    );
  }
});

ReactDOM.render((
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <Route path="movies" component={Movies} />
        <Route path="/movie/:id" component={Movie} />
        <Route path="books" component={Books} />
        <Route path="/book/:id" component={Book} />
      </Route>
    </Router>
  ),
  document.getElementById('main')
);
