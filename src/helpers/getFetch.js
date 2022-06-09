const myData =
[
  {id:1, title:"Pez betta", price:2000, picture:"prueba"},
  {id:2, title:"Pez oscar", price:10000, pricture:"prueba"},
  {id:2, title:"Pez arlequín", price:10000, pricture:"prueba"},
  {id:2, title:"Pez neon", price:10000, pricture:"prueba"},
  {id:2, title:"Pez goldfish", price:10000, pricture:"prueba"}
];

export const getFetch = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(myData);
    },2000);
  });
}
