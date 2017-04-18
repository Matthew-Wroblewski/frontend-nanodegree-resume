/*
This is empty on purpose! Your code to build the resume will go here.
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
  schools: [ {
    name: "The University of North Carolina at Chapel Hill",
    location: "Chapel Hill, NC",
    degree: "B.S. Computer Science",
    majors: ["Computer Science"],
    dates: "08/2013-/07/2015",
    url: "" } ],

    onlineCourses: [ {
      title: "Front-End Web Developer Nanodegree Program",
      school: "Udacity",
      dates: "04/2017-Current",
      url: "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001" } ],
      display: function () {
        if (education.schools.length > 0 || education.onlineCourse.length > 0) {
          $("#education").append(HTMLschoolStart);

          for (i = 0; i < education.schools.length; i++) {

            var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
            var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
            var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);

            $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
            $(".education-entry:last").append(formattedSchoolDates);
            $(".education-entry:last").append(formattedSchoolLocation);
            $(".education-entry:last").append(formattedSchoolMajor);

          }

          if(education.onlineCourses.length > 0) {
            $("#education").append(HTMLonlineClasses);

            for(i = 0; i < education.schools.length; i++) {

              $("#education").append(HTMLschoolStart);
              var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title).replace("#", education.onlineCourses[i].url);
              var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
              var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
              var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url).replace("#", education.onlineCourses[i].url);
              $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
              $(".education-entry:last").append(formattedOnlineDates);
              $(".education-entry:last").append(formattedOnlineURL);
            }
          }

        }
      }
    }


    bio.display();
    education.display();
