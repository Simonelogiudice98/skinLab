import "./clientJourneyMini.scss";

import Face4OutlinedIcon from "@mui/icons-material/Face4Outlined";
import HubOutlinedIcon from "@mui/icons-material/HubOutlined";
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";

type Step = {
  title: string;
  desc: string;
  Icon: React.ElementType;
};

const STEPS: Step[] = [
  {
    title: "CONSULTATION & SKIN ANALYSIS",
    desc: "We start by understanding your skin concerns, history, lifestyle, and goals to create a personalized treatment plan.",
    Icon: Face4OutlinedIcon,
  },
  {
    title: "TARGETED CLINICAL TREATMENTS",
    desc: "Based on your assessment, we introduce treatments like essential skin facial, chemical peels and microneedling gradually to calm inflammation, strengthen your skin, and address concerns safely.",
    Icon: HubOutlinedIcon,
  },
  {
    title: "PROGRESS REVIEW",
    desc: "Regular reviews ensure treatments stay effective and are adjusted as your skin improves.",
    Icon: TaskAltOutlinedIcon,
  },
  {
    title: "MAINTENANCE & OPTIMISATION",
    desc: "After reaching your goals, maintenance treatments and tailored skincare help preserve results and support long-term skin health.",
    Icon: AutoAwesomeOutlinedIcon,
  },
];

export default function ClientJourneyMini() {
  return (
    <section className="journeyMini" aria-label="SkinLab Medical client journey">
      <h2 className="journeyMiniHeading">THE SKINLAB MEDICAL CLIENT JOURNEY</h2>

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

      <p className="journeyMiniTagline">Personalised. Progressive. Medically led.</p>
    </section>
  );
}
