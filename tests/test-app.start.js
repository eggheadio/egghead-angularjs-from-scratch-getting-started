describe("Testing controller", function () {
    beforeEach(module("Eggly"));
 
    describe("MainCtrl", function() {
        let scope, ctrl;
 
        beforeEach(inject(function($rootScope, $controller) {
            scope = $rootScope.$new();
            ctrl = $controller("MainCtrl", { $scope: scope });
        }));
 
        it("Undefined variable categories", function () {
            expect(scope.categories).toBeDefined();
        });

        it("categories is empty", function () {
            expect(scope.categories.length).toBeGreaterThan(1); //true
            console.log(scope.categories.length); // undefined
        });

        it("Undefined variable bookmarks", function () {
            expect(scope.bookmarks).toBeDefined();
        });

        // it("Value of variable hello must be hello world", function () {
        //     expect(scope.hello).toEqual("hello world");
        // });
    });
});