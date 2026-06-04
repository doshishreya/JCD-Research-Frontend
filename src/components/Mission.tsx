import Image from "next/image";
import { about } from "@/lib/content";
import { AOS } from "@/components/ui/AOS";
import { LabGrid } from "@/components/ui/LabGrid";
import { LabIcon } from "@/components/ui/LabIcon";
import { ParallaxLayer } from "@/components/ui/ParallaxLayer";
import { SectionLabel } from "@/components/ui/SectionLabel";

const LAB_IMAGE =
  "https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=1200";

export function Mission() {
  return (
    <section
      id="about"
      className="lab-section section-padding section-spacing relative overflow-hidden bg-rule-60"
    >
      <LabGrid />

      <div className="section-max relative">
        <div className="mission-layout-grid grid gap-12 min-w-0 lg:grid-cols-2 lg:items-center lg:gap-14 xl:gap-24">
          <div className="min-w-0">
            <SectionLabel delay={0}>{about.label}</SectionLabel>

            <AOS animation="fade-up" delay={100}>
              <h2 className="heading-section mt-7 text-balance text-3xl text-ink md:text-4xl lg:text-[2.85rem]">
                {about.title}
              </h2>
            </AOS>

            <AOS animation="fade-up" delay={160}>
              <p className="lab-specimen-tag mt-6 inline-flex items-center gap-2 rounded-full border border-brand-soft bg-brand-glow/60 px-4 py-2 font-sans text-[11px] font-medium uppercase tracking-[0.14em] text-brand-deep">
                <LabIcon name="microscope" className="h-4 w-4" />
                {about.badge}
              </p>
            </AOS>

            <div className="mt-9 space-y-6">
              {about.paragraphs.map((p, i) => (
                <AOS
                  key={p.slice(0, 24)}
                  animation="fade-up"
                  delay={220 + i * 100}
                >
                  <p className="body-premium text-[15px] md:text-base">{p}</p>
                </AOS>
              ))}
            </div>
          </div>

          <AOS
            animation="fade-left"
            delay={200}
            className="relative min-w-0 lg:max-[1380px]:mb-8 xl:mb-0"
          >
            <ParallaxLayer speed={0.4} maxOffset={50} className="relative">
              <div className="image-premium lab-image-frame relative aspect-[4/5] bg-pearl-deep">
                <Image
                  src={LAB_IMAGE}
                  alt="Scientist conducting analysis in a modern research laboratory"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-[1.2s] ease-out hover:scale-[1.04]"
                />
                <div className="absolute inset-0 rounded-[inherit] bg-gradient-to-t from-ink/40 via-transparent to-ink/10" />
                <div className="absolute left-5 top-5 rounded-full border border-canvas/25 bg-ink/50 px-4 py-2 font-sans text-[10px] font-medium uppercase tracking-[0.18em] text-canvas backdrop-blur-md">
                  Peptide laboratory
                </div>
              </div>
            </ParallaxLayer>

            <AOS
              animation="fade-up"
              delay={450}
              className="mission-float-card absolute -bottom-6 left-2 md:left-0 lg:max-[1380px]:left-3 xl:-left-6"
            >
              <div className="lab-specimen-card border-l-4 border-l-brand px-6 py-5 md:px-8 md:py-6">
                <p className="font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-ink-faint">
                  Orders & COAs
                </p>
                <p className="font-display mt-2 text-xl font-medium text-ink">
                  Dashboard · Analysis · PDF reports
                </p>
              </div>
            </AOS>
          </AOS>

          <dl className="mission-stats-row grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-4 lg:col-span-2 lg:mt-2">
            {about.stats.map((stat, i) => (
              <AOS
                key={stat.label}
                animation="zoom-in"
                delay={420 + i * 90}
                className="min-w-0"
              >
                <div className="lab-specimen-card h-full px-5 py-6">
                  <dt className="font-display text-xl font-semibold tracking-tight text-brand-deep md:text-2xl">
                    {stat.value}
                  </dt>
                  <dd className="mt-2.5 font-sans text-[10px] font-medium uppercase tracking-[0.16em] text-ink-faint">
                    {stat.label}
                  </dd>
                </div>
              </AOS>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
