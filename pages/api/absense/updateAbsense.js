import { useRouter } from "next/router";

export default function handler(req, res){

   const body = req.body
   console.log(body);

   return res.status(200);
   //check if post
   //update absense with values from form 
}
