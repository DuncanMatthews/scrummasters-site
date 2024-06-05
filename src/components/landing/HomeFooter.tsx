import Link from "next/link";

const HomeFooter = () => {
  return (
    <footer className="flex flex-col items-center justify-between px-8 py-8 text-gray-700 bg-gray-100 sm:px-20 md:px-40">
      <div className="grid justify-between w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {/* About */}
        <div className="flex flex-col gap-4">
          <h4 className="text-lg font-bold">About</h4>
          <p>
            ScrumMasterHub is an online learning platform dedicated to empowering Scrum Masters and fostering a vibrant Scrum community.
          </p>
          <Link href="/about">
            Learn More
          </Link>
        </div>
        {/* Courses */}
        <div className="flex flex-col gap-4">
          <h4 className="text-lg font-bold">Courses</h4>
          <Link href="/courses/scrum-fundamentals">
            Scrum Fundamentals
          </Link>
          <Link href="/courses/agile-methodologies">
            Agile Methodologies
          </Link>
          <Link href="/courses/scrum-certification">
            Scrum Master Certification
          </Link>
        </div>
        {/* Community */}
        <div className="flex flex-col gap-4">
          <h4 className="text-lg font-bold">Community</h4>
          <Link href="forums">
            Forums
          </Link>
          <Link href="/events">
            Events
          </Link>
          <Link href="/blog">
            Blog
          </Link>
        </div>
        {/* Contact */}
        <div className="flex flex-col gap-4">
          <h4 className="text-lg font-bold">Contact</h4>
          <Link href="/contact">
            Contact Us
          </Link>
          <Link href="/faq">
            FAQ
          </Link>
          <div className="flex gap-4">
            <Link href="https://facebook.com/your-page">
              <i className="fab fa-facebook"></i>
            </Link>
            <Link href="https://twitter.com/your-handle">
              <i className="fab fa-twitter"></i>
            </Link>
            <Link href="https://linkedin.com/in/your-profile">
              <i className="fab fa-linkedin"></i>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center w-full mt-8">
        &copy; {new Date().getFullYear()} scrummaster.io All rights reserved.
      </div>
    </footer>
  );
};

export default HomeFooter;