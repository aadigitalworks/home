---
layout: default
title: "AA DigitalWorks Blog"
description: "Insights, tips and latest trends in digital marketing, SEO, and web development"
---

<section class="blog-hero py-5 text-center bg-light">
  <div class="container">
    <h1 class="display-4">AA DigitalWorks Blog</h1>
    <p class="lead">{{ page.description }}</p>
  </div>
</section>

<main class="container py-5">
  <!-- Debug Info -->
  <div class="alert alert-info">
    <h5>Debug Information:</h5>
    <p><strong>Total Posts Found:</strong> {{ site.posts.size }}</p>
    {% if site.posts.size > 0 %}
      <p><strong>Post List:</strong></p>
      <ul>
      {% for post in site.posts %}
        <li>{{ post.date | date: "%Y-%m-%d" }}: <strong>{{ post.title }}</strong> - {{ post.url }}</li>
      {% endfor %}
      </ul>
    {% else %}
      <p><strong>No posts found in _posts folder!</strong></p>
    {% endif %}
  </div>

  <div class="row">
    {% if site.posts.size > 0 %}
      {% for post in site.posts %}
      <div class="col-lg-6 mb-4">
        <article class="card h-100 shadow-sm">
          {% if post.image %}
          <img src="{{ post.image | relative_url }}" class="card-img-top" alt="{{ post.title }}" style="height: 200px; object-fit: cover;">
          {% else %}
          <div class="card-img-top bg-secondary d-flex align-items-center justify-content-center" style="height: 200px;">
            <i class="fas fa-image text-white fa-3x"></i>
          </div>
          {% endif %}
          <div class="card-body d-flex flex-column">
            <div class="text-muted small mb-2">
              <i class="far fa-calendar me-1"></i> {{ post.date | date: "%B %d, %Y" }}
            </div>
            <h3 class="card-title h5">
              <a href="{{ post.url | relative_url }}" class="text-dark text-decoration-none">{{ post.title }}</a>
            </h3>
            <p class="card-text flex-grow-1">
              {{ post.description | default: post.excerpt | strip_html | truncate: 120 }}
            </p>
            <a href="{{ post.url | relative_url }}" class="btn btn-primary btn-sm align-self-start mt-auto">Read more →</a>
          </div>
        </article>
      </div>
      {% endfor %}
    {% else %}
      <div class="col-12 text-center py-5">
        <div class="alert alert-warning">
          <h3>No blog posts yet!</h3>
          <p>We're working on creating amazing content for you.</p>
          <p>Check back soon for the latest insights on digital marketing, SEO, and web development.</p>
        </div>
      </div>
    {% endif %}
  </div>
</main>

<section class="newsletter-section bg-primary text-white py-5">
  <div class="container text-center">
    <h3>Stay Updated with Digital Trends</h3>
    <p class="mb-4">Subscribe to our newsletter for the latest insights on SEO and marketing.</p>
    <form class="newsletter-form justify-content-center">
      <div class="input-group" style="max-width: 400px; margin: 0 auto;">
        <input type="email" class="form-control" placeholder="Your email address" required>
        <button type="submit" class="btn btn-warning">Subscribe</button>
      </div>
    </form>
  </div>
</section>