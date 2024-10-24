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

	
	return (
		<div className="row container-fluid app-background">
			<h1 className="col-6 title-container">Traffic Light</h1>
			<div className="col-3 d-flex flex-column align-items-center">
				<div className='forma'></div>
				{
					colorList.map(color => (
						<Light key={color.color}color={color} currentColor={currentColor} onSelectColor={onSelectColor}/>
					))
				}				
			</div>
			<LightMenuActions onSelectColor={onSelectColor} colorList={colorList} currentColor={currentColor}/>
		</div>
	);
};

export default Home;
