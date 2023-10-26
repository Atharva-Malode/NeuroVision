import React from 'react';
import './aboutus.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faContactCard, faLightbulb, faLink } from '@fortawesome/free-solid-svg-icons'
const teamMembers = [
  {
    name: "Dr. Mangala Madankar",
    designation: "Project Guide",
    href: "",
    socialLinks: [
      { url: 'https://www.instagram.com/dhnyanesh_gajbhiye/', icon: faContactCard },
      { url: 'mailto:atharvamalode21@gmail.com', icon: faEnvelope },
      { url: 'https://www.linkedin.com/in/atharva-malode/', icon: faLink },
    ],
  },
  {
    name: "Ayush Wase",
    designation: "Data Scientist",
    href: "https://raw.githubusercontent.com/Atharva-Malode/ODS/master/assets/ayush.png",
    socialLinks: [
      { url: 'https://www.instagram.com/dhnyanesh_gajbhiye/', icon: faContactCard },
      { url: 'mailto:ayushwase@gmail.com', icon: faEnvelope },
      { url: 'https://www.linkedin.com/in/ayush-wase-a6a130208/', icon: faLink },
    ],
  },
  {
    name: "Chaitanya Wankhede",
    designation: "Software Developer",
    href: "https://raw.githubusercontent.com/Atharva-Malode/ODS/master/assets/chaitanya.png",
    socialLinks: [
      { url: 'mailto:chaitanyawankhede705@gmail.com', icon: faContactCard },
      { url: 'https://www.linkedin.com/in/chaitanya-wankhede-7117b6227/', icon: faEnvelope },
      { url: "https://medium.com/@chaitanyawankhede705", icon: faLightbulb },
    ],
  },
  {
    name: "Atharva Malode",
    designation: "Software Developer",
    href: "https://raw.githubusercontent.com/Atharva-Malode/ODS/master/assets/atharva.png",
    socialLinks: [
      { url: 'https://www.instagram.com/dhnyanesh_gajbhiye/', icon: faContactCard },
      { url: 'mailto:atharvamalode21@gmail.com', icon: faEnvelope },
      { url: 'https://www.linkedin.com/in/atharva-malode/', icon: faLink },
    ],
  },
];

const AboutUs=() =>{
  return (
    <div className="about-us">
    <div className="container">
      <div className="row">
        {teamMembers.map((member, index) => (
          <div className="col-md-3 col-sm-6 col-xs-12" key={index}>
            <div className="our-team">
              <div className="picture">
                <img className="img-fluid" src={member.href} alt={member.name} />
              </div>
              <div className="team-content">
                <h3 className="name">{member.name}</h3>
                <h4 className="title">{member.designation}</h4>
              </div>
              <ul className="social">
                {member.socialLinks.map((link, iconIndex) => (
                  <li key={iconIndex}>
                    <a href={link.url} target="_blank" rel="noopener noreferrer" ><FontAwesomeIcon icon={link.icon} /></a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default AboutUs;