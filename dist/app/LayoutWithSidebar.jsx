"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = LayoutWithSidebar;
const google_1 = require("next/font/google");
require("./globals.css");
const sidebar_1 = require("@/components/ui/sidebar");
const AppSidebar_1 = require("@/components/AppSidebar");
const cormorantGaramond = (0, google_1.Cormorant_Garamond)({
    subsets: ["latin"],
    variable: "--font-cormorant-garamond",
    weight: ["400", "500", "600"],
});
const poppins = (0, google_1.Poppins)({
    subsets: ["latin"],
    variable: "--font-poppins",
    weight: ["400", "500", "600"],
});
function LayoutWithSidebar({ children, }) {
    return (<sidebar_1.SidebarProvider>
      <AppSidebar_1.AppSidebar />
      <main className={`${cormorantGaramond.variable} ${poppins.variable} bg-neutral-100 antialiased font-poppins w-full`}>
        <sidebar_1.SidebarTrigger />
        {children}
      </main>
    </sidebar_1.SidebarProvider>);
}
