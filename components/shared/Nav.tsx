"use client";

import { Tab } from "@headlessui/react";

function Nav() {
    return (
        <Tab.Group>
            <Tab.List className="flex text-xl mx-auto my-0 gap-4 justify-center">
                <Tab className=" outline outline-slate-400 hover:rounded-lg">Tab 1 Products</Tab>
                <Tab className=" outline outline-slate-400 hover:rounded-lg">Tab 2 About Us</Tab>
                <Tab className=" outline outline-slate-400 hover:rounded-lg">Tab 3 Threads</Tab>
            </Tab.List>
            <Tab.Panels className="p-4">
                <Tab.Panel>Panel 1</Tab.Panel>
                <Tab.Panel>Panel 2</Tab.Panel>
                <Tab.Panel>Panel 3</Tab.Panel>
            </Tab.Panels>
        </Tab.Group>
    );
}
export default Nav;
