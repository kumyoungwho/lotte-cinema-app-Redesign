// Movie Detail Page — Lotte Cinema Redesign
// Design: Swiss International Typographic Style
// Layout: Full-bleed backdrop, info cards, cast, booking CTA

import { useParams, Link, useLocation } from "wouter";
import { ArrowLeft, Star, Clock, Calendar, Share2, Heart, ChevronRight } from "lucide-react";
import { movies } from "@/lib/movieData";
import { useState } from "react";

export default function MovieDetail() {
  const { id } = useParams<{ id: string }>();
  const [, navigate] = useLocation();
  const [liked, setLiked] = useState(false);
  const [activeTab, setActiveTab] = useState<"info" | "review">("info");

  const movie = movies.find((m) => m.id === Number(id));

  if (!movie) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <p className="text-gray-400">영화를 찾을 수 없습니다</p>
        <Link href="/movies">
          <button className="mt-3 text-sm font-semibold" style={{ color: "#E8002D" }}>
            영화 목록으로
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="page-enter bg-[#F7F8FA] min-h-screen">
      {/* Backdrop Hero */}
      <div className="relative" style={{ height: 320 }}>
        <img
          src={movie.backdrop}
          alt={movie.title}
          className="w-full h-full object-cover"
        />
        <div className="hero-gradient absolute inset-0" />

        {/* Back button */}
        <button
          onClick={() => navigate("/movies")}
          className="absolute top-3 left-4 w-9 h-9 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center"
        >
          <ArrowLeft size={18} color="white" />
        </button>

        {/* Share + Like */}
        <div className="absolute top-3 right-4 flex gap-2">
          <button className="w-9 h-9 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center">
            <Share2 size={16} color="white" />
          </button>
          <button
            onClick={() => setLiked(!liked)}
            className="w-9 h-9 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center"
          >
            <Heart
              size={16}
              color={liked ? "#E8002D" : "white"}
              fill={liked ? "#E8002D" : "none"}
            />
          </button>
        </div>

        {/* Movie info overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <div className="flex items-end gap-3">
            {/* Poster thumbnail */}
            <div className="w-20 h-28 rounded-xl overflow-hidden flex-shrink-0 shadow-lg border-2 border-white/20">
              <img src={movie.poster} alt={movie.title} className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span
                  className="text-[10px] font-bold px-2 py-0.5 rounded text-white"
                  style={{ background: "rgba(0,0,0,0.5)" }}
                >
                  {movie.ageRating}세 이상
                </span>
                {movie.isNowPlaying && (
                  <span
                    className="text-[10px] font-bold px-2 py-0.5 rounded-full text-white"
                    style={{ background: "#E8002D" }}
                  >
                    상영중
                  </span>
                )}
              </div>
              <h1 className="text-white text-xl font-bold leading-tight">{movie.titleKo}</h1>
              <p className="text-white/70 text-[12px] mt-0.5">{movie.title}</p>
              <div className="flex items-center gap-3 mt-2">
                {movie.rating > 0 && (
                  <div className="flex items-center gap-1">
                    <Star size={12} fill="#FFD700" color="#FFD700" />
                    <span className="text-white text-[13px] font-bold">{movie.rating}</span>
                  </div>
                )}
                <div className="flex items-center gap-1">
                  <Clock size={12} color="rgba(255,255,255,0.7)" />
                  <span className="text-white/70 text-[12px]">{movie.duration}분</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar size={12} color="rgba(255,255,255,0.7)" />
                  <span className="text-white/70 text-[12px]">{movie.releaseDate}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Format badges */}
      <div className="bg-white px-4 py-3 flex gap-2 border-b border-gray-100">
        {movie.format.map((fmt) => (
          <span
            key={fmt}
            className="text-[11px] font-bold px-2.5 py-1 rounded-lg border"
            style={{
              color: fmt === "IMAX" ? "#0066CC" : fmt === "4DX" ? "#E8002D" : "#374151",
              borderColor: fmt === "IMAX" ? "#0066CC" : fmt === "4DX" ? "#E8002D" : "#D1D5DB",
              background: fmt === "IMAX" ? "#EFF6FF" : fmt === "4DX" ? "#FFF1F2" : "#F9FAFB",
            }}
          >
            {fmt}
          </span>
        ))}
      </div>

      {/* Booking Rate Bar */}
      {movie.bookingRate > 0 && (
        <div className="bg-white px-4 py-3 border-b border-gray-100">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[12px] font-semibold text-gray-700">예매율</span>
            <span className="text-[14px] font-bold" style={{ color: "#E8002D" }}>
              {movie.bookingRate}%
            </span>
          </div>
          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all"
              style={{ width: `${movie.bookingRate}%`, background: "#E8002D" }}
            />
          </div>
        </div>
      )}

      {/* Tab Navigation */}
      <div className="bg-white border-b border-gray-100 sticky top-[57px] z-20">
        <div className="flex">
          {[
            { key: "info", label: "영화 정보" },
            { key: "review", label: "관람평" },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key as "info" | "review")}
              className={`flex-1 py-3 text-[14px] font-semibold transition-colors relative ${
                activeTab === tab.key ? "text-gray-900" : "text-gray-400"
              }`}
            >
              {tab.label}
              {activeTab === tab.key && (
                <div
                  className="absolute bottom-0 left-6 right-6 h-0.5 rounded-full"
                  style={{ background: "#E8002D" }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        {activeTab === "info" ? (
          <>
            {/* Synopsis */}
            <div className="bg-white rounded-2xl p-4 card-shadow">
              <h3 className="text-[13px] font-bold text-gray-500 uppercase tracking-wide mb-2">줄거리</h3>
              <p className="text-[14px] text-gray-700 leading-relaxed">{movie.synopsis}</p>
            </div>

            {/* Movie Details */}
            <div className="bg-white rounded-2xl p-4 card-shadow">
              <h3 className="text-[13px] font-bold text-gray-500 uppercase tracking-wide mb-3">상세 정보</h3>
              <div className="space-y-2.5">
                {[
                  { label: "감독", value: movie.director },
                  { label: "출연", value: movie.cast.join(", ") },
                  { label: "장르", value: movie.genre.join(", ") },
                  { label: "상영 시간", value: `${movie.duration}분` },
                  { label: "개봉일", value: movie.releaseDate },
                  { label: "관람 등급", value: `${movie.ageRating}세 이상 관람가` },
                ].map((item) => (
                  <div key={item.label} className="flex gap-3">
                    <span className="text-[13px] text-gray-400 w-20 flex-shrink-0">{item.label}</span>
                    <span className="text-[13px] text-gray-800 font-medium flex-1">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Audience Reviews Summary */}
            {movie.rating > 0 && (
              <div className="bg-white rounded-2xl p-4 card-shadow">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-[13px] font-bold text-gray-500 uppercase tracking-wide">관람객 평점</h3>
                  <button className="flex items-center gap-0.5 text-[12px]" style={{ color: "#E8002D" }}>
                    전체보기 <ChevronRight size={12} />
                  </button>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-center">
                    <div className="text-4xl font-black" style={{ color: "#E8002D" }}>{movie.rating}</div>
                    <div className="flex gap-0.5 mt-1 justify-center">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star
                          key={s}
                          size={12}
                          fill={s <= Math.round(movie.rating / 2) ? "#E8002D" : "#E5E7EB"}
                          color={s <= Math.round(movie.rating / 2) ? "#E8002D" : "#E5E7EB"}
                        />
                      ))}
                    </div>
                    <p className="text-[10px] text-gray-400 mt-0.5">10점 만점</p>
                  </div>
                  <div className="flex-1 space-y-1.5">
                    {[
                      { label: "스토리", score: 88 },
                      { label: "연출", score: 92 },
                      { label: "영상미", score: 95 },
                    ].map((item) => (
                      <div key={item.label} className="flex items-center gap-2">
                        <span className="text-[11px] text-gray-500 w-12">{item.label}</span>
                        <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                          <div
                            className="h-full rounded-full"
                            style={{ width: `${item.score}%`, background: "#E8002D" }}
                          />
                        </div>
                        <span className="text-[11px] font-bold text-gray-700 w-8 text-right">{item.score}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="space-y-3">
            {[
              { name: "김민준", rating: 10, comment: "올해 최고의 영화! 스케일이 압도적이고 스토리도 탄탄해요.", date: "2026.02.20" },
              { name: "이서연", rating: 9, comment: "배우들의 연기가 정말 훌륭했어요. 특히 마지막 장면은 눈물이 났어요.", date: "2026.02.18" },
              { name: "박지호", rating: 8, comment: "4DX로 봤는데 정말 실감나는 경험이었습니다. 강추!", date: "2026.02.15" },
            ].map((review) => (
              <div key={review.name} className="bg-white rounded-2xl p-4 card-shadow">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                      <span className="text-[12px] font-bold text-gray-500">{review.name[0]}</span>
                    </div>
                    <div>
                      <p className="text-[13px] font-semibold text-gray-900">{review.name}</p>
                      <p className="text-[10px] text-gray-400">{review.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star size={12} fill="#E8002D" color="#E8002D" />
                    <span className="text-[13px] font-bold" style={{ color: "#E8002D" }}>{review.rating}</span>
                  </div>
                </div>
                <p className="text-[13px] text-gray-700 leading-relaxed">{review.comment}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Sticky Booking Button */}
      <div className="sticky bottom-20 px-4 pb-4 pt-2">
        {movie.isNowPlaying ? (
          <Link href={`/booking/${movie.id}`}>
            <button
              className="w-full py-4 rounded-2xl text-white font-bold text-[16px] shadow-lg transition-transform active:scale-98"
              style={{ background: "#E8002D" }}
            >
              예매하기
            </button>
          </Link>
        ) : (
          <button
            className="w-full py-4 rounded-2xl text-white font-bold text-[16px] shadow-lg"
            style={{ background: "#9CA3AF" }}
          >
            {movie.releaseDate} 개봉 예정
          </button>
        )}
      </div>
    </div>
  );
}
