(function () {
  // 메뉴 열기·닫기 (휴대전화 화면)
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', false);
  }));

  const POINT_CATEGORY = '114동 한우리의 차별점';
  const posts = [...POSTS].sort((a, b) => b.date.localeCompare(a.date));
  const points = posts.filter(p => p.category === POINT_CATEGORY).reverse();
  const lessons = posts.filter(p => p.category !== POINT_CATEGORY);

  // "초등학교 1학년 수업" → "초등 1학년", "중학교 수업" → "중학교"
  const shortName = c => c.replace('초등학교', '초등').replace(/\s*수업$/, '');

  function formatDate(d) {
    const [y, m, day] = d.split('-');
    return `${y}. ${Number(m)}. ${Number(day)}.`;
  }

  function linkEl(p, cls) {
    const el = document.createElement('a');
    el.className = cls;
    el.href = p.link;
    el.target = '_blank';
    el.rel = 'noopener';
    return el;
  }

  // 첫 화면 책 표지
  const books = document.getElementById('hero-books');
  lessons.filter(p => p.thumb).slice(0, 3).forEach(p => {
    const img = new Image();
    img.src = p.thumb;
    img.alt = '';
    books.appendChild(img);
  });

  // 차별점
  const pointsList = document.getElementById('points-list');
  points.forEach((p, i) => {
    const el = linkEl(p, 'point');
    el.innerHTML = `<span class="point-num">${String(i + 1).padStart(2, '0')}</span><h3></h3><p></p><span class="point-more">자세히 보기 →</span>`;
    el.querySelector('h3').textContent = p.title.replace(/\.$/, '');
    el.querySelector('p').textContent = p.summary;
    pointsList.appendChild(el);
  });

  // 수업 이야기
  const grid = document.getElementById('post-grid');
  const filters = document.querySelector('.filters');
  // 초등 → 중학교 → 고등학교 순서로 정렬
  const rank = c => c.startsWith('초등') ? 0 : c.startsWith('중') ? 1 : c.startsWith('고') ? 2 : 3;
  const categories = ['전체', ...[...new Set(lessons.map(p => p.category))]
    .sort((a, b) => rank(a) - rank(b) || a.localeCompare(b, 'ko'))];

  function render(cat) {
    const list = cat === '전체' ? lessons : lessons.filter(p => p.category === cat);
    grid.innerHTML = '';
    list.forEach(p => {
      const el = linkEl(p, 'post');
      el.innerHTML = `
        <div class="post-thumb">${p.thumb ? `<img src="${p.thumb}" alt="" loading="lazy">` : ''}</div>
        <div class="post-body">
          <span class="tag">${shortName(p.category)}</span>
          <h3></h3>
          <p></p>
          <time datetime="${p.date}">${formatDate(p.date)}</time>
        </div>`;
      el.querySelector('h3').textContent = p.title;
      el.querySelector('p').textContent = p.summary;
      grid.appendChild(el);
    });
  }

  categories.forEach((c, i) => {
    const b = document.createElement('button');
    b.textContent = c === '전체' ? c : shortName(c);
    b.setAttribute('role', 'tab');
    b.setAttribute('aria-selected', i === 0);
    b.addEventListener('click', () => {
      filters.querySelectorAll('button').forEach(x => x.setAttribute('aria-selected', false));
      b.setAttribute('aria-selected', true);
      render(c);
    });
    filters.appendChild(b);
  });

  render('전체');
  document.getElementById('year').textContent = new Date().getFullYear();
})();
