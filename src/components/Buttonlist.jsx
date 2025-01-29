import React from 'react'

const Buttonlist = () => {
  const arrButtons=["ALL","NEW","OLD","TELUGU","HINDI","PODCASTS","JAVASCRIPT","GAMING","ALL","NEW","OLD","TELUGU","HINDI","PODCASTS","JAVASCRIPT","GAMING"]
  return (
    <div className='m-5 w-screen flex overflow-x-scroll h-20 '>
        {
            arrButtons.map((name,index)=>{
                return(
                    <button key={index} className='bg-gray-200 px-3 py-2 rounded-lg m-3'>{name}</button>
                )
            })
        }
    </div>
   
  )
}

export default Buttonlist