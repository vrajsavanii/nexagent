import Link from 'next/link';

export default function NotFound() {
  const contentPathways = [
    { label: 'Technology', href: '/technology', desc: 'Sovereign Cloud & Multi-Agent Architecture' },
    { label: 'Solutions', href: '/solutions', desc: 'Enterprise Systems by Industry' },
    { label: 'Products', href: '/products/model-010', desc: 'Model-010 Neural Runtime Engine' },
    { label: 'Insights', href: '/insights', desc: 'Systems Architecture & Engineering Research' },
    { label: 'Case Studies', href: '/case-studies/autonomous-claims-orchestration', desc: 'Verified Enterprise Deployments' },
    { label: 'Return Home', href: '/', desc: 'Executive Overview & Global Network' },
  ];

  return (
    <div className="w-full min-h-[80vh] flex items-center justify-center bg-[#F7F7F5] text-[#17191A] px-6 py-24">
      <div className="max-w-2xl text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white border border-[#17191A]/10 rounded-full shadow-2xs">
          <span className="w-1.5 h-1.5 bg-[#3D9D99] rounded-full animate-ping"></span>
          <span className="font-mono text-xs uppercase tracking-wider text-[#3D9D99] font-semibold">
            STATUS 404 // UNRESOLVED ROUTE
          </span>
        </div>

        <div>
          <h1 className="font-display text-4xl sm:text-5xl uppercase font-bold text-[#17191A] tracking-tight leading-tight mb-3">
            PAGE NOT FOUND
          </h1>
          <p className="font-sans text-base sm:text-lg text-[#57595B] max-w-lg mx-auto leading-relaxed">
            The requested architecture node does not exist or has been relocated. Explore our verified systems and research pathways below.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-left pt-4">
          {contentPathways.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="p-4 bg-white border border-[#17191A]/10 rounded-sm hover:border-[#3D9D99] transition-all group shadow-2xs"
            >
              <div className="font-display text-sm font-semibold text-[#17191A] group-hover:text-[#3D9D99] transition-colors mb-1">
                {item.label} →
              </div>
              <div className="font-sans text-xs text-[#57595B] line-clamp-2">
                {item.desc}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

