import "./clientJourneyMini.scss";

import Face4OutlinedIcon from "@mui/icons-material/Face4Outlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";

type Step = {
  title: string;
  desc: string;
  Icon: React.ElementType;
};

const STEPS: Step[] = [
  {
    title: "Consultation",
    desc: "Your journey begins with a comprehensive skin consultation and personalised treatment plan.",
    Icon: Face4OutlinedIcon,
  },
  {
    title: "Treatment Plan",
    desc: "Most clients achieve the best and most consistent results through a personalised course of 3–5 treatments, depending on your skin concerns.",
    Icon: SettingsOutlinedIcon,
  },
  {
    title: "Maintenance",
    desc: "Once your desired results have been achieved, maintenance treatments are recommended every 2–3 months to help maintain your results and support long-term skin health.",
    Icon: CalendarMonthOutlinedIcon,
  },
];

export default function ClientJourneyMini() {
  return (
    <section className="journeyMini" aria-label="Your Skin Journey">
      <h2 className="journeyMiniHeading">Your Skin Journey</h2>

      <div className="journeyMiniGrid">
        {STEPS.map(({ title, desc, Icon }) => (
          <article key={title} className="journeyMiniCard">
            <div className="journeyMiniIcon" aria-hidden="true">
              <Icon className="journeyMiniIconSvg" />
            </div>

            <h3 className="journeyMiniTitle">{title}</h3>
            <div className="journeyMiniDivider" />
            <p className="journeyMiniDesc">{desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
