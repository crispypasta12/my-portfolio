
    // Navigation menu toggle for mobile
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.getElementById('navLinks');
    
    mobileMenu.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      mobileMenu.innerHTML = navLinks.classList.contains('active') ? 
        '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    });
    
    // Close mobile menu when clicking on a nav link
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileMenu.innerHTML = '<i class="fas fa-bars"></i>';
      });
    });
    
    // Navbar on scroll
    window.addEventListener('scroll', () => {
      const navbar = document.querySelector('.navbar');
      const backToTop = document.getElementById('backToTop');
      
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
        backToTop.classList.add('show');
      } else {
        navbar.classList.remove('scrolled');
        backToTop.classList.remove('show');
      }
      
      // Timeline animation
      const timelineItems = document.querySelectorAll('.timeline-item');
      timelineItems.forEach(item => {
        const itemTop = item.getBoundingClientRect().top;
        if (itemTop < window.innerHeight - 100) {
          item.classList.add('show');
        }
      });
    });
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      });
    });
    
    // Scroll down button
    document.getElementById('scrollDown').addEventListener('click', () => {
      window.scrollTo({
        top: document.getElementById('about').offsetTop - 80,
        behavior: 'smooth'
      });
    });
    
    // Back to top button
    document.getElementById('backToTop').addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
    
    // Contact form submission (for demo purposes - would need backend in real implementation)
    document.getElementById('contactForm').addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
      };
      
      // Show success message (in a real site, you would send this to a server)
      alert('Thank you for your message! In a real implementation, this would be sent to the server.');
      document.getElementById('contactForm').reset();
    });
    
    // Animate circuit SVG paths
    document.querySelectorAll('.circuit-path').forEach(path => {
      const length = path.getTotalLength();
      path.style.strokeDasharray = length;
      path.style.strokeDashoffset = length;
    });
    
    // Create floating particles
    const particlesContainer = document.querySelector('.particles');
    for (let i = 0; i < 50; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      
      // Random position
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      particle.style.left = `${x}%`;
      particle.style.top = `${y}%`;
      
      // Random size
      const size = Math.random() * 3 + 1;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      // Random color
      const colors = ['var(--primary)', 'var(--secondary)', 'var(--accent)'];
      particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      
      // Random animation
      const xMove = (Math.random() - 0.5) * 150;
      const yMove = (Math.random() - 0.5) * 150;
      particle.style.setProperty('--x', `${xMove}px`);
      particle.style.setProperty('--y', `${yMove}px`);
      
      const duration = Math.random() * 15 + 5;
      const delay = Math.random() * 5;
      particle.style.animation = `particle-float ${duration}s ${delay}s infinite`;
      
      particlesContainer.appendChild(particle);
    }
  