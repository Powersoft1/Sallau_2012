// userProfile.js - Dynamic Profile Data with Multiple Users

const users = [
  {
    regNo: "2012001",
    name: "Na'im",
    nickName: "Na'eem",
    office: "Assistant Financial Secretary",
    award: "1 Award",
    totalAmount: "N10,000",
    efficiency: "165 pnt (15%)",
    rank: "1st",
    about: "Hi! I am <strong>Na'eem Auwal</strong>, a passionate software engineer with expertise in web development and system design.",
    genderMarital: "Male | Single",
    address: "Danrimi,<br>Malumfashi,<br>Katsina State,<br>Nigeria",
    occupation: ["Software development", "Printing Service", "Selling Egg"],
    ambition: ["Software Engineer", "Marchant", "Cyber Security"],
    hobbies: ["Reading", "Travelling", "Coding"],
    schools: [
      {
        name: "Sallau Model Primary School Malumfashi",
        type: "Primary School",
        details: "<b>Program:- </b>General Education",
        link: "#"
      },
      {
        name: "Albasirah International Science Secondary School Malumfashi",
        type: "Junior Secondary School",
        details: "<b>Category:- </b>Ministry<br><b>Program:- </b>General Education",
        link: "#"
      },
      {
        name: "Government Technical Collage Funtua (G.T.C)",
        type: "Senior Secondary School",
        details: "<b>Category:- </b>Board<br><b>Program:- </b>Technical<br><b>Department:- </b>Fabrication and Welding",
        link: "#"
      },
      {
        name: "Bayero University Kano (BUK)",
        type: "Federal University, Kano, Nigeria",
        details: "<b>Course:- </b>Software Engineering<br><b>Faculty:- </b>Engineering<br><b>Program:- </b>Bacelor Degree<br><b>Status:- </b>Graduated <a href=''>Reference</a>",
        link: "#"
      },
      {
        name: "Bayero University Kano (BUK)",
        type: "Federal University, Kano, Nigeria",
        details: "<b>Course:- </b>Software Engineering<br><b>Faculty:- </b>Engineering<br><b>Program:- </b>Bacelor Degree<br><b>Status:- </b>Graduated <a href=''>Reference</a>",
        link: "#"
      },
      {
        name: "Bayero University Kano (BUK)",
        type: "Federal University, Kano, Nigeria",
        details: "<b>Course:- </b>Software Engineering<br><b>Faculty:- </b>Engineering<br><b>Program:- </b>Bacelor Degree<br><b>Status:- </b>Graduated <a href=''>Reference</a>",
        link: "#"
      }
    ],
    skills: [
      {name: "HTML", proficiency: 90},
      {name: "CSS", proficiency: 80},
      {name: "JavaScript", proficiency: 70},
      {name: "React", proficiency: 65},
      {name: "Node.js", proficiency: 60}
    ],
    tools: [
      {name: "VS Code", proficiency: 85},
      {name: "Git", proficiency: 75},
      {name: "Figma", proficiency: 60},
      {name: "Postman", proficiency: 55}
    ],
    languages: [
      {name: "English", proficiency: 80},
      {name: "Arabic", proficiency: 50},
      {name: "Hausa", proficiency: 100}
    ],
    experiences: [
      {
        company: "PowerSoft",
        position: "Chairman Executive Officer (C.E.O)",
        salary: "$700-$800",
        duration: "1.4 years",
        from: "10-3-2023",
        to: "Present",
        description: "Leading software development projects and managing company operations."
      },
      {
        company: "ASMAN Technologies",
        position: "Software development Engineer",
        salary: "$300-$400",
        duration: "2.4 years",
        from: "10-3-2024",
        to: "Present",
        description: "Developing software solutions for clients."
      },
      {
        company: "ASMAN Technologies",
        position: "Software development Engineer",
        salary: "$300-$400",
        duration: "2.4 years",
        from: "10-3-2024",
        to: "Present",
        description: "Developing software solutions for clients."
      }
    ],
    phoneNumber: "+2348083995850",
    whatsappNumber: "+2348083995850",
    email: "contact@example.com",
    profilePict: "Images/author-img.png",
    coverPict: "Images/thumb1.png",
    galleryImages: [
      "Images/prof-img.png",
      "Images/prof-img.png",
      "Images/prof-img.png",
      "Images/my best img.png",
      "Images/thumb1.png"
    ],
    socialLinks: {
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      whatsappChannel: "a",
      tiktok: "b",
      youtube: "c",
      other: "d"
    }
  },
  
  {
    regNo: "2012002",
    name: "Na'im Auwal",
    nickName: "Engnr.Na'eem",
    office: "Financial Secretary",
    award: "",
    totalAmount: "8000",
    points: "100",
    efficiency: "165 pnt (1%)",
    rank: "1st",
    about: "Hi! I am <strong>Na'eem Auwal</strong>, a passionate software engineer with expertise in web development and system design.",
    genderMarital: "Male | Single",
    address: "Danrimi,<br>Malumfashi,<br>Katsina State,<br>Nigeria",
    occupation: ["Software development", "Printing Service", "Selling Egg"],
    ambition: ["Software Engineer", "Marchant", "Cyber Security"],
    hobbies: ["Reading", "Travelling", "Coding"],
    schools: [
      {
        name: "Sallau Model Primary School Malumfashi",
        type: "Primary School",
        details: "<b>Program:- </b>General Education",
        link: "#"
      },
      {
        name: "Albasirah International Science Secondary School Malumfashi",
        type: "Junior Secondary School",
        details: "<b>Category:- </b>Ministry<br><b>Program:- </b>General Education",
        link: "#"
      },
      {
        name: "Government Technical Collage Funtua (G.T.C)",
        type: "Senior Secondary School",
        details: "<b>Category:- </b>Board<br><b>Program:- </b>Technical<br><b>Department:- </b>Fabrication and Welding",
        link: "#"
      },
      {
        name: "Bayero University Kano (BUK)",
        type: "Federal University, Kano, Nigeria",
        details: "<b>Course:- </b>Software Engineering<br><b>Faculty:- </b>Engineering<br><b>Program:- </b>Bacelor Degree<br><b>Status:- </b>Graduated <a href=''>Reference</a>",
        link: "#"
      },
      {
        name: "Bayero University Kano (BUK)",
        type: "Federal University, Kano, Nigeria",
        details: "<b>Course:- </b>Software Engineering<br><b>Faculty:- </b>Engineering<br><b>Program:- </b>Bacelor Degree<br><b>Status:- </b>Graduated <a href=''>Reference</a>",
        link: "#"
      },
      {
        name: "Bayero University Kano (BUK)",
        type: "Federal University, Kano, Nigeria",
        details: "<b>Course:- </b>Software Engineering<br><b>Faculty:- </b>Engineering<br><b>Program:- </b>Bacelor Degree<br><b>Status:- </b>Graduated <a href=''>Reference</a>",
        link: "#"
      }
    ],
    skills: [
      {name: "HTML", proficiency: 90},
      {name: "CSS", proficiency: 80},
      {name: "JavaScript", proficiency: 70},
      {name: "React", proficiency: 65},
      {name: "Node.js", proficiency: 60}
    ],
    tools: [
      {name: "VS Code", proficiency: 85},
      {name: "Git", proficiency: 75},
      {name: "Figma", proficiency: 60},
      {name: "Postman", proficiency: 55}
    ],
    languages: [
      {name: "English", proficiency: 80},
      {name: "Arabic", proficiency: 50},
      {name: "Hausa", proficiency: 100}
    ],
    experiences: [
      {
        company: "PowerSoft",
        position: "Chairman Executive Officer (C.E.O)",
        salary: "$700-$800",
        duration: "1.4 years",
        from: "10-3-2023",
        to: "Present",
        description: "Leading software development projects and managing company operations."
      },
      {
        company: "ASMAN Technologies",
        position: "Software development Engineer",
        salary: "$300-$400",
        duration: "2.4 years",
        from: "10-3-2024",
        to: "Present",
        description: "Developing software solutions for clients."
      },
      {
        company: "ASMAN Technologies",
        position: "Software development Engineer",
        salary: "$300-$400",
        duration: "2.4 years",
        from: "10-3-2024",
        to: "Present",
        description: "Developing software solutions for clients."
      }
    ],
    phoneNumber: "+2348083995850",
    whatsappNumber: "+2348083995850",
    email: "contact@example.com",
    profilePict: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEim2F0wUrxR-1tu48VcfXjcqE5m3elxTVw09e6TSM7C8CdyINPcJaGCG-OquAQO84KHKOXgE25Xp19RBJqwyZ2Y4hZB-YfI1Lon6Kskfb8OO91rsInGkmYD3Y0-jlFFjJee934jK1U3avcbxkfSlMW8luQnNpBEkH7ePuITWr8wq2O-8RGDHUOI__l-gk6F/s690/2012002-prof.png",
    coverPict: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh_NlSvcN9T1puJ-rHlll2fJwQnOll-iIJSDPf_bxM_3EXyKSDrk_7pwU7x1MfiAJNxjAKoBQnIdas81MqlKv4PrnEYOVAuANXrjtJ12NtfFxJXxrKEUXRKrc3V8SINMm7gFljhL6v2cn8yqsiaeqMVo2zPijxlZQM389JpMkR5eqhVurl3pAf-cEmYEPmO/s750/2012002-cover.png",
    galleryImages: [
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEim2F0wUrxR-1tu48VcfXjcqE5m3elxTVw09e6TSM7C8CdyINPcJaGCG-OquAQO84KHKOXgE25Xp19RBJqwyZ2Y4hZB-YfI1Lon6Kskfb8OO91rsInGkmYD3Y0-jlFFjJee934jK1U3avcbxkfSlMW8luQnNpBEkH7ePuITWr8wq2O-8RGDHUOI__l-gk6F/s690/2012002-prof.png",
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEim2F0wUrxR-1tu48VcfXjcqE5m3elxTVw09e6TSM7C8CdyINPcJaGCG-OquAQO84KHKOXgE25Xp19RBJqwyZ2Y4hZB-YfI1Lon6Kskfb8OO91rsInGkmYD3Y0-jlFFjJee934jK1U3avcbxkfSlMW8luQnNpBEkH7ePuITWr8wq2O-8RGDHUOI__l-gk6F/s690/2012002-prof.png",
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEim2F0wUrxR-1tu48VcfXjcqE5m3elxTVw09e6TSM7C8CdyINPcJaGCG-OquAQO84KHKOXgE25Xp19RBJqwyZ2Y4hZB-YfI1Lon6Kskfb8OO91rsInGkmYD3Y0-jlFFjJee934jK1U3avcbxkfSlMW8luQnNpBEkH7ePuITWr8wq2O-8RGDHUOI__l-gk6F/s690/2012002-prof.png",
      "Images/my best img.png",
      "Images/thumb1.png"
    ],
    socialLinks: {
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      whatsappChannel: "a",
      tiktok: "b",
      youtube: "c",
      other: "d"
    }
  },
  
  {
    regNo: "2012003",
    name: "Aisha Mohammed",
    nickName: "Aishy",
    office: "Public Relations Officer",
    award: "2 Awards",
    totalAmount: "N15,000",
    efficiency: "180 pnt (20%)",
    rank: "2nd",
    about: "I'm Aisha Mohammed, a graphic designer and digital marketer with a passion for creative solutions.",
    genderMarital: "Female | Married",
    address: "GRA,<br>Katsina,<br>Katsina State,<br>Nigeria",
    occupation: ["Graphic Design", "Digital Marketing", "Content Creation"],
    ambition: ["Creative Director", "Entrepreneur"],
    hobbies: ["Photography", "Reading", "Traveling"],
    schools: [
      {
        name: "El-Amin International School",
        type: "Primary School",
        details: "<b>Program:- </b>General Education",
        link: "#"
      },
      {
        name: "Government Girls Secondary School Katsina",
        type: "Secondary School",
        details: "<b>Program:- </b>General Education",
        link: "#"
      },
      {
        name: "Ahmadu Bello University Zaria",
        type: "Federal University, Zaria, Nigeria",
        details: "<b>Course:- </b>Mass Communication<br><b>Faculty:- </b>Social Sciences<br><b>Program:- </b>Bacelor Degree<br><b>Status:- </b>Graduated <a href=''>Reference</a>",
        link: "#"
      }
    ],
    skills: [
      {name: "Photoshop", proficiency: 85},
      {name: "Illustrator", proficiency: 80},
      {name: "Social Media", proficiency: 90}
    ],
    tools: [
      {name: "Adobe Creative Suite", proficiency: 80},
      {name: "Canva", proficiency: 90},
      {name: "Google Analytics", proficiency: 70}
    ],
    languages: [
      {name: "English", proficiency: 90},
      {name: "Hausa", proficiency: 100},
      {name: "French", proficiency: 40}
    ],
    experiences: [
      {
        company: "Creative Minds Ltd",
        position: "Senior Graphic Designer",
        salary: "$500-$600",
        duration: "3.2 years",
        from: "5-1-2021",
        to: "Present",
        description: "Creating visual concepts to communicate ideas that inspire, inform, and captivate consumers."
      },
      {
        company: "Digital Solutions Inc",
        position: "Digital Marketer",
        salary: "$400-$500",
        duration: "2.1 years",
        from: "10-6-2022",
        to: "Present",
        description: "Developing and implementing digital marketing strategies."
      }
    ],
    phoneNumber: "+2348034567890",
    whatsappNumber: "+2348034567890",
    email: "aisha@example.com",
    profilePict: "",
    coverPict: "",
    galleryImages: [
      "",
      ""
    ],
    socialLinks: {
      facebook: "https://facebook.com/aisha",
      instagram: "https://instagram.com/aishy",
      linkedin: "",
      twitter: "https://twitter.com/aishy",
      whatsappChannel: "",
      tiktok: "",
      youtube: "",
      other: ""
    }
  }
];

