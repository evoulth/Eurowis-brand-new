import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import ScrollAnimation from "@/components/ScrollAnimation";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      content: "Susilanagar, Plot No.4, Rajiv Gandhi IT Expy, Kittu Nagar, Kelambakkam, Tamil Nadu 603103",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+91 98765 43210",
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@eurowiskids.com",
    },
    {
      icon: Clock,
      title: "Working Hours",
      content: "Monday - Friday: 8:00 AM - 6:00 PM\nSaturday: 9:00 AM - 1:00 PM\nSunday: Closed",
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <ScrollAnimation className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Contact <span className="bg-gradient-to-r from-pink-bright to-pink-deep bg-clip-text text-transparent ">Us</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We'd love to hear from you! Get in touch with us for any questions, school visits, or enrollment inquiries.
          </p>
        </ScrollAnimation>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-pink-bright to-pink-deep bg-clip-text text-transparent">Get in Touch</h2>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="shadow-card hover:shadow-hover transition-all duration-300">
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-pink-bright to-blue-deep rounded-xl flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-foreground mb-2">{info.title}</h3>
                        <p className="text-muted-foreground whitespace-pre-line">{info.content}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Additional Information */}
            <ScrollAnimation delay={0.2}>
              <Card className="bg-gradient-to-br from-blue-soft/30 to-background shadow-card">
                <CardHeader>
                  <CardTitle>Visit Our School</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    We welcome parents and families to visit our campus and see our facilities firsthand.
                    Schedule a tour to meet our teachers and learn more about our programs.
                  </p>
                  <Button className="w-full sm:w-auto">
                    Schedule a Visit
                  </Button>
                </CardContent>
              </Card>
            </ScrollAnimation>
          </div>

          {/* Contact Form */}
          <ScrollAnimation delay={0.3} className="h-full">
            <Card className="shadow-card h-full">
              <CardHeader>
                <CardTitle className="text-2xl">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground block mb-2">
                        Parent/Guardian Name *
                      </label>
                      <Input placeholder="Your full name" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground block mb-2">
                        Child's Name
                      </label>
                      <Input placeholder="Your child's name" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground block mb-2">
                        Email *
                      </label>
                      <Input type="email" placeholder="your.email@example.com" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground block mb-2">
                        Phone Number *
                      </label>
                      <Input placeholder="+91 98765 43210" />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground block mb-2">
                      Child's Age
                    </label>
                    <Input placeholder="e.g., 3 years old" />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground block mb-2">
                      Interested Level
                    </label>
                    <select className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring">
                      <option value="">Select a level</option>
                      <option value="level1">Level 1 (Age 2-3)</option>
                      <option value="level2">Level 2 (Age 3-4)</option>
                      <option value="level3">Level 3 (Age 4-5)</option>
                      <option value="level4">Level 4 (Age 5-6)</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground block mb-2">
                      Message *
                    </label>
                    <Textarea
                      placeholder="Tell us about your inquiry, questions, or how we can help you..."
                      rows={5}
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </ScrollAnimation>
        </div>

        {/* Google Maps Section */}
        <section className="mt-20">
          <ScrollAnimation className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Find <span className="bg-gradient-to-r from-pink-bright to-pink-deep bg-clip-text text-transparent">Our Location</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Located in the heart of Kelambakkam, easily accessible via IT Expressway
            </p>
          </ScrollAnimation>

          <ScrollAnimation>
            <Card className="shadow-card overflow-hidden">
              <CardContent className="p-0">
                <div className="w-full h-96 bg-muted/30 relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.8959537374556!2d80.15151!3d12.8449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525e8e4b2c4b95%3A0x3e2c4b2c4b2c4b95!2sKelambakkam%2C%20Tamil%20Nadu%20603103!5e0!3m2!1sen!2sin!4v1634567890123!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="euroWiskids Location"
                  ></iframe>

                  {/* Custom overlay for better visual integration */}
                  <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-background/10 to-transparent"></div>
                </div>
              </CardContent>
            </Card>
          </ScrollAnimation>

          {/* Location details below map */}
          <ScrollAnimation className="mt-8 text-center" delay={0.2}>
            <Card className="inline-block shadow-card">
              <CardContent className="pt-6">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 bg-gradient-to-r from-pink-bright to-pink-deep bg-clip-text " />
                  <p className="text-muted-foreground">
                    Susilanagar, Plot No.4, Rajiv Gandhi IT Expy, Kittu Nagar, Kelambakkam, Tamil Nadu 603103
                  </p>
                </div>
              </CardContent>
            </Card>
          </ScrollAnimation>
        </section>
      </div>
    </div>
  );
};

export default Contact;