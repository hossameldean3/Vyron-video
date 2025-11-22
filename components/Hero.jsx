'use client';
import React from 'react';

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-background text-white px-6 py-24 overflow-hidden">

      {/* خلفية ديناميكية */}
      <div className="animated-bg"></div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">

        {/* النص */}
        <div>
          <h1 className="fade-up text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-vyronStart to-vyronEnd bg-clip-text text-transparent">
            VYRON — Future in Motion
          </h1>

          <p className="fade-up-delay text-textLight text-lg mb-10">
            Create stunning AI-powered videos in seconds using next-generation rendering technology.
          </p>

          <div className="fade-up-delay2 flex gap-4">
            <button className="px-6 py-3 rounded-md bg-gradient-to-r from-vyronStart to-vyronEnd text-black font-semibold text-lg shadow-lg">
              Get Started
            </button>
            <button className="px-6 py-3 border border-gray-700 rounded-md text-lg">
              Join Waitlist
            </button>
          </div>
        </div>

        {/* الفيديو الاحترافي */}
        <div className="video-wrapper vyron-glow fade-up-delay2 p-1 rounded-2xl">
          <video
            src="/videos/demo-video.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="rounded-2xl w-full"
            style={{
              objectFit: "cover",
              filter: "brightness(1.12) contrast(1.12)",
            }}
          />
        </div>

      </div>
    </section>
  );
}
