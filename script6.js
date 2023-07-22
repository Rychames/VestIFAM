
  // Função para abrir o modal
  function openModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "block";
  }

  // Função para fechar o modal
  function closeModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
  }

  // Event listener para o botão de login no header
  var buttonLoginHeader = document.getElementById("button-login");
  buttonLoginHeader.addEventListener("click", openModal);

  // Event listener para o botão de login na sidebar
  var buttonLoginSidebar = document.getElementById("button-login-sidebar");
  buttonLoginSidebar.addEventListener("click", openModal);

