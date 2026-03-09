// set to true if you want the browser's mail client (mailto:) instead of Netlify submission
const USE_MAILTO = false;

document.addEventListener('DOMContentLoaded', function () {
  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('mainNav');
  const hamburger = navToggle;
  const yearSpan = document.getElementById('year');

  // set current year in footer
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();

  // Toggle mobile nav
  if (navToggle) {
    navToggle.addEventListener('click', function () {
      const expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', String(!expanded));
      hamburger.classList.toggle('open');
      mainNav.classList.toggle('open');
    });
  }

  // Close mobile nav when clicking a link (nice UX)
  if (mainNav) {
    mainNav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        if (mainNav.classList.contains('open')) {
          mainNav.classList.remove('open');
          hamburger.classList.remove('open');
          navToggle.setAttribute('aria-expanded', 'false');
        }
      });
    });
  }

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      // allow plain # links to behave normally if no target id
      if (href === '#' || href === '#/') return;
      const targetId = href.slice(1);
      const target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // -------------------------
  // Feedback form handling
  // -------------------------
  const feedbackForm = document.getElementById('feedbackForm');

  if (feedbackForm) {
    feedbackForm.addEventListener('submit', function (ev) {
      ev.preventDefault(); // we'll handle submit

      // gather values
      const checked = feedbackForm.querySelector('input[name="rating"]:checked');
      const rating = checked ? checked.value : '';
      const commentEl = feedbackForm.querySelector('#comment');
      const comment = commentEl ? commentEl.value.trim() : '';

      // If you want to open user's mail client instead of sending to Netlify,
      // toggle USE_MAILTO = true at top of this file.
      if (USE_MAILTO) {
        const subject = encodeURIComponent('Website Feedback');
        const body = encodeURIComponent(`Rating: ${rating || 'No rating'}\n\nComment:\n${comment}\n\n— Sent from website`);
        const recipients = [
          'divinedevelopers006@gmail.com',
          'praveendivine006@gmail.com',
          'rajkumardivine006@gmail.com',
          'manojdivineoo6@gmail.com'
        ].join(',');
        // open mail client
        window.location.href = `mailto:${recipients}?subject=${subject}&body=${body}`;
        return;
      }

      // -------------------------
      // Option A (default): AJAX submit to Netlify and then redirect
      // Netlify accepts form POSTs to '/' — we include form-name and all fields.
      // -------------------------
      // build a FormData that includes all fields present in the form element
      const fd = new FormData(feedbackForm);

      // ensure form-name exists (Netlify needs it when using fetch)
      if (!fd.get('form-name')) fd.append('form-name', feedbackForm.getAttribute('name') || 'feedback');

      // ensure rating and comment are present (they should be from inputs)
      if (!fd.get('rating')) fd.append('rating', rating);
      if (!fd.get('comment')) fd.append('comment', comment);

      // prepare body in x-www-form-urlencoded format (Netlify expects this for fetch)
      const urlEncoded = new URLSearchParams();
      for (const pair of fd.entries()) {
        urlEncoded.append(pair[0], pair[1]);
      }

      // Submit to Netlify
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: urlEncoded.toString()
      })
      .then(response => {
        if (!response.ok) throw new Error('Network response was not ok');
        // success — redirect to thank you page
        window.location.href = feedbackForm.getAttribute('action') || '/thank-you.html';
      })
      .catch(err => {
        console.error('Form submission error:', err);
        // fallback behaviour: show a simple inline message or open mail client
        // (choose which fallback you prefer)
        alert('Submission failed — opening your email client as a fallback.');
        const subject = encodeURIComponent('Website Feedback (fallback)');
        const body = encodeURIComponent(`Rating: ${rating || 'No rating'}\n\nComment:\n${comment}\n\n— Sent from website (fallback)`);
        window.location.href = `mailto:divinedevelopers006@gmail.com?subject=${subject}&body=${body}`;
      });
    });
  }

  // small parallax for hero title on mouse move (desktop only)
  const hero = document.querySelector('.hero');
  const title = document.querySelector('.hero .title');
  if (hero && title && window.matchMedia('(min-width:721px)').matches) {
    let raf = null;
    hero.addEventListener('mousemove', (e) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rect = hero.getBoundingClientRect();
        const dx = (e.clientX - (rect.left + rect.width / 2)) / rect.width;
        const dy = (e.clientY - (rect.top + rect.height / 2)) / rect.height;
        title.style.transform = `translate3d(${dx * 12}px, ${dy * 8}px, 0)`;
      });
    });
    hero.addEventListener('mouseleave', () => {
      title.style.transform = '';
    });
  }

}); // DOMContentLoaded
