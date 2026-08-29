const { animate, onScroll, utils , cubicBezier , createAnimatable , splitText, stagger , scrambleText , svg  } = anime ;

animate('.one-2-left', {
    x: '15rem',
    duration: 2000,
    alternate: true,
    ease: 'inOutQuad',
    autoplay: onScroll({
      container: '.scroll-container',
      sync: 1,
      enter: 'max bottom',
      leave: 'top bottom',
    })
  });

animate('.one-2-mid', {
    x: '5rem',
    duration: 2000,
    alternate: true,
    ease: 'inOutQuad',
    autoplay: onScroll({
      container: '.scroll-container',
      sync: 1,
      enter: 'max bottom',
      leave: 'top bottom',
    })
  });

animate('.one-2-right', {
    x: '-15rem',
    duration: 2000,
    alternate: true,
    ease: 'inOutQuad',
    autoplay: onScroll({
      container: '.scroll-container',
      sync: 1,
      enter: 'max bottom',
      leave: 'top bottom-=100',
    })
  });

animate('.two-right-top-card-1', {
    scale: [0.2, 1],
    duration: 2000,
    alternate: true,
    ease: cubicBezier(0, 0.401,0,0.998),
    autoplay: onScroll({
      container: '.scroll-container',
      sync: 1,
      enter: 'bottom top',
      leave: 'center top-=150',
    })
  });

animate('.two-right-top-card-2', {
    scale: [0.2, 1],
    duration: 2000,
    alternate: true,
    ease: cubicBezier(0, 0.01,0,0.998),
    autoplay: onScroll({
      container: '.scroll-container',
      sync: 1,
      enter: 'bottom top',
      leave: 'center top',
    })
  });

animate('.two-right-bottom-card-1', {
    scale: [0.2, 1],
    duration: 2000,
    alternate: true,
    ease: cubicBezier(0, 0.01,0,0.998),
    autoplay: onScroll({
      container: '.scroll-container',
      sync: 1,
      enter: 'bottom top',
      leave: 'center top',
    })
  });

animate('.two-right-bottom-card-2', {
    scale: [0.2, 1],
    duration: 2000,
    alternate: true,
    ease: 'inOutQuad',
    autoplay: onScroll({
      container: '.scroll-container',
      sync: 1,
      enter: 'bottom top',
      leave: 'center top-=150',
    })
  });

const projectsHeader = document.querySelector('.four-1');
const cards = Array.from(document.querySelectorAll('.four-2-card'));

if (projectsHeader) {
    Object.assign(projectsHeader.style, {
        position: 'sticky',
        top: '0px',
        zIndex: '1000',
        backgroundColor: '#000'
    });
}

cards.forEach((card, index) => {
    const wrapper = document.createElement('div');
    wrapper.style.height = `${card.offsetHeight}px`;
    wrapper.style.marginBottom = '0px';
    wrapper.style.position = 'relative';
    wrapper.style.zIndex = index + 1;

    card.parentNode.insertBefore(wrapper, card);
    wrapper.appendChild(card);
    card.style.zIndex = index + 1;
});

function updateCards() {
    const stickyTop = (projectsHeader?.offsetHeight || 0) - 20;

    cards.forEach((card) => {
        const wrapper = card.parentElement;
        const rect = wrapper.getBoundingClientRect();
        const isSticky = rect.top <= stickyTop;

        Object.assign(card.style, {
            position: isSticky ? 'fixed' : 'relative',
            top: isSticky ? `${stickyTop}px` : '0px',
            left: isSticky ? `${rect.left}px` : '0px',
            width: isSticky ? `${rect.width}px` : '100%'
        });
    });
}

window.addEventListener('scroll', () => requestAnimationFrame(updateCards));
window.addEventListener('resize', updateCards);

const fourCards = document.querySelectorAll(".four-2-card");
fourCards.forEach((card) => {
  animate(card, {
    opacity: [1, 0.6],
    scale: [1, 0.85],
    duration: 2000,
    alternate: true,
    ease: 'inOutQuad',
    autoplay: onScroll({
      container: '.scroll-container',
      sync: 1,
      enter: 'top top',
      leave: 'top bottom',
    })
  });
});

