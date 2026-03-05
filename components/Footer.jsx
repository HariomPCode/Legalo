import FOOTER_LINKS from "@/data/Footer_links";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  const SOCIALS = [
    { name: "twitter", icon: "fab fa-x-twitter", href: "#" },
    { name: "linkedin", icon: "fab fa-linkedin-in", href: "#" },
    { name: "github", icon: "fab fa-github", href: "#" },
  ];

  return (
    <footer className="bg-gray-950 text-gray-400">
      <div className="container-main py-16">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Link href="/" className="flex items-center">
                <Image
                  src="/logo.png"
                  alt="LegaloAI"
                  width={140}
                  height={40}
                  priority
                  className="object-contain"
                />
              </Link>
            </div>

            <p className="text-sm leading-relaxed text-gray-500 max-w-xs">
              AI-powered legal intelligence for modern teams. Work faster, stay
              compliant, reduce risk.
            </p>

            {/* Social icons */}
            <div className="flex gap-3 mt-6">
              {SOCIALS.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  className="w-8 h-8 rounded-lg bg-gray-800 hover:bg-gray-700 flex-center text-gray-400 hover:text-white transition-colors duration-200"
                  aria-label={s.name}
                >
                  <i className={`${s.icon} text-sm`} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(FOOTER_LINKS).map(([group, links]) => (
            <div key={group}>
              <p className="text-xs font-bold tracking-widest uppercase text-gray-300 mb-4">
                {group}
              </p>

              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-sm text-gray-500 hover:text-white transition-colors duration-150"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} LegaloAI. All rights reserved.
          </p>

          <div className="flex items-center gap-1 text-xs text-gray-600">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            All systems operational
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
