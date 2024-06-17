import React, { Component } from "react";
import { Button } from "react-bootstrap";
import "../certstyle1.css"; // Make sure to adjust this path if necessary
import printJs from "print-js";
import certificateLogo from "./certificate_logo.jpg"; // Import the certificate logo image

class Certificate extends Component {
  state = {};
  onclickprint = (event) => {
    event.preventDefault();
    window.print();
    //printJs("printcertificate", "html");
  };
  render() {
    const { fname, lname, course } = this.props; // Destructuring props

    return (
      <div className="w-100 h-100 d-flex flex-column justify-content-center align-items-center">
        <div
          id="printcertificate"
          className="cert-container"
          style={{
            textAlign: "center",
            fontFamily: "Merriweather", // Change the font family
            fontSize: "30px", // Increase font size
            border: "2px solid black", // Add black border around the certificate content
            padding: "20px", // Add padding for spacing
            borderRadius: "10px", // Add border radius for rounded corners
            width: "90%", // Make the box almost as big as the screen
            maxWidth: "800px", // Set a maximum width for better readability
            margin: "auto", // Center the box horizontally
            height: "80vh", // Make the box longer
            display: "flex", // Allow flexbox layout
            flexDirection: "column", // Arrange children vertically
            justifyContent: "center", // Center content vertically
            alignItems: "center" // Center content horizontally
          }}
        >
          <div style={{ marginBottom: "20px" }}>
            <img
              src={certificateLogo}
              alt="Certificate Logo"
              className="certificate-logo"
              style={{ width: "300px", height: "auto" }} // Adjust the size of the logo
            />
          </div>
          <div className="cert-content" style={{ height: "150px" }}>
            {/* Static text */}
            <div>
              This certificate is presented to
              <br />
            </div>
            <div>
              {this.props.sname}
            </div>
            <div>
              for completing the {this.props.course}
              <br />
            </div>
            <br />
            <br />
            <br />
            <div style={{ fontSize: "10px" }}>{this.props.txh}</div>
            <div style={{ fontSize: "10px",  }}>{this.props.id}</div>
          </div>
        </div>
        {/* Use CSS media query to hide the button when printing */}
        <style>
          {`
            @media print {
              .print-button {
                display: none;
              }
            }
          `}
        </style>
        <div className="mt-3 print-button">
          <Button
            className="btn"
            onClick={this.onclickprint}
            variant="success"
            type="submit"
          >
            Print
          </Button>
        </div>
      </div>
    );
  }
}

export default Certificate;
