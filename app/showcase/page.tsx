import React from "react";
import RecentAllProjects from "@/components/RecentAllProjects";
import Footer from "@/components/Footer";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";
import SecHero from "@/components/SecHero";
import { LinkPreviewDemo } from "@/components/LinkPreviewDemo";

const showcase = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <SecHero />
        <LinkPreviewDemo />
        <RecentAllProjects />
        <Footer />
      </div>
    </main>
  );
};

export default showcase;
