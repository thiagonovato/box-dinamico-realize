;(function ($) {
  // Definindo valores iniciais da tabela
  $('table').empty()
  var newRow = $('<tr>')
  var cols = ''
  cols += '<td>&nbsp;</td>'
  newRow.append(cols)
  $('table').append(newRow)

  // Clicando no botão de enviar
  send = function () {
    // Zerando a tabela
    $('table').empty()

    // Capturando os valores de input
    var row = $('#row').val()
    var col = $('#col').val()

    // Para cada linha...
    for (let i = 1; i <= row; i++) {
      var newRow = $('<tr>')
      var cols = ''

      // Para cada coluna...
      for (let j = 1; j <= col; j++) {
        cols += '<td style="border: 3px solid white;">&nbsp;</td>'
      }

      // Inserindo as colunas na linha
      newRow.append(cols)

      // Retornando os dados da função
      $('table').append(newRow)
    }

    // Limpando os campos do formulário
    clear()
    return false
  }

  // Função que limpa o formulário
  function clear() {
    $('#row').val('')
    $('#col').val('')
  }
})(jQuery)
