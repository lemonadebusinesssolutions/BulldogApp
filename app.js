console.log("app.js loaded!");

document.addEventListener('click', function(e) {
    console.log("Clicked element:", e.target);
});

// Bulldog Gym App - SPA Navigation and Main Logic
const pages = {};
const translations = {
    en: {
        home: {
            welcome: "Welcome to Bulldog Gym, Las Chafiras!",
            tagline: "Stronger. Fitter. Together.",
            cta: "Join us today!",
            location: "Location:",
            offerTitle: "Special Offer:",
            offerText: "1 Month Free Membership!",
            website: "Visit Official Website"
        },
        nav: {
            home: "Home",
            booking: "Book a Class",
            membership: "Membership",
            progress: "Progress",
            announcements: "News",
            gallery: "Gallery",
            faq: "FAQ",
            contact: "Contact",
            team: "Meet the Team",
            extras: "Extra Services",
            timetable: "Timetable",
            about: "About",
            reviews: "Feedback & Reviews",
            guestpass: "Guest Pass & Referral"
        },
        membership: {
            title: "Membership Options",
            offerTitle: "Experience Your First Session Free!",
            offerText: "Start your fitness journey at Bulldog Gym with a complimentary first session, including a personal induction by one of our expert trainers.",
            guidanceTitle: "Expert Guidance for New Members:",
            guidanceText: "Our dedicated fitness trainers will personally guide you through the proper use of all our equipment, ensuring you feel confident and prepared to make the most of your workout.",
            mainMemberships: "Main Memberships",
            adults: "Adults",
            day: "1 Day",
            week: "1 Week",
            twoWeeks: "2 Weeks",
            monthly: "Monthly",
            teens: "14 - 18 Years",
            family: "Friends & Family",
            friend: "Friend Membership (2 People)",
            family3: "Family Membership (3 People)",
            family4: "Family Membership (4 People)",
            monthlyFee: "Monthly Fee",
            yearly: "Yearly Membership",
            annualFee: "Annual Fee",
            askReception: "Ask at reception",
            status: "Status:",
            renew: "Renew Membership",
            plan: "Plan:",
            nextBilling: "Next Billing Date:"
        },
        team: {
            title: "Meet the Team",
            owner: "Owner / Manager",
            trainer: "Gym Floor Monitor / Personal Trainer",
            craig: "I'm Craig. I have been involved in health and fitness for over 20 years, having competed in several bodybuilding competitions in the past. I have extensive knowledge in physical training and nutrition. I am also a qualified mental health professional. I look forward to welcoming everyone to my gym.",
            carlo: "Hi, I'm Carlo, a gym floor monitor, certified personal trainer, and supplement consultant. I have been in the fitness world for ten years and decided to turn my passion into my profession, so I am now dedicated to helping people achieve their goals regardless of their age or experience level. I'm Italian and I also speak Spanish and English.",
            sara: "I'm Sara, and I've been a certified personal trainer by IFBB and FEFF since 2019. Passionate about fitness, nutrition, and general well-being, I am fluent in Italian, English, and Spanish. The wonderful Bulldog staff and I will be delighted to welcome you to the gym and make you feel comfortable. Come and join this great family!",
            giorgia: "Hi! My name is Giorgia. I am a qualified personal trainer. I have several years of experience in fitness, bodybuilding, nutrition, and general well-being. I am passionate about and experienced in kickboxing and boxing. I speak Italian, Spanish, and English. The fantastic Bulldog Gym team and I will be happy to advise and help you every step of the way. No excuses! Join our wonderful family!"
        },
        extras: {
            title: "Extra Services",
            powerwaveTitle: "Powerwave by Lisa Mac",
            powerwaveDesc: "It's never too late to start training. Powerwave by Lisa Mac is at Bulldog Gym in Las Chafiras. Classes are Monday to Friday at 9am and 9.30am. 20 minutes is all it takes. All ages, all abilities, everybody welcome. Book your place today 💪💕💪",
            powerwave1: "20-minute full body workout",
            powerwave2: "€6 a class, €50/month unlimited, or 12 classes for the price of 10",
            powerwave3: "First class is FREE",
            powerwave4: "Monday–Friday: 9am, 9.30am, 10am, 10.30am; Saturday: 11am",
            powerwave5: "Contact: 634 31 73 26",
            pilatesTitle: "Sonya’s Pilates Studio",
            pilatesDesc: "Offering a variety of Pilates sessions throughout the week for all fitness levels. Experience relaxation, improved posture, and reduced stress.",
            pilatesContact: "Contact: 637 044 855",
            aerialTitle: "Aerial Gymnastics by Mirlo Danza Aérea",
            aerialDesc: "Classes in aerial silks, hoop, straps, and handstands. Suitable for all levels—train differently, get stronger, and have fun! Join the circus family 🎪",
            aerial1: "DM: @mirlodanzaaerea",
            aerial2: "WhatsApp: 660 63 72 61",
            osteoTitle: "Osteopath Services (Pietro)",
            osteoDesc: "Specialist in limb problems, geriatrics, pediatrics, and sports injuries. Located at Bulldog Gym.",
            osteoContact: "Contact: 722 48 4180",
            osteoWebsite: "Website:",
            caroleTitle: "Carole Morgan Counselling",
            caroleDesc: "Individual and couples counselling, clinical supervision, and menopause coaching. Fully qualified and accredited. Confidential, safe, and supportive.",
            carolePhone: "Call/WhatsApp: 00 34 624 614654",
            caroleEmail: "Email: carolemorgancounselling@outlook.com",
            caroleFB: "Facebook: Carole Morgan Counselling ES"
        },
        timetable: {
            title: "Weekly Timetable",
            time: "Time",
            mon: "Mon",
            tue: "Tue",
            wed: "Wed",
            thu: "Thu",
            fri: "Fri",
            sat: "Sat",
            sun: "Sun",
            pilates: "Pilates:",
            powerwave: "Powerwave:",
            aerial: "Aerial Gymnastics:"
        },
        progress: {
            title: "Your Progress",
            classesBooked: "Classes Booked",
            uniqueSessions: "Unique Sessions",
            bestStreak: "Best Streak",
            days: "days",
            attendance: "Class Attendance",
            noAttendance: "No classes attended yet."
        },
        booking: {
            title: "Book a Class",
            days: {
                mon: "Monday",
                tue: "Tuesday",
                wed: "Wednesday",
                thu: "Thursday",
                fri: "Friday",
                sat: "Saturday",
                sun: "Sunday"
            },
            noClasses: "No classes",
            yourBookings: "Your Bookings",
            noBookings: "No bookings yet.",
            cancel: "Cancel"
        },
        announcements: {
            title: "News & Announcements"
        },
        gallery: {
            title: "Gallery"
        },
        faq: {
            title: "Frequently Asked Questions",
            questions: {
                q1: "What are your opening hours?",
                q2: "How do I book a class?",
                q3: "What is your membership policy?"
            },
            answers: {
                a1: "Our opening hours are Monday to Friday from 7am to 10pm, and Saturday from 9am to 6pm.",
                a2: "You can book a class by clicking on the 'Book a Class' button on our website, or by contacting us directly.",
                a3: "Our membership policy is available on our website. Please contact us for more information."
            }
        },
        contact: {
            title: "Contact & Location",
            address: "Address:",
            phone: "Phone:",
            whatsapp: "WhatsApp:",
            email: "Email:",
            website: "Website:"
        },
        // ...more translations
    },
    es: {
        home: {
            welcome: "¡Bienvenido a Bulldog Gym, Las Chafiras!",
            tagline: "Más fuerte. Más en forma. Juntos.",
            cta: "¡Únete hoy!",
            location: "Ubicación:",
            offerTitle: "Oferta Especial:",
            offerText: "¡1 Mes de Membresía Gratis!",
            website: "Visita Nuestro Sitio Web Oficial"
        },
        nav: {
            home: "Inicio",
            booking: "Reservar Clase",
            membership: "Membresía",
            progress: "Progreso",
            announcements: "Noticias",
            gallery: "Galería",
            faq: "FAQ",
            contact: "Contacto",
            team: "Equipo",
            extras: "Servicios Extra",
            timetable: "Horario",
            about: "Acerca de",
            reviews: "Comentarios y Reseñas",
            guestpass: "Pase de Invitado & Referidos"
        },
        membership: {
            title: "Opciones de Membresía",
            offerTitle: "¡Experimenta Tu Primera Sesión Gratis!",
            offerText: "Comienza tu viaje de fitness en Bulldog Gym con una sesión gratuita, incluyendo una inducción personalizada por uno de nuestros entrenadores expertos.",
            guidanceTitle: "Guía de Expertos para Nuevos Miembros:",
            guidanceText: "Nuestros entrenadores dedicados te guiarán personalmente a través del uso adecuado de todo nuestro equipo, asegurándote de que te sientas seguro y preparado para aprovechar al máximo tu entrenamiento.",
            mainMemberships: "Membresías Principales",
            adults: "Adultos",
            day: "1 Día",
            week: "1 Semana",
            twoWeeks: "2 Semanas",
            monthly: "Mensual",
            teens: "14 - 18 Años",
            family: "Amigos y Familia",
            friend: "Membresía de Amigo (2 Personas)",
            family3: "Membresía de Familia (3 Personas)",
            family4: "Membresía de Familia (4 Personas)",
            monthlyFee: "Cuota Mensual",
            yearly: "Membresía Anual",
            annualFee: "Cuota Anual",
            askReception: "Pregúntale a la Recepción",
            status: "Estado:",
            renew: "Renovar Membresía",
            plan: "Plan:",
            nextBilling: "Próxima Fecha de Cobro:"
        },
        team: {
            title: "Conoce a Nuestro Equipo",
            owner: "Propietario / Gerente",
            trainer: "Monitor de Piso de Gimnasio / Entrenador Personal",
            craig: "Soy Craig. He estado involucrado en salud y fitness durante más de 20 años, habiendo competido en varias competiciones de culturismo en el pasado. Tengo conocimientos extensos en entrenamiento físico y nutrición. También soy un profesional de la salud mental calificado. Estoy emocionado de dar la bienvenida a todos a mi gimnasio.",
            carlo: "Hola, soy Carlo, un monitor de piso de gimnasio, entrenador personal certificado y consultor de suplementos. He estado en el mundo del fitness durante diez años y decidí convertir mi pasión en mi profesión, así que ahora estoy dedicado a ayudar a las personas a alcanzar sus objetivos sin importar su edad o nivel de experiencia. Soy italiano y también hablo español e inglés.",
            sara: "Soy Sara, y he sido entrenadora personal certificada por IFBB y FEFF desde 2019. Apasionada del fitness, la nutrición y el bienestar general, soy fluida en italiano, inglés y español. El equipo de Bulldog y yo estaremos encantados de darte la bienvenida al gimnasio y hacerte sentir cómodo. ¡Únete a esta gran familia!",
            giorgia: "¡Hola! Mi nombre es Giorgia. Soy una entrenadora personal calificada. Tengo varios años de experiencia en fitness, culturismo, nutrición y bienestar general. Estoy apasionada y experimentada en kickboxing y boxeo. Hablo italiano, español e inglés. El equipo de Bulldog Gym y yo estaremos felices de asesorarte y ayudarte en cada paso del camino. ¡No hay excusas! ¡Únete a nuestra maravillosa familia!"
        },
        extras: {
            title: "Servicios Extra",
            powerwaveTitle: "Powerwave por Lisa Mac",
            powerwaveDesc: "Nunca es demasiado tarde para empezar a entrenar. Powerwave por Lisa Mac está en Bulldog Gym en Las Chafiras. Las clases son de lunes a viernes a las 9am y 9.30am. 20 minutos es todo lo que necesitas. Todas las edades, todos los niveles, todos bienvenidos. ¡Reserva tu lugar hoy! 💪💕💪",
            powerwave1: "Entrenamiento de cuerpo completo de 20 minutos",
            powerwave2: "€6 por clase, €50/mes ilimitado, o 12 clases por el precio de 10",
            powerwave3: "La primera clase es GRATIS",
            powerwave4: "Lunes–viernes: 9am, 9.30am, 10am, 10.30am; sábado: 11am",
            powerwave5: "Contacto: 634 31 73 26",
            pilatesTitle: "Estudio de Pilates de Sonya",
            pilatesDesc: "Ofrecemos una variedad de sesiones de Pilates a lo largo de la semana para todos los niveles de fitness. Experimenta relajación, mejora de la postura y reducción del estrés.",
            pilatesContact: "Contacto: 637 044 855",
            aerialTitle: "Gimnasia Aérea por Mirlo Danza Aérea",
            aerialDesc: "Clases de telas aéreas, aro, correas y paradas de manos. Adecuado para todos los niveles—entrena de manera diferente, hazte más fuerte y diviértete. ¡Únete a la familia del circo! 🎪",
            aerial1: "DM: @mirlodanzaaerea",
            aerial2: "WhatsApp: 660 63 72 61",
            osteoTitle: "Servicios de Osteopatía (Pietro)",
            osteoDesc: "Especialista en problemas de extremidades, geriatría, pediatría y lesiones deportivas. Ubicado en Bulldog Gym.",
            osteoContact: "Contacto: 722 48 4180",
            osteoWebsite: "Sitio web:",
            caroleTitle: "Asesoramiento de Carole Morgan",
            caroleDesc: "Asesoramiento individual y de parejas, supervisión clínica y coaching de menopausia. Totalmente calificado y acreditado. Confidencial, seguro y de apoyo.",
            carolePhone: "Llamar/WhatsApp: 00 34 624 614654",
            caroleEmail: "Correo electrónico: carolemorgancounselling@outlook.com",
            caroleFB: "Facebook: Carole Morgan Counselling ES"
        },
        timetable: {
            title: "Horario Semanal",
            time: "Hora",
            mon: "Lun",
            tue: "Mar",
            wed: "Mié",
            thu: "Jue",
            fri: "Vie",
            sat: "Sáb",
            sun: "Dom",
            pilates: "Pilates:",
            powerwave: "Powerwave:",
            aerial: "Gimnasia Aérea:"
        },
        progress: {
            title: "Tu Progreso",
            classesBooked: "Clases Reservadas",
            uniqueSessions: "Sesiones Únicas",
            bestStreak: "Mejor Racha",
            days: "días",
            attendance: "Asistencia a Clases",
            noAttendance: "No has asistido a clases todavía."
        },
        booking: {
            title: "Reservar Clase",
            days: {
                mon: "Lunes",
                tue: "Martes",
                wed: "Miércoles",
                thu: "Jueves",
                fri: "Viernes",
                sat: "Sábado",
                sun: "Domingo"
            },
            noClasses: "No hay clases",
            yourBookings: "Tus Reservas",
            noBookings: "No tienes reservas todavía.",
            cancel: "Cancelar"
        },
        announcements: {
            title: "Noticias y Anuncios"
        },
        gallery: {
            title: "Galería"
        },
        faq: {
            title: "Preguntas Frecuentes",
            questions: {
                q1: "¿Cuáles son tus horarios de apertura?",
                q2: "¿Cómo reservo una clase?",
                q3: "¿Cuál es tu política de membresía?"
            },
            answers: {
                a1: "Nuestros horarios de apertura son de lunes a viernes de 7am a 10pm, y sábado de 9am a 6pm.",
                a2: "Puedes reservar una clase haciendo clic en el botón 'Reservar Clase' en nuestro sitio web, o contactándonos directamente.",
                a3: "Nuestra política de membresía está disponible en nuestro sitio web. Por favor, contáctanos para más información."
            }
        },
        contact: {
            title: "Contacto y Ubicación",
            address: "Dirección:",
            phone: "Teléfono:",
            whatsapp: "WhatsApp:",
            email: "Correo electrónico:",
            website: "Sitio web:"
        },
        // ...more translations
    }
};
let currentLang = localStorage.getItem('bulldog_lang') || 'en';

