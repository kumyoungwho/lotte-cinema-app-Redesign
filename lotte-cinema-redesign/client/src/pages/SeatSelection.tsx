// Seat Selection Page — Lotte Cinema Redesign
// Design: Swiss International Typographic Style
// Layout: Screen visualization + seat grid + ticket summary

import { useState, useMemo } from "react";
import { useParams, useLocation } from "wouter";
import { ArrowLeft, ChevronRight } from "lucide-react";
import { movies, showtimes } from "@/lib/movieData";
import { toast } from "sonner";

type SeatStatus = "available" | "occupied" | "selected" | "couple";

interface Seat {
  id: string;
  row: string;
  col: number;
  status: SeatStatus;
}

const ROWS = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
const COLS = 12;

function generateSeats(): Seat[] {
  const seats: Seat[] = [];
  const occupiedPattern = [
    "A3", "A4", "B7", "B8", "C2", "C3", "C10", "C11",
    "D5", "D6", "E1", "E2", "E9", "F4", "F5", "F6",
    "G3", "G7", "G8", "H2", "H10", "H11", "I5", "I6",
    "J1", "J2", "J11", "J12",
  ];
  const couplePattern = ["E5", "E6", "E7", "E8"];

  for (const row of ROWS) {
    for (let col = 1; col <= COLS; col++) {
      const id = `${row}${col}`;
      let status: SeatStatus = "available";
      if (occupiedPattern.includes(id)) status = "occupied";
      if (couplePattern.includes(id)) status = "couple";
      seats.push({ id, row, col, status });
    }
  }
  return seats;
}

const TICKET_PRICE = 14000;
const IMAX_SURCHARGE = 4000;

