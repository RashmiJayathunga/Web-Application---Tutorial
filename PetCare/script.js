document.addEventListener('DOMContentLoaded', () => {
    const content = document.getElementById('content');
    const links = document.querySelectorAll('nav ul li a');

    const pages = {
        home: {
            content: `
        <center>
            <div class="box">
                <h1>HAPPY AND COMFORTABLE PARENTING!</h1>
                <hr>
                <p>Hey Pet Parents! Welcome to Pet Care. Shop on our website to avail exciting offers exclusively for your pet friend. Earn<br>
                points and get Coupons for additional discounts. <b>HURRY NOW!!!</b>.</p>
                
                <a href="#" data-page="services" class="button"><b>GET STARTED<b></a>
               
            </div>
        </center>
        `, background: 'url(image/cover.jpg)',
        },
        services:
        {
            content: ` 
       
         <div class="container">
    <div class="box1">
        <img src="image/Toyicon1.png" alt="">
        <h3>Health and Tasty Treats</h3>
        <p>With Dog Snack Brands like Superbite, Gnawlers, Jerhigh your dog can have nutritive binge moments.
            You can choose among Dog Snack Bacon or Hotdog Bar Chicken when you seek snacks of animal origin. Among products of
            vegetable and animal origin, you can choose among Dog Snack Spinach, Dog Snack Carrot, Fruity Stick and so on enjoy upto 30% discounts
            on the same.</p>
        <a href="#"  data-page="doghostel" class="more-botton"><b>MORE</b></a>
    </div> 

    <div class="box1">
        <img src="image/blackleg.png" alt="">
        <h3>Dog Toy</h3>
        <p>While you buy dog toys online with us, we take care that the toy has rounded edges ideal for small breeds and puppies. 
            They are all made from animal safe, food grade and virgin plastic. So, have some fun with your Dog and give him a Happier Playtime.
            Buy Chew Bones, Rubber Balls, Rope Toys and many more items at huge discounts.</p>
        <a href="#" data-page="doghostel" class="more-botton"><b>MORE</b></a>
    </div>

    <div class="box1">
        <img src="image/dogicon1 (1).png" alt="">
        <h3>Collars & Leashes</h3>
        <p>Get exciting offers on Dog Collar Charms, Leashes, Muzzles, Harnesses, etc. on Top Brands + Warranty! and make your
            Dog's training happy. For your bulldog or Rottweiler we have metal chains with grips, collars with pointed studs and extra large choke chains. For your beagle or Pomeranian we have
            printed collars and nylon ropes. With attractive prints and designer motifs there is a lot when you search for the best.</p>
        <a href="#" data-page="doghostel" class="more-botton"><b>MORE</b></a>
    </div>

    <div class="box1">
        <img src="image/medicalicon.png" alt="">
        <h3>Supplements & Shampoos</h3>
        <p>Keep your pup in shape with healthy dog supplements. Dog Supplements come in many forms including soft chews and tablets.
            Give your furry friends the vitamins they need to stay Happy and Healthy.
            We also have a variety of pet shampoos for different breeds and small pets! including tick shampoos on upto 40% discount under Best Brands. 
            Go, check Out Now!</p>
        <a href="#"  class="more-botton" data-page="doghostel"><b>MORE</b></a>
    </div>
</div>
`, background: 'url(image/none.jpg)'
        },
        about: {
            content: `
            <center>
                <div class="container2">
                    <div class="image2"></div>
                    <div class="content">
                        <h1><u>About Us</u></h1>
                        <p>Welcome to Pet Care. 
                        Shop on our website to avail<br> exciting offers exclusively for your pet friend.
                        Earn <br>points and get Coupons for additional discounts.
                        We <br>deal in Dog Toys, Tasty Snacks, Collars, 
                        Leashes,<br> Harness with latest designs that you and your pet will <br>fall in love with.
                        Want to stay in touch? No problem -<br> the page also features useful links 
                        to social media <br>pages, as well as our online shop.</p>
                        <div class="rebutton">
                            <a href="#" data-page="home" class="btn">WORK</a>
                            <div class="line"></div>
                            <a href="#" data-page="services" class="btn">SERVICE</a>
                            <div class="line"></div>
                            <a href="#" data-page="contact" class="btn">CONTACT</a>
                        </div>
                        <div class="social-media-icons">
                            <img src="image/facebook.png"  title ="Facebook" data-tooltip="Facebook" alt="Facebook">
                            <img src="image/instagram.png" title ="Instagram" data-tooltip="Instagram" alt="Instagram">
                            <img src="image/youtube.png" title ="YouTube" data-tooltip="YouTube" alt="YouTube">
                            <img src="image/whatsapp.png" title ="WhatsApp" data-tooltip="WhatsApp" alt="WhatsApp">
                        </div>
                    </div>
                </div>
            </center>
            `,
            background: 'url(image/husky.jpg)'
        },

        reviews: {
            content: `
        <div class="retext">
        <h1><u>Customers</u></h1>
        <div class="grid-container">
        <div class="card retext1">
            <h2>Quick Services</h2>
            <p>The products I ordered <br>reached before time. The <br>support I received was <br>thorough and timely and <br>
            the support team was<br> quick to respond with a <br>single interaction.<br> Awesome! . Would<br> definitely 
            recommend<br> this to every pet owner for<br> best service, be it <br>technical support or <br>timely delivery. 
            Stephani Fernando, Kelaniya.</p>
             <img src="image/girl1.jpg" alt="">
            <h3>Stephani Fernando, Kelaniya </h3>
        </div>
        <div class="card retext2">
            <h2>Comfortable Shopping</h2>
            <p>Was a little nervous to<br> order because I had <br>never considered <br>shopping online for my<br> Husky. Glad 
            I took the<br> chance, now I am a<br> happy returning <br>customer. You just made <br>pet shopping very easy.<br> 
            Thankyou Pet Care!</p>
               <img src="image/girl4.jpg" alt="">
            <h3>Peter Almeida, Kadawatha</h3>
        </div>
        <div class="card retext3">
            <h2>Best Discounts</h2>
            <p>I can't even express how <br>excited I was when your<br> delivery arrived. The <br>quality of product is 
            100% <br>as addressed, that too, in<br> such a good price. I<br> bought my dog some toys<br> and a snack bowl 
            and he <br>just loved it. Just wanted <br>to thank you guys for<br> such an amazing service!</p>
                <img src="image/boy1.jpg" alt="">
            <h3>Ravindu Perera, Country</h3>
        </div> 
        </div>
        </div>

       ` ,
            background: 'url(image/dogwithgirl2.jpg)'
        },

        doghostel: {
            content: `
        <center>
        <div class="back">
        <div class="boxabout">
        <div class="hostel">
        <h3>Dog Hostel</h3>
        <div class="textbox">
        <form action="">
        Check In Date:<br><br>
        <input type="date" name="check in date" size="70" >
        <br><br>
        Check Out Date:<br><br>
        <input type="date" name="check out date" size="70">
        <br><br>
        Dog:<br><br>
        <input type="text" name="dog" size="67.3">
        <br><br>
        Pups:<br><br>
        <input type="text" name="pups" size="67.3">
        <br><br>
        Beds:<br><br>
        <input type="text" name="beds" size="67.3">
        </form>
        <a href="#" data-page="home" class="bookbox"><b>BOOK NOW<b></a>
        </div>

        </center>`, background: 'url(image/cover3.jpg)'
        },

        contact: {
            content: `
        <center>
        <div class="back2">
        <div class="boxabout2">
        <div class="contact">
        <h3><u><big>C</big>ontact Us</u></h3>
        <div class="textbox2">
        <div class="textarea">
        <form action="">
        
        <input type="text" name="name" size="70" placeholder = "Name" required>
        <br><br><br>
        
        <input type="text" name="subject" size="70" placeholder = "Subject" required>
        <br><br><br>
      
        <input type="text" name="phone" size="70" placeholder = "Phone" required>
        <br><br><br>
      
        <input type="email" name="email" size="70" placeholder = "Email" required>
        <br><br><br>
        
       <textarea name="message" size="70" placeholder = "Message" required> </textarea><br><br>
        </form>
        <a href="#" data-page="home" class="bookbox2"><b>Submit<b></a>
        </div>
        </div>
        </div>
        </div>
        </center>`, background: 'url(image.jpg)'
        },


    };


    function loadPage(page) {
        content.innerHTML = pages[page].content;
        document.title = `${page.charAt(0).toUpperCase() + page.slice(1)}`;
        document.body.style.backgroundImage = pages[page].background;
        links.forEach(link => {
            if (link.getAttribute('data-page') === page) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const page = link.getAttribute('data-page');
            loadPage(page);
        });
    });

    
    document.addEventListener('click', (event) => {
        if (event.target.matches('[data-page]')) {
            event.preventDefault();
            const page = event.target.getAttribute('data-page');
            loadPage(page);
        }
    });

    
    loadPage('home');
});

function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8
    });
}


document.addEventListener('DOMContentLoaded', () => {
    initMap();
});