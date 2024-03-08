function About(){
    return(
        <>
        <div className="about">
        <div className="aboutText">
            <div className="displaytitle">Little Lemon</div>
            <div className="subtitle">Chicago</div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </div>
        <div class="aboutImageContainer">
            <div className="aboutImage">
                <img src="Mario and Adrian A.jpg" alt="restaurant food" />
            </div>
            <div className="aboutImage">
                <img src="Mario and Adrian B.jpg" alt="restaurant food" />
            </div>
        </div>
    </div>
     <div className="testimonials">
     <div>
         <h1>Testimonials</h1>
     </div>
     <div className="testimonialsBoxContainer">
         <div className="testimonialBox">
             <div className="rating">
                 <p>4/5 Excelent!</p>
             </div>
             <div className="userProfile">
                 <div className="userProfilePic">
                     <img src="https://i.pravatar.cc/120?img=35" alt="Profile pic"></img>
                 </div>
                 <div className="userName">
                     <p>Yuriko H.</p>
                 </div>
             </div>
             <div className="reviewText">
                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
             </div>
         </div>
         <div className="testimonialBox">
             <div className="rating">
                     <p>5/5 Outstanding!</p>
                 </div>
                 <div className="userProfile">
                     <div className="userProfilePic">
                         <img src="https://i.pravatar.cc/120?img=26" alt="Profile pic"></img>
                     </div>
                     <div className="userName">
                         <p>Jayden J.</p>
                     </div>
                 </div>
                 <div className="reviewText">
                     <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                 </div>
         </div>
         <div className="testimonialBox">
             <div className="rating">
                     <p>4/5 Excelent!</p>
                 </div>
                 <div className="userProfile">
                     <div className="userProfilePic">
                         <img src="https://i.pravatar.cc/120?img=11" alt="Profile pic"></img>
                     </div>
                     <div className="userName">
                         <p>Peter M.</p>
                     </div>
                 </div>
                 <div className="reviewText">
                     <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                 </div>
         </div>
         <div className="testimonialBox">
             <div className="rating">
                     <p>5/5 Outstanding!</p>
             </div>
             <div className="userProfile">
                 <div className="userProfilePic">
                     <img src="https://i.pravatar.cc/120?img=52" alt="Profile pic"></img>
                 </div>
                 <div className="userName">
                     <p>Carl J.</p>
                 </div>
             </div>
             <div className="reviewText">
                 <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
             </div>
         </div>
     </div>
 </div>
 </>
    )
}

export default About;