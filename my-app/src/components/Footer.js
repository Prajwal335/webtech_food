import React from 'react';

function Footer(){

     return(
       <div>


             {/*<!-- footer section starts  -->*/}

             <section id="footer" class="container-fluid">

             <div class="row align-items-center">

             <div class="col-md-4 brand">

             <a href="#" class="logo"><img src="images/logo.jpg" alt=""/></a>

             <div class="icons">
                <a href="#" class="fab fa-facebook-square"></a>
                <a href="#" class="fab fa-twitter-square"></a>
                <a href="#" class="fab fa-instagram-square"></a>
                <a href="#" class="fab fa-pinterest-square"></a>
             </div>

             </div>


             <div class="col-md-4 footer-links">
             <h3>links:</h3>
             <a href="#home">home</a>
             <a href="#special">special</a>
             <a href="#about">about</a>
             <a href="#dish">dish</a>
             <a href="#contact">contact</a>
             </div>


             <div class="col-md-4 text-center text-md-left letter">
                      <h1><span>Food</span> Hunt <a href="#" class="logo"><img src="images/logo.jpg" alt="logo image" width="70px" height="50px"/></a></h1>
             </div>

             </div>

             <h1>&copy; copyright @ 2020 by <span>mr. web designer</span></h1>

             </section>

              {/*<!-- footer section ends  -->*/}

       </div>
     );
  };


export default Footer;