// Function to load profile data based on registration number
function loadProfileData(regNo) {
  try {
    // Find user by registration number
    const user = users.find(u => u.regNo === regNo);
    if (!user) {
      showErrorPage(regNo);
      return;
    }

    // Set default images if not provided
    const defaultProfilePic = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj52RHdUjRZTYhNhP5TNOH_xx7lts2nWDYdKPqrMYz7fxOmHUzLJd8x1K3mrBOcHTeFmRHuALH7RHu3gydHjtX3mHxFhyphenhyphenS2VCSkHUUA5DkPqVlIvpMW8cZM7wfZkUz61DJx7Lwzo67QPzmQoJoRXyJu-Mfr2B_HUNfKLRySYyt9TVLIC8EU1e6sS1xqs1M/s229/images.png";
    const defaultCoverPic = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj52RHdUjRZTYhNhP5TNOH_xx7lts2nWDYdKPqrMYz7fxOmHUzLJd8x1K3mrBOcHTeFmRHuALH7RHu3gydHjtX3mHxFhyphenhyphenS2VCSkHUUA5DkPqVlIvpMW8cZM7wfZkUz61DJx7Lwzo67QPzmQoJoRXyJu-Mfr2B_HUNfKLRySYyt9TVLIC8EU1e6sS1xqs1M/s229/images.png";

    // Basic Info
    document.getElementById('coverImg').src = user.coverPict || defaultCoverPic;
    document.getElementById('profileImg').src = user.profilePict || defaultProfilePic;
    document.getElementById('office').textContent = user.office || 'Not specified';
    document.getElementById('fullName').textContent = user.name || 'Anonymous';
    document.getElementById('regNoNickName').innerHTML = 
      `${user.regNo || 'N/A'}<i>{${user.nickName || 'No nickname'}}</i>`;
    
    // Organization Info
    document.getElementById('award').textContent = user.award || 'No awards';
    document.getElementById('totalAmount').textContent = 'N' + user.totalAmount || 'N0';
    document.getElementById('efficiency').textContent = user.efficiency || 'N/A';
    document.getElementById('rank').textContent = user.rank || 'Member';
    
    // Personal Info
    document.getElementById('aboutMe').innerHTML = user.about || 'No information provided';
    document.getElementById('genderMarital').textContent = user.genderMarital || 'Not specified';
    document.getElementById('address').innerHTML = user.address || 'Address not available';
    
    // Other Info
    populateList('occupations', user.occupation);
    populateList('ambitions', user.ambition);
    populateList('hobbies', user.hobbies);
    
    // Education
    populateEducation(user.schools);
    
    // Professions
    populateSkills('skills', user.skills);
    populateSkills('tools', user.tools);
    populateSkills('languages', user.languages);
    
    // Experience
    populateExperiences(user.experiences);
    
    // Contact Links
    setupContactLinks(user);
    
    // Social Links
    setupSocialLinks(user.socialLinks);
    
    // Gallery Images
    setupGalleryImages(user.galleryImages, defaultProfilePic);
  } catch (error) {
    console.error('Error loading profile data:', error);
    showErrorPage();
  }
}
// Error Page
function showErrorPage(regNo = '') {
  document.getElementById('profileContainer').innerHTML = `
    <div class="error-message" style="text-align: center; padding: 50px;">
      <h2>Profile Not Found</h2>
      <p>No user found with registration number: ${regNo}</p>
      <a href="members.html" style="color: #1c69ea; text-decoration: none;">Browse all members profiles</a>
    </div>
  `;
}

