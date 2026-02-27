// AppShell — Lotte Cinema Redesign
// Design: Swiss International Typographic Style
// Layout: Centered phone frame on dark background with desktop info panel

import { useLocation, Link } from "wouter";
import { Home, Film, Ticket, User } from "lucide-react";

interface AppShellProps {
  children: React.ReactNode;
}

const tabs = [
  { href: "/", icon: Home, label: "홈" },
  { href: "/movies", icon: Film, label: "영화" },
  { href: "/booking/1", icon: Ticket, label: "예매" },
  { href: "/mypage", icon: User, label: "MY" },
];

export default function AppShell({ children }: AppShellProps) {
  const [location] = useLocation();

  const isBookingFlow = location.startsWith("/booking") || location.startsWith("/seats");

  const showBottomBar = !isBookingFlow;

  const getActiveTab = () => {
    if (location === "/") return "/";
    if (location.startsWith("/movies")) return "/movies";
    if (location.startsWith("/booking") || location.startsWith("/seats")) return "/booking/1";
    if (location.startsWith("/mypage")) return "/mypage";
    return "/";
  };

  const activeTab = getActiveTab();

  return (
    <div
      className="min-h-screen flex items-start justify-center"
      style={{ background: "linear-gradient(160deg, #0d0d1a 0%, #1a0a0a 50%, #0d0d1a 100%)" }}
    >
      {/* Desktop left panel — only visible on large screens */}
      <div className="hidden lg:flex flex-col justify-center items-end pr-8 pt-20 w-64 flex-shrink-0">
        <div className="text-right">
          <div className="flex items-center gap-2 justify-end mb-4">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ background: "#E8002D" }}
            >
              <span className="text-white font-black text-sm">L</span>
            </div>
            <span className="text-white font-bold text-lg tracking-tight">LOTTE CINEMA</span>
          </div>
          <p className="text-white/40 text-sm leading-relaxed max-w-48">
            영화 예매부터 좌석 선택까지,<br />
            더 편리한 롯데시네마 경험
          </p>
          <div className="mt-6 space-y-2">
            {["현재 상영작 4편", "개봉 예정작 2편", "전국 5개 극장"].map((item) => (
              <div key={item} className="flex items-center gap-2 justify-end">
                <span className="text-white/50 text-xs">{item}</span>
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#E8002D" }} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Phone frame */}
      <div
        className="w-full flex-shrink-0"
        style={{
          maxWidth: 430,
          background: "#F7F8FA",
          minHeight: "100vh",
          boxShadow: "0 0 80px rgba(0,0,0,0.6), 0 0 160px rgba(232,0,45,0.1)",
          position: "relative",
        }}
      >
        {/* Top Status Bar */}
        <div className="flex items-center justify-between px-5 pt-3 pb-2 bg-white sticky top-0 z-40 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <div
              className="w-7 h-7 rounded-lg flex items-center justify-center"
              style={{ background: "#E8002D" }}
            >
              <span className="text-white font-black text-xs leading-none">L</span>
            </div>
            <span className="font-bold text-[15px] tracking-tight text-gray-900">
              LOTTE CINEMA
            </span>
          </div>
          <div className="flex items-center gap-3">
            <button className="text-gray-500 hover:text-gray-800 transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
            </button>
            <button className="text-gray-500 hover:text-gray-800 transition-colors relative">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
              </svg>
              <span
                className="absolute -top-1 -right-1 w-4 h-4 rounded-full text-white text-[9px] font-bold flex items-center justify-center"
                style={{ background: "#E8002D" }}
              >
                3
              </span>
            </button>
          </div>
        </div>

        {/* Page Content */}
        <div className={`${showBottomBar ? "pb-20" : ""}`}>
          {children}
        </div>

        {/* Bottom Tab Bar */}
        {showBottomBar && (
          <div
            className="fixed bottom-0 z-50 border-t border-gray-100"
            style={{
              left: "50%",
              transform: "translateX(-50%)",
              width: "100%",
              maxWidth: 430,
              background: "rgba(255,255,255,0.97)",
              backdropFilter: "blur(12px)",
            }}
          >
            <div className="flex items-center justify-around py-2">
              {tabs.map((tab) => {
                const isActive = activeTab === tab.href;
                const Icon = tab.icon;
                return (
                  <Link key={tab.href} href={tab.href}>
                    <button className="flex flex-col items-center gap-0.5 px-4 py-1.5 min-w-[60px] transition-all">
                      <Icon
                        size={22}
                        strokeWidth={isActive ? 2.5 : 1.8}
                        color={isActive ? "#E8002D" : "#9CA3AF"}
                      />
                      <span
                        className="text-[10px] font-semibold tracking-wide"
                        style={{ color: isActive ? "#E8002D" : "#9CA3AF" }}
                      >
                        {tab.label}
                      </span>
                      {isActive && (
                        <div
                          className="w-1 h-1 rounded-full"
                          style={{ background: "#E8002D" }}
                        />
                      )}
                    </button>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Desktop right panel */}
      <div className="hidden lg:flex flex-col justify-start items-start pl-8 pt-20 w-64 flex-shrink-0">
        <div className="space-y-3 w-full">
          <p className="text-white/30 text-xs font-semibold uppercase tracking-widest">Navigation</p>
          {tabs.map((tab) => {
            const isActive = activeTab === tab.href;
            const Icon = tab.icon;
            return (
              <Link key={tab.href} href={tab.href}>
                <div
                  className="flex items-center gap-3 px-3 py-2.5 rounded-xl cursor-pointer transition-all"
                  style={{
                    background: isActive ? "rgba(232,0,45,0.15)" : "transparent",
                    border: isActive ? "1px solid rgba(232,0,45,0.3)" : "1px solid transparent",
                  }}
                >
                  <Icon
                    size={18}
                    color={isActive ? "#E8002D" : "rgba(255,255,255,0.4)"}
                    strokeWidth={isActive ? 2.5 : 1.8}
                  />
                  <span
                    className="text-sm font-medium"
                    style={{ color: isActive ? "#E8002D" : "rgba(255,255,255,0.4)" }}
                  >
                    {tab.label}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
