var DeviceView = Backbone.View.extend({
  tagName: 'ul',
  template: _.template($('#deviceViewTemplate').html()),
  render: function(){
    console.log('DeviceView created...');
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
});