export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black font-sans">
      <header className="py-6 px-8 flex justify-between items-center border-b border-gray-300">
        <h1 className="text-3xl font-bold">Gérard El Bitar</h1>
        <a href="/CV_gerard_el_bitar.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Download CV</a>
      </header>

      <section className="w-full h-screen overflow-hidden relative">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/thumbs/frame000.jpg"
        >
          <source src="/hero_reel.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h2 className="text-white text-5xl font-semibold drop-shadow-xl">Translating lived experience into compelling film and sound</h2>
        </div>
      </section>

      <section className="py-16 px-8 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">About</h2>
        <p className="mb-6">
          I am Gérard, an award-winning director of the acclaimed documentary <em>The Stranger Within Me</em>, and a musician based in Beirut, Lebanon. I create work that resonates. As a composer, producer, and musician active in Beirut’s electronic scene, my work commits to leveraging visuals and sound—art—in the service of social expression.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Selected Works</h2>

        <figure className="mb-12">
          <video
            className="w-full border border-gray-300"
            preload="none"
            controls
            muted
            playsInline
            poster="/thumbs/frame000.jpg"
          >
            <source src="/hero_reel.mp4" type="video/mp4" />
          </video>
          <figcaption className="mt-2 text-sm text-gray-600">Hero Reel — A journey through intimate filmmaking and activism.</figcaption>
        </figure>

        {/* Add more <figure>...</figure> blocks for additional videos */}
      </section>

      <footer className="bg-gray-100 py-6 px-8 text-center text-sm text-gray-600">
        &copy; {new Date().getFullYear()} Gérard El Bitar — All rights reserved.
      </footer>
    </main>
  );
}
