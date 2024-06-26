import BreadCrumbs from "@/components/UI/BreadCrumbs";
import ProjectsTabs from "@/components/UI/ProjectsTabs";

const ProjectsPage = () => {
  return (
    <>
      <BreadCrumbs
        title="Projects"
        items={[
          { title: "Home", path: "/" },
          { title: "Projects", path: "/projects" },
        ]}
      />
      <main className="bg-black min-h-[70vh]">
        <div className="py-12 px-4 lg:px-12">
          <div className="text-white mb-12 max-w-[900px] mx-auto text-center px-4">
            <p className="text-justify">
              Since 2011, MODAD Group has been offering an extensive range of
              projects that cater to the ever-evolving needs of the industry.
              Dive into the showcase of transformative endeavors, where the
              collective strength of MODAD Group unfolds through a myriad of
              innovative and impactful projects, each a testament to our
              commitment to excellence.
            </p>
          </div>
          <div className="mb-12">
            <ProjectsTabs />
          </div>
        </div>
      </main>
    </>
  );
};

export default ProjectsPage;
