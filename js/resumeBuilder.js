/*
This is empty on purpose! Your code to build the resume will go here.
 */
// $("#main").append("Fangzhou Hu");
// var nicethought = "I am good and I am cool.";
// var thought = nicethought.replace( "cool", "lazy"); //replace only replace the first appear of the pattern
// //var thought = thought.replace("am","are");
// console.log(thought);
//  $("#main").append(thought);
// //lesson 2 follow
// var role = "Web Developer";
// var formattedRole = HTMLheaderRole.replace("%data%",role);
// $("#header").prepend(formattedRole);
// //lesson 2
// var name = "Fangzhou Hu";
// var formattedName = HTMLheaderName.replace("%data%",name);
// $("#header").prepend(formattedName);
var bio = {
    "name": "Fangzhou Hu",
    "role": "Software Engineering/ Web Developer",
    "contacts": {
        "location": "La Jolla, CA",
        "address": "1 MIRAMAR ST # 929798, La Jolla, CA 92092 0003",
        "mobile": "6088866617",
        "email": "fhu6@wisc.edu",
        "github": "Mosqidiot"
    },
    "biopic": "images/fry.jpg",
    "welcomeMessage": "One question, why every company stop hiring entry level programmers?",
    "skills": ["Java (3 years)", "R (3 years)", "PHP (1 year)", "C (3 year)", "HTML/CSS (1 year)", "JavaScript (1 year)",
        "JQuery", "Bootstrap", "XGboost package", "Maxnet package", "Chrome DevTool"
    ],
    "education": "University of Wisconsin, Madison BS Computer Science, May 2016"
};


var work = {
    "jobs": [{
        "employer": "Industrial Refrigeration Consortium (IRC)",
        "title": "Web Developer",
        "dates": "June, 2015 to May, 2016",
        "location": "Madison, WI",
        "description": "Developed and maintained IRC's website, Apache Server and SQL database. " +
            "The IRC website provides refrigeration related educational resource to multinational " +
            "corporations such as Kraft and Nestle. I implemented a course testing app for clients " +
            "to create online tests and auto print out the test result, Developed the charge management " +
            "application of equipments in a refrigeration system, implemented a search engine using" +
            "Google API and other specific search functions for content display"
    }]
};

var projects = {
    "projects": [{
                "title": "Web page mock (JS/CSS/HTML/JQuery/Bootsrap)",
                "dates": "August, 2016",
                "description": "Web page mock is front end project about gennerating a web page based on a given prototype. This web pasge is designed to be reponsive for landscape, portrait and desktop viewport. This web has several poping out screens controled by JS functions. I also implied to use open library Bootstrap and Jquery to support some auto-filling functions on filters. If you want more information about this project you can download through the link below. <a id = \"small-link\" href = \"https://mosqidiot.github.io/Tagrem_Frontend_Dev_Test/\">Download the project</a>",
                "images": ["images/whole-page.png"]
            },

            {
                "title": "Nannon AI (Java/Bayesian network/Object Oriented)",
                "dates": "Janaury, 2014 to March, 2014",
                "description": "I implemented bayesian network algorithm, built the AI model for multiplayer chess game Nannon, and used a stochastic learning process to train and tune the AI model. Finally, I reached 60.74% winning rate over a random player for 1000k runes.",
                "images": ["images/Nannon.png", "images/Nannon.png"]
            }
        ]
        // {
        //     "title" : "test",
        //     "date" : "August, 2016",
        //     "discription" : "Web page mock is front end project about gennerating <a href = \"https://mosqidiot.github.io/Tagrem_Frontend_Dev_Test/\">Download the project</a>",
        //     "image" : ""
        // }


};


var education = {
    "schools": [{
        "name": "University of Wisconsin, Madison",
        "location": "Madison, WI",
        "degree": "Bachelor of Science",
        "majors": ["Computer scicence", "Statistics"],
        "dates": "2012, Augst - 2016, May",
        "url": "http://www.wisc.edu"
    }],
    "onlineCourses": [{
        "title": "Front-end web developer",
        "school": "Udacity.com",
        "dates": "June 2016 - now",
        "url": "http://www.Udacity.com"
    }]
};

