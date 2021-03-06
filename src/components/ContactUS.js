import React, { Component } from "react";
import './ContactUS.css';

class ContactUS extends Component {
  render() {
    return (
      <div class="container">
      <div class="contact-image">
          <img src="https://image.ibb.co/kUagtU/rocket_contact.png" alt="rocket_contact"/>
      </div>
      <h3 style={{textAlign:'center'}}>Drop Us a Message</h3>
      <form method="post">
          
        <div style={{marginLeft:'35%'}} >
         <div class="row">
              <div class="col-md-12">
                  <div class="form-group">
                      <input type="text" name="txtName" class="form-control" placeholder="Your Name *" value="" />
                  </div>
                  <div class="form-group">
                      <input type="text" name="txtEmail" class="form-control" placeholder="Your Email *" value="" />
                  </div>
                  <div class="form-group">
                      <input type="text" name="txtPhone" class="form-control" placeholder="Your Phone Number *" value="" />
                  </div>
                  <div class="form-group">
                      <textarea name="txtMsg" class="form-control" placeholder="Your Message *" style={{width: '100%', height: '150px'}}></textarea>
                  </div>
                  
              </div>
              <div class="col-md-12">
              <div class="form-group">
                      <input type="submit" name="btnSubmit" class="btnContact" value="Send Message" />
                  </div>
              </div>
          </div>
          </div>
      </form>
</div>
    );
  }
}

export default ContactUS;