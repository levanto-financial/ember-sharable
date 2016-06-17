import Ember from 'ember';
import config from './config/environment';

const { Router } = Ember;

const R = Router.extend({
  location: config.locationType
});

R.map(function() {
  this.route('home');
});

export default R;
