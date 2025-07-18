import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown, Sun, Moon, Bell, Search, User } from 'lucide-react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaInstagram } from 'react-icons/fa';
import { FiPhone, FiMail } from 'react-icons/fi';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isAcademicsDropdownOpen, setIsAcademicsDropdownOpen] = useState(false);
  const [isActivitiesDropdownOpen, setIsActivitiesDropdownOpen] = useState(false);
  const [isAchievementsDropdownOpen, setIsAchievementsDropdownOpen] = useState(false);
  const [isAdmissionsDropdownOpen, setIsAdmissionsDropdownOpen] = useState(false);
  const [isGalleryDropdownOpen, setIsGalleryDropdownOpen] = useState(false);
  const [isCareersDropdownOpen, setIsCareersDropdownOpen] = useState(false);
  const [isBlogDropdownOpen, setIsBlogDropdownOpen] = useState(false);
  const [isMandatoryDropdownOpen, setIsMandatoryDropdownOpen] = useState(false);
  const [isLoginDropdownOpen, setIsLoginDropdownOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(0);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Add Escape key support for closing mobile menu
  useEffect(() => {
    if (!isMenuOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);

  useEffect(() => {
    if (isMenuOpen) {
      try {
        document.body.style.overflow = 'hidden';
      } catch (error) {
        console.error('Body overflow error:', error);
      }
    } else {
      try {
        document.body.style.overflow = 'unset';
      } catch (error) {
        console.error('Body overflow error:', error);
      }
    }
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 50) {
        setShowHeader(true);
      } else if (currentScrollY > lastScrollY.current) {
        setShowHeader(false); // scrolling down
      } else {
        setShowHeader(true); // scrolling up
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { 
      name: 'About', 
      href: '/about',
      hasDropdown: true,
      subPages: [
        { name: 'Governance', href: '/about/governance' },
        { name: 'Vision & Mission', href: '/about/vision-mission' },
        { name: 'Why St. Britto\'s', href: '/about/why-stbrittos' },
        { name: 'Chairman\'s Desk', href: '/about/chairmans-desk' },
        { name: 'Correspondent\'s Desk', href: '/about/correspondents-desk' },
        { name: 'Principal\'s Desk', href: '/about/principals-desk' },
        { name: 'Vice Principal\'s Desk', href: '/about/vice-principals-desk' },
        { name: 'Infrastructure', href: '/about/infrastructure' },
        { name: 'Virtual Tour', href: '/about/virtual-tour' },
        { 
          name: 'Mandatory Disclosure', 
          href: '/about/mandatory-disclosure'
        },
        { name: 'Annual Report', href: '/about/annual-report' }
      ]
    },
    { 
      name: 'Academics', 
      href: '/academics',
      hasDropdown: true,
      subPages: [
        { name: 'Curriculum', href: '/academics/curriculum' },
        { name: 'Kindergarten', href: '/academics/kindergarten' },
        { name: 'Lower Primary', href: '/academics/lower-primary' },
        { name: 'Upper Primary', href: '/academics/upper-primary' },
        { name: 'Middle School', href: '/academics/middle-school' },
        { name: 'Secondary School', href: '/academics/secondary-school' },
        { name: 'Senior Secondary', href: '/academics/senior-secondary' },
        { name: 'Results', href: '/academics/results' }
      ]
    },
    { 
      name: 'Activities', 
      href: '/activities',
      hasDropdown: true,
      subPages: [
        { name: '8 Quotients', href: '/activities/8-quotients' },
        { name: 'Believe You Can', href: '/activities/believe-you-can' }
      ]
    },
    { 
      name: 'Achievements', 
      href: '/achievements',
      hasDropdown: true,
      subPages: [
        { name: 'School Achievements', href: '/achievements/school' },
        { name: 'Student Achievements', href: '/achievements/students' }
      ]
    },
    { 
      name: 'Admissions', 
      href: '/admissions',
      hasDropdown: true,
      subPages: [
        { name: 'Admission Procedure', href: '/admissions/procedure' },
        { name: 'Code of Conduct', href: '/admissions/code-of-conduct' }
      ]
    },
    { 
      name: 'Gallery', 
      href: '/gallery',
      hasDropdown: true,
      subPages: [
        { name: 'Photos', href: '/gallery/photos' },
        { name: 'Videos', href: '/gallery/videos' },
        { name: 'Upcoming Events', href: '/gallery/upcoming-events' }
      ]
    },
    { 
      name: 'Blog', 
      href: '/blog',
      hasDropdown: true,
      subPages: [
        { name: 'Student Blog', href: '/blog/student' }
      ]
    },
    { 
      name: 'Careers', 
      href: '/careers',
      hasDropdown: true,
      subPages: [
        { name: 'Open Positions', href: '/careers' },
        { name: 'Apply for a Post', href: '/careers/apply' }
      ]
    },
    { 
      name: 'Login', 
      href: '/login',
      hasDropdown: true,
      subPages: [
        { name: 'Teacher ERP Login', href: '/login/teacher-erp' },
        { name: 'Student ERP Login', href: '/login/student-erp' }
      ]
    },
  ];

  const isActive = (path: string) => location.pathname === path;
  const isAboutActive = () => location.pathname.startsWith('/about');
  const isAcademicsActive = () => location.pathname.startsWith('/academics');
  const isActivitiesActive = () => location.pathname.startsWith('/activities');
  const isAchievementsActive = () => location.pathname.startsWith('/achievements');
  const isAdmissionsActive = () => location.pathname.startsWith('/admissions');
  const isGalleryActive = () => location.pathname.startsWith('/gallery');
  const isCareersActive = () => location.pathname.startsWith('/careers');
  const isBlogActive = () => location.pathname.startsWith('/blog/student');
  const isMandatoryActive = () => location.pathname.startsWith('/about/mandatory-disclosure');

  const handleStudentLogin = () => {
    try {
      window.open('https://erp.stbrittosacademy.edu.in/schoolstudentportal/students/loginManager/youLogin.jsp', '_blank');
    } catch (error) {
      console.error('Student login error:', error);
      // Fallback: try to navigate in same window
      window.location.href = 'https://erp.stbrittosacademy.edu.in/schoolstudentportal/students/loginManager/youLogin.jsp';
    }
  };

  const handleTeacherLogin = () => {
    try {
      window.open('https://erp.stbrittosacademy.edu.in/evarsitysbi/usermanager/loginManager/youLogin.jsp', '_blank');
    } catch (error) {
      console.error('Teacher login error:', error);
      // Fallback: try to navigate in same window
      window.location.href = 'https://erp.stbrittosacademy.edu.in/evarsitysbi/usermanager/loginManager/youLogin.jsp';
    }
  };

  const handleLogoClick = () => {
    try {
      if (location.pathname === '/') {
        setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
      } else {
        navigate('/');
      }
    } catch (error) {
      console.error('Scroll error:', error);
      // Fallback: simple scroll
      window.scrollTo(0, 0);
    }
  };

  return (
    <>
      <TopHeader />
      <header className={`w-full z-[1050] bg-white transition-all duration-200 backdrop-blur-md`}>
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between py-2 sm:py-3 min-h-[56px] w-full">
            {/* Logo: Centered on mobile, left on desktop */}
            <div className="flex items-center flex-shrink-0">
              <button
                onClick={handleLogoClick}
                className="flex items-center justify-center space-x-2 sm:space-x-3 flex-shrink-0 bg-transparent border-none p-0 m-0 cursor-pointer hover:opacity-80 transition-opacity duration-200"
                aria-label="Go to top of home page"
              >
                <img
                  src="/LOGOS/SBA%20LOGO%20FOR%20WEBSITE.png"
                  alt="SBA Logo"
                  className="h-20 w-auto object-contain mx-auto"
                  style={{ maxWidth: '320px' }}
                />
              </button>
              {/* Hamburger menu button: visible only on mobile (<=768px) */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="w-12 h-12 p-2 ml-2 rounded-full bg-white shadow-lg text-gray-700 hover:text-blue-700 hover:bg-blue-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center justify-center md:hidden"
                aria-label="Toggle mobile menu"
                style={{ zIndex: 10002 }}
              >
                {isMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
              </button>
            </div>
            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center space-x-1 lg:space-x-2 xl:space-x-4 flex-1 justify-end ml-4 lg:ml-8">
              {navigation.map((item) => (
                <div key={item.name} className="relative">
                  {item.hasDropdown ? (
                    <div
                      className="relative"
                      onMouseEnter={() => {
                        if (item.name === 'About') setIsAboutDropdownOpen(true);
                        if (item.name === 'Academics') setIsAcademicsDropdownOpen(true);
                        if (item.name === 'Activities') setIsActivitiesDropdownOpen(true);
                        if (item.name === 'Achievements') setIsAchievementsDropdownOpen(true);
                        if (item.name === 'Admissions') setIsAdmissionsDropdownOpen(true);
                        if (item.name === 'Gallery') setIsGalleryDropdownOpen(true);
                        if (item.name === 'Careers') setIsCareersDropdownOpen(true);
                        if (item.name === 'Blog') setIsBlogDropdownOpen(true);
                        if (item.name === 'Login') setIsLoginDropdownOpen(true);
                      }}
                      onMouseLeave={() => {
                        if (item.name === 'About') setIsAboutDropdownOpen(false);
                        if (item.name === 'Academics') setIsAcademicsDropdownOpen(false);
                        if (item.name === 'Activities') setIsActivitiesDropdownOpen(false);
                        if (item.name === 'Achievements') setIsAchievementsDropdownOpen(false);
                        if (item.name === 'Admissions') setIsAdmissionsDropdownOpen(false);
                        if (item.name === 'Gallery') setIsGalleryDropdownOpen(false);
                        if (item.name === 'Careers') setIsCareersDropdownOpen(false);
                        if (item.name === 'Blog') setIsBlogDropdownOpen(false);
                        if (item.name === 'Login') setIsLoginDropdownOpen(false);
                      }}
                    >
                      <div className="inline-block">
                        <Link
                          to={item.href}
                          className={`px-2 py-2 rounded-md text-xs lg:text-sm font-medium transition-colors duration-200 flex items-center whitespace-nowrap ${
                            (item.name === 'About' && isAboutActive()) || 
                            (item.name === 'Academics' && isAcademicsActive()) ||
                            (item.name === 'Activities' && isActivitiesActive()) ||
                            (item.name === 'Achievements' && isAchievementsActive()) ||
                            (item.name === 'Admissions' && isAdmissionsActive()) ||
                            (item.name === 'Gallery' && isGalleryActive()) ||
                            (item.name === 'Careers' && isCareersActive()) ||
                            (item.name === 'Blog' && isBlogActive()) ||
                            (item.name === 'Login' && location.pathname.startsWith('/login'))
                              ? 'text-blue-700 bg-sky-50'
                              : 'text-blue-800 hover:text-blue-700 hover:bg-sky-50'
                          }`}
                          tabIndex={0}
                        >
                          {item.name}
                        </Link>
                      </div>
                      {((item.name === 'About' && isAboutDropdownOpen) || 
                        (item.name === 'Academics' && isAcademicsDropdownOpen) ||
                        (item.name === 'Activities' && isActivitiesDropdownOpen) ||
                        (item.name === 'Achievements' && isAchievementsDropdownOpen) ||
                        (item.name === 'Admissions' && isAdmissionsDropdownOpen) ||
                        (item.name === 'Gallery' && isGalleryDropdownOpen) ||
                        (item.name === 'Careers' && isCareersDropdownOpen) ||
                        (item.name === 'Blog' && isBlogDropdownOpen) ||
                        (item.name === 'Login' && isLoginDropdownOpen)) && (
                        <div className="absolute top-full left-0 w-64 bg-white rounded-md shadow-lg border border-blue-200 py-2 z-[1000]">
                          {item.subPages?.map((subPage) => (
                            <React.Fragment key={subPage.name}>
                              {subPage && 'hasSubDropdown' in subPage && subPage.hasSubDropdown ? (
                                <div
                                  className="relative"
                                  onMouseEnter={() => {
                                    if (subPage.name === 'Mandatory Disclosure') setIsMandatoryDropdownOpen(true);
                                  }}
                                  onMouseLeave={() => {
                                    if (subPage.name === 'Mandatory Disclosure') setIsMandatoryDropdownOpen(false);
                                  }}
                                >
                                  <Link
                                    to={subPage.href}
                                    className={`block px-4 py-2 text-sm transition-colors duration-200 flex items-center justify-between ${
                                      isActive(subPage.href) || (subPage.name === 'Mandatory Disclosure' && isMandatoryActive())
                                        ? 'text-blue-700 bg-sky-50'
                                        : 'text-blue-800 hover:text-blue-700 hover:bg-sky-50'
                                    }`}
                                  >
                                    {subPage.name}
                                  </Link>
                                  {subPage.name === 'Mandatory Disclosure' && isMandatoryDropdownOpen && Array.isArray((subPage as any).subPages) && (
                                    <div className="absolute left-full top-0 ml-1 w-64 bg-white rounded-md shadow-lg border border-blue-200 py-2 z-[1000]">
                                      {(subPage as any).subPages.map((nestedSubPage: any) => (
                                        <Link
                                          key={nestedSubPage.name}
                                          to={nestedSubPage.href}
                                          className={`block px-4 py-2 text-sm transition-colors duration-200 ${
                                            isActive(nestedSubPage.href)
                                              ? 'text-blue-700 bg-sky-50'
                                              : 'text-blue-800 hover:text-blue-700 hover:bg-sky-50'
                                          }`}
                                        >
                                          {nestedSubPage.name}
                                        </Link>
                                      ))}
                                    </div>
                                  )}
                                </div>
                              ) : (
                                subPage.name === 'Student ERP Login' ? (
                                  <a
                                    href="https://erp.stbrittosacademy.edu.in/schoolstudentportal/students/loginManager/youLogin.jsp"
                                    onClick={e => {
                                      e.preventDefault();
                                      handleStudentLogin();
                                    }}
                                    className={`block px-4 py-2 text-sm transition-colors duration-200 ${
                                      isActive('/student-login')
                                        ? 'text-blue-700 bg-sky-50'
                                        : 'text-blue-800 hover:text-blue-700 hover:bg-sky-50'
                                    }`}
                                  >
                                    Student Login
                                  </a>
                                ) : subPage.name === 'Teacher ERP Login' ? (
                                  <a
                                    href="https://erp.stbrittosacademy.edu.in/evarsitysbi/usermanager/loginManager/youLogin.jsp"
                                    onClick={e => {
                                      e.preventDefault();
                                      handleTeacherLogin();
                                    }}
                                    className={`block px-4 py-2 text-sm transition-colors duration-200 ${
                                      isActive('/teacher-login')
                                        ? 'text-blue-700 bg-sky-50'
                                        : 'text-blue-800 hover:text-blue-700 hover:bg-sky-50'
                                    }`}
                                  >
                                    Teacher Login
                                  </a>
                                ) : (
                                  <Link
                                    to={subPage.href}
                                    className={`block px-4 py-2 text-sm transition-colors duration-200 ${
                                      isActive(subPage.href)
                                        ? 'text-blue-700 bg-sky-50'
                                        : 'text-blue-800 hover:text-blue-700 hover:bg-sky-50'
                                    }`}
                                  >
                                    {subPage.name}
                                  </Link>
                                )
                              )}
                            </React.Fragment>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className={`px-2 py-2 rounded-md text-xs lg:text-sm font-medium transition-colors duration-200 whitespace-nowrap ${
                        isActive(item.href)
                          ? 'text-blue-700 bg-sky-50'
                          : 'text-blue-800 hover:text-blue-700 hover:bg-sky-50'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
          </div>

          {/* Mobile Navigation: overlays content, slides in from right */}
          {isMenuOpen && ReactDOM.createPortal(
            <>
              {/* Overlay */}
              <div
                className="fixed inset-0 bg-black bg-opacity-40 z-[9998] transition-opacity duration-300"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close menu overlay"
              />
              {/* Menu Panel - slides in from right */}
              <div className={`fixed top-0 right-0 h-full w-[80vw] max-w-[400px] bg-white z-[9999] border-l border-blue-200 transition-transform duration-300 ease-in-out md:w-[80vw] md:max-w-[400px] md:block ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
              >
                {/* X Close Button */}
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="absolute top-4 right-4 p-2 rounded-full text-gray-700 hover:text-blue-700 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 z-[10000]"
                  aria-label="Close menu"
                >
                  <X className="h-7 w-7" />
                </button>
                <div className="py-4 space-y-1 max-h-[70vh] overflow-hidden px-3">
                  {navigation.map((item) => (
                    <div key={item.name}>
                      {item.hasDropdown ? (
                        <div>
                          <button
                            onClick={() => {
                              if (item.name === 'About') setIsAboutDropdownOpen(!isAboutDropdownOpen);
                              if (item.name === 'Academics') setIsAcademicsDropdownOpen(!isAcademicsDropdownOpen);
                              if (item.name === 'Activities') setIsActivitiesDropdownOpen(!isActivitiesDropdownOpen);
                              if (item.name === 'Achievements') setIsAchievementsDropdownOpen(!isAchievementsDropdownOpen);
                              if (item.name === 'Admissions') setIsAdmissionsDropdownOpen(!isAdmissionsDropdownOpen);
                              if (item.name === 'Gallery') setIsGalleryDropdownOpen(!isGalleryDropdownOpen);
                              if (item.name === 'Careers') setIsCareersDropdownOpen(!isCareersDropdownOpen);
                              if (item.name === 'Blog') setIsBlogDropdownOpen(!isBlogDropdownOpen);
                              if (item.name === 'Login') setIsLoginDropdownOpen(!isLoginDropdownOpen);
                            }}
                            className={`w-full text-left flex items-center justify-between px-3 py-3 rounded-md text-base font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                              (item.name === 'About' && isAboutActive()) || 
                              (item.name === 'Academics' && isAcademicsActive()) ||
                              (item.name === 'Activities' && isActivitiesActive()) ||
                              (item.name === 'Achievements' && isAchievementsActive()) ||
                              (item.name === 'Admissions' && isAdmissionsActive()) ||
                              (item.name === 'Gallery' && isGalleryActive()) ||
                              (item.name === 'Careers' && isCareersActive()) ||
                              (item.name === 'Blog' && isBlogActive()) ||
                              (item.name === 'Login' && location.pathname.startsWith('/login'))
                                ? 'text-blue-700 bg-sky-50'
                                : 'text-blue-800 hover:text-blue-700 hover:bg-sky-50'
                            }`}
                            aria-expanded={
                              (item.name === 'About' && isAboutDropdownOpen) ||
                              (item.name === 'Academics' && isAcademicsDropdownOpen) ||
                              (item.name === 'Activities' && isActivitiesDropdownOpen) ||
                              (item.name === 'Achievements' && isAchievementsDropdownOpen) ||
                              (item.name === 'Admissions' && isAdmissionsDropdownOpen) ||
                              (item.name === 'Gallery' && isGalleryDropdownOpen) ||
                              (item.name === 'Careers' && isCareersDropdownOpen) ||
                              (item.name === 'Blog' && isBlogDropdownOpen) ||
                              (item.name === 'Login' && isLoginDropdownOpen)
                            }
                            aria-controls={`mobile-dropdown-${item.name}`}
                          >
                            {item.name}
                          </button>
                          {((item.name === 'About' && isAboutDropdownOpen) || 
                            (item.name === 'Academics' && isAcademicsDropdownOpen) ||
                            (item.name === 'Activities' && isActivitiesDropdownOpen) ||
                            (item.name === 'Achievements' && isAchievementsDropdownOpen) ||
                            (item.name === 'Admissions' && isAdmissionsDropdownOpen) ||
                            (item.name === 'Gallery' && isGalleryDropdownOpen) ||
                            (item.name === 'Careers' && isCareersDropdownOpen) ||
                            (item.name === 'Blog' && isBlogDropdownOpen) ||
                            (item.name === 'Login' && isLoginDropdownOpen)) && (
                            <div id={`mobile-dropdown-${item.name}`} className="ml-4 mt-2 space-y-1 transition-all duration-300 ease-in-out animate-fade-in-down">
                              {item.subPages?.map((subPage) => (
                                <React.Fragment key={subPage.name}>
                                  {subPage && 'hasSubDropdown' in subPage && subPage.hasSubDropdown ? (
                                    <div>
                                      <button
                                        onClick={() => {
                                          if (subPage.name === 'Mandatory Disclosure') setIsMandatoryDropdownOpen(!isMandatoryDropdownOpen);
                                        }}
                                        className={`w-full text-left flex items-center justify-between px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                                          isActive(subPage.href) || (subPage.name === 'Mandatory Disclosure' && isMandatoryActive())
                                            ? 'text-blue-700 bg-sky-50'
                                            : 'text-blue-700 hover:text-blue-800 hover:bg-sky-50'
                                        }`}
                                      >
                                        {subPage.name}
                                      </button>
                                      {subPage.name === 'Mandatory Disclosure' && isMandatoryDropdownOpen && Array.isArray((subPage as any).subPages) && (
                                        <div className="ml-4 mt-2 space-y-1">
                                          {(subPage as any).subPages.map((nestedSubPage: any) => (
                                            <Link
                                              key={nestedSubPage.name}
                                              to={nestedSubPage.href}
                                              className={`block px-3 py-2 rounded-md text-sm transition-colors duration-200 ${
                                                isActive(nestedSubPage.href)
                                                  ? 'text-blue-700 bg-sky-50'
                                                  : 'text-blue-600 hover:text-blue-700 hover:bg-sky-50'
                                              }`}
                                            >
                                              {nestedSubPage.name}
                                            </Link>
                                          ))}
                                        </div>
                                      )}
                                    </div>
                                  ) : (
                                    subPage.name === 'Student ERP Login' ? (
                                      <a
                                        href="https://erp.stbrittosacademy.edu.in/schoolstudentportal/students/loginManager/youLogin.jsp"
                                        onClick={e => {
                                          e.preventDefault();
                                          handleStudentLogin();
                                        }}
                                        className={`block px-3 py-2 rounded-md text-sm transition-colors duration-200 ${
                                          isActive('/student-login')
                                            ? 'text-blue-700 bg-sky-50'
                                            : 'text-blue-700 hover:text-blue-800 hover:bg-sky-50'
                                        }`}
                                      >
                                        Student Login
                                      </a>
                                    ) : subPage.name === 'Teacher ERP Login' ? (
                                      <a
                                        href="https://erp.stbrittosacademy.edu.in/evarsitysbi/usermanager/loginManager/youLogin.jsp"
                                        onClick={e => {
                                          e.preventDefault();
                                          handleTeacherLogin();
                                        }}
                                        className={`block px-3 py-2 rounded-md text-sm transition-colors duration-200 ${
                                          isActive('/teacher-login')
                                            ? 'text-blue-700 bg-sky-50'
                                            : 'text-blue-700 hover:text-blue-800 hover:bg-sky-50'
                                        }`}
                                      >
                                        Teacher Login
                                      </a>
                                    ) : (
                                      <Link
                                        to={subPage.href}
                                        className={`block px-3 py-2 rounded-md text-sm transition-colors duration-200 ${
                                          isActive(subPage.href)
                                            ? 'text-blue-700 bg-sky-50'
                                            : 'text-blue-800 hover:text-blue-700 hover:bg-sky-50'
                                        }`}
                                      >
                                        {subPage.name}
                                      </Link>
                                    )
                                  )}
                                </React.Fragment>
                              ))}
                            </div>
                          )}
                        </div>
                      ) : (
                        <Link
                          to={item.href}
                          className={`block px-3 py-3 rounded-md text-base font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                            isActive(item.href)
                              ? 'text-blue-700 bg-sky-50'
                              : 'text-blue-800 hover:text-blue-700 hover:bg-sky-50'
                          }`}
                          role="menuitem"
                          tabIndex={0}
                        >
                          {item.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </>,
            document.body
          )}
        </div>
      </header>
    </>
  );
};

const TopHeader = () => (
  <div className="w-full bg-blue-600 text-white z-[2001] flex items-center py-2 min-h-[40px]">
    <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 w-full">
      <div className="flex flex-wrap md:flex-nowrap items-center justify-between gap-y-1 text-xs sm:text-sm w-full">
        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-6 mb-2 sm:mb-0">
          <div className="flex items-center space-x-2">
            <FiPhone className="h-3 w-3 sm:h-4 sm:w-4" />
            <span className="hidden xs:inline">Phone:</span>
            <a href="tel:+919840866053" className="hover:text-blue-200 transition-colors duration-200">
              9840866053
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <FiMail className="h-3 w-3 sm:h-4 sm:w-4" />
            <span className="hidden xs:inline">Email:</span>
            <a href="mailto:admin@stbrittosacademy.edu.in" className="hover:text-blue-200 transition-colors duration-200 truncate">
              admin@stbrittosacademy.edu.in
            </a>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex items-center space-x-3">
          <a
            href="https://www.facebook.com/StBrittosAcademySeniorSecondarySchool"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-200 transition-colors duration-200"
            aria-label="Facebook"
          >
            <FaFacebookF className="h-3 w-3 sm:h-4 sm:w-4" />
          </a>
          <a
            href="https://x.com/stbrittos"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-200 transition-colors duration-200"
            aria-label="X (Twitter)"
          >
            <FaTwitter className="h-3 w-3 sm:h-4 sm:w-4" />
          </a>
          <a
            href="https://www.linkedin.com/company/stbrittosacademy"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-200 transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn className="h-3 w-3 sm:h-4 sm:w-4" />
          </a>
          <a
            href="https://www.youtube.com/@BrittosAcademy"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-200 transition-colors duration-200"
            aria-label="YouTube"
          >
            <FaYoutube className="h-3 w-3 sm:h-4 sm:w-4" />
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Header;