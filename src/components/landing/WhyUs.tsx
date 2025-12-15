import { motion } from "framer-motion";
import { Camera, Wrench, Shield, MapPin, Heart, Headphones, Star } from "lucide-react";

const WhyUs = () => {
  const reasons = [
    { icon: Camera, text: "High-Quality Cameras" },
    { icon: Wrench, text: "Professional, Clean Installations" },
    { icon: Shield, text: "Fully Licensed & Insured" },
    { icon: MapPin, text: "Local Australian Business" },
    { icon: Heart, text: "Honest Advice — No Pushy Sales" },
    { icon: Headphones, text: "Ongoing Support After Installation" },
  ];

  return (
    <section id="why-us" className="py-20 lg:py-28 bg-hero-gradient relative overflow-hidden">
      {/* Pattern Overlay */}
      <div className="absolute inset-0 pattern-overlay opacity-20" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-primary-foreground/20 text-primary-foreground font-semibold px-4 py-2 rounded-full text-sm mb-4">
              Why Choose Us
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Why Choose{" "}
              <span className="text-brand-cyan">SmartEdge Automation?</span>
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8">
              We're not just installers—we're your security partners. From the first
              consultation to ongoing support, we deliver peace of mind with every project.
            </p>

            {/* Rating Badge */}
            <div className="inline-flex items-center gap-3 bg-primary-foreground/10 backdrop-blur-sm rounded-2xl px-6 py-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-6 h-6 text-brand-orange fill-brand-orange"
                  />
                ))}
              </div>
              <div>
                <p className="font-bold text-primary-foreground">5-Star Rated</p>
                <p className="text-sm text-primary-foreground/70">on Google</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Reasons Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="grid sm:grid-cols-2 gap-4">
              {reasons.map((reason, index) => (
                <motion.div
                  key={reason.text}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.08 }}
                  className="group bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-4 hover:bg-primary-foreground/20 transition-all duration-300 border border-primary-foreground/10"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-brand-cyan/20 rounded-lg flex items-center justify-center group-hover:bg-brand-cyan group-hover:scale-110 transition-all duration-300">
                      <reason.icon className="w-5 h-5 text-brand-cyan group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <span className="font-medium text-primary-foreground">
                      {reason.text}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
