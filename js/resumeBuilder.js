var bio = {
	"name": "Aaron Lee Chantiles",
	"role": "Product Manager | Software Engineer | Leader | Veteran",
	"contacts": {
		"email": "aaronchantiles@gmail.com",
		"mobile": "(717) 434-9284",
		"github": "AaronChantiles",
		"location": "State College, Pennsylvania"
	},
	"biopic": "images/Time_Square.png",
	"welcomeMessage": "Welcome! I'm an intelligence professional with 7 years of military service. I'm looking to leverage my skills in Intelligence and software development to build amazing products in the tech industry. Shoot me an email if you have any questions.",
	"skills": ["Javascript  |  ","jQuery  |  ", "Python  |  ", "HTML  |  ", "CSS  |  ", "UX/UI  |  ", "Predictive Analysis  |  ", "Public Speaking  |  ", "Product Design  |  ", "Rapid Prototyping  |  ", "Product Development  |  ", "Research  |  ", "Operational Planning"],
	"display": function() {
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
        var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

        $("#header").prepend(formattedRole).prepend(formattedName).append(formattedPic, formattedWelcome);
        $("#header").append(HTMLskillsStart);

        var skill = bio.skills.length;
        for (var i = 0; i < skill; i++) {
            var formattedskills = HTMLskills.replace("%data%", bio.skills[i]);
            $("#skills").append(formattedskills);
        }

        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        var formattedGithub = HTMLgithub.replace("%contact%", "Github").replace("%data%", bio.contacts.github);
        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        $("#topContacts, #footerContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedLocation);
    }
};
var work = {
	"jobs": [
	{
		"employer": "U.S. Air Force",
		"title": "All-Source Intelligence Analyst / Collection Manager",
		"dates": "January 2017 - Present",
		"location": "Al Udeid AB, Qatar",
		"description": "This is a deployed ISR Plans position at Al Udeid Air Base. We're responsible for planning ISR operations and tasking assets across CENTCOM in support of intelligence collection and counter-terrorism operations."
	},
	{
		"employer": "U.S. Air Force",
		"title": "All-Source Intelligence Analyst / Trainer",
		"dates": "May 2014 - Present",
		"location": "State College, Pennsylvania",
		"description": "This is a full-time position with the 193rd Air Intelligence Squadron. I serve as an All-Source Intelligence Analyst as well as the Non-Commissioned Officer In-Charge (NCOIC) of Intelligence Readiness and Training. We're responsible for the training and readiness of 38 Intel professionals across 20 duty positions. We lead teams in developing intelligence products to ensure timely, accurate, and actionable intelligence meets our customer needs. We conduct extensive research & analysis on all-source Intel in a dynamically changing environment, break it down and present it to technical and non-technical audiences. And we deploy when necessary to provide intelligence support to operations around the world."
	},
	{
		"employer": "U.S. Air Force",
		"title": "Missile Facility Maintenance Technician",
		"dates": "August 2010 - April 2013",
		"location": "Great Falls, Montana",
		"description": "This was a full-time (40-70 hrs per week) active duty position with the 341st Missile Wing involving maintenance on nuclear missile facilities. The following duties were performed: Served as Assistant Team Chief: Directed maintenance of 7-12 person maintenance teams. Trained new airmen in on-the-job maintenance and security procedures in the missile field. Briefed the commander on potential threats/hazards to our team prior to each dispatch to the field. Used reasoning skills to diagnose issues and make time-critical repairs to missile facilities."
	}],
	"display": function() {
        var job = work.jobs.length;
        for (var a = 0; a < job; a++) {
            $("#workExperience").append(HTMLworkStart);
            var formattedworkEmp = HTMLworkEmployer.replace("%data%", work.jobs[a].employer);
            var formattedworkTitle = HTMLworkTitle.replace("%data%", work.jobs[a].title);
            var formattedworkDates = HTMLworkDates.replace("%data%", work.jobs[a].dates);
            var formattedworkLoc = HTMLworkLocation.replace("%data%", work.jobs[a].location);
            var formattedworkDesc = HTMLworkDescription.replace("%data%", work.jobs[a].description);
            var formattedWork = formattedworkEmp + formattedworkTitle + formattedworkDates + formattedworkLoc + formattedworkDesc;
            $(".work-entry:last").append(formattedWork);
        }
    }
};
 	
var education = {
 	"schools": [
 	{ 
		"school": "Penn State University",
		"location": "State College, Pennsylvania",
		"degree": "B.A. Political Science (GPA: 3.82)",
		"dates": "December 2014",
		"minors": "Sociology and History",
	}],
	"onlineCourses": [{
		"title": "<a href='https://www.udacity.com/course/product-design--ud509'>Product Design by <b>Google</b></a>",
		"school": "Udacity",
		"dates": "April 2017"
	},
	{
		"title": "<a href='https://www.udacity.com/course/rapid-prototyping--ud723'>Rapid Prototyping by <b>Google</b></a>",
		"school": "Udacity",
		"dates": "April 2017"
	},
	{
		"title": "<a href='https://www.udacity.com'>Programming Nanodegree</a>",
		"school": "Udacity",
		"dates": "March 2017"
	}],
	"CCAF": [{ 
		"school": "Community College of the Air Force (CCAF)",
		"degree": "A.S. Intelligence Studies and Technology",
		"dates": "August 2016"
	},
	{
		"school": "Community College of the Air Force (CCAF)",
		"degree": "A.S. Mechanical and Electrical Technology",
		"dates": "May 2012",
	}],
	"display": function() {
		$("#education").append(HTMLschoolEdu);
        var school = education.schools.length;
        for (var b = 0; b < school; b++) {
            $("#education").append(HTMLschoolStart);

            var formattedName = HTMLschoolName.replace("%data%", education.schools[b].school);
            var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[b].location);
            var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[b].degree);
            var formattedDates = HTMLschoolDates.replace("%data%", education.schools[b].dates);
            var formattedMinors = HTMLschoolMinors.replace("%data%", education.schools[b].minors);
            $(".education-entry:last").append(formattedName, formattedDegree, formattedDates, formattedLocation, formattedMinors);
        }
        $("#education").append(HTMLcollegeStart);
        var college = education.CCAF.length;
        for (var c = 0; c < college; c++) {
            $("#education").append(HTMLcollegeStart);

            var formattedcollegeName = HTMLcollegeName.replace("%data%", education.CCAF[c].school);
            var formattedcollegeDegree = HTMLcollegeDegree.replace("%data%", education.CCAF[c].degree);
            var formattedcollegeDates = HTMLcollegeDates.replace("%data%", education.CCAF[c].dates);
            $(".education-entry:last").append(formattedcollegeName, formattedcollegeDegree, formattedcollegeDates);
        }
        $("#education").append(HTMLonlineClasses);
        var course = education.onlineCourses.length;
        for (var d = 0; d < course; d++) {
        	$("#education").append(HTMLschoolStart);

            var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[d].title);
            var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[d].school);
            var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[d].dates);
            $(".education-entry:last").append(formattedonlineTitle, formattedonlineDates, formattedonlineSchool);
		}            
    }
};
var projects = {
 	"projects": [{

			"title": "Interactive Online Resume / Portfolio",
			"dates": "March 2017",
			"description": "This interactive online resume/portfolio uses Javascript, jQuery, HTML, and CSS to display my relevant experience and links you to various locations so you can see the details for yourself.",
			"images": ["images/Online_Resume.png"]
		},
		{
			"title": "Honest Trailers Movie Website",
			"dates": "Febuary 2017",
			"description": "This movie trailers site uses Python, Javascript, HTML, and CSS to compile some of my favorite movies. You can click on each poster to watch a funny trailer by Screen Junkies.",
			"images": ["images/Honest_Trailers.png"]
		},
		{
			"title": "Game of Thrones Fan Challenge!",
			"dates": "January 2017",
			"description": "This interactive Python fill-in-the-blanks quiz will put your fan knowledge to the test! You can play directly in the console.",
			"images": ["images/GOT_Python_Quiz.png"]
		},
		{
			"title": "Game of Thrones Fan Theory Webpage",
			"dates": "January 2017",
			"description": "This HTML/CSS webpage is dedicated to exploring the popular Game of thrones fan theory R + L = J [Confirmed].",
			"images": ["images/GOT_FT.png"]
	}],
	"display": function() {

        var codeproject = projects.projects.length;
        for (var p = 0; p < codeproject; p++) {
            $("#myprojects").append(HTMLprojectStart);
            var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[p].title);
            $(".project-entry:last").append(formattedProjectTitle);
            var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[p].dates);
            $(".project-entry:last").append(formattedProjectDates);
            var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[p].description);
            $(".project-entry:last").append(formattedProjectDescription);

            for (var image = 0; image < projects.projects[p].images.length; image++){
            	var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[p].images[image]);
				$(".project-entry:last").append(formattedProjectImage);
            } 

            /* Just an alternative for/in loop that could be used here to append my images
            for(image in projects.projects[p].images) {
				var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[p].images[image]);
				$(".project-entry:last").append(formattedProjectImage);
			}*/
        }
    }

};
var books = {
	"recentBooks": [{
			"title": "The Four Steps to the Epiphany",
			"description": "Successful Strategies for Products that Win",
			"images": ["images/Four_Steps.png"]
		},
		{
			"title": "Inspired",
			"description": "How to Create Products Customers Love",
			"images": ["images/Inspired.png"]
		},
		{
			"title": "Never Split the Difference",
			"description": "Negotiating As If Your Life Depended On It",
			"images": ["images/Never_Split.png"]
		},
		{
			"title": "Man's Search for Meaning",
			"description": "The Classic Tribute to Hope from the Holocaust",
			"images": ["images/Meaning.png"]
		},
		{
			"title": "Predictably Irrational",
			"description": "The Hidden Forces That Shape Our Decisions",
			"images": ["images/Irrational.png"]
		},
		{
			"title": "Essential Scrum",
			"description": "A Practical Guide to the Most Popular Agile Process",
			"images": ["images/Scrum.png"]
		},
		{
			"title": "Algorithms to Live By",
			"description": "What Computers Can Teach Us About Solving Human Problems",
			"images": ["images/Algorithms.png"]
		},
		{
			"title": "The Like Switch",
			"description": "An Ex-FBI Agent's Guide to Influencing, Attracting, and Winning People Over",
			"images": ["images/Like_Switch.png"]
		},
		{
			"title": "The Lean Startup",
			"description": "Failure is a prerequisite to learning. if you cannot fail, you cannot learn",
			"images": ["images/Lean.png"]
		},
		{
			"title": "1984",
			"description": "In a time of universal deceit, telling the truth becomes a revolutionary act",
			"images": ["images/1984.png"]
	}],
	"display": function() {

        var book = books.recentBooks.length;
        for (var r = 0; r < book; r++) {
            $("#mybooks").append(HTMLbookStart);
            var formattedBookTitle = HTMLbookTitle.replace("%data%", books.recentBooks[r].title);
            var formattedBookDescription = HTMLbookDescription.replace("%data%", books.recentBooks[r].description);
            var formattedBookImages = HTMLbookImages.replace("%data%", books.recentBooks[r].images);
            $(".book-entry:last").append(formattedBookTitle + formattedBookDescription + formattedBookImages);
        }
    }
};
//Where each function is executed
bio.display();
work.display();
projects.display();
education.display();
books.display();


$('#mapDiv').append(googleMap);