function setupContactLinks(user) {
  if (user.phoneNumber) {
    document.getElementById('phoneLink').href = `tel:${user.phoneNumber}`;
    document.getElementById('smsLink').href = `sms:${user.phoneNumber}?body=Hello, %0A%0AMay I get More About ${user.name}. %0A%0AI reached you by your official website`;
    document.getElementById('whatsappLink').href = `https://wa.me/${user.whatsappNumber}?text=Hello, %0A%0AMay I get More About ${user.name}. %0A%0AI reached you by your official website`;
  }
  
  if (user.email) {
    document.getElementById('emailLink').href = `mailto:${user.email}?subject=Hello ${user.name.split(' ')[0] || ''},&body=May I get More About ${user.name}. %0A%0AI reached you by your official website`;
  }
}

function setupSocialLinks(socialLinks) {
  setSocialLink('facebookLink', socialLinks.facebook);
  setSocialLink('instagramLink', socialLinks.instagram);
  setSocialLink('linkedinLink', socialLinks.linkedin);
  setSocialLink('twitterLink', socialLinks.twitter);
  setSocialLink('whatsappChannelLink', socialLinks.whatsappChannel);
  setSocialLink('tiktokLink', socialLinks.tiktok);
  setSocialLink('youtubeLink', socialLinks.youtube);
  setSocialLink('otherLink', socialLinks.other);
}

