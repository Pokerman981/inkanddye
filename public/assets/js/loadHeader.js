const header =   `<div class="container-fluid d-flex flex-row align-items-center justify-content-center">




    <a href="index.html" class="logo d-flex align-items-center  me-auto me-lg-0">
      <!-- Uncomment the line below if you also wish to use an image logo -->
      <!-- <img src="assets/img/android-chrome-192x192.png" alt=""> -->
      <h1>Ink and Dye</h1>
    </a>

    <div class="seperator">
    <i class="bi bi-chevron-compact-right"></i>
    </div>

    <nav id="navbar" class="navbar">
      <ul>
        <li><a href="gallery.html">Prints</a></li>
        <li><a href="gallery.html">Products</a></li>
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

//   <li class="dropdown"><a href="#"><span>Sub Menu</span> <i class="bi bi-chevron-down dropdown-indicator"></i></a>
//   <ul>
//     <li><a href="#">Sub Menu 1</a></li>
//     <li><a href="#">Sub Menu 2</a></li>
//     <li><a href="#">Sub Menu 3</a></li>
//   </ul>
// </li>