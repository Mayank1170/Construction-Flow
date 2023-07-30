import { BsBuildings } from 'react-icons/bs'
import { BiDotsHorizontalRounded } from 'react-icons/bi'
import { BsArrowUp } from 'react-icons/bs'
import { BsTruck } from 'react-icons/bs'
import { AiOutlineHome } from 'react-icons/ai'
import { HiOutlineDocumentText } from 'react-icons/hi'
import { FaArrowDownWideShort } from 'react-icons/fa6'
import Value from './Value'

const Heading: React.FC = () => {
    return (
    <div className='h-[790px] w-[100%]'>
        <div className='flex items-center ml-[4%]'>
             <h1 className="text-white text-xl mt-6 mb-3">My Company Construction Flow</h1>
        </div>
        <div className='h-full flex flex-row w-full'>
            <div className='w-[100%] ml-[4%] mb-[2%] bg-gray-950 flex flex-col space-y-16 items-center border-r-[0.5px] border-gray-700 '>
            <div className='flex flex-row justify-between h-12 w-[100%] bg-black border-lime-600 border-l-8'>
            <div className="ml-2 text-white flex flex-row space-x-2 items-center">
           <BsBuildings/>
           <h1>Group Heading 1</h1>
            </div>
            <div className='text-white flex flex-row justify-between items-center space-x-3'>
           <BiDotsHorizontalRounded/>
           <BsArrowUp/>
           </div>
           </div>
           { Value.map((item)=>(
            <div key={item.id} className='flex flex-col items-center w-[50%] '>
            <div className='w-full text-white flex flex-row space-x-2 items-center bg-lime-600 rounded-t-lg'>
               <div className='pl-3' >
                   <AiOutlineHome/>
               </div>
                   <h1>Duisburg</h1>
               </div>
               <div className='flex flex-col space-y-2 w-full border border-lime-600 rounded-b-lg'>
               <div className='text-white text-sm flex flex-row justify-between items-center mx-2 mt-4'>
                   <div className="flex flex-row space-x-1 items-center justift-between">
                   <HiOutlineDocumentText/>
                   <h1>Cogs 1:</h1>
                   </div>
                   <h1>{item.Cogs1} EUR</h1> 
               </div>
               <div className='text-white text-sm flex flex-row justify-between mx-2 pb-4'> 
                               <div className="flex flex-row space-x-1 items-center">
                   <HiOutlineDocumentText/>
                   <h1>Cogs 2:</h1>
                   </div>
                   <h1>{item.Cogs2} EUR</h1>
                   </div>
                </div>
               </div>
               ))}
               
            </div>

{/* First end Second Start */}

<div className='w-[100%] mb-[2%] bg-gray-950 flex flex-col space-y-16 items-center border-r-[0.5px] border-gray-700 '>
            <div className='flex flex-row justify-between h-12 w-[100%] bg-black border-blue-600 border-l-8'>
            <div className="ml-2 text-white flex flex-row space-x-2 items-center">
           <BsBuildings/>
           <h1>Group Heading 1</h1>
            </div>
            <div className='text-white flex flex-row justify-between items-center space-x-3'>
           <BiDotsHorizontalRounded/>
           <BsArrowUp/>
           </div>
           </div>
           { Value.map((item)=>(
            <div key={item.id} className='flex flex-col items-center w-[50%] '>
            <div className='w-full text-white flex flex-row space-x-2 items-center bg-lime-600 rounded-t-lg'>
               <div className='pl-3' >
                   <AiOutlineHome/>
               </div>
                   <h1>Duisburg</h1>
               </div>
               <div className='flex flex-col space-y-2 w-full border border-lime-600 rounded-b-lg'>
               <div className='text-white text-sm flex flex-row justify-between items-center mx-2 mt-4'>
                   <div className="flex flex-row space-x-1 items-center justift-between">
                   <HiOutlineDocumentText/>
                   <h1>Cogs 1:</h1>
                   </div>
                   <h1>{item.Cogs1} EUR</h1> 
               </div>
               <div className='text-white text-sm flex flex-row justify-between mx-2 pb-4'> 
                               <div className="flex flex-row space-x-1 items-center">
                   <HiOutlineDocumentText/>
                   <h1>Cogs 2:</h1>
                   </div>
                   <h1>{item.Cogs2} EUR</h1>
                   </div>
                </div>
               </div>
               ))}
               
            </div>

{/* Second end*/}

{/* Middle Partition Start*/}

<div className='flex w-[30%] justify-center mt-3 '>
<div className='flex flex-col items-center  text-white text-lg space-y-3'>
<FaArrowDownWideShort/>
<div className="flex flex-col  items-center space-y-9 ">
<BiDotsHorizontalRounded/>
<BsBuildings/>
</div>
<div className='flex flex-col space-y-6'>
<h1 className='rotate-[-90deg]'>3</h1>
<h1 className='rotate-[-90deg] py-7'>Heading</h1>
<h1 className='rotate-[-90deg]'>Group</h1>
</div>
</div>
</div>

{/* Middle Part End */}
{/* Third Part Start */}
<div className='w-[100%] mb-[2%] bg-gray-950 flex flex-col space-y-16 items-center border-x-[0.5px] border-gray-700 '>
            <div className='flex flex-row justify-between h-12 w-[100%] bg-black border-red-600 border-l-8'>
            <div className="ml-2 text-white flex flex-row space-x-2 items-center">
           <BsBuildings/>
           <h1>Group Heading 1</h1>
            </div>
            <div className='text-white flex flex-row justify-between items-center space-x-3'>
           <BiDotsHorizontalRounded/>
           <BsArrowUp/>
           </div>
           </div>
           { Value.map((item)=>(
            <div key={item.id} className='flex flex-col items-center w-[50%] '>
            <div className='w-full text-white flex flex-row space-x-2 items-center bg-lime-600 rounded-t-lg'>
               <div className='pl-3' >
                   <AiOutlineHome/>
               </div>
                   <h1>Duisburg</h1>
               </div>
               <div className='flex flex-col space-y-2 w-full border border-lime-600 rounded-b-lg'>
               <div className='text-white text-sm flex flex-row justify-between items-center mx-2 mt-4'>
                   <div className="flex flex-row space-x-1 items-center justift-between">
                   <HiOutlineDocumentText/>
                   <h1>Cogs 1:</h1>
                   </div>
                   <h1>{item.Cogs1} EUR</h1> 
               </div>
               <div className='text-white text-sm flex flex-row justify-between mx-2 pb-4'> 
                               <div className="flex flex-row space-x-1 items-center">
                   <HiOutlineDocumentText/>
                   <h1>Cogs 2:</h1>
                   </div>
                   <h1>{item.Cogs2} EUR</h1>
                   </div>
                </div>
               </div>
               ))}
               
            </div>
{/* Third end Fourth Start */}

           <div className='w-[100%] mb-[2%] bg-gray-950 flex flex-col space-y-16 items-center '>
            <div className='flex flex-row justify-between h-12 w-[100%] bg-black border-green-600 border-l-8'>
            <div className="ml-2 text-white flex flex-row space-x-2 items-center">
           <BsBuildings/>
           <h1>Group Heading 1</h1>
            </div>
            <div className='text-white flex flex-row justify-between items-center space-x-3'>
           <BiDotsHorizontalRounded/>
           <BsArrowUp/>
           </div>
           </div>
           { Value.map((item)=>(
            <div key={item.id} className='flex flex-col items-center w-[50%] '>
            <div className='w-full text-white flex flex-row space-x-2 items-center bg-lime-600 rounded-t-lg'>
               <div className='pl-3' >
                   <AiOutlineHome/>
               </div>
                   <h1>Duisburg</h1>
               </div>
               <div className='flex flex-col space-y-2 w-full border border-lime-600 rounded-b-lg'>
               <div className='text-white text-sm flex flex-row justify-between items-center mx-2 mt-4'>
                   <div className="flex flex-row space-x-1 items-center justift-between">
                   <HiOutlineDocumentText/>
                   <h1>Cogs 1:</h1>
                   </div>
                   <h1>{item.Cogs1} EUR</h1> 
               </div>
               <div className='text-white text-sm flex flex-row justify-between mx-2 pb-4'> 
                               <div className="flex flex-row space-x-1 items-center">
                   <HiOutlineDocumentText/>
                   <h1>Cogs 2:</h1>
                   </div>
                   <h1>{item.Cogs2} EUR</h1>
                   </div>
                </div>
               </div>
               ))}
               
         </div>

            </div>
{/*Fourth Ends here */}

    </div>
    )
}

export default Heading;

