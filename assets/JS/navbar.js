
    document.getElementById('navbar').innerHTML = `
    <nav class="navbar navbar-expand-lg fixed-top border-bottom">
    <div class="container">
        <a class="navbar-brand pe-md-5" href="index.html"><img src="assets/logo.png" alt="logo" width="170px"></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <i class="fa-solid fa-bars bar"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-md-0">
                <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="index.html">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="About.html">About Us</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="gallery.html">Gallery</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="Poducts.html" id="navbarDropdown" role="button"
                        data-bs-toggle="dropdown" aria-expanded="false">
                        Products
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item bb" href="Products.html?type=Iron Handicrafts">Iron Handicrafts</a></li>
                        <li><a class="dropdown-item bb" href="Products.html?type=Glass Handicrafts">Glass Handicrafts</a></li>
                        <li><a class="dropdown-item bb" href="Products.html?type=Brass Handicrafts">Brass Handicrafts</a></li>
                        <li><a class="dropdown-item bb" href="Products.html?type=Wood Handicrafts">Wood Handicrafts</a></li>
                        <li><a class="dropdown-item bb" href="Products.html?type=Aluminium Handicrafts">Aluminium Handicrafts</a></li>
                        <li><a class="dropdown-item bb" href="Products.html?type=Handicraft Decoratives">Handicraft Decoratives</a></li>
                        <li><a class="dropdown-item bb" href="Products.html?type=Home Decoratives">Home Decoratives</a></li>
                        <li><a class="dropdown-item bb" href="Products.html?type=Table Accessories">Table Accessories</a></li>
                        <li><a class="dropdown-item" href="Products.html">All</a></li>
                    </ul>
                </li>
                <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="FAQs.html">FAQs</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="Contact.html">Contact Us</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="sitemap.html">Site Map</a>
                </li>
            </ul>
        </div>
    </div>
    </nav>
    `;
    if(notindex=="navbar2"){
        document.querySelector('#navbar .navbar').classList.add('navbar2');
    }
        
