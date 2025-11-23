"use client"

import Link from "next/link"

export default function Page() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col">
      <header className="bg-black text-white py-6 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-lg md:text-xl font-light tracking-wide text-center">INNOVATION SYNERGY AI</h1>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="flex-1 flex items-center justify-center px-4 md:px-8 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light leading-tight mb-6">
            A Website That Books Customers For You
          </h1>
          <p className="text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto mb-8 font-extralight">
            Stop paying for a site that just sits there.
          </p>
          <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-12 font-light">
            Your new Smart Site captures leads instantly, follows up automatically, and protects your reputation 24/7 —
            all for one flat monthly price.
          </p>
          <div className="mb-8">
            <p className="text-3xl md:text-4xl font-light">$397/month. No setup fee.</p>
          </div>
          <Link
            href="#pricing"
            className="inline-block px-8 py-3 bg-black text-white border-2 border-black font-semibold tracking-widest uppercase transition-all duration-300 hover:bg-white hover:text-black"
          >
            GET STARTED
          </Link>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 md:py-20 px-4 md:px-8 bg-white border-t border-b border-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-light mb-6">Most businesses lose 50–70% of their leads.</h2>
          <p className="text-lg md:text-xl font-light leading-relaxed mb-4">
            Slow follow-up, missed calls, and outdated websites kill deals every single day.
          </p>
          <p className="text-xl md:text-2xl font-light">Your Smart Site fixes that automatically.</p>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-16 md:py-20 px-4 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-light mb-4">The Smart Site System</h2>
            <p className="text-lg md:text-xl font-light text-gray-600">
              Everything you need to capture, convert, and manage customers — done for you.
            </p>
          </div>

          <div className="space-y-12 md:space-y-16">
            {/* Feature 1 */}
            <div className="border-t border-gray-300 pt-8">
              <h3 className="text-2xl md:text-3xl font-light mb-4">1. Instant Lead Capture & Follow-Up</h3>
              <p className="text-base md:text-lg font-light leading-relaxed text-gray-700">
                Every form submission, every message, every missed call → gets an instant text back.
                <br />
                No waiting. No lost deals.
                <br />
                Just pure speed.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="border-t border-gray-300 pt-8">
              <h3 className="text-2xl md:text-3xl font-light mb-4">2. Missed Call Text-Back</h3>
              <p className="text-base md:text-lg font-light leading-relaxed text-gray-700">
                If a customer calls and you can't pick up, the system texts them immediately.
                <br />
                You win the job while your competitors are still sleeping.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="border-t border-gray-300 pt-8">
              <h3 className="text-2xl md:text-3xl font-light mb-4">3. Reputation Management</h3>
              <p className="text-base md:text-lg font-light leading-relaxed text-gray-700">
                Automated review requests that increase Google reviews every week — without you lifting a finger.
                <br />
                <br />
                Positive reputation = more calls, higher trust, better ranking.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="border-t border-gray-300 pt-8">
              <h3 className="text-2xl md:text-3xl font-light mb-4">4. Your New Smart Website (Built For You)</h3>
              <p className="text-base md:text-lg font-light leading-relaxed text-gray-700 mb-4">
                A clean, modern site designed to convert:
              </p>
              <ul className="space-y-2 text-base md:text-lg font-light text-gray-700 ml-6">
                <li>• Mobile-optimized</li>
                <li>• Fast-loading</li>
                <li>• Lead-driven</li>
                <li>• Designed around the exact actions you want customers to take</li>
              </ul>
              <p className="text-base md:text-lg font-light leading-relaxed text-gray-700 mt-4">
                This is not a "pretty brochure."
                <br />
                This is a customer acquisition asset.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="border-t border-gray-300 pt-8">
              <h3 className="text-2xl md:text-3xl font-light mb-4">5. Chat Widget + Unified Inbox</h3>
              <p className="text-base md:text-lg font-light leading-relaxed text-gray-700">
                All messages (site chat, SMS, missed calls) hit one mobile app so you never lose a conversation again.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="border-t border-gray-300 pt-8">
              <h3 className="text-2xl md:text-3xl font-light mb-4">6. CRM & Mobile App Included</h3>
              <p className="text-base md:text-lg font-light leading-relaxed text-gray-700">
                See leads.
                <br />
                See conversations.
                <br />
                See reviews.
                <br />
                See bookings.
                <br />
                All from your phone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 md:py-32 px-4 md:px-8 bg-white border-t border-black">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-light mb-4">Smart Site System</h2>
            <p className="text-lg md:text-xl font-light text-gray-600 mb-2">One plan. Everything included.</p>
            <p className="text-4xl md:text-5xl font-light mb-2">$397/month</p>
            <p className="text-base md:text-lg font-light text-gray-600">No long-term contract. Cancel anytime.</p>
          </div>

          <div className="border-2 border-black p-8 md:p-12 mb-8">
            <ul className="space-y-4 text-base md:text-lg font-light">
              <li className="pb-4 border-b border-gray-300">✔ Website Included</li>
              <li className="pb-4 border-b border-gray-300">✔ Instant Lead Follow-Up</li>
              <li className="pb-4 border-b border-gray-300">✔ Missed Call Text Back</li>
              <li className="pb-4 border-b border-gray-300">✔ Review Automation</li>
              <li className="pb-4 border-b border-gray-300">✔ Chat Widget</li>
              <li className="pb-4 border-b border-gray-300">✔ CRM + Mobile App</li>
              <li>✔ Ongoing Support</li>
            </ul>
          </div>

          <div className="text-center">
            <button className="px-12 py-4 bg-black text-white border-2 border-black font-semibold tracking-widest uppercase transition-all duration-300 hover:bg-white hover:text-black text-lg">
              GET STARTED
            </button>
          </div>
        </div>
      </section>

      <footer className="bg-black text-white py-8 px-4 md:px-8 mt-auto">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm md:text-base font-light tracking-wide">2025 INNOVATION SYNERGY AI INC.</p>
        </div>
      </footer>
    </div>
  )
}
