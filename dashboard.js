export const tmdashboard = {} ;

tmdashboard.test = true ;

tmdashboard.init = function(options){
	options = options || {} ;
	if (options.collection){
		tmdashboard.registeredDashboardsCollection = options.collection ;
	} else {
		tmdashboard.registeredDashboardsCollection = new Mongo.Collection('tmdashboard.dashboards') ;
	}
}

tmdashboard.register = function(
	_id,
	name,
	templatename,
	description,
	roles,
	index
){

	tmdashboard.registeredDashboardsCollection.upsert({
		_id:_id
	},{
		$set:{
			_id: _id,
			name:name,
			templatename:templatename,
			description:description,
			roles:roles,
			index:index
		}
	}) ;

};

tmdashboard.notify = function(
	_id,
	message
){
	tmdashboard.registeredDashboardsCollection.update({
		_id:_id
	},{
		$set:{
			message:message
		}
	}) ;
};
