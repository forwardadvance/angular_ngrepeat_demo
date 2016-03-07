describe('Unit: catController', function() {

  beforeEach(module('app'));

  var scope;
  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    $controller('catController', {
      $scope: scope
    });
  }));

  it('catController instantiates thundercats', function() {
    expect(scope.thundercats).toBeDefined();
  });
});
