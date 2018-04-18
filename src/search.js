import React, { Component } from 'react'; 
import './search.css';
import ReactDOM from 'react-dom';
import $ from  'jquery';
import jQuery from 'jquery';

class Search extends Component {   
      
    handleClick = (e) => {

        let that =this;
        let condvalue=ReactDOM.findDOMNode(this.refs.wipNo).value;
        if(condvalue.length<=0)
        {
          alert("Please input WIP number!");
        }
        else{
        //that.props.clearItems();
        $.ajax({
          url:`http://10.8.97.24:8080/test/estimation/${condvalue}`,
          type: "get",
          async:true,
         timeout:10000,
         dataType: "json",  
         success: function(response){  
           if (jQuery.isEmptyObject(response))
           {
            alert('No WIP found.');  
            let item={};
            item.name=condvalue;
            item.value="Not found";
            that.props.addStaffItem(item);
           }
           else{
             that.props.setJsonData(response);
          /*for(var key in response)
          {
            let bodystr="BODY";
            if(key!=bodystr)
            {
            let item={};
           item.name=key;
           item.value=response[key];
           that.props.addStaffItem(item);
          }
          else
          {
            let body=response[key];
            for(var subkey in body)
            {
              let subItem=body[subkey];
              let wipItem={};
              wipItem.number=subItem["No"];
              wipItem.unitprice=subItem['UnitPrice'];
              wipItem.disc=subItem['Disc'];
              wipItem.description=subItem['Description'];
              wipItem.qty=subItem['Qty'];
              wipItem.amount=subItem['Amount'];
              wipItem.code=subItem['Code'];

              that.props.addWIPItem(wipItem);
            }

          
          }
          }*/
        }
      },  
      error: function(XMLHttpRequest, textStatus, errorThrown){  
          alert('Search failed: connect lost.');  
      }  
          
      })
      
    } 
    } 
  
    render() {
      return (
        <div className="SearchHead">
          <label  >wip number*:</label>
          <input type="text" ref='wipNo' className="WIPNO" id="WIPNO"/>
          <label >Chassis number:</label>
          <input type="text" className="ChassisNo" ref='ChassisNo' id="ChassisNo"/>
          <button className="Search" onClick={this.handleClick}>Search</button>
         
        </div>
      );
    }
  }
  
  export default Search;