import {useRouter} from "next/router";

export const useSideTitleGenerator = () => {
   const {pathname: p, query: q} = useRouter();

   switch (p) {
       case "/":
           return "Index"
       case "/collaborations":
           return "Collabs"
       case "/item/[id]":
           return "Index"
   }

   if (q.collaborator) {
       return q.collaborator + ' + NoNoYesOfCourse'
   }
};
