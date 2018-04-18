import React, { Component } from 'react';
import './treeItem.css';
import $ from 'jquery';
class TreeItem extends Component {
  constructor(props, context) {
    super(props, context);

    this.onMenuClicked = this.onMenuClicked.bind(this);
}
onMenuClicked(ev) {
  // 被点击的<h1>
  let node = $(ev.target);

  // 属于<h1>的相邻子菜单列表
  let subMenu = node.next();

  // 显示/隐藏这个列表
  if (subMenu.css('display')=='none')
  {
    subMenu.css("display","block")
    node[0].innerHTML =node[0].innerHTML.replace("▼","▲");
  }
  else{
    subMenu.css("display", "none");
    node[0].innerHTML =node[0].innerHTML.replace("▲","▼");
  }
  //subMenu.css("display", subMenu.css('display') == "none" ? "block" : "none");
  
 // node.innerHTML
}
   createTree(jsons){
    let items=[];
    if(jsons != null){     
     let value;
     let type;
         value=jsons;
         type=typeof value;
         if (type=='object')
         {
              if(Object.prototype.toString.call(value) === '[object Array]')
              {
               
                for(var i=0;i<jsons.length;i++){
                    items.push(
                    <li> 
                    <ul >{this.createTree(jsons[i])}</ul>
                    </li>
                  ) ;
                }
              }
            else{
              for(var key in jsons)
              {
              if (typeof jsons[key]=='object')
              {
                items.push(
                  <li >
                    <p className='parentNode' onClick={this.onMenuClicked}>{key}  ▼</p>
                    <ul className='subnode'>{this.createTree(jsons[key])}</ul>
                  </li>
                )   
              }
              else
              {
                items.push(
                  <li>
                    <p>{key}:   {jsons[key]}</p>
                  </li>
                )
               }
              }
            }
         }
         else{
           items.push(<li> <p>{value}</p></li>);
         }
 }
 return items;
}
    render() {
      
      return (
        <ul className='jsonTree'>{this.createTree(this.props.jsons)}</ul>
      );
    }
  }
  
  export default TreeItem;
  