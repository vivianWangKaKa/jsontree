import React, { Component } from 'react'; 
import './search.css';
import ReactDOM from 'react-dom';
import $ from  'jquery';
import jQuery from 'jquery';
//import {detail} from './spps.js';

class SPPSSearch extends Component {    
        
      handleClick = (e) => {
  
          let that =this;
          let condvalue=ReactDOM.findDOMNode(this.refs.ChassisNo).value;
          if(condvalue.length<=0)
          {
            alert("Please input chassis number!");
          }
          else{
       // that.props.clearItems();
          $.ajax({
            url:`http://10.8.97.24:8081/smphd/menu/${condvalue}`,
            type: "get",
            async:true,
           timeout:10000,
           dataType: "json",  
           success: function(response){  
            that.props.setJsonData(response);
             /*if (jQuery.isEmptyObject(response))
             {
              alert('No SPPS found.');  
              let sppsitem={};
             sppsitem.number="null";
             sppsitem.desc1="";
             sppsitem.menuno="";
             sppsitem.headprce="";
             that.props.addStaffItem(sppsitem);
             }
             else{
               let index=0
              for(var key in response)
              {
              let sppsitem={};
              sppsitem.number=key;
              sppsitem.desc1=response[key]['desc1'];
              sppsitem.menuno=response[key]['menuno'];
              sppsitem.headprce=response[key]['headprce'];
              that.props.addStaffItem(sppsitem);
              let details=response[key]['dt'];
              for(var subkey in details)
              {
                let detailitem=details[subkey];
                detailitem.no=subkey;
                that.props.addDetail(index,detailitem);
              }
              index++;              
              }
            }*/
          
        },  
        error: function(){  
            alert( 'Search failed: connect lost.');  
        }  
            
        })
        
      } 
      } 
  
      
    render() {
      return (
        <div className="SearchHead">          
          <label  >Chassis number*:</label>
          <input type="text" className="ChassisNo" ref='ChassisNo' id="ChassisNo"/>
          <button className="Search" onClick={this.handleClick}>Search</button>
          <p className='condition' ref='condition'></p>
        </div>
      );
    }
    }
    

  
  
  export default SPPSSearch;