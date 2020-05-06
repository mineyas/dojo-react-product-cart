import React, {useState} from 'react';
import './App.css';

const initialProductList = [
  { id: 1, name: 'produit 1', price: 50, quantity: 1 },
  { id: 2, name: 'produit 2', price: 75, quantity: 2 },
  { id: 3, name: 'produit 3', price: 20, quantity: 5 }
];


function App () {
  const [newArray, SetNewArray] = useState(initialProductList)

const handleChange = oui => {
  let yas = [...newArray]
  yas.forEach(non => {
    if(non.id === parseInt(oui.target.id)){
      non.quantity = oui.target.value
    }
SetNewArray(yas)
  })

}
  return (
    <div className='App'>
      <h1>Ma commande</h1>

      <table>
        <thead>
          <tr>
          <td>Produit</td>
          <td>Prix Unitaire</td>
          <td>Quantite</td>
          <td>Prix Tot</td>
          </tr>
        </thead>
        <tbody>
      {newArray.map(e => (
          <tr>
          <td>{e.name}</td>
          <td>{e.price}</td>
          <td><input
          id={e.id}
          htmlfor='number'
          onChange={handleChange}

          >
          </input></td>
          <td>{e.quantity * e.price}</td>
          </tr>
      ) )
          }
        </tbody>
      </table>

      <p>Montant de la commande: 
        {newArray.map(b => b.quantity * b.price).reduce((c, d) => c + d)}
      </p>


    </div>
  );
}

export default App;
