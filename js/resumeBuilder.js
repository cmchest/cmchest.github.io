'use strict';

var bio = {
    "name": "Carlos Mendoza",
    "role": "Frontend Web Developer",
    "contacts": {
        "mobile": "011+52+9212407170",
        "email": "c_mendoza_chesty@hotmail.com",
        "github": "cmchest",
        "location": "Mexico"
    },
    "welcomeMessage": "Hi, let me show you my resume, created with some Javascript, JQuery and Bootstrap...hope you like it",
    "skills": [
        "Entrepreneur", "Decision Making", "Teamwork", "Critical & analytical thinking"
    ],
    "biopic": "images/fry.jpg"
};

var education = {
    "schools": [{
        "name": "ITESM Tec de Monterrey",
        "location": "Monterrey N.L. Mexico",
        "degree": "B.A. Marketing",
        "dates": "2006",
        "major": "Marketing"
    }, {
        "name": "La Sorbonne",
        "location": "Paris, france",
        "degree": "Certificate",
        "dates": "2000",
        "major": "Cours de langue et Civilisation Française"

    }],
    "onlineCourses": [{
        "title": "Frontend web devloper Nanodegree",
        "school": "Udacity",
        "dates": "2015",
        "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }, {
    	"title": "Fundamentals of Computing Specializations",
    	"school": "Rice University",
    	"dates": "2015-2016",
    	"url": "https://www.coursera.org/specializations/fundamentalscomputing2"
    }, {
        "title": "Introduction to Bootstrap",
        "school": "Microsoft",
        "dates": "2015",
        "url": "https://www.edx.org/course/introduction-bootstrap-tutorial-microsoft-dev203x-0"
    }]
};
var work = {
    "jobs": [{
        "employer": "Talleres SuperAuto Powts",
        "title": "Production Coordinator- Client Partner (Majority Shareholder)",
        "location": "Coatzacoalcos, Veracruz",
        "dates": "2009-2013",
        "description": "To achieve production times, by proposing and fulfilling a weakly production schedule. Implementing cost effective operations, and monitoring quality control. •Coordinating and allocating human manpower and inventory management. •Responsible for the selection and maintenance of equipment and purchase of spare parts; • Monitor product standards and implement quality-control programs to meet certification standards by international organizations, such as Cesvi. •Act as a liaison between the Finance & Accounting, Customer Relationship and Purchasing departments to determine policies, procedures and objectives within the company, in order to guarantee a cost effective customer satisfaction. •Supervise and motivate personnel. Performed personnel evaluations and appraisal reports based on performance. •Co-supervision of marketing, sales and finance departments. •Active member of the Shareholder Council."
    }, {
        "employer": "LLanserv del Centro",
        "title": "Accounts recivable manager",
        "location": "Coatzacoalcos, Veracruz",
        "dates": "2006-2009",
        "description": "Processed credit applications and assessed risk. •Conduct credit verification reports on all customers. Establish and managed credit limits. •Account reconciliation and invoice dispute resolution, elaborating marketing strategies to collect or renegotiate lost accounts. •Developed a marketing plan for the region, by introducing new brands and generating customer loyalty focusing in large fleet clients."
    }, {
        "employer": "Coatzacoalcos Veracruz, City Hall, Public Works Department",
        "title": "Car and Heavy Plant fleet Administrator and Public Works Supervisor",
        "location": "Coatzacoalcos, Veracruz",
        "dates": "2014-2015",
        "description": "Develop a weekly schedule for the Heavy Plant usage, coordinating with the different city departments that require the equipment. •Scheduled preventive maintenance in cars and truck fleets. •Supervise the expenses related to fuel consumption on vehicles, vehicle location (GPS), accidents and maintenance repairs. •Supervision of Public works: Keep track of every work in progress in order to achieve the delivery schedule. •Keep track of payment milestones of the work/activities related to the project(s)"
    }]
};

var projects = {
    "project": [{
        "title": "MyPortafolio",
        "dates": "2015",
        "description": "This was my first project for Udacity Nanodegree as a Frontend Web developer. HTML, CSS and Bootstrap",
        "images": "images/portafolio.png",
        "url": "http://cmchest.github.io/p1-portafolio/"
    }, {

        "title": "Arcade Game",
        "dates": "2015",
        "description": "Using JS, I made this clone of an Arcade Game, 'frogger'",
        "images": "images/arcade.png",
        "url": "http://cmchest.github.io/Game-clone/"
    },{
    	"title": "Stop Watch",
    	"dates": "2015",
    	"description": "Using phtyon I made this simple game, where you have to stop the timer at 0 milisenconds. Just press play to run the code",
    	"images": "images/stopwatch.png",
    	"url": "http://www.codeskulptor.org/#user40_UC9ZXyok2AG2qIU_7.py"
    }]
};

