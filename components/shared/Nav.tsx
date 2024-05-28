"use client";

import { useState, useEffect } from "react";
import { useAnimate, stagger, motion } from "framer-motion";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

function Nav() {
    return (
        <div className="flex flex-col items-center justify-center">
            <Menu>
                <MenuButton className="mx-auto my-0 text-center p-1 rounded-xl">
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
                <MenuItems
                    anchor="bottom"
                    className="flex flex-col text-md md:text-md mx-auto my-0 gap-2 justify-center overflow-clip whitespace-break-spaces bg-custom8008-main-color w-fit"
                >
                    <MenuItem>
                        <p className="block data-[focus]:underline cursor-pointer">Products</p>
                    </MenuItem>
                    <MenuItem>
                        <p className="block data-[focus]:underline cursor-pointer">About Us</p>
                    </MenuItem>
                    <MenuItem>
                        <p className="block data-[focus]:underline cursor-pointer">Contact Us</p>
                    </MenuItem>
                </MenuItems>
            </Menu>
        </div>
    );
}
export default Nav;
