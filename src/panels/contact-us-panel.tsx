import { DetailedContactForm } from "../app-components/detailed-contact-form";
import { Card } from "../core-components/card";

import "./contact-us-panel.scss";

export const ContactUsPanel = () => {
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
};