export default function SeatSelection() {
  const { movieId, showtimeId } = useParams<{ movieId: string; showtimeId: string }>();
  const [, navigate] = useLocation();

  const movie = movies.find((m) => m.id === Number(movieId));
  const showtime = showtimes.find((s) => s.id === Number(showtimeId));

  const [seats, setSeats] = useState<Seat[]>(generateSeats);
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);

  const handleSeatClick = (seatId: string) => {
    const seat = seats.find((s) => s.id === seatId);
    if (!seat || seat.status === "occupied") return;

    if (selectedSeats.includes(seatId)) {
      setSelectedSeats((prev) => prev.filter((id) => id !== seatId));
      setSeats((prev) =>
        prev.map((s) => (s.id === seatId ? { ...s, status: s.status === "selected" ? "available" : "couple" } : s))
      );
    } else {
      if (selectedSeats.length >= 4) {
        toast.error("최대 4매까지 선택 가능합니다");
        return;
      }
      setSelectedSeats((prev) => [...prev, seatId]);
      setSeats((prev) =>
        prev.map((s) => (s.id === seatId ? { ...s, status: "selected" } : s))
      );
    }
  };

  const totalPrice = useMemo(() => {
    const base = selectedSeats.length * TICKET_PRICE;
    const surcharge = showtime?.format === "IMAX" ? selectedSeats.length * IMAX_SURCHARGE : 0;
    return base + surcharge;
  }, [selectedSeats.length, showtime?.format]);

  const handlePayment = () => {
    if (selectedSeats.length === 0) {
      toast.error("좌석을 선택해주세요");
      return;
    }
    toast.success(`결제를 진행합니다! (${selectedSeats.join(", ")})`);
  };

  const getSeatColor = (status: SeatStatus) => {
    switch (status) {
      case "available": return "#E5E7EB";
      case "occupied": return "#D1D5DB";
      case "selected": return "#E8002D";
      case "couple": return "#FCA5A5";
      default: return "#E5E7EB";
    }
  };

  return (
    <div className="page-enter bg-[#F7F8FA] min-h-screen">
      {/* Header */}
      <div className="bg-white px-4 py-3 flex items-center gap-3 border-b border-gray-100 sticky top-[57px] z-30">
        <button onClick={() => navigate(`/booking/${movieId}`)} className="w-8 h-8 flex items-center justify-center">
          <ArrowLeft size={20} className="text-gray-700" />
        </button>
        <div className="flex-1">
          <h2 className="text-[15px] font-bold text-gray-900">좌석 선택</h2>
          {movie && showtime && (
            <p className="text-[12px] text-gray-400">
              {movie.titleKo} · {showtime.time} · {showtime.screen} · {showtime.format}
            </p>
          )}
        </div>
      </div>

      {/* Screen Visualization */}
      <div className="bg-white pt-6 pb-4 px-4">
        <div className="relative">
          {/* Screen */}
          <div
            className="mx-auto rounded-lg py-1.5 text-center"
            style={{
              background: "linear-gradient(to bottom, rgba(232,0,45,0.15), transparent)",
              borderTop: "3px solid #E8002D",
              maxWidth: 280,
            }}
          >
            <span className="text-[10px] font-bold text-gray-400 tracking-widest uppercase">SCREEN</span>
          </div>

          {/* Seat Grid */}
          <div className="mt-6 overflow-x-auto">
            <div className="min-w-max mx-auto" style={{ width: "fit-content" }}>
              {ROWS.map((row) => (
                <div key={row} className="flex items-center gap-1 mb-1">
                  <span className="text-[10px] font-bold text-gray-400 w-4 text-center flex-shrink-0">{row}</span>
                  <div className="flex gap-1">
                    {Array.from({ length: COLS }, (_, i) => {
                      const seatId = `${row}${i + 1}`;
                      const seat = seats.find((s) => s.id === seatId)!;
                      const isSelected = selectedSeats.includes(seatId);
                      return (
                        <button
                          key={seatId}
                          onClick={() => handleSeatClick(seatId)}
                          disabled={seat.status === "occupied"}
                          className="seat transition-all"
                          style={{
                            background: isSelected ? "#E8002D" : getSeatColor(seat.status),
                            opacity: seat.status === "occupied" ? 0.4 : 1,
                            transform: isSelected ? "scale(1.1)" : "scale(1)",
                          }}
                          title={seatId}
                        />
                      );
                    })}
                  </div>
                  <span className="text-[10px] font-bold text-gray-400 w-4 text-center flex-shrink-0">{row}</span>
                </div>
              ))}
              {/* Column numbers */}
              <div className="flex items-center gap-1 mt-1 ml-5">
                {Array.from({ length: COLS }, (_, i) => (
                  <span key={i} className="text-[8px] text-gray-300 w-7 text-center">{i + 1}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="flex items-center justify-center gap-5 mt-5 pb-2">
          {[
            { color: "#E5E7EB", label: "선택 가능" },
            { color: "#E8002D", label: "선택됨" },
            { color: "#D1D5DB", label: "선택 불가" },
            { color: "#FCA5A5", label: "커플석" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-1.5">
              <div
                className="w-4 h-3.5 rounded-sm"
                style={{ background: item.color, borderRadius: "3px 3px 0 0" }}
              />
              <span className="text-[10px] text-gray-500">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Selected Seats Summary */}
      <div className="mx-4 mt-3 bg-white rounded-2xl p-4 card-shadow">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-[14px] font-bold text-gray-900">선택한 좌석</h3>
          <span className="text-[13px] text-gray-400">
            {selectedSeats.length > 0 ? selectedSeats.join(", ") : "선택 없음"}
          </span>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-[13px] text-gray-500">일반 ({selectedSeats.length}매)</span>
            <span className="text-[13px] font-semibold text-gray-900">
              {(selectedSeats.length * TICKET_PRICE).toLocaleString()}원
            </span>
          </div>
          {showtime?.format === "IMAX" && selectedSeats.length > 0 && (
            <div className="flex justify-between">
              <span className="text-[13px] text-gray-500">IMAX 추가 요금</span>
              <span className="text-[13px] font-semibold text-gray-900">
                +{(selectedSeats.length * IMAX_SURCHARGE).toLocaleString()}원
              </span>
            </div>
          )}
          <div className="border-t border-gray-100 pt-2 flex justify-between">
            <span className="text-[14px] font-bold text-gray-900">합계</span>
            <span className="text-[16px] font-black" style={{ color: "#E8002D" }}>
              {totalPrice.toLocaleString()}원
            </span>
          </div>
        </div>
      </div>

      {/* Payment Button */}
      <div className="px-4 pb-8 pt-4">
        <button
          onClick={handlePayment}
          disabled={selectedSeats.length === 0}
          className="w-full py-4 rounded-2xl text-white font-bold text-[16px] transition-all flex items-center justify-center gap-2"
          style={{
            background: selectedSeats.length > 0 ? "#E8002D" : "#D1D5DB",
          }}
        >
          {selectedSeats.length > 0 ? (
            <>
              <span>{totalPrice.toLocaleString()}원 결제하기</span>
              <ChevronRight size={18} />
            </>
          ) : (
            "좌석을 선택해주세요"
          )}
        </button>
      </div>
    </div>
  );
}
