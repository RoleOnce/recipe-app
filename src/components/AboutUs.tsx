import React, { useEffect, useState } from "react";
import "../styling/AboutUs.css";
import "../interfaces/TeamMemberInterface";

const AboutUs = () => {
  // Data for team members
  // Define the team members data
  const teamMembers: TeamMember[] = [
    {
      name: "Alice",
      jobTitle: "Software Engineer",
      description: "Passionate coder with a love for frontend development.",
      image:
        "https://img.freepik.com/premium-vector/male-character-presentation-making-gesture_316839-3134.jpg?size=626&ext=jpg",
    },
    {
      name: "Kim",
      jobTitle: "Software Engineer",
      description: "Passionate coder with a love for frontend development.",
      image:
        "https://img.freepik.com/premium-vector/teenager-boy-laughing-expressing-emotions_316839-2943.jpg?size=626&ext=jpg",
    },
    {
      name: "Malcom",
      jobTitle: "Software Engineer",
      description: "Passionate coder with a love for frontend development.",
      image:
        "https://img.freepik.com/premium-vector/young-business-man-showing-gesture-good-idea-flat-vector-cartoon-design_185694-733.jpg",
    },
    {
      name: "Bilge",
      jobTitle: "Software Engineer",
      description: "Passionate coder with a love for frontend development.",
      image:
        "https://img.freepik.com/premium-vector/bearded-man-employee-giving-presentation-showing_316839-2935.jpg",
    },
    {
      name: "Hampus",
      jobTitle: "Software Engineer",
      description: "Passionate coder with a love for frontend development.",
      image:
        "https://img.freepik.com/premium-vector/person-using-mobile-phone-holding-hand-surfing-internet-reading-online-bearded-man-glasses-texting-with-smartphone-cellphone-flat-vector-illustration-isolated-white-background_633472-561.jpg?size=626&ext=jpg",
    },
    {
      name: "Arash",
      jobTitle: "Software Engineer",
      description: "Passionate coder with a love for frontend development.",
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/008/056/913/small_2x/young-smiling-man-cartoon-character-shows-gesture-cool-with-two-thumbs-up-flat-illustration-isolated-on-white-background-free-vector.jpg",
    },
    {
      name: "Pablo",
      jobTitle: "UI/UX Designer",
      description: "Creative designer with a knack for user-centered design.",
      image:
        "https://img.freepik.com/premium-vector/smiling-businessman-gesturing-showing-thumbs-up_316839-2100.jpg",
    },
  ];

  // State to keep track of the selected team member
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  // Function to handle clicking on a team member
  const handleMemberClick = (member: TeamMember) => {
    setSelectedMember(member);
  };
  
  useEffect(() => {
    if (selectedMember) {
      const element = document.getElementById("about-us-selected-member");
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [selectedMember]);

  return (
    <div className="about-us-container">
      <div className="about-us-header-section">
        <div className="about-us-background-image">
          <img
            src="https://eep.io/images/yzco4xsimv0y/6aZY89JahywcsYcUkC6seq/88f9ad3c2c5004fd2166b1b5b7ee6567/hero_our-story.jpg?w=1520&fm=avif&q=60"
            alt="Group"
          />
          <h1 className="about-us-group-name">Grupp 4</h1>
        </div>
      </div>
      <div className="about-us-description-section">
        <p>
          Välkommen till Grupp 4! Vi är en grupp människor från olika
          livsstilar, alla dyker in i programmering tillsammans. Från de med
          lite mer erfarenhet till nyfikna entusiaster, är vi en mångsidig skara
          förenade av vår kärlek till kodning. Men hej, det är inte bara arbete
          och ingen lek. Vi ser till att umgås efter arbetstid, byta historier
          och bygga vänskap. Kom och joina oss på denna programmeringsresa där
          lärande är kul och vänskap är nyckeln.
        </p>
      </div>
      <div className="about-us-info-section">
        <div className="about-us-info-card">
          <h2>Events 🎉</h2>
          <p>
            Weekly coding challenges, game nights, and more! AW (After Work)
            hangouts are a must!
          </p>
        </div>
        <div className="about-us-info-card">
          <h2>Opening Hours ⏰</h2>
          <p>
            We're always open for coding adventures! Closed for distractions.
            Don't contact us during coding marathons! 🚀
          </p>
        </div>
      </div>
      {/* The crew section */}
      <div className="about-us-crew-section">
        <h2>The Crew</h2>
        <div className="about-us-crew">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="about-us-member"
              onClick={() => handleMemberClick(member)}
            >
              <img src={member.image} alt={member.name} />
              <h3>{member.name}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Additional details about the selected team member */}
      {selectedMember && (
        <div id="about-us-selected-member" className="about-us-selected-member">
          <img src={selectedMember.image} alt={selectedMember.name} />
          <h3>{selectedMember.name}</h3>
          <p>{selectedMember.jobTitle}</p>
          <p>{selectedMember.description}</p>
        </div>
      )}
    </div>
  );
};

export default AboutUs;
