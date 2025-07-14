'use client'

import { DashboardView, DashNav } from "./dashnav/nav";
import { useState } from "react";
import Log from "./lowerdash/log";
import Adjust from "./lowerdash/adjust";
import Shop from "./lowerdash/shop";
import Journal from "./lowerdash/journal";

export default function Dashboard() {  
    const [view, setView] = useState<DashboardView>("LOG");

    return (
    <div className="flex grow">
        <nav className="flex-1">
            <DashNav activeView={view} onSelect={setView}/>
        </nav>
        <section className="flex-4 flex flex-col">
            <div className="flex-7">

            </div>
            <div className="flex-3">
                {view === 'LOG' && <Log/>}
                {view === 'ADJUST' && <Adjust />}
                {view === 'SHOP' && <Shop />}
                {view === 'JOURNAL' && <Journal />}
            </div>
        </section>
    </div>
  );
}
