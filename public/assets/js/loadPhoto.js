function loadPhoto() {
    // const storage = firebase.app().storage();
    // const storageList = storage.ref().child("images/").listAll();

    // const gallery = document.querySelector("#galleryStart");

    // storageList.then((e) => {
    //   for (let name of e.items) {
    //     storage.ref().child(`images/${name.name}`).getDownloadURL().then((url) => {

    //       // TODO Perform sanitization

    //     let text = `          
    //     <div class="col-xl-3 col-lg-4 col-md-6">
    //       <div class="gallery-item h-100">
    //         <img src="${url}" class="img-fluid" alt="">
    //         <div class="gallery-links d-flex align-items-center justify-content-center">
    //           <a href="${url}" title="Gallery 1" class="glightbox preview-link"><i class="bi bi-arrows-angle-expand"></i></a>
    //           <a href="${name.name}.html" class="details-link"><i class="bi bi-link-45deg"></i></a>
    //         </div>
    //       </div>
    //     </div><!-- End Gallery Item -->`

    //     gallery.innerHTML = gallery.innerHTML + text;

    //     console.log(name.name);

    //   });
    //   }
    // });
}

// loadPhoto();