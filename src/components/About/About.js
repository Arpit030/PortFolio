// // import React from "react";
// // import { assets } from "../../assets/assets";
// // import "./About.css"

// // function About() {
// //   return (
// //     <div className="about">
// //       <div className="aboutTitle">
// //         <h1>About Me</h1>
// //         <p>My Introduction</p>
// //       </div>

// //       <div className="aboutIntro">
// //         <div className="image">Image</div>
// //         <div className="intro">
// //             <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
// //             standard dummy text ever since the 1500s, when an ...</p>
// //             <button>
// //                 <p>Resume</p>
// //                 <img src={assets.file} alt=""></img>
// //             </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default About;
// import React from "react";
// import { assets } from "../../assets/assets";
// import "./About.css"

// function About() {
//   return (
//     <div className="about">
//       <div className="aboutTitle">
//         <h2>About Me</h2>
//         <p>My Introduction</p>
//       </div>

//       <div className="aboutIntro">
//         <div className="image">
//           <img src={assets.myImg} alt="Profile" />
//         </div>
//         <div className="intro">
//           <p>
//           Hey there,👋 I'm Shital a 21-year-old CSE undergrad who is passionate about Software Development, UI/UX Design and Product Management. Currently, I'm pursuing my career as a Full Stack Web Developer 👨🏻‍💻 with 3+ years of professional and freelance experience. I share my learnings through speaking engagements and write-ups
//           </p>
//           <button className="resumeButton">
//             <span>Resume</span>
//             <img src={assets.file} alt="Resume Icon" />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default About;


import React, { useState } from "react";
import { assets } from "../../assets/assets";
import "./About.css";

function About() {
  // State for tilt effect on the profile image
  const [tiltStyle, setTiltStyle] = useState({
    transform: "perspective(300px) rotateX(0deg) rotateY(0deg)"
  });

  const handleMouseMove = (e) => {
    const { width, height, left, top } = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - left - width / 2;
    const y = e.clientY - top - height / 2;

    const rotateX = (-y / height) * 20;
    const rotateY = (x / width) * 20;

    setTiltStyle({
      transform: `perspective(300px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
    });
  };

  const handleMouseLeave = () => {
    setTiltStyle({
      transform: "perspective(300px) rotateX(0deg) rotateY(0deg)"
    });
  };

  return (
    <div className="about" id="about">
      <div className="aboutTitle">
        <h2>About Me</h2>
        <p>My Introduction</p>
      </div>

      <div className="aboutIntro">
        <div
          className="image"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={tiltStyle}
        >
          <img src={assets.AV} alt="Profile" />
        </div>
        <div className="intro">
          <p>
            Hey there,👋 I'm Arpit, a 22-year-old CSE undergrad passionate about Software Development, UI/UX Design, and Product Management. Currently, I'm pursuing my career as a Full Stack Web Developer 👨🏻‍💻. I share my learnings through speaking engagements and write-ups.
          </p>
          <a href="./ArpitVermaFR.pdf" download="ArpitVermaFR.pdf" className="resumeButton">
            <span>Resume</span>
            <img src={assets.file} alt="Resume Icon" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
