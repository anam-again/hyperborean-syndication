// https://medium.com/@jacobvejlinjensen/how-to-create-a-smooth-appear-on-scroll-transition-with-tailwind-css-and-react-82f2a32ab295

'use client'

import React, { useEffect, useRef, useState } from "react";
import { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

const AppearTransitionComponent = (props: Props) => {
    const elemRef = useRef<HTMLDivElement>(null);

    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
        console.log('asdf')
        if (elemRef.current === null) return;
        const observer = new IntersectionObserver(([entry]) => {
            setIntersecting(entry.isIntersecting)
            if (entry.isIntersecting) {
                observer.disconnect(); // only once
            }
        });

        observer.observe(elemRef.current);
        return () => {
            observer.disconnect();
        };
    }, [elemRef]);

    return (
        <div ref={elemRef} className={`transition-opacity ease-in duration-200 ${isIntersecting ? "opacity-100" : "opacity-0"}`}>
            {props.children}
        </div>
    )
}

export default AppearTransitionComponent;