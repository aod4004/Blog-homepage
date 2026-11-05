(function () {
  // 메뉴 열기·닫기 (모바일)
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

  // 글 목록
  const grid = document.getElementById('post-grid');
  const filters = document.querySelector('.filters');
  const posts = [...POSTS].sort((a, b) => b.date.localeCompare(a.date));
  const categories = ['전체', ...new Set(posts.map(p => p.category))];

  function formatDate(d) {
    const [y, m, day] = d.split('-');
    return `${y}. ${Number(m)}. ${Number(day)}.`;
  }

  function render(cat) {
    const list = cat === '전체' ? posts : posts.filter(p => p.category === cat);
    grid.innerHTML = list.length ? '' : '<p class="empty">아직 등록된 글이 없습니다.</p>';
    list.forEach(p => {
      const el = document.createElement(p.link ? 'a' : 'article');
      el.className = 'post';
      if (p.link) { el.href = p.link; el.target = '_blank'; el.rel = 'noopener'; }
      el.innerHTML = `
        <span class="tag tag-${p.category}">${p.category}</span>
        <h3></h3>
        <p></p>
        <time datetime="${p.date}">${formatDate(p.date)}</time>`;
      el.querySelector('h3').textContent = p.title;
      el.querySelector('p').textContent = p.summary;
      grid.appendChild(el);
    });
  }

  categories.forEach((c, i) => {
    const b = document.createElement('button');
    b.textContent = c;
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
