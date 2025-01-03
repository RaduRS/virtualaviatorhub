import React from "react";
import Link from "next/link";
import Image from "next/image";
const Header = () => {
  return (
    <header className="flex justify-center items-center mt-6">
      <Link href="/">
        <Image
          src="/virtual-aviator-hub-logo.png"
          alt="Virtual Aviator Hub Logo"
          width={150} // Set width based on the logo size
          height={50} // Set height based on the logo size
          className="cursor-pointer"
          priority // Load the logo eagerly for better performance
        />
      </Link>
    </header>
  );
};

export default Header;