function setupGalleryImages(galleryImages, defaultImage) {
  for (let i = 0; i < 5; i++) {
    const img = document.getElementById(`galleryImg${i+1}`);
    if (img) {
      // Check if the current gallery image exists and is not empty
      if (galleryImages[i] && galleryImages[i].trim() !== '') {
        img.src = galleryImages[i];
        img.style.display = 'block';
      } else {
        // Use default image if no gallery image is provided
        img.src = defaultImage;
        img.style.display = 'block'; // Still show it even with default image
      }
    }
  }
}

function setSocialLink(elementId, url) {
  const element = document.getElementById(elementId);
  if (element) {
    if (url) {
      element.href = url;
      element.style.display = 'block';
    } else {
      element.style.display = 'none';
    }
  }
}

function populateList(elementId, items) {
  const element = document.getElementById(elementId);
  if (!element) return;
  
  element.innerHTML = '';
  if (!items || items.length === 0) {
    const li = document.createElement('li');
    li.textContent = 'None specified';
    element.appendChild(li);
    return;
  }
  
  items.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    element.appendChild(li);
  });
}

function populateEducation(schools) {
  const mainList = document.getElementById('educationList');
  const moreList = document.getElementById('moreEducationList');
  
  if (!mainList || !moreList) return;
  
  mainList.innerHTML = '';
  moreList.innerHTML = '';
  
  if (!schools || schools.length === 0) {
    const li = document.createElement('li');
    li.className = 'a-all';
    li.textContent = 'No education information available';
    mainList.appendChild(li);
    return;
  }
  
  // First 4 schools go to main list
  const mainSchools = schools.slice(0, 4);
  mainSchools.forEach(school => {
    const div = document.createElement('div');
    div.className = 'a-all';
    div.innerHTML = `
      <li class="ul"><i class="fas fa-${school.type.includes('Primary') || school.type.includes('Secondary') ? 'school' : 'university'}"></i> ${school.name || 'Unknown school'}</li>
      <p class="scl-typ">${school.type || ''}<br>${school.link ? `<a href="${school.link}">visit→</a>` : ''}</p>
      <div>${school.details || ''}</div>
    `;
    mainList.appendChild(div);
  });
  
  // Remaining schools go to more list
  const moreSchools = schools.slice(4);
  if (moreSchools.length > 0) {
    moreSchools.forEach(school => {
      const div = document.createElement('div');
      div.className = 'a-all';
      div.innerHTML = `
        <li class="ul"><i class="fas fa-${school.type.includes('Primary') || school.type.includes('Secondary') ? 'school' : 'university'}"></i> ${school.name || 'Unknown school'}</li>
        <p class="scl-typ">${school.type || ''}<br>${school.link ? `<a href="${school.link}">visit→</a>` : ''}</p>
        <div>${school.details || ''}</div>
      `;
      moreList.appendChild(div);
    });
  } else {
    document.querySelector('.a-more').style.display = 'none';
  }
}

