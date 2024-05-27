import "./scrollbar.css";

import hexToHSL from "@/utils/hexToHSL";
import { useEffect, useRef } from "react";

type Type_props = {
    watch: any;
}
export default function CodeOverview(props:Type_props) {
    const scrollBarRef = useRef(null);
    const { watch } = props;
    useEffect(() => {
        if (scrollBarRef.current) {
            // @ts-ignore
            scrollBarRef.current.style = `
                --sb-thumb-color: ${hexToHSL(watch("thumbColor"))};
                --sb-track-color: ${hexToHSL(watch("trackColor"))};
                --sb-width: ${watch("scrollbarWidth")}px;
                --sb-track-border: ${watch("scrollbarBorderRadius")}px;
                --sb-track-thumb: ${watch("thumbBorderWidth")}px;
                --sb-width-type: ${watch("widthType")?"thin":"auto"};
            `
        }
    }, [ watch("thumbColor"), watch("trackColor"), watch("scrollbarWidth"), watch("scrollbarBorderRadius"), watch("thumbBorderWidth"),watch("widthType")]);
    return (
        <section>
            overview
            
            <code>
                <pre ref={scrollBarRef} className="scroll-bar overflow-y-scroll max-h-80 pb-52
                text-xs p-2 bg-neutral-800 text-neutral-300 rounded-md 
                ">
{watch("widthType")?`
/* scrollbar-width thin */
.scroll-bar {
    --sb-thumb-color: ${hexToHSL(watch("thumbColor"))};
    --sb-track-color: ${hexToHSL(watch("trackColor"))};
    --sb-width-type: thin;

    overflow-y: scroll;
}
@supports (scrollbar-width: auto) {
    .scroll-bar {
        scrollbar-color: hsl(var(--sb-thumb-color)) hsl(var(--sb-track-color));
        scrollbar-width: var(--sb-width-type);
    }
}


`:`

/* scrollbar-width auto */
.scroll-bar {
    --sb-thumb-color: ${hexToHSL(watch("thumbColor"))};
    --sb-track-color: ${hexToHSL(watch("trackColor"))};
    --sb-width: ${watch("scrollbarWidth")}px;
    --sb-track-border: ${watch("scrollbarBorderRadius")}px;
    --sb-track-thumb: ${watch("thumbBorderWidth")}px;

    overflow-y: scroll;
}

.scroll-bar::-webkit-scrollbar {
    width: var(--sb-width);
}

.scroll-bar::-webkit-scrollbar-track {
    background-color: hsl(var(--sb-track-color));
    border-radius: var(--sb-track-border);
}

.scroll-bar::-webkit-scrollbar-thumb {
    background-color: hsl(var(--sb-thumb-color));
    border-radius: var(--sb-track-thumb);
}


.scroll-bar::-webkit-scrollbar-thumb:hover {
    background-color: hsl(var(--sb-thumb-color), 0.8);
}
.scroll-bar::-webkit-scrollbar-thumb:active {
    background-color: hsl(var(--sb-thumb-color), 0.5);
}

/* firefox */
@supports not selector(::-webkit-scrollbar) {
    .scroll-bar {
        scrollbar-color: hsl(var(--sb-thumb-color)) hsl(var(--sb-track-color));
    }
}
`}

                </pre>
            </code>
        </section>
    );
}