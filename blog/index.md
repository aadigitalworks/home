---
layout: default
title: "AA DigitalWorks Blog"
description: "Insights, tips and latest trends in digital marketing, SEO, and web development"
pagination: 
  enabled: true
---

<section class="blog-hero py-5 text-center bg-light">
  <div class="container">
    <h1 class="display-4">AA DigitalWorks Blog</h1>
    <p class="lead">{{ page.description }}</p>
  </div>
</section>

<main class="container py-5">
  <div class="row">
    {% for post in paginator.posts %}
    <div class="col-lg-6 mb-4">
      <article class="card h-100 shadow-sm post-card">
        {% if post.image %}
        <div class="post-image">
          <img src="{{ post.image | relative_url }}" class="card-img-top" alt="{{ post.title }}">
        </div>
        {% else %}
        <div class="post-image-placeholder bg-light d-flex align-items-center justify-content-center">
          <i class="fas fa-newspaper text-muted fa-3x"></i>
        </div>
        {% endif %}
        
        <div class="card-body d-flex flex-column">
          <div class="post-meta text-muted small mb-2">
            <i class="far fa-calendar me-1"></i> 
            <time datetime="{{ post.date | date_to_xmlschema }}">
              {{ post.date | date: "%B %d, %Y" }}
            </time>
          </div>
          
          <h2 class="post-title card-title h5">
            <a href="{{ post.url | relative_url }}" class="text-dark text-decoration-none">{{ post.title }}</a>
          </h2>
          
          <p class="post-description card-text flex-grow-1">
            {{ post.description | default: "Discover insights and strategies for digital marketing success." | truncate: 120 }}
          </p>
          
          <div class="mt-auto">
            <a href="{{ post.url | relative_url }}" class="read-more btn btn-primary btn-sm">
              Read More <i class="fas fa-arrow-right ms-1"></i>
            </a>
          </div>
        </div>
      </article>
    </div>
    {% endfor %}
  </div>

  <!-- Dynamic Pagination -->
  {% if paginator.total_pages > 1 %}
  <nav aria-label="Blog pagination" class="mt-5">
    <ul class="pagination justify-content-center">
      <!-- Previous Button -->
      {% if paginator.previous_page %}
        <li class="page-item">
          <a class="page-link" href="{{ paginator.previous_page_path | relative_url }}">
            <i class="fas fa-chevron-left me-1"></i> Previous
          </a>
        </li>
      {% else %}
        <li class="page-item disabled">
          <span class="page-link">
            <i class="fas fa-chevron-left me-1"></i> Previous
          </span>
        </li>
      {% endif %}

      <!-- Page Numbers -->
      {% for page in (1..paginator.total_pages) %}
        {% if page == paginator.page %}
          <li class="page-item active">
            <span class="page-link">{{ page }}</span>
          </li>
        {% elsif page == 1 %}
          <li class="page-item">
            <a class="page-link" href="{{ '/blog/' | relative_url }}">{{ page }}</a>
          </li>
        {% else %}
          <li class="page-item">
            <a class="page-link" href="{{ site.paginate_path | relative_url | replace: ':num', page }}">{{ page }}</a>
          </li>
        {% endif %}
      {% endfor %}

      <!-- Next Button -->
      {% if paginator.next_page %}
        <li class="page-item">
          <a class="page-link" href="{{ paginator.next_page_path | relative_url }}">
            Next <i class="fas fa-chevron-right ms-1"></i>
          </a>
        </li>
      {% else %}
        <li class="page-item disabled">
          <span class="page-link">
            Next <i class="fas fa-chevron-right ms-1"></i>
          </span>
        </li>
      {% endif %}
    </ul>
    
    <!-- Page Info -->
    <div class="text-center text-muted mt-2">
      <small>Page {{ paginator.page }} of {{ paginator.total_pages }} • {{ paginator.total_posts }} total posts</small>
    </div>
  </nav>
  {% endif %}
</main>

<section class="newsletter-section bg-primary text-white py-5 mt-4">
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

<style>
.post-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: none;
  border-radius: 12px;
  overflow: hidden;
}

.post-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
}

.post-image {
  height: 200px;
  overflow: hidden;
}

.post-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.post-card:hover .post-image img {
  transform: scale(1.05);
}

.post-image-placeholder {
  height: 200px;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
}

.post-title a {
  color: #2c3e50;
  transition: color 0.3s ease;
}

.post-title a:hover {
  color: #3498db;
  text-decoration: none;
}

.post-meta {
  font-size: 0.85rem;
}

.read-more {
  border-radius: 20px;
  padding: 8px 20px;
  font-weight: 500;
  transition: all 0.3s ease;
}

.read-more:hover {
  transform: translateX(5px);
}

.pagination .page-item.active .page-link {
  background-color: #3498db;
  border-color: #3498db;
}

.pagination .page-link {
  color: #2c3e50;
  border: 1px solid #e9ecef;
  margin: 0 3px;
  border-radius: 8px;
  padding: 8px 16px;
}

.pagination .page-link:hover {
  background-color: #f8f9fa;
  border-color: #3498db;
}
</style>