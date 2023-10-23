import React, { useEffect } from "react";
import "./FormModal.scss";

const FormModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  // Listen for esc
  useEffect(
    () => {
      const handleEsc = (event) => {
        if (event.keyCode === 27) {
          onClose();
        }
      };
      window.addEventListener("keydown", handleEsc);
      return () => {
        window.removeEventListener("keydown", handleEsc);
      };
    },
    []
  );

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-container"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <button className="modal-close-btn" onClick={onClose}>
          X
        </button>
        <h1>Try it out</h1>
        <span className="modal-description-container">
          <p className="modal-description">
            Get access to our STAC Portal to see how it could help you with
            managing your imagery data archive.
          </p>
        </span>
        <form className="modal-form">
          <div className="form-row">
            <div className="form-group half-width">
              <label htmlFor="firstName">First Name</label>
              <input type="text" id="firstName" required />
            </div>
            <div className="form-group half-width">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" id="lastName" required />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="email">Work email</label>
            <input type="email" id="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="reference">How did you hear about us?</label>
            <select id="reference" required>
              <option value=""></option>
              <option value="industry_event">
                Industry Event or Conference
              </option>
              <option value="trade_publication">Trade Publication</option>
              <option value="business_referral">Business Referral</option>
              <option value="online_search">Online Search</option>
              <option value="webinar">Webinar or Online Presentation</option>
              <option value="professional_network">
                Professional Network (e.g. LinkedIn)
              </option>
              <option value="partner_recommendation">
                Partner Recommendation
              </option>
              <option value="previous_relationship">
                Previous Business Relationship
              </option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              placeholder="Tell us more about your needs or ask any questions you have"
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormModal;
