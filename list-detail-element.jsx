import React from 'react';
import {render} from 'react-dom';

class ListDetailElement extends React.Component {
	constructor(props) {
       super(props);
       
    }
    render(){ 
    	
    	if(this.props.clients){ 
	    return( 
    			<div classname="col-xs-12">
    				<div className="col-xs-2">
    					<div><img src={this.props.clients.general.avatar} /></div>
    				</div>
    				<div className="col-xs-10">
    					<ul>
    						<li>First Name:{this.props.clients.general.firstName}</li>
    						<li>Last Name:{this.props.clients.general.lastName}</li>
    						<li>Job Title:{this.props.clients.job.title}</li>
    						<li>Company:{this.props.clients.job.company}</li>
    						<li>Email:{this.props.clients.contact.email}</li>
    						<li>Phone:{this.props.clients.contact.phone}</li>
    						<li>Address:{this.props.clients.address.street},{this.props.clients.address.city} - {this.props.clients.address.zipCode},{this.props.clients.address.country}
    						</li>
    					</ul>
    				</div>
    			</div>
    			)
    		
    }
    else{
    	return( 
    			<div>no data</div>
    			);
    		
    }
   }
}

module.exports=ListDetailElement;