function Events() {
  const events = [
    { title: "Hackathon", date: "Feb 18" },
    { title: "Robotics Workshop", date: "March 2" },
    { title: "Placement Talk", date: "April 5" }
  ];

  return (
    <div className="section">
      <div className="section-title">Events & Announcements</div>

      <ul>
        {events.map((e) => (
          <li key={e.title}>
            <strong>{e.title}</strong> — {e.date}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Events;
