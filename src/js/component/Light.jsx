import React from "react";
import { ButtonLight } from './ButtonLight'

export const Light = ({color, onSelectColor, currentColor}) => {
  
  

  return (
    <>
      <div className='ligth-container'>
        <div className='d-flex justify-content-between'>
          <div className='nut'></div>
          <div className='nut'></div>
        </div>
        <div className='align-self-center'>
          <ButtonLight color={color} currentColor={currentColor} onSelectColor={onSelectColor}/>
        </div>
        <div className='d-flex justify-content-between'>
          <div className='nut'></div>
          <div className='nut'></div>
        </div>
        
      </div>
      
    </>
  )
}
