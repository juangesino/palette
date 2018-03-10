

Template.home.helpers({
  colors: function () {
    return Colors.find({}, {sort: {createdAt: -1}}).fetch();
  }
});

Template.home.events({
  'submit #newColorForm': function (event) {
    event.preventDefault();
    var color = event.target.color.value;
    Colors.insert({
      color: color,
      createdAt: new Date
    })
    $('#myModal').modal('hide');
    return false;
  },
  'click .delete-color': function () {
    Colors.remove(this.id);
  },
  'change #color': function (event) {
    var newColor = event.target.value;
    if (newColor) {
      $('.color-thumb').css('background-color', newColor)
    }
  }
});
