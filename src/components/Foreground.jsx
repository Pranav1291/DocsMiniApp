import React, { useRef, useState } from 'react'
import Card from '/src/components/Card.jsx';



const Foreground = () => {

    const ref = useRef(null)

    const data = [
        {
            desc: "lorem ipsum dolor sit amet consectetur adipiscing.",
            filesize: ".9mb",
            close: true,
            tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
        },
        {
            desc: "lorem ipsum dolor sit amet consectetur adipiscing.",
            filesize: ".9mb",
            close: true,
            tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
        },
        {
            desc: "lorem ipsum dolor sit amet consectetur adipiscing.",
            filesize: ".9mb",
            close: true,
            tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue" },
        },
    ];
    
  return (
    <>
    <div ref={ref} className='fixed z-[3] top-0 left-0 w-full p-5 h-full bg-sky-700/40 flex gap-5 flex-wrap'>
        {data.map((item, index) => (
            <Card data={item} reference={ref}/>
        ))}
        

      </div>
    </>  
      
  )
}
export default Foreground;