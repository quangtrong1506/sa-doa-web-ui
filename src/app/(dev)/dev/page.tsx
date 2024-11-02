import { userAPI } from '@/data/datasource/api/useAPI';
import Link from 'next/link';

const TestPage = async () => {
   const use = await userAPI.findAll();

   console.log(use);
   return (
      <div className="flex justify-center mt-5">
         <div className="flex w-11/12 md:w-[700px] p-3 bg-white rounded-lg flex-col">
            <div>
               <h1 className="text-center text-2xl font-bold">Dev Page</h1>
            </div>
            <div>
               <div>
                  <span className="font-bold text-lg">Icons: </span>
                  <Link className="text-textLinkBlue_d hover:underline" href={'/dev/icons'}>
                     Click here
                  </Link>
               </div>
               <div>
                  <span className="font-bold text-lg">Components: </span>
                  <Link className="text-textLinkBlue_d hover:underline" href={'/dev/components'}>
                     Click here
                  </Link>
               </div>
               <div></div>
            </div>
         </div>
      </div>
   );
};

export default TestPage;
