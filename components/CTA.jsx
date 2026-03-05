import Link from "next/link";

function CTA() {
  return (
    <section className="section">
      <div className="container-main">
        <div className="gradient-primary rounded-2xl px-8 py-20 text-center text-white shadow-soft relative overflow-hidden">
          <div className="absolute -top-16 -left-16 w-64 h-64 rounded-full bg-white opacity-[0.06] blur-3xl pointer-events-none" />
          <div className="absolute -bottom-16 -right-16 w-80 h-80 rounded-full bg-white opacity-[0.06] blur-3xl pointer-events-none" />
          <div className="absolute top-8 right-20 w-2 h-2 rounded-full bg-white opacity-30" />
          <div className="absolute bottom-12 left-28 w-1.5 h-1.5 rounded-full bg-white opacity-20" />

          <div className="relative z-10">
            <p className="text-xs font-bold tracking-widest uppercase text-blue-200 mb-4">
              Get Started Today
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight max-w-2xl mx-auto leading-tight">
              Ready to streamline legal operations with AI?
            </h2>
            <p className="mt-5 text-blue-100 max-w-lg mx-auto text-base leading-relaxed">
              Join 500+ legal teams already using LegaloAI to work faster,
              smarter, and with greater confidence.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
              <Link
                href="/contact"
                className="bg-white text-blue-700 hover:bg-blue-50 font-semibold px-8 py-3.5 rounded-lg shadow-soft transition-all duration-200 hover:-translate-y-0.5 text-sm"
              >
                Start Free Trial — No Credit Card
              </Link>
              <Link
                href="/about"
                className="border border-white/50 text-white hover:bg-white/10 font-medium px-8 py-3.5 rounded-lg transition-all duration-200 hover:-translate-y-0.5 text-sm"
              >
                Learn About Us →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;