const pageHandlers = {};

function setLanguage(l) {
    currentLang = l;
    localStorage.setItem('bulldog_lang', l);
    renderNav();
    renderPage(currentPage);
}

function attachNavListeners() {
    console.log("Attaching nav listeners...");
    document.querySelectorAll('.nav-btn').forEach(btn => {
        console.log("Found nav button:", btn.getAttribute('data-page'));
        btn.onclick = null; // Remove any previous handler
        btn.addEventListener('click', e => {
            console.log("Nav button clicked:", btn.getAttribute('data-page'));
            const page = btn.getAttribute('data-page');
            navigate(page);
        });
    });
}

function renderNav() {
    // Update nav text for selected language
    document.querySelectorAll('.nav-btn').forEach(btn => {
        const page = btn.getAttribute('data-page');
        btn.textContent = translations[currentLang].nav[page] || page;
    });
    attachNavListeners();
}

document.addEventListener('DOMContentLoaded', () => {
    // Navigation
    renderNav();
    navigate('home');
    document.getElementById('lang-select').addEventListener('change', e => {
        setLanguage(e.target.value);
    });
    document.getElementById('mode-toggle').addEventListener('click', toggleMode);

    // Hamburger menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('open');
        });
    }
});

let currentPage = 'home';
function navigate(page) {
    currentPage = page;
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-page') === page);
    });
    renderPage(page);
}

