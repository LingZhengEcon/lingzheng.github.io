---
layout: page
title: Blog
permalink: /blog/
nav: true
nav_order: 3
description: Poems, economic essays, reading notes, and ordinary fragments.
_styles: |
  .post .post-header {
    margin-bottom: 2.4rem;
  }

  .post .post-title {
    margin-bottom: 0.65rem;
  }

  .post .post-description {
    max-width: 38rem;
    color: rgba(50, 50, 50, 0.7);
    font-size: 1rem;
    line-height: 1.7;
  }

  .blog-cover {
    display: grid;
    gap: 1.3rem;
  }

  .blog-card {
    display: grid;
    min-height: 24rem;
    overflow: hidden;
    border: 1px solid rgba(42, 42, 42, 0.14);
    border-radius: 8px;
    background: #fbfaf8;
    color: inherit;
    text-decoration: none;
    box-shadow: 0 18px 44px rgba(20, 20, 20, 0.08);
    transition:
      transform 180ms ease,
      box-shadow 180ms ease,
      border-color 180ms ease;
  }

  .blog-card:hover {
    border-color: rgba(120, 44, 36, 0.32);
    box-shadow: 0 22px 54px rgba(20, 20, 20, 0.12);
    transform: translateY(-3px);
  }

  .blog-card-image {
    position: relative;
    min-height: 15.8rem;
    overflow: hidden;
    background: #eee9e1;
  }

  .blog-card-image img {
    display: block;
    width: 100%;
    height: 100%;
    min-height: 15.8rem;
    object-fit: cover;
    transition: transform 280ms ease;
  }

  .blog-card:hover .blog-card-image img {
    transform: scale(1.025);
  }

  .blog-card-content {
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    gap: 1rem;
    align-items: end;
    padding: 1.45rem 1.55rem 1.35rem;
    background:
      linear-gradient(180deg, rgba(255, 255, 255, 0.88), rgba(255, 255, 255, 0.72)),
      var(--card-paper, #fbfaf8);
  }

  .blog-card-title {
    margin: 0 0 0.35rem;
    font-family: "Iowan Old Style", "Palatino Linotype", "Book Antiqua", Palatino, Georgia, serif;
    font-size: 2.1rem;
    font-weight: 500;
    line-height: 1.08;
  }

  .blog-card-subtitle {
    margin: 0;
    color: rgba(38, 38, 38, 0.68);
    font-size: 0.94rem;
    line-height: 1.5;
  }

  .blog-card-number {
    display: inline-flex;
    align-items: center;
    gap: 0.7rem;
    color: var(--card-accent, #7b2f28);
    font-size: 0.95rem;
    letter-spacing: 0.04em;
    white-space: nowrap;
  }

  .blog-card-number::before {
    width: 2.4rem;
    height: 1px;
    background: currentColor;
    content: "";
    opacity: 0.52;
  }

  .blog-card-poetry {
    --card-accent: #7b3c34;
    --card-paper: #fbf7f0;
  }

  .blog-card-econ {
    --card-accent: #315e66;
    --card-paper: #f2f7f7;
  }

  .blog-card-reading {
    --card-accent: #5c6181;
    --card-paper: #f4f5fa;
  }

  .blog-card-fragments {
    --card-accent: #84612e;
    --card-paper: #faf5ea;
  }

  @media (min-width: 768px) {
    .blog-cover {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (max-width: 576px) {
    .blog-card {
      min-height: auto;
    }

    .blog-card-image,
    .blog-card-image img {
      min-height: 12.5rem;
    }

    .blog-card-content {
      grid-template-columns: 1fr;
      padding: 1.2rem;
    }

    .blog-card-title {
      font-size: 1.7rem;
    }
  }
---

<section class="blog-cover" aria-label="Blog categories">
  <a href="{{ '/blog/tag/poetry' | relative_url }}" class="blog-card blog-card-poetry">
    <div class="blog-card-image">
      <img src="{{ '/assets/img/blog/poetry.jpg' | relative_url }}" alt="A handwritten poem page with a pressed leaf">
    </div>
    <div class="blog-card-content">
      <div>
        <h2 class="blog-card-title">Poetry</h2>
        <p class="blog-card-subtitle">image, silence, feeling</p>
      </div>
      <span class="blog-card-number">01</span>
    </div>
  </a>

  <a href="{{ '/blog/tag/economics' | relative_url }}" class="blog-card blog-card-econ">
    <div class="blog-card-image">
      <img src="{{ '/assets/img/blog/econ-notes.jpg' | relative_url }}" alt="An economics essay draft with a chart and equations">
    </div>
    <div class="blog-card-content">
      <div>
        <h2 class="blog-card-title">Econ Essays</h2>
        <p class="blog-card-subtitle">observations, papers, markets</p>
      </div>
      <span class="blog-card-number">02</span>
    </div>
  </a>

  <a href="{{ '/blog/tag/reading' | relative_url }}" class="blog-card blog-card-reading">
    <div class="blog-card-image">
      <img src="{{ '/assets/img/blog/reading-notes.jpg' | relative_url }}" alt="An open book with annotated margins and page tabs">
    </div>
    <div class="blog-card-content">
      <div>
        <h2 class="blog-card-title">Reading Notes</h2>
        <p class="blog-card-subtitle">books, reviews, close reading</p>
      </div>
      <span class="blog-card-number">03</span>
    </div>
  </a>

  <a href="{{ '/blog/tag/fragments' | relative_url }}" class="blog-card blog-card-fragments">
    <div class="blog-card-image">
      <img src="{{ '/assets/img/blog/fragments.jpg' | relative_url }}" alt="Everyday desk fragments with a note, receipt, and coffee stain">
    </div>
    <div class="blog-card-content">
      <div>
        <h2 class="blog-card-title">Fragments</h2>
        <p class="blog-card-subtitle">life, work, fragments</p>
      </div>
      <span class="blog-card-number">04</span>
    </div>
  </a>
</section>
