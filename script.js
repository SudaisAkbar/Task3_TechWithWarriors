$(document).ready(function(){
    
    $("a.nav-link").on('click', function(event) {
  
      if (this.hash !== "") {
        event.preventDefault();
  
        var hash = this.hash;
  
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
      
          window.location.hash = hash;
        });
      }
    });
  });    <script>
  // AngularJS Module
  angular.module('tindogApp', ['ngRoute'])
      .config(['$routeProvider', function($routeProvider) {
          $routeProvider
              .when('/home', {
                  templateUrl: 'home.html',
                  controller: 'MainController',
                  controllerAs: 'mainCtrl'
              })
              .when('/features', {
                  templateUrl: 'features.html'
              })
              .when('/testimonials', {
                  templateUrl: 'testimonials.html'
              })
              .when('/pricing', {
                  templateUrl: 'pricing.html'
              })
              .when('/signup', {
                  templateUrl: 'signup.html'
              })
              .when('/contact', {
                  templateUrl: 'contact.html'
              })
              .otherwise({
                  redirectTo: '/home'
              });
      }])
      .controller('MainController', ['DogsService', function(DogsService) {
          var vm = this;
          vm.title = "Welcome to TinDog";
          vm.dogs = DogsService.getDogs();
      }])
      .service('DogsService', function() {
          var dogs = [
              { name: 'Buddy', breed: 'Golden Retriever', age: 3 },
              { name: 'Bella', breed: 'Labrador Retriever', age: 5 },
              { name: 'Charlie', breed: 'French Bulldog', age: 2 }
          ];
          this.getDogs = function() {
              return dogs;
          };
      });
</script>
  