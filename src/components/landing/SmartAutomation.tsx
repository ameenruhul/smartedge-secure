import { motion } from "framer-motion";
import { Shield, Lightbulb, Music, Thermometer, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";

const SmartAutomation = () => {
  const services = [
    {
      icon: Shield,
      title: "Security & Surveillance",
      description:
        "Smart cameras, doorbells, AI motion sensors, instant alerts, and centralized control.",
      color: "text-brand-cyan",
      bgColor: "bg-brand-cyan/10",
    },
    {
      icon: Lightbulb,
      title: "Intelligent Lighting",
      description:
        "Automated lighting scenes, energy-efficient controls, smart plugs, and ecosystem integration.",
      color: "text-brand-orange",
      bgColor: "bg-brand-orange/10",
    },
    {
      icon: Music,
      title: "Smart Entertainment",
      description:
        "Multi-room audio, seamless TV integration, announcements, and automation.",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Thermometer,
      title: "Climate Control",
      description:
        "Smart HVAC, blinds, curtains, energy tracking, and scheduling for comfort and efficiency.",
      color: "text-brand-green",
      bgColor: "bg-brand-green/10",
    },
    {
      icon: Leaf,
      title: "Garden & Irrigation",
      description:
        "Weather-based irrigation, soil monitoring, and intelligent outdoor lighting.",
      color: "text-brand-cyan",
      bgColor: "bg-brand-cyan/10",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-background">
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
            More Than CCTV
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Complete <span className="text-brand-cyan">Smart Automation</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From security to comfort, we help you manage everything from one system.
            Upgrade your home or business with smart automation.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group bg-card rounded-2xl p-6 shadow-card hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-border/50 ${
                index === 0 ? "lg:col-span-1 lg:row-span-2" : ""
              }`}
            >
              <div
                className={`w-14 h-14 ${service.bgColor} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
              >
                <service.icon className={`w-7 h-7 ${service.color}`} />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-4">{service.description}</p>
              <Button variant="link" className="px-0 text-brand-cyan hover:text-brand-cyan-light" asChild>
                <a href="#contact">
                  Learn More →
                </a>
              </Button>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Button variant="cta" size="xl" asChild>
            <a href="#contact">Explore All Solutions</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default SmartAutomation;
