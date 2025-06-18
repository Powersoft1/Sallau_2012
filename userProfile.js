// userProfile.js - Dynamic Profile Data with Multiple Users (Updated with Calculations)

const users = [
  {
    regNo: "2012002",
    OVN: "",
    Pass: "21716994",
    name: "Na'im Auwal",
    nickName: "Engnr.Na'eem",
    office: "Financial Secretary",
    verified: true,
    award: "",
    totalAmount: "5000",
    points: "",
    about: "Hi! I am <strong>Na'eem Auwal</strong>, a passionate software engineer with expertise in web development and system design.",
    genderMarital: "Male | Single",
    address: "Danrimi,<br>Malumfashi,<br>Katsina State,<br>Nigeria",
    occupation: ["Software development", "Printing Service", "Digital Marketing"],
    ambition: ["Software Engineer", "Marchant", "Cyber Security"],
    hobbies: ["Reading", "Travelling", "Programming", "Football", "Watcing Movie", "Visting Friends and Families"],
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
        name: "Aliko Dangote University of Science and Technology Wudil (ADUSTECH)",
        type: "State University, Kano, Nigeria",
        details: "<b>Course:- </b>Agricultural Engineering<br><b>Faculty:- </b>Faculty of Engineering<br><b>Program:- </b>Associate Degree<br><b>Status:- </b>Studying <a href=''>Reference</a>",
        link: "https://kustwudil.com"
      },
            {
        name: "Sololern Oline Course For Certification",
        type: "Oline Course Flatform",
        details: "<b>Course:- </b>Introduction to HTML<br><b>Program:- </b>Front end Web decelopment<br><b>Status:- </b>Completed <a href=''>Reference</a>",
        link: "https://sololern.com"
      },
    ],
    skills: [
      {name: "HTML", proficiency: 90},
      {name: "CSS", proficiency: 80},
      {name: "JavaScript", proficiency: 70},
      {name: "React", proficiency: 20},
      {name: "Node.js", proficiency: 20},
      {name: "PHP", proficiency: 50},
      {name: "MySql", proficiency: 50},
      {name: "Python", proficiency: 40},
      {name: "MS Excel / WPS Excel", proficiency: 95},
      {name: "QR Code Generating", proficiency: 98},
      {name: "Graphic Design", proficiency: 70},
      {name: "online Business", proficiency: 80},
      {name: "Affiliate Marketing", proficiency: 80},
      {name: "Blogging", proficiency: 95},
      {name: "YouTube Channel", proficiency: 80},
      {name: "Adds", proficiency: 90},
      {name: "Electrical Tech", proficiency: 20},
      {name: "Business Planning", proficiency: 80},
      {name: "Operating System Skills", proficiency: 90}
    ],
    tools: [
      {name: "VS Code", proficiency: 85},
      {name: "GitHub", proficiency: 75},
      {name: "Acode", proficiency: 95},
      {name: "WordPress", proficiency: 55},
      {name: "Blogger", proficiency: 98},
      {name: "XAMMP", proficiency: 20},
      {name: "Android Studio", proficiency: 10},
      {name: "MS Excel, Word, and Power Point", proficiency: 80},
      {name: "WPS", proficiency: 99},
      {name: "CamScanner", proficiency: 90},
      {name: "Correl Draw", proficiency: 50},
      {name: "Photo Shop", proficiency: 30},
      {name: "Canva", proficiency: 90},
      {name: "nucleApp", proficiency: 98},
      {name: "Google Form, and Zoho Form", proficiency: 90},
      {name: "PayStack", proficiency: 70},
      {name: "PayPal", proficiency: 80},
      {name: "Remiter", proficiency: 80},
      {name: "Seler", proficiency: 98},
      {name: "Google Adds", proficiency: 90},
      {name: "Android", proficiency: 90},
      {name: "IOS", proficiency: 50},
      {name: "Windows", proficiency: 80},
      {name: "Mac OS", proficiency: 60},
      {name: "Printers (DI, Canon etc", proficiency: 50}
    ],
    languages: [
      {name: "English", proficiency: 80},
      {name: "Arabic", proficiency: 50},
      {name: "Hausa", proficiency: 100}
    ],
    experiences: [
      {
        company: "ASMAN TECHNOLOGIES",
        position: "Chairman Executive Officer (C.E.O)",
        salary: "-",
        jobType: "Full Time",
        duration: "",
        from: "10-3-2025",
        to: "Present",
        description: "Leading Technological Company For Creativities, Contracts, and Projects and managing company operations."
      },
      {
        company: "PowerSoft",
        position: "Chairman Executive Officer (C.E.O)",
        salary: "N30,000-N300,000",
        jobType: "Full Time (Remote)",
        duration: "",
        from: "10-3-2024",
        to: "Present",
        description: "Leading software development projects and managing company operations."
      },
      {
        company: "ASMAN COMPUTERS",
        position: "Chairman Executive Officer (C.E.O)",
        salary: "N30,000-N100,000",
        jobType: "Full Time",
        duration: "",
        from: "10-3-2023",
        to: "Present",
        description: "Leading Graphic designs and Printing Service Projects and managing company operations"
      },
      {
        company: "Selling Egg and Empty Crates",
        position: "Chairman Executive Officer (C.E.O)",
        salary: "N30,000-N150,000",
        jobType: "Full Time",
        duration: "4 years",
        from: "10-1-2020",
        to: "8-1-2024",
        description: "Selling Eggs and Empty crates for eggs both paper and plastic crates"
      },
      {
        company: "CINDO COMMUNICATION VENTURES (Airtel Shop)",
        position: "Chairman Executive Officer (C.E.O)",
        salary: "N10,000-N20,000",
        jobType: "Full Time",
        duration: "1 year",
        from: "10-3-2024",
        to: "1-3-2025",
        description: "SIM Card selling and registration, Airtime retailing, and POS Cervices."
      },
      {
        company: "Maidaura Electronics",
        position: "Employee",
        salary: "-",
        jobType: "Full Time",
        duration: "1 year",
        from: "10-5-2022",
        to: "5-4-2023",
        description: "Repairing Elecronic devices and electrixal services."
      },
      {
        company: "El-hussain Farms",
        position: "Employee",
        salary: "N15,000-N20,000",
        jobType: "Full Time",
        duration: "1 year",
        from: "1-2-2020",
        to: "1-1-2021",
        description: "Employment for agro actuvities, layers carering, and eggs production."
      },
    ],
    phoneNumber: "+2348134398883",
    whatsappNumber: "+2348083995850",
    email: "naimauwal2000@gmail.com",
    profilePict: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgQPwaWJxMEg3FFPCV92qdLGOU90u0Gw7dYmHQ0vc2HjkmeZkLWQNm7svVUue7Th8NYnz3RuySnxS0HWTWCHQdXXW8astGhIKIE_ZCFIUh8gmZohnCTKCSYhmjdj_JYmIpdr6wz8Bq7XFmqJkyaSd7yW7BJ26fPyGMwpWwR5b9HcRaN1syVtwWjpB0NwwkD/s690/image-10.png",
    coverPict: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi0aDB9aJxYaxVmeunAnaInSHMx2arYEo5s4BHq3zAqC4uNR_Sq3AS7-L4vLzqsf7byJ6wyYxTfEEgOnZuFNfFtwKESnuLGpUH4GCqCQ4uzboecAmnxpYaCRrB6tB9CFHN2jKnjpiGi54Bu6SVk6fIXjVTtRc_TeppBVavHFytZkkCxtdWTdHs3rapH1ag9/s750/thumb1.png",
    galleryImages: [
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhghwGCqxT9e1vDPg9FyNkYLMxV2QNWCyptFyX__OWLSYTcM072ny64XDOy9iyL_RnwQBTy-tzvYsOYxguDT4jH7SFWggOeYGpD_gSLnXfEwFdv8M4ryFC88DN0RZFLyXNd4kMsE2PnZn5yDLiNM_SjxI3SB2fPPbn_MGwRK58o3YIRT7N40l_gce_7Yvvv/s1080/IMG-20250404-WA0025.jpg",
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEifVDnvcg95wfrb3oBsQjon1FBG9zhdlkBhI1BPTYSHW7vPy1T3fFWtvdCG0QyVvRnXQcaeEyfILT-kuVvJbhLY1b7pm_nN4j1rRLwW7uoSqkrFHpjBSQC_x6rU92oe_NVfdTxNF0u64QnBCYa7u3fITcLwgKUAgwVM2PySgQ3qjKvu3tVrwQCnNp1o9MeX/s1440/FB_IMG_16568629963977729.jpg",
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjsen3egb0NrAvTXLLg5RqpCGZfQFVvaHabgLg_JWZ_2JQvMR1HV_2QPSR-fh-F-Ueh7k4RhOUqOdpC799J0DaUvGAv1l7Fn3JAEJZHJYomyaez_kcgYSwKOHg9vl6oG1n0kxOlUkLGZOATO92HTNamlNsksz51gHwvJLW-jJwkFS51eu-hyDCUvkEDt3L7/s2160/Screenshot_20220728_164828_com.android.gallery3d.jpg",
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiapxeJ_XcpqRwczolSuuRguZTvWax0_weFHkE2NMWczHFSIQk7vb-UY4sof_ONh752yWszolmpn_24wkqa8muOQqoEjRamTPxzpCngQKuo9YfMZt1c4wyOJpsyy3oc9VZZgf573vg5RgZEbh6SGwB1XhrdjGoT383TKbZY50io4kYne1r__rjp05rWF-wa/s999/IMG-20210103-WA0019.jpg",
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEinXdlDZ70BP18gcxqTiws9SreBsLAcgpEDxt_HuqQufeAJu7pPaRP1b-WNEf2n3Mi9LAZ3DR80FdJkUe50rH61mXRH-7IbvcM4Q9bGlIOA56ccJhdUyd8e_zvziu3xWyR0lD32pUQ644AMsB5rZ5EBl4d7gv3_VsC6YX_Bh0PpuWx4LAV75cpfCCln6r8W/s1330/20220306_153340.jpg"
    ],
    socialLinks: {
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      whatsappChannel: "a",
      tiktok: "b",
      youtube: "c",
      website: "https://everestnaeem.blogspot.com"
    }
  },
  
];

