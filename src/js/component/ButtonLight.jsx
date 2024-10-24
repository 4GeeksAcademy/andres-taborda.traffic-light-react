import React from 'react'

export const ButtonLight = ({ color:{color,styleColor}, currentColor, onSelectColor }) => {
  return (
    <button 
      className={`button-ligth ${currentColor === color ? 'selected' : ''}`}
      style={{backgroundColor:styleColor}}
      onClick={() => onSelectColor(color)}
      ></button>
  )
}
