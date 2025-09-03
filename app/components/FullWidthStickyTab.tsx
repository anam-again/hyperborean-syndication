import React from "react";
import { ReactNode } from "react";

interface Props {
    children: ReactNode;
    id?: string;
}

const FullWidthStickyTab = (props: Props) => {
    return (
        <div id={props.id} className="z-20 sm:top-0 sm:mb-4 sm:bg-slate-200 lg:bg-transparent px-6 py-5 md:relative w-full sm:sticky">
            <h2 className="text-sm font-bold uppercase tracking-widest sm:text-slate-900">
                {props.children}
            </h2>
        </div>
    )
};

export default FullWidthStickyTab;