function renderPage(page) {
    console.log("Rendering page:", page, "Has handler:", typeof pages[page]);
    if (pages[page]) {
        document.getElementById('main-content').innerHTML = pages[page]();
        if (pageHandlers[page]) pageHandlers[page]();
    } else {
        document.getElementById('main-content').innerHTML = "<h2>Page not found</h2>";
    }
}

function toggleMode() {
    const dark = document.body.classList.toggle('light-mode');
    document.getElementById('mode-toggle').textContent = dark ? '☀️' : '🌙';
    localStorage.setItem('bulldog_mode', document.body.classList.contains('light-mode') ? 'light' : 'dark');
}
// Set mode on load
if (localStorage.getItem('bulldog_mode') === 'light') {
    document.body.classList.add('light-mode');
    document.addEventListener('DOMContentLoaded', () => {
        document.getElementById('mode-toggle').textContent = '☀️';
    });
}

// --- Realistic demo content for Bulldog Gym ---
const classSchedule = [
  { day: 'Monday', class: 'HIIT', time: '7:00 AM', trainer: 'Jess Carter' },
  { day: 'Tuesday', class: 'Yoga', time: '6:00 PM', trainer: 'Miguel Rivera' },
  { day: 'Wednesday', class: 'Spin', time: '7:00 AM', trainer: 'Sam Lee' },
  { day: 'Thursday', class: 'Boxing', time: '6:30 PM', trainer: 'Tina Fox' },
  { day: 'Friday', class: 'Pilates', time: '7:00 AM', trainer: 'Jess Carter' },
  { day: 'Saturday', class: 'Bootcamp', time: '10:00 AM', trainer: 'Sam Lee' },
  { day: 'Sunday', class: 'Rest Day', time: '-', trainer: '-' }
];

