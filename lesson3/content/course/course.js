function openCourse(courseName) {
    var i;
    var x = document.getElementsByClassName("course");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    document.getElementById(courseName).style.display = "block";
  }
 