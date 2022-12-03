import {useRouter} from "next/router";

export const useSideTitleGenerator = () => {
   const {pathname: p} = useRouter();

   switch (p) {
       case "/":
           return "Index"
       case "/collaborations":
           return "Collabs"
   }
};
