// Movies Page — Lotte Cinema Redesign
// Design: Swiss International Typographic Style
// Layout: Genre filter chips + movie grid with tabs (Now Playing / Coming Soon)

import { useState } from "react";
import { Link } from "wouter";
import { Star, Clock, ChevronRight } from "lucide-react";
import { movies, genres, type Movie } from "@/lib/movieData";

function MovieGridCard({ movie }: { movie: Movie }) {
  return (
    <Link href={`/movies/${movie.id}`}>
      <div className="movie-card cursor-pointer">
        <div className="relative rounded-xl overflow-hidden" style={{ aspectRatio: "2/3" }}>
          <img
            src={movie.poster}
            alt={movie.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div
            className="absolute top-2 left-2 text-white text-[10px] font-bold px-1.5 py-0.5 rounded"
            style={{ background: "rgba(0,0,0,0.65)" }}
          >
            {movie.ageRating}
          </div>
          {movie.isComingSoon && (
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{ background: "rgba(0,0,0,0.3)" }}
            >
              <span
                className="text-[10px] font-bold px-2 py-1 rounded-full text-white"
                style={{ background: "#E8002D" }}
              >
                {movie.releaseDate}
              </span>
            </div>
          )}
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
        <div className="mt-2">
          <p className="text-[13px] font-semibold text-gray-900 leading-tight truncate">{movie.titleKo}</p>
          <div className="flex items-center gap-1.5 mt-0.5">
            {movie.rating > 0 ? (
              <div className="flex items-center gap-0.5">
                <Star size={10} fill="#E8002D" color="#E8002D" />
                <span className="text-[11px] font-bold" style={{ color: "#E8002D" }}>{movie.rating}</span>
              </div>
            ) : (
              <span className="text-[11px] text-gray-400">개봉 예정</span>
            )}
            <span className="text-[11px] text-gray-400">{movie.genre[0]}</span>
          </div>
          <div className="flex items-center gap-1 mt-0.5">
            <Clock size={10} className="text-gray-300" />
            <span className="text-[10px] text-gray-400">{movie.duration}분</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function Movies() {
  const [activeTab, setActiveTab] = useState<"now" | "soon">("now");
  const [activeGenre, setActiveGenre] = useState("전체");

  const filteredMovies = movies.filter((m) => {
    const tabMatch = activeTab === "now" ? m.isNowPlaying : m.isComingSoon;
    const genreMatch = activeGenre === "전체" || m.genre.includes(activeGenre);
    return tabMatch && genreMatch;
  });

  return (
    <div className="page-enter bg-[#F7F8FA] min-h-screen">
      {/* Tab Navigation */}
      <div className="bg-white border-b border-gray-100 sticky top-[57px] z-30">
        <div className="flex">
          {[
            { key: "now", label: "현재 상영" },
            { key: "soon", label: "개봉 예정" },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key as "now" | "soon")}
              className={`flex-1 py-3.5 text-[14px] font-semibold transition-colors relative ${
                activeTab === tab.key ? "text-gray-900" : "text-gray-400"
              }`}
            >
              {tab.label}
              {activeTab === tab.key && (
                <div
                  className="absolute bottom-0 left-4 right-4 h-0.5 rounded-full"
                  style={{ background: "#E8002D" }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Genre Filter */}
      <div className="scroll-x flex gap-2 px-4 py-3 bg-white border-b border-gray-50">
        {genres.map((genre) => (
          <button
            key={genre}
            onClick={() => setActiveGenre(genre)}
            className={`genre-chip ${activeGenre === genre ? "active" : "inactive"}`}
          >
            {genre}
          </button>
        ))}
      </div>

      {/* Movie Count */}
      <div className="px-4 py-3 flex items-center justify-between">
        <span className="text-[13px] text-gray-500">
          총 <span className="font-bold text-gray-900">{filteredMovies.length}</span>편
        </span>
        <button className="flex items-center gap-1 text-[12px] text-gray-500">
          <span>예매율순</span>
          <ChevronRight size={12} />
        </button>
      </div>

      {/* Movie Grid */}
      <div className="px-4 pb-6">
        {filteredMovies.length > 0 ? (
          <div className="grid grid-cols-3 gap-3">
            {filteredMovies.map((movie) => (
              <MovieGridCard key={movie.id} movie={movie} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-16 text-gray-400">
            <span className="text-4xl mb-3">🎬</span>
            <p className="text-[14px] font-medium">해당 장르의 영화가 없습니다</p>
            <button
              onClick={() => setActiveGenre("전체")}
              className="mt-3 text-[13px] font-semibold"
              style={{ color: "#E8002D" }}
            >
              전체 보기
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
