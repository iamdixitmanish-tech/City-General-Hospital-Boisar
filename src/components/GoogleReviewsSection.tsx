import { Star, CheckCircle, Quote, ExternalLink } from 'lucide-react';
import { GOOGLE_REVIEWS_LIST, HOSPITAL_INFO } from '../hospitalData';

export const GoogleReviewsSection = () => {
  return (
    <section id="reviews" className="py-16 lg:py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background glow matching building cyan */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-400/20 text-amber-300 border border-amber-400/30 mb-3">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>Verified Patient Feedback</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Rated 4.9 Stars on Google
          </h2>
          <p className="mt-3 text-base text-slate-300">
            Based on {HOSPITAL_INFO.reviewCount} patient ratings and testimonials for City General Hospital, Boisar.
          </p>
        </div>

        {/* Big Rating Summary Banner */}
        <div className="max-w-4xl mx-auto bg-slate-800/80 backdrop-blur-md rounded-2xl border border-slate-700 p-6 sm:p-8 mb-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="text-5xl sm:text-6xl font-black text-amber-400">
              4.9
            </div>
            <div>
              <div className="flex items-center gap-1 text-amber-400 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400" />
                ))}
              </div>
              <div className="text-sm font-semibold text-slate-200">
                {HOSPITAL_INFO.reviewCount} Google Review Summary
              </div>
              <div className="text-xs text-slate-400">
                City General Hospital, Boisar • Hospital
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <a
              href={HOSPITAL_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl hospital-brand-gradient text-white text-xs font-bold shadow-md hover:brightness-110 active:scale-98 transition-all flex items-center justify-center gap-2"
            >
              <span>View On Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Real Reviews Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {GOOGLE_REVIEWS_LIST.map((rev, index) => (
            <div
              key={index}
              className="bg-slate-800/60 rounded-2xl p-6 border border-slate-700/80 shadow-lg flex flex-col justify-between hover:border-cyan-500/50 transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-slate-600" />
                </div>

                <p className="text-sm text-slate-200 leading-relaxed italic mb-6">
                  &ldquo;{rev.text}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-slate-700 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-white flex items-center gap-1.5">
                    <span>{rev.author}</span>
                    <CheckCircle className="w-3 h-3 text-emerald-400" />
                  </div>
                  {rev.timeAgo && (
                    <div className="text-[11px] text-slate-400">
                      {rev.timeAgo}
                    </div>
                  )}
                </div>
                <span className="text-[11px] font-semibold text-cyan-400">
                  Google Review
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
