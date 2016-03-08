describe('HenchmenController', function() {

  beforeEach(module('app'));

  var scope;
  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    $controller('HenchmenController', {
      $scope: scope
    });
  }));

  it('HenchmenController instantiates henchmen', function() {
    expect(scope.henchmen).toBeDefined();
  });
});
