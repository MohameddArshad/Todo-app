import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css'
class Ars extends React.Component {
 render(){
   return(  
       <App/>
   )
 }
  
   
    
  
}
 

ReactDOM.render(
    <Ars />,
  document.getElementById('root')
);