// Utility function to clean and convert amount strings to numbers
const cleanAmount = (amount) => {
  if (typeof amount === 'number') return amount;
  if (typeof amount !== 'string') return 0;
  return parseFloat(amount.replace(/[^\d.-]/g, '')) || 0;
};

// 1. Calculate totalPoint for each user (totalAmount ÷ 1000 + points)
users.forEach(user => {
  user.totalPoint = (cleanAmount(user.totalAmount) / 1000) + parseInt(user.points || 0);
});

// 2. Calculate sum of all totalPoints
const totalPointsSum = users.reduce((sum, user) => sum + user.totalPoint, 0);

// 3. Calculate efficiency for each user (totalPoint ÷ totalPointsSum × 100)
users.forEach(user => {
  user.efficiency = totalPointsSum > 0 
    ? `${Math.round(user.totalPoint / totalPointsSum * 100)}%` 
    : "0%";
});

// 4. Calculate and assign ranks with proper suffixes
const rankedUsers = [...users].sort((a, b) => b.totalPoint - a.totalPoint);

rankedUsers.forEach((user, index) => {
  const rank = index + 1;
  let suffix = 'th';
  
  if (rank % 100 >= 11 && rank % 100 <= 13) {
    suffix = 'th';
  } else {
    switch (rank % 10) {
      case 1: suffix = 'st'; break;
      case 2: suffix = 'nd'; break;
      case 3: suffix = 'rd'; break;
      default: suffix = 'th'; break;
    }
  }
  
  user.rank = `${rank}${suffix}`;
});

  //#######Verifying#########
  users .forEach((user, index) => {
  if(user.verified) {
  user.vName = `${user.name} <i class="fas fa-check-circle" style="color: #1da1f2;"></i>`;
  }
});

