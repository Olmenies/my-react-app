const objPersona =
[
  {name:'Janis', surname:'Jolin'},
  {name:'Kurt', surname:'cobain'}
];

export const getFetch = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(objPersona);
    },2000);
  });
}
