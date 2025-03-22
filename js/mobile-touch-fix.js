// Mobile touch fix for links
document.addEventListener('DOMContentLoaded', function() {
  // Get all post title links
  const postTitleLinks = document.querySelectorAll('.post-title a, .post-card h2 a');
  
  // Add touch event listeners to each link
  postTitleLinks.forEach(link => {
    link.addEventListener('touchstart', function() {
      // Add pink color class
      this.style.color = '#ff00aa';
    });
    
    // Reset color after touch end with a slight delay for visual feedback
    link.addEventListener('touchend', function() {
      setTimeout(() => {
        // Only reset if not navigating away
        if (document.body.contains(this)) {
          this.style.color = '';
        }
      }, 300);
    });
  });
});
