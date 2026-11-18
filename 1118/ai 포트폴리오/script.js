
const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('nav');

// 모바일 메뉴
menuBtn.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// 메뉴 클릭 시 닫기
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
    });
});

// 스크롤 등장 애니메이션
const revealElements = document.querySelectorAll(
    '.section, .project-card, .hero-visual'
);

revealElements.forEach(element => {
    element.classList.add('reveal');
});

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.12
});

revealElements.forEach(element => {
    observer.observe(element);
});
