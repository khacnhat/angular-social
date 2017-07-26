/**
 * Created by nhatnk on 7/26/17.
 */
angular.module('myApp.home', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/home', {
            templateUrl: 'home/home.html',
            controller: 'HomeCtrl'
        });
    }])

    .controller('HomeCtrl', ['$scope', function($scope) {
        //Get data from back-end
        $scope.posts = [
                {
                    _id: 1,
                    content: "This is a post",
                    likes: 50,
                    user: {
                        _id: 1,
                        profile: "1.jpg",
                        name: "Teo"
                    },
                    comments: [
                        {
                            _id: 1,
                            content: "This is a comment",
                            user: {
                                _id: 1,
                                profile: "1.jpg",
                                name: "Teo"
                            }
                        },
                        {
                            _id: 2,
                            content: "This is a comment",
                            user: {
                                _id: 1,
                                profile: "1.jpg",
                                name: "Teo"
                            }
                        },
                        {
                            _id: 3,
                            content: "This is a comment",
                            user: {
                                _id: 1,
                                profile: "1.jpg",
                                name: "Teo"
                            }
                        },
                        {
                            _id: 1,
                            content: "This is a comment",
                            user: {
                                _id: 1,
                                profile: "1.jpg",
                                name: "Teo"
                            }
                        },
                        {
                            _id: 2,
                            content: "This is a comment",
                            user: {
                                _id: 1,
                                profile: "1.jpg",
                                name: "Teo"
                            }
                        },
                        {
                            _id: 3,
                            content: "This is a comment",
                            user: {
                                _id: 1,
                                profile: "1.jpg",
                                name: "Teo"
                            }
                        }
                    ]
                },
                {
                    _id: 1,
                    content: "This is a post",
                    likes: 50,
                    user: {
                        _id: 1,
                        profile: "1.jpg",
                        name: "Teo"
                    },
                    comments: [
                        {
                            _id: 1,
                            content: "This is a comment",
                            user: {
                                _id: 1,
                                profile: "1.jpg",
                                name: "Teo"
                            }
                        },
                        {
                            _id: 2,
                            content: "This is a comment",
                            user: {
                                _id: 1,
                                profile: "1.jpg",
                                name: "Teo"
                            }
                        },
                        {
                            _id: 3,
                            content: "This is a comment",
                            user: {
                                _id: 1,
                                profile: "1.jpg",
                                name: "Teo"
                            }
                        }
                    ]
                }
            ];

        $scope.newPost = {
            content: "",
            likes: 0,
            user: {
                _id: 1,
                profile: "1.jpg",
                name: "Teo"
            },
            comments: []
        };
        //Send comment to back-end
        $scope.sendComment = function(post){
            // $http.post....
            var newComment = {
                _id: 1,
                content: post.newComment,
                user: {
                    _id: 1,
                    profile: "1.jpg",
                    name: "Teo"
                }
            };
            post.comments.push(newComment);
            post.newComment = "";
        };

        $scope.showAllComments = function(post){
            post.toggleComment = !post.toggleComment;
        };

        $scope.sendPost = function(){
            var newPost = {
                content: $scope.newPost.content,
                user: {
                    _id: 1,
                    profile: "1.jpg",
                    name: "Teo"
                },
                comments: [],
                likes: 0
            };
            $scope.posts.splice(0, 0, newPost);
            $scope.newPost.content = "";
        };

        $scope.like = function(post){
            post.likes++;
        };
    }]);