import React from "react";
import ShowCaseProjects from "@/components/ShowCaseProjects";
import Footer from "@/components/Footer";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";
import SecHero from "@/components/SecHero";

const showcase = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <SecHero />
        <ShowCaseProjects />
        <Footer />
      </div>
    </main>
  );
};

export default showcase;
