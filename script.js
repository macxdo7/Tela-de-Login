function navigate(sectionId) {
    document.querySelectorAll("main section").forEach(sec => {
      sec.style.display = "none";
    });
    document.getElementById(sectionId).style.display = "block";
  }
  
  navigate("sistemas");  