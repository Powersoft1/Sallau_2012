// Function to set social media meta tags
function setSocialMediaMeta(options) {
  // Ensure required options are provided
  if (!options.title || !options.description || !options.imageUrl || !options.pageUrl) {
    console.error('Missing required social media meta options');
    return;
  }

  // Create or update meta tags
  const metaTags = {
    // Open Graph/Facebook
    'og:title': user.name + ' {' + user.regNo + '}' || options.title,
    'og:description': options.description,
    'og:image': user.profilePict || options.imageUrl,
    'og:url': options.pageUrl,
    'og:type': options.type,
    'og:site_name': options.siteName,
    
    // Twitter
    'twitter:card': options.twitterCardType || 'summary_large_image',
    'twitter:title': options.title,
    'twitter:description': options.description,
    'twitter:image': options.imageUrl,
    'twitter:site': options.twitterHandle || '',
    'twitter:creator': options.twitterCreator || options.twitterHandle || ''
  };

  // Additional optional parameters
  if (options.imageWidth) metaTags['og:image:width'] = options.imageWidth.toString();
  if (options.imageHeight) metaTags['og:image:height'] = options.imageHeight.toString();
  if (options.videoUrl) {
    metaTags['og:video'] = options.videoUrl;
    metaTags['og:video:type'] = options.videoType || 'video/mp4';
  }

  // Process each meta tag
  Object.entries(metaTags).forEach(([property, content]) => {
    if (!content) return; // Skip empty values
    
    let tag = document.querySelector(`meta[property="${property}"]`) || 
              document.querySelector(`meta[name="${property}"]`);
    
    if (!tag) {
      tag = document.createElement('meta');
      if (property.startsWith('og:')) {
        tag.setAttribute('property', property);
      } else {
        tag.setAttribute('name', property);
      }
      document.head.appendChild(tag);
    }
    
    tag.setAttribute('content', content);
  });
}

// Example usage:
document.addEventListener('DOMContentLoaded', function() {
  setSocialMediaMeta({
    title: document.title,
    description: 'Sallau Model Primaty School Old Students Association Class of 2012',
    imageUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgKcezqQ6F4OSf0luVskJn4IQpLIIZlDd76_FySr_j09RlRF4PDt8VTAJ2HhvtEypIuEB1tJlaeovoGgu1B92TA996a-coIY_7qHaKFpTTeSrUIZ5R0e35zk7rzL-fr3_usYBhsOMUIety8w-7Hx2GJRVcyFi95bb0yTx6FZnMQW4Xxg4lzW_1sSf3x8WMu/s500/SALLAU%202012.png',
    pageUrl: window.location.href,
    siteName: 'Sallau 2012',
    twitterHandle: '@Sallau2012',
    imageWidth: 1200,
    imageHeight: 630
  });
});

document.getElementById = ('pageLogo').innerHTML = `<img style="width: 0%; display: none; position: fixed;" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgKcezqQ6F4OSf0luVskJn4IQpLIIZlDd76_FySr_j09RlRF4PDt8VTAJ2HhvtEypIuEB1tJlaeovoGgu1B92TA996a-coIY_7qHaKFpTTeSrUIZ5R0e35zk7rzL-fr3_usYBhsOMUIety8w-7Hx2GJRVcyFi95bb0yTx6FZnMQW4Xxg4lzW_1sSf3x8WMu/s500/SALLAU%202012.png" alt="page icon">`;