const announcements = [
  { title: 'New Class!', date: '2025-04-20', message: 'We are launching a new Zumba class every Thursday at 5:30 PM!' },
  { title: 'Holiday Hours', date: '2025-04-10', message: 'We will be closed on May 1st for the bank holiday.' }
];

const galleryImages = [
  { src: 'gallery1.jpg', caption: 'State-of-the-art equipment' },
  { src: 'gallery2.jpg', caption: 'Group HIIT class' },
  { src: 'gallery3.jpg', caption: 'Yoga studio' },
  { src: 'gallery4.jpg', caption: 'Personal training in action' }
];

const faqs = [
  { q: 'How do I join Bulldog Gym?', a: 'You can join by visiting our Membership page and signing up online, or in person at our front desk.' },
  { q: 'What are your opening hours?', a: 'We are open 6:00 AM to 10:00 PM on weekdays, and 8:00 AM to 6:00 PM on weekends.' },
  { q: 'Do you offer personal training?', a: 'Yes! Our certified trainers are available for personal and group sessions.' },
  { q: 'Is there parking available?', a: 'Yes, we have free parking for all members.' }
];

// --- Restore and translate Home page ---
pages.home = function() {
    return `
        <section class="home-section">
            <img src="assets/logo.png" alt="Bulldog Gym Logo" class="home-logo">
            <h1>${translations[currentLang]?.home?.welcome || 'Welcome to Bulldog Gym, Las Chafiras!'}</h1>
            <p class="tagline">${translations[currentLang]?.home?.tagline || 'Stronger. Fitter. Together.'}</p>
            <p class="location"><strong>${translations[currentLang]?.home?.location || 'Location:'}</strong> Calle Caracas, Las Chafiras, Tenerife</p>
            <p class="offer"><strong>${translations[currentLang]?.home?.offerTitle || 'Special Offer:'}</strong> ${translations[currentLang]?.home?.offerText || '1 Month Free Membership!'}</p>
            <a href="https://www.bulldoggym.fitness/" class="website-link" target="_blank">${translations[currentLang]?.home?.website || 'Visit Official Website'}</a>
            <button class="cta-btn">${translations[currentLang]?.home?.cta || 'Join us today!'}</button>
            <div class="home-social">
                <a href="https://instagram.com/bulldoggymtenerife" target="_blank">Instagram</a>
                <a href="https://facebook.com/bulldoggymtenerife" target="_blank">Facebook</a>
            </div>
        </section>
    `;
};

