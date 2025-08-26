import { Form, NavLink, useNavigation } from "react-router";
import type { Route } from "./+types/testing-page";
import { sleep } from "~/lib/sleep";


export async function action({ request }: Route.ActionArgs) {
  const data = await request.formData();
  //console.log('date',data);
  return { ok: true };
}

export async function clientAction({ 
    serverAction, 
    request }: Route.ClientLoaderArgs) {
  await sleep(1000);
  const formData = await request.clone().formData();
  const alldata = Object.fromEntries(formData);
  const data = await serverAction();
  return { 
    message: 'hola richard desde el clientAction - client ', 
    data,
    alldata
  };
}

export async function loader(){
  //console.log('Desde el servidor - server');
  return { message : 'Hola richard desde el loader'}
}

export async function clientLoader({ serverLoader }: Route.ClientLoaderArgs) {
  //console.log('Desdel cliente - client');
  const serverData = await serverLoader();
  return { 
    message: 'Hola richard desde el clientLoader' , 
    serverData: serverData 
  };
}

export default function TestingPage({
  loaderData,
  actionData,
  params,
  matches,
}: Route.ComponentProps) {

  const navigation = useNavigation();
  const isPosting = navigation.state === 'submitting';

  //console.log({navigation , isPosting});



  return (
    <div>
      <h1>Welcome to My Route with Props!</h1>
      <p>Loader Data: {JSON.stringify(loaderData)}</p>
      <p>Action Data: {JSON.stringify(actionData)}</p>
      <p>Route Parameters: {JSON.stringify(params)}</p>
      <p>Matched Routes: {JSON.stringify(matches)}</p>
      <NavLink to="/auth/testing-args/123/richard/22" className="text-blue-500 underline text-2xl">
        Go to Testing Args
      </NavLink>

      <Form className="mt-2 flex gap-2" method="post">
        <input className="border-2 border-gray-400 rounded-md p-2" type="text" name="name"/>
        <input className="border-2 border-gray-400 rounded-md p-2" type="text" name="age"/>
        <button 
          disabled={isPosting}
          className="bg-red-400 text-white rounded-md w-30" type="submit" >
          {isPosting ? 'Submiting...': 'Submit'}
        </button>

      </Form>
    </div>
  );
}