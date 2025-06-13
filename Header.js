<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Post | Sallau 012</title>
  
  <link rel="stylesheet" href="css/general.css">
  
  <style>
    body {
      background-color: white;
      color: black;
    }
    
    .posts-grid {
      max-width: 1200px;
      width: 90%;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 15px;
    }
    
    .card {
      background-color: white;
      padding: 10px;
      border: 1px solid silver;
      border-radius: 10px;
      margin-bottom: 20px; 
      box-shadow: 4px 4px 10px 1px silver;
      transition: transform 0.3s ease;
    }
    
    .card a {
      text-decoration: none;
    }
    
    .card:hover {
      transform: translateY(-5px);
    }
    
    .card h2, .card p {
      text-align: left;
      margin-left: 10px;
    }
    
    .card h2 {
      color: #0e47a7;
      margin-top: 10px;
    }
    
    .post-image {
      position: relative;
    }
    
    .category-badge {
      position: absolute;
      top: 10px;
      right: 10px;
      background-color: #3178f1;
      color: white;
      padding: 7px 8px;
      border-radius: 10px;
      font-size: 12px;
    }
    
    .card .post-excerpt {
      color: #333;
      margin: 10px;
      line-height: 1.4;
    }
    
    .card .post-meta {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 15px 10px 5px;
    }
    
    .card .post-date {
      color: #2f0101;
      font-size: 14px;
    }
    .card .post-date i {
      color: #3178f1;
    }
    
    .card .read-more {
      color: #3178f1;
      font-weight: bold;
      cursor: pointer;
    }
    .card .read-more i {
      margin-left: 2px;
    }
    
    .card .read-more:hover {
      text-decoration: underline;
    }
    
    .card img {
      width: 95%;
      border-radius: 3px;
      display: block;
      margin: 0 auto;
    }
    
    .card hr {
      border: none;
      height: 1px;
      background-color: lightgray;
      margin: 10px 0;
    }
    
  </style>
</head>

