var React = require('react');
var ReactDOM = require('react-dom');

var AppBox = React.createClass({
    handleClick: function() {
        alert('雅蠛蝶');
    },
    render: function() {
        return (
            <div>
                <h1>点下面</h1>
                <button onClick={this.handleClick}>点我，快点我</button>
            </div>
        );
    }
});

ReactDOM.render(
    <AppBox />,
    document.getElementById('app')
);
