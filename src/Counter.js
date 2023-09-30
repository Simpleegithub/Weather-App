import React from "react";

class Counter extends React.Component{
  constructor(props){
   super(props);

   this.state={count:0};
   this.handledecrement=this.handledecrement.bind(this);
   this.handleincrement=this.handleincrement.bind(this);
  }


  handledecrement(){
  this.setState((current)=>{
    return {count: current.count-1}
  })

 
  }

  handleincrement(){
    this.setState((current)=>{
      return {count: current.count+1}
    })
   }


  render(){
    const date=new Date('June 21 2027');
    date.setDate(date.getDate()+this.state.count);
    return <div>
      <button onClick={this.handledecrement}>--</button>
      <span>{date.toDateString()}{this.state.count}</span>
      <button onClick={this.handleincrement}>++</button>
    </div>
  }
}



export default Counter;