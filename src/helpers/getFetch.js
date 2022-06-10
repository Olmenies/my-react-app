const myData =
[
  {id:1, title:"Pez betta", price:10000, picture:"prueba"},
  {id:2, title:"Pez oscar", price:10000, picture:"prueba"},
  {id:3, title:"Pez arlequín", price:10000, picture:"prueba"},
  {id:4, title:"Pez neon", price:10000, picture:"prueba"},
  {id:5, title:"Pez goldfish", price:10000, picture:"prueba"},
  {id:6, title:"Calentador", price:10000, picture:"prueba"},
  {id:7, title:"Oxigenador", price:10000, picture:"prueba"},
  {id:8, title:"Arena", price:10000, picture:"prueba"}
];

export const getFetch = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(id){
        resolve(myData.find(prod => prod.id === id));
      } else{
        resolve(myData);
      }
    },2000);
  });
}
