import Ember from 'ember';
import layout from '../templates/components/bf-chat-item';

export default Ember.Component.extend({
  layout: layout,
  tagName: 'div',
  nameAlign: Ember.computed('user.id', 'currentUser.id', function() {
    if (this.get('user.id') == this.get('currentUser.id')) {
      return 'pull-right';
    } else {
      return 'pull-left';
    }
  }),
  timeStampAlign: Ember.computed('user.id', 'currentUser.id', function() {
    if (this.get('user.id') == this.get('currentUser.id')) {
      return 'pull-left';
    } else {
      return 'pull-right';
    }
  }),
  messageAlign: Ember.computed('user.id', 'currentUser.id', function() {
    if (this.get('user.id') == this.get('currentUser.id')) {
      return 'right';
    } else {
      return '';
    }
  })
});