bio.display = function() {
    // overview variable initialization
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedMobil = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    //profile
    var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    //skill
    var formatedSkillHeader = HTMLskillsStart;
    //work
    //overview
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#topContacts").append(formattedMobil);
    $("#topContacts").append(formattedEmail);
    $("#topContacts").append(formattedGithub);
    $("#topContacts").append(formattedLocation);
    $("#header").append(formattedPic);
    $("#header").append(formattedWelcome);
    //bottom
    $("#footerContacts").append(formattedMobil);
    $("#footerContacts").append(formattedEmail);
    $("#footerContacts").append(formattedGithub);
    $("#footerContacts").append(formattedLocation);

    //Skill glance
    $("#header").append(formatedSkillHeader);
    bio.skills.forEach(function(entry) {
        $("#skills").append(HTMLskills.replace("%data%", entry));
    });
};
//work
work.display = function() {
    work.jobs.forEach(function(entry) {

        $("#workExperience").append(HTMLworkStart);
        var foremployer = HTMLworkEmployer.replace("%data%", entry.employer);
        var fortitle = HTMLworkTitle.replace("%data%", entry.title);
        var fordates = HTMLworkDates.replace("%data%", entry.dates);
        var forloc = HTMLworkLocation.replace("%data%", entry.location);
        var fordisc = HTMLworkDescription.replace("%data%", entry.description);

        $(".work-entry:last-of-type").append(foremployer);
        $(".work-entry:last-of-type").append(fortitle);
        $(".work-entry:last-of-type").append(fordates);
        $(".work-entry:last-of-type").append(forloc);
        $(".work-entry:last-of-type").append(fordisc);

    });
};

education.display = function() {
    education.schools.forEach(function(entry) {
        $("#education").append(HTMLschoolStart);
        var forschoolname = HTMLschoolName.replace("%data%", entry.name);
        forschoolname = forschoolname.replace("#", entry.url);
        var forschooldegree = HTMLschoolDegree.replace("%data%", entry.degree);
        var forschooldates = HTMLschoolDates.replace("%data%", entry.dates);
        var forschoollocation = HTMLschoolLocation.replace("%data%", entry.location);
        var forschoolmajor = HTMLschoolMajor.replace("%data%", entry.majors);

        $(".education-entry:last-of-type").append(forschoolname);
        $(".education-entry:last-of-type").append(forschooldegree);
        $(".education-entry:last-of-type").append(forschooldates);
        $(".education-entry:last-of-type").append(forschoollocation);
        $(".education-entry:last-of-type").append(forschoolmajor);
    });
    education.onlineCourses.forEach(function(entry) {
        $("#education").append(HTMLonlineClasses);
        $("#education").append(HTMLschoolStart);
        var forOLtitle = HTMLonlineTitle.replace("%data%", entry.title);
        // forschoolname = forschoolname.replace("#",entry.url);
        var forOLschool = HTMLonlineSchool.replace("%data%", entry.school);
        var forOLdates = HTMLonlineDates.replace("%data%", entry.dates);
        var forurl = HTMLonlineURL.replace("%data%", entry.url);

        $(".education-entry:last-of-type").append(forOLtitle);
        $(".education-entry:last-of-type").append(forOLschool);
        $(".education-entry:last-of-type").append(forOLdates);
        $(".education-entry:last-of-type").append(forurl);

    });

};

projects.display = function() {
    projects.projects.forEach(function(entry) {
        $("#projects").append(HTMLprojectStart);
        var forprojecttitle = HTMLprojectTitle.replace("%data%", entry.title);
        var forprojectDates = HTMLprojectDates.replace("%data%", entry.dates);
        var forprojectDiscript = HTMLprojectDescription.replace("%data%", entry.description);
        $(".project-entry:last-of-type").append(forprojecttitle);
        $(".project-entry:last-of-type").append(forprojectDates);
        $(".project-entry:last-of-type").append(forprojectDiscript);
        entry.images.forEach(function(e) {
            var forprojectImage = HTMLprojectImage.replace("%data%", e);
            $(".project-entry:last-of-type").append(forprojectImage);
        });



    });
};
bio.display();
work.display();
projects.display();
education.display();
$("#mapDiv").append(googleMap);