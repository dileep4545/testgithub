import React,{Component,Suspense} from 'react';

class App extends Component{
	
constructor(){
    super();
	this.state = {
		counter:1
	};
    this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
	this.forceUpdateHandler3 = this.forceUpdateHandler3.bind(this);
  };
	
  forceUpdateHandler(){
    this.forceUpdate();
  }	
   forceUpdateHandler2(){
    this.render();
	//console.log(11);
  }

   forceUpdateHandler3(){
    this.setState({counter:this.state.counter + 1});
	//console.log(11);
  }  
  
  componentDidMount(){
	  console.log('1111');

  }
   componentDidUpdate(prevProps,prevState){
	  console.log('2222');
	  console.log('prevProps',prevProps);
	  console.log('prevState',prevState);
	  
  }
  render(){
     return(
       <div>
	     {this.state.counter}
        <h4>Random Number : { Math.random() }</h4>
		<button onClick={this.forceUpdateHandler3}>ClickMe</button>
		
		
      </div>
      );
    }
}

export default (App);