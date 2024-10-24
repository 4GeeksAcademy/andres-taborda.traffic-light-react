import React, { useEffect, useRef, useState } from 'react'

export const LightMenuActions = ({ onSelectColor, colorList }) => {
  const [isToogle, setIsToogle] = useState(false)
  const position = useRef(0)

  const handleToogleColor = () => {
    setIsToogle(!isToogle)
  }

  useEffect(() => {
    if (isToogle) {
      setInterval(() => {
        
        if (position.current < colorList.length ) {  
          console.log(colorList[position.current].color, position.current);
                  
          onSelectColor(colorList[position.current].color)          
          position.current+=1
             
        }else{
          position.current = 0
        }
      }, 1000);
      
    }
    return () => {
      
    };
  }, [isToogle]);

  return (
    <div className='col-3 align-content-center'>
      <h2 className='text-center fs-1'>Traffic Menu</h2>
      <form>
        <button type='button' onClick={handleToogleColor}>Toogle Ligths</button>
      </form>
    </div>
  )
}
