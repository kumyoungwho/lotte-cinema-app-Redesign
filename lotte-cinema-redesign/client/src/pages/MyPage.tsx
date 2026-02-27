// My Page — Lotte Cinema Redesign
// Design: Swiss International Typographic Style
// Layout: Profile card, membership, ticket history, settings

import { ChevronRight, Star, Gift, CreditCard, Bell, Settings, LogOut, Ticket, Film } from "lucide-react";
import { nowPlayingMovies } from "@/lib/movieData";
import { toast } from "sonner";

const MOCK_TICKETS = [
  {
    id: 1,
    movie: "스텔라 호라이즌",
    date: "2026.02.20",
    time: "19:40",
    theater: "롯데시네마 건대입구",
    screen: "3관",
    seats: ["F5", "F6"],
    format: "4DX",
    status: "upcoming",
  },
  {
    id: 2,
    movie: "서울 미드나잇",
    date: "2026.02.10",
    time: "14:50",
    theater: "롯데시네마 강남",
    screen: "5관",
    seats: ["C7"],
    format: "2D",
    status: "past",
  },
];

export default function MyPage() {
  const handleFeatureClick = () => {
    toast.info("준비 중인 기능입니다");
  };

  return (
    <div className="page-enter bg-[#F7F8FA] min-h-screen">
      {/* Profile Header */}
      <div
        className="px-4 pt-5 pb-6"
        style={{ background: "linear-gradient(135deg, #1a1a2e 0%, #2d1a1a 60%, #E8002D 100%)" }}
      >
        <div className="flex items-center gap-4">
          {/* Avatar */}
          <div className="relative">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-black text-white"
              style={{ background: "rgba(255,255,255,0.15)", border: "2px solid rgba(255,255,255,0.3)" }}
            >
              김
            </div>
            <div
              className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center"
              style={{ background: "#E8002D", border: "2px solid white" }}
            >
              <Star size={9} fill="white" color="white" />
            </div>
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h2 className="text-white text-[18px] font-bold">김민준</h2>
              <span
                className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                style={{ background: "rgba(255,255,255,0.2)", color: "white" }}
              >
                GOLD
              </span>
            </div>
            <p className="text-white/60 text-[12px] mt-0.5">km****@gmail.com</p>
            <p className="text-white/80 text-[12px] mt-1">
              L.POINT <span className="font-bold text-white">12,450P</span>
            </p>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-2 mt-5">
          {[
            { label: "관람 횟수", value: "24회" },
            { label: "이달 예매", value: "2건" },
            { label: "쿠폰", value: "3장" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl py-2.5 text-center"
              style={{ background: "rgba(255,255,255,0.1)" }}
            >
              <p className="text-white text-[16px] font-black">{stat.value}</p>
              <p className="text-white/60 text-[10px] mt-0.5">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="p-4 space-y-3 -mt-3">
        {/* Membership Card */}
        <div
          className="rounded-2xl p-4 overflow-hidden relative"
          style={{ background: "linear-gradient(135deg, #E8002D 0%, #C0002A 100%)" }}
        >
          <div className="absolute top-0 right-0 w-24 h-24 rounded-full opacity-10"
            style={{ background: "white", transform: "translate(30%, -30%)" }} />
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/70 text-[11px] font-medium">롯데시네마 멤버십</p>
              <p className="text-white text-[18px] font-black mt-0.5">GOLD 회원</p>
              <p className="text-white/80 text-[12px] mt-1">다음 등급까지 <span className="font-bold">6회</span> 남음</p>
            </div>
            <div className="text-right">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center"
                style={{ background: "rgba(255,255,255,0.2)" }}
              >
                <span className="text-2xl">🏆</span>
              </div>
            </div>
          </div>
          <div className="mt-3">
            <div className="flex justify-between mb-1">
              <span className="text-white/70 text-[10px]">GOLD → PLATINUM</span>
              <span className="text-white text-[10px] font-bold">24/30회</span>
            </div>
            <div className="h-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.2)" }}>
              <div className="h-full rounded-full bg-white" style={{ width: "80%" }} />
            </div>
          </div>
        </div>

        {/* Upcoming Tickets */}
        <div className="bg-white rounded-2xl overflow-hidden card-shadow">
          <div className="px-4 py-3 border-b border-gray-50 flex items-center justify-between">
            <h3 className="text-[14px] font-bold text-gray-900">예매 내역</h3>
            <button onClick={handleFeatureClick} className="flex items-center gap-0.5 text-[12px]" style={{ color: "#E8002D" }}>
              전체보기 <ChevronRight size={12} />
            </button>
          </div>
          <div className="divide-y divide-gray-50">
            {MOCK_TICKETS.map((ticket) => (
              <div key={ticket.id} className="px-4 py-3.5">
                <div className="flex items-start gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: ticket.status === "upcoming" ? "#FFF1F2" : "#F9FAFB",
                    }}
                  >
                    <Ticket
                      size={18}
                      color={ticket.status === "upcoming" ? "#E8002D" : "#9CA3AF"}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <p className="text-[13px] font-bold text-gray-900 truncate">{ticket.movie}</p>
                      <span
                        className="text-[9px] font-bold px-1.5 py-0.5 rounded flex-shrink-0"
                        style={{
                          background: ticket.status === "upcoming" ? "#FFF1F2" : "#F3F4F6",
                          color: ticket.status === "upcoming" ? "#E8002D" : "#9CA3AF",
                        }}
                      >
                        {ticket.status === "upcoming" ? "예정" : "관람 완료"}
                      </span>
                    </div>
                    <p className="text-[11px] text-gray-500 mt-0.5">
                      {ticket.date} {ticket.time} · {ticket.format}
                    </p>
                    <p className="text-[11px] text-gray-400 mt-0.5">
                      {ticket.theater} {ticket.screen} · {ticket.seats.join(", ")}
                    </p>
                  </div>
                  <ChevronRight size={14} className="text-gray-300 flex-shrink-0 mt-1" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Menu */}
        <div className="bg-white rounded-2xl overflow-hidden card-shadow">
          <div className="grid grid-cols-4 divide-x divide-gray-100">
            {[
              { icon: Gift, label: "쿠폰함", count: "3" },
              { icon: CreditCard, label: "결제 수단", count: null },
              { icon: Film, label: "찜한 영화", count: "8" },
              { icon: Bell, label: "알림 설정", count: null },
            ].map((item) => (
              <button
                key={item.label}
                onClick={handleFeatureClick}
                className="py-4 flex flex-col items-center gap-1.5 hover:bg-gray-50 transition-colors"
              >
                <div className="relative">
                  <item.icon size={20} className="text-gray-600" />
                  {item.count && (
                    <span
                      className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full text-white text-[9px] font-bold flex items-center justify-center"
                      style={{ background: "#E8002D" }}
                    >
                      {item.count}
                    </span>
                  )}
                </div>
                <span className="text-[10px] font-semibold text-gray-600">{item.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Settings Menu */}
        <div className="bg-white rounded-2xl overflow-hidden card-shadow">
          {[
            { icon: Settings, label: "계정 설정" },
            { icon: Bell, label: "알림 설정" },
            { icon: LogOut, label: "로그아웃", danger: true },
          ].map((item, idx) => (
            <button
              key={item.label}
              onClick={handleFeatureClick}
              className={`w-full flex items-center gap-3 px-4 py-3.5 hover:bg-gray-50 transition-colors ${
                idx < 2 ? "border-b border-gray-50" : ""
              }`}
            >
              <item.icon size={18} color={item.danger ? "#E8002D" : "#6B7280"} />
              <span
                className="flex-1 text-left text-[14px] font-medium"
                style={{ color: item.danger ? "#E8002D" : "#374151" }}
              >
                {item.label}
              </span>
              {!item.danger && <ChevronRight size={14} className="text-gray-300" />}
            </button>
          ))}
        </div>

        {/* App Version */}
        <p className="text-center text-[11px] text-gray-300 pb-2">
          롯데시네마 v3.2.1 · 개인정보처리방침 · 이용약관
        </p>
      </div>
    </div>
  );
}
