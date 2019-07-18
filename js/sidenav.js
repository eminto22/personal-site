document.write(`
    <aside id="mySidenav" class="sidenav">
        <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
        <a href="../html/about.html">about me</a>
        <a href="../html/resume.html">resume</a>
        <a href="../html/artwork.html">artwork</a>
        <a href="../html/contact.html">contact</a>
        <a href="../html/myTargetWork.html">internship experience</a>
    </aside>


    <span id="toggleMenu" class="" onclick="openNav()">
        <button class="menuButton" type="button" aria-label="Menu" aria-controls="navigation">
            <div class="hamburgerButton"></div>
            <div class="hamburgerButton"></div>
            <div class="hamburgerButton"></div>
        </button>
    </span>
`)