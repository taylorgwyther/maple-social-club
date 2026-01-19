export default function Home() {
  return (
    <div className="font-[family-name:var(--font-poppins)]">
      <section className="mx-auto max-w-2xl px-8 lg:px-16 pt-[70px] pb-[140px]">
        {/* Lyrics Above Video */}
        <div className="text-sm font-light text-[#002C45] mb-8 space-y-1">
          <p className="flex justify-between"><span>Be</span><span>young,</span><span>be</span><span>foolish,</span><span>but</span><span>be</span><span>happy</span></p>
          <p>Be young, be foolish, but be happy</p>
          <p className="flex justify-between"><span>Don&apos;t</span><span>let</span><span>the</span><span>rain</span><span>get</span><span>you</span><span>down</span></p>
          <p className="flex justify-between"><span>It&apos;s</span><span>a</span><span>waste</span><span>of</span><span>time</span><span>(a</span><span>waste</span><span>of</span><span>time)</span></p>
          <p className="flex justify-between"><span>Have</span><span>your</span><span>fun,</span><span>live</span><span>everyday</span></p>
          <p>In the bright sunshine (a bright sunshine)</p>
        </div>

        {/* Video Player */}
        <div className="overflow-hidden my-16 scale-[1.2] origin-center p-4" style={{ backgroundImage: "url('/yellow 2.PNG')", backgroundSize: "cover", backgroundPosition: "center" }}>
          <video
            className="w-full aspect-video object-cover rounded"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/best of VHS.mov" type="video/quicktime" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Lyrics Below Video */}
        <div className="text-sm font-light text-[#002C45] space-y-1">
          <p className="flex justify-between"><span>Be</span><span>young,</span><span>be</span><span>foolish,</span><span>but</span><span>be</span><span>happy</span></p>
          <p>Be young, be foolish, but be happy</p>
          <p className="flex justify-between"><span>Same</span><span>old</span><span>story</span><span>all</span><span>over</span><span>the</span><span>world</span></p>
          <p>Girl meets boy and boy meets girl</p>
          <p className="flex justify-between"><span>So,</span><span>be</span><span>young,</span><span>be</span><span>foolish,</span><span>but</span><span>be</span><span>happy</span></p>
          <p>Be young, be foolish, but be happy</p>
          <p className="flex justify-between"><span>Don&apos;t</span><span>let</span><span>love</span><span>slip</span><span>away</span><span>(slip</span><span>away)</span></p>
          <p>Live your life for today (for today)</p>
          <p>Life is too short to worry about unimportant things (unimportant things)</p>
          <p className="flex justify-between"><span>Reach</span><span>for</span><span>the</span><span>sky,</span><span>touch</span><span>your</span><span>star</span></p>
          <p>And then you find your dream (find your dream)</p>
          <p className="flex justify-between"><span>Because</span><span>dreamin&apos;</span><span>alone,</span><span>it&apos;s</span><span>a</span><span>shame</span><span>indeed</span></p>
          <p>But if you got love that&apos;s all you need</p>
          <p className="flex justify-between"><span>So,</span><span>be</span><span>young,</span><span>be</span><span>foolish,</span><span>girl</span><span>be</span><span>happy</span></p>
          <p>Baby, be young, foolish, let&apos;s be happy</p>
          <p className="flex justify-between"><span>Be</span><span>young,</span><span>be</span><span>foolish,</span><span>girl</span><span>be</span><span>happy</span></p>
          <p>Baby be young, foolish, let&apos;s be happy</p>
          <p className="flex justify-between"><span>Baby</span><span>be</span><span>young,</span><span>foolish</span><span>and</span><span>happy</span></p>
          <p>Be young, be foolish, let&apos;s be happy</p>
        </div>
      </section>
    </div>
  );
}
