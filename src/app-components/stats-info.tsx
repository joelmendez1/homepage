import { Separator } from "../core-components/separator";
import { StatDisplay } from "../core-components/stat-display";

import "./stats-info.scss";

export const StatsInfo = () => {
  return (
    <div className="stats-info">
      <div className="stats-info__first-column">
        <StatDisplay
          img={{
            src: "",
            alt: "",
          }}
          title="TEST"
          link={{ url: "", text: " 123" }}
          text=" 123"
        />
        <Separator className="stats-info__separator" />
        <StatDisplay
          img={{
            src: "",
            alt: "",
          }}
          title="TEST"
          link={{ url: "", text: " 123" }}
          text=" 123"
        />
      </div>
      <Separator className="stats-info__hidden-separator" />
      <div className="stats-info__second-column">
        <StatDisplay
          img={{
            src: "",
            alt: "",
          }}
          title="TEST"
          link={{ url: "", text: "$123.45 M" }}
          text=" 123"
          type="small"
        />
        <Separator className="stats-info__separator" />
        <StatDisplay
          img={{
            src: "",
            alt: "",
          }}
          title="TEST"
          link={{ url: "", text: "1234567" }}
          text=" "
          type="small"
        />
      </div>
      <Separator className="stats-info__hidden-separator" />
      <div className="stats-info__third-column">
        <h2 className="stats-info__third-column__title">
          TEST HISTORY LAST 14 DAYS
        </h2>
        <div className="stats-info__third-column__area">graph area</div>
      </div>
    </div>
  );
};
