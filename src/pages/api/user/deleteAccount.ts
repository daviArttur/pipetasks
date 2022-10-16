// Cookies
import { parseCookies } from "nookies";

// Redux
import { setError } from "../../../redux/slices/error/errorSlice";
import { store } from "../../../redux/store";

const { token } = parseCookies();

async function deleteAccount() {
   try {
     const response = await fetch(`${process.env.NEXT_PUBLIC_API}/deleteAccount`, {
       method: "DELETE",
       headers: {
         Authorization: `Bearer ${token}`
       }
     });
     if (response.status !== 200) throw new Error();
      return {
         error: false
      }
   } catch (err) {
      store.dispatch(setError({ message: "Não foi possível deletar sua conta" }));
      return {
         error: true
      }
   }
 };

 export { deleteAccount };