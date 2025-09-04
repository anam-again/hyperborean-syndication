import React from "react";
import { AnchorHTMLAttributes } from "react";

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {}

const RedLink = (props: Props) => {
    return <a className="text-red-800 active:text-red-200 hover:text-red-500" {...props}>
        {props.children}
    </a>
}

export default RedLink;