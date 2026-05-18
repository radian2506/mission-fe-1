import { Link } from "react-router-dom";

export default function Navbar({ navItems, activeNav, onNavClick }) {
  return (
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
            key={item.id}
            onClick={() => onNavClick(item.label)}
            style={{
              cursor: "pointer",
              transition: "color 0.2s",
              color: activeNav === item.label ? "#f0eff4" : "#8b8a94",
            }}
          >
            {item.label}
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
  );
}
