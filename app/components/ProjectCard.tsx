import Image from "next/image";
import Link from "next/link";
import React, { ReactNode } from "react"
import AppearTransitionComponent from "./AppearTransitionComponent";

interface InternalProjectCardProps {
    left: ReactNode;
    title: string;
    children: ReactNode;
    tags: string[];
    linkTo: string;
}

type ProjectCardType = Omit<InternalProjectCardProps, 'left'>;

interface YoutubeProjectCardProps extends ProjectCardType {
    youtubeSrc: string,
};

interface ImageProjectCardProps extends ProjectCardType {
    imgSrc: string,
    alt: string,
}

const InternalProjectCard = (props: InternalProjectCardProps) => {
    return (
        <AppearTransitionComponent>
        <div className="w-full md:w-2xl h-60 max-h-xxl grid grid-flow-col grid-cols-5 [&_h1]:hover:text-slate-950">
            {props.left}
            <div className="border col-span-3 p-4">
                <h1 className="text-slate-600 text-xs"><b><Link className="text-red-800 active:text-red-200 hover:text-red-500" href={props.linkTo}>{props.title}</Link></b></h1>
                <div className="h-full text-slate-800 text-sm [&_p]:indent-5 p-4 flex flex-col justify-between">
                    <div className="text-xs md:text-sm">
                        {props.children}
                    </div>
                    <ul className="mb-2 flex flex-wrap">
                        {props.tags.map((tag) => {
                            return (
                                <li className="mr-1.5 mt-2" > <div className="flex items-center px-2 py-.5 text-xs font-medium leading-5 border" > {tag} </div></li >
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
        </AppearTransitionComponent>
    )
}

const YoutubeProjectCard = (props: YoutubeProjectCardProps) => {
    return (
        <InternalProjectCard {...props} left={
            <div className="border col-span-2">
                <iframe className="w-full h-full" src={props.youtubeSrc} allowFullScreen />
            </div>
        } />
    )
}

const ImageProjectCard = (props: ImageProjectCardProps) => {
    return (
        <InternalProjectCard {...props} left={
            <Link href={props.linkTo} className="border col-span-2">
                <Image width={320} height={320} alt={props.alt} className="w-full h-full" src={props.imgSrc} />
            </Link>
        } />
    );
}


export { YoutubeProjectCard, ImageProjectCard }