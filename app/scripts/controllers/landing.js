'use strict';

angular.module('medistreamApp')
  .controller('LandingCtrl', function ($scope) {
    var slides = $scope.slides = [];
    $scope.addSlide = function () {
      var newWidth = 600 + slides.length;
      slides.push({
        image: 'http://placekitten.com/' + newWidth + '/300',
        text: ['More', 'Extra', 'Lots of', 'Surplus'][slides.length % 4] + ' ' +
          ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
      });
    };
    for (var i = 0; i < 4; i++) {
      $scope.addSlide();
    }

    $scope.slides = [
      {
        image: 'images/slide1.png',
        title: 'Slide 1',
        description: 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.'
      },
      {
        image: 'images/slide2.png',
        title: 'Slide 2',
        description: 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.'
      }
    ];
  });