// --- BOOKING PAGE ---
pages.booking = function() {
    return `
        <section class="booking-section">
            <h2>${translations[currentLang]?.booking?.title || 'Book a Class'}</h2>
            <table class="timetable-table">
                <thead><tr><th>${translations[currentLang]?.timetable?.day || 'Day'}</th><th>${translations[currentLang]?.timetable?.class || 'Class'}</th><th>${translations[currentLang]?.timetable?.time || 'Time'}</th><th>${translations[currentLang]?.timetable?.trainer || 'Trainer'}</th></tr></thead>
                <tbody>
                    ${classSchedule.map(cls => `<tr><td>${cls.day}</td><td>${cls.class}</td><td>${cls.time}</td><td>${cls.trainer}</td></tr>`).join('')}
                </tbody>
            </table>
            <p>${translations[currentLang]?.booking?.howToBook || 'To book a class, visit the gym reception, call 634 01 73 26, or message us on WhatsApp.'}</p>
        </section>
    `;
};

// --- MEMBERSHIP PAGE ---
pages.membership = function() {
    const status = getMembershipStatus();
    const plan = getMembershipPlan();
    const nextBilling = getNextBillingDate();
    return `
        <section class="membership-section">
            <h2>${translations[currentLang]?.membership?.title || 'Membership Options'}</h2>
            <div class="membership-table">
                <h3>${translations[currentLang]?.membership?.mainMemberships || 'Main Memberships'}</h3>
                <ul>
                    <li><strong>${translations[currentLang]?.membership?.adults || 'Adults'}</strong></li>
                    <ul>
                        <li>${translations[currentLang]?.membership?.day || '1 Day'}: €10</li>
                        <li>${translations[currentLang]?.membership?.week || '1 Week'}: €15</li>
                        <li>${translations[currentLang]?.membership?.twoWeeks || '2 Weeks'}: €25</li>
                        <li>${translations[currentLang]?.membership?.monthly || 'Monthly'}: €40</li>
                    </ul>
                    <li><strong>${translations[currentLang]?.membership?.teens || '14 - 18 Years'}</strong></li>
                    <ul>
                        <li>${translations[currentLang]?.membership?.monthly || 'Monthly'}: €30</li>
                    </ul>
                </ul>
                <h3>${translations[currentLang]?.membership?.family || 'Friends & Family'}</h3>
                <ul>
                    <li>${translations[currentLang]?.membership?.friend || 'Friend Membership (2 People)'}: €70</li>
                    <li>${translations[currentLang]?.membership?.family3 || 'Family Membership (3 People)'}: €90</li>
                    <li>${translations[currentLang]?.membership?.family4 || 'Family Membership (4 People)'}: €100</li>
                </ul>
                <h3>${translations[currentLang]?.membership?.yearly || 'Yearly Membership'}</h3>
                <ul>
                    <li>${translations[currentLang]?.membership?.annualFee || 'Annual Fee'}: <em>${translations[currentLang]?.membership?.askReception || 'Ask at reception'}</em></li>
                </ul>
            </div>
            <div class="membership-status">
                <span>${translations[currentLang]?.membership?.status || 'Status:'} <strong>${status}</strong></span>
                ${status === 'Expired' ? `<button id="renew-btn">${translations[currentLang]?.membership?.renew || 'Renew Membership'}</button>` : ''}
            </div>
            <div class="membership-info">
                <p><strong>${translations[currentLang]?.membership?.plan || 'Plan:'}</strong> ${plan}</p>
                <p><strong>${translations[currentLang]?.membership?.nextBilling || 'Next Billing Date:'}</strong> ${nextBilling}</p>
            </div>
        </section>
    `;
};

