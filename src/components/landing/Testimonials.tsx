import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "Super impressed with Ibrahim's work ethic. They go out of their way to fix unexpected issues and make sure the job is done properly.",
      author: "Patrick Jaramillo",
      rating: 5,
    },
    {
      quote:
        "Clean installation, excellent communication, and a system that works perfectly. Highly recommend Smart Edge Automation.",
      author: "Aasif Javed",
      rating: 5,
    },
    {
      quote:
        "Very good quality cameras and great work. Our go-to security team.",
      author: "Khalid Saifullah",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-section-gradient">
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
            Real Customer Reviews
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            What Our Customers{" "}
            <span className="text-brand-cyan">Are Saying</span>
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group"
            >
              <div className="bg-card rounded-2xl p-6 lg:p-8 h-full shadow-card hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-border/50 relative">
                {/* Quote Icon */}
                <div className="absolute -top-4 left-6">
                  <div className="w-10 h-10 bg-brand-cyan rounded-xl flex items-center justify-center shadow-lg">
                    <Quote className="w-5 h-5 text-primary-foreground" />
                  </div>
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4 pt-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-brand-orange fill-brand-orange"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-foreground text-lg mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className="w-10 h-10 bg-brand-cyan/10 rounded-full flex items-center justify-center">
                    <span className="font-bold text-brand-cyan">
                      {testimonial.author.charAt(0)}
                    </span>
                  </div>
                  <span className="font-semibold text-foreground">
                    {testimonial.author}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