bio.display = function() {

    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedMessage = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
    var formmatedBiopic = HTMLbioPic.replace("%data%", bio.biopic);

    $("#header").append(formattedMessage);
    $("#header").prepend(formattedName + formattedRole + formmatedBiopic);

    if (bio.contacts.length) {
        $("#topContacts").append(HTMLcontactGeneric);

        for (var i = 0; i < bio.contacts.length; i++) {
            var formattedContact = HTMLcontactGeneric.replace("%data%", bio.contacts[i]);
            $("#topContacts").append(formattedContact);
        }
    }

    var formattedmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedemail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedlocation = HTMLlocation.replace("%data%", bio.contacts.location);


    $("#topContacts").prepend(formattedmobile + formattedemail + formattedgithub + formattedlocation);
    $("#footerContacts").append(formattedemail + formattedmobile);

    if (bio.skills.length) {
        $("#header").append(HTMLskillsStart);

        for (var i = 0; i < bio.skills.length; i++) {
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
            $("#skills").append(formattedSkill);
        }
    }
};
bio.display();



work.display = function() {
    for (var job = 0; job <  work.jobs.length; job++) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;

        $(".work-entry:last").append(
            formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);

        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
    }
};
work.display();

education.display = function() {
    for (var school = 0; school < education.schools.length; school++) {
        $("#education").append(HTMLschoolStart);

        var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
        var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        var formattedschoolAndDegree = formattedschoolName + formattedschoolDegree;

        $(".education-entry:last").append(formattedschoolAndDegree);

        var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        $(".education-entry:last").append(formattedschoolDates);

        var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        $(".education-entry:last").append(formattedschoolLocation);

        var formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
        $(".education-entry:last").append(formattedschoolMajor);
    }
};
education.display();


education.displayOnlineCourses = function() {
	
	 $(".education-entry:last").append(HTMLonlineClasses);

    for (var course = 0; course < education.onlineCourses.length; course++) {
       
        var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
        $(".education-entry:last").append(formattedonlineTitle);

        var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
        $(".education-entry:last").append(formattedonlineDates);

        var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
        $(".education-entry:last").append(formattedonlineSchool);

        var formattedonlineUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
        $(".education-entry:last").append(formattedonlineUrl);

    }
};
education.displayOnlineCourses();

projects.display = function() {
    for (var project = 0; project < projects.project.length; project++) {
        $("#projects").append(HTMLprojectStart);

        var formattedprojectTitle = HTMLprojectTitle.replace("%data%", projects.project[project].title);
        formattedprojectTitle = formattedprojectTitle.replace("%url%", projects.project[project].url);
        $(".project-entry:last").append(formattedprojectTitle);
        var formattedprojectDates = HTMLprojectDates.replace("%data%", projects.project[project].dates);
        $(".project-entry:last").append(formattedprojectDates);
        var formattedprojectDescription = HTMLprojectDescription.replace("%data%", projects.project[project].description);
        $(".project-entry:last").append(formattedprojectDescription);
        var formattedprojectImage = HTMLprojectImage.replace("%data%", projects.project[project].images);
        $(".project-entry:last").append(formattedprojectImage);
    }
};
projects.display();

function locationizer(work_obj) {
    var locationArray = [];

    for (var job in work_obj.jobs) {
        var newLocation = work_obj.jobs[job].location;
        locationArray.push(newLocation);
    }

    return locationArray;

}

function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase;
    name[0].slice(1).toLowerCase();

    return name[0] + " " + name[1];

}




$("#mapDiv").append(googleMap);

$(document).ready(function() {
    var flag = true;
    var scroll;

    $(window).scroll(function() {
        scroll = $(window).scrollTop();

        if (scroll > 376) {
            if (!flag) {
                $(".navbar-default").addClass("navbar-fixed-top");
                flag = true;
            }
        } else {
            if (flag) {
                $(".navbar-default").removeClass("navbar-fixed-top");
                flag = false;
            }
        }


    });
});