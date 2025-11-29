---
layout: default
title: "Blog | AA DigitalWorks - SEO, Google Ads & Web Development"
description: "Expert insights on SEO, Google Ads, Web Development, and Digital Marketing strategies from AA DigitalWorks."
---

{% comment %} ================= POSTS SETUP ================= {% endcomment %}
{% assign all_posts = site.posts | sort: 'date' | reverse %}
{% assign first_posts = all_posts | slice: 0, 7 %}
{% assign remaining_posts = all_posts | slice: 7, 100 %}


<!-- ================= BLOG HERO SECTION ================= -->
<section class="slider_section position-relative blog-hero">
  <div class="container">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <div class="row">
          <div class="col">
            <div class="detail-box text-center" style="background: #f8fafc;">
              <div>
                <h1 class="blog-main-title">
                  Our <span class="blog-highlight">Blog</span>
                </h1>
                <p class="blog-subtitle">
                  Expert insights, latest trends, and actionable strategies in SEO, Google Ads, and Web Development
                </p>
                <div class="blog-stats">
                  <div class="stat-item">
                    <span class="stat-number">{{ all_posts.size }}+</span>
                    <span class="stat-label">Articles</span>
                  </div>
                  <div class="stat-item">
                    <span class="stat-number">{{ site.posts | map: 'tags' | flatten | uniq | size }}+</span>
                    <span class="stat-label">Topics</span>
                  </div>
                  <div class="stat-item">
                    <span class="stat-number">24/7</span>
                    <span class="stat-label">Updates</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ================= BLOG CONTENT SECTION ================= -->
<section class="do_section layout_padding blog-content-section">
  <div class="container">
    <!-- Page Info -->
    <div class="page-info text-center mb-5">
      <p class="page-info-text">Showing {{ first_posts.size }} of {{ all_posts.size }} articles • Sorted by newest first</p>
    </div>

    <!-- Blog Grid -->
    <div class="row blog-grid" id="blog-grid">
      {% for post in first_posts %}
      <div class="col-md-6 col-lg-4 mb-4">
        <div class="blog-card">
          <!-- Card Image -->
          <div class="blog-card-image">
            {% if post.image %}
              <img src="{{ post.image | relative_url }}" alt="{{ post.title }}" loading="lazy">
            {% else %}
              <div class="blog-card-image-placeholder">
                <i class="fas fa-file-alt"></i>
              </div>
            {% endif %}
            <div class="blog-card-overlay"></div>
          </div>

          <!-- Card Content -->
          <div class="blog-card-content">
            <!-- Meta Info -->
            <div class="blog-card-meta">
              <span class="meta-date">
                <i class="far fa-calendar"></i>
                {{ post.date | date: "%B %d, %Y" }}
              </span>
              <span class="meta-read-time">
                <i class="far fa-clock"></i>
                {% assign words = post.content | number_of_words %}
                {% if words < 360 %}1 min{% else %}{{ words | divided_by: 180 }} min{% endif %}
              </span>
            </div>

            <!-- Title -->
            <h3 class="blog-card-title">
              <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
            </h3>

            <!-- Description -->
            <p class="blog-card-description">
              {{ post.description | default: post.excerpt | markdownify | strip_html | truncate: 120 }}
            </p>

            <!-- Tags -->
            {% if post.tags %}
            <div class="blog-card-tags">
              {% for tag in post.tags limit: 2 %}
              <span class="tag">{{ tag }}</span>
              {% endfor %}
            </div>
            {% endif %}

            <!-- Read More -->
            <div class="blog-card-actions">
              <a href="{{ post.url | relative_url }}" class="read-more-btn">
                Read More
                <i class="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      {% endfor %}

      <!-- Hidden remaining posts -->
      <div id="remaining-posts" style="display: none;">
        {% for post in remaining_posts %}
        <div class="col-md-6 col-lg-4 mb-4">
          <div class="blog-card">
            <div class="blog-card-image">
              {% if post.image %}
                <img src="{{ post.image | relative_url }}" alt="{{ post.title }}" loading="lazy">
              {% else %}
                <div class="blog-card-image-placeholder">
                  <i class="fas fa-file-alt"></i>
                </div>
              {% endif %}
              <div class="blog-card-overlay"></div>
            </div>

            <div class="blog-card-content">
              <div class="blog-card-meta">
                <span class="meta-date">
                  <i class="far fa-calendar"></i>
                  {{ post.date | date: "%B %d, %Y" }}
                </span>
                <span class="meta-read-time">
                  <i class="far fa-clock"></i>
                  {% assign words = post.content | number_of_words %}
                  {% if words < 360 %}1 min{% else %}{{ words | divided_by: 180 }} min{% endif %}
                </span>
              </div>

              <h3 class="blog-card-title">
                <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
              </h3>

              <p class="blog-card-description">
                {{ post.description | default: post.excerpt | markdownify | strip_html | truncate: 120 }}
              </p>

              {% if post.tags %}
              <div class="blog-card-tags">
                {% for tag in post.tags limit: 2 %}
                <span class="tag">{{ tag }}</span>
                {% endfor %}
              </div>
              {% endif %}

              <div class="blog-card-actions">
                <a href="{{ post.url | relative_url }}" class="read-more-btn">
                  Read More
                  <i class="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        {% endfor %}
      </div>
    </div>

    <!-- ================= SEE MORE BUTTON ================= -->
    {% if remaining_posts.size > 0 %}
    <div class="see-more-section text-center mt-5">
      <button id="see-more-btn" class="see-more-btn">
        <span>See More Articles</span>
        <i class="fas fa-chevron-down"></i>
        <span class="post-count">({{ remaining_posts.size }} more)</span>
      </button>
    </div>
    {% endif %}
  </div>
