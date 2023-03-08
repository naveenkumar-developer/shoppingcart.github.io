import React from "react";
import "../components/footer.css";

export default function Footer() {
  return (
    <>
      <footer className="row">
        <div className="col-sm-6 col-lg-3  smallbasket_container">
          <span style={{ color: "rgb(28, 240, 28)" }}>Smallbasket</span>{" "}
          <br></br>
          {/* dummy links */}
          <a href="#1">In News</a>
          <a href="#1">Green smallbasket</a>
          <a href="#1">Privacy Policy</a>
          <a href="#1">Affiliate</a>
          <a href="#1">Terms and Conditions</a>
          <a href="#1">Careers At smallbasket</a>
          <a href="#1">sb Instant</a>
          <a href="#1">sb Daily</a>
          <a href="#1">sb Blog</a>
          <a href="#1">sbnow</a>
        </div>
        <div className="col-sm-6 col-lg-3  help_container">
          <span style={{ color: "rgb(28, 240, 28)" }}>Help</span> <br></br>
          <a href="#1">FAQs</a>
          <a href="#1">Contact Us</a>
          <a href="#1">bb Wallet FAQs</a>
          <a href="#1">bb Wallet T&Cs</a>
          <a href="#1">Vendor Connect</a>
        </div>
        <div className="col-sm-6 col-lg-3  icon_container">
          <span style={{ color: "rgb(28, 240, 28)" }}>Download Our App</span>{" "}
          <br></br>
          <br></br>
          <img src="./images/Google-App-store-icon.png" alt="playstore" />
          <img src="./images/Apple-App-store-icon.png" alt="playstore" />
        </div>
        <div className="col-sm-6 col-lg-3  ">
          <span style={{ color: "rgb(28, 240, 28)", textAlign: "center" }}>
            Get Social With Us
          </span>
          <br></br>
          <br></br>

          {/* click image then go to website  */}

          <div className="social_icons">
            <img
              src="./images/facebook-2815970_640 (1).jpg"
              usemap="#image_map1"
              alt="facebook"
            />
            <map name="image_map1">
              <area
                alt="facebook"
                title="facebook"
                href="https://www.facebook.com/"
                target="_blank"
                coords="6,4,41,39"
                shape="rect"
              />
            </map>
            <img
              src="./images/twitter-2170426_640 (1).png"
              usemap="#image_map2"
              alt="twitter"
            />
            <map name="image_map2">
              <area
                alt="twitter"
                title="twitter"
                href="https://twitter.com/?lang=en-in"
                target="_blank"
                coords="0,0,45,77"
                shape="rect"
              />
            </map>
            <img
              src="./images/icon-1562136_640 (1).png"
              usemap="#image_map3"
              alt="instagram"
            />
            <map name="image_map3">
              <area
                alt="instagram"
                title="instagram"
                href="https://www.instagram.com/?hl=en"
                target="_blank"
                coords="4,-1,46,38"
                shape="rect"
              />
            </map>
          </div>
        </div>
        <div className="row my-3">
          <div className="col">
            <div style={{ color: "rgb(28, 240, 28)" }}>POPULAR CATEGORIES:</div>
            <p>
              Sunflower Oils, Wheat Atta, Ghee, Milk, Health Drinks, Flakes,
              Organic F&V, Namkeen, Eggs, Floor Cleaners, Other Juices, Leafy
              Vegetables, Frozen Veg Food, Diapers & Wipes,
            </p>
            <br></br>
            <div style={{ color: "rgb(28, 240, 28)" }}>POPULAR BRANDS:</div>
            <p>
              Amul, Nescafe , MTR, RED BULL , elite cake, Pediasure, Yummiez,
              Yera, Yakult, Britannia, Wow Momo, Fortune , Haldirams , Ferrero,
              Lays, Patanjali, McCain, kwality walls, Cadbury Dairy Milk,
              Pedigree,
            </p>
            <br></br>
            <div style={{ color: "rgb(28, 240, 28)" }}>CITIES WE SERVE:</div>
            <p>
              Bangalore, Hyderabad, Mumbai, Pune, Chennai, Delhi, Mysore,
              Madurai, Coimbatore, Vijayawada-Guntur, Kolkata,
              Ahmedabad-Gandhinagar, Nashik Business, Lucknow-Kanpur, Gurgaon,
              Vadodara, Visakhapatnam, Surat, Nagpur, Patna, Indore, Chandigarh
              Tricity, Jaipur, Bhopal, Noida-Ghaziabad, Kochi, Krishna District,
              Bhubaneshwar-Cuttack, Guwahati, Renigunta, Hubli, Davanagere,
              Trichy, Amravati, Raipur, Rajkot, Gwalior, Bareilly, Allahabad,
              Hyderabad Rural, Bangalore Rural, Chennai Rural, Vizag Rural,
              Lucknow Rural, Noida Rural, Ahmedabad Rural, Bhopal Rural,
              Bhubaneswar Rural, Coimbatore Rural, Chandigarh Rural, Gurugram
              Rural, Guwahati Rural, Indore Rural, Kochi Rural, Kolkata Rural,
              Mumbai Rural, Mysore Rural, Nagpur Rural, Patna Rural, Pune Rural,
              Surat Rural, Vadodara Rural, Jaipur Rural, Ranchi, Nashik, Agra,
              Kozhikode, Amritsar,{" "}
            </p>{" "}
            <br></br>
          </div>
        </div>
        <div className="row text-center">
          <small className="col">
            Copyright &copy; 2023-2025 Supermarket Grocery Supplies Pvt Ltd
          </small>
        </div>
      </footer>
    </>
  );
}
