const header =   `<div class="container-fluid d-flex align-items-center justify-content-between">

    <a href="index.html" class="logo d-flex align-items-center  me-auto me-lg-0">
      <!-- Uncomment the line below if you also wish to use an image logo -->
      <!-- <img src="assets/img/logo.png" alt=""> -->
      <i class="bi"></i>
      <h1>Ink and Dye</h1>
    </a>

    <nav id="navbar" class="navbar">
      <ul>
        <li><a href="index.html" class="active">Home</a></li>
        <li><a href="about.html">About</a></li>
        <li class="dropdown"><a href="#"><span>Gallery</span> <i class="bi bi-chevron-down dropdown-indicator"></i></a>
          <ul>
            <li><a href="gallery.html">Nature</a></li>
            <li><a href="gallery.html">People</a></li>
            <li><a href="gallery.html">Architecture</a></li>
            <li><a href="gallery.html">Animals</a></li>
            <li><a href="gallery.html">Sports</a></li>
            <li><a href="gallery.html">Travel</a></li>
            <li class="dropdown"><a href="#"><span>Sub Menu</span> <i class="bi bi-chevron-down dropdown-indicator"></i></a>
              <ul>
                <li><a href="#">Sub Menu 1</a></li>
                <li><a href="#">Sub Menu 2</a></li>
                <li><a href="#">Sub Menu 3</a></li>
              </ul>
            </li>
          </ul>
        </li>
        <li><a href="services.html">Services</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
    </nav><!-- .navbar -->

    <div class="header-social-links">
      <a href="https://www.facebook.com/InkandDye/" target="_blank" class="facebook"><i class="bi bi-facebook"></i></a>
      <a href="https://www.instagram.com/inkanddye/" target="_blank" class="instagram"><i class="bi bi-instagram"></i></a>
    </div>
    <i class="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
    <i class="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>

  </div>`

  document.querySelector("#header").innerHTML = header;