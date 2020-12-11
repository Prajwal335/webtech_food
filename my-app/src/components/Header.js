import React from 'react';

function Header(){

     return(
       <div>

       {/*<!--  header section starts -->*/}
       <header id="header">
         <nav>
           <ul>
             <li><a href="#home">home</a></li>
             <li><a href="#special">special</a></li>
             <li><a href="#about">about</a></li>
             <li><a href="#dish">dish</a></li>
             <li><a href="#contact">contact</a></li>
           </ul>
         </nav>


         <i class="fas fa-hamburger"></i>
         <a href="#" class="logo"><img src="images/logo.jpg" alt="logo image" width="70px" height="50px"/></a>
       </header>

       {/*<!-- header section ends -->*/}


       </div>
     );
  };

export default Header;
