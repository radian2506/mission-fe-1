import { useState } from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  const [activeNav, setActiveNav] = useState("Series");
  const navItems = ["Series", "Film", "Daftar Baru", "Genre"];

  return (
    <div
      style={{
        background: "#0a0a0f",
        color: "#f0eff4",
        fontFamily: "'DM Sans', sans-serif",
        minHeight: "100vh",
        overflow: "hidden",
      }}
    >
      {/* Navbar */}
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "1.2rem 3rem",
          borderBottom: "1px solid #1e1e2a",
          background: "rgba(10,10,15,0.95)",
        }}
      >
        <span
          style={{
            fontFamily: "Bebas Neue, sans-serif",
            fontSize: "2rem",
            color: "#e63946",
            letterSpacing: 2,
          }}
        >
          Chill
        </span>
        <div style={{ display: "flex", gap: "2rem", fontSize: "0.88rem" }}>
          {navItems.map((item) => (
            <span
              key={item}
              onClick={() => setActiveNav(item)}
              style={{
                cursor: "pointer",
                transition: "color 0.2s",
                color: activeNav === item ? "#f0eff4" : "#8b8a94",
              }}
            >
              {item}
            </span>
          ))}
        </div>
        <div style={{ display: "flex", gap: "0.8rem", alignItems: "center" }}>
          <Link to="/login">
            <button
              style={{
                background: "transparent",
                border: "1px solid #2a2a38",
                color: "#8b8a94",
                padding: "0.4rem 1.2rem",
                borderRadius: 6,
                fontSize: "0.85rem",
                cursor: "pointer",
                fontFamily: "DM Sans, sans-serif",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.target.style.borderColor = "#e63946";
                e.target.style.color = "#f0eff4";
              }}
              onMouseLeave={(e) => {
                e.target.style.borderColor = "#2a2a38";
                e.target.style.color = "#8b8a94";
              }}
            >
              Masuk
            </button>
          </Link>
          <Link to="/register">
            <button
              style={{
                background: "#e63946",
                border: "none",
                color: "#fff",
                padding: "0.4rem 1.2rem",
                borderRadius: 6,
                fontSize: "0.85rem",
                cursor: "pointer",
                fontFamily: "DM Sans, sans-serif",
              }}
            >
              Daftar
            </button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "4rem 3rem",
          gap: "2rem",
          minHeight: "calc(100vh - 65px)",
          position: "relative",
        }}
      >
        {/* BG Glows */}
        <div
          style={{
            position: "absolute",
            width: 500,
            height: 500,
            borderRadius: "50%",
            pointerEvents: "none",
            background:
              "radial-gradient(circle, rgba(230,57,70,0.07) 0%, transparent 70%)",
            top: -100,
            right: 80,
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 300,
            height: 300,
            borderRadius: "50%",
            pointerEvents: "none",
            background:
              "radial-gradient(circle, rgba(255,107,138,0.05) 0%, transparent 70%)",
            bottom: 0,
            left: 200,
          }}
        />

        {/* Left — Text */}
        <div
          style={{ flex: 1, maxWidth: 520, position: "relative", zIndex: 2 }}
        >
          <p
            style={{
              fontSize: "0.72rem",
              letterSpacing: 3,
              textTransform: "uppercase",
              color: "#8b8a94",
              marginBottom: "1rem",
            }}
          >
            Movie Streaming Platform
          </p>
          <h1
            style={{
              fontFamily: "Bebas Neue, sans-serif",
              fontSize: "3.2rem",
              lineHeight: 1.05,
              color: "#f0eff4",
              marginBottom: "1.5rem",
            }}
          >
            Chill
          </h1>
          <p
            style={{
              color: "#8b8a94",
              fontSize: "0.88rem",
              lineHeight: 1.8,
              marginBottom: "1.2rem",
              maxWidth: 440,
            }}
          >
            Chill adalah aplikasi berbasis web yang dirancang untuk memberi
            pengguna akses ke <em style={{ color: "#f0eff4" }}>library</em> film
            dan acara TV yang luas dari perangkat mereka. Chill menawarkan
            antarmuka yang ramah pengguna yang memungkinkan pengguna mencari
            film dan acara TV, dan mulai menonton secara instan.
          </p>
          <p
            style={{
              color: "#8b8a94",
              fontSize: "0.88rem",
              lineHeight: 1.8,
              maxWidth: 440,
            }}
          >
            Chill menawarkan rekomendasi hasil personalisasi berdasarkan
            kebiasaan menonton pengguna, membantu pengguna menemukan film dan
            acara TV baru yang mungkin tidak mereka temukan sebelumnya. Selain
            itu, Chill juga menawarkan konten orisinal, termasuk film dan acara
            TV, yang hanya dapat ditemukan di aplikasi Chill, menjadikannya
            sumber yang unik dan berharga bagi pengguna.
          </p>
        </div>

        {/* Right — Phone Mockup */}
        <div style={{ flex: "0 0 auto", position: "relative", zIndex: 2 }}>
          <div
            style={{
              width: 220,
              transform: "rotate(8deg)",
              filter: "drop-shadow(0 30px 60px rgba(230,57,70,0.15))",
            }}
          >
            <div
              style={{
                background: "#111118",
                borderRadius: 32,
                border: "2px solid #2a2a38",
                overflow: "hidden",
              }}
            >
              {/* Notch */}
              <div
                style={{
                  width: 70,
                  height: 16,
                  background: "#0a0a0f",
                  borderRadius: "0 0 12px 12px",
                  margin: "0 auto",
                }}
              />
              {/* Status bar */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "4px 14px 0",
                  fontSize: 8,
                  color: "#8b8a94",
                }}
              >
                <span>9:30</span>
                <span>▲ ◉</span>
              </div>
              {/* URL */}
              <div
                style={{
                  background: "#1a1a24",
                  margin: "6px 10px",
                  borderRadius: 8,
                  padding: "4px 10px",
                  fontSize: 7,
                  color: "#8b8a94",
                  textAlign: "center",
                }}
              >
                🔒 https://chill.com
              </div>
              {/* Mini nav */}
              <div
                style={{
                  display: "flex",
                  gap: 8,
                  padding: "4px 10px",
                  fontSize: 7,
                  color: "#8b8a94",
                  borderBottom: "1px solid #1a1a24",
                }}
              >
                {["Series", "Film", "Daftar Baru", "Genre"].map((i, idx) => (
                  <span
                    key={i}
                    style={{ color: idx === 0 ? "#f0eff4" : "#8b8a94" }}
                  >
                    {i}
                  </span>
                ))}
              </div>
              {/* Featured card */}
              <div
                style={{
                  margin: "8px 10px",
                  borderRadius: 10,
                  overflow: "hidden",
                  position: "relative",
                  height: 110,
                  background:
                    "linear-gradient(135deg, #2a0a18 0%, #0a0a2a 100%)",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: 8,
                    background:
                      "linear-gradient(transparent, rgba(0,0,0,0.85))",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "Bebas Neue, sans-serif",
                      fontSize: 13,
                      color: "#fff",
                    }}
                  >
                    Happiness
                  </div>
                  <div
                    style={{
                      fontSize: 6,
                      color: "#aaa",
                      marginTop: 2,
                      lineHeight: 1.4,
                    }}
                  >
                    Menghadapi serangan zombie, sebuah keluarga bertahan hidup
                    di gedung aparteme...
                  </div>
                  <div
                    style={{
                      display: "flex",
                      gap: 4,
                      marginTop: 4,
                      alignItems: "center",
                    }}
                  >
                    <span
                      style={{
                        fontSize: 6,
                        padding: "2px 5px",
                        borderRadius: 3,
                        background: "#e63946",
                        color: "#fff",
                      }}
                    >
                      Mulai
                    </span>
                    <span
                      style={{
                        fontSize: 6,
                        padding: "2px 5px",
                        borderRadius: 3,
                        border: "1px solid #444",
                        color: "#aaa",
                      }}
                    >
                      Selengkapnya
                    </span>
                    <span
                      style={{
                        fontSize: 6,
                        padding: "2px 5px",
                        borderRadius: 3,
                        background: "#333",
                        color: "#fff",
                        marginLeft: "auto",
                      }}
                    >
                      18+
                    </span>
                  </div>
                </div>
              </div>
              {/* Continue watching */}
              <div
                style={{
                  padding: "6px 10px 4px",
                  fontSize: 8,
                  color: "#f0eff4",
                  fontWeight: 600,
                }}
              >
                Melanjutkan Tonton Film
              </div>
              <div style={{ display: "flex", gap: 6, padding: "0 10px 12px" }}>
                <div
                  style={{
                    flex: 1,
                    height: 50,
                    borderRadius: 6,
                    background: "linear-gradient(135deg, #1a0808, #0a0a1a)",
                    border: "1px solid #2a2a38",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      top: 3,
                      left: 4,
                      fontSize: 5,
                      background: "#e63946",
                      color: "#fff",
                      padding: "1px 3px",
                      borderRadius: 2,
                    }}
                  >
                    Episode Baru
                  </span>
                  <span
                    style={{
                      position: "absolute",
                      bottom: 3,
                      left: 4,
                      fontSize: 6,
                      color: "#ddd",
                      fontWeight: 600,
                    }}
                  >
                    Alice in Borderland
                  </span>
                </div>
                <div
                  style={{
                    flex: 1,
                    height: 50,
                    borderRadius: 6,
                    background: "linear-gradient(135deg, #0a1a08, #1a0a1a)",
                    border: "1px solid #2a2a38",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      bottom: 3,
                      left: 4,
                      fontSize: 6,
                      color: "#ddd",
                      fontWeight: 600,
                    }}
                  >
                    IN BORDERLAND
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
