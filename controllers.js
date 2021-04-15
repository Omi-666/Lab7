var portfolioApp = angular.module('portfolioApp',[]);

portfolioApp.controller('GalleryListCtrl', function($scope)
{
    $scope.galleries = 
    [
        { 'title':'Zina',
        'when':'Sierpien 2019',
        'thumbnailUrl':'img/ga1.jpg'
        },
        { 'title':'Ania i Mango',
        'when':'Lipiec 2019',
        'thumbnailUrl':'img/ga2.jpg'
        },
        { 'title':'Zuri',
        'when':'Sierpien 2019',
        'thumbnailUrl':'img/ga3.jpg'
        },
        { 'title':'Wiktoria i Wave',
        'when':'Sierpien 2019',
        'thumbnailUrl':'img/ga4.jpg'
        },
        { 'title':'Greta',
        'when':'Sierpien 2019',
        'thumbnailUrl':'img/ga5.jpg'
        },
        { 'title':'Kasia i Fenix',
        'when':'Lipiec 2019',
        'thumbnailUrl':'img/ga6.jpg'
        }
    ];
    $scope.galleries.length;
});