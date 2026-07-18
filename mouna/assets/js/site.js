/* site.js — V3 « La Chambre Raisonnée »
   nav, révélations, filtres, lightbox inondée (data-accent), permaliens,
   validation formulaires -> mailto. Vanilla, zéro dépendance. */

(function () {
  'use strict';

  /* ===== EN-TÊTE : filet au scroll ===== */
  var header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener('scroll', function () {
      header.setAttribute('data-scrolled', window.scrollY > 0 ? 'true' : 'false');
    }, { passive: true });
  }

  /* ===== NAV MOBILE ===== */
  var toggles = document.querySelectorAll('.nav-toggle');
  var drawer = document.querySelector('.nav-mobile');
  if (toggles.length && drawer) {
    toggles.forEach(function (toggle) {
      toggle.addEventListener('click', function () {
        var open = drawer.classList.contains('is-open');
        toggles.forEach(function (t) { t.setAttribute('aria-expanded', String(!open)); });
        drawer.classList.toggle('is-open', !open);
        drawer.setAttribute('aria-hidden', String(open));
        document.body.style.overflow = open ? '' : 'hidden';
      });
    });
    drawer.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        toggles.forEach(function (t) { t.setAttribute('aria-expanded', 'false'); });
        drawer.classList.remove('is-open');
        document.body.style.overflow = '';
      });
    });
  }

  /* ===== RÉVÉLATIONS ===== */
  var reveals = document.querySelectorAll('[data-reveal]');
  if (reveals.length && window.IntersectionObserver) {
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    reveals.forEach(function (el) { obs.observe(el); });
  }

  /* ===== FILTRES (galerie) ===== */
  var filterBar = document.querySelector('.filter-bar');
  if (filterBar) {
    filterBar.addEventListener('click', function (e) {
      var chip = e.target.closest('.filter-chip');
      if (!chip) return;
      var filter = chip.getAttribute('data-filter');
      filterBar.querySelectorAll('.filter-chip').forEach(function (c) {
        c.classList.remove('is-active');
        c.setAttribute('aria-pressed', 'false');
      });
      chip.classList.add('is-active');
      chip.setAttribute('aria-pressed', 'true');
      document.querySelectorAll('.oeuvre-card[data-category]').forEach(function (card) {
        var ok = filter === 'all' || card.getAttribute('data-category').split(' ').indexOf(filter) !== -1;
        card.style.display = ok ? '' : 'none';
      });
    });
  }

  /* ===== LIGHTBOX inondée ===== */
  var lb = document.querySelector('.lightbox');
  if (lb) {
    var lbImg = lb.querySelector('.lightbox__media');
    var lbTitre = lb.querySelector('.lightbox__caption .fiche__titre');
    var lbMeta = lb.querySelector('.lightbox__caption .fiche__meta');
    var lbArchive = lb.querySelector('.lightbox__archive');
    var lbClose = lb.querySelector('.lightbox__close');
    var lbPrev = lb.querySelector('.lightbox__prev');
    var lbNext = lb.querySelector('.lightbox__next');

    var artworks = [];
    var currentIdx = -1;

    function collect() {
      artworks = [];
      document.querySelectorAll('.oeuvre-card__link[data-lightbox]').forEach(function (link) {
        // ignorer les cartes masquées par un filtre
        var card = link.closest('.oeuvre-card');
        if (card && card.style.display === 'none') return;
        artworks.push({
          slug: link.getAttribute('data-slug') || '',
          src: link.getAttribute('data-full') || link.getAttribute('href'),
          titre: link.getAttribute('data-titre') || '',
          meta: link.getAttribute('data-meta') || '',
          accent: link.getAttribute('data-accent') || '#6fc4e0',
          archive: link.getAttribute('data-archive') || '',
          element: link
        });
      });
    }

    /* luminance -> texte encre ou plâtre sur le flood */
    function texteClair(hex) {
      var n = parseInt(hex.slice(1), 16);
      var r = (n >> 16) & 255, g = (n >> 8) & 255, b = n & 255;
      return (0.2126 * r + 0.7152 * g + 0.0722 * b) < 130;
    }

    function open(idx, pushUrl) {
      if (idx < 0 || idx >= artworks.length) return;
      currentIdx = idx;
      var a = artworks[idx];
      lbImg.src = a.src;
      lbImg.alt = a.titre + (a.meta ? ' — ' + a.meta : '');
      lbTitre.textContent = a.titre;
      lbMeta.textContent = a.meta;
      lb.style.setProperty('--flood', a.accent);
      lb.classList.toggle('texte-clair', texteClair(a.accent));
      lb.classList.toggle('texte-sombre', !texteClair(a.accent));
      if (lbArchive) {
        if (a.archive) {
          lbArchive.href = a.archive;
          lbArchive.style.display = '';
        } else {
          lbArchive.style.display = 'none';
        }
      }
      lb.classList.add('is-open');
      lb.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      lbClose.focus();
      if (pushUrl !== false && a.slug) {
        try { history.replaceState(null, '', '?oeuvre=' + encodeURIComponent(a.slug)); } catch (e) {}
      }
    }

    function close() {
      lb.classList.remove('is-open');
      lb.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      if (currentIdx >= 0 && artworks[currentIdx]) artworks[currentIdx].element.focus();
      currentIdx = -1;
      try { history.replaceState(null, '', window.location.pathname); } catch (e) {}
    }

    function nav(delta) {
      if (!artworks.length) return;
      open((currentIdx + delta + artworks.length) % artworks.length);
    }

    document.addEventListener('click', function (e) {
      var link = e.target.closest('.oeuvre-card__link[data-lightbox]');
      if (!link) return;
      e.preventDefault();
      collect();
      var idx = artworks.findIndex(function (a) { return a.element === link; });
      open(idx >= 0 ? idx : 0);
    });

    if (lbClose) lbClose.addEventListener('click', close);
    if (lbPrev) lbPrev.addEventListener('click', function () { nav(-1); });
    if (lbNext) lbNext.addEventListener('click', function () { nav(1); });
    lb.addEventListener('click', function (e) {
      if (e.target === lb || e.target.classList.contains('lightbox__scene')) close();
    });

    document.addEventListener('keydown', function (e) {
      if (!lb.classList.contains('is-open')) return;
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') nav(-1);
      if (e.key === 'ArrowRight') nav(1);
      if (e.key === 'Tab') {
        var f = lb.querySelectorAll('button, [href]');
        if (!f.length) return;
        var first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    });

    /* Permalien ?oeuvre=slug : ouvre l'œuvre au chargement */
    var param = new URLSearchParams(window.location.search).get('oeuvre');
    if (param) {
      collect();
      var idx = artworks.findIndex(function (a) { return a.slug === param; });
      if (idx >= 0) open(idx, false);
    }
  }

  /* ===== AIDES ERREURS FORMULAIRE ===== */
  function showFieldError(field) {
    var ff = field.closest('.form-field');
    if (ff) {
      var err = ff.querySelector('.field-error');
      if (err) err.style.display = 'block';
    }
  }
  function clearFieldError(field) {
    field.removeAttribute('aria-invalid');
    var ff = field.closest('.form-field');
    if (ff) {
      var err = ff.querySelector('.field-error');
      if (err) err.style.display = '';
    }
  }

  /* ===== VALIDATION + MAILTO ===== */
  document.querySelectorAll('.form').forEach(function (form) {
    form.setAttribute('novalidate', '');
    var summary = form.querySelector('.form-error-summary');
    if (!summary) {
      summary = document.createElement('div');
      summary.className = 'form-error-summary';
      summary.setAttribute('role', 'alert');
      summary.textContent = 'Veuillez corriger les champs indiqués.';
      form.insertBefore(summary, form.firstChild);
    }

    form.addEventListener('submit', function (e) {
      var valid = true;
      form.querySelectorAll('[aria-invalid]').forEach(function (f) { f.removeAttribute('aria-invalid'); });
      form.querySelectorAll('.field-error').forEach(function (er) { er.style.display = ''; });

      var processedRadios = [];
      form.querySelectorAll('[required]').forEach(function (field) {
        var value = (field.value || '').trim();
        if (field.type === 'radio') {
          if (processedRadios.indexOf(field.name) !== -1) return;
          processedRadios.push(field.name);
          var any = form.querySelector('input[type=radio][name="' + field.name + '"]:checked');
          if (!any) { field.setAttribute('aria-invalid', 'true'); showFieldError(field); valid = false; }
          return;
        }
        if (field.type === 'checkbox') {
          if (!field.checked) { field.setAttribute('aria-invalid', 'true'); showFieldError(field); valid = false; }
          return;
        }
        if (!value) { field.setAttribute('aria-invalid', 'true'); showFieldError(field); valid = false; }
        if (field.type === 'email' && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          field.setAttribute('aria-invalid', 'true'); showFieldError(field); valid = false;
        }
        if (field.minLength > 0 && value && value.length < field.minLength) {
          field.setAttribute('aria-invalid', 'true'); showFieldError(field); valid = false;
        }
      });

      e.preventDefault();
      if (!valid) {
        summary.style.display = 'block';
        var firstError = form.querySelector('[aria-invalid="true"]');
        if (firstError) firstError.focus();
        return;
      }
      summary.style.display = '';

      var bodyParts = [];
      var subject = '';
      form.querySelectorAll('[name]').forEach(function (f) {
        var name = f.getAttribute('name');
        var val = '';
        if (f.type === 'radio') { if (f.checked) val = f.value; }
        else if (f.type === 'checkbox' || f.type === 'file') { return; }
        else if (f.tagName === 'SELECT') { val = f.options[f.selectedIndex] ? f.options[f.selectedIndex].text : ''; }
        else { val = f.value.trim(); }
        if (!val) return;
        bodyParts.push(name.charAt(0).toUpperCase() + name.slice(1) + ' : ' + val);
        if (!subject && (name === 'sujet' || name === 'oeuvre' || name === 'type-projet')) subject = val;
      });
      if (!subject) subject = document.title.split(' — ')[0].trim();
      var mailto = 'mailto:mounadakkakart@gmail.com?subject=' + encodeURIComponent(subject) +
                   '&body=' + encodeURIComponent(bodyParts.join('\n'));
      var confirmDiv = form.querySelector('.form-confirmation');
      if (confirmDiv) {
        confirmDiv.textContent = 'Message prêt à envoyer via votre client mail.';
        confirmDiv.style.display = 'block';
      }
      window.location.href = mailto;
    });

    form.addEventListener('input', function (e) {
      if (e.target.hasAttribute('aria-invalid')) clearFieldError(e.target);
      if (!form.querySelector('[aria-invalid="true"]')) summary.style.display = '';
    });
  });
})();
