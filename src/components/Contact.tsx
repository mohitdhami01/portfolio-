import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { useState } from "react";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      // Replace 'YOUR_FORM_ID' with your actual Formspree form ID
      const response = await fetch("https://formspree.io/f/mwpzopdg", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        toast.success("Message sent successfully! I'll get back to you soon.");
        form.reset(); // Clear the form
      } else {
        const data = await response.json();
        if (data.errors) {
          toast.error(data.errors.map((error: any) => error.message).join(", "));
        } else {
          toast.error("Oops! There was a problem sending your message.");
        }
      }
    } catch (error) {
      toast.error("Failed to send message. Please try again later.");
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-subtle">
      <div className="container mx-auto max-w-2xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Get In <span className="gradient-text">Touch</span>
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6 bg-card glow-border-primary rounded-lg p-8">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">
              Name
            </label>
            <Input
              id="name"
              name="name"
              placeholder="Your Name"
              className="glow-border-primary transition-all duration-300 focus:scale-[1.02]"
              required
              disabled={isSubmitting}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="your.email@example.com"
              className="glow-border-primary transition-all duration-300 focus:scale-[1.02]"
              required
              disabled={isSubmitting}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">
              Message
            </label>
            <Textarea
              id="message"
              name="message"
              placeholder="Your message here..."
              rows={6}
              className="glow-border-primary transition-all duration-300 focus:scale-[1.02] resize-none"
              required
              disabled={isSubmitting}
            />
          </div>
          <Button
            type="submit"
            className="w-full glow-border-primary hover:scale-105 transition-all duration-300 animate-glow-pulse"
            size="lg"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;