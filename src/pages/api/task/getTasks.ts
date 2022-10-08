import { error } from "console";
import { parseCookies } from "nookies";
import { ITask } from "../../../interface/task";
import { IUser } from "../../../interface/user";


type DataType = {
   content: ITask[] | []
}
 
const getTasks = async (token: string) => {
   try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API}/task/get/6`,
      {
         headers: {
            Authorization: `Bearer ${token}`
         }
      });
      const data = await response.json() as DataType;
      return { error: false, tasks: data.content }
   } catch (err) {
      const Error = err as Error
      return { error: true, message: Error.message}
   }
}

export { getTasks };