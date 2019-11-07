$('#login').click(function() {

  var g = G$('John', 'Doe');

  g.setLang($('#lang').val()).HTMLgreet('#greeting', false).log();
});