// --- PROGRESS PAGE ---
pages.progress = function() {
    const stats = getAttendanceStats();
    return `
        <section class="progress-section">
            <h2>${translations[currentLang]?.progress?.title || 'Your Progress'}</h2>
            <div class="progress-cards">
                <div class="progress-card"><h3>${translations[currentLang]?.progress?.totalVisits || 'Total Visits'}</h3><div class="progress-num">${stats.total ?? 12}</div></div>
                <div class="progress-card"><h3>${translations[currentLang]?.progress?.uniqueDays || 'Unique Days'}</h3><div class="progress-num">${stats.uniqueDays ?? 8}</div></div>
                <div class="progress-card"><h3>${translations[currentLang]?.progress?.streak || 'Longest Streak'}</h3><div class="progress-num">${stats.streak ?? 5}</div></div>
            </div>
            <h3>${translations[currentLang]?.progress?.classesAttended || 'Classes Attended'}</h3>
            <ul>
                ${Object.keys(stats.classCounts ?? {HIIT: 3, Yoga: 2, Spin: 2}).map(cls => `<li>${cls}: ${stats.classCounts?.[cls] ?? 1} ${translations[currentLang]?.progress?.times || 'times'}</li>`).join('')}
            </ul>
        </section>
    `;
};

// --- ANNOUNCEMENTS PAGE ---
pages.announcements = function() {
    return `
        <section class="announcements-section">
            <h2>${translations[currentLang]?.announcements?.title || 'Latest Announcements'}</h2>
            <ul class="announcements-list">
                <li class="announcement-card"><h3>New Zumba Class</h3><div class="announcement-date">2025-04-20</div><p>We are launching a new Zumba class every Thursday at 5:30 PM!</p></li>
                <li class="announcement-card"><h3>Holiday Hours</h3><div class="announcement-date">2025-05-01</div><p>We will be closed on May 1st for the bank holiday.</p></li>
                <li class="announcement-card"><h3>Refer a Friend</h3><div class="announcement-date">2025-04-10</div><p>Refer a friend and both receive a free protein shake!</p></li>
            </ul>
        </section>
    `;
};

