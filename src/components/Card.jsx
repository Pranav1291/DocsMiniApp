import React from 'react'
import { FaFileCode } from "react-icons/fa";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import { motion } from "framer-motion";

function Card({data, reference}) {
  return (
    
      <motion.div drag dragConstraints={reference} whileDrag={{scale: 1.2}} className='relative flex-shrink-0 w-60 h-72 rounded-[45px] text-white px-5 py-10 overflow-hidden bg-zinc-700/90'>
        <FaFileCode />

        <p className='text-sm mt-5 leading-tight font-semibold'>{data.desc}</p>
        
        <div className='footer absolute bottom-0 w-full left-0'>
            <div className='flex items-center justify-between px-6 mb-5 mt-4'>
            <h5>{data.filesize}</h5>
            <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center'>
            
            
            {data.close ?  <IoIosClose size=".9em" color="black" /> : <FaCloudDownloadAlt size=".9em" color="black"/>}
            
            </span>
            
            </div>



            {
                data.tag.isOpen ? (
                    <div className={`tag w-full py-4 ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} flex items-center justify-center`}>
                <h3 className='text-md font-semibold'>{data.tag.tagTitle}</h3>
            </div>
                    
                ) : null
            }
            
            

        </div>
     
      </motion.div>
    
  )
}

export default Card;
