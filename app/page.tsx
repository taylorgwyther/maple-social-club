export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section with Video */}
      <section className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Video Player */}
          <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
            <div className="text-center text-gray-400">
              <svg className="mx-auto h-16 w-16 mb-2" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
              </svg>
              <p className="text-sm">Video Player</p>
            </div>
          </div>

          {/* Text Content */}
          <div className="flex flex-col justify-center space-y-6">
            <div className="grid grid-cols-3 gap-4 text-sm text-gray-600">
              <div>
                <p>Be young, be foolish, but be happy. So young. So foolish. But so happy.</p>
              </div>
              <div>
                <p>Out for the sun. Out for the warmth. Out for the vibes.</p>
              </div>
              <div>
                <p>Let the good times roll.</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 text-sm text-gray-600">
              <div>
                <p>Celebrate everyday pleasures - like an escape to learn about whimsical things, that feel so right in the moment.</p>
              </div>
              <div>
                <p>So young. So foolish. But so happy. Always exploring. Always learning.</p>
              </div>
              <div>
                <p>The summer heat. The smell of sunscreen. The sounds of laughter.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Decorative Elements */}
      <div className="fixed left-4 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-4">
        <div className="w-6 h-6 rounded-full bg-orange-400"></div>
        <div className="w-6 h-6 rounded-full bg-yellow-400"></div>
        <div className="w-6 h-6 rounded-full bg-pink-400"></div>
        <div className="w-6 h-6 rounded-full bg-purple-400"></div>
        <div className="w-6 h-6 rounded-full bg-blue-400"></div>
      </div>
    </div>
  );
}
