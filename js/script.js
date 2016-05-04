/*function handleClick(callback) {
    alert('This button has been clicked');
    if (callback){
        callback();
    }
}

function doMore() {
    alert('I could process more logic here');
}

function doSomethingElse() {
    document.writeln('Test Message');
} */

var module = angular.module('demoApp', []);
var controller = module.controller('demoController', initController);
function initController($scope, $http){
  /*$scope.items = ['First Item'];
  $scope.AddItem = function() {
    if ($scope.newItem) {
        $scope.items.push($scope.newItem);
        $scope.newItem = undefined;  
    }
  }*/
  $http.get('http://httpbin.org/ip')
  .then(function(response) {
      $scope.resultJSON = JSON.stringify(response);
      $scope.resultProperty =  response.data.origin; 
  });
  
}

/* function makeRequests() {
    $.getJSON('http://httpbin.org/ip')
        .done(function(response) {
            alert(JSON.stringify(response));
            $('body > p').text(
                response.origin
            );
        });
}
    
$(document).ready(function(){
    makeRequests();
});


$('document').ready(function (){
    manipulateDOM();
});

function manipulateDOM(){
    var h1Headers=$('h1');
    h1Headers.text('Hello World');
    var h3Headers=$('h3');
    h3Headers.css('color', '#37887D');
    h3Headers.first().css('text-decoration', 'line-through');
    var lasth3Header=$('h3:last');
    lasth3Header.css('background-color', '#53226A');

} */

/* var worker;

function startWorker() {
    worker=new Worker("js/worker.js");
    worker.onmessage = function (event) {
        document.getElementById("output").innerHTML += '<li>' + event.data + '</li>';
    }
}

function stopWorker(){
    worker.terminate();
}

function correctMethodName() {
    return "Output Message";
}

try {
var result = wrongMethodName(3);
document.writeln(result);
}
catch(error){
    document.writeln('<h3>Error:&nbsp;<h3><p>' + error + "</p>");
} */
    
    
    /*var testVariable='';
var isUndefined = (testVariable === undefined);
var isNull = (testVariable === null);
var isEmpty = (testVariable === '');
document.getElementById('isUndefined').innerHTML = isUndefined;
document.getElementById('isNull').innerHTML = isNull;
document.getElementById('isEmpty').innerHTML = isEmpty;


function startLogic() {
             var newHTML = '<em>New Header</em>';
             document.getElementById('headerItem').innerHTML = newHTML;
         }
startLogic();
function clickHandler(){
             alert('You clicked me!');
         }

var $elem = document.getElementById('output');
$elem.innerHTML += 'Demo ' + (4 +6);*/  
