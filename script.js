
// Work Areas Data
const workAreas = [
    "CRM Solutions → Enterprise CRM",
    "Small Business CRM",
    "Customer Experience Suite", 
    "Services CRM",
    "Financial Services CRM",
    "Life Sciences CRM",
    "Retail CRM",
    "Real Estate CRM",
    "Agency CRM",
    "Insurance CRM",
    "Startup & Non-Profit CRM",
    "CRM for Sales Reps",
    "CRM for Sales Leaders",
    "Industry-Specific Use Cases"
];

// Clients Data
const clients = [
    {
        name: "Guard One SRL",
        country: "🇷🇴",
        industry: "Security Services",
        location: "Bucharest, Romania",
        website: "guardone.ro",
        details: "Established in 1996 with 500+ employees as of 2022."
    },
    {
        name: "Leadstalk Digital Ltd",
        country: "🇲🇺",
        industry: "Conversion Rate Optimization (CRO) & CRM Services",
        location: "Beau Bassin, Mauritius",
        website: "leadstalk-digital.com",
        details: "Founded in 2017; specializes in data-driven lead generation."
    },
    {
        name: "Southern Payroll & Bookkeeping (SPB)",
        country: "🇺🇸",
        industry: "Payroll & Bookkeeping Services",
        location: "Chattanooga, Tennessee, USA",
        website: "southernpb.com",
        details: "Offers custom payroll and HR solutions; partners with Gusto"
    },
    {
        name: "Delivio Ltd",
        country: "🇦🇺",
        industry: "Business Consulting & AI Integration",
        location: "Australia",
        website: "delivio.com.au",
        details: "Aligns business strategy with AI for operational efficiency."
    },
    {
        name: "Campus Component",
        country: "🇮🇳",
        industry: "Electronic Components Distribution",
        location: "Pune, Maharashtra, India",
        website: "campuscomponent.com",
        details: "Distributor for educational and industrial components."
    },
    {
        name: "Epoch Tech Solutions LLC",
        country: "🇺🇸",
        industry: "Technology Solutions",
        location: "USA",
        website: "epoch-techsolutions.com",
        details: "U.S.-based provider of IT and business tech solutions."
    },
    {
        name: "ConsumerExp",
        country: "🇺🇸",
        industry: "Market Research & Consumer Experience",
        location: "USA",
        website: "consumerexp.com",
        details: "Specializes in market research and customer insights."
    },
    {
        name: "Extreme Watch",
        country: "🇨🇳",
        industry: "Luxury Watches",
        location: "China",
        website: "extreme.watch",
        details: "Offers a luxury timepiece collection in China."
    },
    {
        name: "Swiss Board Forum",
        country: "🇨🇭",
        industry: "Corporate Governance",
        location: "Switzerland",
        website: "swissboardforum.ch",
        details: "Promotes board leadership and governance practices."
    },
    {
        name: "Enable LLC",
        country: "🇺🇸",
        industry: "Business Consulting",
        location: "USA",
        website: "enable.llc",
        details: "U.S.-based consulting firm supporting business strategy."
    },
    {
        name: "The Charlotte Media Agency Ltd (Rewire)",
        country: "🇬🇧",
        industry: "Media & Marketing",
        location: "UK",
        website: "N/A",
        details: "UK-based agency, now rebranded as Rewire."
    },
    {
        name: "Lifestyle Home",
        country: "🇿🇦",
        industry: "Home Furnishing & Interior Design",
        location: "South Africa",
        website: "lifestylehome.co.za",
        details: "Supplies modern furniture and interior décor solutions."
    },
    {
        name: "Comtec Wash Systems, Inc.",
        country: "🇺🇸",
        industry: "Car Wash Systems & Equipment",
        location: "Arvada, Colorado, USA",
        website: "comtecwash.com",
        details: "Family-owned car wash development & equipment provider."
    },
    {
        name: "Benny Goren Ltd.",
        country: "🇮🇱",
        industry: "Business Consulting",
        location: "Israel",
        website: "bennygoren.co.il",
        details: "Israeli consultancy offering strategic business services."
    },
    {
        name: "Kendell & Associates, LLC",
        country: "🇺🇸",
        industry: "Venture Banking & Investment",
        location: "Huntsville, Utah, USA",
        website: "kendellassociates.com",
        details: "Specializes in investment capital and advisory services."
    },
    {
        name: "Can Do Payments Ltd",
        country: "🇬🇧",
        industry: "Payment Processing",
        location: "UK",
        website: "candopayments.com",
        details: "Card payment introducer for Elavon Merchant Services."
    },
    {
        name: "Sub Zero Nitrogen Ice Cream",
        country: "🇺🇸",
        industry: "Ice Cream Franchise",
        location: "USA",
        website: "subzeroicecream.com",
        details: "Offers nitrogen-based, made-to-order ice cream."
    },
    {
        name: "Impact Trash Solutions",
        country: "🇺🇸",
        industry: "Waste Management",
        location: "USA",
        website: "impacttrash.com",
        details: "National leader in doorstep trash and recycling services."
    },
    {
        name: "Web Summit",
        country: "🇵🇹",
        industry: "Technology Conference",
        location: "Portugal",
        website: "websummit.com",
        details: "Annual global tech conference held in Lisbon."
    },
    {
        name: "UMass iCons Program",
        country: "🇺🇸",
        industry: "Education",
        location: "USA",
        website: "icons.cns.umass.edu",
        details: "STEM innovation certificate program at UMass."
    },
    {
        name: "Enzo Engineering Solution",
        country: "🇹🇿",
        industry: "Engineering & Real Estate",
        location: "Tanzania",
        website: "@enzogrouptz",
        details: "Offers civil, mechanical, and electrical engineering."
    },
    {
        name: "iMobile Store Pty Ltd",
        country: "🇦🇺",
        industry: "Mobile Phone Retail",
        location: "Victoria, Australia",
        website: "imobilestore.com.au",
        details: "Retailer of mobile phones and accessories in Victoria."
    },
    {
        name: "Brotech Digital Graphics Co., Ltd",
        country: "🇨🇳",
        industry: "Printing & Packaging Machinery",
        location: "China",
        website: "bro-tech.net",
        details: "Solutions for label converting and packaging industries."
    },
    {
        name: "Casco Bay Hemp",
        country: "🇺🇸",
        industry: "CBD Products",
        location: "USA",
        website: "cascobayhemp.com",
        details: "Produces organically sourced CBD products."
    },
    {
        name: "Corcapa 1031 Advisors",
        country: "🇺🇸",
        industry: "Real Estate Investment",
        location: "USA",
        website: "corcapa.com",
        details: "Specializes in 1031 exchange real estate solutions."
    },
    {
        name: "Multi Concept AG",
        country: "🇨🇭",
        industry: "Business Consulting",
        location: "Switzerland",
        website: "N/A",
        details: "Offers diversified consulting services for Swiss and international clients."
    },
    {
        name: "Macad'or AG",
        country: "🇨🇭",
        industry: "Food & Beverage",
        location: "Switzerland",
        website: "N/A",
        details: "Specializes in the production and distribution of gourmet food products."
    },
    {
        name: "Informatix Pty Ltd",
        country: "🇦🇺",
        industry: "Software Development & IT Solutions",
        location: "Australia",
        website: "informatics.com.au",
        details: "Provides data analytics, business intelligence, and IT services."
    },
    {
        name: "LULU Copenhagen",
        country: "🇩🇰",
        industry: "Fashion & Jewelry",
        location: "Denmark",
        website: "lulucopenhagen.com",
        details: "A Danish jewelry brand known for playful and elegant designs."
    },
    {
        name: "WellQor Behavioral Health",
        country: "🇺🇸",
        industry: "Mental Health Services",
        location: "USA",
        website: "wellqor.com",
        details: "Offers behavioral health services with a focus on older adults."
    },
    {
        name: "Broadband Planning",
        country: "🇺🇸",
        industry: "Telecommunications",
        location: "USA",
        website: "broadbandplanning.com",
        details: "Specializes in broadband network planning and implementation services."
    },
    {
        name: "Diverse Product",
        country: "🇬🇧",
        industry: "Retail & Consumer Goods",
        location: "UK",
        website: "N/A",
        details: "Distributes a range of consumer products across multiple categories."
    },
    {
        name: "Purple Space Digital Limited",
        country: "🇬🇧",
        industry: "Digital Marketing",
        location: "UK",
        website: "purplespacedigital.com",
        details: "Provides digital marketing, SEO, and branding services."
    },
    {
        name: "Boosted CRM",
        country: "🇺🇸",
        industry: "Zoho Consulting & CRM Services",
        location: "USA",
        website: "boostedcrm.com",
        details: "A Zoho Premium Partner delivering custom CRM and automation solutions."
    },
    {
        name: "SkyPod Immigration",
        country: "🇨🇦",
        industry: "Immigration Consulting",
        location: "Canada",
        website: "skypodimmigration.com",
        details: "Provides immigration and visa consultancy for clients worldwide."
    },
    {
        name: "Terra American Bistro",
        country: "🇺🇸",
        industry: "Restaurant & Food Service",
        location: "San Diego, CA, USA",
        website: "terrasd.com",
        details: "Terra American Bistro emphasizes local, sustainable, and organic ingredients. Features a bar with seasonal fruit and herb-infused vodkas made in-house, local craft beers"
    }
];

// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initializeNavigation();
    initializeWorkAreas();
    initializeClients();
    initializeContactForm();
    initializeScrollAnimations();
});

// Navigation functionality
function initializeNavigation() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
            
            // Close mobile menu if open
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse.classList.contains('show')) {
                const navbarToggler = document.querySelector('.navbar-toggler');
                navbarToggler.click();
            }
        });
    });

    // Active navigation link highlight
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
        
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });
}

// Initialize Work Areas
function initializeWorkAreas() {
    const workAreasContainer = document.getElementById('work-areas-list');
    
    workAreas.forEach(area => {
        const workAreaElement = document.createElement('div');
        workAreaElement.className = 'col-lg-4 col-md-6 mb-3';
        workAreaElement.innerHTML = `
            <div class="work-area-item">
                <i class="fas fa-check-circle"></i>
                <span class="text-light">${area}</span>
            </div>
        `;
        workAreasContainer.appendChild(workAreaElement);
    });
}

// Initialize Clients
function initializeClients() {
    const clientsContainer = document.getElementById('clients-list');
    
    clients.forEach(client => {
        const clientElement = document.createElement('div');
        clientElement.className = 'col-lg-4 col-md-6 mb-4';
        
        const websiteDisplay = client.website !== 'N/A' && !client.website.startsWith('@') 
            ? `<a href="https://${client.website}" target="_blank" class="client-website">${client.website}</a>` 
            : client.website.startsWith('@') 
                ? `<span class="client-website">${client.website}</span>`
                : '<span class="text-muted">Website not available</span>';
        
        clientElement.innerHTML = `
            <div class="client-card">
                <div class="client-header">
                    <span class="client-flag">${client.country}</span>
                    <div>
                        <h3 class="client-name">${client.name}</h3>
                        <p class="client-industry">${client.industry}</p>
                    </div>
                </div>
                <div class="client-details">
                    <p><strong>Location:</strong> ${client.location}</p>
                    <p><strong>Website:</strong> ${websiteDisplay}</p>
                    <p><strong>Details:</strong> ${client.details}</p>
                </div>
            </div>
        `;
        clientsContainer.appendChild(clientElement);
    });
}

