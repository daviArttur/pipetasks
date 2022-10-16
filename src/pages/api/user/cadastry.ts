import { store } from "../../../redux/store";
import { setError } from "../../../redux/slices/error/errorSlice"
type cadastryUserType = (data: string) => Promise<{

}>

type ResponseType = { 
   message: 'Usuário cadastrado com sucesso'
   } | { 
   errors: {
      value: string;
      msg: string;
      param: string;
      location: string;
   }[]
}

type typeInputValues = { 
      name: string, 
      surname: string, 
      email: string, 
      password: string 
}

const cadastryUser = async (inputValues: typeInputValues) => {
   try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API}/cadastry`, {
         method: "POST",
         headers: {
            "Content-Type": "application/json"
         },
         body: JSON.stringify(inputValues)
      });
      const data: ResponseType = await response.json();
      console.log(data)
      if (response.status !== 201 && "message" in data) {
         store.dispatch(setError({ message: data.message }))
         throw new Error(JSON.stringify(data));
      }
      return { error: false, data: data}

   } catch (err) {
      const Error = err as Error
      return { error: true, message: Error.message }
   }
};

export { cadastryUser };