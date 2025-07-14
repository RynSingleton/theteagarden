import { SignOutButton } from "@clerk/nextjs"
import NavItem from "./navitems";
import { IconName } from "./types";

export type DashboardView = 'LOG' | 'ADJUST' | 'SHOP' | 'JOURNAL';

interface NavProps {
    activeView: DashboardView;
    onSelect: (view: DashboardView) => void;
}

const navItems: { label: string; view: DashboardView, icon: IconName }[] = [
  { label: 'Log', view: 'LOG', icon: 'Coffee' },
  { label: 'Adjust', view: 'ADJUST', icon: 'Fence' },
  { label: 'Shop', view: 'SHOP', icon: 'Coins' },
  { label: 'Journal', view: 'JOURNAL', icon: 'NotebookPen' }
];

function DashNav({activeView, onSelect}: NavProps) {

    return (
        <nav className="border p-4 rounded-md">
            <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                    <NavItem 
                    key={item.view}
                    icon={item.icon} 
                    name={item.label}
                    onClick={() => onSelect(item.view)}
                    className={item.view === activeView
                        ? 'bg-stone-800 text-white font-sans'
                        : 'hover:bg-stone-700 transition'}
                    />
                ))}
                <SignOutButton/>
            </div>
        </nav>
    )
}

export { DashNav }