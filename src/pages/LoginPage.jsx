import { useState } from "react";
import { Link } from "react-router-dom";

export default function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    alert(`Login sebagai: ${form.email}`);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "var(--bg-dark)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decoration */}
      <div
        style={{
          position: "absolute",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(230,57,70,0.12) 0%, transparent 70%)",
          top: "-100px",
          right: "-100px",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          background: "var(--bg-card)",
          border: "1px solid var(--border)",
          borderRadius: 16,
          padding: "2.5rem",
          width: "100%",
          maxWidth: 420,
          position: "relative",
          zIndex: 1,
        }}
      >
        <Link to="/" style={{ display: "block", marginBottom: "2rem" }}>
          <span
            style={{
              fontFamily: "Bebas Neue",
              fontSize: "2rem",
              color: "var(--accent-red)",
              letterSpacing: 2,
            }}
          >
            CHILL
          </span>
        </Link>

        <h1
          style={{
            fontSize: "1.6rem",
            fontWeight: 600,
            marginBottom: "0.4rem",
          }}
        >
          Masuk ke Akun
        </h1>
        <p
          style={{
            color: "var(--text-muted)",
            fontSize: "0.9rem",
            marginBottom: "2rem",
          }}
        >
          Belum punya akun?{" "}
          <Link to="/register" style={{ color: "var(--accent-pink)" }}>
            Daftar sekarang
          </Link>
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <div>
            <label
              style={{
                fontSize: "0.8rem",
                color: "var(--text-muted)",
                display: "block",
                marginBottom: 6,
              }}
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="email@kamu.com"
              style={{
                width: "100%",
                background: "var(--bg-surface)",
                border: "1px solid var(--border)",
                borderRadius: 8,
                padding: "0.75rem 1rem",
                color: "var(--text-primary)",
                fontSize: "0.95rem",
                outline: "none",
              }}
              onFocus={(e) =>
                (e.target.style.borderColor = "var(--accent-red)")
              }
              onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
            />
          </div>
          <div>
            <label
              style={{
                fontSize: "0.8rem",
                color: "var(--text-muted)",
                display: "block",
                marginBottom: 6,
              }}
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="••••••••"
              style={{
                width: "100%",
                background: "var(--bg-surface)",
                border: "1px solid var(--border)",
                borderRadius: 8,
                padding: "0.75rem 1rem",
                color: "var(--text-primary)",
                fontSize: "0.95rem",
                outline: "none",
              }}
              onFocus={(e) =>
                (e.target.style.borderColor = "var(--accent-red)")
              }
              onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
            />
          </div>
          <button
            onClick={handleSubmit}
            style={{
              background: "var(--accent-red)",
              border: "none",
              color: "#fff",
              padding: "0.85rem",
              borderRadius: 8,
              fontSize: "1rem",
              fontWeight: 600,
              marginTop: "0.5rem",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => (e.target.style.opacity = "0.85")}
            onMouseLeave={(e) => (e.target.style.opacity = "1")}
          >
            Masuk
          </button>
        </div>

        <p
          style={{
            textAlign: "center",
            color: "var(--text-muted)",
            fontSize: "0.8rem",
            marginTop: "1.5rem",
          }}
        >
          <span style={{ color: "var(--accent-pink)", cursor: "pointer" }}>
            Lupa password?
          </span>
        </p>
      </div>
    </div>
  );
}