function populateSkills(elementId, items) {
  const element = document.getElementById(elementId);
  if (!element) return;
  
  element.innerHTML = '';
  if (!items || items.length === 0) {
    const li = document.createElement('li');
    li.textContent = 'None specified';
    element.appendChild(li);
    return;
  }
  
  items.forEach(item => {
    const li = document.createElement('li');
    
    const a = document.createElement('a');
    a.href = '#';
    a.textContent = item.name || 'Unknown';
    
    const progress = document.createElement('progress');
    progress.value = item.proficiency || 0;
    progress.max = 100;
    progress.title = `${item.proficiency || 0}%`;
    
    li.appendChild(a);
    li.appendChild(progress);
    element.appendChild(li);
  });
}

function populateExperiences(experiences) {
  const list = document.getElementById('experienceList');
  if (!list) return;
  
  list.innerHTML = '';
  if (!experiences || experiences.length === 0) {
    const li = document.createElement('li');
    li.className = 'a-all';
    li.textContent = 'No experience information available';
    list.appendChild(li);
    return;
  }
  
  experiences.forEach(exp => {
    const div = document.createElement('div');
    div.className = 'a-all';
    div.innerHTML = `
      <li class="ul"><i class="fas fa-user-tie"></i> ${exp.position || 'Unknown position'}</li>
      <p><b>Company:- </b>${exp.company || 'Unknown company'}</p>
      ${exp.salary ? `<p><b>Salary:- </b>${exp.salary}</p>` : ''}
      <p><b>Job type:- </b>Full-time</p>
      <p><b>Year of experience:- </b>${exp.duration || 'N/A'}</p>
      <p><b>From: </b>${exp.from || 'N/A'}, <b>To: </b>${exp.to || 'N/A'}</p>
      ${exp.description ? `
      <details>
        <summary class="role-desc">Role description</summary>
        <p class="desc">${exp.description}</p>
      </details>` : ''}
    `;
    list.appendChild(div);
  });
}

// Initialize profile when page loads
document.addEventListener('DOMContentLoaded', function() {
  // Get the registration number from URL or default to first user
  const urlParams = new URLSearchParams(window.location.search);
  const regNo = urlParams.get('regNo') || users[0].regNo;
  
  // Load profile data
  loadProfileData(regNo);
});