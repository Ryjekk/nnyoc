import {useRouter} from "next/router";

export const useSideTitleGenerator = () => {
   const {pathname: p, query: q} = useRouter();

   switch (p) {
       case "/":
           return "Index"
       case "/collections":
           return "Collections"
       case "/item/[id]":
           return "Index"
   }

   if (q.collection) {
       return q.collection
   }
};
