// class Carrinho {
//   constructor(itens, qtd, valorTotal) {
//     this.itens = itens;
//     this.qtd = qtd;
//     this.valorTotal = valorTotal;
//   }

//   addItem(item) {

//     let contador = 0;

//     for(let itemCarrinho in this.itens) {
//       if(this.itens[itemCarrinho].id == item.id) {
//         this.itens[itemCarrinho].qtd += item.qtd;
//         contador = 1;
//       }
//     }

//     if(contador == 0) {
//       this.itens.push(item);
//     }

//     this.qtd += item.qtd;
//     this.valorTotal += item.preco * item.qtd;

//   }

//   removeItem(item) {

//     for(let itemCarrinho in this.itens) {
//       if(this.itens[itemCarrinho].id == item.id) {
        
//         let obj = this.itens[itemCarrinho];
//         let index = this.itens.findIndex(function(obj) { return obj.id == item.id});

//         this.qtd -= this.itens[itemCarrinho].qtd;
//         this.valorTotal -= this.itens[itemCarrinho].preco * this.itens[itemCarrinho].qtd;

//         this.itens.splice(index, 1);

//       }
//     }
//   }

// }

// let carrinho = new Carrinho([
//   {
//     id: 1,
//     nome: "Camisa",
//     qtd: 1,
//     preco: 20
//   },
//   {
//     id: 2,
//     nome: "Calça",
//     qtd: 2,
//     preco: 50
//   }
// ], 3, 120);

// console.log(carrinho);

// carrinho.addItem({id:1, nome:"Camisa", qtd:2, preco: 20});

// console.log(carrinho);

// carrinho.addItem({id:3, nome:"Boné", qtd:1, preco: 15});

// console.log(carrinho);

// carrinho.removeItem({id: 1, nome: "Camisa", qtd: 1, preco: 20});

// console.log(carrinho);


class Voo{
  constructor(codVoo,origem,destino,assentosDisponiveis){
    this.codVoo=codVoo;
    this.origem=origem;
    this.destino=destino;
    this.assentosDisponiveis=assentosDisponiveis;
  }
  reservarAssento(){
    if(this.assentosDisponiveis > 0){
      this.assentosDisponiveis -= 1
      console.log('Reservado com sucesso')
    }

  }
  consultarAssentosdisponiveis(){
    console.log(`${this.assentosDisponiveis} assentos disponíveis`)
  }
}

const voo=new Voo(1,'Juazema','Barcelona',15)
console.log(voo)
voo.reservarAssento()
console.log(voo)
voo.reservarAssento()
console.log(voo)
voo.consultarAssentosdisponiveis()