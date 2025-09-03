import React, { ReactNode } from 'react';
import AppearTransitionComponent from './AppearTransitionComponent';

interface Props {
    dates: string,
    title: string,
    tags: string[],
    children: ReactNode
}

const MainExperienceCard = (props: Props) => {
    return (
        <AppearTransitionComponent>
            <div className="mt-4 mb-8 group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 border lg:max-w-xl hover:lg:bg-slate-100 [&_h1]:hover:text-slate-950" >
                <div className="z-10 my-4 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2 mx-4" >
                    {props.dates}
                </div>
                < div className="z-10 sm:col-span-6 my-4 mx-4" >
                    <h1 className="text-slate-600" > <b>{props.title}</b></h1 >
                    <div>
                        {props.children}
                    </div>
                    <ul className="mt-2 flex flex-wrap" >
                        {props.tags.map((tag) => {
                            return (
                                <li className="mr-1.5 mt-2" > <div className="flex items-center px-3 py-1 text-xs font-medium leading-5 border" > {tag} </div></li >
                            )
                        })}
                    </ul>
                </div>
            </div>
        </AppearTransitionComponent>
    );
}

export default MainExperienceCard;