(function fetchNptel_metadata(){
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", "//localhost:5000/fetchNptel_metadata", true); 
  xhttp.setRequestHeader("Access-Control-Allow-Origin", "*");
  xhttp.send(null);
  xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementsByTagName("body")[0].innerHTML =this.responseText;
            //res = this.responseText;
            //alert(res);
	    }
  };
}());

(function recommendationsContainer(){
    var body = document.getElementsByTagName('body')[0];
    container = document.createElement('div');
    container.id = 'mySidenav';
    container.className = 'sidenav';
    body.appendChild(container);
    container.innerHTML = "<a href='javascript:void(0)' class='closebtn' onclick='closeNav()'>&times;</a>";


    main = document.createElement('div');
    main.id = 'main';
    body.appendChild(main);
    main.innerHTML = "<span style='font-size:25px;cursor:pointer' onclick='openNav()'>&#9776; Renarrate NPTEL</span>";
    
    //appending a CSS stylesheet to head element of a webpage, which is used to stylize the recommendations container.
    var linktag = document.createElement('link');
    linktag.rel = "stylesheet";
    linktag.type = "text/css";
    //using rawgit.com MaxCDN.. files directly linked to git repo 'webpage-transformation/master'
    linktag.href = "https://cdn.rawgit.com/sadhanareddy/linking-vlabs-data-to-nptel/14f5f8e5/css/renarrate-nptel.css"; 
    document.getElementsByTagName('head')[0].appendChild(linktag);

    //appending a script tag to head element of a webpage, which is used to toggle the recommendations container.
    var script_tag = document.createElement('script');
    script_tag.type = "text/javascript";
    //using rawgit.com MaxCDN.. files directly linked to git repo 'webpage-transformation/master'
    script_tag.src = "https://cdn.rawgit.com/sadhanareddy/linking-vlabs-data-to-nptel/14f5f8e5/renarrate-view-functions.js"; 
    document.getElementsByTagName('head')[0].appendChild(script_tag);	
        
}());





