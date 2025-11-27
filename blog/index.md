---
layout: default
title: "AA DigitalWorks Blog"
pagination: 
  enabled: true
---

<!-- Debug Info -->
<div class="alert alert-info">
  <h5>Pagination Debug:</h5>
  <p>Total Posts: {{ site.posts.size }}</p>
  <p>Paginator Posts: {{ paginator.posts.size }}</p>
  <p>Paginator Page: {{ paginator.page }}</p>
  <p>Paginator Total Pages: {{ paginator.total_pages }}</p>
  <p>Paginate Path: {{ site.paginate_path }}</p>
</div>

<!-- Rest of your blog content... -->