"use client";
import CodeOverview from "@/components/scrollbar/CodeOverview";
import ControlsForm from "@/components/scrollbar/ControlsForm";
import { useForm } from "react-hook-form";

export default function page() {
    const {register,watch,getValues,setValue} = useForm({
        defaultValues: {
            thumbColor: "#8232c3",
            trackColor: "#444743",
            scrollbarWidth: 10,
            scrollbarBorderRadius: 5,
            thumbBorderWidth: 5,
            // thumbBorderColor: "#000000",
        }
    })
    return (
        <>
            <h1>Scrollbar</h1>
            <div className="grid md:grid-cols-2 gap-4 p-4">
                <ControlsForm register={register} getValues={getValues} setValue={setValue}/>
                <CodeOverview watch={watch}/>
            </div>
        </>
    );
}