// --- GALLERY PAGE ---
pages.gallery = function() {
    return `
        <section class="gallery-section">
            <h2>${translations[currentLang]?.gallery?.title || 'Gallery'}</h2>
            <div class="gallery-grid">
                <div class="gallery-item"><img src="gallery1.jpg" alt="Equipment"><div class="gallery-caption">State-of-the-art equipment</div></div>
                <div class="gallery-item"><img src="gallery2.jpg" alt="HIIT Class"><div class="gallery-caption">Group HIIT class</div></div>
                <div class="gallery-item"><img src="gallery3.jpg" alt="Yoga Studio"><div class="gallery-caption">Yoga studio</div></div>
                <div class="gallery-item"><img src="gallery4.jpg" alt="Personal Training"><div class="gallery-caption">Personal training in action</div></div>
            </div>
        </section>
    `;
};

// --- FAQ PAGE ---
pages.faq = function() {
    return `
        <section class="faq-section">
            <h2>${translations[currentLang]?.faq?.title || 'Frequently Asked Questions'}</h2>
            <ul class="faq-list">
                <li class="faq-item"><button class="faq-q">What are your opening hours?</button><div class="faq-a">Monday to Friday: 7am - 10pm<br>Saturday: 9am - 6pm<br>Sunday: Closed</div></li>
                <li class="faq-item"><button class="faq-q">How do I book a class?</button><div class="faq-a">Book at reception, by phone (634 01 73 26), or WhatsApp.</div></li>
                <li class="faq-item"><button class="faq-q">Do you offer personal training?</button><div class="faq-a">Yes! Ask at reception for details and pricing.</div></li>
                <li class="faq-item"><button class="faq-q">Is there parking available?</button><div class="faq-a">Yes, free parking for all members.</div></li>
            </ul>
        </section>
    `;
};

// --- TEAM PAGE ---
pages.team = function() {
    return `
        <section class="team-section">
            <h2>${translations[currentLang]?.team?.title || 'Meet the Team'}</h2>
            <div class="team-list">
                <div class="team-member"><img class="team-photo" src="assets/craig.jpg" alt="Craig Owen"><h3>Craig Owen</h3><p>Owner / Manager. 20+ years in health & fitness, bodybuilding, nutrition, and mental health. Welcomes everyone!</p></div>
                <div class="team-member"><img class="team-photo" src="assets/carlo.jpg" alt="Carlo"><h3>Carlo</h3><p>Gym Floor Monitor & Personal Trainer. 10 years experience, speaks Italian, Spanish, and English.</p></div>
                <div class="team-member"><img class="team-photo" src="assets/sara.jpg" alt="Sara"><h3>Sara</h3><p>Certified Personal Trainer (IFBB/FEFF), passionate about fitness and well-being. Speaks Italian, English, and Spanish.</p></div>
                <div class="team-member"><img class="team-photo" src="assets/giorgia.jpg" alt="Giorgia"><h3>Giorgia</h3><p>Qualified personal trainer, experienced in fitness, bodybuilding, nutrition, and boxing. Speaks Italian, Spanish, and English.</p></div>
            </div>
        </section>
    `;
};

