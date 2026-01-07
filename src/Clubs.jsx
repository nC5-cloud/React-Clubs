function Clubs() {
  const clubs = [
    { name: "Robotics Club", desc: "Projects, drones, IoT, competitions" },
    { name: "Coding Club", desc: "DSA, hackathons, coding contests" },
    { name: "Electronics Society", desc: "Circuits, VLSI, embedded systems" },
    { name: "Cultural Club", desc: "Drama, arts, literature" },
    { name: "Music Club", desc: "Band, vocals, instruments" }
  ];

  return (
    <div className="section">
      <div className="section-title">Clubs List</div>

      <div style={{ display: "grid", gap: "15px" }}>
        {clubs.map((club) => (
          <div
            key={club.name}
            style={{
              padding: "12px",
              borderRadius: "10px",
              background: "white",
              boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
              border: "1px solid #eee"
            }}
          >
            <h3>{club.name}</h3>
            <p>{club.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Clubs;
