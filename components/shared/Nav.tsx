"use client";

import { useState, useEffect } from "react";
import { useAnimate, stagger, motion } from "framer-motion";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

function Nav() {
    return (
        <Menu>
            <MenuButton>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                </svg>
            </MenuButton>
            <MenuItems anchor="bottom" className="flex flex-col text-md md:text-md mx-auto my-0 gap-2 justify-center overflow-clip whitespace-break-spaces">
                <MenuItem>
                    <p className="block data-[focus]:underline">Tab 1 Products</p>
                </MenuItem>
                <MenuItem>
                    <p className="block data-[focus]:underline">Tab 2 About Us</p>
                </MenuItem>
                <MenuItem>
                    <p className="block data-[focus]:underline">Tab 3 Threads</p>
                </MenuItem>
            </MenuItems>
        </Menu>
    );
}
export default Nav;
