import { useState } from "react";
import { Link } from "react-router-dom";

export default function RegisterPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    if (form.password !== form.confirm) return alert("Password tidak cocok!");
    alert(`Akun berhasil dibuat untuk: ${form.email}`);
  };

  const inputStyle = {
    width: "100%",
    background: "var(--bg-surface)",
    border: "1px solid var(--border)",
    borderRadius: 8,
    padding: "0.75rem 1rem",
    color: "var(--text-primary)",
    fontSize: "0.95rem",
    outline: "none",
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
      <div
        style={{
          position: "absolute",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,107,138,0.1) 0%, transparent 70%)",
          bottom: "-100px",
          left: "-100px",
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
          maxWidth: 440,
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
          Buat Akun Baru
        </h1>
        <p
          style={{
            color: "var(--text-muted)",
            fontSize: "0.9rem",
            marginBottom: "2rem",
          }}
        >
          Sudah punya akun?{" "}
          <Link to="/login" style={{ color: "var(--accent-pink)" }}>
            Masuk di sini
          </Link>
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {[
            {
              label: "Nama Lengkap",
              name: "name",
              type: "text",
              placeholder: "John Doe",
            },
            {
              label: "Email",
              name: "email",
              type: "email",
              placeholder: "email@kamu.com",
            },
            {
              label: "Password",
              name: "password",
              type: "password",
              placeholder: "••••••••",
            },
            {
              label: "Konfirmasi Password",
              name: "confirm",
              type: "password",
              placeholder: "••••••••",
            },
          ].map((field) => (
            <div key={field.name}>
              <label
                style={{
                  fontSize: "0.8rem",
                  color: "var(--text-muted)",
                  display: "block",
                  marginBottom: 6,
                }}
              >
                {field.label}
              </label>
              <input
                type={field.type}
                name={field.name}
                value={form[field.name]}
                onChange={handleChange}
                placeholder={field.placeholder}
                style={inputStyle}
                onFocus={(e) =>
                  (e.target.style.borderColor = "var(--accent-red)")
                }
                onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
              />
            </div>
          ))}

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
            Daftar Sekarang
          </button>
        </div>

        <p
          style={{
            textAlign: "center",
            color: "var(--text-muted)",
            fontSize: "0.75rem",
            marginTop: "1.5rem",
            lineHeight: 1.6,
          }}
        >
          Dengan mendaftar, kamu setuju dengan{" "}
          <span style={{ color: "var(--accent-pink)" }}>
            Syarat & Ketentuan
          </span>{" "}
          kami.
        </p>
      </div>
    </div>
  );
}
