import { useState } from "react"
// Array de objetios contendo o estado inicial do cardapio
const cardapio=[
    {id: 1, nome: "Combo-01", preco: 25.00, diponivel: true, quantidade: 0},
    {id: 2, nome: "Combo-02", preco: 35.00, diponivel: false, quantidade: 0 },
    {id: 3, nome: "Combo-03", preco: 45.00, diponivel: false, quantidade: 0 },
    {id: 4, nome: "Combo-04", preco: 55.00, diponivel: true, quantidade: 0 },
]

const Pedido = () => {
//   HOOK- useState -Manipula o estado da variavel
//   Estados para gerenciar a lista de items do cardapio

const[items,setItems]=useState(cardapio);
const[status, setStatus]=useState("");
const[enviar, setEnviar]=useState(false);

// Valor fixo adicionado ao total quando tiver no carrinho
const taxaEntrega =5.00;


// Função que altera a quantidade do pedido
const ALterarQuantidade =(id, valor)=>{
    setItems(alt =>
        // MAP: Criar um novo e percorre os items sem modificar o original (imutabilidade)
        // TERNARIO: verifica se o item da iteração atual é que deve ser alterado
        // SPREAD: (...item)- matem os valores antigos e adiciona os novos
        // MATH.max - Objeto que garante que a quantidade nunca será maior que 0
        alt.map(item=>
            item.id === id ? {...item, quantidade:Math.max(0, item.quantidade +valor)}:item
        )
    )

}

const produtosDisponiveis =items.filter(item=>item.disponivel);
const carrinho =items.filter(item => item.quantidade> 0)
//REDUCE Calcula a soma dos items (preco +quantidade) e adiciona a taxa de entrega

const subTotal = carrinho.reduco((ac,item)=>ac+item.preco * item.quantidade, 0);
const total =subtotal >0 ? subTotal + taxaEntrega: 0;

const ConfirmarPedido=()=>{
    setEnviar(true);
    setStatus ("Restaurante confirmou pagamento, Preparando seu Peido!")
    setTimeout(()=>{
        setStatus("Seu pedido saiu para Entrega!")
        setEnviar(flase)

    },5000 )
    
    setTimeout(()=>{
        setStatus("Seu pedido foi entregue com sucesso")
        setEnviar(false)
    },10000)
}


    return (
    <div>
      
    </div>
  )
}

export default Pedido
