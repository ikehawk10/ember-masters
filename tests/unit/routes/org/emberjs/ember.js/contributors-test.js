import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | org/emberjs/ember.js/contributors', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:org/emberjs/ember.js/contributors');
    assert.ok(route);
  });
});
