import React, { useState } from "react";
import "./App.css";

export default function App() {
    return <BoxShadow />;
}

function BoxShadow() {
	const [bgColor,setBgColor]=useState("#14cc9e")
	const [border_radius,setBorder_radius]=useState(16)

	const [shadowColor,setShadowColor]=useState("#505050")
	
	const [offsetH,setOffsetH]=useState(10)
	const [offsetV,setOffsetV]=useState(10)

	const [blurRadius,setBlurRadius]=useState(20)
	const [spreadRadius,setSpreadRadius]=useState(0)

	const [boxHeight,setBoxHeight]=useState(200)
	const [boxWidth,setBoxWidth]=useState(200)
	
	const [isInset,setIsInset]=useState(false)

	
	const [code,setCode]=useState(`height:${boxHeight}px; \nwidth: ${boxWidth}px;\nborder-radius: ${border_radius}px; \nbackground-color: ${bgColor}; \nbox-shadow: ${isInset ? "inset" : ""} ${offsetH}px ${offsetV}px ${blurRadius}px ${spreadRadius}px ${shadowColor};`)
	function showcodes(ev,setValue) {
		setValue(ev.target.value)
		setCode(`height:${boxHeight}px; \nwidth: ${boxWidth}px;\nborder-radius: ${border_radius}px; \nbackground-color: ${bgColor}; \nbox-shadow: ${isInset ? "inset" : ""} ${offsetH}px ${offsetV}px ${blurRadius}px ${spreadRadius}px ${shadowColor};`)
	}

	const liInputData=[
		{
			labelText:"background color",
			type:"color",
			id:"bgColor",
			value:bgColor,
			setValue:setBgColor
		},
		{
			labelText:"border radius",
			type:"range",
			id:"border_radius",
			value:border_radius,
			setValue:setBorder_radius,
			min:0,
			max:100,
		},
		{
			labelText:"shadow color",
			type:"color",
			id:"shadowColor",
			value:shadowColor,
			setValue:setShadowColor,
		},
		{
			labelText:"Horizontal offset",
			type:"range",
			id:"offsetH",
			value:offsetH,
			setValue:setOffsetH,
			min:-50,
			max:50,
		},
		{
			labelText:"vertical offset",
			type:"range",
			id:"offsetV",
			value:offsetV,
			setValue:setOffsetV,
			min:-50,
			max:50,
		},
		{
			labelText:"Blur Radius",
			type:"range",
			id:"blurRadius",
			value:blurRadius,
			setValue:setBlurRadius,
			min:0,
			max:100,
		},
		{
			labelText:"Spread Radius",
			type:"range",
			id:"spreadRadius",
			value:spreadRadius,
			setValue:setSpreadRadius,
			min:-10,
			max:50,
		},
		{
			labelText:"Box Height",
			type:"range",
			id:"boxHeight",
			value:boxHeight,
			setValue:setBoxHeight,
			min:0,
			max:400,
		},
		{
			labelText:"Box Width",
			type:"range",
			id:"boxWidth",
			value:boxWidth,
			setValue:setBoxWidth,
			min:0,
			max:400,
		},
		{
			labelText:"Inset",
			type:"checkbox",
			id:"inset",
			value:isInset,
			setValue:setIsInset,
		},

	]
    return (
        <main>
            <div className='left'>
                <ul>
					{liInputData.map((e,key)=>(
						<InputControl
							key={key}

							type={e?.type}
							id={e?.id}
							labelText={e?.labelText}
							value={e?.value}
							setValue={e?.setValue}
							min={e?.min}
							max={e?.max}
							showcodes={showcodes}
						/>
					))}
                </ul>
				<div className="code">
						<pre>{code}</pre>
				</div>
            </div>
            <div className='right'>
                <div className='box'
					style={{
						backgroundColor:`${bgColor}`,
						borderRadius: `${border_radius}px`,
 						boxShadow: `
							${isInset?"inset":""}
							${offsetH}px
							${offsetV}px
							${blurRadius}px
							${spreadRadius}px
							${shadowColor}`,

						height:`${boxHeight}px`,
						width:`${boxWidth}px`,
					}}
				></div>
            </div>
        </main>
    );
}



function InputControl(prop) {
	const {type,id,labelText,value ,setValue,min,max,showcodes} =prop;
		return (
			<li>
				<label htmlFor={id}>{labelText}</label>
				<div>
				{type==="checkbox"?
					<input className="slider" type='checkbox' onClick={() => setValue(!value)} id='inset' />
					:
					<input
					className="slider"
					onChange={(e) => {showcodes(e,setValue)}}
					type={type}
					value={value}
					id={id}
					min={min}
					max={max}
					/>
				}
				{type==="checkbox"? "": <input type='text' onChange={(e) => setValue(e.target.value)} value={value} />}
				</div>
			</li>
		)
}
