/**
* @ngdoc directive
* @name umbraco.directives.directive:valHighlight
* @restrict A
* @description Used on input fields when you want to signal that they are in error, this will highlight the item for 1 second
**/
function valHighlight($timeout) {
    return {
        restrict: "A",
        link: function (scope, element, attrs, ctrl) {
            
            scope.$watch(function() {
                return scope.$eval(attrs.valHighlight);
            }, function(newVal, oldVal) {
                if (newVal === true) {
                    element.addClass("highlight-error");
                    $timeout(function () {
                        //set the bound scope property to false
                        scope[attrs.valHighlight] = false;
                    }, 1000);
                }
                else {
                    element.removeClass("highlight-error");
                }
            });
   
        }
    };
}
angular.module('umbraco.directives').directive("valHighlight", valHighlight);