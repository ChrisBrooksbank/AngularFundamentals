'use strict';

eventsApp.controller('EventController',
	function EventController($scope) {

	$scope.event = {
		name : 'Angular Boot Camp',
		date : '1/1/2013',
		time : '10:30 am',
		location : {
			address: 'Google Headquarters',
			city : 'Mountain view',
			province : 'CA'
		},
		imageUrl: '/img/angularjs-logo.png',
		sessions : [
			{ 
				name : 'Directives Masterclass',
				creatorName : 'Tom Kelly',
				duration: '1 hr',
				level: 'Advanced',
				abstract: 'In this session you will learn the ins and outs of directives',
				upVoteCount : 0
			},
			{ 
				name : 'Scopes for fun and profit',
				creatorName : 'Chris Brooksbank',
				duration: '30 mins',
				level: 'Introductory',
				abstract: 'This session will take a closer look at scopes. Learn what they do, blah blah blah',
				upVoteCount : 0
			},
			{ 
				name : 'Well Behaved Controllers',
				creatorName : 'Ashley Eglin',
				duration: '2 Hours',
				level: 'Intermediate',
				abstract: 'Controllers are the beginning of everything Angular does, blah blah blah.....',
				upVoteCount : 0
			}
		]
	}

	  $scope.upVoteSession = function(session){
	  	session.upVoteCount++;
	  };
	   $scope.downVoteSession = function(session){
	  	session.upVoteCount--;
	  };
	});
