var dropMenu = document.getElementById('drop-menu');
dropMenu.addEventListener('change', loadProgrammers);

window.onload = loadMenu();

function loadMenu(){
  var nome = document.createElement('option');
  nome.innerHTML = 'selecione sede';
  nome.value = 'none';
  dropMenu.appendChild(nome);

  for (sede in data) {
    var itemMenu = document.createElement('option');
    itemMenu.innerHTML = sede;
    itemMenu.value = sede;
    dropMenu.appendChild(itemMenu);
  }
};

function loadProgrammers(){
  var sede = dropMenu.value;
  var listProgrammers = document.getElementById('exibe-programadoras');

  listProgrammers.innerHTML = '';
  for (var turma in data[sede]) {
    for (var i in data[sede][turma]['students']) {
      var img = document.createElement('img');
      img.src = data[sede][turma]['students'][i]['photo'];
      listProgrammers.appendChild(img);
    }
  }
};
