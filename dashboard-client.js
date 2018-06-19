import {tmdashboard} from './dashboard.js' ;

import "./dashboard.html" ;

Template.tmdashboards.onCreated(function(){

	Meteor.subscribe("tmdashboards",{},function(){
		console.log("dashboards received") ;
	}) ;

	var self = this ;

	self.selectedDashboard = new ReactiveVar() ;

	self.onDashboardClick = function(){
		console.log("this",this) ;
		self.selectedDashboard.set(this) ;
	}
})

Template.tmdashboards.helpers({
	dashboards(){
		var out = tmdashboard.registeredDashboardsCollection.find({},{sort:{index:-1}}).fetch() ;
		out.forEach(function(dashboard){
			dashboard.onClick = Template.instance().onDashboardClick ;
		}) ;
		return out ;
	},
	selectedDashboard(){
		return Template.instance().selectedDashboard.get();
	}
}) ;

Template.tmdashboards.events({
	'click [showDashboardsButton]'(e,t){
		t.selectedDashboard.set() ;
	}
})

Template.tmdashboardelement.events({
	'click [dashboardViewButton]'(e,t){
		this.onClick() ;
	}
}) ;
