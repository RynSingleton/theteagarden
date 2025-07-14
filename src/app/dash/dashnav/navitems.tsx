import React from "react";
import NavIcon from "./navicons";
import { type IconName } from "./types";

interface NavItemProps extends React.ComponentProps<"div"> {
    icon: IconName;
    name: String;
}

function NavItem({className, ...props} : NavItemProps) {
    return (
        <div className={`${className} flex gap-3 rounded-sm shadow-sm p-1.5`}{...props}>
            <NavIcon icon={props.icon}/>
            <span> {props.name} </span>
        </div>
    );
}

export default NavItem;