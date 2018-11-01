import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
<<<<<<< d99a3f8558b315feb4b4af04d524e76a6c0a2158
  this.route('home');
  this.route('orgs');

  this.route('org', function() {
    this.route('emberjs', function() {
      this.route('repos');
      this.route('ember.js', function() {
        this.route('issues');
        this.route('contributors');
      });
=======
  this.route('orgs', {}); // /orgs
  this.route('org', {path: 'org/:id'}, function() { 
    this.route('repos', {});
    this.route('repo', {path: ':id'}, function() {
      this.route('contributors');
      this.route('issues');
>>>>>>> set up basic router with templates
    });
  });
});

export default Router;
