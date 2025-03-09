import SidebarLink from "@/components/Docs/SidebarLink";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Docs Page - Intelion SaaS Platform",
  description: "Official documentation for Intelion's SaaS platform and IT services."
};

export default function DocsPage() {
  return (
    <>
      <section className="pb-16 pt-24 md:pb-20 md:pt-28 lg:pb-24 lg:pt-32">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-1/4">
              <div className="sticky top-[74px] rounded-lg border border-white p-4 shadow-solid-4 transition-all dark:border-strokedark dark:bg-blacksection">
                <ul className="space-y-2">
                  <SidebarLink />
                </ul>
              </div>
            </div>

            <div className="w-full px-4 lg:w-3/4">
              <div className="blog-details blog-details-docs shadow-three dark:bg-gray-dark rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
                <h1 className="text-xl font-bold text-black dark:text-white">Welcome to Intelion's Documentation</h1>

                <p className="text-body-color dark:text-body-color-dark text-base mt-4">
                  Welcome to the Intelion documentation! This guide will help you get started with our powerful SaaS solutions, IT services, and enterprise software offerings. 
                  Whether you're integrating with our platform or exploring the full scope of Intelion's services, you'll find everything you need here.
                </p>
                <p className="text-body-color dark:text-body-color-dark text-base mt-4">
                  For a deeper dive into our platform, setup instructions, and best practices, visit:{" "}
                  <b>
                    <a href="https://intelion.com/docs" className="text-blue-500 hover:underline">
                      intelion.com/docs
                    </a>
                  </b>{" "}
                  to explore full documentation, setup guides, and video tutorials.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
