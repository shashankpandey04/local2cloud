import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-10">
      
      {/* Navbar */}
      <nav className="flex justify-between items-center mb-16">
        <h1 className="text-xl font-bold">YourName</h1>
        <div className="space-x-6 text-sm">
          <a href="#about" className="hover:text-gray-400">About</a>
          <a href="#projects" className="hover:text-gray-400">Projects</a>
          <a href="#contact" className="hover:text-gray-400">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="text-center mb-20">
        <h2 className="text-4xl md:text-6xl font-bold mb-4">
          Hey, I'm YourName 👋
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          I build modern web apps using Next.js, TypeScript, and cloud tech.
        </p>
      </section>

      {/* About Section */}
      <section id="about" className="mb-20">
        <h3 className="text-2xl font-semibold mb-4">About Me</h3>
        <p className="text-gray-400 max-w-2xl">
          I'm a developer passionate about building scalable and user-friendly applications.
          Currently exploring full-stack development, cloud, and system design.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="mb-20">
        <h3 className="text-2xl font-semibold mb-6">Projects</h3>

        <div className="grid md:grid-cols-2 gap-6">
          
          {/* Project Card */}
          <div className="border border-gray-800 p-5 rounded-xl hover:border-gray-600 transition">
            <h4 className="text-lg font-semibold mb-2">Project One</h4>
            <p className="text-gray-400 text-sm mb-3">
              Short description of your project.
            </p>
            <a href="#" className="text-blue-400 text-sm">View Project →</a>
          </div>

          <div className="border border-gray-800 p-5 rounded-xl hover:border-gray-600 transition">
            <h4 className="text-lg font-semibold mb-2">Project Two</h4>
            <p className="text-gray-400 text-sm mb-3">
              Another cool thing you built.
            </p>
            <a href="#" className="text-blue-400 text-sm">View Project →</a>
          </div>

        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="text-center">
        <h3 className="text-2xl font-semibold mb-4">Contact</h3>
        <p className="text-gray-400 mb-4">
          Wanna build something together?
        </p>
        <a
          href="mailto:youremail@example.com"
          className="bg-white text-black px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-200"
        >
          Say Hello
        </a>
      </section>

      {/* Footer */}
      <footer className="mt-20 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} YourName. All rights reserved.
      </footer>

    </main>
  );
}