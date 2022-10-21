import DetailedContactForm from "../app-components/detailed-contact-form";
import Card from "../core-components/card";

import "./contact-us-panel.scss";

function ContactUsPanel() {
  return (
    <div className="contact-us-panel">
      <Card className="contact-us-panel__card" withBorder>
        <>
          <div className="contact-us-panel__detailed-contact-form-container">
            <DetailedContactForm />
          </div>
        </>
      </Card>
    </div>
  );
}

export default ContactUsPanel;
