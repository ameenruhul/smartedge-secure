import { motion } from "framer-motion";
import { TrendingDown, Scale, Home, Smartphone } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: TrendingDown,
      title: "Reduces Residential Crime",
      description:
        "Studies show that visible CCTV systems significantly reduce crime in residential and commercial areas.",
    },
    {
      icon: Scale,
      title: "Provides Strong Legal Evidence",
      description:
        "High-resolution footage helps with investigations, insurance claims, and legal matters.",
    },
    {
      icon: Home,
      title: "Increases Property Value",
      description:
        "Homes with professional security systems are more attractive to buyers and renters.",
    },
    {
      icon: Smartphone,
      title: "Remote Access, Anywhere",
      description:
        "View live or recorded footage from your phone or computer—anytime, anywhere.",
    },
  ];

  return (
    <section id="services" className="py-20 lg:py-28 bg-section-gradient">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block bg-brand-cyan/10 text-brand-cyan font-semibold px-4 py-2 rounded-full text-sm mb-4">
            Why Security Cameras Matter
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Professional CCTV Installation{" "}
            <span className="text-brand-cyan">You Can Trust</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Your safety shouldn't rely on guesswork or cheap DIY systems. We design and
            install high-performance, wired security camera systems that deliver clarity,
            reliability, and peace of mind—24/7.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-card rounded-2xl p-6 h-full shadow-card hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-border/50">
                <div className="w-14 h-14 bg-brand-cyan/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-brand-cyan group-hover:scale-110 transition-all duration-300">
                  <benefit.icon className="w-7 h-7 text-brand-cyan group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
