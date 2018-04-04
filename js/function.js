$(function() {

  // Déclaration des variables initiales
  var $list = $('p');
  var $newMessage = $('#bouton');
  var $bouton = $('#add');
  var $son = $('#son')[0];

  // Evènement lorsqu'on clique sur le bouton
  $newMessage.on('submit', function(e) {
    e.preventDefault();
    $('p').text('Darg degen, ratione.'); // remplacement de texte
    var $this = $(this);
    $list.append('<br>' + 'fzefze zfzefze zefg ze fgzergzer'); // ajout de texte
    $list.append('<br>' + 'Des est enlingu gkzerf k apjz oadzegzgfjhfzehofzenlfjkh'); // ajout de texte
    $bouton.remove(); // supression du bouton
    $son.play(); // lecture de l'audio

  });

  // Evènement lorsqu'on clique sur le bouton
  $newMessage.on('submit', function(e) {
    e.preventDefault();
    $('body').css('background-color', '#094099');

  });

});