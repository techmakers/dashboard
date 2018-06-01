export const tmdashboard = {} ;

tmdashboard.test = true ;

tmdashboard.init = function(options){
	if (options.collection){
		tmdashboard.registeredDashboardsCollection = options.collection ;
	} else {
		tmdashboard.registeredDashboardsCollection = new Mongo.Collection('tmdashboard.dashboards') ;
	}
}

tmdashboard.register = function(
	name,
	route,
	description,
	roles,
	index
){

};

tmdashboard.notify = function(
	name,
	message
){

};