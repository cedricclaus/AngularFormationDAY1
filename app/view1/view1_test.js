'use strict';

describe('myApp.view1 module', function () {

    beforeEach(module('myApp.view1'));


    describe('view1 controller', function () {
        var scope, ctrl, $httpBackend;

        beforeEach(inject(function (_$httpBackend_, $rootScope, $controller) {
            $httpBackend = _$httpBackend_;
            $httpBackend.expectGET('https://api.mongolab.com/api/1/databases/books/collections/books/?apiKey=d3qvB8ldYFW2KSynHRediqLuBLP8JA8i').respond([
                {
                    "ISBN-10": "193398869X",
                    "title": "Secrets of the JavaScript Ninja",
                    "price": 22.31
                }
            ]);
            scope = $rootScope.$new();
            ctrl = $controller('View1Ctrl', {$scope: scope});
        }));

        it('should initiate articles', function () {
            //spec body

            expect(ctrl).toBeDefined();
            expect(scope.articles).toBeUndefined();
            $httpBackend.flush();
            expect(scope.articles).toEqual([{

                "ISBN-10": "193398869X",
                "title": "Secrets of the JavaScript Ninja",
                "price": 22.31
            }]);

        });
        it('should delete article', function () {
            //spec body

            expect(ctrl).toBeDefined();
            scope.articles = [
                {
                    "ISBN-10": "193398869X",
                    "title": "Secrets of the JavaScript Ninja",
                    "price": 22.31
                },
                {
                    "ISBN-10": "193322229X",
                    "title": "Secrets of the JavaScript Ninja",
                    "price": 22.31
                }

            ];
            scope.deleteArticle(scope.articles[0]);
            expect(scope.articles).toEqual([
                {
                    "ISBN-10": "193322229X",
                    "title": "Secrets of the JavaScript Ninja",
                    "price": 22.31
                }

            ]);


        });

    })
})