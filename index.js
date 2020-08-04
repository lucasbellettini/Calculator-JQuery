$( function(){

  var v1, v2, op, res;

  $(`input[name=btn]`).click(function(){
    $(`#result`).val($(`#result`).val() + $(this).val())
  });

  $(`input[name=ce]`).click(function(){
    $(`#result`).val("")
    $(`#op`).text('')
    v1, v2 = 0
  });

  $(`input[name=soma]`).click(function(){
    if($(`#result`).val() != ""){
      v1 = parseFloat($(`#result`).val())
      $(`#result`).val("")
      op = 'soma'
      $(`#op`).text($(this).val())
    }
    else{
      alert(`insira antes um valor para completar a operação!`)
    }
  });

  $(`input[name=sub]`).click(function(){
    if($(`#result`).val() != ""){
      v1 = parseFloat($(`#result`).val())
      $(`#result`).val("")
      op = 'sub'
      $(`#op`).text($(this).val())
    }
    else{
      alert(`insira antes um valor para completar a operação!`)
    }
  });

  $(`input[name=mult]`).click(function(){
    if($(`#result`).val() != ""){
      v1 = parseFloat($(`#result`).val())
      $(`#result`).val("")
      op = 'mult'
      $(`#op`).text($(this).val())
    }
    else{
      alert(`insira antes um valor para completar a operação!`)
    }
  });

  $(`input[name=div]`).click(function(){
    if($(`#result`).val() != ""){
      v1 = parseFloat($(`#result`).val())
      $(`#result`).val("")
      op = 'div'
      $(`#op`).text($(this).val())
    }
    else{
      alert(`insira antes um valor para completar a operação!`)
    }
  });

  $(`input[name=btn]`).click(function(){
    if(op == 'igual'){
      $(`#result`).val($(this).val())
      $(`#op`).text('')
      op = ''
      v1, v2 = 0
    }
  });

  $(`input[name=igual]`).click(function(){
    if($(`#result`).val() != ""){
      v2 = parseFloat($(`#result`).val())

      
      if(op == `soma`){
        $(`#result`).val(v1 + v2)
      }

      else if(op == `sub`){
        $(`#result`).val(v1 - v2)
      }

      else if(op == `mult`){
        $(`#result`).val(v1 * v2)
      }

      else if(op == `div`){
        $(`#result`).val(v1 / v2)
      }

      res = $(`#result`).val();
      op = 'igual'
      $(`#op`).text($(this).val())
    }
    else{
      alert(`insira antes um valor para completar a operação!`)
    }
  });

  $(`input[name=c]`).click(function(){
    var len = $(`#result`).val().length;
    
    var valor = $(`#result`).val();

    valor = valor.replace(valor.charAt(len - 1), "");

    $(`#result`).val(valor)
  });
});
