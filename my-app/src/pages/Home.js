import React from 'react';

function Home(){

    return(
      <div>


      {/*  <!-- Home section starts  -->*/}

        <section id="home" class="container-fluid">

          <div class="row min-vh-100 align-items-center">
            <div class="col-md-8 ml-md-5 text-md-left text-center content">
              <h1>food that you can't resist</h1>
              <h2>enjoy the marvelous taste</h2>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta vel quisquam nostrum cum minima nobis consequatur alias eius omnis dolorem.</p>
              <form class="" action="/view" method="post">
                    <button type="button" name="button">Order Now</button>
              </form>

            </div>
          </div>

          <div class="video-container">
            <video autoplay loop muted class="vid vid1">
              <source src="images/vid1.mp4" type="video/mp4"/>
            </video>
            <video autoplay loop muted class="vid vid2">
              <source src="images/vid2.mp4" type="video/mp4"/>
            </video>
            <video autoplay loop muted class="vid vid3">
              <source src="images/vid3.mp4" type="video/mp4"/>
            </video>
          </div>

          <div class="controls">

            <div class="dots dot1"> </div>
            <div class="dots dot2"> </div>
            <div class="dots dot3"> </div>

          </div>

        </section>

        {/*<!-- Home section ends -->*/}


        {/*<!-- Special section start -->*/}

        <section id="special" class="container-fluid">

          <div class="heading text-center">
            <h1>our <span>special</span></h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta vel </p>
          </div>

          <div class="card-container">

            <div class="card">
              <img src="images\pastaSalad.jpg" alt="pasta-colored-farfalle-salad"/>
              <p>Farfalle Pasta Salad Mediterranean Style is a great bow tie pasta salad with super fresh ingredients like cucumbers, tomatoes, peppers, Kalamata Olives.</p>
               <form class="" action="/view" method="post">
                 <button type="submit" name="pastaSalad" value="PastaFarfalleSalad">view</button>
               </form>
            </div>

            <div class="card">
              <img src="images\greeceSalad.jpg" alt="greece-salad-sliced-olives-red-wine-inside-white-plate"/>
              <p>This easy Greek salad recipe is our new favorite summer side dish! consists of sliced cucumbers, tomatoes, green bell pepper, red onion, olives, and feta cheese.</p>
              <form class="" action="/view" method="post">
                <button type="submit" name="greeceSalad" value="GreeceSalad">view</button>
              </form>
            </div>

            <div class="card">
              <img src="images\chickenSkewers.jpg" alt="chicken-skewers"/>
              <p>Chicken skewers are great thing to have whether they're glazed in a sticky sauce,or marinated to perfection before thrown on the grill are great for all occasions!</p>
              <form class="" action="/view" method="post">
                <button type="submit" name="chickenSkewers" value="ChickenSkewers">view</button>
              </form>
            </div>

          </div>

        </section>

      {/*  <!-- special section end --> */}

    { /*   <!-- about section start -->*/}
        <section id="about" class="container">

          <div class="heading text-center">
            <h1><span>about</span> us</h1>
          </div>

          <div class="row min-vh-95">

            <div class="col-md-6 text-center text-md-left  content">
              <div class="rest-name ">
                <h1><span>Food</span> Hunt <a href="#about" class="logo"><img src="images/logo.jpg" alt="logo image" width="70px" height="50px"/></a></h1>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi recusandae iusto, perferendis earum laboriosam rerum et quisquam iste vel commodi corporis praesentium porro impedit ullam!</p>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci iure aliquam illum quaerat quia voluptate.</p>
              <a href="#about"><button>learn more</button></a>
            </div>

            <div class="col-md-6 text-md-right image">
              <img src="images/hotel.jpg" alt=""/>
            </div>

          </div>

        </section>

        {/*<!-- about section end -->*/}

        {/*<!-- dish section start -->*/}
        <section id="dish" class="container">

          <div class="heading text-center">
            <h1>our <span>dishes</span></h1>
          </div>

          <div class="box-container">

              <div id="backed-chicken" class="box">
                  <img src="images\bakedChicken.jpg" alt="baked chicken"/>
                  <div class="info">
                      <h3>Backed Chicken</h3>
                      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam, nihil.</p>
                      <form class="" action="/view" method="post">
                            <button type="submit" name="bakedChicken" value="BakedChicken" >view</button>
                      </form>
                  </div>
              </div>

              <div id="rava" class="box">
                  <img src="images\ravaIdli.jpg" alt="images\rava-idli"/>
                  <div class="info">
                      <h3>Rava Idli</h3>
                      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam, nihil.</p>
                      <form class="" action="/view" method="post">
                            <button type="submit" name="ravaIdli" value="RavaIdli" >view</button>
                      </form>
                  </div>
              </div>

              <div id="pizza" class="box">
                  <img src="images/pizza.jpg" alt="pizza"/>
                  <div class="info">
                      <h3>Pizza</h3>
                      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam, nihil.</p>
                      <form class="" action="/view" method="post">
                            <button type="submit" name="pizza" value="Pizza" >view</button>
                      </form>
                  </div>
              </div>

              <div id="parata" class="box">
                  <img src="images/parata.jpg" alt="parata"/>
                  <div class="info">
                      <h3>Parata</h3>
                      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam, nihil.</p>
                      <form class="" action="/view" method="post">
                            <button type="submit" name="parata" value="Paratha" >view</button>
                      </form>
                  </div>
              </div>

              <div id="chicken-curry" class="box">
                  <img src="images\chickenCurry.jpg" alt="curry-with-chicken"/>
                  <div class="info">
                      <h3>Chicken Curry</h3>
                      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam, nihil.</p>
                      <form class="" action="/view" method="post">
                        <button type="submit" name="chickenCurry" value="ChickenCurry" >view</button>
                      </form>
                  </div>
              </div>

              <div id="hamburger" class="box">
                  <img src="images/hamburger.jpg" alt="set dosa"/>
                  <div class="info">
                      <h3>Hamburger</h3>
                      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam, nihil.</p>
                      <form class="" action="/view" method="post">
                              <button type="submit" name="hamburger" value="Hamburger" >view</button>
                      </form>
                  </div>
              </div>

          </div>

            <div class="order-btn">

                      <a href="/order"><button >order now</button></a>

            </div>


        </section>
        {/*<!-- dish section end -->*/}




        {/*<!-- contact section starts  -->*/}

      <section id="contact" class="container-fluid">

        <div class="heading text-center">
            <h1><span>contact</span> us</h1>
        </div>

        <div class="row justify-content-center">

            <form action="/message"  hclass="col-md-7" method="post">

                <div class="inputBox">
                    <input type="text" required/>
                    <h3>full name</h3>
                </div>

                <div class="inputBox">
                    <input type="email" required/>
                    <h3>e-mail</h3>
                </div>
                <div class="inputBox">
                    <textarea required name="" id="" cols="30" rows="4"></textarea>
                    <h3>message</h3>
                </div>
                <input type="submit" value="send"/>

            </form>

        </div>

      </section>

      {/*<!-- contact section ends  -->*/}



      </div>
    );
  };


export default Home;
