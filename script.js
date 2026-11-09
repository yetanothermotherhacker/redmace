// Matrix rain effect with binary (0s and 1s)
const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

// Set canvas size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Characters to display (binary)
const binary = '01';

// Convert to array
const characters = binary.split('');

const fontSize = 14;
const columns = canvas.width / fontSize;

// Array of drops - one per column
const drops = [];

// Initialize drops
for (let x = 0; x < columns; x++) {
    drops[x] = Math.random() * -100;
}

// Drawing the characters
function draw() {
    // Semi-transparent black to create fade effect
    ctx.fillStyle = 'rgba(10, 13, 20, 0.08)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#e5002b';
    ctx.font = fontSize + 'px monospace';

    // Loop over drops
    for (let i = 0; i < drops.length; i++) {
        // Random character
        const text = characters[Math.floor(Math.random() * characters.length)];

        // Draw the character
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Send the drop back to the top randomly after it has crossed the screen
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }

        // Increment Y coordinate
        drops[i]++;
    }
}

// Animation loop
setInterval(draw, 35);

// Resize canvas on window resize
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ── i18n: language switching (RU / EN / ES) ──
const translations = {
    ru: {
        'tagline': '// Информационная безопасность',
        'nav.about': 'О команде',
        'nav.team': 'Специалисты',
        'nav.clients': 'Клиенты',
        'nav.cases': 'Кейсы',
        'nav.services': 'Услуги',
        'nav.contact': 'Контакты',
        'about.label': 'О команде',
        'about.p1': 'RedMace — команда профессионалов, оказывающая полный спектр услуг по информационной безопасности.',
        'about.p2': 'За плечами команды множество успешно завершённых проектов в самых разных отраслях: финтех, промышленность, IT, e-commerce и других.',
        'about.p3': 'Большой опыт работы с платежными решениями: процессинг, криптобиржи, обменники, Telegram-кошельки и другие финтех-продукты. Понимаем специфику финансовых потоков, антифрод-механик и требований к защите платежных данных.',
        'about.p4': 'Помогаем создавать безопасные продукты и находить уязвимости.',
        'team.label': 'Специалисты',
        'team.intro': 'Все специалисты уровня Senior с опытом работы в крупных компаниях по информационной безопасности. Регулярно находим и регистрируем собственные уязвимости (CVE).',
        'role.ciso': 'Директор по информационной безопасности',
        'role.pentest': 'Сетевой пентестер',
        'role.web': 'Пентестер веб-приложений',
        'role.mobile': 'Пентестер мобильных приложений',
        'role.appsec': 'Инженер по безопасности приложений',
        'role.dev': 'Разработчик',
        'role.malware': 'Аналитик вредоносного ПО',
        'role.admin': 'Системный администратор',
        'role.classified': 'и другие засекреченные участники...',
        'clients.label': 'Клиенты',
        'clients.intro': 'К нам обращаются:',
        'clients.finance': 'Финансовые организации',
        'clients.it': 'IT-компании',
        'clients.ecom': 'E-commerce',
        'clients.tech': 'Технологический бизнес',
        'cases.label': 'Кейсы',
        'cases.intro': 'Избранные результаты проектов. Детали обезличены в соответствии с условиями NDA.',
        'case1.title': 'Захват аккаунта на криптобирже',
        'case1.desc': 'В ходе аудита криптовалютной биржи выявлена цепочка уязвимостей, позволявшая выполнить полный захват аккаунта пользователя (ATO) и обход механизмов двухфакторной аутентификации. Продемонстрирован риск несанкционированного доступа к средствам и торговым операциям. Уязвимости закрыты до эксплуатации злоумышленниками.',
        'case1.tag': '// Критический риск',
        'case2.title': 'Проникновение во внутреннюю сеть золотодобывающей компании',
        'case2.desc': 'Через сценарий социальной инженерии получен первоначальный доступ во внутреннюю сеть золотодобывающей компании. Отработан полный путь атаки: целевой фишинг, закрепление, lateral movement и доступ к критичным бизнес-системам. По итогам усилены процессы обучения персонала и сегментация сети.',
        'case2.tag': '// Social Engineering',
        'case3.title': 'Захват Active Directory в лицензированном банке РФ',
        'case3.desc': 'В рамках внутреннего пентеста банка с лицензией ЦБ РФ достигнута полная компрометация домена Active Directory (Domain Admin). Выявлены пути повышения привилегий и слабые места конфигурации каталога. Предоставлены приоритизированные рекомендации по устранению и повышению устойчивости инфраструктуры.',
        'services.label': 'Услуги',
        'svc1.title': 'Пентест',
        'svc1.desc': 'Комплексное тестирование на проникновение инфраструктуры компании. Выявление уязвимостей на всех уровнях: сеть, приложения, сервисы, сотрудники. Детальный отчет с рекомендациями по устранению.',
        'svc2.title': 'Аудит защищенности веб и мобильных приложений',
        'svc2.desc': 'Глубокий анализ безопасности веб и мобильных приложений (iOS/Android). Проверка на OWASP Top 10, анализ бизнес-логики, тестирование API. Реверс-инжиниринг мобильных приложений.',
        'svc3.title': 'Атаки с применением социальной инженерии',
        'svc3.desc': 'Фишинговые кампании, целевые рассылки, vishing, pretexting. Тестирование осведомленности сотрудников о киберугрозах. Проверка процедур реагирования на подозрительные активности.',
        'svc4.title': 'Устранение последствий взлома',
        'svc4.desc': 'Реагирование на инциденты и восстановление после компрометации. Локализация атаки, поиск точки входа и закрепления злоумышленника, расследование и анализ скомпрометированных систем. Устранение уязвимостей и выработка мер, исключающих повторный взлом.',
        'svc5.title': 'Red Team',
        'svc5.desc': 'Моделирование реальных атак APT-группировок. Многоэтапные целевые атаки на инфраструктуру. Обход систем защиты, lateral movement, достижение критичных активов. Полная имитация действий продвинутых злоумышленников.',
        'svc6.title': 'Пентест внутренней сети компании',
        'svc6.desc': 'Тестирование безопасности внутренней корпоративной сети. Анализ сегментации, Active Directory, внутренних сервисов. Поиск путей повышения привилегий и lateral movement.',
        'svc7.title': 'Аудит исходного кода',
        'svc7.desc': 'Ручной и автоматизированный анализ исходного кода (SAST). Поиск уязвимостей на этапе разработки. Поддержка любых языков программирования. Рекомендации по secure coding.',
        'svc8.title': 'Экспертиза по информационной безопасности для разработчиков',
        'svc8.desc': 'Консультации по безопасной разработке. Code review с фокусом на security. Обучение разработчиков принципам Secure Development Lifecycle. Внедрение практик DevSecOps.',
        'svc9.title': 'Bug Bounty',
        'svc9.desc': 'Организация и проведение Bug Bounty программ. Привлечение сообщества исследователей для поиска уязвимостей. Управление процессом disclosure, триаж и верификация находок.',
        'svc10.title': 'DoS тестирование',
        'svc10.desc': 'Стресс-тестирование систем на устойчивость к DoS/DDoS атакам. Проверка rate limiting, защиты от флуда. Тестирование CDN и WAF конфигураций. Рекомендации по защите от отказа в обслуживании.',
        'contact.label': 'Контакты',
        'contact.status': 'Статус:',
        'footer.copy': '© 2026 RedMace Team | Все права защищены',
        'footer.note': '// Несанкционированный доступ запрещен и отслеживается',
    },
    en: {
        'tagline': '// Information Security',
        'nav.about': 'About',
        'nav.team': 'Team',
        'nav.clients': 'Clients',
        'nav.cases': 'Cases',
        'nav.services': 'Services',
        'nav.contact': 'Contact',
        'about.label': 'About',
        'about.p1': 'RedMace is a team of professionals providing the full range of information security services.',
        'about.p2': 'The team has a large portfolio of successfully completed projects across diverse industries: fintech, industrial, IT, e-commerce and more.',
        'about.p3': 'Extensive experience with payment solutions: processing, crypto exchanges, exchangers, Telegram wallets and other fintech products. We understand the specifics of financial flows, anti-fraud mechanics and payment data protection requirements.',
        'about.p4': 'We help build secure products and discover vulnerabilities.',
        'team.label': 'Team',
        'team.intro': 'All specialists are Senior-level with experience at major information security companies. We regularly find and register our own vulnerabilities (CVE).',
        'role.ciso': 'Chief Information Security Officer',
        'role.pentest': 'Network Pentester',
        'role.web': 'Web Pentester',
        'role.mobile': 'Mobile Pentester',
        'role.appsec': 'Application Security Engineer',
        'role.dev': 'Developer',
        'role.malware': 'Malware Analyst',
        'role.admin': 'System Administrator',
        'role.classified': 'and other secret members...',
        'clients.label': 'Clients',
        'clients.intro': 'Who comes to us:',
        'clients.finance': 'Financial organizations',
        'clients.it': 'IT companies',
        'clients.ecom': 'E-commerce',
        'clients.tech': 'Technology business',
        'cases.label': 'Cases',
        'cases.intro': 'Selected project results. Details are anonymized in accordance with NDA terms.',
        'case1.title': 'Account takeover on a crypto exchange',
        'case1.desc': 'During an audit of a cryptocurrency exchange, a chain of vulnerabilities was found that allowed full account takeover (ATO) and bypass of two-factor authentication. The risk of unauthorized access to funds and trading operations was demonstrated. The vulnerabilities were remediated before any malicious exploitation.',
        'case1.tag': '// Critical risk',
        'case2.title': 'Breaching the internal network of a gold-mining company',
        'case2.desc': 'Through a social engineering scenario, initial access to the internal network of a gold-mining company was obtained. The full attack path was executed: targeted phishing, persistence, lateral movement and access to critical business systems. As a result, staff training processes and network segmentation were strengthened.',
        'case2.tag': '// Social Engineering',
        'case3.title': 'Active Directory takeover in a licensed Russian bank',
        'case3.desc': 'During an internal penetration test of a bank licensed by the Central Bank of Russia, full compromise of the Active Directory domain (Domain Admin) was achieved. Privilege escalation paths and weak directory configuration points were identified. Prioritized remediation recommendations were provided to improve infrastructure resilience.',
        'services.label': 'Services',
        'svc1.title': 'Penetration Testing',
        'svc1.desc': 'Comprehensive penetration testing of company infrastructure. Identifying vulnerabilities at all levels: network, applications, services, employees. A detailed report with remediation recommendations.',
        'svc2.title': 'Web and mobile application security audit',
        'svc2.desc': 'In-depth security analysis of web and mobile applications (iOS/Android). OWASP Top 10 checks, business logic analysis, API testing. Reverse engineering of mobile applications.',
        'svc3.title': 'Social engineering attacks',
        'svc3.desc': 'Phishing campaigns, targeted mailings, vishing, pretexting. Testing employee awareness of cyber threats. Reviewing response procedures for suspicious activity.',
        'svc4.title': 'Breach remediation',
        'svc4.desc': 'Incident response and recovery after a compromise. Containing the attack, locating the entry point and attacker persistence, investigating and analyzing compromised systems. Remediating vulnerabilities and establishing measures to prevent re-compromise.',
        'svc5.title': 'Red Team',
        'svc5.desc': 'Simulation of real APT group attacks. Multi-stage targeted attacks on infrastructure. Bypassing defenses, lateral movement, reaching critical assets. Full imitation of advanced attackers.',
        'svc6.title': 'Internal network penetration testing',
        'svc6.desc': 'Security testing of the internal corporate network. Segmentation analysis, Active Directory, internal services. Searching for privilege escalation paths and lateral movement.',
        'svc7.title': 'Source code audit',
        'svc7.desc': 'Manual and automated source code analysis (SAST). Finding vulnerabilities at the development stage. Support for any programming language. Secure coding recommendations.',
        'svc8.title': 'Information security expertise for developers',
        'svc8.desc': 'Secure development consulting. Security-focused code review. Training developers in the Secure Development Lifecycle. Implementing DevSecOps practices.',
        'svc9.title': 'Bug Bounty',
        'svc9.desc': 'Organizing and running Bug Bounty programs. Engaging the researcher community to find vulnerabilities. Managing the disclosure process, triage and verification of findings.',
        'svc10.title': 'DoS Testing',
        'svc10.desc': 'Stress-testing systems for resilience to DoS/DDoS attacks. Checking rate limiting and flood protection. Testing CDN and WAF configurations. Recommendations for denial-of-service protection.',
        'contact.label': 'Contact',
        'contact.status': 'Status:',
        'footer.copy': '© 2026 RedMace Team | All rights reserved',
        'footer.note': '// Unauthorized access is prohibited and monitored',
    },
    es: {
        'tagline': '// Seguridad de la información',
        'nav.about': 'Equipo',
        'nav.team': 'Especialistas',
        'nav.clients': 'Clientes',
        'nav.cases': 'Casos',
        'nav.services': 'Servicios',
        'nav.contact': 'Contacto',
        'about.label': 'Equipo',
        'about.p1': 'RedMace es un equipo de profesionales que ofrece el espectro completo de servicios de seguridad de la información.',
        'about.p2': 'El equipo cuenta con un amplio portafolio de proyectos completados con éxito en sectores muy diversos: fintech, industria, TI, e-commerce y otros.',
        'about.p3': 'Amplia experiencia con soluciones de pago: procesamiento, exchanges de criptomonedas, casas de cambio, monederos de Telegram y otros productos fintech. Entendemos las particularidades de los flujos financieros, los mecanismos antifraude y los requisitos de protección de datos de pago.',
        'about.p4': 'Ayudamos a crear productos seguros y a encontrar vulnerabilidades.',
        'team.label': 'Especialistas',
        'team.intro': 'Todos los especialistas son de nivel Senior y cuentan con experiencia en grandes empresas de seguridad de la información. Encontramos y registramos regularmente nuestras propias vulnerabilidades (CVE).',
        'role.ciso': 'Director de Seguridad de la Información',
        'role.pentest': 'Pentester de redes',
        'role.web': 'Pentester web',
        'role.mobile': 'Pentester móvil',
        'role.appsec': 'Ingeniero de seguridad de aplicaciones',
        'role.dev': 'Desarrollador',
        'role.malware': 'Analista de malware',
        'role.admin': 'Administrador de sistemas',
        'role.classified': 'y otros miembros secretos...',
        'clients.label': 'Clientes',
        'clients.intro': 'Quiénes acuden a nosotros:',
        'clients.finance': 'Organizaciones financieras',
        'clients.it': 'Empresas de TI',
        'clients.ecom': 'E-commerce',
        'clients.tech': 'Negocio tecnológico',
        'cases.label': 'Casos',
        'cases.intro': 'Resultados destacados de proyectos. Los detalles están anonimizados conforme a los términos del NDA.',
        'case1.title': 'Toma de control de cuenta en un exchange de criptomonedas',
        'case1.desc': 'Durante la auditoría de un exchange de criptomonedas se detectó una cadena de vulnerabilidades que permitía la toma total de la cuenta del usuario (ATO) y el bypass de la autenticación de dos factores. Se demostró el riesgo de acceso no autorizado a los fondos y a las operaciones de trading. Las vulnerabilidades se corrigieron antes de ser explotadas por atacantes.',
        'case1.tag': '// Riesgo crítico',
        'case2.title': 'Intrusión en la red interna de una empresa minera de oro',
        'case2.desc': 'Mediante un escenario de ingeniería social se obtuvo acceso inicial a la red interna de una empresa minera de oro. Se ejecutó la ruta de ataque completa: phishing dirigido, persistencia, lateral movement y acceso a sistemas de negocio críticos. Como resultado se reforzaron los procesos de formación del personal y la segmentación de la red.',
        'case2.tag': '// Social Engineering',
        'case3.title': 'Toma de control de Active Directory en un banco ruso con licencia',
        'case3.desc': 'En una prueba de penetración interna de un banco con licencia del Banco Central de Rusia se logró el compromiso total del dominio de Active Directory (Domain Admin). Se identificaron rutas de escalada de privilegios y puntos débiles en la configuración del directorio. Se entregaron recomendaciones priorizadas para la corrección y el refuerzo de la resiliencia de la infraestructura.',
        'services.label': 'Servicios',
        'svc1.title': 'Pruebas de penetración',
        'svc1.desc': 'Pruebas de penetración integrales de la infraestructura de la empresa. Identificación de vulnerabilidades en todos los niveles: red, aplicaciones, servicios, empleados. Informe detallado con recomendaciones de remediación.',
        'svc2.title': 'Auditoría de seguridad de aplicaciones web y móviles',
        'svc2.desc': 'Análisis profundo de seguridad de aplicaciones web y móviles (iOS/Android). Comprobación del OWASP Top 10, análisis de lógica de negocio, pruebas de API. Ingeniería inversa de aplicaciones móviles.',
        'svc3.title': 'Ataques de ingeniería social',
        'svc3.desc': 'Campañas de phishing, envíos dirigidos, vishing, pretexting. Evaluación de la concienciación de los empleados sobre ciberamenazas. Revisión de los procedimientos de respuesta ante actividad sospechosa.',
        'svc4.title': 'Remediación tras una brecha',
        'svc4.desc': 'Respuesta a incidentes y recuperación tras un compromiso. Contención del ataque, localización del punto de entrada y de la persistencia del atacante, investigación y análisis de los sistemas comprometidos. Corrección de vulnerabilidades y definición de medidas para evitar un nuevo compromiso.',
        'svc5.title': 'Red Team',
        'svc5.desc': 'Simulación de ataques reales de grupos APT. Ataques dirigidos de varias etapas contra la infraestructura. Evasión de defensas, lateral movement, alcance de activos críticos. Imitación completa de atacantes avanzados.',
        'svc6.title': 'Pruebas de penetración de la red interna',
        'svc6.desc': 'Pruebas de seguridad de la red corporativa interna. Análisis de segmentación, Active Directory, servicios internos. Búsqueda de rutas de escalada de privilegios y lateral movement.',
        'svc7.title': 'Auditoría de código fuente',
        'svc7.desc': 'Análisis manual y automatizado del código fuente (SAST). Búsqueda de vulnerabilidades en la fase de desarrollo. Compatibilidad con cualquier lenguaje de programación. Recomendaciones de secure coding.',
        'svc8.title': 'Asesoría en seguridad de la información para desarrolladores',
        'svc8.desc': 'Consultoría de desarrollo seguro. Revisión de código con enfoque en seguridad. Formación de desarrolladores en el Secure Development Lifecycle. Implementación de prácticas DevSecOps.',
        'svc9.title': 'Bug Bounty',
        'svc9.desc': 'Organización y ejecución de programas de Bug Bounty. Participación de la comunidad de investigadores para encontrar vulnerabilidades. Gestión del proceso de disclosure, triaje y verificación de hallazgos.',
        'svc10.title': 'Pruebas de DoS',
        'svc10.desc': 'Pruebas de estrés de sistemas para evaluar su resistencia a ataques DoS/DDoS. Comprobación de rate limiting y protección contra flood. Pruebas de configuraciones de CDN y WAF. Recomendaciones de protección contra denegación de servicio.',
        'contact.label': 'Contacto',
        'contact.status': 'Estado:',
        'footer.copy': '© 2026 RedMace Team | Todos los derechos reservados',
        'footer.note': '// El acceso no autorizado está prohibido y es monitorizado',
    },
};

