import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, CheckCircle2 } from "lucide-react";
import { BrutalistCard } from "../ui/BrutalistCard";
import { SectionHeading } from "../ui/SectionHeading";
import { MagneticButton } from "../ui/MagneticButton";
import { siteConfig } from "../../data/site-config";

interface Errors {
  name?: string;
  email?: string;
  message?: string;
}

export function Contact() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const validate = (): Errors => {
    const next: Errors = {};
    if (!values.name.trim()) next.name = "Nama belum diisi";
    if (!values.email.trim()) next.email = "Email belum diisi";
    else if (!/^\S+@\S+\.\S+$/.test(values.email))
      next.email = "Format email belum benar";
    if (!values.message.trim()) next.message = "Pesan belum diisi";
    return next;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length === 0) {
      const subject = encodeURIComponent(`Pesan Portofolio dari ${values.name.trim()}`);
      const body = encodeURIComponent(
        `Halo Fathur,\n\nNama: ${values.name.trim()}\nEmail: ${values.email.trim()}\n\nPesan:\n${values.message.trim()}`
      );
      window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
      setSent(true);
    }
  };

  const inputClass =
    "w-full bg-transparent border-[3px] brut-border rounded-[8px] px-4 pt-6 pb-2 font-body text-sm focus:outline-none";

  return (
    <section
      id="contact"
      aria-label="Kontak"
      className="max-w-5xl mx-auto px-5 md:px-8 py-20 md:py-28"
    >
      <SectionHeading
        eyebrow="> Contact"
        title="Yuk, mulai obrolan"
        highlight="mulai obrolan"
        markColor="#FACC15"
      />

      <div className="grid md:grid-cols-[1fr_1.2fr] gap-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-5"
        >
          <p className="font-body opacity-80 leading-relaxed">
            Punya project ? atau sekadar ingin mendiskusikan sistem
            pemrograman? Kabari saya lewat form, atau langsung lewat email.
          </p>

          <BrutalistCard shadow="sm" rounded="md" className="p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-[6px] border-2 brut-border flex items-center justify-center shrink-0">
              <Mail size={16} />
            </div>
            <a href={siteConfig.social.email} className="font-utility text-sm font-semibold break-all">
              {siteConfig.email}
            </a>
          </BrutalistCard>

          <BrutalistCard shadow="sm" rounded="md" className="p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-[6px] border-2 border-[#5865F2] flex items-center justify-center shrink-0 bg-[#5865F2] text-white">
              <svg aria-hidden="true" viewBox="0 0 20 19" className="w-5 h-5">
                <use href="/icons.svg#discord-icon" />
              </svg>
            </div>
            <a
              href={siteConfig.social.discord}
              target="_blank"
              rel="noreferrer"
              className="font-utility text-sm font-semibold"
            >
              Discord Community
            </a>
          </BrutalistCard>

          <BrutalistCard shadow="sm" rounded="md" className="p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-[6px] border-2 brut-border flex items-center justify-center shrink-0">
              <MapPin size={16} />
            </div>
            <span className="font-utility text-sm font-semibold">
              {siteConfig.location} · {siteConfig.timezone}
            </span>
          </BrutalistCard>

          <BrutalistCard shadow="sm" rounded="md" className="p-4 flex items-center gap-3 bg-[#22C55E] text-white">
            <span className="w-2.5 h-2.5 rounded-full bg-white animate-pulse shrink-0" />
            <span className="font-utility text-sm font-bold">
              Available for work
            </span>
          </BrutalistCard>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <BrutalistCard shadow="lg" rounded="lg" hover={false} className="p-6 md:p-8">
            {sent ? (
              <div className="flex flex-col items-center text-center gap-3 py-8">
                <CheckCircle2 size={40} className="text-[#22C55E]" />
                <p className="font-display font-bold text-lg">
                  Pesan siap dikirim
                </p>
                <p className="font-body text-sm opacity-70 max-w-sm">
                  Aplikasi email Anda telah dibuka untuk mengirim pesan ke{" "}
                  <span className="font-semibold">{siteConfig.email}</span>. Terima kasih!
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setValues({ name: "", email: "", message: "" });
                    setSent(false);
                  }}
                  className="mt-2 font-utility text-xs font-bold uppercase tracking-wide px-4 py-2 rounded-[8px] border-2 brut-border brut-surface brut-shadow-sm cursor-pointer"
                >
                  Kirim Pesan Lain
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="absolute left-4 top-2 font-utility text-[11px] uppercase tracking-wide opacity-60"
                  >
                    Nama
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={values.name}
                    onChange={(e) =>
                      setValues((v) => ({ ...v, name: e.target.value }))
                    }
                    className={inputClass}
                    style={
                      errors.name
                        ? { borderColor: "#EF4444", boxShadow: "4px 4px 0px #EF4444" }
                        : undefined
                    }
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs font-semibold text-[#EF4444]">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div className="relative">
                  <label
                    htmlFor="email"
                    className="absolute left-4 top-2 font-utility text-[11px] uppercase tracking-wide opacity-60"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={values.email}
                    onChange={(e) =>
                      setValues((v) => ({ ...v, email: e.target.value }))
                    }
                    className={inputClass}
                    style={
                      errors.email
                        ? { borderColor: "#EF4444", boxShadow: "4px 4px 0px #EF4444" }
                        : undefined
                    }
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs font-semibold text-[#EF4444]">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div className="relative">
                  <label
                    htmlFor="message"
                    className="absolute left-4 top-2 font-utility text-[11px] uppercase tracking-wide opacity-60"
                  >
                    Pesan
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={values.message}
                    onChange={(e) =>
                      setValues((v) => ({ ...v, message: e.target.value }))
                    }
                    className={inputClass}
                    style={
                      errors.message
                        ? { borderColor: "#EF4444", boxShadow: "4px 4px 0px #EF4444" }
                        : undefined
                    }
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs font-semibold text-[#EF4444]">
                      {errors.message}
                    </p>
                  )}
                </div>

                <MagneticButton type="submit" variant="primary" className="self-start">
                  Kirim Pesan <Send size={16} />
                </MagneticButton>
              </form>
            )}
          </BrutalistCard>
        </motion.div>
      </div>
    </section>
  );
}