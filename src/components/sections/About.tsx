import { motion } from "framer-motion";
import { BrutalistCard } from "../ui/BrutalistCard";
import { SectionHeading } from "../ui/SectionHeading";
import { stats, educationChips, siteConfig } from "../../data/site-config";
import { StatCounter } from "../ui/StatCounter";

export function About() {
  return (
    <section
      id="about"
      aria-label="Tentang Saya"
      className="max-w-6xl mx-auto px-5 md:px-8 py-20 md:py-28"
    >
      <SectionHeading
        eyebrow="> About Me"
        title="Saya suka mempelajari hal-hal baru, terutama yang berhubungan dengan "
        highlight="teknologi"
        markColor="#7C3AED"
      />

      <div className="grid md:grid-cols-[1fr_1fr] gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-body text-body-lg leading-relaxed mb-5">
            Saya {siteConfig.fullName}, biasa dipanggil {siteConfig.name} yang memiliki keinginan menjadi {siteConfig.role.toLowerCase()}.
            Berbasis di {siteConfig.location} ({siteConfig.timezone}), saya merupakan mahasiswa yang sedang menempuh pendidikan di Universitas Lampung.
            Saya suka akan hal-hal yang berhubungan dengan teknologi, terutama dalam bidang pengembangan web.

          </p>

          <p className="font-body text-body leading-relaxed opacity-80 mb-8">
            Bagi saya mempelajari teknologi baru adalah hal yang menyenangkan, karena saya dapat mengembangkan kemampuan saya dan menambah pengalaman baru. Saya juga senang berbagi pengetahuan dengan orang lain, sehingga saya sering mempelajari perkembangan teknologi yang sedang berkembang.
          </p>

          <div className="flex flex-wrap gap-3">
            {educationChips.map((chip, i) => (
              <BrutalistCard
                key={`${chip}-${i}`}
                shadow="sm"
                rounded="sm"
                className="px-4 py-2 bg-[#FACC15] text-[#111827]"
              >
                <span className="font-utility text-sm font-bold">{chip}</span>
              </BrutalistCard>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <BrutalistCard
            shadow="lg"
            rounded="lg"
            hover={false}
            className="p-8 grid grid-cols-2 gap-8"
          >
            {stats.map((stat, i) => (
              <StatCounter
                key={`${stat.label}-${i}`}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
              />
            ))}
          </BrutalistCard>
        </motion.div>
      </div>
    </section>
  );
}
