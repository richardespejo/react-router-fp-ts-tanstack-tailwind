import type { Config } from "@react-router/dev/config";

const routesTest = [...Array(30)].map((_,i) => {
  const id = (i + 1);
  const name = [
    "Carlos", "Lucía", "Mateo", "Sofía", "Juan", "Valentina", "Diego", "Camila", "Andrés", "María",
    "Javier", "Paula", "Miguel", "Sara", "David", "Daniela", "Alejandro", "Martina", "Adrián", "Julia",
    "Gabriel", "Emma", "Samuel", "Isabella", "Pablo", "Victoria", "Hugo", "Elena", "Manuel", "Clara"
  ][i];
  const age = Math.floor(Math.random() * 50) + 18; 

  return `auth/testing-args/${id}/${name}/${age}`;

})

export default {
  // Config options...
  // Server-side render by default, to enable SPA mode set this to `false`
  // Genera un arreglo de 30 objetos con id del 1 al 30, nombres y edades aleatorias


  ssr: true,

  async prerender(){
    return [
      '/auth/login',
      '/auth/register',
      '/auth/testing',

      '/products/ferrari',
      '/products/mustang',
      '/products/lamborghini',
      '/products/fiat',
      '/products/chevrolet',
      '/products/ford',
      '/products/seat',
      '/products/opel',

      ...routesTest
    ] 
  }


} satisfies Config;
