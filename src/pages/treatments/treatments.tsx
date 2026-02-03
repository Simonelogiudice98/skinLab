import styles from "../../assets/commonStyles/commonStyles.module.scss";
import SectionTitle from "../../components/sectionTitle/sectionTitle";
import { WHATSAPP_LINK } from "../../utils/utils";
import "./treatments.scss";
import type { Treatment } from "../../interfaces/skinLab.types";
import { SmartImage } from "../../components/smartImage/smartImage";

interface Props {
  treatments: Treatment[];
}

function Paragraphs({ text }: { text: string }) {
  return (
    <>
      {text.split("\n\n").map((p) => (
        <p key={p} className="cardText">
          {p}
        </p>
      ))}
    </>
  );
}

export default function TreatmentsSection({ treatments }: Props) {
  return (
    <section id="treatments" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.panel}>
          <SectionTitle
            overline="Treatments"
            title="Treatment Menu"
            subtitle="Medically led. Results driven. Personalised to you."
          />

          <div className="grid2">
            {treatments.map((t) => (
              <article key={t.title} className={`${styles.card} treatCard`}>
                {t.image ? (
                  <div className="cardMedia" aria-hidden="true">
                    <SmartImage src={t.image} alt="" className="cardMediaImg" />
                    <div className="cardMediaOverlay" />
                  </div>
                ) : null}
                <div className="treatHead">
                  {t.badge ? <div className="treatBadge">{t.badge}</div> : null}

                  <div className="treatTop">
                    <h3 className={styles.h3}>{t.title}</h3>
                    <span className="priceFrom">{t.price.label}</span>
                  </div>

                  {t.price.note ? (
                    <div className="priceNote">{t.price.note}</div>
                  ) : null}
                </div>

                <div className="treatBody">
                  <Paragraphs text={t.description} />

                  {t.bullets?.length ? (
                    <ul className={styles.list}>
                      {t.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  ) : null}

                  {t.sections?.length
                    ? t.sections.map((sec) => (
                        <div key={sec.heading} className="treatSection">
                          {sec.heading ? (
                            <div className="treatSectionTitle">
                              {sec.heading}
                            </div>
                          ) : null}

                          <div className="treatRows">
                            {sec.items.map((it) => (
                              <div key={it.name} className="treatRow">
                                <div className="treatRowLeft">
                                  <div className="treatRowName">{it.name}</div>
                                  {it.details ? (
                                    <div className="treatRowDetails">
                                      {it.details}
                                    </div>
                                  ) : null}
                                </div>
                                <div className="treatRowPrice">{it.price}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))
                    : null}
                </div>
              </article>
            ))}
          </div>

          <div className="ctaRow">
            <div>
              <div className="ctaTitle">Ready to transform your skin?</div>
              <div className="ctaSub">
                Start with a personalised consultation — professional,
                evidence-based, tailored to you.
              </div>
            </div>

            <a
              className="ctaBtn"
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
            >
              <span>Book Your Consultation</span>
              <span className="ctaArrow">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