// --- EXTRAS PAGE ---
pages.extras = function() {
    return `
        <section class="extras-section">
            <h2>${translations[currentLang]?.extras?.title || 'Extra Services'}</h2>
            <ul class="extras-list">
                <li class="extra-service"><h3>Powerwave by Lisa Mac</h3><ul><li>20-minute full body workout</li><li>€6 a class, €50/month unlimited, or 12 classes for the price of 10</li><li>First class is FREE</li><li>Contact: 634 31 73 26</li></ul></li>
                <li class="extra-service"><h3>Pilates Studio</h3><ul><li>All levels welcome</li><li>Contact: 637 044 855</li></ul></li>
                <li class="extra-service"><h3>Aerial Gymnastics by Mirlo Danza Aérea</h3><ul><li>Silks, hoop, straps, handstands</li><li>DM: @mirlodanzaaerea</li></ul></li>
                <li class="extra-service"><h3>Osteopath Services (Pietro)</h3><ul><li>Specialist in sports injuries, geriatrics, pediatrics</li><li>Contact: 722 48 4180</li><li>Website: <a href="https://osteoplb.com" target="_blank">osteoplb.com</a></li></ul></li>
                <li class="extra-service"><h3>Carole Morgan Counselling</h3><ul><li>Individual and couples counselling</li><li>Call/WhatsApp: 00 34 624 614654</li></ul></li>
            </ul>
        </section>
    `;
};

// --- TIMETABLE PAGE ---
pages.timetable = function() {
    return `
        <section class="timetable-section">
            <h2>${translations[currentLang]?.timetable?.title || 'Weekly Timetable'}</h2>
            <table class="timetable-table">
                <thead><tr><th>${translations[currentLang]?.timetable?.day || 'Day'}</th><th>${translations[currentLang]?.timetable?.class || 'Class'}</th><th>${translations[currentLang]?.timetable?.time || 'Time'}</th><th>${translations[currentLang]?.timetable?.trainer || 'Trainer'}</th></tr></thead>
                <tbody>
                    <tr><td>Monday</td><td>HIIT</td><td>7:00 AM</td><td>Jess Carter</td></tr>
                    <tr><td>Tuesday</td><td>Yoga</td><td>6:00 PM</td><td>Miguel Rivera</td></tr>
                    <tr><td>Wednesday</td><td>Spin</td><td>7:00 AM</td><td>Sam Lee</td></tr>
                    <tr><td>Thursday</td><td>Boxing</td><td>6:30 PM</td><td>Tina Fox</td></tr>
                    <tr><td>Friday</td><td>Pilates</td><td>7:00 AM</td><td>Jess Carter</td></tr>
                    <tr><td>Saturday</td><td>Bootcamp</td><td>10:00 AM</td><td>Sam Lee</td></tr>
                    <tr><td>Sunday</td><td>Rest Day</td><td>-</td><td>-</td></tr>
                </tbody>
            </table>
        </section>
    `;
};

// --- ABOUT PAGE ---
pages.about = function() {
    return `
        <section class="about-section">
            <h2>${translations[currentLang]?.about?.title || 'About Bulldog Gym'}</h2>
            <p>Bulldog Gym is a modern, friendly fitness center in Las Chafiras, Tenerife. We offer a wide range of classes, top equipment, expert trainers, and a welcoming community for all fitness levels. Join us to achieve your health and fitness goals!</p>
        </section>
    `;
};

// --- Placeholders to prevent ReferenceErrors ---
const getMembershipPlan = () => 'Standard';
function getAttendanceStats() { return {total: 0, uniqueDays: 0, streak: 0, classCounts: {}}; }
function getBookings() { return []; }
function getMembershipStatus() { return 'Active'; }
const getNextBillingDate = () => new Date().toLocaleDateString();

// ... rest of the code remains the same ...
