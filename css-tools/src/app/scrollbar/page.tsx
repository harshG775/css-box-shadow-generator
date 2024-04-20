"use client";

import CodeOverview from "@/components/scrollbar/CodeOverview";
import ControlsForm from "@/components/scrollbar/ControlsForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const FormSchema = z.object({
    thumbColor: z.string(),
    trackColor: z.string(),
    scrollbarWidth: z.number(),
    scrollbarBorderRadius: z.number(),
    thumbBorderWidth: z.number(),
    // thumbBorderColor: z.string(),
})
export type FormType = z.infer<typeof FormSchema>
export default function page() {
    const {register,watch,getValues,setValue} = useForm({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            thumbColor: "hsl(0, 0%, 0%)",
            trackColor: "hsl(0, 0%, 100%)",
            scrollbarWidth: 10,
            scrollbarBorderRadius: 3,
            thumbBorderWidth: 3,
            // thumbBorderColor: "#000000",
            widthType: false,
        }
    })
    return (
        <>
            <h1>Scrollbar</h1>
            <div className="grid lg:grid-cols-2 gap-4 p-4 max-w-7xl mx-auto">
                <ControlsForm register={register} getValues={getValues} watch={watch}/>
                <CodeOverview watch={watch}/>
            </div>
        </>
    );
}