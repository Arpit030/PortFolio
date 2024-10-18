// import React, { useState } from 'react';
// import './Projects.css'; // Importing the CSS file

// const projects = [
//   {
//     title: 'Dar Al Marefa',
//     description: 'This is a content-driven website for a school in Dubai. It is built using Next.js, Tailwind CSS, and Strapi CMS.',
//     image: 'https://via.placeholder.com/400x300', // Replace with your project image
//     link: '#', // Replace with the actual project link
//   },
//   {
//     title: 'Al Ghurair Investment',
//     description: 'A content-driven website for one of the largest family business groups in the Middle East. Built using Next.js, Tailwind CSS, and Strapi CMS.',
//     image: 'https://via.placeholder.com/400x300', // Replace with your project image
//     link: '#', // Replace with the actual project link
//   },
//   {
//     title: 'Project Three',
//     description: 'This is a placeholder description for the third project.',
//     image: 'https://via.placeholder.com/400x300', // Replace with your project image
//     link: '#', // Replace with the actual project link
//   },
//   {
//     title: 'Project Four',
//     description: 'This is a placeholder description for the fourth project.',
//     image: 'https://via.placeholder.com/400x300', // Replace with your project image
//     link: '#', // Replace with the actual project link
//   },
// ];

// const Projects = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const handlePrev = () => {
//     setCurrentSlide((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
//   };

//   const handleNext = () => {
//     setCurrentSlide((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
//   };

//   return (
//     <div className="project-container" id='projects-container'>
//       {/* Title Section */}
//       <div className="title-section">
//         <h2 className="project-title">Projects</h2>
//       </div>
//       <p className="subtitle">Most recent work</p>

//       <div className="carousel-container">
//         {/* Left Arrow */}
//         <div className="arrow left-arrow" onClick={handlePrev}>
//           {/* Add left arrow icon here */}
//         </div>

//         {/* Project Card */}
//         <div className="project-card">
//           <img
//             className="project-image"
//             src={projects[currentSlide].image}
//             alt={projects[currentSlide].title}
//           />
//           <div className="project-content">
//             <h5 className="project-heading">{projects[currentSlide].title}</h5>
//             <p className="project-description">{projects[currentSlide].description}</p>
//             <a href={projects[currentSlide].link} className="project-button">Check out</a>
//           </div>
//         </div>

//         {/* Right Arrow */}
//         <div className="arrow right-arrow" onClick={handleNext}>
//           {/* Add right arrow icon here */}
//         </div>
//       </div>

//       {/* Pagination Dots */}
//       <div className="dots-container">
//         {projects.map((_, index) => (
//           <div
//             key={index}
//             className={`dot ${currentSlide === index ? 'active-dot' : ''}`}
//             onClick={() => setCurrentSlide(index)}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Projects;



// import React, { useState } from 'react';
// import './Projects.css'; // Importing the CSS file

// // Importing project images
// import codepenImg from '../../assets/ProImg/codepen.png'; // Ensure the correct image extension
// import geminiImg from '../../assets/ProImg/gemini.png';
// import registerImg from '../../assets/ProImg/register.png';
// import planImg from '../../assets/ProImg/plan.png';
// import portfolioImg from '../../assets/ProImg/portfolio.png'; 

// const projects = [
//   {
//     title: 'Code Pen',
//     description: 'An interactive code editor site',
//     image: codepenImg,
//     link: 'https://arpit030.github.io/codepen-site/',
//   },
//   {
//     title: 'Gemini Clone',
//     description: 'A clone of the Gemini project with real-time data fetching',
//     image: geminiImg,
//     link: 'https://arpit030.github.io/GeminiClone/',
//   },
//   {
//     title: 'Registration Form',
//     description: 'A registration form built using HTML, CSS, and Node.js',
//     image: registerImg,
//     link: 'https://registrationform-o0q2.onrender.com/',
//   },
//   {
//     title: 'Plan With Love',
//     description: 'A project management app',
//     image: planImg,
//     link: '#',
//   },
//   {
//     title: 'Personal Portfolio Website',
//     description: 'My personal portfolio built with HTML, CSS, and React.',
//     image: portfolioImg,
//     link: '#home',
//   },
// ];

// const Projects = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const handlePrev = () => {
//     setCurrentSlide((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
//   };

