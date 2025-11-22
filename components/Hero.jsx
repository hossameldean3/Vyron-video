
'use client';
export default function Hero() {
  return (
    <section className="min-h-screen bg-background text-white px-6 py-20">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-vyronStart to-vyronEnd bg-clip-text text-transparent">
            VYRON — Future in Motion
          </h1>
          <p className="text-textLight mb-6">Create stunning AI videos in seconds.</p>
          <div className="flex gap-4">
            <button className="px-5 py-2 rounded-md bg-gradient-to-r from-vyronStart to-vyronEnd text-black font-semibold">Get Started</button>
            <button className="px-4 py-2 border border-gray-700 rounded">Join Waitlist</button>
          </div>
        </div>

        <div className="rounded-xl overflow-hidden shadow-2xl vyron-glow p-6" style={{background:"#061023"}}>
          <video src="/videos/demo-video.mp4" autoPlay loop muted playsInline className="w-full rounded" />
        </div>
      </div>
    </section>
  );
}
