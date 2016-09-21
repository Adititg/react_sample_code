import React from 'react';
import {render} from 'react-dom';
import $ from 'jquery';
import ListElement from './list-element.jsx';
import ListDetailElement from './list-detail-element.jsx';
class App extends React.Component {
  
  constructor(props) {
       super(props);
       this.state = {
       		clientData:[],
       		selectedClient:null
       };
       this.searchClients = this.searchClients.bind(this);
    }

  componentWillMount(){
  	var self=this;
  		$.get('http://localhost/react-test/src/server/clients.json',function(result){
  			self.setState({
  				clientData:result
  			});
  			self.setState({
  				selectedClient:self.state.clientData[0]
  			});
  			
  		});
  }

  searchClients(event){
  	var text_to_search = document.getElementById('search_text').value;
  	var matched_result=[];
  	if(this.state.clientData && text_to_search){
  		this.state.clientData.map(function(client){
  			var isMatched=false;
  			var address=client.address;
  			var contact=client.contact;
  			var general=client.general;
  			var job=client.job;
  			
  			if(address.city.toLowerCase().match(text_to_search.toLowerCase()) || address.country.toLowerCase().match(text_to_search.toLowerCase()) || address.street.toLowerCase().match(text_to_search.toLowerCase()) || address.zipCode.toLowerCase().match(text_to_search.toLowerCase()) ){
  				matched_result.push(client);return;
  			}
  			
  			if(contact.email.toLowerCase().match(text_to_search.toLowerCase()) || contact.phone.toLowerCase().match(text_to_search.toLowerCase())){
				matched_result.push(client);return;
  			}
  			if(general.firstName.toLowerCase().match(text_to_search.toLowerCase()) || general.lastName.toLowerCase().match(text_to_search.toLowerCase())){
  				matched_result.push(client);return;
  			}
  			if(job.company.toLowerCase().match(text_to_search.toLowerCase()) || job.title.toLowerCase().match(text_to_search.toLowerCase()) ){
  				matched_result.push(client);
  				return;
  			}
	
  		});
	}else{
		render(<ListElement clients={this.state.clientData} />	, document.getElementById('clientList'));
	}
	
	if(matched_result.length){
		render(<ListElement clients={matched_result} />	, document.getElementById('clientList'));
	}
  }

  render () {
    return (
    		<div className="container thumbnail control_thumbnail_container">
    		 <div className="col-xs-3 left-list thumbnail">
    		 	
    		 	<div className="input-group">
    		 		<input type="text" id="search_text"  className="form-control" onChange={() => this.searchClients()} />
	    		 	 <div className="input-group-btn">
		    		 	  <button className="btn btn-default dropdown-toggle" type="button" onClick={() => this.searchClients()} >
		    		 	  <span className="glyphicon glyphicon-search"></span></button>
	    		 	   </div>
    		    </div>

    		 	<div id="clientList" className="col-xs-12" >
    		 		<ListElement clients={this.state.clientData} />	
    		 	</div>
    		 </div>
    		 <div className="col-xs-9 right-detail" id="detailClient">
    		     <ListDetailElement clients={this.state.selectedClient} />
    		 </div>
    		</div>


    	);
  }
}

render(<App/>, document.getElementById('app'));


