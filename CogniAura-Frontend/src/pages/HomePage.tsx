import { Link } from "react-router-dom";
export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#56E0E0]/10 via-white to-[#02607E]/10">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 bg-white shadow-md">
        <div className="text-xl font-bold text-[#02607E] flex items-center gap-2">
          <img src="/hero-img.png" alt="CogniAura" className="h-8" />
          CogniAura
        </div>
        <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
          <Link to="/" className="hover:text-[#02607E]">Home</Link>
          <li>
            <a href="#about" className="hover:text-[#02607E]">About Us</a>
          </li>
          <Link to="/predictASD" className="hover:text-[#02607E]">Assessment</Link>
          <li>Activities</li>
          <li>
            <a href="#resources" className="hover:text-[#02607E]">Resources</a>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-center px-6 md:px-20 py-16 md:py-20 space-y-8 md:space-y-0">
        <div className="max-w-lg text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Empowering Every Mind: Tools for{" "}
            <span className="text-[#02607E]">Autism Support</span>, Growth, and
            Connection
          </h1>
          <p className="mt-4 text-gray-600 text-sm md:text-base">
            Welcome to CogniAura, your hub for autism support! Discover
            personalized resources, engaging games, and a caring community.
          </p>
          <button
            className="mt-6 px-6 py-3 bg-[#02607E] text-white rounded-lg shadow-md hover:bg-[#024e6a]"
            onClick={() => (window.location.href = "/predictASD")}
          >
            Get Started
          </button>
        </div>
        <div className="flex justify-center md:justify-end w-full md:w-auto">
          <img
            src="/hero-img.png"
            alt="Hero"
            className="w-60 md:w-80 lg:w-96"
          />
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="bg-[#EAF6F6] p-10 text-center md:text-left">
        <h2 className="text-3xl font-bold text-[#02607E]">About Us</h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto md:mx-0">
          CogniAura was created to make a difference in the lives of those with
          ASD and their families. Our platform is dedicated to providing real,
          practical support.
        </p>
        <div className="mt-8 flex flex-col md:flex-row gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-1/2">
            <h3 className="text-xl font-semibold">Our Mission</h3>
            <p className="mt-2 text-gray-600">
              Providing meaningful resources and tools to individuals with ASD
              and their families through educational content and interactive
              activities.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-1/2">
            <h3 className="text-xl font-semibold">Our Story</h3>
            <p className="mt-2 text-gray-600">
              We started CogniAura after realizing the difficulty in finding
              practical support for individuals with ASD. We listened, learned,
              and built a platform that provides real help.
            </p>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section id="resources" className="p-10 text-center">
        <h2 className="text-3xl font-bold text-[#02607E]">Resources</h2>
        <p className="mt-2 text-gray-600">
          Explore our curated resources to support individuals with ASD and
          their families.
        </p>
        <div className="mt-8 space-y-6 max-w-3xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center gap-4">
            <img src="/r1.png" alt="Parent's Journey" className="w-16 h-16" />
            <div>
              <h3 className="font-semibold">
                Navigating Life with Autism: A Parent’s Journey
              </h3>
              <p className="text-gray-600">
                A guide for parents on supporting their children through daily
                challenges and engaging strategies.
              </p>
              <button className="mt-2 text-[#02607E] underline">
                Read more
              </button>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center gap-4">
            <img
              src="/r2.png"
              alt="Sensory Sensitivities"
              className="w-16 h-16"
            />
            <div>
              <h3 className="font-semibold">
                Understanding Sensory Sensitivities in Autism
              </h3>
              <p className="text-gray-600">
                Explore how sensory processing issues affect individuals with
                ASD and how to create a comfortable environment.
              </p>
              <button className="mt-2 text-[#02607E] underline">
                Read more
              </button>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center gap-4">
            <img src="/r3.png" alt="Social Skills" className="w-16 h-16" />
            <div>
              <h3 className="font-semibold">
                Building Social Skills: Fun Activities for Children with Autism
              </h3>
              <p className="text-gray-600">
                A collection of engaging activities designed to help children
                with ASD develop social skills.
              </p>
              <button className="mt-2 text-[#02607E] underline">
                Read more
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 p-10 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-700">
          <div>
            <h2 className="font-bold text-lg text-[#02607E]">CogniAura</h2>
            <p className="mt-2">
              You've reached the end, but it’s not the end! Reach out, seek
              support, and prioritize your journey.
            </p>
          </div>
          <div>
            <h3 className="font-bold">Company</h3>
            <ul className="mt-2 space-y-2">
              <li>About</li>
              <li>Resources</li>
              <li>Assessments</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold">Contact</h3>
            <p className="mt-2">📞 +91 89123 45678</p>
            <p>📧 sam@cogniaura.com</p>
            <p>📍 India</p>
          </div>
        </div>
        <p className="text-center text-gray-500 mt-6">
          &copy; 2024 @cogniaura all rights reserved
        </p>
      </footer>
    </div>
  );
}
