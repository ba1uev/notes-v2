import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    saveNote(){
      console.log('saveNote event');
    }
  }
});
