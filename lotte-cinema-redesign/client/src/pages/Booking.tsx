// Booking Page — Lotte Cinema Redesign
// Design: Swiss International Typographic Style
// Layout: Step-based booking flow (Theater → Date → Showtime)

import { useState } from "react";
import { useParams, Link, useLocation } from "wouter";
import { ArrowLeft, MapPin, ChevronRight, Clock, Users } from "lucide-react";
import { movies, theaters, showtimes } from "@/lib/movieData";

const DATES = [
  { day: "목", date: "26", month: "2", full: "2026.02.26" },
  { day: "금", date: "27", month: "2", full: "2026.02.27" },
  { day: "토", date: "28", month: "2", full: "2026.02.28" },
  { day: "일", date: "1", month: "3", full: "2026.03.01" },
  { day: "월", date: "2", month: "3", full: "2026.03.02" },
  { day: "화", date: "3", month: "3", full: "2026.03.03" },
  { day: "수", date: "4", month: "3", full: "2026.03.04" },
];

export default function Booking() {
  const { movieId } = useParams<{ movieId: string }>();
  const [, navigate] = useLocation();
  const [selectedTheater, setSelectedTheater] = useState<number | null>(null);
  const [selectedDate, setSelectedDate] = useState(0);
  const [selectedShowtime, setSelectedShowtime] = useState<number | null>(null);

  const movie = movies.find((m) => m.id === Number(movieId));

  const availableShowtimes = showtimes.filter((s) => {
    const isSoldOut = s.availableSeats === 0;
    return !isSoldOut;
  });

  const handleConfirm = () => {
    if (selectedShowtime && selectedTheater) {
      navigate(`/seats/${movieId}/${selectedShowtime}`);
    }
  };

  return (
    <div className="page-enter bg-[#F7F8FA] min-h-screen">
      {/* Header */}
      <div className="bg-white px-4 py-3 flex items-center gap-3 border-b border-gray-100 sticky top-[57px] z-30">
        <button onClick={() => navigate(`/movies/${movieId}`)} className="w-8 h-8 flex items-center justify-center">
          <ArrowLeft size={20} className="text-gray-700" />
        </button>
        <div className="flex-1">
          <h2 className="text-[15px] font-bold text-gray-900">예매하기</h2>
          {movie && (
            <p className="text-[12px] text-gray-400">{movie.titleKo}</p>
          )}
        </div>
        {movie && (
          <div className="w-10 h-14 rounded-lg overflow-hidden flex-shrink-0">
            <img src={movie.poster} alt={movie.title} className="w-full h-full object-cover" />
          </div>
        )}
      </div>

      <div className="p-4 space-y-4">
        {/* Step 1: Theater Selection */}
        <div className="bg-white rounded-2xl overflow-hidden card-shadow">
          <div className="px-4 py-3 border-b border-gray-50 flex items-center gap-2">
            <div
              className="w-6 h-6 rounded-full flex items-center justify-center text-white text-[11px] font-bold"
              style={{ background: "#E8002D" }}
            >
              1
            </div>
            <h3 className="text-[14px] font-bold text-gray-900">극장 선택</h3>
          </div>
          <div className="divide-y divide-gray-50">
            {theaters.map((theater) => (
              <button
                key={theater.id}
                onClick={() => setSelectedTheater(theater.id)}
                className="w-full px-4 py-3.5 flex items-center gap-3 transition-colors hover:bg-gray-50"
                style={{
                  background: selectedTheater === theater.id ? "#FFF1F2" : undefined,
                }}
              >
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{
                    background: selectedTheater === theater.id ? "#E8002D" : "#F3F4F6",
                  }}
                >
                  <MapPin
                    size={14}
                    color={selectedTheater === theater.id ? "white" : "#9CA3AF"}
                  />
                </div>
                <div className="flex-1 text-left">
                  <p
                    className="text-[13px] font-semibold"
                    style={{ color: selectedTheater === theater.id ? "#E8002D" : "#111827" }}
                  >
                    {theater.name}
                  </p>
                  <p className="text-[11px] text-gray-400 mt-0.5">{theater.address}</p>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-[11px] text-gray-400">{theater.screens}관</span>
                  {selectedTheater === theater.id && (
                    <div
                      className="w-4 h-4 rounded-full flex items-center justify-center ml-1"
                      style={{ background: "#E8002D" }}
                    >
                      <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <path d="M1 4L3 6L7 2" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </div>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Step 2: Date Selection */}
        <div className="bg-white rounded-2xl overflow-hidden card-shadow">
          <div className="px-4 py-3 border-b border-gray-50 flex items-center gap-2">
            <div
              className="w-6 h-6 rounded-full flex items-center justify-center text-white text-[11px] font-bold"
              style={{ background: selectedTheater ? "#E8002D" : "#D1D5DB" }}
            >
              2
            </div>
            <h3 className="text-[14px] font-bold text-gray-900">날짜 선택</h3>
          </div>
          <div className="scroll-x flex gap-2 px-4 py-3">
            {DATES.map((d, i) => {
              const isWeekend = d.day === "토" || d.day === "일";
              const isSelected = selectedDate === i;
              return (
                <button
                  key={i}
                  onClick={() => setSelectedDate(i)}
                  className="flex-shrink-0 w-12 py-2.5 rounded-xl flex flex-col items-center gap-0.5 transition-all"
                  style={{
                    background: isSelected ? "#E8002D" : "#F9FAFB",
                    border: isSelected ? "none" : "1.5px solid #F3F4F6",
                  }}
                >
                  <span
                    className="text-[10px] font-semibold"
                    style={{ color: isSelected ? "rgba(255,255,255,0.8)" : isWeekend ? "#E8002D" : "#9CA3AF" }}
                  >
                    {d.day}
                  </span>
                  <span
                    className="text-[17px] font-bold leading-none"
                    style={{ color: isSelected ? "white" : "#111827" }}
                  >
                    {d.date}
                  </span>
                  <span
                    className="text-[9px]"
                    style={{ color: isSelected ? "rgba(255,255,255,0.7)" : "#D1D5DB" }}
                  >
                    {d.month}월
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 3: Showtime Selection */}
        <div className="bg-white rounded-2xl overflow-hidden card-shadow">
          <div className="px-4 py-3 border-b border-gray-50 flex items-center gap-2">
            <div
              className="w-6 h-6 rounded-full flex items-center justify-center text-white text-[11px] font-bold"
              style={{ background: selectedTheater ? "#E8002D" : "#D1D5DB" }}
            >
              3
            </div>
            <h3 className="text-[14px] font-bold text-gray-900">시간 선택</h3>
          </div>
          <div className="p-4 grid grid-cols-2 gap-2">
            {availableShowtimes.map((showtime) => {
              const isSelected = selectedShowtime === showtime.id;
              const isAlmostFull = showtime.availableSeats < 20;
              const availPct = Math.round((showtime.availableSeats / showtime.totalSeats) * 100);

              return (
                <button
                  key={showtime.id}
                  onClick={() => setSelectedShowtime(showtime.id)}
                  className="rounded-xl p-3 text-left transition-all border"
                  style={{
                    background: isSelected ? "#FFF1F2" : "#F9FAFB",
                    borderColor: isSelected ? "#E8002D" : "#F3F4F6",
                  }}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span
                      className="text-[18px] font-black"
                      style={{ color: isSelected ? "#E8002D" : "#111827" }}
                    >
                      {showtime.time}
                    </span>
                    <span
                      className="text-[10px] font-bold px-1.5 py-0.5 rounded"
                      style={{
                        background: showtime.format === "IMAX" ? "#EFF6FF" : showtime.format === "4DX" ? "#FFF1F2" : "#F3F4F6",
                        color: showtime.format === "IMAX" ? "#0066CC" : showtime.format === "4DX" ? "#E8002D" : "#6B7280",
                      }}
                    >
                      {showtime.format}
                    </span>
                  </div>
                  <p className="text-[11px] text-gray-400">{showtime.screen}</p>
                  <div className="mt-2">
                    <div className="flex items-center justify-between mb-0.5">
                      <div className="flex items-center gap-1">
                        <Users size={9} className="text-gray-400" />
                        <span className="text-[10px] text-gray-400">
                          {isAlmostFull ? (
                            <span style={{ color: "#E8002D" }}>잔여 {showtime.availableSeats}석</span>
                          ) : (
                            `${showtime.availableSeats}/${showtime.totalSeats}`
                          )}
                        </span>
                      </div>
                      <span className="text-[10px] text-gray-400">{availPct}%</span>
                    </div>
                    <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${100 - availPct}%`,
                          background: isAlmostFull ? "#E8002D" : "#10B981",
                        }}
                      />
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Confirm Button */}
      <div className="sticky bottom-0 px-4 pb-6 pt-3 bg-[#F7F8FA]">
        <button
          onClick={handleConfirm}
          disabled={!selectedTheater || selectedShowtime === null}
          className="w-full py-4 rounded-2xl text-white font-bold text-[16px] transition-all"
          style={{
            background: selectedTheater && selectedShowtime !== null ? "#E8002D" : "#D1D5DB",
          }}
        >
          {selectedTheater && selectedShowtime !== null ? "좌석 선택하기" : "극장과 시간을 선택해주세요"}
        </button>
      </div>
    </div>
  );
}
