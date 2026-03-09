/*
Imagine que você abriu uma loja:
1) Crie o nome de 8 produtos e armazene em uma lista;
2) Crie outra lista para armazenar o preço de cada produto.
3) Crie uma função para mostrar o estoque, mostrando o nome da cada produto e o seu preço.
4) Crie uma função que adiciona um novo produto (e consequentemente um novo preço)
5) Crie uma função que remove um produto da lista recebendo seu índice.
6) EXECUTE AS FUNÇÕES CRIADAS NA SEGUINTE ORDEM:
    - mostra estoque
    - adiciona produto
    - mostra estoque
    - remove um elemento pelo índice
    - mostra estoque
*/
const peças = ["turbina .50", "FuelTech 700", "TBI", "Pistão forjado", "coletor de admissão", "biela forjada", "cabeçote", "cambio forjado"]
const valores = [ 2954 , 25000 , 500 , 2900 , 1000 , 2000 , 2400 , 10000]
function mostrarpeças(){
    contador = 0
while(contador < peças.length){
    console.log(peças[contador] + "- R$ " + valores[contador])
    contador++
    }
    console.log("---------------------------------")
}
mostrarpeças()

function addpeças(nome, valor){
    peças.push(nome)
    valores.push(valor)
}
addpeças("bomba de combustível", 500)

mostrarpeças()

function removepeças(nome){
    peças.splice(nome,1)
    valores.splice(nome,1)
}
removepeças(2)

mostrarpeças()