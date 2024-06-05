import TagItem from "./sub_components/TagItem";

const Subjects = () => {
  return (
    <section className="flex flex-col items-center justify-center my-10 h-fit">
    <div className="flex flex-col items-center text-center gap-8 max-w-4xl">
      <h4 className="text-4xl font-bold leading-normal">
        Unlock Your Potential with Our Free Curated Courses
      </h4>
      <p className="text-lg">
        Dive into our meticulously curated selection of free courses, crafted by
        industry experts to provide you with an unparalleled learning experience.
        Whether you're a beginner or an experienced professional, our courses are
        designed to help you acquire valuable skills and stay ahead in your field.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <TagItem item="Scrum Fundamentals" />
        <TagItem item="Agile Methodologies" />
        <TagItem item="Scrum Master Certification" />
        <TagItem item="Scrum Team Dynamics" />
        <TagItem item="Sprint Planning" />
        <TagItem item="Backlog Management" />
        <TagItem item="Scrum Artifacts" />
        <TagItem item="Scrum Ceremonies" />
        <TagItem item="And More..." />
      </div>
    </div>
  </section>
  );
};

export default Subjects;
