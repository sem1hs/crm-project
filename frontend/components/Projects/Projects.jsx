"use client";
import Loader from "@/components/Loader/Loader";
import useGetAllProjects from "@/hooks/useGetAllProjects";
import ProjectCard from "@/components/Projects/ProjectCard";

const Companies = () => {
  const { data: projects, isLoading } = useGetAllProjects();

  return (
    <section className="py-20">
      <div className="max-w-screen-2xl mx-auto px-16 py-18">
        <h1 className="text-primaryBg font-extrabold text-5xl">
          Aktif Projeler
        </h1>
        <p className="text-xl leading-tight text-gray-500 mt-8 max-w-5xl">
          Aktif projeler bölümü, üzerinde çalışılan tüm projelerin anlık
          durumlarını ve gelişmelerini takip etmenizi sağlar. Proje aşamaları,
          sorumlu ekip üyeleri ve son teslim tarihleri gibi önemli bilgileri
          burada bulabilirsiniz. İşlerinizi düzenli ve şeffaf bir şekilde
          yöneterek projelerinizi zamanında ve verimli bir şekilde tamamlayın.
        </p>

        <ul className="mt-12 grid grid-cols-3 gap-4">
          {isLoading && <Loader />}
          {!isLoading &&
            projects?.map((project, i) => (
              <ProjectCard key={i} info={project} />
            ))}
        </ul>
      </div>
    </section>
  );
};

export default Companies;
