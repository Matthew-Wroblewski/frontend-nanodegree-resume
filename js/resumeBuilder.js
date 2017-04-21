/*
This is empty on purpose! Your code to build the resume will go here. TEST TEST
*/

var bio = {
  name: "Matthew Wroblewski",
  role: "Front End Developer",
  contacts: {
    mobile:"732-735-8306",
    email:"wroblewski.m@zoho.com",
    github:"https://github.com/Matthew-Wroblewski",
    twitter:"",
    location:"Chapel Hill, NC"
  },
  welcomeMessage: "hi",
  biolpic:"",
  display: function() {
    var myName = HTMLheaderName.replace("%data%", bio.name);
    var myRole = HTMLheaderRole.replace("%data%", bio.role);
    var myMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var myEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var myGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var myLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#header").prepend(myName,myRole);
    $("#topContacts").append(myMobile,myEmail,myGithub,myLocation);
  }
}

var education = {
  schools:
  [{name: "The University of North Carolina at Chapel Hill",
  location: "Chapel Hill, NC",
  degree: "B.S. Computer Science",
  majors: ["Computer Science"],
  dates: "08/2013-/07/2015",
  url: "http://www.unc.edu"}],

  onlineCourses: [{
    title: "Front-End Web Developer Nanodegree Program",
    school: "Udacity",
    dates: "04/2017-Current",
    url: "http://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"}],

    display: function () {

        $("#education").append(HTMLschoolStart);

        for (i = 0; i < education.schools.length; i++) {

          var mySchoolName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
          var mySchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
          var mySchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
          var mySchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
          var mySchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);

          $(".education-entry:last").append(mySchoolName + mySchoolDegree);
          $(".education-entry:last").append(mySchoolDates);
          $(".education-entry:last").append(mySchoolLocation);
          $(".education-entry:last").append(mySchoolMajor);

        }

          $("#education").append(HTMLonlineClasses);

          for(i = 0; i < education.schools.length; i++) {

            $("#education").append(HTMLschoolStart);
            var myOnlineProgram = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title).replace("#", education.onlineCourses[i].url);
            var myOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
            var myOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
            var myOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url).replace("#", education.onlineCourses[i].url);
            $(".education-entry:last").append(myOnlineProgram + myOnlineSchool);
            $(".education-entry:last").append(myOnlineDates);
            $(".education-entry:last").append(myOnlineURL);
          }
    }
  }

var work = {
  jobs:
  [{employer: "Impact Fulfillment Services",
  title: "Application Developer",
  location: "Burlington, NC",
  dates: "08/2015-In Progress",
  description: "description..."},

  {employer: "UNC",
  title: "Help",
  location: "Chapel Hill, NC",
   dates: "08/2013-2015",
   description: "description..." }],

  display: function () {

      $("#workExperience").append(HTMLworkStart);

      for (i = 0; i < work.jobs.length; i++) {

        var myEmployer = HTMLworkEmployer.replace("%data%",work.jobs[i].employer);
        var myTitle = HTMLworkTitle.replace("%data%",work.jobs[i].title);
        var myDates = HTMLworkDates.replace("%data%",work.jobs[i].dates);
        var myWorkLocation = HTMLworkLocation.replace("%data%",work.jobs[i].location);
        var myWorkDescription = HTMLworkDescription.replace("%data%",work.jobs[i].description);

        $(".work-entry:last").append(myEmployer);
        $(".work-entry:last").append(myTitle);
        $(".work-entry:last").append(myDates);
        $(".work-entry:last").append(myWorkLocation);
        $(".work-entry:last").append(myWorkDescription);

      }
  }
}

var projects = {

projects:
  [{title: "Online Resume",
  dates:"Dates",
  description:"Online Project desc",
images: ["www.unc.edu"]}],

  display: function () {

    $("#projects").append(HTMLprojectStart);

      for (i = 0; i < projects.projects.length; i++) {

        var myProjTitle = HTMLprojectTitle.replace("%data%",projects.projects[i].title);
        var myProjDates = HTMLprojectDates.replace("%data%",projects.projects[i].dates);
        var myProjDescr = HTMLworkDates.replace("%data%",projects.projects[i].description);
        var myProjImages = HTMLprojectDescription.replace("%data%",projects.projects[i].images);

        $(".project-entry:last").append(myProjTitle);
        $(".project-entry:last").append(myProjDates);
        $(".project-entry:last").append(myProjDescr);
        $(".project-entry:last").append(myProjImages);
  }

}
}


  bio.display();
  work.display();
  education.display();
  projects.display();
  $("#mapDiv").append(googleMap);
