
import type {Route} from './+types/product';

export async function loader({params}: Route.LoaderArgs){

    const {name} = params;

    return {
        name: name.toUpperCase()
    };

}

const ProductPage = ({loaderData} : Route.ComponentProps ) => {

    const { name } = loaderData



  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold mb-4 text-primary">Detalles del producto</h1>
        <p className="text-lg text-gray-700 mb-2">Nombre del producto:</p>
        <span className="text-2xl text-red-400 font-semibold">{name}</span>
      </div>
    </div>
  )
};

export default ProductPage;
