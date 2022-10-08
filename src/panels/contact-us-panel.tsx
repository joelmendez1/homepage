import Card from "../core-components/card";

import "./contact-us-panel.scss";

function ContactUsPanel() {
  return (
    <div className="contact-us-panel">
      <Card className="contact-us-panel__card" withBorder>
        <div>Contact Us</div>
      </Card>
    </div>
  );
}

export default ContactUsPanel;
