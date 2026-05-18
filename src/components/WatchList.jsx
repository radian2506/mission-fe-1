export default function WatchList({ watchList, onAdd, onUpdate, onDelete }) {
  return (
    <>
      {/* Label section */}
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

      {/* Cards — dirender dari watchList array of objects */}
      <div style={{ display: "flex", gap: 6, padding: "0 10px 8px" }}>
        {watchList.map((item) => (
          <div
            key={item.id}
            style={{
              flex: 1,
              height: 50,
              borderRadius: 6,
              background: item.gradient,
              border: "1px solid #2a2a38",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Badge "Episode Baru" — hanya muncul kalau item.badge ada */}
            {item.badge && (
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
                {item.badge}
              </span>
            )}

            {/* Judul di bawah card */}
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
              {item.bottomLabel}
            </span>
          </div>
        ))}
      </div>

      {/* Tombol CRUD */}
      <div
        style={{
          display: "flex",
          gap: 4,
          padding: "0 10px 10px",
          flexWrap: "wrap",
        }}
      >
        {/* ADD — selalu tampil */}
        <button
          onClick={onAdd}
          style={{
            fontSize: 5,
            padding: "2px 5px",
            borderRadius: 3,
            background: "#1a3a1a",
            color: "#6ef06e",
            border: "1px solid #2a4a2a",
            cursor: "pointer",
          }}
        >
          + Add
        </button>

        {/* UPDATE — hanya tampil kalau watchList tidak kosong */}
        {watchList.length > 0 && (
          <button
            onClick={() => onUpdate(watchList[0].id)}
            style={{
              fontSize: 5,
              padding: "2px 5px",
              borderRadius: 3,
              background: "#1a2a3a",
              color: "#6eaff0",
              border: "1px solid #2a3a4a",
              cursor: "pointer",
            }}
          >
            ✎ Edit
          </button>
        )}

        {/* DELETE — hanya tampil kalau watchList tidak kosong */}
        {watchList.length > 0 && (
          <button
            onClick={() => onDelete(watchList[watchList.length - 1].id)}
            style={{
              fontSize: 5,
              padding: "2px 5px",
              borderRadius: 3,
              background: "#3a1a1a",
              color: "#f06e6e",
              border: "1px solid #4a2a2a",
              cursor: "pointer",
            }}
          >
            ✕ Del
          </button>
        )}
      </div>
    </>
  );
}
