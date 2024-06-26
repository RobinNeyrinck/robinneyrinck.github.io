import React from "react";
import "../../assets/css/blogs.css";

function TechMeetMix() {
  return (
    <div className="blog-container">
      <h1>Tech Meet & Mix 2023</h1>
      <img
        src="assets/images/blogs/tech-meet-mix/thumbnail.png"
        alt="thumbnail of the tech meet & mix"
        className="blog-image"
      />
      <p className="blog-content">
        At our recent Tech Meet & Mix event, attendees were treated to a
        tech-filled day featuring in-depth sessions on Flutter by Fré Dumazy and
        RedwoodJS by Adam Juran. Fré’s exploration of Flutter emphasized its
        cross-platform capabilities, showcasing practical applications through
        hands-on demonstrations. Juran, on the other hand, shed light on
        RedwoodJS, highlighting its many purposes and tight integration with
        GraphQL.
      </p>
      <img
        src="assets/images/blogs/tech-meet-mix/fre.png"
        alt="A picture of speaker Fré Dumazy"
        className="blog-image"
      />
      <p className="blog-content">
        As the day concluded, the energy in the room was palpable. Attendees
        left with practical insights into Flutter and RedwoodJS, strengthened
        connections within the tech community, and a sense of excitement for
        future events.
      </p>
      <img
        src="assets/images/blogs/tech-meet-mix/adam.png"
        alt="A picture of speaker Adam Juran"
        className="blog-image"
      />
      <div className="source">
        <p>
          Source:{" "}
          <a href="https://www.eventbrite.be/e/tickets-tech-meet-mix-2023-745159641547?aff=oddtdtcreator">
            Tech Meet & Mix 2023
          </a>
        </p>
      </div>
      <p className="tags">Tags:</p>
      <ul className="tag-list">
        <li>Adam Juran</li>
        <li>Brugge</li>
        <li>Flutter</li>
        <li>Fré Dumazy</li>
        <li>Organized Event</li>
        <li>RedWoodJS</li>
      </ul>
    </div>
  );
}

export default TechMeetMix;
