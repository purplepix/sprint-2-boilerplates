var dropMenu = document.getElementById('drop-menu');
dropMenu.addEventListener('change', clickEffect);

var pickPic = document.querySelectorAll('.thumbs-item');

function clickEffect() {
  pickPic.forEach( foto => {
    var effect = dropMenu.value;
    foto.classList = 'thumbs-item';
    if (effect === 'invert') {
      foto.classList.add('invert');
    }
    if (effect === 'sepia') {
      foto.classList.add('sepia');
    }
    if (effect === 'grayscale') {
      foto.classList.add('grayscale');
    }
    if (effect === ''){
      foto.classList = 'thumbs-item';
    }
  }
  )
}
