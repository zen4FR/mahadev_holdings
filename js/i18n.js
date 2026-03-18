/**
 * i18n.js - Complete multilingual support for ALL pages
 * Includes translations for main index.html and all sub pages
 */

(function() {
    // Wait for DOM to be ready
    document.addEventListener('DOMContentLoaded', function() {
        console.log('i18n.js loaded - initializing...');
        
        // ========== COMPLETE TRANSLATIONS FOR ALL PAGES ==========
        const translations = {
            en: {
                // ===== NAVIGATION =====
                'nav.home': 'Home',
                'nav.team': 'Team',
                'nav.services': 'Services',
                'nav.backToServices': 'Back to All Services',
                
                // ===== LANGUAGE =====
                'language.select': 'Choose Language',
                'language.english': 'English',
                'language.nepali': 'नेपाली',
                
                // ===== INDEX PAGE =====
                'hero.title': 'Purohit Baaje',
                'services.title': 'Our Services',
                
                // Service Cards
                'services.onlinePuja.title': 'Online Puja Booking',
                'services.onlinePuja.description': 'Perform sacred rituals from anywhere with experienced priests.',
                'services.onlinePuja.button': 'Book Now',
                
                'services.kriyaPutri.title': 'Kriya Putri Bhawan Booking',
                'services.kriyaPutri.description': 'Easily book Kriya Putri Bhawan with one click.',
                'services.kriyaPutri.button': 'Book Now',
                
                'services.priestServices.title': 'Priest Services',
                'services.priestServices.description': 'Hire experienced Vedic priests for personalized rituals and ceremonies.',
                'services.priestServices.button': 'Book Now',
                
                'services.corporateServices.title': 'Corporate Services',
                'services.corporateServices.description': 'Enhance your corporate environment with traditional Vedic ceremonies for offices, schools, and institutions.',
                'services.corporateServices.button': 'Book Now',
                
                'services.pilgrimage.title': 'Pilgrimage Services',
                'services.pilgrimage.description': 'Perform sacred havan ceremonies with experienced priests for purification and blessings.',
                'services.pilgrimage.button': 'Book Now',
                
                'services.astrology.title': 'Astrology Consultation',
                'services.astrology.description': 'Consult expert astrologers for birth chart analysis, planetary defect remedies, auspicious timing, and predictions.',
                'services.astrology.button': 'Book Now',
                
                'services.karmakanda.title': 'Karmakanda Classes',
                'services.karmakanda.description': 'Karmakanda–based consultation and classes for Vedic rituals, pujas, and samskaras.',
                'services.karmakanda.button': 'Book Now',
                
                'services.bookStore.title': 'Book Store',
                'services.bookStore.description': 'Sacred books, scriptures, and spiritual literature for rituals and learning.',
                'services.bookStore.button': 'Book Now',
                
                'services.bhajanKirtan.title': 'Bhajan Kirtan Group',
                'services.bhajanKirtan.description': 'Service to perform special puja, havan, and religious ceremonies at your home or office.',
                'services.bhajanKirtan.button': 'Book Now',
                
                'services.pujaItems.title': 'Puja Items Package',
                'services.pujaItems.description': 'Service to provide pooja items package for those who need separate and inside the service package (Classic Package)',
                'services.pujaItems.button': 'Book Now',
                
                'services.donation.title': 'Donation & Seva',
                'services.donation.description': 'Support our spiritual mission, temple maintenance, free services for needy, and community welfare programs.',
                'services.donation.button': 'Donate Now',
                
                // Karthika/Pousha Month
                'karthika.title': '📿 Pousha Month',
                'karthika.subtitle': 'Pousha Month – The month of holy penance, religious rituals, and spiritual purification',
                'karthika.description': 'Pousha is one of the most sacred months in the Nepali Hindu calendar, a month deeply connected to penance, religious rituals, spiritual purification, and divine grace. This month honors the blessings of Lord Surya, Goddess Lakshmi, and the spiritual light of winter religious festivals. The pujas and rituals performed in the Pousha month are considered especially fruitful.',
                'karthika.button': 'Book your special Pousha month puja now!',
                
                // Primary Services
                'primaryServices.title': 'Our Primary Services',
                'primaryServices.subtitle': 'Comprehensive Puja Services - Book online, connect with temples, and gift divine blessings!',
                
                'primaryServices.spiritualShop.title': 'Spiritual / Holy Products Shop',
                'primaryServices.spiritualShop.description': 'Bhagavad Gita, Ramayana, Vishnu Sahasranamam\nPuja material kits\nRudraksha, Mala, Yantras\nIncense, candles, lamps, and essential festival items',
                'primaryServices.spiritualShop.button': 'Learn More',
                
                'primaryServices.astrology.title': 'Astrological Consultation and Guidance Service',
                'primaryServices.astrology.description': 'Birth chart reading, horoscope matching, planetary defect analysis, auspicious timing determination, Vastu advice, and astrological remedies.',
                'primaryServices.astrology.button': 'Learn More',
                
                'primaryServices.ceremonyManagement.title': 'Religious Ceremony Management Service',
                'primaryServices.ceremonyManagement.description': 'Puja decoration (mandap, flowers, kalash installation)\nSound system for bhajans\nPuja material packaging\nSeating area and seating arrangements\nPhotography/videography (optional)',
                'primaryServices.ceremonyManagement.button': 'Learn More',
                
                // Priest Register
                'priestRegister.title': 'Register as a Priest',
                'priestRegister.description1': 'Join our puja services and offer your expertise to devotees worldwide.',
                'priestRegister.description2': 'Get a dedicated profile, receive online bookings, and earn through spiritual services. Expand your reach and serve more people.',
                'priestRegister.button': 'Register Now',
                
                // Footer
                'footer.about.title': 'About Purohit Baaje',
                'footer.about.description': 'Purohit Baaje is the leading digital platform for all Hindu devotional needs and spiritual services.',
                
                'footer.quickLinks.title': 'Quick Links',
                'footer.quickLinks.onlinePuja': 'Online Puja Booking',
                'footer.quickLinks.templePuja': 'Temple Puja Booking',
                'footer.quickLinks.priestBooking': 'Priest Booking',
                'footer.quickLinks.vedicBlessings': 'Vedic Blessings',
                'footer.quickLinks.contact': 'Contact Us',
                
                'footer.pujas.title': 'Pujas',
                'footer.pujas.birth': 'Birth Puja',
                'footer.pujas.shraddha': 'Shraddha Puja',
                
                'footer.management.title': 'Puja Management',
                'footer.management.description': 'We provide complete puja management services to our clients. A single point of contact for all your religious needs.',
                
                'footer.copyright': '© 2023 Purohit Baaje. All rights reserved.',
                
                // ===== ASTROLOGY CONSULTATION PAGE =====
                'astrology.title': 'Astrology Consultation',
                'astrology.subtitle': 'Consult expert astrologers for birth chart analysis, planetary defect remedies, auspicious timing, and predictions.',
                'astrology.nav.consultations': 'Consultations',
                'astrology.nav.systems': 'Systems',
                'astrology.nav.astrologers': 'Astrologers',
                'astrology.nav.process': 'Process',
                
                'astrology.intro.title': 'Vedic Astrology Guidance',
                'astrology.intro.desc1': 'Vedic Astrology (Jyotish) is an ancient Indian science that reveals the cosmic influences on our lives based on planetary positions at the time of birth. Our expert astrologers provide accurate predictions, practical remedies, and guidance to help you navigate life\'s challenges and maximize opportunities.',
                'astrology.intro.desc2': 'Whether you\'re facing career decisions, relationship issues, health concerns, or seeking spiritual growth, our astrology consultations offer clarity and direction based on your unique birth chart.',
                
                'astrology.freeAnalysis.title': 'Free Basic Horoscope Analysis',
                'astrology.freeAnalysis.desc': 'First-time clients receive a free basic birth chart analysis including planetary positions, rising sign, and key life themes. Book your consultation today to claim this offer.',
                
                'astrology.consultations.title': 'Consultation Services',
                'astrology.popular': 'Most Popular',
                
                'astrology.complete.title': 'Complete Birth Chart Analysis',
                'astrology.complete.desc': 'Comprehensive analysis of your Janam Kundali including all 12 houses, 9 planets, 27 nakshatras, and planetary aspects.',
                'astrology.complete.features': [
                    'Detailed planet positions and influences',
                    'Dasha (planetary period) analysis',
                    'Strength assessment of each house',
                    'Career and finance predictions',
                    'Relationship compatibility insights',
                    'Personalized PDF report included'
                ],
                
                'astrology.defects.title': 'Planetary Defect Remedies',
                'astrology.defects.desc': 'Identification of malefic planetary influences (Grah Dosh) and personalized Vedic remedies to neutralize negative effects.',
                'astrology.defects.features': [
                    'Analysis of Kaal Sarp Dosh, Mangal Dosh, etc.',
                    'Gemstone recommendations (Ratna)',
                    'Mantra and Yantra prescriptions',
                    'Specific puja and havan recommendations',
                    'Charity and fasting guidelines',
                    'Follow-up consultation after 40 days'
                ],
                
                'astrology.muhurta.title': 'Muhurta (Auspicious Timing)',
                'astrology.muhurta.desc': 'Selecting the most favorable timing for important life events based on planetary transits and nakshatra positions.',
                'astrology.muhurta.features': [
                    'Wedding date selection (Vivah Muhurta)',
                    'Business inauguration timing',
                    'House warming (Griha Pravesh)',
                    'Vehicle purchase timing',
                    'Starting new education or job',
                    'Medical procedure timing'
                ],
                
                'astrology.relationship.title': 'Relationship & Compatibility',
                'astrology.relationship.desc': 'In-depth analysis of relationship compatibility for marriage, business partnerships, and family harmony.',
                'astrology.relationship.features': [
                    'Kundali matching for marriage (Ashtakoot)',
                    'Love relationship analysis',
                    'Business partnership compatibility',
                    'Parent-child relationship insights',
                    'Remedies for relationship issues',
                    'Compatibility score with suggestions'
                ],
                
                'astrology.career.title': 'Career & Finance Guidance',
                'astrology.career.desc': 'Astrological guidance for career advancement, business growth, financial investments, and wealth accumulation.',
                'astrology.career.features': [
                    'Suitable career path analysis',
                    'Business success timing prediction',
                    'Investment and stock market guidance',
                    'Property purchase decisions',
                    'Debt reduction strategies',
                    'Wealth accumulation remedies'
                ],
                
                'astrology.question.title': 'Question-Based Consultation',
                'astrology.question.desc': 'Focused consultation addressing 3 specific questions about any area of life - career, health, relationships, or spirituality.',
                'astrology.question.features': [
                    'Answer 3 specific life questions',
                    'Prashna Kundali (Horary astrology)',
                    'Immediate concerns addressed',
                    'Practical guidance provided',
                    '30-minute focused session',
                    'Email follow-up included'
                ],
                
                'astrology.systems.title': 'Astrological Systems We Use',
                'astrology.systems.parashari': 'Parashari System',
                'astrology.systems.jyotish': 'Vedic Jyotish',
                'astrology.systems.nadi': 'Nadi Astrology',
                'astrology.systems.kerala': 'Kerala Tradition',
                
                'astrology.elements.title': 'What We Analyze in Your Chart',
                'astrology.elements.lagna': 'Lagna & Planets',
                'astrology.elements.houses': '12 Houses',
                'astrology.elements.nakshatras': '27 Nakshatras',
                'astrology.elements.dasha': 'Dasha Periods',
                'astrology.elements.yogas': 'Yogas & Combinations',
                'astrology.elements.defects': 'Planetary Defects',
                'astrology.elements.remedies': 'Remedial Measures',
                'astrology.elements.lifePath': 'Life Path Guidance',
                
                'astrology.astrologers.title': 'Our Expert Astrologers',
                'astrology.astrologers.ravi.name': 'Pandit Ravi Shankar',
                'astrology.astrologers.ravi.specialty': 'Vedic & Parashari Expert',
                'astrology.astrologers.ravi.experience': '25+ Years Experience',
                'astrology.astrologers.ravi.desc': 'Specializes in birth chart analysis, planetary remedies, and career guidance.',
                
                'astrology.astrologers.meera.name': 'Dr. Meera Desai',
                'astrology.astrologers.meera.specialty': 'Relationship & Muhurta',
                'astrology.astrologers.meera.experience': '18+ Years Experience',
                'astrology.astrologers.meera.desc': 'Expert in marriage compatibility, relationship issues, and auspicious timing.',
                
                'astrology.astrologers.rao.name': 'Shri K. N. Rao',
                'astrology.astrologers.rao.specialty': 'Nadi & KP System',
                'astrology.astrologers.rao.experience': '30+ Years Experience',
                'astrology.astrologers.rao.desc': 'Master of Nadi astrology and Krishnamurti Paddhati for precise predictions.',
                
                'astrology.astrologers.vikram.name': 'Jyotishi Vikram',
                'astrology.astrologers.vikram.specialty': 'Gemstone & Remedies',
                'astrology.astrologers.vikram.experience': '15+ Years Experience',
                'astrology.astrologers.vikram.desc': 'Specializes in gemstone therapy, mantra sadhana, and Vedic remedies.',
                
                'astrology.process.title': 'Consultation Process',
                'astrology.process.step1': 'Birth Details',
                'astrology.process.step1Desc': 'Provide accurate birth date, time, and place for precise chart calculation.',
                'astrology.process.step2': 'Chart Preparation',
                'astrology.process.step2Desc': 'Our astrologers calculate your Kundali using traditional methods and software.',
                'astrology.process.step3': 'Analysis Session',
                'astrology.process.step3Desc': 'Detailed consultation via video call, phone, or in-person as per your preference.',
                'astrology.process.step4': 'Remedies & Guidance',
                'astrology.process.step4Desc': 'Personalized recommendations including rituals, gems, mantras, and lifestyle.',
                'astrology.process.step5': 'Follow-up Support',
                'astrology.process.step5Desc': 'Email support for 30 days to clarify doubts and track progress.',
                
                'astrology.testimonial.content': '"The birth chart analysis I received was incredibly accurate and insightful. Pandit Ravi not only explained my planetary positions but also provided practical remedies that actually worked. My career confusion cleared within weeks of following his guidance. The detailed PDF report is something I refer to regularly. This consultation was worth every penny and more."',
                'astrology.testimonial.author': 'Anjali Patel',
                'astrology.testimonial.authorDesc': 'Software Engineer, Completed Career Guidance Consultation',
                
                'astrology.cta.title': 'Gain Clarity Through Vedic Astrology',
                'astrology.cta.desc': 'Understand your life\'s purpose, overcome challenges, and maximize opportunities with personalized astrological guidance from experienced Vedic astrologers.',
                'astrology.cta.button': 'Book Astrology Consultation',
                
                'astrology.footer.title': 'Astrology Consultation Desk',
                'astrology.footer.desc': 'Contact us for appointment scheduling, urgent queries, or clarification about our services.',
                'astrology.footer.phone': 'Astrology Desk: +91-XXXXXX-XXXX',
                'astrology.footer.email': 'astrology@vedicservices.com',
                'astrology.footer.hours': 'Available 8 AM - 10 PM',
                'astrology.footer.copyright': '© 2023 Vedic Services. Astrology Division. All Rights Reserved.',
                
                // ===== BHAJAN KIRTAN PAGE =====
                'bhajanKirtan.title': 'Bhajan & Kirtan Services',
                'bhajanKirtan.subtitle': 'Devotional singing, kirtan, and satsang to create a spiritually uplifting atmosphere.',
                'bhajanKirtan.nav.services': 'Services',
                'bhajanKirtan.nav.events': 'Events',
                'bhajanKirtan.nav.process': 'Process',
                
                'bhajanKirtan.intro.title': 'Experience Divine Sound & Devotion',
                'bhajanKirtan.intro.desc1': 'Bhajan and Kirtan are powerful devotional practices that purify the mind and fill the environment with positive spiritual energy.',
                'bhajanKirtan.intro.desc2': 'Our trained singers and musicians conduct traditional and modern bhajan–kirtan programs for homes, temples, and community gatherings.',
                
                'bhajanKirtan.offerings.title': 'Our Bhajan & Kirtan Offerings',
                
                'bhajanKirtan.home.title': 'Home Bhajan Program',
                'bhajanKirtan.home.features': [
                    'Daily & special occasion bhajans',
                    'Ram, Krishna, Shiva, Devi bhajans',
                    'Peaceful spiritual atmosphere'
                ],
                
                'bhajanKirtan.temple.title': 'Temple Kirtan',
                'bhajanKirtan.temple.features': [
                    'Traditional kirtan style',
                    'Harmonium, tabla, mridanga',
                    'Festival & Ekadashi programs'
                ],
                
                'bhajanKirtan.satsang.title': 'Satsang & Group Kirtan',
                'bhajanKirtan.satsang.features': [
                    'Community spiritual gatherings',
                    'Interactive chanting',
                    'Short pravachan included'
                ],
                
                'bhajanKirtan.festival.title': 'Festival Special Programs',
                'bhajanKirtan.festival.features': [
                    'Janmashtami, Shivaratri, Navratri',
                    'Customized bhajan lists',
                    'Extended kirtan sessions'
                ],
                
                'bhajanKirtan.cta.title': 'Fill Your Space with Divine Vibration',
                'bhajanKirtan.cta.desc': 'Invite bhajan and kirtan into your home or temple and experience inner peace.',
                'bhajanKirtan.cta.button': 'Enquire / Book Program',
                
                'bhajanKirtan.footer.copyright': '© 2023 Vedic Services | Bhajan & Kirtan Division',
                'bhajanKirtan.footer.contact': 'Contact: +91-XXXXXX-XXXX | bhajan@vedicservices.com',
                
                // ===== BOOK STORE PAGE =====
                'bookStore.title': 'Vedic Book Store',
                'bookStore.subtitle': 'Authentic Vedic scriptures, ritual manuals, spiritual books & learning resources.',
                'bookStore.nav.books': 'Books',
                'bookStore.nav.categories': 'Categories',
                'bookStore.nav.featured': 'Featured',
                
                'bookStore.intro.title': 'Sacred Knowledge in Printed Form',
                'bookStore.intro.desc1': 'Our Vedic Book Store offers carefully selected scriptures, puja manuals, karmakanda texts, astrology references, and spiritual literature.',
                'bookStore.intro.desc2': 'Ideal for priests, students, householders, and seekers who want authentic and traditional resources.',
                
                'bookStore.search.placeholder': 'Search for Hindu scriptures, Vedas, Puranas...',
                'bookStore.search.button': 'Search',
                'bookStore.loading': 'Loading books...',
                'bookStore.noResults': 'No books found. Try a different search term.',
                
                'bookStore.featured.title': 'Featured Books',
                'bookStore.categories.title': 'Browse by Category',
                
                'bookStore.cta.title': 'Bring Sacred Wisdom Home',
                'bookStore.cta.desc': 'Order authentic Vedic books curated by scholars and practitioners.',
                'bookStore.cta.button': 'Browse All Books',
                
                'bookStore.footer.copyright': '© 2023 Vedic Services | Book Store Division',
                'bookStore.footer.contact': 'Contact: +91-XXXXXX-XXXX | vedicbooks@vedicservices.com',
                
                // ===== CORPORATE SERVICES PAGE =====
                'corporate.title': 'Corporate Services',
                'corporate.subtitle': 'Enhance your corporate environment with traditional Vedic ceremonies for offices, schools, and institutions.',
                'corporate.nav.benefits': 'Benefits',
                'corporate.nav.services': 'Services',
                'corporate.nav.clients': 'Clients',
                'corporate.nav.process': 'Process',
                
                'corporate.intro.title': 'Vedic Traditions for Modern Corporations',
                'corporate.intro.desc1': 'In today\'s competitive business environment, creating a positive, harmonious, and prosperous workplace is essential. Our Corporate Vedic Services blend ancient wisdom with modern corporate needs to enhance productivity, teamwork, and overall success.',
                'corporate.intro.desc2': 'We offer customized Vedic ceremonies, pujas, and spiritual consultations specifically designed for corporate settings, educational institutions, government offices, and healthcare facilities.',
                
                'corporate.benefits.title': 'Benefits for Your Organization',
                'corporate.benefits.productivity.title': 'Enhanced Productivity',
                'corporate.benefits.productivity.desc': 'Vedic rituals create positive energy fields that improve focus, reduce stress, and increase employee efficiency by up to 40% according to workplace studies.',
                'corporate.benefits.team.title': 'Improved Team Harmony',
                'corporate.benefits.team.desc': 'Group ceremonies foster unity, reduce workplace conflicts, and build stronger relationships among team members and departments.',
                'corporate.benefits.protection.title': 'Business Protection',
                'corporate.benefits.protection.desc': 'Specialized Vastu pujas and protection rituals safeguard your business from negative influences, legal issues, and financial obstacles.',
                'corporate.benefits.client.title': 'Client & Investor Relations',
                'corporate.benefits.client.desc': 'Impress clients and investors with unique corporate wellness initiatives that demonstrate cultural awareness and employee care.',
                'corporate.benefits.environment.title': 'Positive Work Environment',
                'corporate.benefits.environment.desc': 'Regular spiritual activities reduce burnout, improve mental health, and create a more positive, balanced workplace culture.',
                'corporate.benefits.advantage.title': 'Competitive Advantage',
                'corporate.benefits.advantage.desc': 'Differentiate your organization with unique corporate wellness programs that attract and retain top talent in your industry.',
                
                'corporate.services.title': 'Corporate Services Offered',
                'corporate.tabs.office': 'Office Ceremonies',
                'corporate.tabs.educational': 'Educational Institutions',
                'corporate.tabs.healthcare': 'Healthcare Facilities',
                'corporate.tabs.regular': 'Regular Programs',
                
                'corporate.clients.title': 'Serving Diverse Organizations',
                
                'corporate.process.title': 'Our Corporate Service Process',
                'corporate.process.step1.title': 'Needs Assessment',
                'corporate.process.step1.desc': 'We understand your organization\'s specific requirements, culture, and objectives.',
                'corporate.process.step2.title': 'Customized Proposal',
                'corporate.process.step2.desc': 'We design a tailored package of services that aligns with your corporate goals.',
                'corporate.process.step3.title': 'Logistics Planning',
                'corporate.process.step3.desc': 'We coordinate dates, times, materials, and space requirements with your team.',
                'corporate.process.step4.title': 'Ceremony Execution',
                'corporate.process.step4.desc': 'Our experienced priests conduct the ceremonies with minimal disruption to work.',
                'corporate.process.step5.title': 'Follow-up & Feedback',
                'corporate.process.step5.desc': 'We gather feedback and plan ongoing programs for continuous benefit.',
                
                'corporate.testimonial.content': '"After implementing regular monthly havans at our corporate office, we\'ve noticed a significant improvement in team collaboration and a 30% reduction in employee attrition. The positive energy is palpable, and our clients often comment on the unique, peaceful atmosphere of our workspace."',
                'corporate.testimonial.author': 'Mr. Rajesh Kumar',
                'corporate.testimonial.authorDesc': 'HR Director, TechSolutions Inc.',
                
                'corporate.cta.title': 'Transform Your Workplace with Vedic Wisdom',
                'corporate.cta.desc': 'Enhance productivity, harmony, and success in your organization with our specialized corporate Vedic services. Suitable for offices, schools, hospitals, and all types of institutions.',
                'corporate.cta.button': 'Book Corporate Service',
                
                'corporate.footer.title': 'Corporate Services Inquiry',
                'corporate.footer.desc': 'Contact us for a customized proposal tailored to your organization\'s specific needs.',
                'corporate.footer.phone': 'Corporate Desk: +91-XXXXXX-XXXX',
                'corporate.footer.email': 'corporate@vedicservices.com',
                'corporate.footer.hours': 'Mon-Fri: 9 AM - 6 PM',
                'corporate.footer.copyright': '© 2023 Vedic Services. Corporate Division. All Rights Reserved.',
                
                // ===== DONATION PAGE =====
                'donation.title': 'Donation & Seva',
                'donation.subtitle': 'Support our spiritual mission, temple maintenance, free services for the needy, and community welfare programs.',
                'donation.nav.importance': 'Importance',
                'donation.nav.types': 'Donation Types',
                'donation.nav.usage': 'Fund Usage',
                'donation.nav.process': 'Process',
                
                'donation.intro.title': 'The Power of Generous Giving',
                'donation.intro.desc1': 'In the Vedic tradition, giving (Dāna) is considered one of the most important virtues and spiritual practices. Your donations support the preservation of ancient traditions, provide free services to those in need, and help maintain sacred spaces for spiritual growth.',
                'donation.intro.desc2': 'Every contribution, big or small, makes a difference in sustaining our mission to make Vedic wisdom and rituals accessible to all, regardless of financial capacity.',
                
                'donation.impact.title': 'Your Impact So Far',
                'donation.impact.freePujas': 'Free Pujas Conducted',
                'donation.impact.students': 'Students Supported',
                'donation.impact.templeDays': 'Temple Maintenance Days',
                'donation.impact.mealsServed': 'Meals Served to Needy',
                
                'donation.importance.title': 'Why Your Donation Matters',
                'donation.importance.temple.title': 'Temple Maintenance',
                'donation.importance.temple.desc': 'Support the upkeep, renovation, and daily operations of sacred spaces where thousands find spiritual solace and community.',
                'donation.importance.freeServices.title': 'Free Services for Needy',
                'donation.importance.freeServices.desc': 'Provide free pujas, rituals, and spiritual guidance to elderly, low-income families, and those facing financial hardships.',
                'donation.importance.education.title': 'Education & Scholarships',
                'donation.importance.education.desc': 'Fund Vedic education programs, scripture classes, and scholarships for deserving students of priestly and spiritual studies.',
                
                'donation.types.title': 'Ways to Support',
                'donation.types.general.badge': 'Most Needed',
                'donation.types.general.title': 'General Donation',
                'donation.types.general.desc': 'Support our overall mission and allow us to allocate funds where they\'re needed most.',
                'donation.types.general.features': [
                    'Supports all areas of our work',
                    'Maximum flexibility for urgent needs',
                    'Helps maintain all services',
                    'Monthly recurring option available',
                    'Any amount makes a difference'
                ],
                'donation.types.general.amount': 'Any Amount',
                'donation.types.general.button': 'Donate',
                
                'donation.types.annadanam.title': 'Annadanam (Food Service)',
                'donation.types.annadanam.desc': 'Sponsor free meals for devotees, students, and the underprivileged at our temple kitchen.',
                'donation.types.annadanam.features': [
                    'Feed 50 people: ₹2,500',
                    'Feed 100 people: ₹5,000',
                    'Weekly sponsorship available',
                    'Special festival meals',
                    'Receive blessings from recipients'
                ],
                'donation.types.annadanam.amount': '₹2,500+',
                'donation.types.annadanam.button': 'Sponsor Food',
                
                'donation.types.books.title': 'Scripture & Book Fund',
                'donation.types.books.desc': 'Help publish and distribute sacred texts, spiritual literature, and educational materials.',
                'donation.types.books.features': [
                    'Print scriptures for free distribution',
                    'Support translation projects',
                    'Create educational materials',
                    'Digital library development',
                    'Acknowledge in publications'
                ],
                'donation.types.books.amount': '₹1,000+',
                'donation.types.books.button': 'Support Books',
                
                'donation.types.deity.title': 'Deity Adornment',
                'donation.types.deity.desc': 'Contribute towards ornaments, clothing, and decorations for temple deities.',
                'donation.types.deity.features': [
                    'Silk clothing for deities',
                    'Gold/silver ornaments',
                    'Flower decoration funds',
                    'Festival special decorations',
                    'Your name recorded in temple register'
                ],
                'donation.types.deity.amount': '₹5,000+',
                'donation.types.deity.button': 'Adorn Deities',
                
                'donation.types.infrastructure.title': 'Infrastructure Development',
                'donation.types.infrastructure.desc': 'Support building projects, renovations, and facilities improvement.',
                'donation.types.infrastructure.features': [
                    'Temple expansion projects',
                    'Student hostel construction',
                    'Meditation hall development',
                    'Library building fund',
                    'Permanent recognition plaque'
                ],
                'donation.types.infrastructure.amount': '₹10,000+',
                'donation.types.infrastructure.button': 'Build with Us',
                
                'donation.types.monthly.badge': 'Legacy',
                'donation.types.monthly.title': 'Monthly Sustaining Partner',
                'donation.types.monthly.desc': 'Become a monthly donor for consistent, reliable support of all our spiritual activities.',
                'donation.types.monthly.features': [
                    'Automatic monthly contribution',
                    'Sustains ongoing programs',
                    'Special partner recognition',
                    'Annual impact report',
                    'Priority for special events'
                ],
                'donation.types.monthly.amount': '₹500+/month',
                'donation.types.monthly.button': 'Become Partner',
                
                'donation.usage.title': 'How Your Donation is Used',
                'donation.usage.tabs.temple': 'Temple Operations',
                'donation.usage.tabs.community': 'Community Service',
                'donation.usage.tabs.education': 'Education',
                'donation.usage.tabs.outreach': 'Outreach',
                
                'donation.tax.title': 'Tax Benefits',
                'donation.tax.desc': 'All donations to our organization are eligible for tax exemption under Section 80G of the Income Tax Act, 1961.',
                'donation.tax.items': [
                    '50% Tax Exemption on Donations',
                    'Receipts Issued Immediately',
                    'PAN & 80G Certificate Available'
                ],
                
                'donation.process.title': 'Simple Donation Process',
                'donation.process.step1.title': 'Choose Amount & Purpose',
                'donation.process.step1.desc': 'Select donation amount and specify how you\'d like your contribution to be used.',
                'donation.process.step2.title': 'Fill Donation Form',
                'donation.process.step2.desc': 'Complete our secure online donation form with your details and preferences.',
                'donation.process.step3.title': 'Make Payment',
                'donation.process.step3.desc': 'Use UPI, net banking, credit/debit card, or other available payment methods.',
                'donation.process.step4.title': 'Receive Confirmation',
                'donation.process.step4.desc': 'Get immediate donation receipt and 80G certificate via email for tax benefits.',
                'donation.process.step5.title': 'Track Impact',
                'donation.process.step5.desc': 'Receive updates on how your donation is making a difference in our community.',
                
                'donation.testimonial.content': '"I\'ve been a monthly donor for three years, and it\'s one of the most fulfilling decisions I\'ve made. Seeing the regular updates about free pujas conducted for elderly devotees and scholarships given to Vedic students gives me immense satisfaction. The transparency in how funds are used and the personal thank-you notes make me feel truly connected to the mission."',
                'donation.testimonial.author': 'Mrs. Sunita Reddy',
                'donation.testimonial.authorDesc': 'Monthly Sustaining Partner since 2020',
                
                'donation.cta.title': 'Your Generosity Fuels Our Spiritual Mission',
                'donation.cta.desc': 'Join hundreds of donors in supporting the preservation of Vedic traditions, helping those in need, and maintaining sacred spaces for spiritual growth.',
                'donation.cta.button': 'Make a Donation Now',
                
                'donation.footer.title': 'Donation & Seva Desk',
                'donation.footer.desc': 'Contact us for donation-related queries, corporate partnerships, or to discuss specific giving opportunities.',
                'donation.footer.phone': 'Donation Desk: +91-XXXXXX-XXXX',
                'donation.footer.email': 'donation@vedicservices.com',
                'donation.footer.hours': 'Available 9 AM - 6 PM',
                'donation.footer.copyright': '© 2023 Vedic Services. Registered Trust under Indian Trusts Act. All donations eligible for 80G tax exemption.',
                
                'donation.modal.title': 'Donate via eSewa',
                'donation.modal.subtitle': 'Please scan the QR code below and complete your donation',
                'donation.modal.esewaId': 'eSewa ID: 9841XXXXXX',
                'donation.modal.instructions.title': 'Instructions:',
                'donation.modal.instructions.steps': [
                    'Open eSewa app',
                    'Scan the QR code',
                    'Enter donation amount',
                    'Complete payment',
                    'Click \'Done\' once payment is confirmed'
                ],
                'donation.modal.buttons.done': 'Done',
                'donation.modal.buttons.cancel': 'Cancel',
                'donation.modal.buttons.close': 'Close',
                'donation.modal.thankYou.title': 'Thank You!',
                'donation.modal.thankYou.message': 'Thank you for your generous donation. Your contribution helps us advance our spiritual mission.',
                'donation.modal.thankYou.receipt': 'Your donation receipt and 80G certificate will be sent to your email.',
                
                // ===== KARMAKANDA CLASSES PAGE =====
                'karmakanda.title': 'Karmakanda Classes',
                'karmakanda.subtitle': 'Karmakanda–based consultation and classes for Vedic rituals, pujas, and samskaras.',
                'karmakanda.nav.courses': 'Courses',
                'karmakanda.nav.curriculum': 'Curriculum',
                'karmakanda.nav.instructors': 'Instructors',
                'karmakanda.nav.process': 'Process',
                
                'karmakanda.intro.title': 'Learn Authentic Vedic Rituals',
                'karmakanda.intro.desc1': 'Karmakanda refers to the section of the Vedas that deals with rituals, ceremonies, and rites of passage. Our Karmakanda classes teach the proper procedures, mantras, and significance of Vedic rituals so you can perform them correctly and meaningfully in your own life.',
                'karmakanda.intro.desc2': 'Whether you want to learn daily puja procedures, perform life-cycle samskaras for your family, or simply deepen your understanding of Vedic traditions, our structured courses provide both theoretical knowledge and practical training.',
                
                'karmakanda.specialOffer.title': 'Early Enrollment Discount',
                'karmakanda.specialOffer.desc': 'Enroll in any Karmakanda course before the next new moon and receive 20% discount plus a complimentary puja kit with essential ritual items.',
                
                'karmakanda.courses.title': 'Course Offerings',
                'karmakanda.courses.beginner': 'Beginner',
                'karmakanda.courses.popular': 'Most Popular',
                'karmakanda.courses.advanced': 'Advanced',
                'karmakanda.courses.specialized': 'Specialized',
                'karmakanda.courses.online': 'Online',
                'karmakanda.courses.comprehensive': 'Comprehensive',
                
                'karmakanda.courses.basic.title': 'Basic Home Puja Course',
                'karmakanda.courses.basic.desc': 'Learn essential daily and weekly worship procedures for home practice. Perfect for beginners and householders.',
                'karmakanda.courses.basic.features': [
                    'Daily Sandhya Vandana procedures',
                    'Basic mantras for family deities',
                    'Preparation of puja samagri',
                    'Simple havan techniques',
                    'Aarti and prayer methods',
                    'Creating home altar/shrine'
                ],
                'karmakanda.courses.basic.duration': '4 Weeks',
                
                'karmakanda.courses.samskaras.title': 'Samskaras & Life Rituals',
                'karmakanda.courses.samskaras.desc': 'Comprehensive training in 16 traditional Hindu samskaras (rites of passage) from birth to death.',
                'karmakanda.courses.samskaras.features': [
                    'Namkaran (naming ceremony)',
                    'Annaprashan (first feeding)',
                    'Upanayan (sacred thread)',
                    'Vivaha (marriage ceremonies)',
                    'Antyeshti (last rites)',
                    'Monthly/annual shraddha'
                ],
                'karmakanda.courses.samskaras.duration': '8 Weeks',
                
                'karmakanda.courses.havan.title': 'Havan & Yajna Mastery',
                'karmakanda.courses.havan.desc': 'Advanced training in performing various types of fire ceremonies with proper Vedic procedures.',
                'karmakanda.courses.havan.features': [
                    'Selection of samagri for different havans',
                    'Mantra chanting with correct pronunciation',
                    'Building and consecrating fire altars',
                    'Specialized yajnas: Ganapati, Navagraha',
                    'Rudrabhishek procedures',
                    'Community yajna organization'
                ],
                'karmakanda.courses.havan.duration': '10 Weeks',
                
                'karmakanda.courses.temple.title': 'Temple Puja Procedures',
                'karmakanda.courses.temple.desc': 'Learn proper temple worship protocols, deity consecration, and temple management principles.',
                'karmakanda.courses.temple.features': [
                    'Abhishekam procedures for deities',
                    'Alankaram (decorating deities)',
                    'Temple timing and ritual schedules',
                    'Festival celebration procedures',
                    'Priestly duties and responsibilities',
                    'Temple administration basics'
                ],
                'karmakanda.courses.temple.duration': '6 Weeks',
                
                'karmakanda.courses.mantra.title': 'Mantra & Stotra Chanting',
                'karmakanda.courses.mantra.desc': 'Master correct pronunciation and chanting of essential Vedic mantras, stotras, and prayers.',
                'karmakanda.courses.mantra.features': [
                    'Sanskrit pronunciation basics',
                    'Gayatri Mantra and its variations',
                    'Vishnu Sahasranama chanting',
                    'Lalita Sahasranama',
                    'Shiva Panchakshara Stotra',
                    'Daily prayer routines'
                ],
                'karmakanda.courses.mantra.duration': '5 Weeks',
                
                'karmakanda.courses.certification.title': 'Karmakanda Certification',
                'karmakanda.courses.certification.desc': 'One-year comprehensive certification program covering all aspects of Vedic rituals and ceremonies.',
                'karmakanda.courses.certification.features': [
                    'All beginner to advanced topics',
                    'Practical training with supervision',
                    'Scriptural study of relevant texts',
                    'Apprenticeship with senior priests',
                    'Final examination and certification',
                    'Placement assistance'
                ],
                'karmakanda.courses.certification.duration': '1 Year',
                
                'karmakanda.curriculum.title': 'Detailed Curriculum',
                'karmakanda.curriculum.tabs.theory': 'Theoretical Foundation',
                'karmakanda.curriculum.tabs.practical': 'Practical Training',
                'karmakanda.curriculum.tabs.scripture': 'Scriptural Study',
                'karmakanda.curriculum.tabs.application': 'Application',
                
                'karmakanda.methods.title': 'Our Teaching Methodology',
                'karmakanda.instructors.title': 'Meet Your Instructors',
                'karmakanda.audience.title': 'Who Should Join These Classes?',
                
                'karmakanda.process.title': 'Learning Process',
                'karmakanda.process.step1.title': 'Assessment',
                'karmakanda.process.step1.desc': 'We evaluate your current knowledge and goals to recommend the right course.',
                'karmakanda.process.step2.title': 'Enrollment',
                'karmakanda.process.step2.desc': 'You enroll in the appropriate course and receive study materials.',
                'karmakanda.process.step3.title': 'Theoretical Learning',
                'karmakanda.process.step3.desc': 'Live and recorded sessions on the philosophy and procedures.',
                'karmakanda.process.step4.title': 'Practical Training',
                'karmakanda.process.step4.desc': 'Hands-on practice with instructor guidance and feedback.',
                'karmakanda.process.step5.title': 'Assessment & Certification',
                'karmakanda.process.step5.desc': 'Evaluation of learning and certification upon successful completion.',
                
                'karmakanda.testimonial.content': '"As an NRI living in the US for 20 years, I had forgotten many rituals. The Basic Home Puja course not only taught me the correct procedures but also explained the meaning behind each step. Acharya Vijay\'s patience and clarity made complex rituals accessible. I can now confidently perform daily puja and recently conducted my daughter\'s Namkaran ceremony myself. This has deeply enriched our family\'s spiritual life."',
                'karmakanda.testimonial.author': 'Rajesh Mehta',
                'karmakanda.testimonial.authorDesc': 'Completed Basic Home Puja Course, Now enrolled in Samskaras course',
                
                'karmakanda.cta.title': 'Master Vedic Rituals with Authentic Training',
                'karmakanda.cta.desc': 'Join our Karmakanda classes to learn proper ritual procedures, understand their spiritual significance, and gain confidence in performing Vedic ceremonies for yourself and your family.',
                'karmakanda.cta.button': 'Enroll in Karmakanda Classes',
                
                'karmakanda.footer.title': 'Karmakanda Classes Desk',
                'karmakanda.footer.desc': 'Contact us for course details, schedule, fees, and any other inquiries about our ritual training programs.',
                'karmakanda.footer.phone': 'Classes Desk: +91-XXXXXX-XXXX',
                'karmakanda.footer.email': 'karmakanda@vedicservices.com',
                'karmakanda.footer.hours': 'Available 9 AM - 7 PM',
                'karmakanda.footer.copyright': '© 2023 Vedic Services. Karmakanda Training Division. All Rights Reserved.',
                
                // ===== KRIYA PUTRI BHAWAN PAGE =====
                'kriyaPutri.logo': '🕉️ Temple Services',
                'kriyaPutri.about': 'About',
                'kriyaPutri.contact': 'Contact',
                'kriyaPutri.subtitle': 'Sacred Space for Traditional Vedic Ceremonies and Rituals',
                
                'kriyaPutri.about.title': 'About Kriya Putri Bhawan',
                'kriyaPutri.about.desc1': 'Kriya Putri Bhawan is a sacred and specially designed space dedicated to performing traditional Vedic ceremonies, pujas, havan, and various samskaras. Our bhawan provides a serene, purified environment that enhances the spiritual efficacy of all rituals performed within its walls.',
                'kriyaPutri.about.desc2': 'Built according to Vastu Shastra principles and consecrated with proper Vedic rituals, Kriya Putri Bhawan offers devotees an authentic setting for conducting important life ceremonies, religious observances, and spiritual practices. The space is maintained with utmost sanctity and is available for booking by families and communities for their auspicious occasions.',
                
                'kriyaPutri.features.title': 'Features & Amenities',
                'kriyaPutri.features.architecture.title': '🏛️ Sacred Architecture',
                'kriyaPutri.features.architecture.desc': 'Built as per Vastu Shastra principles with proper directional alignment for maximum spiritual benefit',
                'kriyaPutri.features.havan.title': '🔥 Havan Kund',
                'kriyaPutri.features.havan.desc': 'Traditional fire altar with proper ventilation system for conducting havan ceremonies',
                'kriyaPutri.features.essentials.title': '🪔 Puja Essentials',
                'kriyaPutri.features.essentials.desc': 'Equipped with all necessary ritual items, deity idols, and ceremonial equipment',
                'kriyaPutri.features.seating.title': '👨‍👩‍👧‍👦 Seating Capacity',
                'kriyaPutri.features.seating.desc': 'Comfortable seating for up to 50-100 guests depending on the ceremony',
                'kriyaPutri.features.audio.title': '🔊 Audio System',
                'kriyaPutri.features.audio.desc': 'Quality sound system for bhajans, mantras, and ceremonial announcements',
                'kriyaPutri.features.facilities.title': '🚿 Facilities',
                'kriyaPutri.features.facilities.desc': 'Clean washrooms, preparation area, and waiting space for devotees',
                
                'kriyaPutri.included.title': 'What\'s Included in the Booking',
                'kriyaPutri.included.items': [
                    'Full access to Kriya Putri Bhawan for the booked time duration',
                    'Basic puja items and materials including incense, flowers, and lamps',
                    'Havan kund and fire altar prepared and ready for ceremonies',
                    'Clean and purified space maintained according to traditional standards',
                    'Seating arrangements for guests and participants',
                    'Audio system for chanting and devotional music',
                    'Support staff to assist with setup and basic arrangements',
                    'Parking facility for vehicles (subject to availability)'
                ],
                
                'kriyaPutri.ceremonies.title': 'Ceremonies Suitable for Kriya Putri Bhawan',
                'kriyaPutri.ceremonies.items': [
                    'Samskaras: Thread ceremony (Upanayana), Naming ceremony, First feeding, etc.',
                    'Puja & Havan: Satyanarayan Puja, Navgraha Shanti, Rudrabhishek, etc.',
                    'Special Occasions: Birthday celebrations, Anniversary pujas, House warming',
                    'Shraadh Karma: Ancestral rites and remembrance ceremonies',
                    'Vratam: Observance of religious vows and fasting rituals',
                    'Community Events: Bhajan sessions, Satsang, Katha recitation',
                    'Seasonal Festivals: Durga Puja, Lakshmi Puja, Saraswati Puja, etc.'
                ],
                
                'kriyaPutri.howToBook.title': 'How to Book Kriya Putri Bhawan',
                'kriyaPutri.howToBook.steps': [
                    'Check Availability: Click the booking button and fill out the form with your preferred date and time',
                    'Provide Details: Specify the type of ceremony, number of expected guests, and any special requirements',
                    'Confirmation: Our team will verify availability and send you a confirmation within 24 hours',
                    'Advance Payment: A booking deposit is required to secure your reservation',
                    'Preparation: Discuss your specific needs with our coordinator before the event',
                    'Day of Event: Arrive 30 minutes early for final setup and preparation'
                ],
                
                'kriyaPutri.priestServices.title': '💡 Priest Services Available',
                'kriyaPutri.priestServices.desc': 'Need an experienced priest for your ceremony? We can arrange qualified Vedic priests well-versed in all traditional rituals. Priest services can be booked separately or as part of a package with the bhawan booking.',
                
                'kriyaPutri.guidelines.title': '⚠️ Booking Guidelines',
                'kriyaPutri.guidelines.advance': 'Advance Notice: Please book at least 7-10 days in advance for regular ceremonies, and 15-20 days for major events.',
                'kriyaPutri.guidelines.cancellation': 'Cancellation Policy: Cancellations made 48 hours before the booking are eligible for refund (minus processing fee).',
                'kriyaPutri.guidelines.slots': 'Time Slots: Standard slots are 3-4 hours. Extended bookings available on request.',
                
                'kriyaPutri.whyChoose.title': 'Why Choose Our Kriya Putri Bhawan?',
                'kriyaPutri.whyChoose.items': [
                    'Authentic Vedic Environment: Space designed and consecrated specifically for religious ceremonies',
                    'Complete Privacy: Exclusive use of the bhawan during your booked time',
                    'Central Location: Easy to access with ample parking facilities',
                    'Maintained Sanctity: Regular purification rituals ensure the space remains spiritually charged',
                    'Affordable Rates: Reasonable pricing with transparent costs and no hidden charges',
                    'Experienced Support: Our team has decades of experience in facilitating religious ceremonies',
                    'Flexible Timing: Morning and evening slots available to suit your requirements',
                    'All-Inclusive Options: Package deals available with priest services and puja materials'
                ],
                
                'kriyaPutri.testimonials.title': 'Testimonials',
                'kriyaPutri.testimonials.first.content': '"We booked Kriya Putri Bhawan for our son\'s thread ceremony. The space was perfect - clean, well-maintained, and truly spiritual. The arrangements were excellent and our guests were very impressed."',
                'kriyaPutri.testimonials.first.author': '- Ramesh & Sita Sharma',
                'kriyaPutri.testimonials.second.content': '"Conducting our family\'s annual puja at this bhawan has been a blessing. The peaceful atmosphere and proper facilities make it ideal for any religious ceremony. Highly recommended!"',
                'kriyaPutri.testimonials.second.author': '- Pradeep Kumar',
                
                'kriyaPutri.cta.title': 'Ready to Book Kriya Putri Bhawan?',
                'kriyaPutri.cta.subtitle': 'Reserve your preferred date and time for your sacred ceremony',
                
                'kriyaPutri.footer.copyright': '© 2024 Temple Services. All Rights Reserved.',
                'kriyaPutri.footer.contact': 'Contact us: info@templeservices.com | Phone: +977-XXX-XXXX',
                
                // ===== ONLINE PUJA PAGE =====
                'onlinePuja.about.title': 'About This Service',
                'onlinePuja.about.desc': 'Our Online Puja Booking service allows you to perform sacred Vedic rituals from the comfort of your home, no matter where you are in the world. Our experienced and qualified priests conduct authentic ceremonies with proper Vedic mantras and rituals.',
                'onlinePuja.included.title': 'What\'s Included',
                'onlinePuja.included.items': [
                    'Personalized puja conducted by experienced Vedic priests',
                    'Live streaming of the entire ceremony',
                    'Prasad delivered to your doorstep',
                    'Digital certificate of puja completion',
                    'Recording of the ceremony for your records'
                ],
                'onlinePuja.popular.title': 'Popular Pujas Available',
                'onlinePuja.popular.items': [
                    'Satyanarayan Puja',
                    'Lakshmi Puja',
                    'Ganesh Puja',
                    'Navgraha Shanti Puja',
                    'Special occasion pujas'
                ],
                'onlinePuja.howItWorks.title': 'How It Works',
                'onlinePuja.howItWorks.steps': [
                    'Fill out the booking form with your details and puja requirements',
                    'Choose your preferred date and time',
                    'Receive confirmation and priest assignment',
                    'Join the live ceremony via video link',
                    'Receive prasad and blessings'
                ],
                'onlinePuja.whyChoose.title': 'Why Choose Our Online Puja Service?',
                'onlinePuja.whyChoose.items': [
                    'Authentic Vedic rituals performed by qualified priests',
                    'Convenient and accessible from anywhere',
                    'Traditional ceremonies with modern technology',
                    'Affordable pricing with transparent costs',
                    'Personal attention and customization'
                ],
                
                // ===== PILGRIMAGE SERVICES PAGE =====
                'pilgrimage.subtitle': 'Embark on sacred journeys to holy sites with expert guidance, complete arrangements, and spiritual fulfillment.',
                'pilgrimage.nav.destinations': 'Destinations',
                'pilgrimage.nav.services': 'Services',
                'pilgrimage.nav.routes': 'Popular Routes',
                'pilgrimage.nav.process': 'Process',
                
                'pilgrimage.intro.title': 'Sacred Journeys to Holy Destinations',
                'pilgrimage.intro.desc1': 'A pilgrimage (Tirtha Yatra) is not just a journey to a holy place, but a transformative spiritual experience that purifies the soul, fulfills desires, and brings one closer to the divine. Our pilgrimage services ensure your sacred journey is comfortable, meaningful, and spiritually enriching.',
                'pilgrimage.intro.desc2': 'We handle all arrangements - travel, accommodation, rituals, priest services, and guidance - so you can focus entirely on your spiritual experience.',
                
                'pilgrimage.specialOffer.title': 'Special Pilgrimage Package',
                'pilgrimage.specialOffer.desc': 'Book any pilgrimage package before the next full moon and receive complimentary Rudrabhishek puja at your home before departure for safe travels and spiritual preparation.',
                
                'pilgrimage.destinations.title': 'Sacred Destination Packages',
                
                'pilgrimage.destinations.charDham.badge': 'Most Popular',
                'pilgrimage.destinations.charDham.title': 'Char Dham Yatra',
                'pilgrimage.destinations.charDham.desc': 'The ultimate Hindu pilgrimage to four sacred abodes in the Himalayas: Yamunotri, Gangotri, Kedarnath, and Badrinath.',
                'pilgrimage.destinations.charDham.features': [
                    'Complete travel arrangements',
                    'Accommodation near temples',
                    'Priest services at all sites',
                    'Medical support & insurance',
                    'Spiritual guide throughout'
                ],
                'pilgrimage.destinations.charDham.duration': '12-15 Days Package',
                
                'pilgrimage.destinations.jyotirlinga.badge': 'New',
                'pilgrimage.destinations.jyotirlinga.title': '12 Jyotirlinga Darshan',
                'pilgrimage.destinations.jyotirlinga.desc': 'Complete pilgrimage to all 12 sacred Jyotirlingas of Lord Shiva spread across India for ultimate blessings.',
                'pilgrimage.destinations.jyotirlinga.features': [
                    'Customizable itinerary',
                    'All entrance arrangements',
                    'Special puja at each lingam',
                    'Comfortable transportation',
                    'Photography services'
                ],
                'pilgrimage.destinations.jyotirlinga.duration': '20-25 Days Package',
                
                'pilgrimage.destinations.southIndia.title': 'South Indian Temples Tour',
                'pilgrimage.destinations.southIndia.desc': 'Journey through magnificent Dravidian temples including Rameswaram, Madurai, Tirupati, and more.',
                'pilgrimage.destinations.southIndia.features': [
                    'Focus on architectural marvels',
                    'Local cultural experiences',
                    'Traditional South Indian meals',
                    'Tamil/Malayalam speaking guide',
                    'Special darshan arrangements'
                ],
                'pilgrimage.destinations.southIndia.duration': '10-14 Days Package',
                
                'pilgrimage.destinations.vaishnoDevi.title': 'Mata Vaishno Devi & North',
                'pilgrimage.destinations.vaishnoDevi.desc': 'Special pilgrimage to Vaishno Devi with extensions to other North Indian shrines like Haridwar, Rishikesh, Mathura.',
                'pilgrimage.destinations.vaishnoDevi.features': [
                    'Helicopter booking for Vaishno Devi',
                    'Ganga aarti in Haridwar',
                    'Yoga sessions in Rishikesh',
                    'Senior citizen friendly',
                    'Medical assistance on trek'
                ],
                'pilgrimage.destinations.vaishnoDevi.duration': '7-10 Days Package',
                
                'pilgrimage.destinations.buddhist.badge': 'Spiritual',
                'pilgrimage.destinations.buddhist.title': 'Buddhist Circuit Pilgrimage',
                'pilgrimage.destinations.buddhist.desc': 'Follow in the footsteps of Buddha to Lumbini, Bodhgaya, Sarnath, Kushinagar and other sacred Buddhist sites.',
                'pilgrimage.destinations.buddhist.features': [
                    'Meditation sessions',
                    'Buddhist monk interactions',
                    'International travel assistance',
                    'Vegetarian meals included',
                    'Scripture reading sessions'
                ],
                'pilgrimage.destinations.buddhist.duration': '8-12 Days Package',
                
                'pilgrimage.destinations.custom.title': 'Custom Pilgrimage Planning',
                'pilgrimage.destinations.custom.desc': 'Design your own spiritual journey to any combination of holy sites across India and neighboring countries.',
                'pilgrimage.destinations.custom.features': [
                    'Completely personalized itinerary',
                    'Family/group discounts',
                    'Ritual planning as per needs',
                    'Flexible duration & budget',
                    '24/7 support during travel'
                ],
                'pilgrimage.destinations.custom.duration': 'Custom Duration',
                
                'pilgrimage.services.title': 'Services Included in All Packages',
                'pilgrimage.services.accommodation.title': 'Accommodation',
                'pilgrimage.services.accommodation.desc': 'Clean, comfortable stays near pilgrimage sites, with options from budget to premium.',
                'pilgrimage.services.transportation.title': 'Transportation',
                'pilgrimage.services.transportation.desc': 'Air, train, and road travel with reliable vehicles and experienced drivers.',
                'pilgrimage.services.guide.title': 'Spiritual Guide',
                'pilgrimage.services.guide.desc': 'Knowledgeable guide well-versed in rituals, history, and traditions of each site.',
                'pilgrimage.services.meals.title': 'Satvik Meals',
                'pilgrimage.services.meals.desc': 'Fresh, hygienic, satvik vegetarian meals as per pilgrimage requirements.',
                'pilgrimage.services.rituals.title': 'Ritual Arrangements',
                'pilgrimage.services.rituals.desc': 'All puja materials, priest services, and ritual arrangements pre-organized.',
                'pilgrimage.services.insurance.title': 'Travel Insurance',
                'pilgrimage.services.insurance.desc': 'Comprehensive travel insurance covering medical emergencies and trip cancellations.',
                'pilgrimage.services.medical.title': 'Medical Support',
                'pilgrimage.services.medical.desc': 'First-aid kits, oxygen cylinders for high-altitude trips, and doctor-on-call service.',
                'pilgrimage.services.support.title': '24/7 Support',
                'pilgrimage.services.support.desc': 'Round-the-clock customer support during your entire pilgrimage journey.',
                
                'pilgrimage.routes.title': 'Popular Pilgrimage Routes',
                'pilgrimage.routes.tabs.north': 'North India',
                'pilgrimage.routes.tabs.south': 'South India',
                'pilgrimage.routes.tabs.east': 'East India',
                'pilgrimage.routes.tabs.west': 'West India',
                'pilgrimage.routes.tabs.special': 'Special Yatras',
                
                'pilgrimage.process.title': 'Our Pilgrimage Planning Process',
                'pilgrimage.process.step1.title': 'Consultation',
                'pilgrimage.process.step1.desc': 'We understand your spiritual goals, physical capabilities, budget, and time constraints.',
                'pilgrimage.process.step2.title': 'Custom Itinerary',
                'pilgrimage.process.step2.desc': 'We design a detailed day-by-day plan including travel, rituals, and accommodations.',
                'pilgrimage.process.step3.title': 'Pre-Pilgrimage Preparation',
                'pilgrimage.process.step3.desc': 'Guidance on physical preparation, necessary documents, and spiritual practices before travel.',
                'pilgrimage.process.step4.title': 'Journey Execution',
                'pilgrimage.process.step4.desc': 'Our team handles all logistics while you focus on the spiritual experience.',
                'pilgrimage.process.step5.title': 'Post-Pilgrimage Support',
                'pilgrimage.process.step5.desc': 'Guidance on maintaining spiritual benefits and integrating experiences into daily life.',
                
                'pilgrimage.testimonial.content': '"Our Char Dham yatra with Vedic Services was truly life-changing. Every detail was taken care of - from comfortable accommodations to meaningful rituals at each site. Our spiritual guide made each temple visit deeply meaningful with his explanations of history and significance. The medical support during the high-altitude segments gave us peace of mind. We returned not just with blessings but with unforgettable memories."',
                'pilgrimage.testimonial.author': 'Mr. & Mrs. Sharma',
                'pilgrimage.testimonial.authorDesc': 'Completed Char Dham Yatra, October 2023',
                
                'pilgrimage.cta.title': 'Begin Your Sacred Journey Today',
                'pilgrimage.cta.desc': 'Experience the transformative power of pilgrimage with expert guidance, complete arrangements, and spiritual fulfillment. Let us handle the logistics while you focus on your spiritual journey.',
                'pilgrimage.cta.button': 'Plan Your Pilgrimage',
                
                'pilgrimage.footer.title': 'Pilgrimage Services Desk',
                'pilgrimage.footer.desc': 'Contact us for customized pilgrimage planning, group discounts, and special requirements.',
                'pilgrimage.footer.phone': 'Pilgrimage Desk: +91-XXXXXX-XXXX',
                'pilgrimage.footer.email': 'pilgrimage@vedicservices.com',
                'pilgrimage.footer.hours': 'Available 7 AM - 9 PM',
                'pilgrimage.footer.copyright': '© 2023 Vedic Services. Pilgrimage Division. All Rights Reserved.',
                
                // ===== PRIEST SERVICES PAGE =====
                'priestServices.subtitle': 'Hire experienced Vedic priests for personalized rituals, ceremonies, and spiritual guidance at your convenience.',
                'priestServices.nav.features': 'Features',
                'priestServices.nav.priests': 'Our Priests',
                'priestServices.nav.process': 'Process',
                'priestServices.nav.contact': 'Contact',
                
                'priestServices.intro.title': 'Traditional Vedic Priest Services',
                'priestServices.intro.desc1': 'Our priest services connect you with knowledgeable, experienced Vedic priests who can perform a wide range of rituals and ceremonies according to ancient scriptures and traditions. Whether you need a priest for daily worship, special occasions, or specific samskaras (sacraments), we provide authentic, personalized services.',
                'priestServices.intro.desc2': 'All our priests are well-versed in Vedic mantras, rituals, and procedures. They guide you through each step, ensuring the ceremony is performed correctly and with full spiritual significance.',
                
                'priestServices.features.home.title': 'Home Ceremonies',
                'priestServices.features.home.items': [
                    'Griha Pravesh (House Warming)',
                    'Daily/Weekly Puja',
                    'Satyanarayan Katha',
                    'Navagraha Shanti',
                    'Vastu Puja',
                    'Vehicle Puja'
                ],
                
                'priestServices.features.lifecycle.title': 'Lifecycle Rituals',
                'priestServices.features.lifecycle.items': [
                    'Namkaran (Naming Ceremony)',
                    'Mundan (First Hair Cutting)',
                    'Upanayan (Sacred Thread)',
                    'Vivah (Wedding Ceremonies)',
                    'Shraddha (Ancestral rites)',
                    'Last Rites Guidance'
                ],
                
                'priestServices.features.festival.title': 'Festival & Special Pujas',
                'priestServices.features.festival.items': [
                    'Diwali Lakshmi Puja',
                    'Durga Puja/Navratri',
                    'Ganesh Chaturthi',
                    'Maha Shivratri',
                    'Janmashtami',
                    'Rama Navami'
                ],
                
                'priestServices.priests.title': 'Types of Priests Available',
                'priestServices.priests.senior.title': 'Senior Vedic Priests',
                'priestServices.priests.senior.desc': 'Highly experienced priests with 20+ years of practice, specializing in complex rituals and samskaras.',
                'priestServices.priests.ritual.title': 'Ritual Specialists',
                'priestServices.priests.ritual.desc': 'Priests specialized in specific ceremonies like weddings, havans, or griha pravesh with complete setup.',
                'priestServices.priests.daily.title': 'Pandits for Daily Puja',
                'priestServices.priests.daily.desc': 'Available for regular daily or weekly worship at home or office, including mantra chanting and aarti.',
                'priestServices.priests.online.title': 'Online Consultation Priests',
                'priestServices.priests.online.desc': 'Available for virtual guidance, mantra teaching, and remote ritual supervision when physical presence isn\'t possible.',
                
                'priestServices.process.title': 'How It Works',
                'priestServices.process.step1.title': 'Book Your Service',
                'priestServices.process.step1.desc': 'Fill out our booking form with details about the ceremony, date, and requirements.',
                'priestServices.process.step2.title': 'Priest Assignment',
                'priestServices.process.step2.desc': 'We match you with the most suitable priest based on your specific needs and ceremony type.',
                'priestServices.process.step3.title': 'Pre-Ceremony Consultation',
                'priestServices.process.step3.desc': 'The priest contacts you to discuss rituals, timing, materials needed, and any specific instructions.',
                'priestServices.process.step4.title': 'Ceremony Performance',
                'priestServices.process.step4.desc': 'The priest arrives with necessary items and performs the ceremony with full Vedic procedures.',
                
                'priestServices.cta.title': 'Book an Experienced Priest Today',
                'priestServices.cta.desc': 'Connect with authentic Vedic priests for your spiritual needs. Whether it\'s a simple daily puja or an elaborate ceremony, we ensure traditional accuracy and heartfelt devotion.',
                'priestServices.cta.button': 'Book a Priest Now',
                
                'priestServices.footer.title': 'Need Help Choosing the Right Priest?',
                'priestServices.footer.desc': 'Contact us for personalized assistance in selecting the perfect priest for your specific ceremony.',
                'priestServices.footer.phone': '+91-XXXXXX-XXXX',
                'priestServices.footer.email': 'priest@vedicservices.com',
                'priestServices.footer.hours': 'Available 8 AM - 8 PM',
                'priestServices.footer.copyright': '© 2023 Vedic Services. All Rights Reserved.',
                
                // ===== PRODUCTS PAGE =====
                'products.title': 'Our Products',
                'products.subtitle': 'Authentic puja samagri, spiritual items, and ritual essentials prepared with purity and care.',
                'products.nav.products': 'Products',
                'products.nav.categories': 'Categories',
                'products.nav.order': 'Order',
                
                'products.intro.title': 'Pure & Traditional Products',
                'products.intro.desc1': 'Our products are selected and prepared according to traditional standards, ensuring purity, authenticity, and spiritual significance.',
                'products.intro.desc2': 'Ideal for daily puja, special rituals, temples, and festivals.',
                
                'products.featured.title': 'Featured Products',
                'products.button.order': 'Order',
                
                'products.items.havan.title': 'Havan Samagri',
                'products.items.havan.desc': 'Herbal mixture prepared as per shastra for havan & hom.',
                'products.items.havan.price': 'Rs. 499',
                
                'products.items.ghee.title': 'Pure Cow Ghee',
                'products.items.ghee.desc': 'Shuddha gau ghee suitable for diya, havan, and abhishek.',
                'products.items.ghee.price': 'Rs. 899',
                
                'products.items.flowers.title': 'Puja Flowers',
                'products.items.flowers.desc': 'Fresh and sacred flowers for all kinds of worship.',
                'products.items.flowers.price': 'Rs. 299',
                
                'products.items.agarbatti.title': 'Agarbatti & Dhoop',
                'products.items.agarbatti.desc': 'Natural fragrance incense sticks and dhoop.',
                'products.items.agarbatti.price': 'Rs. 199',
                
                'products.items.rudraksha.title': 'Rudraksha Mala',
                'products.items.rudraksha.desc': 'Authentic rudraksha mala for japa and meditation.',
                'products.items.rudraksha.price': 'Rs. 1,499',
                
                'products.items.combo.title': 'Puja Samagri Combo',
                'products.items.combo.desc': 'All essential puja items in one convenient package.',
                'products.items.combo.price': 'Rs. 2,999',
                
                'products.cta.title': 'Order Authentic Puja Products',
                'products.cta.desc': 'Get genuine spiritual items delivered with care and devotion.',
                'products.cta.button': 'Order via WhatsApp',
                
                'products.footer.copyright': '© 2023 Vedic Services | Products & Samagri',
                'products.footer.contact': 'Contact: +977-9860336777',
                
                // ===== PUJA ITEMS PACKAGE PAGE =====
                'pujaItems.subtitle': 'Complete puja samagri packages prepared according to shastra for all rituals and ceremonies.',
                'pujaItems.nav.packages': 'Packages',
                'pujaItems.nav.includes': 'Includes',
                'pujaItems.nav.booking': 'Booking',
                
                'pujaItems.intro.title': 'One Package, No Tension',
                'pujaItems.intro.desc1': 'We provide complete puja items packages so you don\'t have to worry about collecting samagri from multiple places.',
                'pujaItems.intro.desc2': 'All items are arranged according to the type of puja, guided by experienced Brahmins and traditional texts.',
                
                'pujaItems.packages.title': 'Our Puja Items Packages',
                'pujaItems.button.enquire': 'Enquire Now',
                
                'pujaItems.packages.laghu.title': 'Laghu Puja Package',
                'pujaItems.packages.laghu.features': [
                    'Daily & small household pujas',
                    'Basic samagri included',
                    'Ideal for griha puja'
                ],
                
                'pujaItems.packages.havan.title': 'Havan / Hom Package',
                'pujaItems.packages.havan.features': [
                    'Havan samagri & ghee',
                    'Wood, samidha, herbs',
                    'Proper quantity ensured'
                ],
                
                'pujaItems.packages.special.title': 'Special Puja Package',
                'pujaItems.packages.special.features': [
                    'Rudri, Satyanarayan, Graha Shanti',
                    'All puja samagri & prasad items',
                    'As per shastra vidhi'
                ],
                
                'pujaItems.packages.festival.title': 'Festival Puja Package',
                'pujaItems.packages.festival.features': [
                    'Tihar, Teej, Chhath, Navratri',
                    'Customized festival items',
                    'Fresh & pure materials'
                ],
                
                'pujaItems.cta.title': 'Book Your Puja Items Package Today',
                'pujaItems.cta.desc': 'Save time and perform your puja with full devotion and peace of mind.',
                'pujaItems.cta.button': 'Contact for Booking',
                
                'pujaItems.footer.copyright': '© 2023 Vedic Services | Puja Items & Samagri',
                'pujaItems.footer.contact': 'Contact: +91-XXXXXX-XXXX | puja@vedicservices.com'
            },
            
            // ===== NEPALI TRANSLATIONS =====
            ne: {
                // ===== NAVIGATION =====
                'nav.home': 'गृहपृष्ठ',
                'nav.team': 'टोली',
                'nav.services': 'सेवाहरू',
                'nav.backToServices': 'सबै सेवाहरूमा फर्कनुहोस्',
                
                // ===== LANGUAGE =====
                'language.select': 'भाषा छनौट गर्नुहोस्',
                'language.english': 'English',
                'language.nepali': 'नेपाली',
                
                // ===== INDEX PAGE =====
                'hero.title': 'पुरोहित बाजे',
                'services.title': 'हाम्रा सेवाहरू',
                
                'services.onlinePuja.title': 'अनलाइन पूजा बुकिङ',
                'services.onlinePuja.description': 'अनुभवी पण्डितहरूमार्फत जहाँसुकैबाट पवित्र पूजा–अनुष्ठान सम्पन्न गर्नुहोस्।',
                'services.onlinePuja.button': 'अहिले बुक गर्नुहोस्',
                
                'services.kriyaPutri.title': 'क्रिया पुत्री भवन बुकिङ',
                'services.kriyaPutri.description': 'एक क्लिकमा क्रिया पुत्री भवन सजिलै बुक गर्नुहोस्।',
                'services.kriyaPutri.button': 'अहिले बुक गर्नुहोस्',
                
                'services.priestServices.title': 'पुरोहित सेवाहरू',
                'services.priestServices.description': 'व्यक्तिगत अनुष्ठान र समारोहहरूको लागि अनुभवी वैदिक पुरोहितहरू भाडामा लिनुहोस्।',
                'services.priestServices.button': 'अहिले बुक गर्नुहोस्',
                
                'services.corporateServices.title': 'कार्यालय सेवाहरू',
                'services.corporateServices.description': 'कार्यालय, विद्यालय, र संस्थाहरूको लागि परम्परागत वैदिक समारोहहरू।',
                'services.corporateServices.button': 'अहिले बुक गर्नुहोस्',
                
                'services.pilgrimage.title': 'तीर्थ सेवाहरू',
                'services.pilgrimage.description': 'शुद्धिकरण र आशीर्वादको लागि अनुभवी पुरोहितहरू संग पवित्र हवन समारोहहरू।',
                'services.pilgrimage.button': 'अहिले बुक गर्नुहोस्',
                
                'services.astrology.title': 'ज्योतिष परामर्श',
                'services.astrology.description': 'जन्म कुण्डली विश्लेषण, ग्रह दोष उपचार, शुभ मुहूर्त निर्धारण।',
                'services.astrology.button': 'अहिले बुक गर्नुहोस्',
                
                'services.karmakanda.title': 'कर्मकाण्ड कक्षाहरू',
                'services.karmakanda.description': 'वैदिक अनुष्ठान, पूजा, र संस्कारहरूको लागि कक्षाहरू।',
                'services.karmakanda.button': 'अहिले बुक गर्नुहोस्',
                
                'services.bookStore.title': 'पुस्तक भण्डार',
                'services.bookStore.description': 'पवित्र पुस्तकहरू, धर्मग्रन्थहरू, र आध्यात्मिक साहित्य।',
                'services.bookStore.button': 'अहिले बुक गर्नुहोस्',
                
                'services.bhajanKirtan.title': 'भजन कीर्तन समूह',
                'services.bhajanKirtan.description': 'तपाईंको घर वा कार्यालयमा विशेष पूजा, हवन समारोहहरू।',
                'services.bhajanKirtan.button': 'अहिले बुक गर्नुहोस्',
                
                'services.pujaItems.title': 'पूजा सामग्री प्याकेज',
                'services.pujaItems.description': 'सबै अनुष्ठानहरूको लागि पूर्ण पूजा सामग्री प्याकेजहरू।',
                'services.pujaItems.button': 'अहिले बुक गर्नुहोस्',
                
                'services.donation.title': 'दान तथा सेवा',
                'services.donation.description': 'हाम्रो आध्यात्मिक मिशन र सामुदायिक कल्याणलाई समर्थन गर्नुहोस्।',
                'services.donation.button': 'अहिले दान गर्नुहोस्',
                
                'karthika.title': '📿 पुष महिना',
                'karthika.subtitle': 'पुष महिना – तपस्या, धार्मिक अनुष्ठान, र आध्यात्मिक शुद्धिकरणको पवित्र महिना',
                'karthika.description': 'पुष नेपाली हिन्दू पात्रोको सबैभन्दा पवित्र महिनाहरू मध्ये एक हो, यो महिना तपस्या, धार्मिक अनुष्ठान, आध्यात्मिक शुद्धिकरण, र दिव्य कृपा संग गहिरो रूपमा जोडिएको छ। यस महिनाले भगवान सूर्य, देवी लक्ष्मी, र जाडोको धार्मिक चाडपर्वहरूको आध्यात्मिक प्रकाशको आशीर्वादलाई सम्मान गर्दछ।',
                'karthika.button': 'आफ्नो विशेष पुष महिना पूजा अहिले बुक गर्नुहोस्!',
                
                'primaryServices.title': 'हाम्रा प्राथमिक सेवाहरू',
                'primaryServices.subtitle': 'व्यापक पूजा सेवाहरू - अनलाइन बुक गर्नुहोस्, मन्दिरहरू संग जोडिनुहोस्, र दिव्य आशीर्वादहरू उपहार दिनुहोस्!',
                
                'primaryServices.spiritualShop.title': 'आध्यात्मिक / पवित्र उत्पादनहरूको पसल',
                'primaryServices.spiritualShop.description': 'भगवद् गीता, रामायण, विष्णु सहस्रनाम\nपूजा सामग्री किटहरू\nरुद्राक्ष, माला, यन्त्रहरू\nधूप, मैनबत्ती, दीप',
                'primaryServices.spiritualShop.button': 'थप जान्नुहोस्',
                
                'primaryServices.astrology.title': 'ज्योतिषीय परामर्श',
                'primaryServices.astrology.description': 'जन्म कुण्डली पढाइ, कुण्डली मिलाइ, ग्रह दोष विश्लेषण, शुभ मुहूर्त निर्धारण।',
                'primaryServices.astrology.button': 'थप जान्नुहोस्',
                
                'primaryServices.ceremonyManagement.title': 'धार्मिक समारोह प्रबन्धन',
                'primaryServices.ceremonyManagement.description': 'पूजा सजावट, ध्वनि प्रणाली, सामग्री प्याकेजिङ, बस्ने ठाउँ, फोटोग्राफी।',
                'primaryServices.ceremonyManagement.button': 'थप जान्नुहोस्',
                
                'priestRegister.title': 'पुरोहितको रूपमा दर्ता गर्नुहोस्',
                'priestRegister.description1': 'हाम्रो पूजा सेवाहरूमा सामेल हुनुहोस् र विश्वभरका भक्तहरूलाई आफ्नो विशेषज्ञता प्रदान गर्नुहोस्।',
                'priestRegister.description2': 'समर्पित प्रोफाइल पाउनुहोस्, अनलाइन बुकिङ प्राप्त गर्नुहोस्, र आध्यात्मिक सेवाहरू मार्फत आय अर्जन गर्नुहोस्।',
                'priestRegister.button': 'अहिले दर्ता गर्नुहोस्',
                
                'footer.about.title': 'पुरोहित बाजेको बारेमा',
                'footer.about.description': 'पुरोहित बाजे सबै हिन्दू भक्तिगत आवश्यकता र आध्यात्मिक सेवाहरूको लागि अग्रणी डिजिटल प्लेटफर्म हो।',
                
                'footer.quickLinks.title': 'द्रुत लिङ्कहरू',
                'footer.quickLinks.onlinePuja': 'अनलाइन पूजा बुकिङ',
                'footer.quickLinks.templePuja': 'मन्दिर पूजा बुकिङ',
                'footer.quickLinks.priestBooking': 'पुरोहित बुकिङ',
                'footer.quickLinks.vedicBlessings': 'वैदिक आशीर्वाद',
                'footer.quickLinks.contact': 'हामीसंग सम्पर्क गर्नुहोस्',
                
                'footer.pujas.title': 'पूजाहरू',
                'footer.pujas.birth': 'जन्म पूजा',
                'footer.pujas.shraddha': 'श्राद्ध पूजा',
                
                'footer.management.title': 'पूजा प्रबन्धन',
                'footer.management.description': 'हामी हाम्रा ग्राहकहरूलाई पूर्ण पूजा प्रबन्धन सेवाहरू प्रदान गर्दछौं। तपाईंको सबै धार्मिक आवश्यकताहरूको लागि एकल सम्पर्क बिन्दु।',
                
                'footer.copyright': '© २०२३ पुरोहित बाजे। सर्वाधिकार सुरक्षित।',
                
                // ===== ASTROLOGY CONSULTATION PAGE (NEPALI) =====
                'astrology.title': 'ज्योतिष परामर्श',
                'astrology.subtitle': 'जन्म कुण्डली विश्लेषण, ग्रह दोष उपचार, शुभ मुहूर्त निर्धारण, र भविष्यवाणीहरूको लागि विशेषज्ञ ज्योतिषीहरूसँग परामर्श गर्नुहोस्।',
                'astrology.nav.consultations': 'परामर्शहरू',
                'astrology.nav.systems': 'प्रणालीहरू',
                'astrology.nav.astrologers': 'ज्योतिषीहरू',
                'astrology.nav.process': 'प्रक्रिया',
                
                'astrology.intro.title': 'वैदिक ज्योतिष मार्गदर्शन',
                'astrology.intro.desc1': 'वैदिक ज्योतिष (ज्योतिष) एक प्राचीन भारतीय विज्ञान हो जसले जन्मको समयमा ग्रहहरूको स्थितिमा आधारित हाम्रो जीवनमा ब्रह्माण्डीय प्रभावहरू प्रकट गर्दछ। हाम्रा विशेषज्ञ ज्योतिषीहरूले सटीक भविष्यवाणीहरू, व्यावहारिक उपचारहरू, र जीवनका चुनौतीहरू नेभिगेट गर्न र अवसरहरू अधिकतम बनाउन मार्गदर्शन प्रदान गर्छन्।',
                'astrology.intro.desc2': 'चाहे तपाईं करियर निर्णय, सम्बन्ध समस्या, स्वास्थ्य चिन्ता, वा आध्यात्मिक वृद्धि खोज्दै हुनुहुन्छ, हाम्रो ज्योतिष परामर्शले तपाईंको अद्वितीय जन्म कुण्डलीमा आधारित स्पष्टता र दिशा प्रदान गर्दछ।',
                
                'astrology.freeAnalysis.title': 'नि:शुल्क आधारभूत कुण्डली विश्लेषण',
                'astrology.freeAnalysis.desc': 'पहिलो पटक ग्राहकहरूले ग्रह स्थिति, लग्न, र मुख्य जीवन विषयहरू सहित नि:शुल्क आधारभूत जन्म कुण्डली विश्लेषण प्राप्त गर्छन्। यो प्रस्ताव प्राप्त गर्न आज आफ्नो परामर्श बुक गर्नुहोस्।',
                
                'astrology.consultations.title': 'परामर्श सेवाहरू',
                'astrology.popular': 'सबैभन्दा लोकप्रिय',
                
                'astrology.complete.title': 'पूर्ण जन्म कुण्डली विश्लेषण',
                'astrology.complete.desc': 'तपाईंको जन्म कुण्डलीको व्यापक विश्लेषण जसमा सबै १२ घरहरू, ९ ग्रहहरू, २७ नक्षत्रहरू, र ग्रह पक्षहरू समावेश छन्।',
                'astrology.complete.features': [
                    'विस्तृत ग्रह स्थिति र प्रभावहरू',
                    'दशा (ग्रह अवधि) विश्लेषण',
                    'प्रत्येक घरको शक्ति मूल्यांकन',
                    'करियर र वित्त भविष्यवाणीहरू',
                    'सम्बन्ध अनुकूलता अन्तर्दृष्टि',
                    'व्यक्तिगत PDF रिपोर्ट समावेश'
                ],
                
                'astrology.defects.title': 'ग्रह दोष उपचार',
                'astrology.defects.desc': 'हानिकारक ग्रह प्रभावहरू (ग्रह दोष) को पहिचान र नकारात्मक प्रभावहरूलाई बेअसर गर्न व्यक्तिगत वैदिक उपचार।',
                'astrology.defects.features': [
                    'कालसर्प दोष, मंगल दोष, आदिको विश्लेषण',
                    'रत्न सिफारिसहरू',
                    'मन्त्र र यन्त्र उपचार',
                    'विशेष पूजा र हवन सिफारिसहरू',
                    'दान र उपवास दिशानिर्देशहरू',
                    '४० दिन पछि पुन: परामर्श'
                ],
                
                'astrology.muhurta.title': 'मुहूर्त (शुभ समय)',
                'astrology.muhurta.desc': 'ग्रह संक्रमण र नक्षत्र स्थितिहरूमा आधारित महत्वपूर्ण जीवन घटनाहरूको लागि सबैभन्दा अनुकूल समय चयन।',
                'astrology.muhurta.features': [
                    'विवाह मिति चयन',
                    'व्यवसाय उद्घाटन समय',
                    'गृह प्रवेश',
                    'सवारी साधन खरिद समय',
                    'नयाँ शिक्षा वा जागिर सुरु गर्ने',
                    'चिकित्सा प्रक्रिया समय'
                ],
                
                'astrology.relationship.title': 'सम्बन्ध र अनुकूलता',
                'astrology.relationship.desc': 'विवाह, व्यापार साझेदारी, र पारिवारिक सद्भावको लागि सम्बन्ध अनुकूलताको गहन विश्लेषण।',
                'astrology.relationship.features': [
                    'विवाहको लागि कुण्डली मिलान',
                    'प्रेम सम्बन्ध विश्लेषण',
                    'व्यापार साझेदारी अनुकूलता',
                    'आमाबाबु-बच्चा सम्बन्ध अन्तर्दृष्टि',
                    'सम्बन्ध समस्याको लागि उपचार',
                    'सुझाव सहित अनुकूलता स्कोर'
                ],
                
                'astrology.career.title': 'करियर र वित्त मार्गदर्शन',
                'astrology.career.desc': 'करियर उन्नति, व्यापार वृद्धि, वित्तीय लगानी, र धन संचयको लागि ज्योतिषीय मार्गदर्शन।',
                'astrology.career.features': [
                    'उपयुक्त करियर पथ विश्लेषण',
                    'व्यापार सफलता समय भविष्यवाणी',
                    'लगानी र शेयर बजार मार्गदर्शन',
                    'सम्पत्ति खरिद निर्णयहरू',
                    'ऋण कटौती रणनीतिहरू',
                    'धन संचय उपचार'
                ],
                
                'astrology.question.title': 'प्रश्न-आधारित परामर्श',
                'astrology.question.desc': 'जीवनको कुनै पनि क्षेत्र - करियर, स्वास्थ्य, सम्बन्ध, वा आध्यात्मिकता बारे ३ विशिष्ट प्रश्नहरू सम्बोधन गर्ने केन्द्रित परामर्श।',
                'astrology.question.features': [
                    '३ विशिष्ट जीवन प्रश्नहरूको जवाफ',
                    'प्रश्न कुण्डली',
                    'तत्काल चिन्ताहरू सम्बोधन',
                    'व्यावहारिक मार्गदर्शन प्रदान',
                    '३०-मिनेट केन्द्रित सत्र',
                    'ईमेल पछ्याउन समावेश'
                ],
                
                'astrology.systems.title': 'हामीले प्रयोग गर्ने ज्योतिषीय प्रणालीहरू',
                'astrology.systems.parashari': 'पाराशरी प्रणाली',
                'astrology.systems.jyotish': 'वैदिक ज्योतिष',
                'astrology.systems.nadi': 'नाडी ज्योतिष',
                'astrology.systems.kerala': 'केरल परम्परा',
                
                'astrology.elements.title': 'हामी तपाईंको कुण्डलीमा के विश्लेषण गर्छौं',
                'astrology.elements.lagna': 'लग्न र ग्रहहरू',
                'astrology.elements.houses': '१२ घरहरू',
                'astrology.elements.nakshatras': '२७ नक्षत्रहरू',
                'astrology.elements.dasha': 'दशा अवधिहरू',
                'astrology.elements.yogas': 'योग र संयोजनहरू',
                'astrology.elements.defects': 'ग्रह दोष',
                'astrology.elements.remedies': 'उपचारात्मक उपायहरू',
                'astrology.elements.lifePath': 'जीवन मार्ग मार्गदर्शन',
                
                'astrology.astrologers.title': 'हाम्रा विशेषज्ञ ज्योतिषीहरू',
                'astrology.astrologers.ravi.name': 'पण्डित रवि शंकर',
                'astrology.astrologers.ravi.specialty': 'वैदिक र पाराशरी विशेषज्ञ',
                'astrology.astrologers.ravi.experience': '२५+ वर्ष अनुभव',
                'astrology.astrologers.ravi.desc': 'जन्म कुण्डली विश्लेषण, ग्रह उपचार, र करियर मार्गदर्शनमा विशेषज्ञता।',
                
                'astrology.astrologers.meera.name': 'डा. मीरा देसाई',
                'astrology.astrologers.meera.specialty': 'सम्बन्ध र मुहूर्त',
                'astrology.astrologers.meera.experience': '१८+ वर्ष अनुभव',
                'astrology.astrologers.meera.desc': 'विवाह अनुकूलता, सम्बन्ध समस्या, र शुभ समयमा विशेषज्ञ।',
                
                'astrology.astrologers.rao.name': 'श्री के. एन. राव',
                'astrology.astrologers.rao.specialty': 'नाडी र केपी प्रणाली',
                'astrology.astrologers.rao.experience': '३०+ वर्ष अनुभव',
                'astrology.astrologers.rao.desc': 'सटीक भविष्यवाणीको लागि नाडी ज्योतिष र कृष्णमूर्ति पद्धतिका विशेषज्ञ।',
                
                'astrology.astrologers.vikram.name': 'ज्योतिषी विक्रम',
                'astrology.astrologers.vikram.specialty': 'रत्न र उपचार',
                'astrology.astrologers.vikram.experience': '१५+ वर्ष अनुभव',
                'astrology.astrologers.vikram.desc': 'रत्न थेरापी, मन्त्र साधना, र वैदिक उपचारमा विशेषज्ञता।',
                
                'astrology.process.title': 'परामर्श प्रक्रिया',
                'astrology.process.step1': 'जन्म विवरण',
                'astrology.process.step1Desc': 'सटीक कुण्डली गणनाको लागि सही जन्म मिति, समय, र स्थान प्रदान गर्नुहोस्।',
                'astrology.process.step2': 'कुण्डली तयारी',
                'astrology.process.step2Desc': 'हाम्रा ज्योतिषीहरूले परम्परागत विधि र सफ्टवेयर प्रयोग गरेर तपाईंको कुण्डली गणना गर्छन्।',
                'astrology.process.step3': 'विश्लेषण सत्र',
                'astrology.process.step3Desc': 'तपाईंको प्राथमिकता अनुसार भिडियो कल, फोन, वा व्यक्तिगत रूपमा विस्तृत परामर्श।',
                'astrology.process.step4': 'उपचार र मार्गदर्शन',
                'astrology.process.step4Desc': 'अनुष्ठान, रत्न, मन्त्र, र जीवनशैली सहित व्यक्तिगत सिफारिसहरू।',
                'astrology.process.step5': 'पछ्याउन सहयोग',
                'astrology.process.step5Desc': 'शंका स्पष्ट गर्न र प्रगति ट्र्याक गर्न ३० दिनको लागि ईमेल समर्थन।',
                
                'astrology.testimonial.content': '"मैले प्राप्त गरेको जन्म कुण्डली विश्लेषण अविश्वसनीय रूपमा सटीक र अन्तर्दृष्टिपूर्ण थियो। पण्डित रविले मेरो ग्रह स्थितिहरू मात्र व्याख्या गरेनन् तर व्यावहारिक उपचारहरू पनि प्रदान गरे जुन वास्तवमा काम गर्यो। उनको मार्गदर्शन पछ्याउने केही हप्ता भित्र मेरो करियर भ्रम हट्यो। विस्तृत PDF रिपोर्ट एउटा हो जुन म नियमित रूपमा सन्दर्भ गर्छु। यो परामर्श हरेक पैसा र अधिकको लागि लायक थियो।"',
                'astrology.testimonial.author': 'अञ्जली पटेल',
                'astrology.testimonial.authorDesc': 'सफ्टवेयर इन्जिनियर, करियर मार्गदर्शन परामर्श पूरा',
                
                'astrology.cta.title': 'वैदिक ज्योतिष मार्फत स्पष्टता प्राप्त गर्नुहोस्',
                'astrology.cta.desc': 'अनुभवी वैदिक ज्योतिषीहरूबाट व्यक्तिगत ज्योतिषीय मार्गदर्शनको साथ आफ्नो जीवनको उद्देश्य बुझ्नुहोस्, चुनौतीहरू पार गर्नुहोस्, र अवसरहरू अधिकतम बनाउनुहोस्।',
                'astrology.cta.button': 'ज्योतिष परामर्श बुक गर्नुहोस्',
                
                'astrology.footer.title': 'ज्योतिष परामर्श डेस्क',
                'astrology.footer.desc': 'अपोइन्टमेन्ट तालिका, अत्यावश्यक प्रश्नहरू, वा हाम्रो सेवाहरूको बारेमा स्पष्टीकरणको लागि हामीलाई सम्पर्क गर्नुहोस्।',
                'astrology.footer.phone': 'ज्योतिष डेस्क: +९१-XXXXXX-XXXX',
                'astrology.footer.email': 'astrology@vedicservices.com',
                'astrology.footer.hours': 'उपलब्ध ८ बजे - १० बजे',
                'astrology.footer.copyright': '© २०२३ वैदिक सेवाहरू। ज्योतिष विभाग। सर्वाधिकार सुरक्षित।',
                
                // ===== BHAJAN KIRTAN PAGE (NEPALI) =====
                'bhajanKirtan.title': 'भजन कीर्तन सेवाहरू',
                'bhajanKirtan.subtitle': 'आध्यात्मिक रूपमा उत्थानकारी वातावरण सिर्जना गर्न भक्ति गायन, कीर्तन, र सत्संग।',
                'bhajanKirtan.nav.services': 'सेवाहरू',
                'bhajanKirtan.nav.events': 'कार्यक्रमहरू',
                'bhajanKirtan.nav.process': 'प्रक्रिया',
                
                'bhajanKirtan.intro.title': 'दिव्य ध्वनि र भक्ति अनुभव गर्नुहोस्',
                'bhajanKirtan.intro.desc1': 'भजन र कीर्तन शक्तिशाली भक्ति अभ्यासहरू हुन् जसले मनलाई शुद्ध बनाउँछ र वातावरणलाई सकारात्मक आध्यात्मिक ऊर्जाले भर्दछ।',
                'bhajanKirtan.intro.desc2': 'हाम्रा प्रशिक्षित गायक र संगीतकारहरूले घर, मन्दिर, र सामुदायिक सभाहरूको लागि परम्परागत र आधुनिक भजन-कीर्तन कार्यक्रमहरू सञ्चालन गर्छन्।',
                
                'bhajanKirtan.offerings.title': 'हाम्रा भजन र कीर्तन प्रस्तावहरू',
                
                'bhajanKirtan.home.title': 'गृह भजन कार्यक्रम',
                'bhajanKirtan.home.features': [
                    'दैनिक र विशेष अवसर भजनहरू',
                    'राम, कृष्ण, शिव, देवी भजनहरू',
                    'शान्तिपूर्ण आध्यात्मिक वातावरण'
                ],
                
                'bhajanKirtan.temple.title': 'मन्दिर कीर्तन',
                'bhajanKirtan.temple.features': [
                    'परम्परागत कीर्तन शैली',
                    'हार्मोनियम, तबला, मृदंग',
                    'पर्व र एकादशी कार्यक्रमहरू'
                ],
                
                'bhajanKirtan.satsang.title': 'सत्संग र समूह कीर्तन',
                'bhajanKirtan.satsang.features': [
                    'सामुदायिक आध्यात्मिक सभाहरू',
                    'अन्तरक्रियात्मक कीर्तन',
                    'छोटो प्रवचन समावेश'
                ],
                
                'bhajanKirtan.festival.title': 'पर्व विशेष कार्यक्रमहरू',
                'bhajanKirtan.festival.features': [
                    'जन्माष्टमी, शिवरात्रि, नवरात्रि',
                    'अनुकूलित भजन सूचीहरू',
                    'विस्तारित कीर्तन सत्रहरू'
                ],
                
                'bhajanKirtan.cta.title': 'आफ्नो स्थान दिव्य कम्पनले भर्नुहोस्',
                'bhajanKirtan.cta.desc': 'आफ्नो घर वा मन्दिरमा भजन र कीर्तन आमन्त्रित गर्नुहोस् र आन्तरिक शान्ति अनुभव गर्नुहोस्।',
                'bhajanKirtan.cta.button': 'बुक गर्नुहोस्',
                
                'bhajanKirtan.footer.copyright': '© २०२३ वैदिक सेवाहरू | भजन र कीर्तन विभाग',
                'bhajanKirtan.footer.contact': 'सम्पर्क: +९१-XXXXXX-XXXX | bhajan@vedicservices.com',
                
                // ===== BOOK STORE PAGE (NEPALI) =====
                'bookStore.title': 'पुस्तक भण्डार',
                'bookStore.subtitle': 'प्रामाणिक वैदिक धर्मग्रन्थहरू, अनुष्ठान पुस्तिकाहरू, आध्यात्मिक पुस्तकहरू र सिकाइ स्रोतहरू।',
                'bookStore.nav.books': 'पुस्तकहरू',
                'bookStore.nav.categories': 'श्रेणीहरू',
                'bookStore.nav.featured': 'विशेष',
                
                'bookStore.intro.title': 'मुद्रित रूपमा पवित्र ज्ञान',
                'bookStore.intro.desc1': 'हाम्रो वैदिक पुस्तक पसलले ध्यानपूर्वक चयन गरिएका धर्मग्रन्थहरू, पूजा पुस्तिकाहरू, कर्मकाण्ड पाठहरू, ज्योतिष सन्दर्भहरू, र आध्यात्मिक साहित्य प्रदान गर्दछ।',
                'bookStore.intro.desc2': 'पुरोहित, विद्यार्थी, गृहस्थ, र प्रामाणिक र परम्परागत स्रोतहरू चाहने खोजीकर्ताहरूको लागि आदर्श।',
                
                'bookStore.search.placeholder': 'हिन्दू धर्मग्रन्थ, वेद, पुराण खोज्नुहोस्...',
                'bookStore.search.button': 'खोज्नुहोस्',
                'bookStore.loading': 'पुस्तकहरू लोड हुँदै...',
                'bookStore.noResults': 'कुनै पुस्तक फेला परेन। फरक खोज शब्द प्रयास गर्नुहोस्।',
                
                'bookStore.featured.title': 'विशेष पुस्तकहरू',
                'bookStore.categories.title': 'श्रेणी अनुसार ब्राउज गर्नुहोस्',
                
                'bookStore.cta.title': 'पवित्र ज्ञान घर ल्याउनुहोस्',
                'bookStore.cta.desc': 'विद्वान् र अभ्यासकर्ताहरूद्वारा संकलित प्रामाणिक वैदिक पुस्तकहरू अर्डर गर्नुहोस्।',
                'bookStore.cta.button': 'सबै पुस्तकहरू ब्राउज गर्नुहोस्',
                
                'bookStore.footer.copyright': '© २०२३ वैदिक सेवाहरू | पुस्तक पसल विभाग',
                'bookStore.footer.contact': 'सम्पर्क: +९१-XXXXXX-XXXX | vedicbooks@vedicservices.com',
                
                // ===== CORPORATE SERVICES PAGE (NEPALI) =====
                'corporate.title': 'कार्यालय सेवाहरू',
                'corporate.subtitle': 'कार्यालय, विद्यालय, र संस्थाहरूको लागि परम्परागत वैदिक समारोहहरू सहित आफ्नो कार्यालय वातावरण बढाउनुहोस्।',
                'corporate.nav.benefits': 'लाभहरू',
                'corporate.nav.services': 'सेवाहरू',
                'corporate.nav.clients': 'ग्राहकहरू',
                'corporate.nav.process': 'प्रक्रिया',
                
                'corporate.intro.title': 'आधुनिक निगमहरूको लागि वैदिक परम्पराहरू',
                'corporate.intro.desc1': 'आजको प्रतिस्पर्धी व्यापार वातावरणमा, सकारात्मक, सामंजस्यपूर्ण, र समृद्ध कार्यस्थल सिर्जना गर्नु आवश्यक छ। हाम्रो कार्यालय वैदिक सेवाहरूले उत्पादकता, टोली कार्य, र समग्र सफलता बढाउन प्राचीन ज्ञानलाई आधुनिक कार्यालय आवश्यकताहरूसँग मिश्रण गर्दछ।',
                'corporate.intro.desc2': 'हामी कार्यालय सेटिङहरू, शैक्षिक संस्थाहरू, सरकारी कार्यालयहरू, र स्वास्थ्य सेवा सुविधाहरूको लागि विशेष रूपमा डिजाइन गरिएको अनुकूलित वैदिक समारोहहरू, पूजाहरू, र आध्यात्मिक परामर्शहरू प्रदान गर्दछौं।',
                
                'corporate.benefits.title': 'तपाईंको संस्थाको लागि लाभहरू',
                'corporate.benefits.productivity.title': 'बढेको उत्पादकता',
                'corporate.benefits.productivity.desc': 'वैदिक अनुष्ठानहरूले सकारात्मक ऊर्जा क्षेत्रहरू सिर्जना गर्दछ जसले फोकस सुधार गर्दछ, तनाव कम गर्दछ, र कार्यस्थल अध्ययन अनुसार कर्मचारी दक्षता ४०% सम्म बढाउँछ।',
                'corporate.benefits.team.title': 'सुधारिएको टोली सद्भाव',
                'corporate.benefits.team.desc': 'समूह समारोहहरूले एकता बढाउँछ, कार्यस्थल द्वन्द्व कम गर्दछ, र टोली सदस्य र विभागहरू बीच बलियो सम्बन्ध निर्माण गर्दछ।',
                'corporate.benefits.protection.title': 'व्यापार संरक्षण',
                'corporate.benefits.protection.desc': 'विशेष वास्तु पूजा र संरक्षण अनुष्ठानहरूले तपाईंको व्यवसायलाई नकारात्मक प्रभावहरू, कानुनी मुद्दाहरू, र वित्तीय बाधाहरूबाट जोगाउँछ।',
                'corporate.benefits.client.title': 'ग्राहक र लगानीकर्ता सम्बन्ध',
                'corporate.benefits.client.desc': 'सांस्कृतिक जागरूकता र कर्मचारी हेरचाह प्रदर्शन गर्ने अद्वितीय कार्यालय कल्याण पहलहरूसँग ग्राहक र लगानीकर्ताहरूलाई प्रभावित गर्नुहोस्।',
                'corporate.benefits.environment.title': 'सकारात्मक कार्य वातावरण',
                'corporate.benefits.environment.desc': 'नियमित आध्यात्मिक गतिविधिहरूले बर्नआउट कम गर्दछ, मानसिक स्वास्थ्य सुधार गर्दछ, र अधिक सकारात्मक, सन्तुलित कार्यस्थल संस्कृति सिर्जना गर्दछ।',
                'corporate.benefits.advantage.title': 'प्रतिस्पर्धात्मक लाभ',
                'corporate.benefits.advantage.desc': 'अद्वितीय कार्यालय कल्याण कार्यक्रमहरूसँग आफ्नो संस्थालाई फरक पार्नुहोस् जसले तपाईंको उद्योगमा शीर्ष प्रतिभा आकर्षित र कायम राख्दछ।',
                
                'corporate.services.title': 'प्रदान गरिने कार्यालय सेवाहरू',
                'corporate.tabs.office': 'कार्यालय समारोहहरू',
                'corporate.tabs.educational': 'शैक्षिक संस्थाहरू',
                'corporate.tabs.healthcare': 'स्वास्थ्य सेवा सुविधाहरू',
                'corporate.tabs.regular': 'नियमित कार्यक्रमहरू',
                
                'corporate.clients.title': 'विविध संस्थाहरूको सेवा गर्दै',
                
                'corporate.process.title': 'हाम्रो कार्यालय सेवा प्रक्रिया',
                'corporate.process.step1.title': 'आवश्यकता मूल्यांकन',
                'corporate.process.step1.desc': 'हामी तपाईंको संस्थाको विशिष्ट आवश्यकताहरू, संस्कृति, र उद्देश्यहरू बुझ्दछौं।',
                'corporate.process.step2.title': 'अनुकूलित प्रस्ताव',
                'corporate.process.step2.desc': 'हामी तपाईंको कार्यालय लक्ष्यहरूसँग मिल्ने सेवाहरूको अनुकूलित प्याकेज डिजाइन गर्दछौं।',
                'corporate.process.step3.title': 'लजिस्टिक योजना',
                'corporate.process.step3.desc': 'हामी तपाईंको टोलीसँग मिति, समय, सामग्री, र स्थान आवश्यकताहरू समन्वय गर्दछौं।',
                'corporate.process.step4.title': 'समारोह कार्यान्वयन',
                'corporate.process.step4.desc': 'हाम्रा अनुभवी पुरोहितहरूले काममा न्यूनतम अवरोधका साथ समारोहहरू सञ्चालन गर्छन्।',
                'corporate.process.step5.title': 'पछ्याउन र प्रतिक्रिया',
                'corporate.process.step5.desc': 'हामी प्रतिक्रिया संकलन गर्छौं र निरन्तर लाभको लागि चालू कार्यक्रमहरू योजना गर्दछौं।',
                
                'corporate.testimonial.content': '"हाम्रो कार्यालय कार्यालयमा नियमित मासिक हवन लागू गरेपछि, हामीले टोली सहयोगमा महत्वपूर्ण सुधार र कर्मचारी संलग्नतामा ३०% कमी देखेका छौं। सकारात्मक ऊर्जा स्पष्ट छ, र हाम्रा ग्राहकहरूले प्राय: हाम्रो कार्यस्थलको अद्वितीय, शान्तिपूर्ण वातावरणको बारेमा टिप्पणी गर्छन्।"',
                'corporate.testimonial.author': 'श्री राजेश कुमार',
                'corporate.testimonial.authorDesc': 'मानव संसाधन निर्देशक, टेकसोलुसन्स इंक',
                
                'corporate.cta.title': 'आफ्नो कार्यस्थल वैदिक ज्ञानले रूपान्तरण गर्नुहोस्',
                'corporate.cta.desc': 'हाम्रो विशेष कार्यालय वैदिक सेवाहरूसँग आफ्नो संस्थामा उत्पादकता, सद्भाव, र सफलता बढाउनुहोस्। कार्यालय, विद्यालय, अस्पताल, र सबै प्रकारका संस्थाहरूको लागि उपयुक्त।',
                'corporate.cta.button': 'कार्यालय सेवा बुक गर्नुहोस्',
                
                'corporate.footer.title': 'कार्यालय सेवा पूछताछ',
                'corporate.footer.desc': 'तपाईंको संस्थाको विशिष्ट आवश्यकताहरू अनुरूप अनुकूलित प्रस्तावको लागि हामीलाई सम्पर्क गर्नुहोस्।',
                'corporate.footer.phone': 'कार्यालय डेस्क: +९१-XXXXXX-XXXX',
                'corporate.footer.email': 'corporate@vedicservices.com',
                'corporate.footer.hours': 'सोम-शुक्र: ९ बजे - ६ बजे',
                'corporate.footer.copyright': '© २०२३ वैदिक सेवाहरू। कार्यालय विभाग। सर्वाधिकार सुरक्षित।',
                
                // ===== DONATION PAGE (NEPALI) =====
                'donation.title': 'दान र सेवा',
                'donation.subtitle': 'हाम्रो आध्यात्मिक मिशन, मन्दिर मर्मत, आवश्यकतामा परेकाहरूका लागि नि:शुल्क सेवाहरू, र सामुदायिक कल्याण कार्यक्रमहरूलाई समर्थन गर्नुहोस्।',
                'donation.nav.importance': 'महत्त्व',
                'donation.nav.types': 'दानका प्रकारहरू',
                'donation.nav.usage': 'रकमको प्रयोग',
                'donation.nav.process': 'प्रक्रिया',
                
                'donation.intro.title': 'उदारतापूर्ण दानको शक्ति',
                'donation.intro.desc1': 'वैदिक परम्परामा, दान (दान) सबैभन्दा महत्त्वपूर्ण गुणहरू र आध्यात्मिक अभ्यासहरू मध्ये एक मानिन्छ। तपाईंको दानहरूले प्राचीन परम्पराहरूको संरक्षणलाई समर्थन गर्दछ, आवश्यकतामा परेकाहरूलाई नि:शुल्क सेवाहरू प्रदान गर्दछ, र आध्यात्मिक वृद्धिका लागि पवित्र ठाउँहरू कायम राख्न मद्दत गर्दछ।',
                'donation.intro.desc2': 'प्रत्येक योगदान, ठूलो वा सानो, वैदिक ज्ञान र अनुष्ठानहरू सबैलाई वित्तीय क्षमताको परवाह नगरी पहुँचयोग्य बनाउने हाम्रो मिशनलाई कायम राख्नमा फरक पार्दछ।',
                
                'donation.impact.title': 'अहिलेसम्मको तपाईंको प्रभाव',
                'donation.impact.freePujas': 'नि:शुल्क पूजा सम्पन्न',
                'donation.impact.students': 'विद्यार्थीहरूलाई समर्थन',
                'donation.impact.templeDays': 'मन्दिर मर्मतका दिनहरू',
                'donation.impact.mealsServed': 'आवश्यकतामा परेकाहरूलाई खाना सेवा',
                
                'donation.importance.title': 'तपाईंको दान किन महत्त्वपूर्ण छ',
                'donation.importance.temple.title': 'मन्दिर मर्मत',
                'donation.importance.temple.desc': 'पवित्र ठाउँहरूको हेरचाह, पुनर्निर्माण, र दैनिक कार्यहरूलाई समर्थन गर्नुहोस् जहाँ हजारौंले आध्यात्मिक सान्त्वना र समुदाय फेला पार्छन्।',
                'donation.importance.freeServices.title': 'आवश्यकतामा परेकाहरूका लागि नि:शुल्क सेवाहरू',
                'donation.importance.freeServices.desc': 'बूढापाका, कम आय भएका परिवारहरू, र वित्तीय कठिनाइहरू सामना गर्नेहरूलाई नि:शुल्क पूजा, अनुष्ठान, र आध्यात्मिक मार्गदर्शन प्रदान गर्नुहोस्।',
                'donation.importance.education.title': 'शिक्षा र छात्रवृत्ति',
                'donation.importance.education.desc': 'वैदिक शिक्षा कार्यक्रमहरू, धर्मग्रन्थ कक्षाहरू, र पुजारी र आध्यात्मिक अध्ययनका योग्य विद्यार्थीहरूका लागि छात्रवृत्तिको लागि कोष उपलब्ध गराउनुहोस्।',
                
                'donation.types.title': 'समर्थन गर्ने तरिकाहरू',
                'donation.types.general.badge': 'सबैभन्दा आवश्यक',
                'donation.types.general.title': 'सामान्य दान',
                'donation.types.general.desc': 'हाम्रो समग्र मिशनलाई समर्थन गर्नुहोस् र हामीलाई कोषहरू जहाँ सबैभन्दा आवश्यक छ त्यहाँ आवंटन गर्न अनुमति दिनुहोस्।',
                'donation.types.general.features': [
                    'हाम्रो सबै कार्यक्षेत्रहरूलाई समर्थन गर्दछ',
                    'जरुरी आवश्यकताहरूको लागि अधिकतम लचीलापन',
                    'सबै सेवाहरू कायम राख्न मद्दत गर्दछ',
                    'मासिक पुनरावृत्ति विकल्प उपलब्ध',
                    'कुनै पनि रकमले फरक पार्दछ'
                ],
                'donation.types.general.amount': 'कुनै पनि रकम',
                'donation.types.general.button': 'दान गर्नुहोस्',
                
                'donation.types.annadanam.title': 'अन्नदान (खाना सेवा)',
                'donation.types.annadanam.desc': 'हाम्रो मन्दिरको भान्सामा भक्तहरू, विद्यार्थीहरू, र गरीबहरूका लागि नि:शुल्क भोजनको प्रायोजक बन्नुहोस्।',
                'donation.types.annadanam.features': [
                    '५० जनालाई खुवाउनु: ₹२,५००',
                    '१०० जनालाई खुवाउनु: ₹५,०००',
                    'साप्ताहिक प्रायोजन उपलब्ध',
                    'विशेष पर्वको खाना',
                    'प्राप्तकर्ताहरूबाट आशीर्वाद प्राप्त गर्नुहोस्'
                ],
                'donation.types.annadanam.amount': '₹२,५००+',
                'donation.types.annadanam.button': 'खाना प्रायोजन गर्नुहोस्',
                
                'donation.types.books.title': 'धर्मग्रन्थ र पुस्तक कोष',
                'donation.types.books.desc': 'पवित्र ग्रन्थहरू, आध्यात्मिक साहित्य, र शैक्षिक सामग्रीहरू प्रकाशन र वितरण गर्न मद्दत गर्नुहोस्।',
                'donation.types.books.features': [
                    'नि:शुल्क वितरणका लागि धर्मग्रन्थ छाप्नुहोस्',
                    'अनुवाद परियोजनाहरूलाई समर्थन गर्नुहोस्',
                    'शैक्षिक सामग्रीहरू सिर्जना गर्नुहोस्',
                    'डिजिटल पुस्तकालय विकास',
                    'प्रकाशनहरूमा स्वीकृति दिनुहोस्'
                ],
                'donation.types.books.amount': '₹१,०००+',
                'donation.types.books.button': 'पुस्तकहरूलाई समर्थन गर्नुहोस्',
                
                'donation.types.deity.title': 'देवता अलङ्करण',
                'donation.types.deity.desc': 'मन्दिरका देवताहरूका लागि गहनाहरू, लुगाहरू, र सजावटहरूको लागि योगदान गर्नुहोस्।',
                'donation.types.deity.features': [
                    'देवताहरूका लागि रेशमी लुगा',
                    'सुन/चाँदीका गहनाहरू',
                    'फूल सजावट कोष',
                    'पर्व विशेष सजावटहरू',
                    'तपाईंको नाम मन्दिर दर्तामा रेकर्ड गरिनेछ'
                ],
                'donation.types.deity.amount': '₹५,०००+',
                'donation.types.deity.button': 'देवताहरूलाई अलङ्कृत गर्नुहोस्',
                
                'donation.types.infrastructure.title': 'आधारभूत संरचना विकास',
                'donation.types.infrastructure.desc': 'भवन निर्माण परियोजनाहरू, पुनर्निर्माण, र सुविधा सुधारलाई समर्थन गर्नुहोस्।',
                'donation.types.infrastructure.features': [
                    'मन्दिर विस्तार परियोजनाहरू',
                    'विद्यार्थी होस्टेल निर्माण',
                    'ध्यान कक्ष विकास',
                    'पुस्तकालय भवन कोष',
                    'स्थायी स्वीकृति प्लेक'
                ],
                'donation.types.infrastructure.amount': '₹१०,०००+',
                'donation.types.infrastructure.button': 'हामीसँगै निर्माण गर्नुहोस्',
                
                'donation.types.monthly.badge': 'विरासत',
                'donation.types.monthly.title': 'मासिक टिकाऊ साझेदार',
                'donation.types.monthly.desc': 'हाम्रा सबै आध्यात्मिक गतिविधिहरूको लागि नियमित, विश्वसनीय समर्थनको लागि मासिक दाता बन्नुहोस्।',
                'donation.types.monthly.features': [
                    'स्वचालित मासिक योगदान',
                    'चालू कार्यक्रमहरू कायम राख्दछ',
                    'विशेष साझेदार स्वीकृति',
                    'वार्षिक प्रभाव प्रतिवेदन',
                    'विशेष कार्यक्रमहरूको लागि प्राथमिकता'
                ],
                'donation.types.monthly.amount': '₹५००+/महिना',
                'donation.types.monthly.button': 'साझेदार बन्नुहोस्',
                
                'donation.usage.title': 'तपाईंको दान कसरी प्रयोग गरिन्छ',
                'donation.usage.tabs.temple': 'मन्दिर सञ्चालन',
                'donation.usage.tabs.community': 'सामुदायिक सेवा',
                'donation.usage.tabs.education': 'शिक्षा',
                'donation.usage.tabs.outreach': 'पहुँच',
                
                'donation.tax.title': 'कर लाभहरू',
                'donation.tax.desc': 'हाम्रो संस्थामा सबै दानहरू आयकर ऐन, १९६१ को धारा ८०जी अन्तर्गत कर छूटका लागि योग्य छन्।',
                'donation.tax.items': [
                    'दानमा ५०% कर छूट',
                    'तुरुन्तै रसिद जारी',
                    'प्यान र ८०जी प्रमाणपत्र उपलब्ध'
                ],
                
                'donation.process.title': 'सरल दान प्रक्रिया',
                'donation.process.step1.title': 'रकम र उद्देश्य चयन गर्नुहोस्',
                'donation.process.step1.desc': 'दान रकम चयन गर्नुहोस् र तपाईंको योगदान कसरी प्रयोग गर्न चाहनुहुन्छ निर्दिष्ट गर्नुहोस्।',
                'donation.process.step2.title': 'दान फारम भर्नुहोस्',
                'donation.process.step2.desc': 'तपाईंको विवरण र प्राथमिकताहरूसहित हाम्रो सुरक्षित अनलाइन दान फारम पूरा गर्नुहोस्।',
                'donation.process.step3.title': 'भुक्तानी गर्नुहोस्',
                'donation.process.step3.desc': 'यूपीआई, नेट बैंकिंग, क्रेडिट/डेबिट कार्ड, वा अन्य उपलब्ध भुक्तानी विधिहरू प्रयोग गर्नुहोस्।',
                'donation.process.step4.title': 'पुष्टिकरण प्राप्त गर्नुहोस्',
                'donation.process.step4.desc': 'तुरुन्तै दान रसिद र ८०जी प्रमाणपत्र इमेल मार्फत कर लाभका लागि प्राप्त गर्नुहोस्।',
                'donation.process.step5.title': 'प्रभाव ट्र्याक गर्नुहोस्',
                'donation.process.step5.desc': 'तपाईंको दानले हाम्रो समुदायमा कसरी फरक पार्दैछ भन्ने बारे अपडेटहरू प्राप्त गर्नुहोस्।',
                
                'donation.testimonial.content': '"म तीन वर्षदेखि मासिक दाता हुँ, र यो मैले गरेका सबैभन्दा सन्तुष्टिदायक निर्णयहरू मध्ये एक हो। वृद्ध भक्तहरूका लागि गरिएका नियमित नि:शुल्क पूजाहरू र वैदिक विद्यार्थीहरूलाई दिइएका छात्रवृत्तिहरूको बारेमा नियमित अपडेटहरू देखेर मलाई अत्यन्त सन्तुष्टि हुन्छ। कोषहरू कसरी प्रयोग गरिन्छ भन्ने बारेमा पारदर्शिता र व्यक्तिगत धन्यवाद नोटहरूले मलाई वास्तवमै मिशनसँग जोडिएको महसुस गराउँछ।"',
                'donation.testimonial.author': 'श्रीमती सुनीता रेड्डी',
                'donation.testimonial.authorDesc': '२०२० देखि मासिक टिकाऊ साझेदार',
                
                'donation.cta.title': 'तपाईंको उदारताले हाम्रो आध्यात्मिक मिशनलाई शक्ति प्रदान गर्दछ',
                'donation.cta.desc': 'वैदिक परम्पराहरूको संरक्षणलाई समर्थन गर्न, आवश्यकतामा परेकाहरूलाई मद्दत गर्न, र आध्यात्मिक वृद्धिका लागि पवित्र ठाउँहरू कायम राख्न सयौं दाताहरूमा सामेल हुनुहोस्।',
                'donation.cta.button': 'अहिले दान गर्नुहोस्',
                
                'donation.footer.title': 'दान र सेवा डेस्क',
                'donation.footer.desc': 'दान सम्बन्धी प्रश्नहरू, कर्पोरेट साझेदारीहरू, वा विशेष दानका अवसरहरू छलफल गर्न हामीलाई सम्पर्क गर्नुहोस्।',
                'donation.footer.phone': 'दान डेस्क: +९७-९८XXXXXXX',
                'donation.footer.email': 'donation@purohitbaaje.com',
                'donation.footer.hours': 'उपलब्ध ९ बजे - ६ बजे',
                'donation.footer.copyright': '© २०२३ पुरोहित बाजे। भारतीय ट्रस्ट ऐन अन्तर्गत दर्ता भएको ट्रस्ट। सबै दानहरू ८०जी कर छूटका लागि योग्य।',
                
                'donation.modal.title': 'ईसेवा मार्फत दान गर्नुहोस्',
                'donation.modal.subtitle': 'कृपया निम्न QR कोड स्क्यान गर्नुहोस् र आफ्नो दान पूरा गर्नुहोस्',
                'donation.modal.esewaId': 'ईसेवा ID: 9841XXXXXX',
                'donation.modal.instructions.title': 'निर्देशहरू:',
                'donation.modal.instructions.steps': [
                    'ईसेवा ऐप खोल्नुहोस्',
                    'QR स्क्यान गर्नुहोस्',
                    'दान रकम प्रविष्ट गर्नुहोस्',
                    'भुक्तानी पूरा गर्नुहोस्',
                    'भुक्तानी पुष्टि हुनासाथ "पूरा भयो" बटन थिच्नुहोस्'
                ],
                'donation.modal.buttons.done': 'पूरा भयो',
                'donation.modal.buttons.cancel': 'रद्द गर्नुहोस्',
                'donation.modal.buttons.close': 'बन्द गर्नुहोस्',
                'donation.modal.thankYou.title': 'धन्यवाद!',
                'donation.modal.thankYou.message': 'तपाईंको उदार दानको लागि हार्दिक धन्यवाद। तपाईंको योगदानले हाम्रो आध्यात्मिक मिशनलाई अगाडि बढाउन मद्दत गर्दछ।',
                'donation.modal.thankYou.receipt': 'तपाईंको दान रसिद र ८०जी प्रमाणपत्र तपाईंको इमेलमा पठाइनेछ।',
                
                // ===== KARMAKANDA CLASSES PAGE (NEPALI) =====
                'karmakanda.title': 'कर्मकाण्ड कक्षाहरू',
                'karmakanda.subtitle': 'वैदिक अनुष्ठान, पूजा, र संस्कारहरूको लागि कर्मकाण्ड–आधारित परामर्श र कक्षाहरू।',
                'karmakanda.nav.courses': 'पाठ्यक्रमहरू',
                'karmakanda.nav.curriculum': 'पाठ्यक्रम',
                'karmakanda.nav.instructors': 'प्रशिक्षकहरू',
                'karmakanda.nav.process': 'प्रक्रिया',
                
                'karmakanda.intro.title': 'प्रामाणिक वैदिक अनुष्ठानहरू सिक्नुहोस्',
                'karmakanda.intro.desc1': 'कर्मकाण्ड भनेको वेदको त्यो खण्ड हो जसले अनुष्ठान, समारोह, र संस्कारहरूसँग सम्बन्धित छ। हाम्रो कर्मकाण्ड कक्षाहरूले वैदिक अनुष्ठानहरूको उचित प्रक्रिया, मन्त्र, र महत्त्व सिकाउँछ ताकि तपाईं तिनीहरूलाई आफ्नो जीवनमा सही र अर्थपूर्ण रूपमा गर्न सक्नुहुन्छ।',
                'karmakanda.intro.desc2': 'चाहे तपाईं दैनिक पूजा प्रक्रिया सिक्न चाहनुहुन्छ, आफ्नो परिवारको लागि जीवन-चक्र संस्कारहरू गर्न चाहनुहुन्छ, वा वैदिक परम्पराहरूको बारेमा आफ्नो बुझाइ गहिरो बनाउन चाहनुहुन्छ, हाम्रो संरचित पाठ्यक्रमहरूले सैद्धान्तिक ज्ञान र व्यावहारिक प्रशिक्षण दुवै प्रदान गर्दछ।',
                
                'karmakanda.specialOffer.title': 'प्रारम्भिक भर्ना छुट',
                'karmakanda.specialOffer.desc': 'अर्को अमावास्या अघि कुनै पनि कर्मकाण्ड पाठ्यक्रममा भर्ना गर्नुहोस् र २०% छुट र आवश्यक अनुष्ठान सामग्री सहित नि:शुल्क पूजा किट प्राप्त गर्नुहोस्।',
                
                'karmakanda.courses.title': 'पाठ्यक्रम प्रस्तावहरू',
                'karmakanda.courses.beginner': 'शुरुआती',
                'karmakanda.courses.popular': 'सबैभन्दा लोकप्रिय',
                'karmakanda.courses.advanced': 'उन्नत',
                'karmakanda.courses.specialized': 'विशेष',
                'karmakanda.courses.online': 'अनलाइन',
                'karmakanda.courses.comprehensive': 'व्यापक',
                
                'karmakanda.courses.basic.title': 'आधारभूत गृह पूजा पाठ्यक्रम',
                'karmakanda.courses.basic.desc': 'गृह अभ्यासको लागि आवश्यक दैनिक र साप्ताहिक पूजा प्रक्रियाहरू सिक्नुहोस्। शुरुआती र गृहस्थहरूको लागि उत्तम।',
                'karmakanda.courses.basic.features': [
                    'दैनिक सन्ध्या वन्दना प्रक्रियाहरू',
                    'पारिवारिक देवताहरूको लागि आधारभूत मन्त्रहरू',
                    'पूजा सामग्री तयारी',
                    'सरल हवन प्रविधिहरू',
                    'आरती र प्रार्थना विधिहरू',
                    'गृह वेदी/मन्दिर सिर्जना'
                ],
                'karmakanda.courses.basic.duration': '४ हप्ता',
                
                'karmakanda.courses.samskaras.title': 'संस्कार र जीवन अनुष्ठान',
                'karmakanda.courses.samskaras.desc': 'जन्मदेखि मृत्युसम्म १६ परम्परागत हिन्दू संस्कारहरूको व्यापक प्रशिक्षण।',
                'karmakanda.courses.samskaras.features': [
                    'नामकरण',
                    'अन्नप्राशन',
                    'उपनयन',
                    'विवाह समारोह',
                    'अन्त्येष्टि',
                    'मासिक/वार्षिक श्राद्ध'
                ],
                'karmakanda.courses.samskaras.duration': '८ हप्ता',
                
                'karmakanda.courses.havan.title': 'हवन र यज्ञ विशेषज्ञता',
                'karmakanda.courses.havan.desc': 'उचित वैदिक प्रक्रियाहरूसँग विभिन्न प्रकारका अग्नि समारोहहरू गर्न उन्नत प्रशिक्षण।',
                'karmakanda.courses.havan.features': [
                    'विभिन्न हवनको लागि सामग्री चयन',
                    'सही उच्चारणको साथ मन्त्र जप',
                    'अग्नि वेदी निर्माण र अभिषेक',
                    'विशेष यज्ञ: गणपति, नवग्रह',
                    'रुद्राभिषेक प्रक्रियाहरू',
                    'सामुदायिक यज्ञ संगठन'
                ],
                'karmakanda.courses.havan.duration': '१० हप्ता',
                
                'karmakanda.courses.temple.title': 'मन्दिर पूजा प्रक्रियाहरू',
                'karmakanda.courses.temple.desc': 'उचित मन्दिर पूजा प्रोटोकल, देवता अभिषेक, र मन्दिर व्यवस्थापन सिद्धान्तहरू सिक्नुहोस्।',
                'karmakanda.courses.temple.features': [
                    'देवताहरूको लागि अभिषेक प्रक्रियाहरू',
                    'अलङ्कारम (देवता सजावट)',
                    'मन्दिर समय र अनुष्ठान तालिका',
                    'पर्व समारोह प्रक्रियाहरू',
                    'पुरोहित कर्तव्य र जिम्मेवारीहरू',
                    'मन्दिर प्रशासन आधारभूत'
                ],
                'karmakanda.courses.temple.duration': '६ हप्ता',
                
                'karmakanda.courses.mantra.title': 'मन्त्र र स्तोत्र जप',
                'karmakanda.courses.mantra.desc': 'आवश्यक वैदिक मन्त्र, स्तोत्र, र प्रार्थनाहरूको सही उच्चारण र जपमा निपुणता प्राप्त गर्नुहोस्।',
                'karmakanda.courses.mantra.features': [
                    'संस्कृत उच्चारण आधारभूत',
                    'गायत्री मन्त्र र यसको विविधताहरू',
                    'विष्णु सहस्रनाम जप',
                    'ललिता सहस्रनाम',
                    'शिव पञ्चाक्षर स्तोत्र',
                    'दैनिक प्रार्थना दिनचर्या'
                ],
                'karmakanda.courses.mantra.duration': '५ हप्ता',
                
                'karmakanda.courses.certification.title': 'कर्मकाण्ड प्रमाणीकरण',
                'karmakanda.courses.certification.desc': 'वैदिक अनुष्ठान र समारोहका सबै पक्षहरू समेट्ने एक वर्षे व्यापक प्रमाणीकरण कार्यक्रम।',
                'karmakanda.courses.certification.features': [
                    'सबै शुरुआती देखि उन्नत विषयहरू',
                    'पर्यवेक्षण सहित व्यावहारिक प्रशिक्षण',
                    'सान्दर्भिक ग्रन्थहरूको अध्ययन',
                    'वरिष्ठ पुरोहितहरूसँग प्रशिक्षुता',
                    'अन्तिम परीक्षा र प्रमाणीकरण',
                    'स्थान नियुक्ति सहायता'
                ],
                'karmakanda.courses.certification.duration': '१ वर्ष',
                
                'karmakanda.curriculum.title': 'विस्तृत पाठ्यक्रम',
                'karmakanda.curriculum.tabs.theory': 'सैद्धान्तिक आधार',
                'karmakanda.curriculum.tabs.practical': 'व्यावहारिक प्रशिक्षण',
                'karmakanda.curriculum.tabs.scripture': 'ग्रन्थ अध्ययन',
                'karmakanda.curriculum.tabs.application': 'प्रयोग',
                
                'karmakanda.methods.title': 'हाम्रो शिक्षण विधि',
                'karmakanda.instructors.title': 'तपाईंका प्रशिक्षकहरू',
                'karmakanda.audience.title': 'यी कक्षाहरूमा कसले सामेल हुनुपर्छ?',
                
                'karmakanda.process.title': 'सिकाइ प्रक्रिया',
                'karmakanda.process.step1.title': 'मूल्यांकन',
                'karmakanda.process.step1.desc': 'हामी तपाईंको हालको ज्ञान र लक्ष्यहरू मूल्यांकन गर्छौं र सही पाठ्यक्रम सिफारिस गर्छौं।',
                'karmakanda.process.step2.title': 'भर्ना',
                'karmakanda.process.step2.desc': 'तपाईं उपयुक्त पाठ्यक्रममा भर्ना हुनुहुन्छ र अध्ययन सामग्री प्राप्त गर्नुहुन्छ।',
                'karmakanda.process.step3.title': 'सैद्धान्तिक सिकाइ',
                'karmakanda.process.step3.desc': 'दर्शन र प्रक्रियाहरूमा प्रत्यक्ष र रेकर्ड गरिएका सत्रहरू।',
                'karmakanda.process.step4.title': 'व्यावहारिक प्रशिक्षण',
                'karmakanda.process.step4.desc': 'प्रशिक्षक मार्गदर्शन र प्रतिक्रिया सहित अभ्यास।',
                'karmakanda.process.step5.title': 'मूल्यांकन र प्रमाणीकरण',
                'karmakanda.process.step5.desc': 'सिकाइको मूल्यांकन र सफल समाप्ति पछि प्रमाणीकरण।',
                
                'karmakanda.testimonial.content': '"अमेरिकामा २० वर्षदेखि बस्दै आएको NRI को रूपमा, मैले धेरै अनुष्ठानहरू बिर्सेको थिएँ। आधारभूत गृह पूजा पाठ्यक्रमले मलाई सही प्रक्रियाहरू मात्र सिकाएन तर प्रत्येक चरणको अर्थ पनि व्याख्या गर्यो। आचार्य विजयको धैर्यता र स्पष्टताले जटिल अनुष्ठानहरूलाई पहुँचयोग्य बनायो। म अब आत्मविश्वासका साथ दैनिक पूजा गर्न सक्छु र हालै मैले आफ्नै छोरीको नामकरण समारोह सञ्चालन गरें। यसले हाम्रो परिवारको आध्यात्मिक जीवनलाई गहिरो रूपमा समृद्ध बनाएको छ।"',
                'karmakanda.testimonial.author': 'राजेश मेहता',
                'karmakanda.testimonial.authorDesc': 'आधारभूत गृह पूजा पाठ्यक्रम पूरा, अहिले संस्कार पाठ्यक्रममा भर्ना',
                
                'karmakanda.cta.title': 'प्रामाणिक प्रशिक्षणको साथ वैदिक अनुष्ठानहरूमा निपुणता प्राप्त गर्नुहोस्',
                'karmakanda.cta.desc': 'उचित अनुष्ठान प्रक्रियाहरू सिक्न, तिनीहरूको आध्यात्मिक महत्त्व बुझ्न, र आफ्नो र आफ्नो परिवारको लागि वैदिक समारोहहरू गर्न आत्मविश्वास प्राप्त गर्न हाम्रो कर्मकाण्ड कक्षाहरूमा सामेल हुनुहोस्।',
                'karmakanda.cta.button': 'कर्मकाण्ड कक्षाहरूमा भर्ना हुनुहोस्',
                
                'karmakanda.footer.title': 'कर्मकाण्ड कक्षा डेस्क',
                'karmakanda.footer.desc': 'पाठ्यक्रम विवरण, तालिका, शुल्क, र हाम्रो अनुष्ठान प्रशिक्षण कार्यक्रमहरूको बारेमा कुनै पनि अन्य प्रश्नहरूको लागि हामीलाई सम्पर्क गर्नुहोस्।',
                'karmakanda.footer.phone': 'कक्षा डेस्क: +९१-XXXXXX-XXXX',
                'karmakanda.footer.email': 'karmakanda@vedicservices.com',
                'karmakanda.footer.hours': 'उपलब्ध ९ बजे - ७ बजे',
                'karmakanda.footer.copyright': '© २०२३ वैदिक सेवाहरू। कर्मकाण्ड प्रशिक्षण विभाग। सर्वाधिकार सुरक्षित।',
                
                // ===== KRIYA PUTRI BHAWAN PAGE (NEPALI) =====
                'kriyaPutri.logo': '🕉️ मन्दिर सेवाहरू',
                'kriyaPutri.about': 'बारेमा',
                'kriyaPutri.contact': 'सम्पर्क',
                'kriyaPutri.subtitle': 'परम्परागत वैदिक समारोह र अनुष्ठानको लागि पवित्र स्थान',
                
                'kriyaPutri.about.title': 'क्रिया पुत्री भवनको बारेमा',
                'kriyaPutri.about.desc1': 'क्रिया पुत्री भवन परम्परागत वैदिक समारोह, पूजा, हवन, र विभिन्न संस्कारहरू गर्न समर्पित एक पवित्र र विशेष रूपमा डिजाइन गरिएको स्थान हो। हाम्रो भवनले यसको भित्ता भित्र गरिएका सबै अनुष्ठानहरूको आध्यात्मिक प्रभावकारिता बढाउने शान्त, शुद्ध वातावरण प्रदान गर्दछ।',
                'kriyaPutri.about.desc2': 'वास्तु शास्त्र सिद्धान्त अनुसार निर्मित र उचित वैदिक अनुष्ठानहरूसँग अभिषेक गरिएको, क्रिया पुत्री भवनले भक्तहरूलाई महत्वपूर्ण जीवन समारोह, धार्मिक अवलोकन, र आध्यात्मिक अभ्यासहरू सञ्चालन गर्नको लागि एक प्रामाणिक सेटिङ प्रदान गर्दछ। यो स्थान उच्च पवित्रताका साथ मर्मत गरिएको छ र परिवार र समुदायहरूको लागि तिनीहरूको शुभ अवसरहरूको लागि बुकिंगको लागि उपलब्ध छ।',
                
                'kriyaPutri.features.title': 'सुविधाहरू',
                
                'kriyaPutri.included.title': 'बुकिंगमा के समावेश छ',
                'kriyaPutri.ceremonies.title': 'क्रिया पुत्री भवनको लागि उपयुक्त समारोहहरू',
                'kriyaPutri.howToBook.title': 'क्रिया पुत्री भवन कसरी बुक गर्ने',
                
                'kriyaPutri.priestServices.title': '💡 पुरोहित सेवाहरू उपलब्ध',
                'kriyaPutri.priestServices.desc': 'तपाईंको समारोहको लागि अनुभवी पुरोहित चाहिन्छ? हामी सबै परम्परागत अनुष्ठानहरूमा निपुण योग्य वैदिक पुरोहितहरूको व्यवस्था गर्न सक्छौं। पुरोहित सेवाहरू भवन बुकिंगसँग छुट्टै वा प्याकेजको भागको रूपमा बुक गर्न सकिन्छ।',
                
                'kriyaPutri.guidelines.title': '⚠️ बुकिंग दिशानिर्देशहरू',
                
                'kriyaPutri.whyChoose.title': 'हाम्रो क्रिया पुत्री भवन किन रोज्ने?',
                
                'kriyaPutri.testimonials.title': 'प्रशंसापत्र',
                
                'kriyaPutri.cta.title': 'क्रिया पुत्री भवन बुक गर्न तयार हुनुहुन्छ?',
                'kriyaPutri.cta.subtitle': 'आफ्नो पवित्र समारोहको लागि आफ्नो मनपर्ने मिति र समय आरक्षित गर्नुहोस्',
                
                'kriyaPutri.footer.copyright': '© २०२४ मन्दिर सेवाहरू। सर्वाधिकार सुरक्षित।',
                'kriyaPutri.footer.contact': 'हामीलाई सम्पर्क गर्नुहोस्: info@templeservices.com | फोन: +९७७-XXX-XXXX',
                
                // ===== ONLINE PUJA PAGE (NEPALI) =====
                'onlinePuja.about.title': 'यस सेवाको बारेमा',
                'onlinePuja.about.desc': 'हाम्रो अनलाइन पूजा बुकिंग सेवाले तपाईंलाई संसारको जुनसुकै स्थानबाट आफ्नो घरको आराममा पवित्र वैदिक अनुष्ठानहरू गर्न अनुमति दिन्छ। हाम्रा अनुभवी र योग्य पुरोहितहरूले उचित वैदिक मन्त्र र अनुष्ठानहरूसँग प्रामाणिक समारोहहरू सञ्चालन गर्छन्।',
                'onlinePuja.included.title': 'के समावेश छ',
                'onlinePuja.popular.title': 'लोकप्रिय पूजाहरू उपलब्ध',
                'onlinePuja.howItWorks.title': 'यसले कसरी काम गर्दछ',
                'onlinePuja.whyChoose.title': 'हाम्रो अनलाइन पूजा सेवा किन रोज्ने?',
                
                // ===== PILGRIMAGE SERVICES PAGE (NEPALI) =====
                'pilgrimage.subtitle': 'विशेषज्ञ मार्गदर्शन, पूर्ण व्यवस्था, र आध्यात्मिक पूर्तिको साथ पवित्र स्थलहरूको यात्रामा लाग्नुहोस्।',
                'pilgrimage.nav.destinations': 'गन्तव्यहरू',
                'pilgrimage.nav.services': 'सेवाहरू',
                'pilgrimage.nav.routes': 'लोकप्रिय मार्गहरू',
                'pilgrimage.nav.process': 'प्रक्रिया',
                
                'pilgrimage.intro.title': 'पवित्र गन्तव्यहरूमा आध्यात्मिक यात्रा',
                'pilgrimage.intro.desc1': 'तीर्थयात्रा भनेको पवित्र स्थानको यात्रा मात्र होइन, तर एक परिवर्तनकारी आध्यात्मिक अनुभव हो जसले आत्मालाई शुद्ध बनाउँछ, इच्छाहरू पूरा गर्दछ, र व्यक्तिलाई दिव्यको नजिक ल्याउँछ। हाम्रो तीर्थयात्रा सेवाहरूले तपाईंको पवित्र यात्रालाई आरामदायक, अर्थपूर्ण, र आध्यात्मिक रूपमा समृद्ध बनाउन सुनिश्चित गर्दछ।',
                'pilgrimage.intro.desc2': 'हामी सबै व्यवस्था ह्यान्डल गर्छौं - यात्रा, आवास, अनुष्ठान, पुरोहित सेवाहरू, र मार्गदर्शन - ताकि तपाईं पूर्ण रूपमा आफ्नो आध्यात्मिक अनुभवमा केन्द्रित हुन सक्नुहुन्छ।',
                
                'pilgrimage.specialOffer.title': 'विशेष तीर्थयात्रा प्याकेज',
                'pilgrimage.specialOffer.desc': 'अर्को पूर्णिमा अघि कुनै पनि तीर्थयात्रा प्याकेज बुक गर्नुहोस् र सुरक्षित यात्रा र आध्यात्मिक तयारीको लागि प्रस्थान अघि आफ्नो घरमा नि:शुल्क रुद्राभिषेक पूजा प्राप्त गर्नुहोस्।',
                
                'pilgrimage.destinations.title': 'पवित्र गन्तव्य प्याकेजहरू',
                
                'pilgrimage.services.title': 'सबै प्याकेजहरूमा समावेश सेवाहरू',
                'pilgrimage.routes.title': 'लोकप्रिय तीर्थयात्रा मार्गहरू',
                'pilgrimage.process.title': 'हाम्रो तीर्थयात्रा योजना प्रक्रिया',
                
                'pilgrimage.cta.title': 'आज आफ्नो पवित्र यात्रा सुरु गर्नुहोस्',
                'pilgrimage.cta.desc': 'विशेषज्ञ मार्गदर्शन, पूर्ण व्यवस्था, र आध्यात्मिक पूर्तिको साथ तीर्थयात्राको परिवर्तनकारी शक्ति अनुभव गर्नुहोस्। तपाईंको आध्यात्मिक यात्रामा केन्द्रित हुन दिनुहोस् जब हामी रसद ह्यान्डल गर्छौं।',
                'pilgrimage.cta.button': 'आफ्नो तीर्थयात्रा योजना बनाउनुहोस्',
                
                'pilgrimage.footer.title': 'तीर्थयात्रा सेवा डेस्क',
                'pilgrimage.footer.desc': 'अनुकूलित तीर्थयात्रा योजना, समूह छुट, र विशेष आवश्यकताहरूको लागि हामीलाई सम्पर्क गर्नुहोस्।',
                'pilgrimage.footer.phone': 'तीर्थयात्रा डेस्क: +९१-XXXXXX-XXXX',
                'pilgrimage.footer.email': 'pilgrimage@vedicservices.com',
                'pilgrimage.footer.hours': 'उपलब्ध ७ बजे - ९ बजे',
                'pilgrimage.footer.copyright': '© २०२३ वैदिक सेवाहरू। तीर्थयात्रा विभाग। सर्वाधिकार सुरक्षित।',
                
                // ===== PRIEST SERVICES PAGE (NEPALI) =====
                'priestServices.subtitle': 'व्यक्तिगत अनुष्ठान, समारोह, र आध्यात्मिक मार्गदर्शनको लागि अनुभवी वैदिक पुरोहितहरू भाडामा लिनुहोस्।',
                'priestServices.nav.features': 'विशेषताहरू',
                'priestServices.nav.priests': 'हाम्रा पुरोहितहरू',
                'priestServices.nav.process': 'प्रक्रिया',
                'priestServices.nav.contact': 'सम्पर्क',
                
                'priestServices.intro.title': 'परम्परागत वैदिक पुरोहित सेवाहरू',
                'priestServices.intro.desc1': 'हाम्रो पुरोहित सेवाहरूले तपाईंलाई जानकार, अनुभवी वैदिक पुरोहितहरूसँग जोड्दछ जसले प्राचीन शास्त्र र परम्परा अनुसार विभिन्न प्रकारका अनुष्ठान र समारोहहरू गर्न सक्छन्। चाहे तपाईंलाई दैनिक पूजा, विशेष अवसर, वा विशिष्ट संस्कारहरूको लागि पुरोहित चाहिन्छ, हामी प्रामाणिक, व्यक्तिगत सेवाहरू प्रदान गर्दछौं।',
                'priestServices.intro.desc2': 'हाम्रा सबै पुरोहितहरू वैदिक मन्त्र, अनुष्ठान, र प्रक्रियाहरूमा निपुण छन्। तिनीहरूले तपाईंलाई प्रत्येक चरणमा मार्गदर्शन गर्छन्, समारोह सही र पूर्ण आध्यात्मिक महत्त्वका साथ गरिएको सुनिश्चित गर्दै।',
                
                'priestServices.features.home.title': 'गृह समारोह',
                'priestServices.features.lifecycle.title': 'जीवनचक्र अनुष्ठान',
                'priestServices.features.festival.title': 'पर्व र विशेष पूजाहरू',
                
                'priestServices.priests.title': 'उपलब्ध पुरोहितका प्रकारहरू',
                
                'priestServices.priests.senior.title': 'वरिष्ठ वैदिक पुरोहितहरू',
                'priestServices.priests.senior.desc': '२०+ वर्षको अभ्यास भएका अत्यधिक अनुभवी पुरोहितहरू, जटिल अनुष्ठान र संस्कारहरूमा विशेषज्ञता।',
                'priestServices.priests.ritual.title': 'अनुष्ठान विशेषज्ञहरू',
                'priestServices.priests.ritual.desc': 'विवाह, हवन, वा गृह प्रवेश जस्ता विशिष्ट समारोहहरूमा विशेषज्ञता भएका पुरोहितहरू पूर्ण सेटअपको साथ।',
                'priestServices.priests.daily.title': 'दैनिक पूजाका लागि पण्डितहरू',
                'priestServices.priests.daily.desc': 'घर वा कार्यालयमा नियमित दैनिक वा साप्ताहिक पूजाको लागि उपलब्ध, मन्त्र जप र आरती सहित।',
                'priestServices.priests.online.title': 'अनलाइन परामर्श पुरोहितहरू',
                'priestServices.priests.online.desc': 'भर्चुअल मार्गदर्शन, मन्त्र शिक्षण, र भौतिक उपस्थिति सम्भव नभएको बेला टाढाको अनुष्ठान पर्यवेक्षणको लागि उपलब्ध।',
                
                'priestServices.process.title': 'यसले कसरी काम गर्दछ',
                
                'priestServices.cta.title': 'आज एक अनुभवी पुरोहित बुक गर्नुहोस्',
                'priestServices.cta.desc': 'आफ्नो आध्यात्मिक आवश्यकताहरूको लागि प्रामाणिक वैदिक पुरोहितहरूसँग जडान गर्नुहोस्। चाहे यो एक साधारण दैनिक पूजा हो वा एक विस्तृत समारोह, हामी परम्परागत शुद्धता र हार्दिक भक्ति सुनिश्चित गर्दछौं।',
                'priestServices.cta.button': 'अहिले पुरोहित बुक गर्नुहोस्',
                
                'priestServices.footer.title': 'सही पुरोहित छनौट गर्न मद्दत चाहिन्छ?',
                'priestServices.footer.desc': 'तपाईंको विशिष्ट समारोहको लागि उत्तम पुरोहित चयन गर्न व्यक्तिगत सहायताको लागि हामीलाई सम्पर्क गर्नुहोस्।',
                'priestServices.footer.phone': '+९१-XXXXXX-XXXX',
                'priestServices.footer.email': 'priest@vedicservices.com',
                'priestServices.footer.hours': 'उपलब्ध ८ बजे - ८ बजे',
                'priestServices.footer.copyright': '© २०२३ वैदिक सेवाहरू। सर्वाधिकार सुरक्षित।',
                
                // ===== PRODUCTS PAGE (NEPALI) =====
                'products.title': 'हाम्रा उत्पादनहरू',
                'products.subtitle': 'प्रामाणिक पूजा सामग्री, आध्यात्मिक वस्तुहरू, र शुद्धता र हेरचाहको साथ तयार अनुष्ठान आवश्यक वस्तुहरू।',
                'products.nav.products': 'उत्पादनहरू',
                'products.nav.categories': 'श्रेणीहरू',
                'products.nav.order': 'अर्डर',
                
                'products.intro.title': 'शुद्ध र परम्परागत उत्पादनहरू',
                'products.intro.desc1': 'हाम्रा उत्पादनहरू परम्परागत मापदण्ड अनुसार चयन र तयार गरिन्छ, शुद्धता, प्रामाणिकता, र आध्यात्मिक महत्त्व सुनिश्चित गर्दै।',
                'products.intro.desc2': 'दैनिक पूजा, विशेष अनुष्ठान, मन्दिर, र पर्वहरूको लागि आदर्श।',
                
                'products.featured.title': 'विशेष उत्पादनहरू',
                'products.button.order': 'अर्डर',
                
                'products.cta.title': 'प्रामाणिक पूजा उत्पादनहरू अर्डर गर्नुहोस्',
                'products.cta.desc': 'हेरचाह र भक्तिको साथ वितरित प्रामाणिक आध्यात्मिक वस्तुहरू प्राप्त गर्नुहोस्।',
                'products.cta.button': 'व्हाट्सएप मार्फत अर्डर',
                
                'products.footer.copyright': '© २०२३ वैदिक सेवाहरू | उत्पादन र सामग्री',
                'products.footer.contact': 'सम्पर्क: +९७७-९८६०३३६७७७',
                
                // ===== PUJA ITEMS PACKAGE PAGE (NEPALI) =====
                'pujaItems.subtitle': 'सबै अनुष्ठान र समारोहहरूको लागि शास्त्र अनुसार तयार गरिएको पूर्ण पूजा सामग्री प्याकेजहरू।',
                'pujaItems.nav.packages': 'प्याकेजहरू',
                'pujaItems.nav.includes': 'समावेश',
                'pujaItems.nav.booking': 'बुकिंग',
                
                'pujaItems.intro.title': 'एउटा प्याकेज, कुनै तनाव',
                'pujaItems.intro.desc1': 'हामी पूर्ण पूजा वस्तु प्याकेजहरू प्रदान गर्दछौं ताकि तपाईं धेरै स्थानहरूबाट सामग्री सङ्कलन गर्न चिन्ता नगर्नुहोस्।',
                'pujaItems.intro.desc2': 'सबै वस्तुहरू पूजाको प्रकार अनुसार व्यवस्थित गरिन्छ, अनुभवी ब्राह्मण र परम्परागत ग्रन्थहरूद्वारा निर्देशित।',
                
                'pujaItems.packages.title': 'हाम्रा पूजा वस्तु प्याकेजहरू',
                'pujaItems.button.enquire': 'बुझ्नुहोस्',
                
                'pujaItems.cta.title': 'आज आफ्नो पूजा वस्तु प्याकेज बुक गर्नुहोस्',
                'pujaItems.cta.desc': 'समय बचत गर्नुहोस् र आफ्नो पूजा पूर्ण भक्ति र मानसिक शान्तिको साथ गर्नुहोस्।',
                'pujaItems.cta.button': 'बुकिंगको लागि सम्पर्क गर्नुहोस्',
                
                'pujaItems.footer.copyright': '© २०२३ वैदिक सेवाहरू | पूजा वस्तु र सामग्री',
                'pujaItems.footer.contact': 'सम्पर्क: +९१-XXXXXX-XXXX | puja@vedicservices.com'
            }
        };

        // ========== LANGUAGE MANAGEMENT ==========
        let currentLang = localStorage.getItem('preferred-language') || 'en';
        
        // Function to get nested translation
        function getTranslation(key) {
            if (!key) return '';
            return translations[currentLang] && translations[currentLang][key] ? translations[currentLang][key] : key;
        }

        // Function to translate all elements
        function translatePage(lang) {
            console.log('Translating to:', lang);
            currentLang = lang;
            
            // Translate all elements with data-i18n
            document.querySelectorAll('[data-i18n]').forEach(element => {
                const key = element.getAttribute('data-i18n');
                const translation = getTranslation(key);
                if (translation) {
                    element.textContent = translation;
                }
            });
            
            // Translate placeholder attributes
            document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
                const key = element.getAttribute('data-i18n-placeholder');
                const translation = getTranslation(key);
                if (translation) {
                    element.placeholder = translation;
                }
            });
            
            // Translate title attributes
            document.querySelectorAll('[data-i18n-title]').forEach(element => {
                const key = element.getAttribute('data-i18n-title');
                const translation = getTranslation(key);
                if (translation) {
                    element.title = translation;
                }
            });
            
            // Translate value attributes
            document.querySelectorAll('[data-i18n-value]').forEach(element => {
                const key = element.getAttribute('data-i18n-value');
                const translation = getTranslation(key);
                if (translation) {
                    element.value = translation;
                }
            });
            
            // Update active language in dropdown
            document.querySelectorAll('.floating-lang-option').forEach(option => {
                const optionLang = option.getAttribute('data-lang');
                if (optionLang === lang) {
                    option.classList.add('active');
                } else {
                    option.classList.remove('active');
                }
            });
            
            // Update button text
            const langLabel = document.querySelector('.floating-lang-btn .lang-label');
            if (langLabel) {
                const activeOption = Array.from(document.querySelectorAll('.floating-lang-option')).find(
                    opt => opt.getAttribute('data-lang') === lang
                );
                if (activeOption) {
                    const textSpan = activeOption.querySelector('.floating-lang-text');
                    if (textSpan) {
                        langLabel.textContent = textSpan.textContent;
                    }
                }
            }
            
            // Save to localStorage
            localStorage.setItem('preferred-language', lang);
        }

        // ========== SETUP LANGUAGE SWITCHER ==========
        const langToggle = document.getElementById('floatingLangToggle');
        const langOptions = document.getElementById('floatingLangOptions');
        
        if (langToggle && langOptions) {
            // Initial translation
            translatePage(currentLang);
            
            // Toggle dropdown
            langToggle.addEventListener('click', function(e) {
                e.stopPropagation();
                e.preventDefault();
                langOptions.classList.toggle('show');
            });
            
            // Handle language selection
            document.querySelectorAll('.floating-lang-option').forEach(option => {
                option.addEventListener('click', function(e) {
                    e.stopPropagation();
                    const lang = this.getAttribute('data-lang');
                    if (lang) {
                        translatePage(lang);
                        langOptions.classList.remove('show');
                    }
                });
            });
            
            // Close dropdown when clicking outside
            document.addEventListener('click', function(e) {
                if (!langToggle.contains(e.target) && !langOptions.contains(e.target)) {
                    langOptions.classList.remove('show');
                }
            });
        }

        // ========== MOBILE MENU ==========
        const mobileMenu = document.getElementById('mobile-menu');
        const navbarMenu = document.querySelector('.navbar__menu');
        
        if (mobileMenu && navbarMenu) {
            mobileMenu.addEventListener('click', function(e) {
                e.stopPropagation();
                this.classList.toggle('active');
                navbarMenu.classList.toggle('active');
                
                if (navbarMenu.classList.contains('active')) {
                    document.body.style.overflow = 'hidden';
                } else {
                    document.body.style.overflow = '';
                }
            });

            document.querySelectorAll('.navbar__links').forEach(link => {
                link.addEventListener('click', function() {
                    mobileMenu.classList.remove('active');
                    navbarMenu.classList.remove('active');
                    document.body.style.overflow = '';
                });
            });
        }
    });
})();