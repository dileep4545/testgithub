import React,{useState,useEffect} from 'react';


const DocumentTitle =title =>{
	
	useEffect(() => {    // Update the document title using the browser API  
  document.title = title ; 
  },[title]);
	
}


export default function MyApp() {
	
const [count, setCount] = useState(0);
const [count2, setCount2] = useState(0);
console.log('11');
DocumentTitle(`You clicked ${count} times`);  
  // Similar to componentDidMount and componentDidUpdate:
  
  return (
    <div>
      <p>You clicked {count} {count2}times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}