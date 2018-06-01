import {tmdashboard} from './dashboard.js' ;

Meteor.publish("tmdashboards",function(params){
	params = params || {} ;
	return tmdashboard.registeredDashboardsCollection.find(params) ;
}) ;