import { getSVG, SVGNames } from "app/svgs/svgs";
import Link from "next/link";

interface Props {
    href: string;
    alt: string;
    svg: SVGNames;
}

const SVGIconElement = (props: Props) => {
    return (
        <Link href={props.href} className="[&_path]:fill-red-800 [&_path]:active:fill-red-200 [&_path]:hover:fill-red-500">
            {getSVG(props.svg, props)}
        </Link>
    );
}

export default SVGIconElement;