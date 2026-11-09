import React from 'react';

const Footer = () => {
    return (
     <footer className="px-5 py-10 md:px-10 md:py-[64px]">

<div className="grid grid-cols-1 gap-10 md:grid-cols-5">

{/* Brand Section */}
<div className="md:col-span-2">
    <div className="flex justify-center md:justify-start">
        <img src="logo-text.png" alt="Dev Stack" />
    </div>

    <p className="mx-auto mt-4 max-w-sm text-center text-xs leading-5 text-gray-500 md:mx-0 text-left text-sm leading-6">
        Curated tools, technologies, and resources for developers building
        modern software.
    </p>

    <ul className="mt-5 flex justify-center gap-5 font-medium text-xs text-gray-600 md:justify-start md:gap-8 md:text-sm">
        <li>GitHub</li>
        <li>Twitter</li>
        <li>LinkedIn</li>
    </ul>
</div>

{/* Footer Links */}
<div className="hidden md:text-left md:grid md:grid-cols-3  md:col-span-3 md:gap-6">

    <div>
        <h3 className="mb-4 text-[12px] font-bold text-black">PRODUCT</h3>
        <ul className="space-y-3 text-sm text-gray-500">
            <li>Home</li>
            <li>Technologies</li>
            <li>Projects</li>
        </ul>
    </div>

    <div>
        <h3 className="mb-4 text-[12px] font-bold text-black">COMPANY</h3>
        <ul className="space-y-3 text-sm text-gray-500">
            <li>About</li>
            <li>Contact</li>
            <li>Careers</li>
        </ul>
    </div>

    <div>
        <h3 className="mb-4 text-[12px] font-bold text-black">LEGAL</h3>
        <ul className="space-y-3 text-sm text-gray-500">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
        </ul>
    </div>

</div>
</div>
        
<div className="mt-7 flex items-center justify-between gap-2 border-t border-gray-200 pt-5 text-[10px] text-gray-400 md:mt-10 md:text-xs">

<p className="whitespace-nowrap">
    © 2026 Dev Stack. All rights reserved.
</p>

<div className="flex shrink-0 gap-2 md:gap-5">
    <p>Privacy</p>
    <p>Terms</p>
</div>

</div>
     </footer>
    );
};

export default Footer;