</section>

<style>
/* Blog Hero Section */
.blog-hero {
    padding: 120px 0 80px !important;
    margin-top: 80px !important;
}

.blog-main-title {
    color: #000;
    font-size: 3.5rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    line-height: 1.2;
}

.blog-highlight {
    color: #f97316;
}

.blog-subtitle {
    color: #000;
    font-size: 1.25rem;
    margin-bottom: 3rem;
    line-height: 1.6;
}

.blog-stats {
    display: flex;
    justify-content: center;
    gap: 3rem;
    flex-wrap: wrap;
}

.stat-item {
    text-align: center;
}

.stat-number {
    display: block;
    font-size: 2.5rem;
    font-weight: 700;
    color: #000;
    margin-bottom: 0.5rem;
}

.stat-label {
    font-size: 1rem;
    color: rgba(0, 0, 0, 0.8);
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

/* Blog Content Section */
.blog-content-section {
    padding: 80px 0;
    background: #f8fafc;
}

.page-info {
    margin-bottom: 3rem;
}

.page-info-text {
    color: #64748b;
    font-size: 1rem;
    margin: 0;
}

/* Blog Cards */
.blog-card {
    background: white;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    border: 1px solid #e2e8f0;
    height: 100%;
}

.blog-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}

.blog-card-image {
    position: relative;
    height: 200px;
    overflow: hidden;
}

.blog-card-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
}

.blog-card:hover .blog-card-image img {
    transform: scale(1.05);
}

.blog-card-image-placeholder {
    height: 100%;
    background: linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #64748b;
}

.blog-card-image-placeholder i {
    font-size: 3rem;
}

.blog-card-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 60px;
    background: linear-gradient(transparent, rgba(0,0,0,0.1));
}

.blog-card-content {
    padding: 1.5rem;
}

.blog-card-meta {
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;
    font-size: 0.8rem;
    color: #64748b;
}

.blog-card-meta span {
    display: flex;
    align-items: center;
    gap: 0.25rem;
}

.blog-card-title {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 0.75rem;
    line-height: 1.4;
}

.blog-card-title a {
    color: #1e293b;
    text-decoration: none;
    transition: color 0.3s ease;
}

.blog-card-title a:hover {
    color: #003a6d;
}

.blog-card-description {
    color: #334155;
    line-height: 1.6;
    margin-bottom: 1rem;
    font-size: 0.9rem;
}

.blog-card-tags {
    margin-bottom: 1.5rem;
}

.tag {
    background: #d4e7ff;
    color: #003a6d;
    padding: 0.25rem 0.75rem;
    border-radius: 20px;
    font-size: 0.75rem;
    font-weight: 500;
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
    display: inline-block;
}

.blog-card-actions {
    border-top: 1px solid #e2e8f0;
    padding-top: 1rem;
}

.read-more-btn {
    color: #003a6d;
    text-decoration: none;
    font-weight: 500;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    transition: all 0.3s ease;
}

.read-more-btn:hover {
    color: #00264d;
    gap: 0.75rem;
}

/* See More Button */
.see-more-section {
    margin-top: 3rem;
    padding-top: 2rem;
    border-top: 1px solid #e2e8f0;
}

.see-more-btn {
    background: #003a6d;
    color: white;
    border: none;
    padding: 1rem 2rem;
    border-radius: 8px;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
}

.see-more-btn:hover {
    background: #00264d;
    transform: translateY(-2px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

.post-count {
    font-size: 0.9rem;
    opacity: 0.9;
    font-weight: normal;
}

/* Newsletter Section */
.blog-newsletter {
    background: linear-gradient(135deg, #003a6d 0%, #00264d 100%) !important;
    color: white;
}

.blog-newsletter h2 {
    color: white;
}

/* Responsive Design */
@media (max-width: 768px) {
    .blog-hero {
        padding: 100px 0 60px !important;
        margin-top: 60px !important;
    }
    
    .blog-main-title {
        font-size: 2.5rem;
    }
    
    .blog-stats {
        gap: 2rem;
    }
    
    .stat-number {
        font-size: 2rem;
    }
    
    .blog-footer .row > div {
        margin-bottom: 2rem;
        text-align: center;
    }
    
    .contact-item {
        justify-content: center;
    }
}

@media (max-width: 480px) {
    .blog-main-title {
        font-size: 2rem;
    }
    
    .blog-card-content {
        padding: 1rem;
    }
    
    .blog-card-meta {
        flex-direction: column;
        gap: 0.5rem;
    }
    
    .blog-stats {
        gap: 1.5rem;
    }
    
    .stat-item {
        flex: 1;
        min-width: 100px;
    }
}

.col-md-6 {
  padding-top: 10px;
  padding-bottom: 10px;
}
</style>

<script>
document.addEventListener('DOMContentLoaded', function() {
  const seeMoreBtn = document.getElementById('see-more-btn');
  const remainingPosts = document.getElementById('remaining-posts');
  const blogGrid = document.getElementById('blog-grid');
  
  if (seeMoreBtn && remainingPosts) {
    seeMoreBtn.addEventListener('click', function() {
      // Show all remaining posts
      const postsToShow = remainingPosts.children;
      
      for (let i = 0; i < postsToShow.length; i++) {
        blogGrid.appendChild(postsToShow[i].cloneNode(true));
      }
      
      // Hide the button and remaining posts container
      seeMoreBtn.style.display = 'none';
      remainingPosts.style.display = 'none';
      
      // Update the page info
      const pageInfo = document.querySelector('.page-info-text');
      if (pageInfo) {
        const totalPosts = {{ all_posts.size }};
        pageInfo.textContent = `Showing all ${totalPosts} articles • Sorted by newest first`;
      }
    });
  }
});
</script>