export default function Projects() {
  return (
    <section className="px-6 py-16 bg-gray-900">
      <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
      <div className="grid gap-8 md:grid-cols-2">
        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform">
          <h3 className="text-xl font-semibold mb-2">Project One</h3>
          <p className="text-gray-400">A brief description of the project and tech stack.</p>
        </div>
      </div>
    </section>
  );
}
