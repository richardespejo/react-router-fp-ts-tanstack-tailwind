import { Link, NavLink } from "react-router";
import type { Route } from "./+types/testing-args-page";
import { sleep } from "~/lib/sleep";

export function meta(){
  return [
    {title: "Chat de soporte por richard"},
    {
      property: "og_title",
      content: "Chat de soporte por richard"
    },
    {
      name: "Description",
      content: "This app is the best"
    }
  ];
}

export function links() {
  return [
    /*
    {
      rel: "icon",
      href: "/favicon.png",
      type: "image/png",
    },
    {
      rel: "stylesheet",
      href: "https://example.com/some/styles.css",
    },
    {
      rel: "preload",
      href: "/images/banner.jpg",
      as: "image",
    },
    */
  ];
}

export async function loader({ params }: Route.LoaderArgs) {
  //console.log({ params });
  await sleep(1500);
  return { hola: 'mundo'};
}

export async function clientLoader({ params }: Route.ClientLoaderArgs) {
  //console.log({ params });
  await sleep(1500);
  return { hola: 'mundo'};
}

export function HydrateFallback() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
      <div className="flex flex-col items-center">
        <svg className="animate-spin h-16 w-16 text-white mb-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
        </svg>
        <h2 className="text-3xl font-bold text-white mb-2">Cargando...</h2>
        <p className="text-lg text-white/80">Por favor espera mientras preparamos tu experiencia.</p>
      </div>
    </div>
  );
}

clientLoader.hydrate = true as const;


export default function TestingArgsPage({
  loaderData,
  actionData,
  params,
  matches,
}: Route.ComponentProps) {

  const { id , name , age} = params;

  //console.log({id,name,age});
  //console.log('Componente creado');


  return (
    <div>
      <h1 className="font-bold text-4xl">Testing Arg Page</h1>
      <h2 className="font-bold text-3xl">Name: {name}</h2>
      <h2 className="font-bold text-2xl">Age: {age}</h2>
      <h2 className="font-bold text-2xl">id: {id}</h2>
      <p>Loader Data: {JSON.stringify(loaderData)}</p>
      <p>Action Data: {JSON.stringify(actionData)}</p>
      <p>Route Parameters: {JSON.stringify(params)}</p>
      <p>Matched Routes: {JSON.stringify(matches)}</p>
      <NavLink to="/auth/testing"
        className={({isPending}) => 
        isPending
          ? "text-red-500 underline text-2xl"
          : "text-blue-500 underline text-2xl"
      }>
        Go to Testing 
      </NavLink>
    </div>

  );
}