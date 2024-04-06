import React, { useState, useEffect } from "react";
import "./Timeline.css"; // Import your CSS file

export default function Timeline() {
  const [timelineData, setTimelineData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch timeline data from the API
    fetch(
      "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae"
    )
      .then((response) => response.json())
      .then((data) => {
        // Check if data.timeline is defined before setting the state
        if (data.user.timeline) {
          setTimelineData(data.user.timeline);
          setLoading(false); // Set loading to false when data is fetched
        } else {
          console.error("Timeline data is undefined:", data);
          setLoading(false); // Set loading to false in case of error
        }
      })
      .catch((error) => {
        console.error("Error fetching timeline:", error);
        setLoading(false); // Set loading to false in case of error
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section id="timeline" className="timeline-section">
      <div className="container px-5 py-10 mx-auto text-center">
        <div className="flex flex-col w-full mb-20">
          <h1 className="timeline-title">My Timeline</h1>
        </div>
        <div className="flex flex-wrap -m-4">
          {timelineData.map((event) => (
            <div className="timeline-event" key={event._id}>
              <div className="timeline-card">
                <h2 className="timeline-company">{event.company_name}</h2>
                <h3 className="timeline-job">{event.jobTitle}</h3>
                <p className="timeline-summary">{event.summary}</p>
                <div className="timeline-details">
                  <span className="timeline-date">
                    {new Date(event.startDate).toLocaleDateString()} -{" "}
                    {new Date(event.endDate).toLocaleDateString()}
                  </span>
                  <span className="timeline-location">
                    {event.jobLocation}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