//   const handleNext = () => {
//     setCurrentSlide((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
//   };

//   return (
//     <section className="portfolio section" id="projects-container">
//       <h2 className="section_title">Projects</h2>
//       <span className="section_subtitle">Most recent work</span>

//       <div className="portfolio_container container">
//         {/* Left Arrow */}
//         <div className="swiper-button-prev" onClick={handlePrev}>
//           <i className="uil uil-angle-left-b swiper-portfolio-icon"></i>
//         </div>

//         {/* Project Slide */}
//         <div className="portfolio_content grid">
//           <img
//             src={projects[currentSlide].image}
//             alt={projects[currentSlide].title}
//             className="portfolio_img"
//           />
//           <div className="portfolio_data">
//             <h3 className="portfolio_title">{projects[currentSlide].title}</h3>
//             <p className="portfolio_description">{projects[currentSlide].description}</p>
//             <a
//               href={projects[currentSlide].link}
//               className="button button-flex button-small portfolio_button"
//               target="_blank" rel="noopener noreferrer"
//             >
//               Check out
//               <i className="uil uil-arrow-right button_icon"></i>
//             </a>
//           </div>
//         </div>

//         {/* Right Arrow */}
//         <div className="swiper-button-next" onClick={handleNext}>
//           <i className="uil uil-angle-right-b swiper-portfolio-icon"></i>
//         </div>

//         {/* Pagination Dots */}
//         <div className="swiper-pagination">
//           {projects.map((_, index) => (
//             <span
//               key={index}
//               className={`swiper-pagination-bullet ${currentSlide === index ? 'swiper-pagination-bullet-active' : ''}`}
//               onClick={() => setCurrentSlide(index)}
//             ></span>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;



import React, { useState } from 'react';
import './Projects.css'; // Importing the CSS file
import {assets} from '../../assets/assets'

const projects = [
  {
    title: 'Gemini AI',
    description: 'Gemini is a real-time search engine. I used Vite and React to build the Gemini clone project.',
    image: `${assets.gemini}`, // Replace with your project image
    link: 'https://arpit030.github.io/GeminiClone/', // Replace with the actual project link
  },
  {
    title: 'CodePen',
    description: 'CodePen is a web based app which will show code into design.used React as the primary framework and Vite for faster development and build tooling.',
    image: `${assets.codepen}`, // Replace with your project image
    link: 'https://arpit030.github.io/codepen-site/', // Replace with the actual project link
  },
  {
    title: 'Plan With Love',
    description: "Plan With Love is a well organized tour plan with Loved One's. I have made it using React Hooks.",
    image: `${assets.plan}`, // Replace with your project image
    link: 'https://arpit030.github.io/planwithlove/', // Replace with the actual project link
  },
  {
    title: 'Portfolio',
    description: 'I made my Portfolio website to elaborate about myself. I have made it using React Components & React Hooks.',
    image: `${assets.portfolio}`, // Replace with your project image
    link: '#', // Replace with the actual project link
  },
];

const Projects = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="project-container" id='projects-container'>
      {/* Title Section */}
      <div className="title-section">
        <h2 className="project-title">Projects</h2>
      </div>
      <p className="subtitle">Most recent work</p>

      <div className="carousel-container">
        {/* Left Arrow */}
        <div className="arrow left-arrow" onClick={handlePrev}>
          {/* Add left arrow icon here */}
        <img src={assets.right} alt=''></img>
        </div>

        {/* Project Card */}
        <div className="project-card">
          <div className='image-div'>
            <img
              className="project-image"
              src={projects[currentSlide].image}
              alt={projects[currentSlide].title}
            />
          </div>
         
          <div className="project-content">
            <h3 className="project-heading">{projects[currentSlide].title}</h3>
            <p className="project-description">{projects[currentSlide].description}</p>
            <a href={projects[currentSlide].link} className="project-button">Check out
            <img src={assets.leftArrow} alt=""/></a>
          </div>
        </div>

        {/* Right Arrow */}
        <div className="arrow right-arrow" onClick={handleNext}>
          {/* Add right arrow icon here */}
          <img src={assets.left} alt=''/>
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="dots-container">
        {projects.map((_, index) => (
          <div
            key={index}
            className={`dot ${currentSlide === index ? 'active-dot' : ''}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;