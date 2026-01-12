import { upcomingEvent } from "@/data/events";

export default function UpcomingPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Event Poster */}
          <div className="aspect-[3/4] bg-gradient-to-br from-orange-200 via-yellow-100 to-blue-200 rounded-lg overflow-hidden flex items-center justify-center">
            <div className="text-center p-8">
              <p className="text-xs uppercase tracking-widest text-gray-600 mb-2">
                {upcomingEvent.subtitle}
              </p>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
                {upcomingEvent.title}
              </h1>
              <p className="text-lg text-gray-700">{upcomingEvent.date}</p>
            </div>
          </div>

          {/* Event Details */}
          <div className="space-y-8">
            <div>
              <h2 className="text-sm font-semibold text-gray-900 mb-2">
                Got more to say?
              </h2>
              <p className="text-sm text-gray-600">
                So much left to say. How do you fit it all in a little sentence?
                Well, this might require something a little... longer.
              </p>
            </div>

            <div>
              <h2 className="text-sm font-semibold text-gray-900 mb-2">
                How often are your events?
              </h2>
              <p className="text-sm text-gray-600">
                From time to time we welcome our community to join us at our events,
                of which anyone is welcome. We like to have us there for the vibe at
                the end. Let that speak of our philosophy. Or simply reach out via Instagram.
              </p>
            </div>

            <div>
              <h2 className="text-sm font-semibold text-gray-900 mb-2">
                Have a skill?
              </h2>
              <p className="text-sm text-gray-600">
                You can use it! If you want to lend help or partner up, feel free to
                pop by. Drop a message and a voice message on IG. Also, how often
                are your events? Calendar is busy.
              </p>
            </div>

            <div className="pt-4">
              <p className="text-sm text-gray-500 italic">
                See you there.<br />
                love maple xo
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
