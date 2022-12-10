import {useRouter} from "next/router";

export const useSideTitleGenerator = () => {
   const {pathname: p, query: q} = useRouter();

   switch (p) {
       case "/":
           return "Index"
       case "/collaborations":
           return "Collabs"
   }

   if (q.collaborator) {
       return q.collaborator + ' + NoNoYesOfCourse'
   }
};