// Contact Form functionality
function initializeContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const message = contactForm.querySelector('textarea').value;
        
        // Basic validation
        if (!name || !email || !message) {
            alert('Please fill in all fields.');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }
        
        // Simulate form submission
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalText = submitButton.innerHTML;
        submitButton.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Sending...';
        submitButton.disabled = true;
        
        // Simulate API call
        setTimeout(() => {
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
            submitButton.innerHTML = originalText;
            submitButton.disabled = false;
        }, 2000);
    });
}

// Initialize scroll animations
function initializeScrollAnimations() {
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Add animation styles to elements
    const animatedElements = document.querySelectorAll('.service-card, .skill-category, .stat-card, .client-card, .work-area-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Add some interactive features
document.addEventListener('DOMContentLoaded', function() {
    // Add hover effects to cards
    const cards = document.querySelectorAll('.service-card, .client-card, .stat-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Add loading animation to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        if (button.type !== 'submit') {
            button.addEventListener('click', function(e) {
                if (this.getAttribute('href') && this.getAttribute('href').startsWith('#')) {
                    return; // Skip for anchor links
                }
                
                const ripple = document.createElement('span');
                ripple.style.position = 'absolute';
                ripple.style.borderRadius = '50%';
                ripple.style.background = 'rgba(255,255,255,0.3)';
                ripple.style.transform = 'scale(0)';
                ripple.style.animation = 'ripple 0.6s linear';
                ripple.style.left = (e.clientX - this.offsetLeft) + 'px';
                ripple.style.top = (e.clientY - this.offsetTop) + 'px';
                
                this.style.position = 'relative';
                this.style.overflow = 'hidden';
                this.appendChild(ripple);
                
                setTimeout(() => {
                    ripple.remove();
                }, 600);
            });
        }
    });
});

// Add CSS for ripple effect
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .navbar-nav .nav-link.active {
        color: var(--primary-color) !important;
        font-weight: 600;
    }
`;
document.head.appendChild(style);
