import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        toggleHelp: function() {
            this.toggleProperty('enabled');
        }
    }
});
