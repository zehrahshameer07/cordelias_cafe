var app = angular.module("workshopApp", []);

app.controller("WorkshopController", function($scope) {
    $scope.workshops = [
        {
            title: "Making Marble Cake",
            price: 2500,
            date: "2025-03-10",
            duration: 3,
            skill_level: "Beginner",
            image: "marble_cake.jpg"
        },
        {
            title: "Beginner’s Guide to Cupcakes",
            price: 900,
            date: "2025-03-15",
            duration: 2,
            skill_level: "Beginner",
            image: "cupcakes.jpg"
        },
        {
            title: "Art of French Macarons",
            price: 1800,
            date: "2025-03-20",
            duration: 4,
            skill_level: "Intermediate",
            image: "macarons.jpg"
        },
        {
            title: "Cookie Decorating for Beginners",
            price: 1200,
            date: "2025-03-25",
            duration: 2.5,
            skill_level: "Beginner",
            image: "cookies.jpg"
        }
    ];
});
