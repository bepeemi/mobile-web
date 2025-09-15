document.getElementById('formEmail').addEventListener('submit', mail);

function mail(event) {
  event.preventDefault();

  var email = document.getElementById('email').value;

  if (email !== "") {
    alert("Validação concluída");
  } else {
    alert("Por favor, insira um email válido");
  }
}
