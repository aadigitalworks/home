---
layout: default
title: "AA DigitalWorks Blog"
description: "Insights, tips and latest trends in digital marketing, SEO, and web development"
pagination: 
  enabled: true
permalink: /blog/
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
    <h5>Debug Info:</h5>
    <p>Total Posts Found: {{ site.posts.size }}</p>
    {% for post in site.posts %}
      <small>Post: {{ post.title }} ({{ post.date }})</small><br>
    {% endfor %}
  </div>

  <div class="row">
    {% for post in paginator.posts %}
    <div class="col-lg-6 mb-4">
      <article class="card h-100 shadow-sm">
        {% if post.image %}
        <img src="{{ post.image | relative_url }}" class="card-img-top" alt="{{ post.title }}" style="height: 200px; object-fit: cover;">
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
          <a href="{{ post.url | relative_url }}" class="btn btn-primary btn-sm align-self-start">Read more →</a>
        </div>
      </article>
    </div>
    {% else %}
    <div class="col-12 text-center py-5">
      <div class="alert alert-warning">
        <h3>No posts found!</h3>
        <p>Total posts detected: {{ site.posts.size }}</p>
        <p>Check if your post files are in the _posts folder with correct naming.</p>
      </div>
    </div>
    {% endfor %}
  </div>

  <!-- Pagination -->
  {% if paginator.total_pages > 1 %}
  <nav aria-label="Blog pagination" class="mt-5">
    <ul class="pagination justify-content-center">
      {% if paginator.previous_page %}
        <li class="page-item">
          <a class="page-link" href="{{ paginator.previous_page_path | relative_url }}">&laquo; Previous</a>
        </li>
      {% else %}
        <li class="page-item disabled">
          <span class="page-link">&laquo; Previous</span>
        </li>
      {% endif %}

      {% for page in (1..paginator.total_pages) %}
        <li class="page-item {% if page == paginator.page %}active{% endif %}">
          <a class="page-link" href="{% if page == 1 %}{{ '/blog/' | relative_url }}{% else %}{{ site.paginate_path | relative_url | replace: ':num', page }}{% endif %}">
            {{ page }}
          </a>
        </li>
      {% endfor %}

      {% if paginator.next_page %}
        <li class="page-item">
          <a class="page-link" href="{{ paginator.next_page_path | relative_url }}">Next &raquo;</a>
        </li>
      {% else %}
        <li class="page-item disabled">
          <span class="page-link">Next &raquo;</span>
        </li>
      {% endif %}
    </ul>
  </nav>
  {% endif %}
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