type Type_props = {
    register: any;
    getValues: any;
    setValue: any;
};

export default function ControlsForm(props: Type_props) {
    const { register, getValues, setValue} = props;


    const handleMinus = (name: string) => {
        if (getValues(name) <= 0) {
            return
        }
        setValue(name, getValues(name) - 1);
    }
    const handlePlus = (name: string) => {
        if (getValues(name) >= 50) {
            return
        }
        setValue(name, getValues(name) + 1);
    }
    
    return (
        <section>
            <h1>Settings</h1>
            <form onSubmit={(e)=>e.preventDefault()}>
                <ul className="[&>li]:grid [&>li]:grid-cols-[1fr_auto]">
                    <li>
                        <label htmlFor="thumbColor">Thumb Color</label>
                        <input
                            id="thumbColor"
                            type="color"
                            {...register("thumbColor")}
                        />
                    </li>
                    <li>
                        <label htmlFor="trackColor">Track Color</label>
                        <input
                            id="trackColor"
                            type="color"
                            {...register("trackColor")}
                        />
                    </li>
                    
                    <li>
                        <label htmlFor="scrollbarWidth">Scrollbar Width</label>
                        <div className="flex justify-center w-full">
                            <button onClick={() => handleMinus("scrollbarWidth")}>-</button>
                            <input
                                className="w-10 h-10 p-2 rounded-md"
                                id="scrollbarWidth"
                                type="text"
                                {...register("scrollbarWidth")}
                                readOnly
                            />
                            <button onClick={() => handlePlus("scrollbarWidth")}>+</button>
                        </div>
                    </li>
                    <li>
                        <label htmlFor="scrollbarBorderRadius">
                            Scrollbar Border Radius
                        </label>
                        <div className="flex justify-center w-full">
                            <button onClick={() => handleMinus("scrollbarBorderRadius")}>-</button>
                            <input
                                className="w-10 h-10 p-2 rounded-md"
                                id="scrollbarBorderRadius"
                                type="text"
                                {...register("scrollbarBorderRadius")}
                                readOnly
                            />
                            <button onClick={() => handlePlus("scrollbarBorderRadius")}>+</button>
                        </div>
                    </li>
                    <li>
                        <label htmlFor="thumbBorderWidth">
                            Thumb Border Width
                        </label>
                        <div className="flex justify-center w-full">
                            <button onClick={() => handleMinus("thumbBorderWidth")}>-</button>
                            <input
                                className="w-10 h-10 p-2 rounded-md"
                                id="thumbBorderWidth"
                                type="text"
                                {...register("thumbBorderWidth")}
                                readOnly
                            />
                            <button onClick={() => handlePlus("thumbBorderWidth")}>+</button>
                        </div>
                    </li>
                    {/* <li>
                        <label htmlFor="thumbBorderColor">
                            Thumb Border Color
                        </label>
                        <input
                            id="thumbBorderColor"
                            type="color"
                            {...register("thumbBorderColor")}
                        />
                    </li> */}
                </ul>
            </form>
        </section>
    );
}
