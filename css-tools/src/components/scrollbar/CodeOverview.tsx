import { useEffect, useRef } from "react";

type Type_props = {
    watch: any;
}
export default function CodeOverview(props:Type_props) {
    const scrollBarRef = useRef(null);
    const { watch } = props;
    useEffect(() => {
        if (scrollBarRef.current) {
            scrollBarRef.current.style = `
                --sb-thumb-color: ${watch("thumbColor")};
                --sb-track-color: ${watch("trackColor")};
                --sb-width: ${watch("scrollbarWidth")}px;
                --sb-track-border: ${watch("scrollbarBorderRadius")}px;
                --sb-track-thumb: ${watch("thumbBorderWidth")}px;
            `
        }
    }, [ watch("thumbColor"), watch("trackColor"), watch("scrollbarWidth"), watch("scrollbarBorderRadius"), watch("thumbBorderWidth")]);
    return (
        <section>
            overview
            
            <code>
                <pre ref={scrollBarRef} className="scroll-bar overflow-y-scroll max-h-80
                text-xs p-2 bg-neutral-800 text-neutral-300 rounded-md 
                ">
{`
.scroll-bar {
    --sb-thumb-color: ${watch("thumbColor")};
    --sb-track-color: ${watch("trackColor")};
    --sb-width: ${watch("scrollbarWidth")}px;
    --sb-track-border: ${watch("scrollbarBorderRadius")}px;
    --sb-track-thumb: ${watch("thumbBorderWidth")}px;
}

.scroll-bar::-webkit-scrollbar {
    width: var(--sb-width);
}

.scroll-bar::-webkit-scrollbar-track {
    background: var(--sb-track-color);
    border-radius: var(--sb-track-border);
}

.scroll-bar::-webkit-scrollbar-thumb {
    background: var(--sb-thumb-color);
    border-radius: var(--sb-track-thumb);
}

@supports not selector(::-webkit-scrollbar) {
    .scroll-bar {
        scrollbar-color: var(--sb-thumb-color) var(--sb-track-color);
    }
}
`}
                </pre>
            </code>
        </section>
    );
}