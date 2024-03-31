type Type_props = {
    register: any;
};
export default function ControlsForm(props: Type_props) {
    const { register } = props;
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
                            <button>-</button>
                            <input
                                className="w-10 h-10 p-2 rounded-md"
                                id="scrollbarWidth"
                                type="text"
                                {...register("scrollbarWidth")}
                            />
                            <button>+</button>
                        </div>
                    </li>
                    <li>
                        <label htmlFor="scrollbarBorderRadius">
                            Scrollbar Border Radius
                        </label>
                        <div className="flex justify-center w-full">
                            <button>-</button>
                            <input
                                className="w-10 h-10 p-2 rounded-md"
                                id="scrollbarBorderRadius"
                                type="text"
                                {...register("scrollbarBorderRadius")}
                            />
                            <button>+</button>
                        </div>
                    </li>
                    <li>
                        <label htmlFor="thumbBorderWidth">
                            Thumb Border Width
                        </label>
                        <div className="flex justify-center w-full">
                            <button>-</button>
                            <input
                                className="w-10 h-10 p-2 rounded-md"
                                id="thumbBorderWidth"
                                type="text"
                                {...register("thumbBorderWidth")}
                            />
                            <button>+</button>
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
