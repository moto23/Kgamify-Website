import React from "react";
import Slider from "react-slick";
import Slider1 from "../components/Slider1";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import winnercup from "../assets/winnercup.png";
import Apple from "../assets/appleicon.png";
import Google from "../assets/google_playstore.png";
import gifts from "../assets/gifts.png";
import kchart from "../assets/kchart.png";
import vrStudentMale from "../assets/vr-student-male.png";
import perspectivePhone from "../assets/perspective-iphonex1.png";
import depthOfKnowledge from "../assets/depthofknowledge.png";
import badge from "../assets/badge.png";
import client from "../assets/client.png";
import logo from "../assets/logo1.png";
import { BsApple, BsGraphUpArrow } from "react-icons/bs";
import { FaRegEye } from "react-icons/fa";
import { FaQuestion } from "react-icons/fa6";
import { CiTrophy } from "react-icons/ci";
import { BiJoystick } from "react-icons/bi";
import { LuCrown } from "react-icons/lu";
import { GrLaunch } from "react-icons/gr";
import { IoMdPhonePortrait } from "react-icons/io";
import { FaBars, FaTimes } from "react-icons/fa";
import TabbedInterface from "./TabbedIntreface";
import Footer from "./Footer";

const Homepage = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 700) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black" }}
        onClick={onClick}
      />
    );
  }

  return (
    <>
      <div className="rubik-font">
        <nav
          className={`fixed w-full z-50 transition-all duration-300 ${
            isScrolling ? "bg-pink-600" : "bg-transparent"
          }`}
        >
          <div className="max-w-6xl mx-auto px-4 md:px-8 flex items-center justify-between p-4">
            <Link
              to="/"
              className="flex items-center text-white text-xl font-bold"
            >
              <img src={logo} alt="Kgamify Logo" className="h-5 mr-4" />
            </Link>

            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-white focus:outline-none"
              >
                {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>

            <ul className="hidden md:flex space-x-4">
              <li>
                <a
                  href="#home"
                  className="text-gray-200 border-b-2 no-underline hover:text-gray-300 border-white"
                >
                  HOME
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="text-white no-underline hover:text-gray-300"
                >
                  FEATURES
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="text-white no-underline hover:text-gray-300"
                >
                  GALLERY
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="text-white no-underline hover:text-gray-300"
                >
                  PRICING
                </a>
              </li>
              <li>
                <a
                  href="#footer"
                  className="text-white no-underline hover:text-gray-300"
                >
                  CONTACT
                </a>
              </li>
            </ul>
            <div className="hidden md:flex space-x-2">
              <Link
                to="https://kgamify.in/teacheradminpanel/example/index.php"
                className="px-3 py-2 border-2 border-white text-white font-semibold rounded hover:bg-white hover:text-purple-700 transition"
              >
                TEACHER-LOGIN
              </Link>
              <Link
                to="/job-portal"
                className="px-4 py-2 border-2 border-white text-white font-semibold rounded hover:bg-white hover:text-purple-700 transition"
              >
                JOB PORTAL
              </Link>
              <Link
                to="/download"
                className="px-4 py-2 border-2 border-white text-white font-semibold rounded hover:bg-white hover:text-purple-700 transition"
              >
                DOWNLOAD
              </Link>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden bg-pink-600 py-4 px-4">
              <ul className="flex flex-col space-y-3">
                <li>
                  <a
                    href="#home"
                    className="text-white block py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    HOME
                  </a>
                </li>
                <li>
                  <a
                    href="#features"
                    className="text-white block py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    FEATURES
                  </a>
                </li>
                <li>
                  <a
                    href="#gallery"
                    className="text-white block py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    GALLERY
                  </a>
                </li>
                <li>
                  <a
                    href="#pricing"
                    className="text-white block py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    PRICING
                  </a>
                </li>
                <li>
                  <a
                    href="#footer"
                    className="text-white block py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    CONTACT
                  </a>
                </li>
                <li className="pt-4">
                  <Link
                    to="/teacher-login"
                    className="block w-full px-3 py-2 border-2 border-white text-white font-semibold rounded hover:bg-white hover:text-purple-700 transition text-center mb-2"
                  >
                    TEACHER-LOGIN
                  </Link>
                </li>
                <li>
                  <Link
                    to="/job-portal"
                    className="block w-full px-3 py-2 border-2 border-white text-white font-semibold rounded hover:bg-white hover:text-purple-700 transition text-center mb-2"
                  >
                    JOB PORTAL
                  </Link>
                </li>
                <li>
                  <Link
                    to="/download"
                    className="block w-full px-3 py-2 border-2 border-white text-white font-semibold rounded hover:bg-white hover:text-purple-700 transition text-center"
                  >
                    DOWNLOAD
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </nav>

        <div className="body font-light h-full w-full mb-15 text-white">
          <section
            id="home"
            className="flex flex-col items-center justify-center p-4 -mr-5 md:p-8 text-center custom-gradient pt-24 md:pt-32"
          >
            <div className="w-full">
              <div className="text-3xl md:text-6xl m-4 md:m-10 mt-20 md:mt-30 rounded-2xl">
                Show Knowledge To World And Win
              </div>
              <div className="text-lg md:text-2xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-400 px-4">
                Gifts, free and discount coupons, scholarships, career support,
                job interview and upgrading of skills. Share your knowledge
                chart over social media.
              </div>
              <div className="pb-20 md:pb-36">
                <img
                  src={winnercup}
                  alt="Golden winner trophy"
                  className="max-w-xs md:max-w-xl mx-auto drop-shadow-lg animate-float"
                />
              </div>
            </div>
          </section>

          <div className="client-logos h-auto md:h-40 my-5 bg-white text-black flex flex-col justify-between items-center text-center py-8">
            <h4 className="text-purple-700">Win Items</h4>
            <img
              src={gifts}
              alt="client logos"
              className="img-fluid px-4 max-w-full"
            />
          </div>

          <div className="bg-gray-100" id="knowledge-index">
            <div className="mx-4 md:mx-20 p-6 md:p-20">
              <div className="flex flex-wrap">
                <div className="w-full md:w-1/2 flex items-center mb-8 md:mb-0">
                  <div>
                    <div className="box-icon text-pink-400">
                      <BsGraphUpArrow
                        size={50}
                        className="bg-white p-2 rounded-lg shadow-lg"
                      />
                      {""}
                    </div>
                    <div className="font-light text-purple-800 tracking-tight text-3xl md:text-5xl mb-4 mt-4">
                      Get your Knowledge Index
                    </div>
                    <p className="mb-4 text-base md:text-xl">
                      Get measurement of your knowledge and share to the world.
                      Send your K-Index (Knowledge measurement) to future
                      employer to increase your hiring chances. You can get your
                      ranking and employability index also as per current
                      market.
                    </p>
                    <a
                      href="https://docs.google.com/forms/d/e/1FAIpQLSdZqYFDQdxmJQ5abA8bKVBaa3BklSdWFxeId17fJ8vWti4O8A/viewform"
                      target="_blank"
                      className="btn btn-primary inline-block bg-pink-600 text-white px-6 py-2 rounded-lg hover:bg-pink-700 transition"
                    >
                      Register Now
                    </a>
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <img
                    src={kchart}
                    alt="knowledge index chart"
                    className="img-fluid max-w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="section bg-white text-black py-8 md:py-16">
            <div className="container mx-4 md:mx-10 px-4 md:px-10">
              <div className="flex flex-wrap flex-col-reverse md:flex-row">
                <div className="w-full md:w-1/2">
                  <img
                    src={vrStudentMale}
                    alt="male student with VR headset"
                    className="img-fluid max-w-full h-auto mx-auto mb-8 md:mb-0"
                  />
                </div>
                <div className="w-full md:w-1/2 flex items-center mb-8 md:mb-0">
                  <div>
                    <div className="box-icon text-pink-400">
                      <FaRegEye
                        size={50}
                        className="bg-white p-2 rounded-lg shadow-lg"
                      />
                      {""}
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-4">
                      Problem Visualization
                    </h2>
                    <p className="mb-4 text-base md:text-xl">
                      Many real world problems are visualized in monoscopic or
                      stereoscopic view. VR headsets can be used to experience
                      realism, instead of reading the text.
                    </p>
                    <a
                      href="https://docs.google.com/forms/d/e/1FAIpQLSdZqYFDQdxmJQ5abA8bKVBaa3BklSdWFxeId17fJ8vWti4O8A/viewform"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary inline-block bg-pink-600 text-white px-6 py-2 rounded-lg hover:bg-pink-700 transition"
                    >
                      Register Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="section light-bg py-8 md:py-16" id="features">
            <div className="px-4 md:px-20">
              <div className="section-title text-center mb-8">
                <div className="text-gray-700 font-medium">HIGHLIGHTS</div>
                <div className="text-2xl md:text-4xl font-semibold text-purple-800">
                  Features you love
                </div>
              </div>
              <div className="flex flex-wrap">
                <div className="w-full lg:w-1/3 px-2 mb-6 lg:mb-0">
                  <div className="card features p-6 bg-white text-black rounded-xl shadow-lg h-full">
                    <div className="card-body flex flex-col md:flex-row">
                      <div className="media text-pink-600 mb-4 md:mb-0 md:mr-4">
                        <FaQuestion size={40} />
                      </div>
                      <div className="media-body">
                        <h4 className="card-title text-xl font-medium mb-3">
                          Questions
                        </h4>
                        <p className="card-text mb-2">
                          Based on Depth of Knowledge levels.
                        </p>
                        <p className="card-text mb-2">
                          Are multilingual and other countries questions are
                          also available to show your knowledge.
                        </p>
                        <p className="card-text mb-2">
                          Are in multiple choices, fill in the blanks, match the
                          following and subjective questions.
                        </p>
                        <p className="card-text mb-2">
                          Text, video, interactive (AR/VR) and real-time
                          formats.
                        </p>
                        <p className="card-text">
                          Posted by academia, professionals, celebrities,
                          family, friends, companies and others.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-1/3 px-2 mb-6 lg:mb-0">
                  <div className="card features p-6 bg-white text-black rounded-xl shadow-lg h-full">
                    <div className="card-body flex flex-col md:flex-row">
                      <div className="media text-pink-600 mb-4 md:mb-0 md:mr-4">
                        <CiTrophy size={40} />
                      </div>
                      <div className="media-body">
                        <h4 className="card-title text-xl font-medium mb-3">
                          Gamification
                        </h4>
                        <p className="card-text mb-2">
                          Motivates to gain knowledge.
                        </p>
                        <p className="card-text mb-2">
                          Participate in knowledge challenges and championships.
                        </p>
                        <p className="card-text mb-2">
                          User gets digital, tagable, printable decorative
                          badges, certificates and opportunity to share succuss
                          with people and employers.
                        </p>
                        <p className="card-text mb-2">
                          Gamification is embedded in each subject and
                          associated with intrensic and externsic rewards
                        </p>
                        <p className="card-text">
                          Events and Workshops are gamified to incourage
                          participation and fun.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-1/3 px-2">
                  <div className="card features p-6 bg-white text-black rounded-xl shadow-lg h-full">
                    <div className="card-body flex flex-col md:flex-row">
                      <div className="media text-pink-600 mb-4 md:mb-0 md:mr-4">
                        <BiJoystick size={40} />
                      </div>
                      <div className="media-body">
                        <h4 className="card-title text-xl font-medium mb-3">
                          Game Design
                        </h4>
                        <p className="card-text mb-2">No sequential game levels.</p>
                        <p className="card-text mb-2">
                          To unlock few levels it requires number of coins
                          earned during practice session or participating in
                          challenges and championships.
                        </p>
                        <p className="card-text mb-2">
                          Completely random problems in each level each time.
                        </p>
                        <p className="card-text mb-2">
                          To make challenging there are few questions which
                          could have negative marking.
                        </p>
                        <p className="card-text">
                          Give challenges to your friends and others and win
                          coins and gifts.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="section bg-white text-black py-8 md:py-16">
            <div className="px-4 md:px-30">
              <div className="flex flex-wrap">
                <div className="w-full md:w-1/2 mb-8 md:mb-0">
                  <img
                    src={perspectivePhone}
                    alt="perspective phone"
                    className="img-fluid max-w-full h-auto mx-auto"
                  />
                </div>
                <div className="w-full md:w-1/2 px-5 flex items-center">
                  <div>
                    <div className="box-icon rounded-2xl text-pink-500 mb-4">
                      <LuCrown
                        size={60}
                        className="p-2 bg-white shadow-lg rounded-xl"
                      />
                    </div>
                    <div className="text-3xl md:text-5xl text-purple-700 font-light mb-4">
                      Discover Yourself
                    </div>
                    <div className="mb-4 text-lg md:text-xl font-medium text-gray-600">
                      Compete in snap, duel or league based competitions.
                      Playing for social causes. Choose the gift first then play
                      to win it. In the practice session also you can win gifts.
                    </div>
                    <a
                      href="https://docs.google.com/forms/d/e/1FAIpQLSdZqYFDQdxmJQ5abA8bKVBaa3BklSdWFxeId17fJ8vWti4O8A/viewform"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary inline-block bg-pink-600 text-white px-6 py-2 rounded-lg hover:bg-pink-700 transition"
                    >
                      Register Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="section-title text-center mb-8 py-8">
            <div className="text-gray-500 font-normal">FEATURES</div>
            <h3 className="text-2xl md:text-3xl font-bold px-4">
              Get more with participation in championships
            </h3>
          </div>

          <TabbedInterface />

          <div className="section bg-white text-black py-8 md:py-16">
            <div className="px-4 md:px-30">
              <div className="flex flex-wrap flex-col-reverse md:flex-row">
                <div className="w-full md:w-1/2 mb-8 md:mb-0">
                  <img
                    src={depthOfKnowledge}
                    alt="depth of knowledge"
                    className="img-fluid max-w-full h-auto mx-auto pt-10 mb:pt-0"
                  />
                </div>
                <div className="w-full md:w-1/2 px-5 flex items-center">
                  <div>
                    <div className="box-icon text-pink-600 mb-4">
                      <GrLaunch
                        size={50}
                        className="bg-white p-2 rounded-xl shadow-lg"
                      />
                    </div>
                    <div className="text-3xl md:text-5xl text-purple-700 font-light mb-4">
                      Launch your Fun
                    </div>
                    <div className="mb-4 text-lg md:text-xl font-medium text-gray-600">
                      Knowledge is sport, play it to get knowledge and
                      contribute in building knowledge society. Participate into
                      multiple championships simultaneously and get recognized
                      in your area, city, state and country.
                    </div>
                    <a
                      href="https://docs.google.com/forms/d/e/1FAIpQLSdZqYFDQdxmJQ5abA8bKVBaa3BklSdWFxeId17fJ8vWti4O8A/viewform"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary inline-block bg-pink-600 text-white px-6 py-2 rounded-lg hover:bg-pink-700 transition"
                    >
                      Register Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="section light-bg py-8 md:py-16">
            <div className="px-4 md:px-20">
              <div className="flex flex-wrap justify-between">
                <div className="w-full md:w-3/5 flex items-center mb-8 md:mb-0">
                  <ul className="list-unstyled ui-steps w-full">
                    <li className="media flex pl-0 md:pl-10 mb-8">
                      <div className="circle-icon mr-4 flex-shrink-0 flex items-center justify-center p-2 bg-pink-600 text-white rounded-full w-10 h-10">
                        1
                      </div>
                      <div className="media-body">
                        <h5 className="text-xl mb-2">Create an account</h5>
                        <div className="text-base md:text-lg max-w-3xl text-gray-600">
                          Simply enter your phone number to create an account
                          for free. Anytime you can complete your profile and
                          get validated for extra free coins.
                        </div>
                      </div>
                    </li>
                    <li className="media flex pl-0 md:pl-10 mb-8">
                      <div className="circle-icon mr-4 flex-shrink-0 flex items-center justify-center p-2 bg-pink-600 text-white rounded-full w-10 h-10">
                        2
                      </div>
                      <div className="media-body">
                        <h5 className="text-xl mb-2">
                          Select subject and game mode
                        </h5>
                        <div className="text-base md:text-lg max-w-3xl text-gray-600">
                          Select the subject and type of game mode you are
                          interested in playing. We recommend to first practice
                          with gift mode and then participate in challenges or
                          championships.
                        </div>
                      </div>
                    </li>
                    <li className="media flex pl-0 md:pl-10">
                      <div className="circle-icon mr-4 flex-shrink-0 flex items-center justify-center p-2 bg-pink-600 text-white rounded-full w-10 h-10">
                        3
                      </div>
                      <div className="media-body">
                        <h5 className="text-xl mb-2">
                          Read game info and start playing
                        </h5>
                        <div className="text-base md:text-lg max-w-3xl text-gray-600">
                          There are different kind of intrensic and extrensic
                          value and conditions attached to each subject and its
                          game mode type. Kindly read the game info and enjoy
                          assessment of your knowledge.
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="w-full md:w-1/3 flex justify-center items-center">
                  <img
                    src={badge}
                    alt="badge"
                    className="img-fluid max-w-full h-auto mx-auto"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="section py-8 md:py-16">
            <div className="px-4 md:px-30">
              <div className="section-title text-center mb-8">
                <div className="text-gray-500 font-normal">TESTIMONIALS</div>
                <h3 className="text-2xl md:text-3xl font-bold">
                  What our Users Says
                </h3>
              </div>
              <div className="items-center justify-center px-4 md:px-20">
                <Slider {...settings} className="">
                  <div className="testimonials-single flex flex-col items-center justify-center px-4">
                    <img
                      src={client}
                      alt="client"
                      className="rounded-full client-img w-20 h-20 mx-auto mb-4"
                    />
                    <div className="blockquote py-6 mx-auto text-base md:text-xl mb-6 max-w-4xl text-gray-500 text-center">
                      I found very unique and fun way to improve my knowledge
                      without stress. I got motivation to acquire knowledge
                      design stream after analytics showed my performance was
                      good in creativity. Real world problem solving has made me
                      to understand the implementation of theory and skill.
                    </div>
                    <h5 className="mt-2 mb-1 text-lg font-medium">
                      Crystal Gordon
                    </h5>
                    <p className="text-primary mb-3">United States</p>
                  </div>
                  <div className="testimonials-single flex flex-col items-center justify-center px-4">
                    <img
                      src={client}
                      alt="client"
                      className="rounded-full client-img w-20 h-20 mx-auto mb-4"
                    />
                    <div className="blockquote py-6 mx-auto text-base md:text-xl mb-6 max-w-4xl text-gray-500 text-center">
                      Attending a workshops has helped to improve my accountancy
                      skill. I understood latest tools and technology
                      requirement for job. My knowledge chart is improved amd
                      increased my emplyoment chances as per current market
                      need.
                    </div>
                    <h5 className="mt-2 mb-1 text-lg font-medium">
                      Crystal Gordon
                    </h5>
                    <p className="text-primary mb-3">United States</p>
                  </div>
                  <div className="testimonials-single flex flex-col items-center justify-center px-4">
                    <img
                      src={client}
                      alt="client"
                      className="rounded-full client-img w-20 h-20 mx-auto mb-4"
                    />
                    <div className="blockquote py-6 mx-auto text-base md:text-xl mb-6 max-w-4xl text-gray-500 text-center">
                      I got job interview call from civil infrastructure company
                      when i solved highway engineering related complex issues
                      and results were published over social media and job
                      portals. Now i have confidence that i can also be suitable
                      for highway engineering jobs.
                    </div>
                    <h5 className="mt-2 mb-1 text-lg font-medium">
                      Crystal Gordon
                    </h5>
                    <p className="text-primary mb-3">United States</p>
                  </div>
                </Slider>
              </div>
            </div>
          </div>

          <div className="section light-bg py-8 md:py-16" id="gallery">
            <div className="px-4 md:px-30">
              <div className="section-title text-center mb-8">
                <small className="text-gray-500">GALLERY</small>
                <h3 className="text-2xl md:text-3xl font-bold">
                  App Screenshots
                </h3>
              </div>
              <div className="px-2 md:px-12">
                <Slider1 />
              </div>
            </div>
          </div>

          <section id="pricing" className="p-4 md:p-8 text-center">
            <small className="text-gray-500">PRICING</small>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Upgrade to Pro</h2>
            <div className="flex flex-col items-center justify-center min-h-screen p-4 md:p-6">
              <div className="w-full max-w-lg bg-white shadow-lg rounded-xl p-6 text-center mb-6">
                <small className="text-primary">PERSONAL</small>
                <p className="text-3xl font-bold text-purple-800">$14/m</p>
                <ul className="mt-4 text-gray-600">
                  <li>10 Projects</li>
                  <br></br>
                  <li>5 GB Storage</li>
                  <br></br>
                  <li>Basic Support</li>
                  <br></br>
                  <li className="text-gray-400 line-through">Collaboration</li>
                  <br></br>
                  <li className="text-gray-400 line-through">
                    Reports and analytics
                  </li>
                  <br></br>
                </ul>
                <button className="mt-6 w-full bg-pink-500 text-white py-2 rounded-lg">
                  COMING SOON
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-6 w-full max-w-5xl">
                <div className="relative bg-pink-500 text-white shadow-lg rounded-xl p-6 text-center">
                  <small className="text-white">FOR TEAMS</small>
                  <p className="text-3xl font-bold">$29/m</p>
                  <ul className="mt-4">
                    <li>Unlimited Projects</li>
                    <br></br>
                    <li>100 GB Storage</li>
                    <br></br>
                    <li>Priority Support</li>
                    <br></br>
                    <li>Collaboration</li>
                    <br></br>
                    <li>Reports and Analytics</li>
                    <br></br>
                  </ul>
                  <button className="mt-6 w-full bg-white text-pink-500 py-2 rounded-lg opacity-50">
                    COMING SOON
                  </button>
                </div>

                <div className="bg-white shadow-lg rounded-xl p-6 text-center">
                  <small className="text-primary">ENTERPRISE</small>
                  <p className="text-3xl font-bold text-pink-500">$249/m</p>
                  <ul className="mt-4 text-gray-600">
                    <li>Unlimited Projects</li>
                    <br></br>
                    <li>Unlimited Storage</li>
                    <br></br>
                    <li>Collaboration</li>
                    <br></br>
                    <li>Reports and analytics</li>
                    <br></br>
                    <li>Web Hooks</li>
                    <br></br>
                  </ul>
                  <button className="mt-6 w-full bg-pink-500 text-white py-2 rounded-lg">
                    COMING SOON
                  </button>
                </div>
              </div>
            </div>
          </section>

          <div className="section pt-0 px-7 md:px-16">
            <div className="container mx-auto items-center max-w-7xl">
              <div className="section-title text-center mb-8">
                <small className="text-gray-500">FAQ</small>
                <h3 className="text-2xl md:text-3xl font-bold">
                  Frequently Asked Questions
                </h3>
              </div>

              <div className="row pt-4 flex flex-col md:flex-row md:gap-16">
                <div className="w-full md:w-1/2 mb-8 md:mb-0">
                  <h3 className="text-xl font-medium mb-3">
                    Can I try before I buy?
                  </h3>
                  <p className="light-font mb-5 text-gray-700">
                    App download is absolutely free and you can just register
                    and start immediately. Playing in gift mode for your
                    practice and it is free. There are also many free
                    championship, events and workshops to join.
                  </p>
                  <h3 className="text-xl font-medium mb-3">
                    What payment methods do you accept?
                  </h3>
                  <p className="light-font mb-5 text-gray-700">
                    We accept all kind of mobile/web suppoted payment- Debit
                    card, Credit card, Phone Pe, Google Pay, PayTM, etc. On your
                    request, we can send you payment link on your email or
                    whatsApp or in kGamify notification.
                  </p>
                </div>
                <div className="w-full md:w-1/2">
                  <h3 className="text-xl font-medium mb-3">
                    Can I change my plan later?
                  </h3>
                  <p className="light-font mb-5 text-gray-700">
                    There is no such as plan. you just need to have sufficient
                    coins for participating in championships, events and
                    workshops. These coins you can buy from website or directly
                    within app or keep collecting it via playing.{" "}
                  </p>
                  <h3 className="text-xl font-medium mb-3">
                    Do you send gifts at my location?
                  </h3>
                  <p className="light-font mb-5 text-gray-700">
                    Lot many online gifts will directly send to delivery address
                    given by you. In some cases depending on the kind gift
                    chosen by you may need your visit. For example - car
                    servicing or visit to a tourist spot{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="section custom-gradient -mr-5 py-12">
            <div className="mx-auto items-center max-w-xl justify-center px-4">
              <div className="call-to-action mx-auto">
                <div className="box-icon text-pink-600 mx-auto items-center justify-center flex mb-4">
                  <IoMdPhonePortrait
                    size={60}
                    className="bg-white p-2 rounded-2xl shadow-lg"
                  />
                </div>
                <div className="text-2xl md:text-4xl items-center justify-center flex mb-4 text-center">
                  Download Anywhere
                </div>
                <div className="my-5 text-gray-300 text-wrap text-center items-center justify-center flex flex-wrap px-4">
                  Available for all major mobile platforms. In case you are
                  conducting for closed group, then kindly contact us for
                  getting configuration panel.{" "}
                </div>
                <div className="my-4 items-center justify-center flex flex-col sm:flex-row gap-4">
                  <button
                    id="appStoreButton"
                    onClick={() =>
                      (window.location.href = "/PhoneNumberInput")
                    }
                    className="btn bg-white rounded-xl flex items-center px-4 py-2"
                  >
                    <img src={Apple} alt="icon" className="p-2 h-10" />
                    <div className="text-black">App Store</div>
                  </button>
                  <button
                    id="googlePlayButton"
                    onClick={() =>
                      (window.location.href = "/PhoneNumberInput")
                    }
                    className="btn bg-white rounded-xl flex items-center px-4 py-2"
                  >
                    <img src={Google} className="h-10" alt="icon" />
                  </button>
                </div>
                <p className="text-primary items-center justify-center flex text-center text-xs mt-4">
                  <small>
                    <i>*Works on iOS 10.0.5+, Android Kitkat and above. </i>
                  </small>
                </p>
              </div>
            </div>
          </div>

          <Footer></Footer>
          <div className="flex flex-col justify-center items-center py-6">
            <div className="flex flex-wrap justify-center space-x-2 md:space-x-4 mb-4">
              <button
                className="m-2 text-pink-500 focus:outline-none"
                onClick={() => (window.location.href = "#")}
              >
                PRESS
              </button>
              <button
                className="m-2 text-pink-500 focus:outline-none"
                onClick={() => (window.location.href = "#")}
              >
                TERMS
              </button>
              <button
                className="m-2 text-pink-500 focus:outline-none"
                onClick={() => (window.location.href = "#")}
              >
                PRIVACY
              </button>
            </div>
            <small className="text-gray-500 text-center px-4">
              COPYRIGHT © 2020. ALL RIGHTS RESERVED BY NORDICSOFT, INDIA{" "}
            </small>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;