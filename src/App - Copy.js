import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
let born = false;
class App extends Component{
constructor(){
super();
this.state ={
	count:0,
	condition:true,
	vehicle_year:[],
	
	project_list:[],
    total_count:0,
    product_display_per_page:9,
    since_id:0,
    scrolling_img:false,
    currect_page_number:0,
    site:2
}
}

onHandle = () =>{
	
	console.log("before the set state:"+this.state.count);
        this.setState(() => {
            return {
                count: 1
            }
        });
	console.log("After the set state:"+this.state.count);
}	

 componentDidMount(){
           let setResp = this;
            axios.get(`https://motto.dev001.fatweb.co.nz/webservice/common/vehicle_models/year`)
               .then(res => {
                    if(res.status == 200){
                      //var userData = {'collections':res.data};  
                      setResp.setState({ vehicle_year: res.data}); 
                   }else{
                        setResp.setState({ vehicle_year:[]}); 
                   }     
                  }
              );
			 
  // let setResp = this;
 //  setResp.setState({scrolling_img: true});
   let since_id = 0;
   let URL = `https://moto1nz.myshopify.com/admin/api/2020-01/products.json?collection_id=137481486403&limit=`+this.state.product_display_per_page+'&since_id='+this.state.since_id;
        const tok = '5e7e6f219d5ace5d18163c7cd78e5673:866bd0b5e61d8bd63995a822f6919dcc';
		const hash = new Buffer(tok).toString('base64');
        const Basic = 'Basic ' + hash;

   axios.get(URL,{headers : { 'Authorization' : Basic }})
                   .then(res => {
                        console.log('res111111111111111111111111111111111111111111');
                        console.log(res);
                               
                         let dataResponce = [];
                                if(res.status == 200){
                               
                                res.data.products.forEach(function(item){
                                 
                                    let obj = new Object();
                                        obj.title = item.title;
                                        obj.body_html  = item.body_html;
                                        obj.image = item.image.src;
                                        obj.id = item.id;
                                        since_id = item.id;
                                  dataResponce.push(obj);
                                });
                              console.log('res.data.products');
                              console.log(res.data.products);

                              let currect_page_number =this.state.currect_page_number + 1;

                                 setResp.setState({project_list:dataResponce, scrolling_img: false, since_id:since_id,currect_page_number:currect_page_number });
                               }else{
                                    setResp.setState({ message: res.data.message,error_message_display:true});
                               }     
                              }
                          );


  }

	
render(){
	console.log("inside the render:"+this.state.count);	
  return (
    <div>
	
	
	
      <h1>React Autocomplete Demo:{this.state.count}</h1>
	  
	 {this.state.project_list.map((child, index) =>(
	 <h4 className="group inner list-group-item-heading">    
                        {child.title}</h4>
	  
	 ))}
	 
	  
    </div>
  );
}
}


function GoodNews(props){
	return <h1>Hi I am in Good News <props.doc/></h1>	
}

function BadNews(){
    return <h1>Hi I am in Bad News </h1>	
}








export default App;
