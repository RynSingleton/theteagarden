import * as Icons from "lucide-react";
import { type IconName } from "./types";

interface NavIconProps extends React.ComponentProps<"div"> {
    icon: IconName;
  }
  
function NavIcon({icon, className, ...props}: NavIconProps) {
    
    const IconComponent = Icons[icon] as React.FC<{ className?: string }>;

    if (!IconComponent) return null;

    return (  
        <div className={className} {...props}>
            <IconComponent/>
        </div>
    );
}

export default NavIcon;