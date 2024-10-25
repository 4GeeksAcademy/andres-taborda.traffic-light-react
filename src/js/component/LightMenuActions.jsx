import React, { useEffect, useRef, useState } from 'react'

export const LightMenuActions = ({ onSelectColor, colorList, addNewColor }) => {
  const [isToogle, setIsToogle] = useState(false)
  const position = useRef(0)
  const intervalId = useRef()

  const handleToogleColor = () => {
    setIsToogle(!isToogle)
  }

  const handleSubmit = (event) => {
    event.preventDefault() 
    const { customColor, nameColor} = Object.fromEntries(new window.FormData(event.target))
    addNewColor({
      color: nameColor,
      styleColor: customColor
    })
      
  }


  const startToogle = () => {
    if (!isToogle) {
      onSelectColor("")
      clearInterval(intervalId.current)
      return
    }
    if (isToogle) {
      intervalId.current = setInterval(() => {        
        if (position.current < colorList.length ) {           
          onSelectColor(colorList[position.current].color)          
          position.current+=1
             
        }else{
          position.current = 0
        }
      }, 1000);
      return
    }
  }

  useEffect(() => {
    startToogle()
    return () => {
      
    };
  }, [isToogle]);

  return (
    <div className='col-3 align-content-center'>
      <h2 className='text-center'>Traffic Menu</h2>
      <form className='d-flex flex-column justify-content-around align-items-center' onSubmit={handleSubmit}>  
        <div className='mb-3 row w-100 justify-content-center'>
          <label htmlFor="colorSelector" className='fs-2 text-light col-12 text-center mb-5'>Select ligth color</label>
          <input type="color" name="customColor" id="colorSelector"  className='col-auto mb-3'/>
          <input type="text" name="nameColor" id="colorName" placeholder='Custom Color Name' required minLength={2}/>
          <button type='submit'  className='w-50 p-3 btn-menu-light mt-3 btn-menu-primary'>Create Light</button>
        </div> 
        <hr className='w-75'/>           
        <button type='button' onClick={handleToogleColor} className='w-50 p-3 btn-menu-light'>{isToogle ? 'Stop Toogle' : 'Toogle Ligths'}</button>
      </form>
    </div>
  )
}
