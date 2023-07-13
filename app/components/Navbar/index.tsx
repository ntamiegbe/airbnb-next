'use client';

import Image from "next/image";
import Container from "../Container"

const Navbar = () => {
    return (
        <div className="w-full fixed z-10 shadow-sm bg-white">
            <div className="py-4">
                <Container>
                    <div className="flex items-center justify-between gap-3">
                        <Image alt="Logo" className="hidden md:block cursor-pointer" src="/images/logo.png" height="100" width="100" />
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Navbar