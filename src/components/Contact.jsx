export default function Contact() {
  return (
    <section className="px-6 py-16 text-center">
      <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
      <p className="text-gray-400 mb-4">Email me at: <a href="mailto:you@example.com" className="text-white underline">you@example.com</a></p>
      <div className="flex justify-center gap-4 mt-4">
        <a href="#" className="text-gray-400 hover:text-white">LinkedIn</a>
        <a href="#" className="text-gray-400 hover:text-white">GitHub</a>
      </div>
    </section>
  );
}
