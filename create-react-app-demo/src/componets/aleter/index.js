import React  from 'react';

export default class Aleter extends React.Component{
    constructor(props){
        super(props);
        console.log(this.props.isOn);
        this.state = {
            isToggleOn: this.props.isOn? this.props.isOn: false
        };
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