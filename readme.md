https://app.pluralsight.com/player?course=angularjs-fundamentals&author=joe-eames&name=angularjs-fundamentals-m0&clip=0&mode=live

MV* framework, opinionated 
Controllers, Markup, Services, Testing, Routing, Directives, Testing 

https://github.com/joeeames/AngularFundamentalsFiles, do components course afterwards
s
Angular only wants you to manipulate DOM inside directives ( or use partial templates )
* = Controller/Presenter/ViewModel, Angular uses Controller

Two way binding

Karma = test tool built for Angular

Extends HTML volcabulary with directives
e.g. support extra attributes on stand elements
or complete new elements in HTML

Forward thinking, to support future tech, e.g. : 
Web Components, encapsulate HTML, Javascript and CSS
Object.observe, will benefit from performance improvements when this is available

docs.angularjs.org/guide, for documentation

Two Way Binding
As user uses form the model is automatically updated

Has Dirty Checking
So can use plain JavaScript objects

Has Dependency Injection

Controller contains logic and state
Views/Directives - one way and two way binding
Services - place to contain core business logic and state of project, communicate with server

A controllers primary responsibility is to create a scope object
A scope object is what is used to communicate with a view thru two way communication
Events on the view can call methods on scope and access properties on scope
The scope is NOT the model
The model is the data thats put into the scope

Some built in directives : 
ng-src="{{event.imageUrl}}"          // delays loading of image until angular loaded
ng-click="upVoteSession(session);
ng-repeat="session in event.sessions"

Four different ways to write directives, most directives dont support all forms :
<ng-form /> or <div ng-form /> or <div class="ng-form" /> 
( or HTML comments )

Some Event directives :
ngClick
ngDblClick
ngMousedown
ngMouseenter
ngMouseleave
ngMousemove
ngMouseover
ngMouseup
ngChange // detects a change event on a lot of HTML elements, requires that ngModel attribute is also defined on the tag

Other directives :
ng-app="eventsApp" and in app.js : var eventsApp = angular.module('eventsApp', []);
ngBind="event.name"
ng-bind-template="{{event.name}} {{event.date}}"
ngBindHtml         // requires angular-sanitize.js
ngBindHtmlUnsafe