const fourCardImg = document.querySelectorAll(".four-2-card-left");
fourCardImg.forEach((card) => {
  animate(card, {
    scale: [0.4, 1],
    duration: 2000,
    alternate: true,
    ease: 'inOutQuad',
    autoplay: onScroll({
      container: '.scroll-container',
      sync: 1,
      enter: 'bottom top',
      leave: 'center+=200 bottom',
    })
  });
});

const testimonials = [
    {
        quote: '" Rapid language learner recognized by my Japanese instructor for exceptional aptitude, sharp analytical thinking, and fast retention in advanced coursework. "',
        img: './person-photos/woman-teacher.jpg',
        name: 'Maru Yama',
        detail: 'Japanese teacher - Fukuoka University'
    },
    {
        quote: '" Recognized by my programming tutor for exceptional problem-solving, fast retention, and strong analytical aptitude in software development. "',
        img: './person-photos/man-teacher.jpg', 
        name: 'Miura',
        detail: 'Program Tutor - Fukuoka University'
    },
    {
        quote: '" The go-to problem solver in class: razor-sharp logic, insanely fast at picking up new tech, and always building high-caliber solutions. "',
        img: './person-photos/boy.jpg',
        name: 'Sit Naing',
        detail: 'Male Friend - Fukuoka University'
    },
    {
        quote: '" A brilliant mind in code—combines sharp analytical logic with effortless creativity to construct rock-solid system architectures. "',
        img: './person-photos/girl.jpg',
        name: 'Aye Thida Moe',
        detail: 'Female Friend - Fukuoka University'
    }
];

let currentIndex = 0;

const quoteEl = document.querySelector('.six-mid-top');
const imgEl = document.querySelector('.smb-img img');
const nameEl = document.querySelector('.smb-name');
const detailEl = document.querySelector('.smb-detail');

const leftBtn = document.querySelector('.six-2-left');
const rightBtn = document.querySelector('.six-2-right');

function updateTestimonial(index) {
    const data = testimonials[index];
    quoteEl.textContent = data.quote;
    imgEl.src = data.img;
    nameEl.textContent = data.name;
    detailEl.textContent = data.detail;

    splitText('.six-mid-top', {
    lines: { wrap: 'clip' },
    })
    .addEffect(({ lines }) => animate(lines, {
    y: [
    { to: ['100%', '0%'] },
    { to: '0%', delay: 750, ease: 'in(3)' }
    ],
    duration: 2000,
    ease: 'out(3.5)',
    delay: stagger(0),
    loopDelay: 500,
    }));

    splitText('.smb-name', {
    lines: { wrap: 'clip' },
    })
    .addEffect(({ lines }) => animate(lines, {
    y: [
    { to: ['100%', '0%'] },
    { to: '0%', delay: 750, ease: 'in(3)' }
    ],
    duration: 2000,
    ease: 'out(3.5)',
    delay: stagger(0),
    loopDelay: 500,
    }));

    splitText('.smb-detail', {
    lines: { wrap: 'clip' },
    })
    .addEffect(({ lines }) => animate(lines, {
    y: [
    { to: ['100%', '0%'] },
    { to: '0%', delay: 750, ease: 'in(3)' }
    ],
    duration: 2000,
    ease: 'out(3.5)',
    delay: stagger(0),
    loopDelay: 500,
    }));

    animate('.smb-img', {
    opacity: [0, 1],
    duration: 2000,
    alternate: true,
    ease: 'out(3.5)',
  });

}

leftBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    updateTestimonial(currentIndex);
});

rightBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % testimonials.length;
    updateTestimonial(currentIndex);
});

updateTestimonial(currentIndex);

const lines = document.querySelectorAll(".seven-text");

lines.forEach((line) => {

  animate(line, {
  innerHTML: scrambleText(),
  autoplay: onScroll({
      container: '.scroll-container',
      sync: 1,
      enter: 'bottom top',
      leave: 'center+=200 bottom',
    })
});

})

animate(svg.createDrawable('.line'), {
  draw: ['0 0', '0 1', '1 1'],
  ease: 'inOutQuad',
  duration: 3000,
  delay: stagger(100),
  loop: true,
});