import React  from 'react';

export default class Aleter extends React.Component{
    constructor(props){
        super(props);
        console.log(this.props.isOn);
        this.state = {
            isToggleOn: this.props.isOn? this.props.isOn: false
        };
    }
    componentWillMount() {
        alert("componentWillMount");
    }

    componentDidMount() {
        alert("componentDidMount");
    }

    componentWillReceiveProps(nextProps) {
        alert("componentWillReceiveProps");
    }

    shouldComponentUpdate() {
        alert("shouldComponentUpdate");
        return true;        // 记得要返回true
    }

    componentWillUpdate() {
        alert("componentWillUpdate");
    }

    componentDidUpdate() {
        alert("componentDidUpdate");
    }

    componentWillUnmount() {
        alert("componentWillUnmount");
    }
    handleClick() {
        // this.setState(prevState => ({
        //   isToggleOn: !prevState.isToggleOn
        // }));
         this.setState({
             isToggleOn: !this.state.isToggleOn
         }, ()=>{
             /**
              * 异步代码code here
              */
              console.log("状态已改变", this.state.isToggleOn);
         });
      }

    render() {
        return (
          <button onClick={this.handleClick.bind(this)}>
            {this.state.isToggleOn ? 'ON' : 'OFF'}
          </button>
        );
      }


}