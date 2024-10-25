import React, { useState } from "react";
import { Light } from "./Light";
import { LightMenuActions } from "./LightMenuActions";



//create your first component
const Home = () => {
	const [colorList, setColorList] = useState([
			{
				color: "red",
				styleColor: "#FF7760"
			},
			{
				color: "yellow",
				styleColor: "#FFDC78"
			},
			{
				color: "green",
				styleColor: "#4EDBC5"
			}
		])
		const [currentColor, setCurrentColor] = useState("")

		const onSelectColor = (colorSelected) => {
			setCurrentColor(colorSelected)
		}

		const addNewColor = (newColor) => {
			const isStyleColorAdded = colorList.filter(color => newColor.styleColor === color.styleColor)
			const isNameColorAdded = colorList.filter(color => newColor.color === color.color)						
			
			if (isNameColorAdded.length > 0 || isStyleColorAdded.length > 0) {
				alert("Este Color ya ha sido creado")
				return
			}
			setColorList([...colorList, newColor])
			
		}
	
	return (
		<div className="row container-fluid app-background">
			<h1 className="col-6 title-container">Traffic Light</h1>
			<div className="col-3 d-flex flex-column align-items-center">
				<div className='forma'></div>
				{
					colorList.map(color => (
						<Light key={color.styleColor}color={color} currentColor={currentColor} onSelectColor={onSelectColor}/>
					))
				}				
			</div>
			<LightMenuActions onSelectColor={onSelectColor} colorList={colorList} addNewColor={addNewColor}/>
		</div>
	);
};

export default Home;
