type Type_props = {
    register: any;
    getValues: any;
    watch: any;
};
export default function ControlsForm(props: Type_props) {
    const { register, getValues ,watch} = props;
    return (
        <section>
            <h1>Settings</h1>
            <form onSubmit={(e) => e.preventDefault()}>
                <ul className="[&>li]:grid [&>li]:grid-cols-2 space-y-2">
                    <li>
                        <label htmlFor="thumbColor">Thumb Color</label>
                        <div className="flex gap-2 items-center w-full relative">
                            <input
                                className="w-full h-8 pl-2 pr-10 rounded-md "
                                id="thumbColor"
                                type="text"
                                {...register("thumbColor")}
                            />
                            <input
                                className="absolute right-0 outline-none h-8 w-8"
                                id="thumbColor"
                                type="color"
                                {...register("thumbColor")}
                            />
                        </div>
                    </li>
                    <li>
                        <label htmlFor="trackColor">Track Color</label>
                        <div className="flex gap-2 items-center w-full relative">
                            <input
                                className="w-full h-8 pl-2 pr-10 rounded-md "
                                id="trackColor"
                                type="text"
                                {...register("trackColor")}
                            />
                            <input
                                className="absolute right-0 outline-none h-8 w-8"
                                id="trackColor"
                                type="color"
                                {...register("trackColor")}
                            />
                        </div>
                    </li>

                    <li>
                        <label htmlFor="widthType">Scrollbar width type</label>
                        <input
                            className="ml-auto w-4 h-4"
                            id="widthType"
                            type="checkbox"
                            {...register("widthType")}
                        />
                    </li>
                    {!watch("widthType") && (
                    <>
                        <li>
                            <label htmlFor="scrollbarWidth">Scrollbar Width</label>
                            <div className="flex gap-2 items-center w-full">
                                <input
                                    className="w-full"
                                    id="scrollbarWidth"
                                    type="range"
                                    {...register("scrollbarWidth")}
                                    min={1}
                                    max={50}
                                />
                                <div className="w-8 h-8 border rounded-sm grid place-content-center">
                                    {getValues("scrollbarWidth")}
                                </div>
                            </div>
                        </li>
                        <li>
                            <label htmlFor="scrollbarBorderRadius">
                                Scrollbar Border Radius
                            </label>
                            <div className="flex gap-2 items-center w-full">
                                <input
                                    className="w-full"
                                    id="scrollbarBorderRadius"
                                    type="range"
                                    {...register("scrollbarBorderRadius")}
                                    min={0}
                                    max={25}
                                />
                                <div className="w-8 h-8 border rounded-sm grid place-content-center">
                                    {getValues("scrollbarBorderRadius")}
                                </div>
                            </div>
                        </li>
                        <li>
                            <label htmlFor="thumbBorderWidth">
                                Thumb Border Width
                            </label>
                            <div className="flex gap-2 items-center w-full">
                                <input
                                    className="w-full"
                                    id="thumbBorderWidth"
                                    type="range"
                                    {...register("thumbBorderWidth")}
                                    min={0}
                                    max={25}
                                />
                                <div className="w-8 h-8 border rounded-sm grid place-content-center">
                                    {getValues("thumbBorderWidth")}
                                </div>
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
                        
                    </>
                        
                    )}
                </ul>
            </form>
        </section>
    );
}
