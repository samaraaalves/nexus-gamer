
// Funcionalidades da loja Nexus Gamer

$(document).ready(function () {

  // Botão de adicionar produto
  $(".adicionar").on("click", function () {
    const produto = $(this).data("produto");

    $("#mensagemCarrinho").text(
      produto + " foi adicionado ao carrinho demonstrativo!"
    );
  });

  // Formulário para receber novidades
  $("#formNewsletter").on("submit", function (evento) {
    evento.preventDefault();

    const email = $("#emailNewsletter").val().trim();

    if (email !== "") {
      $("#mensagemNewsletter").text(
        "E-mail validado! Cadastro demonstrativo realizado."
      );

      $("#formNewsletter")[0].reset();
    }
  });

  // Mostrar ou esconder a senha
  $("#mostrarSenha").on("change", function () {
    if ($(this).is(":checked")) {
      $("#senha").attr("type", "text");
    } else {
      $("#senha").attr("type", "password");
    }
  });

  // Validação do formulário de login
  $("#formLogin").on("submit", function (evento) {
    evento.preventDefault();

    const email = $("#email").val().trim();
    const senha = $("#senha").val();

    if (email === "" || senha.length < 6) {
      $("#mensagemLogin").text(
        "Preencha o e-mail e uma senha com pelo menos 6 caracteres."
      );
      return;
    }

    $("#mensagemLogin").text(
      "Dados validados! Login demonstrativo, sem autenticação real."
    );
  });

  // Aviso sobre cadastro
  $("#cadastroDemo").on("click", function (evento) {
    evento.preventDefault();

    $("#mensagemLogin").text(
      "O cadastro de usuários ainda não está disponível nesta demonstração."
    );
  });

});
