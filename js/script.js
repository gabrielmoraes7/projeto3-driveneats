function select(tipo_comida, comida_escolhida){

    const limpar_selecoes = document.querySelector(tipo_comida + " .selected");

    if (limpar_selecoes !== null){
        
        limpar_selecoes.classList.remove("selected");
    };

    const verify_selection_check = document.querySelector(tipo_comida + " " + ".precos-verify .selection-check");

    if (verify_selection_check !== null){

        verify_selection_check.classList.remove("selection-check");

    };

    const selection_check = document.querySelector(tipo_comida + " " + comida_escolhida + " .check");
    const selection = document.querySelector(comida_escolhida);
    
    selection.classList.add("selected");
    selection_check.classList.add("selection-check");
    
    const prato_principal_sel = document.querySelector(".prato_principal .selected");
    const bebidas_sel = document.querySelector(".bebida .selected");
    const sobremesas_sel = document.querySelector(".sobremesa .selected");
    
    if (prato_principal_sel !== null && bebidas_sel!== null && sobremesas_sel !== null){
        const botao = document.querySelector(".button");
        const texto_botao = document.querySelector(".texto_botao");

        botao.classList.add("confirm");
        texto_botao.innerHTML = "Fechar pedido";
        const liga_botao = document.querySelector(".confirm").disabled;
        document.querySelector(".confirm").disabled = false;
    }
}

function habilitar_botao (){
    
    const cancela_pedido = document.querySelector(".appear");
    const finaliza = document.querySelector(".finaliza");
    
    if (cancel !== null){
        cancela_pedido.classList.remove("appear");       
    }

    else{
            
        nome_cliente = prompt("Inserir seu nome:");
        end_cliente = prompt('Insira seu endereço:');
        finaliza.classList.add("appear");
    }

    const prato_principal_sel_nome = document.querySelector(".prato_principal .selected h2");
    const bebidas_sel_nome = document.querySelector(".bebidas .selected h2");
    const sobremesas_sel_nome = document.querySelector(".sobremesas .selected h2");

    var nome_comida = prato_principal_sel_nome.textContent
    var nome_bebida = bebidas_sel_nome.textContent
    var nome_sobremesa = sobremesas_sel_nome.textContent

    const confirmacao_comida_nome = document.querySelector(".content-comida .item-comida-nome");
    const confirmacao_bebida_nome = document.querySelector(".content-bebida .item-bebida-nome");
    const confirmacao_sobremesa_nome = document.querySelector(".content-sobremesa .item-sobremesa-nome");
    
    /*area onde vou receber o nome doq foi selecionado */
    confirmacao_comida_nome.textContent = nome_comida;
    confirmacao_bebida_nome.textContent = nome_bebida;
    confirmacao_sobremesa_nome.textContent = nome_sobremesa;

    const prato_principal_sel_precos = document.querySelector(".comidas .selected .precos .main");
    const bebidas_sel_precos = document.querySelector(".bebidas .selected .precos .main");
    const sobremesas_sel_precos = document.querySelector(".sobremesas .selected .precos .main");

    const precos_comida = prato_principal_sel_precos.textContent
    const precos_bebida = bebidas_sel_precos.textContent
    const precos_sobremesa = sobremesas_sel_precos.textContent

    
    const confirmacao_comida_precos = document.querySelector(".container-comida .item-comida-precos");
    const confirmacao_bebida_precos = document.querySelector(".container-bebida .item-bebida-precos");
    const confirmacao_sobremesa_precos = document.querySelector(".container-sobremesa .item-sobremesa-precos");
    
    /*area onde vou receber o preço doq foi selecionado */
    confirmacao_comida_precos.textContent = precos_comida;
    confirmacao_bebida_precos.textContent = precos_bebida;
    confirmacao_sobremesa_precos.textContent = precos_sobremesa;
    
    /*trocar as virgulas exibidas por pontos para virarem numeros de fato*/
    const preco_comida_string = precos_comida.toString().replace(",", ".")
    const preco_bebida_string = precos_bebida.toString().replace(",", ".")
    const preco_sobremesa_string = precos_sobremesa.toString().replace(",", ".")

    const preco_comida = parseFloat(preco_comida_string)
    const preco_bebida = parseFloat(preco_bebida_string)
    const preco_sobremesa = parseFloat(preco_sobremesa_string)

    const preco_cheio = preco_comida + preco_bebida + preco_sobremesa;
    var total_preco = parseFloat(preco_cheio).toFixed(2)
    var total = total_preco.toString().replace(".", ",")
  
    const preco_total = document.querySelector(".total-div .total-precos")
    preco_total.textContent = "R$ " + total;

    return {nome_comida, nome_bebida, nome_sobremesa, total, client, adress};
}

