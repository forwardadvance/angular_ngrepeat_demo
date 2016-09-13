describe('catController', function() {

  beforeEach(module('app'));

  var controller;
  beforeEach(inject(function($controller, cats) {
    controller = $controller('catController', {cats: cats})
  }));

  it('catController instantiates thundercats', function() {
    expect(controller.cats).toBeDefined();
  });
});
