// Home Page — Lotte Cinema Redesign
// Design: Swiss International Typographic Style
// Sections: Hero banner, Quick actions, Now Playing carousel, Coming Soon

import { useState, useEffect } from "react";
import { Link } from "wouter";
import { ChevronRight, Star, Ticket, Play } from "lucide-react";
import { nowPlayingMovies, comingSoonMovies, heroBanner, type Movie } from "@/lib/movieData";

function MovieCard({ movie }: { movie: Movie }) {
  return (
    <Link href={`/movies/${movie.id}`}>
      <div className="movie-card flex-shrink-0 w-[130px] cursor-pointer">
        <div className="relative rounded-xl overflow-hidden" style={{ aspectRatio: "2/3" }}>
          <img
            src={movie.poster}
            alt={movie.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          {/* Age rating badge */}
          <div
            className="absolute top-2 left-2 text-white text-[10px] font-bold px-1.5 py-0.5 rounded"
            style={{ background: "rgba(0,0,0,0.65)" }}
          >
            {movie.ageRating}
          </div>
          {/* Booking rate */}
          {movie.bookingRate > 0 && (
            <div
              className="absolute bottom-0 left-0 right-0 px-2 py-1.5"
              style={{ background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)" }}
            >
              <div className="flex items-center gap-1">
                <div className="h-1 flex-1 rounded-full bg-white/20 overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{ width: `${movie.bookingRate}%`, background: "#E8002D" }}
                  />
                </div>
                <span className="text-white text-[10px] font-bold">{movie.bookingRate}%</span>
              </div>
            </div>
          )}
        </div>
        <div className="mt-2 px-0.5">
          <p className="text-[13px] font-semibold text-gray-900 leading-tight truncate">{movie.titleKo}</p>
          <div className="flex items-center gap-1.5 mt-0.5">
            {movie.rating > 0 && (
              <div className="flex items-center gap-0.5">
                <Star size={10} fill="#E8002D" color="#E8002D" />
                <span className="text-[11px] font-bold" style={{ color: "#E8002D" }}>{movie.rating}</span>
              </div>
            )}
            <span className="text-[11px] text-gray-400">{movie.genre[0]}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

function ComingSoonCard({ movie }: { movie: Movie }) {
  return (
    <Link href={`/movies/${movie.id}`}>
      <div className="movie-card flex-shrink-0 w-[160px] cursor-pointer">
        <div className="relative rounded-xl overflow-hidden" style={{ aspectRatio: "2/3" }}>
          <img
            src={movie.poster}
            alt={movie.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div
            className="absolute inset-0 flex flex-col justify-end p-3"
            style={{ background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 50%)" }}
          >
            <span
              className="text-[10px] font-bold px-2 py-0.5 rounded-full self-start mb-1"
              style={{ background: "#E8002D", color: "white" }}
            >
              {movie.releaseDate} 개봉
            </span>
            <p className="text-white text-[13px] font-bold leading-tight">{movie.titleKo}</p>
            <p className="text-white/70 text-[11px] mt-0.5">{movie.genre.join(" · ")}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function Home() {
  const [activeHero, setActiveHero] = useState(0);
  const heroMovies = nowPlayingMovies.slice(0, 3);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveHero((prev) => (prev + 1) % heroMovies.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [heroMovies.length]);

  return (
    <div className="page-enter bg-[#F7F8FA]">
      {/* Hero Banner */}
      <div className="relative overflow-hidden" style={{ height: 280 }}>
        <img
          src={heroMovies[activeHero]?.backdrop || heroBanner}
          alt="Featured Movie"
          className="w-full h-full object-cover"
          style={{ transition: "opacity 0.4s ease" }}
        />
        <div className="hero-gradient absolute inset-0" />

        {/* Hero content */}
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <div className="flex items-end justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span
                  className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                  style={{ background: "#E8002D", color: "white" }}
                >
                  NOW PLAYING
                </span>
                <div className="flex items-center gap-0.5">
                  <Star size={10} fill="white" color="white" />
                  <span className="text-white text-[11px] font-bold">{heroMovies[activeHero]?.rating}</span>
                </div>
              </div>
              <h2 className="text-white text-xl font-bold leading-tight">
                {heroMovies[activeHero]?.titleKo}
              </h2>
              <p className="text-white/70 text-[12px] mt-0.5">
                {heroMovies[activeHero]?.genre.join(" · ")} · {heroMovies[activeHero]?.duration}분
              </p>
            </div>
            <Link href={`/booking/${heroMovies[activeHero]?.id}`}>
              <button
                className="flex items-center gap-1.5 px-4 py-2.5 rounded-full font-bold text-[13px] text-white ml-3"
                style={{ background: "#E8002D" }}
              >
                <Ticket size={14} />
                예매하기
              </button>
            </Link>
          </div>

          {/* Dots indicator */}
          <div className="flex items-center gap-1.5 mt-3">
            {heroMovies.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveHero(i)}
                className="rounded-full transition-all"
                style={{
                  width: i === activeHero ? 20 : 6,
                  height: 6,
                  background: i === activeHero ? "#E8002D" : "rgba(255,255,255,0.5)",
                }}
              />
            ))}
          </div>
        </div>

        {/* Play button overlay */}
        <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30 transition-transform hover:scale-105">
          <Play size={18} fill="white" color="white" className="ml-0.5" />
        </button>
      </div>

      {/* Quick Action Cards */}
      <div className="px-4 py-4">
        <div className="grid grid-cols-4 gap-2">
          {[
            { icon: "🎬", label: "빠른예매", href: "/booking/1" },
            { icon: "🎟️", label: "내 티켓", href: "/mypage" },
            { icon: "🍿", label: "콤보할인", href: "/mypage" },
            { icon: "⭐", label: "이벤트", href: "/mypage" },
          ].map((item) => (
            <Link key={item.label} href={item.href}>
              <div className="bg-white rounded-2xl p-3 flex flex-col items-center gap-1.5 card-shadow cursor-pointer hover:shadow-md transition-shadow">
                <span className="text-2xl">{item.icon}</span>
                <span className="text-[11px] font-semibold text-gray-700">{item.label}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Now Playing Section */}
      <div className="mt-1">
        <div className="flex items-center justify-between px-4 mb-3">
          <div>
            <h3 className="text-[16px] font-bold text-gray-900">현재 상영작</h3>
            <p className="text-[12px] text-gray-400 mt-0.5">지금 극장에서 만나세요</p>
          </div>
          <Link href="/movies">
            <button className="flex items-center gap-0.5 text-[12px] font-semibold" style={{ color: "#E8002D" }}>
              전체보기 <ChevronRight size={14} />
            </button>
          </Link>
        </div>
        <div className="scroll-x flex gap-3 px-4 pb-2">
          {nowPlayingMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>

      {/* Coming Soon Section */}
      <div className="mt-5 mb-4">
        <div className="flex items-center justify-between px-4 mb-3">
          <div>
            <h3 className="text-[16px] font-bold text-gray-900">개봉 예정작</h3>
            <p className="text-[12px] text-gray-400 mt-0.5">기대되는 신작을 미리 만나보세요</p>
          </div>
          <Link href="/movies">
            <button className="flex items-center gap-0.5 text-[12px] font-semibold" style={{ color: "#E8002D" }}>
              전체보기 <ChevronRight size={14} />
            </button>
          </Link>
        </div>
        <div className="scroll-x flex gap-3 px-4 pb-2">
          {comingSoonMovies.map((movie) => (
            <ComingSoonCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>

      {/* Banner Ad */}
      <div className="mx-4 mb-4 rounded-2xl overflow-hidden" style={{ background: "linear-gradient(135deg, #1a1a2e 0%, #E8002D 100%)" }}>
        <div className="p-4 flex items-center justify-between">
          <div>
            <p className="text-white/70 text-[11px] font-medium">롯데시네마 멤버십</p>
            <p className="text-white text-[15px] font-bold mt-0.5">L.POINT 적립 혜택</p>
            <p className="text-white/80 text-[12px] mt-1">영화 관람 시 최대 5% 적립</p>
          </div>
          <div className="text-right">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
              <span className="text-2xl">🎁</span>
            </div>
          </div>
        </div>
      </div>

      {/* Lotte Cinema Specials */}
      <div className="px-4 mb-6">
        <h3 className="text-[16px] font-bold text-gray-900 mb-3">롯시 스페셜</h3>
        <div className="space-y-2">
          {[
            { emoji: "🎭", title: "무대인사 이벤트", desc: "배우와 함께하는 특별한 시간", badge: "NEW" },
            { emoji: "🎪", title: "4DX 체험 이벤트", desc: "생생한 4D 체험 할인 혜택", badge: "HOT" },
            { emoji: "🌙", title: "심야 영화 특가", desc: "22시 이후 상영작 20% 할인", badge: "" },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl p-3.5 flex items-center gap-3 card-shadow cursor-pointer hover:shadow-md transition-shadow"
            >
              <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-xl flex-shrink-0">
                {item.emoji}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <p className="text-[13px] font-semibold text-gray-900">{item.title}</p>
                  {item.badge && (
                    <span
                      className="text-[9px] font-bold px-1.5 py-0.5 rounded text-white"
                      style={{ background: "#E8002D" }}
                    >
                      {item.badge}
                    </span>
                  )}
                </div>
                <p className="text-[11px] text-gray-400 mt-0.5">{item.desc}</p>
              </div>
              <ChevronRight size={16} className="text-gray-300 flex-shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
