export default function UpcomingPage() {
  return (
    <div className="font-[family-name:var(--font-poppins)]">
      <section className="mx-auto max-w-2xl px-8 lg:px-16 pt-[70px] pb-[140px]">
        {/* Event Poster with Orange Frame */}
        <div
          className="overflow-hidden mt-32 mb-8 scale-[1.2] origin-center p-4"
          style={{
            backgroundImage: "url('/orange grain.png')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          <img
            src="/great spacing bondiii.png"
            alt="Long Weekend Bondi Day Party - Saturday, January 24, 3-8PM at Bondi Diggers"
            className="w-full object-cover rounded"
          />
        </div>

        {/* FAQ Section */}
        <div className="text-sm text-[#002C45] mt-24 max-w-xl mx-auto text-justify leading-relaxed font-light">
          <p>
            FAQ: <span className="font-bold">Do I need a ticket?</span> No, usually not. We do ask you to RSVP via our app, maple, so we can anticipate numbers & connect you to come cool people afterwards. <span className="font-bold">Who comes to maple social events?</span> in short: everyone is welcome. in long: we find our events to be most popular with young professionals (20-35 yr/olds). <span className="font-bold">What is the vibe?</span> Low pressure, high energy, kind people. <span className="font-bold">Can I come solo?</span> Sure can. If you want to meet folks prior to, we have a &apos;going solo&apos; chat on Instagram & pre-connection in-app. <span className="font-bold">How often do you host events?</span> 1-3 times a month.
          </p>
        </div>
      </section>
    </div>
  );
}
