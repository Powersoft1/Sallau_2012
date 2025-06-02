// Updated userProfile.js
const users = [
  {
    regNo: "2012002",
    name: "Na'im Auwal",
    nickName: "Na'eem",
    office: "Financial Secretary",
    award: "1 Award",
    totalAmount: "N10,000",
    efficiency: "165 pnt (15%)",
    rank: "1st",
    status: "Active Member", // Added status field
    about: "Hi! I am <strong>Na'eem Auwal</strong> this content will be details about ..........",
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
      }
    ],
    skills: [
      {name: "Html", proficiency: 90},
      {name: "CSS", proficiency: 80},
      {name: "JavaScript", proficiency: 70}
    ],
    tools: [
      {name: "VS Code", proficiency: 85},
      {name: "Git", proficiency: 75},
      {name: "Figma", proficiency: 60}
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
      }
    ],
    phoneNumber: "+2348083995850",
    whatsappNumber: "+2348083995850",
    email: "contact@example.com",
    profilePict: "Images/author-img.png",
    coverPict: "Images/thumb1.png",
    galleryImages: [ // Combined images array
      "Images/prof-img.png",
      "Images/prof-img.png",
      "Images/prof-img.png"
    ],
    socialLinks: {
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      whatsappChannel: "",
      tiktok: "",
      youtube: "",
      other: ""
    }
  }
];

// Update the loadProfileData function to include status and new image handling
function loadProfileData(x) {
  try {
    const user = users.find(u => u.regNo === x);
    if (!user) {
      console.error('User not found with regNo:', x);
      document.getElementById('profileContainer').innerHTML = `
        <div class="error-message">
          <h2>Profile Not Found</h2>
          <p>No user found with registration number: ${x}</p>
          <a href="table.html">Browse all profiles</a>
        </div>
      `;
      return;
    }

    // Set default images if not provided
    const defaultProfilePic = "Images/default-profile.png";
    const defaultCoverPic = "Images/default-cover.png";

    // Basic Info
    document.getElementById('coverImg').src = user.coverPict || defaultCoverPic;
    document.getElementById('profileImg').src = user.profilePict || defaultProfilePic;
    document.getElementById('office').textContent = user.office || 'Not specified';
    document.getElementById('fullName').textContent = user.name || 'Anonymous';
    document.getElementById('regNoNickName').innerHTML = 
      `${user.regNo || 'N/A'}<i>{${user.nickName || 'No nickname'}}</i>`;
    
    // Organization Info
    document.getElementById('award').textContent = user.award || 'No awards';
    document.getElementById('totalAmount').textContent = user.totalAmount || 'N/A';
    document.getElementById('efficiency').textContent = user.efficiency || 'N/A';
    document.getElementById('rank').textContent = user.rank || 'N/A';
    document.getElementById('status').textContent = user.status || 'N/A'; // Added status display
    
    // Personal Info
    document.getElementById('aboutMe').innerHTML = user.about || 'No information provided';
    document.getElementById('genderMarital').textContent = user.genderMarital || 'Not specified';
    document.getElementById('address').innerHTML = user.address || 'Address not available';
    
    // Other Info
    populateList('occupations', user.occupation);
    populateList('ambitions', user.ambition);
    populateList('hobbies', user.hobbies);
    
    // Education - Updated to separate sections
    populateEducation(user.schools);
    
    // Professions
    populateSkills('skills', user.skills);
    populateSkills('tools', user.tools);
    populateSkills('languages', user.languages);
    
    // Experience - Updated to separate sections
    populateExperiences(user.experiences);
    
    // Contact Links
    if (user.phoneNumber) {
      document.getElementById('phoneLink').href = `tel:${user.phoneNumber}`;
      document.getElementById('smsLink').href = `sms:${user.phoneNumber}?body=Hello, %0A%0AMay I get More About xxxx. %0A%0AI reached you by your official website`;
      document.getElementById('whatsappLink').href = `https://wa.me/${user.whatsappNumber}?text=Hello, %0A%0AMay I get More About xxxx. %0A%0AI reached you by your official website`;
    }
    
    if (user.email) {
      document.getElementById('emailLink').href = `mailto:${user.email}?subject=Hello ${user.name.split(' ')[0] || ''},&body=May I get More About xxxx. %0A%0AI reached you by your official website`;
    }
    
    // Social Links
    setSocialLink('facebookLink', user.socialLinks.facebook);
    setSocialLink('instagramLink', user.socialLinks.instagram);
    setSocialLink('linkedinLink', user.socialLinks.linkedin);
    setSocialLink('twitterLink', user.socialLinks.twitter);
    setSocialLink('whatsappChannelLink', user.socialLinks.whatsappChannel);
    setSocialLink('tiktokLink', user.socialLinks.tiktok);
    setSocialLink('youtubeLink', user.socialLinks.youtube);
    setSocialLink('otherLink', user.socialLinks.other);
    
    // Gallery Images - Updated to handle 3 images
    for (let i = 0; i < 3; i++) {
      const img = document.getElementById(`galleryImg${i+1}`);
      const tableImg = document.getElementById(`tableImg${i+1}`);
      if (img && tableImg) {
        img.src = user.galleryImages[i] || defaultProfilePic;
        tableImg.src = user.galleryImages[i] || defaultProfilePic;
        img.style.display = user.galleryImages[i] ? 'block' : 'none';
        tableImg.style.display = user.galleryImages[i] ? 'block' : 'none';
      }
    }
  } catch (error) {
    console.error('Error loading profile data:', error);
    alert('An error occurred while loading the profile. Please try again.');
  }
}