<body>
  
  <!--Page Logo......... -->
  <div id="pageLogo"></div>

  <div class="main">
    <center>
      <div id="top"></div>
      
      <!-- Improved Search Bar -->
      <div id="search"></div>
    
      <div class="posts-grid" id="postsGrid">
        <!-- Posts will be dynamically inserted here by JavaScript -->
      </div>
      
      <hr>
      <footer id="footer"></footer>
    </center>
    <a id="up" href="#top">Top↑</a>
  </div>
  
  <!-- General@@@-->
  <div class="gen">
    <div id="header"></div>
    <div id="btn"></div>
  </div>
  
  <script src="js/header.js"></script>
  <script src="js/general.js"></script>
  <script src="js/lazy-img.js"></script>
  
  <script>
    // Sample post data
    /*
    {
        id: "post",
        title: "",
        date: "June 15, 2023",
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgKcezqQ6F4OSf0luVskJn4IQpLIIZlDd76_FySr_j09RlRF4PDt8VTAJ2HhvtEypIuEB1tJlaeovoGgu1B92TA996a-coIY_7qHaKFpTTeSrUIZ5R0e35zk7rzL-fr3_usYBhsOMUIety8w-7Hx2GJRVcyFi95bb0yTx6FZnMQW4Xxg4lzW_1sSf3x8WMu/s500/SALLAU%202012.png",
        content: "",
        category: "Organization",
        link: "",
        more: "",
        hasReadMore: true
      },
      */
    const posts = [
      {
        id: "post7",
        title: "Introduction to Membership Form (Register to Become a Member)",
        date: "June 15, 2023",
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgKcezqQ6F4OSf0luVskJn4IQpLIIZlDd76_FySr_j09RlRF4PDt8VTAJ2HhvtEypIuEB1tJlaeovoGgu1B92TA996a-coIY_7qHaKFpTTeSrUIZ5R0e35zk7rzL-fr3_usYBhsOMUIety8w-7Hx2GJRVcyFi95bb0yTx6FZnMQW4Xxg4lzW_1sSf3x8WMu/s500/SALLAU%202012.png",
        content: "The Organization provided a membership form and ID Card to identify the members that is ready to be active in the organization........",
        category: "Organization",
        link: "",
        more: "",
        hasReadMore: true
      },
      {
        id: "post6",
        title: "General Event (1st Old Boys Program)",
        date: "June 15, 2023",
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgKcezqQ6F4OSf0luVskJn4IQpLIIZlDd76_FySr_j09RlRF4PDt8VTAJ2HhvtEypIuEB1tJlaeovoGgu1B92TA996a-coIY_7qHaKFpTTeSrUIZ5R0e35zk7rzL-fr3_usYBhsOMUIety8w-7Hx2GJRVcyFi95bb0yTx6FZnMQW4Xxg4lzW_1sSf3x8WMu/s500/SALLAU%202012.png",
        content: "The 1st Old boys program was cunducted Successfully, and discused an inportant issues, make intertainment, and inprove friendship etc. see everything here.........",
        category: "Organization",
        link: "",
        more: "View event",
        hasReadMore: true
      },
      {
        id: "post5",
        title: "The Sallau 2012 Website Activities and Functionalities",
        date: "June 15, 2023",
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgKcezqQ6F4OSf0luVskJn4IQpLIIZlDd76_FySr_j09RlRF4PDt8VTAJ2HhvtEypIuEB1tJlaeovoGgu1B92TA996a-coIY_7qHaKFpTTeSrUIZ5R0e35zk7rzL-fr3_usYBhsOMUIety8w-7Hx2GJRVcyFi95bb0yTx6FZnMQW4Xxg4lzW_1sSf3x8WMu/s500/SALLAU%202012.png",
        content: "Any thing has its purpose, This website built with many powerfull functionalities that allows every members to manage their activitie easily, Rapidly, and Comfidecially........",
        category: "Organization",
        link: "",
        more: "",
        hasReadMore: true
      },
      {
        id: "post4",
        title: "Organization Leader",
        date: "June 15, 2023",
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgKcezqQ6F4OSf0luVskJn4IQpLIIZlDd76_FySr_j09RlRF4PDt8VTAJ2HhvtEypIuEB1tJlaeovoGgu1B92TA996a-coIY_7qHaKFpTTeSrUIZ5R0e35zk7rzL-fr3_usYBhsOMUIety8w-7Hx2GJRVcyFi95bb0yTx6FZnMQW4Xxg4lzW_1sSf3x8WMu/s500/SALLAU%202012.png",
        content: "The Organization founded and ruled by leading of <b>Mustafa Ibrahim</b> as an <b>active President</b>.",
        category: "Organization",
        link: "profile.html?regNo=2012001",
        more: "View profile",
        hasReadMore: true
      },
      {
        id: "post003",
        title: "Sallau Model Primary School Old Students Association (S.M.P.S.O.S.A) Class of 2012",
        date: "June 15, 2023",
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgKcezqQ6F4OSf0luVskJn4IQpLIIZlDd76_FySr_j09RlRF4PDt8VTAJ2HhvtEypIuEB1tJlaeovoGgu1B92TA996a-coIY_7qHaKFpTTeSrUIZ5R0e35zk7rzL-fr3_usYBhsOMUIety8w-7Hx2GJRVcyFi95bb0yTx6FZnMQW4Xxg4lzW_1sSf3x8WMu/s500/SALLAU%202012.png",
        content: "The above Organization founded from The Students Of <b>Sallau Model Primary School Danrim Malumfashi</b> that graduated on 2012........",
        category: "Organization",
        link: "post-1.html",
        more: "",
        hasReadMore: true
      },
      {
        id: "post002",
        title: "The Website Developer",
        date: "June 20, 2023",
        image: "images/abuja & america pict.jpg",
        content: "The Sallau 2012 Website developed and sponsored by <b>Na'im Auwal</b> through <b>PowerSoft Company</b>, The C.E.O. of <b>PowerSoft</b> and the Member of <b>Sallau Model Primary School Old Students Association Class of 2012</b>.",
        category: "Developers",
        link: "profile.html?regNo=2012002",
        more: "View profile",
        hasReadMore: true
      },
      {
        id: "post001",
        title: "Development of Sallau 2012 Website",
        date: "July 14, 2023",
        image: "images/map1.png",
        content: "The Sallau 2012 website is a website for <b>(S.M.P.S.O.S.A. Class of 2012)</b> organization, and it's developed by <b>PowerSoft</b> in the year 2025.......",
        category: "Developers",
        link: "#",
        more: "Vist PowerSoft",
        hasReadMore: true
      }
    ];

    // Function to generate post cards
    function generatePosts() {
      const postsGrid = document.getElementById('postsGrid');
      
      posts.forEach(post => {
        const postCard = document.createElement('div');
        postCard.className = 'card';
        postCard.id = post.id;
        
        const postLink = document.createElement('a');
        postLink.className = 'card-link';
        postLink.href = post.link;
        
        // Post image with category badge
        const postImageDiv = document.createElement('div');
        postImageDiv.className = 'post-image';
        
        const postImage = document.createElement('img');
        postImage.src = post.image;
        postImage.alt = post.title;
        
        const categoryBadge = document.createElement('span');
        categoryBadge.className = 'category-badge';
        categoryBadge.textContent = post.category;
        
        postImageDiv.appendChild(postImage);
        postImageDiv.appendChild(categoryBadge);
        
        // Post content
        const postContentDiv = document.createElement('div');
        postContentDiv.className = 'post-content';
        
        const postTitle = document.createElement('h2');
        postTitle.className = 'post-title';
        postTitle.textContent = post.title;
        
        const postExcerpt = document.createElement('p');
        postExcerpt.className = 'post-excerpt';
        postExcerpt.innerHTML = `<div>${post.content}</div>`;
        
        // Post meta (date and read more)
        const postMetaDiv = document.createElement('div');
        postMetaDiv.className = 'post-meta';
        
        const postDate = document.createElement('span');
        postDate.className = 'post-date';
        postDate.innerHTML = `<i class="fas fa-calendar-alt"></i> ${post.date}`;
        
        postMetaDiv.appendChild(postDate);
        
        if (post.hasReadMore) {
          const readMoreSpan = document.createElement('span');
          readMoreSpan.className = 'read-more';
          readMoreSpan.innerHTML = `${post.more || "Read more"}<i class="fas fa-arrow-right"></i>`;
          postMetaDiv.appendChild(readMoreSpan);
        }
        
        // Assemble the post
        postContentDiv.appendChild(postTitle);
        postContentDiv.appendChild(postExcerpt);
        postContentDiv.appendChild(postMetaDiv);
        
        postLink.appendChild(postImageDiv);
        postLink.appendChild(postContentDiv);
        
        postCard.appendChild(postLink);
        postsGrid.appendChild(postCard);
      });
      initializeSearch();
    }

    // Generate posts when the page loads
    window.addEventListener('DOMContentLoaded', generatePosts);
  </script>
</body>
</html>
