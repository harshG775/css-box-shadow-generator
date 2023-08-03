
export default function InputControl(prop) {
	const {type,id,labelText,value ,setValue,min,max,showCodes} =prop;
		return (
			<li>
				<label htmlFor={id}>{labelText}</label>
				<div>
				{type==="checkbox"?
					<input className="slider" type='checkbox' onClick={() => setValue(!value)} id='inset' />
					:
					<input
					className="slider"
					onChange={(e) => {showCodes(e,setValue)}}
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
