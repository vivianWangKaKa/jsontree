import React, { Component } from 'react';
import TreeItem from './TreeItem.js';
import  MenuPage from './newtree.js';
import Search from './search.js';
import SPPSSearch from './SppsSearch.js';
import './jsonTree.css';
class App extends Component {
    constructor(){
        super();
      this.state = {
          Data:''
        };
      }
      setJsonData(item){
        this.setState({
            Data:item
        });
      }
    render() {
        return(
            <div className='demoBody'>
            <Search setJsonData={this.setJsonData.bind(this)}/>  
            <SPPSSearch setJsonData={this.setJsonData.bind(this)}/>         
            <TreeItem jsons={this.state.Data}/>
            </div>
        )
    }
  }
  
  export default App;