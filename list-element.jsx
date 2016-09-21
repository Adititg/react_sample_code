import React from 'react';
import {render} from 'react-dom';
import ListDetailElement from './list-detail-element.jsx';
class ListElement extends React.Component {
	constructor(props,clients) {
       super(props);
         this.updateDetail = this.updateDetail.bind(this);
    }
    updateDetail(e){
		render(<ListDetailElement clients={e} />, document.getElementById('detailClient'));
    }
     render(){
     	var clientData=[];
     	if(this.props.clients){ 
     		clientData=this.props.clients;
     		return(
     				<div>{

     					clientData.map(function(val){
     							return(
     									<div className="thumbnail control_thumbnail" onClick={() => this.updateDetail(val)} >
     									<div className="col-xs-3">
     									<img src={val.general.avatar} height='50' width='50' />
     									</div>
     									<div className="col-xs-9">
     										<h5>{val.general.firstName}</h5>
     										<p className="small">{val.job.title}</p>
     									</div>
     									
     									</div>
     								)
     						},this)

     					}</div>
     				
     		);
     	}else{
     			return(
    			<div>No data available</div>
    		);
     	}
    	
    }
}

module.exports=ListElement;