function setLanguage(lang) {
    if (!translations[lang]) lang = 'ru';
    const dict = translations[lang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key] !== undefined) {
            el.textContent = dict[key];
        }
    });
    document.documentElement.lang = lang;
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
    try { localStorage.setItem('redmace_lang', lang); } catch (e) {}
}

document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.getAttribute('data-lang')));
});

(function initLanguage() {
    let saved = null;
    try { saved = localStorage.getItem('redmace_lang'); } catch (e) {}
    const browser = (navigator.language || 'ru').slice(0, 2).toLowerCase();
    const lang = saved || (translations[browser] ? browser : 'ru');
    setLanguage(lang);
})();

// Add glitch effect to logo on hover
const logo = document.querySelector('.logo');
if (logo) {
    logo.addEventListener('mouseenter', function() {
        let glitchCount = 0;
        const glitchInterval = setInterval(() => {
            this.style.textShadow = `
                ${Math.random() * 10 - 5}px ${Math.random() * 10 - 5}px 10px #ff0055,
                ${Math.random() * 10 - 5}px ${Math.random() * 10 - 5}px 20px #ff0055
            `;
            glitchCount++;
            if (glitchCount > 5) {
                clearInterval(glitchInterval);
                this.style.textShadow = '0 0 10px #ff0055, 0 0 20px #ff0055';
            }
        }, 50);
    });
}
