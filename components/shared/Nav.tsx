"use client";

import { Tab } from "@headlessui/react";

function Nav() {
    return (
        <Tab.Group>
            <Tab.List className="flex text-xl mx-4 my-0">
                <Tab>Tab 1</Tab>
                <Tab>Tab 2</Tab>
                <Tab>Tab 3</Tab>
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