// Updated populateEducation function to separate sections
function populateEducation(schools) {
  const educationList = document.getElementById('educationList');
  if (!educationList) return;
  
  educationList.innerHTML = '';
  
  if (!schools || schools.length === 0) {
    const li = document.createElement('li');
    li.className = 'a-all';
    li.textContent = 'No education information available';
    educationList.appendChild(li);
    return;
  }
  
  // Primary School
  const primarySchool = schools.find(s => s.type.includes('Primary'));
  if (primarySchool) {
    const div = document.createElement('div');
    div.className = 'a-all';
    div.innerHTML = `
      <li class="ul"><i class="fas fa-school"></i> Primary School</li>
      <div class="school-name">${primarySchool.name || 'Unknown school'}</div>
      <div class="school-type">${primarySchool.type || ''}<br>${primarySchool.link ? `<a href="${primarySchool.link}">visit→</a>` : ''}</div>
      <div>${primarySchool.details || ''}</div>
    `;
    educationList.appendChild(div);
  }
  
  // Junior Secondary School
  const jsSchool = schools.find(s => s.type.includes('Junior'));
  if (jsSchool) {
    const div = document.createElement('div');
    div.className = 'a-all';
    div.innerHTML = `
      <li class="ul"><i class="fas fa-school"></i> Junior Secondary School</li>
      <div class="school-name">${jsSchool.name || 'Unknown school'}</div>
      <div class="school-type">${jsSchool.type || ''}<br>${jsSchool.link ? `<a href="${jsSchool.link}">visit→</a>` : ''}</div>
      <div>${jsSchool.details || ''}</div>
    `;
    educationList.appendChild(div);
  }
  
  // Senior Secondary School
  const ssSchool = schools.find(s => s.type.includes('Senior'));
  if (ssSchool) {
    const div = document.createElement('div');
    div.className = 'a-all';
    div.innerHTML = `
      <li class="ul"><i class="fas fa-school"></i> Senior Secondary School</li>
      <div class="school-name">${ssSchool.name || 'Unknown school'}</div>
      <div class="school-type">${ssSchool.type || ''}<br>${ssSchool.link ? `<a href="${ssSchool.link}">visit→</a>` : ''}</div>
      <div>${ssSchool.details || ''}</div>
    `;
    educationList.appendChild(div);
  }
  
  // Tertiary Education
  const tertiarySchools = schools.filter(s => 
    s.type.includes('University') || 
    s.type.includes('College') || 
    s.type.includes('Institute')
  );
  
  if (tertiarySchools.length > 0) {
    tertiarySchools.forEach((school, index) => {
      const div = document.createElement('div');
      div.className = 'a-all';
      div.innerHTML = `
        <li class="ul"><i class="fas fa-university"></i> Tertiary ${index + 1}</li>
        <div class="school-name">${school.name || 'Unknown school'}</div>
        <div class="school-type">${school.type || ''}<br>${school.link ? `<a href="${school.link}">visit→</a>` : ''}</div>
        <div>${school.details || ''}</div>
      `;
      educationList.appendChild(div);
    });
  }
}

// Updated populateExperiences function to separate sections
function populateExperiences(experiences) {
  const experienceList = document.getElementById('experienceList');
  if (!experienceList) return;
  
  experienceList.innerHTML = '';
  
  if (!experiences || experiences.length === 0) {
    const li = document.createElement('li');
    li.className = 'a-all';
    li.textContent = 'No experience information available';
    experienceList.appendChild(li);
    return;
  }
  
  experiences.forEach((exp, index) => {
    const div = document.createElement('div');
    div.className = 'a-all';
    div.innerHTML = `
      <li class="ul"><i class="fas fa-briefcase"></i> Experience ${index + 1}</li>
      <div class="experience-position">${exp.position || 'Unknown position'}</div>
      <div><b>Company:- </b>${exp.company || 'Unknown company'}</div>
      ${exp.salary ? `<div><b>Salary:- </b>${exp.salary}</div>` : ''}
      <div><b>Job type:- </b>Full-time</div>
      <div><b>Year of experience:- </b>${exp.duration || 'N/A'}</div>
      <div><b>From: </b>${exp.from || 'N/A'}, <b>To: </b>${exp.to || 'N/A'}</div>
      ${exp.description ? `
      <details>
        <summary class="role-desc">Role description</summary>
        <p class="desc">${exp.description}</p>
      </details>` : ''}
    `;
    experienceList.appendChild(div);
  });
}

// Rest of the helper functions remain the same...