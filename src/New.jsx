import React, { useEffect } from 'react';

const MyComponent = () => {
  useEffect(() => {
    const toggleMenuHandler = () => {
      const navMenu = document.getElementById('nav-menu');
      if (navMenu) {
        navMenu.classList.toggle('show');
      }
    };

    const closeMenuHandler = () => {
      const navMenu = document.getElementById('nav-menu');
      if (navMenu) {
        navMenu.classList.remove('show');
      }
    };

    const linkAction = () => {
      const navMenu = document.getElementById('nav-menu');
      if (navMenu) {
        navMenu.classList.remove('show');
      }
    };

    const scrollActive = () => {
      const scrollY = window.pageYOffset;
      const sections = document.querySelectorAll('section[id]');

      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id');
        const navLink = document.querySelector(`.nav_menu a[href*=${sectionId}]`);

        if (navLink) {
          if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLink.classList.add('active');
          } else {
            navLink.classList.remove('active');
          }
        }
      });
    };

    const toggleMenu = document.getElementById('nav-toggle');
    if (toggleMenu) {
      toggleMenu.addEventListener('click', toggleMenuHandler);
    }

    const closeMenu = document.getElementById('nav-close');
    if (closeMenu) {
      closeMenu.addEventListener('click', closeMenuHandler);
    }

    const navLinks = document.querySelectorAll('.nav_link');
    navLinks.forEach((link) => link.addEventListener('click', linkAction));

    window.addEventListener('scroll', scrollActive);

    return () => {
      if (toggleMenu) {
        toggleMenu.removeEventListener('click', toggleMenuHandler);
      }
      if (closeMenu) {
        closeMenu.removeEventListener('click', closeMenuHandler);
      }
      navLinks.forEach((link) => link.removeEventListener('click', linkAction));
      window.removeEventListener('scroll', scrollActive);
    };
  }, []);

  return (
    // JSX code for your component
    <div>
      {}
    </div>
  );
};

export default MyComponent;
