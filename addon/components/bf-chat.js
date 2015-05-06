import Ember from 'ember';
import layout from '../templates/components/bf-chat';

export default Ember.Component.extend({
  layout: layout,
  label: Ember.computed('chats.@each', function() {
    return this.get('chats').length + ' messages';
  }),
  numberOfChatMessages: Ember.computed('chats.@each', function() {
    return this.get('chats').length;
  }),
  actions: {
    sendMessage: function() {
      this.sendAction('action', this);
    }
  }
});
