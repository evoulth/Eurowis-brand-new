import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Star, ArrowRight, Heart, Users, BookOpen, Award, FileText, Eye, Rocket } from "lucide-react";

import schoolBuilding from "@/assets/general/school-building.jpg";
import photoCollage1 from "@/assets/general/photo-collage.png";
import photoCollage2 from "@/assets/general/Photo-collage-2.png";
import ScrollAnimation from "@/components/ScrollAnimation";

const Home = () => {
  const [selectedMonth, setSelectedMonth] = useState("january");
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [photoCollage1, photoCollage2];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  // Developer-only calendar PDFs - these would be managed in the code
  const calendarPDFs: Record<string, { name: string; url: string } | null> = {
    january: { name: "January 2024 Calendar.pdf", url: "/calendars/january-2024.pdf" },
    february: null,
    march: { name: "March 2024 Calendar.pdf", url: "/calendars/march-2024.pdf" },
    april: null,
    may: null,
    june: null,
    july: null,
    august: null,
    september: null,
    october: null,
    november: null,
    december: null,
  };

  const testimonials = [
    {
      name: "Priya Sharma",
      text: "euroWiskids has been wonderful for our daughter. The teachers are caring and the learning environment is exceptional.",
      rating: 5,
    },
    {
      name: "Rajesh Kumar",
      text: "The best preschool in the area! My son loves going to school every day and has learned so much.",
      rating: 5,
    },
    {
      name: "Meera Patel",
      text: "Outstanding curriculum and facilities. Highly recommend euroWiskids to all parents.",
      rating: 5,
    },
  ];

  const features = [
    {
      icon: Heart,
      title: "Nurturing Care",
      description: "Providing a loving and safe environment for every child",
    },
    {
      icon: Users,
      title: "Expert Teachers",
      description: "Qualified educators dedicated to child development",
    },
    {
      icon: BookOpen,
      title: "Modern Curriculum",
      description: "Age-appropriate learning programs for all levels",
    },
    {
      icon: Award,
      title: "Quality Education",
      description: "Recognized excellence in early childhood education",
    },
  ];

  const downloadPDF = (month: string) => {
    const calendar = calendarPDFs[month];
    if (calendar) {
      const a = document.createElement('a');
      a.href = calendar.url;
      a.download = calendar.name;
      a.click();
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Slideshow backgrounds */}
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-[1500ms] ease-in-out"
            style={{
              backgroundImage: `url(${slide})`,
              opacity: currentSlide === index ? 1 : 0,
            }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-pink-bright to-pink-deep bg-clip-text text-transparent">
              euroWiskids
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 drop-shadow-md">
            Where Learning Begins with Love and Care
          </p>
        </div>

        {/* Slide dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index
                ? "bg-white scale-125"
                : "bg-white/50 hover:bg-white/80"
                }`}
            />
          ))}
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 bg-gradient-to-br from-pink-soft/10 to-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <ScrollAnimation className="space-y-6">
              <div className="flex items-center mb-4">
                <span className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-pink-bright to-pink-deep rounded-2xl mr-4">
                  <Eye className="w-8 h-8 text-white" />
                </span>
                <h2 className="text-3xl md:text-4xl font-bold">
                  <span className="bg-gradient-to-r from-pink-bright to-pink-deep bg-clip-text text-transparent">Vision</span>
                </h2>
              </div>
              <p className="text-lg text-muted-foreground">
                Our vision is to establish a Christ-centered preschool that serves children under six years old in a metropolitan area. Rooted in biblical principles, our early years program is entirely driven by play, leveraging the natural resources around us to foster creativity, social skills, and a lifelong love of learning. We also support working parents by providing a safe, welcoming environment, ensuring their children receive a strong educational foundation for the future.
              </p>
            </ScrollAnimation>
            <ScrollAnimation delay={0.2} className="space-y-6">
              <div className="flex items-center mb-4">
                <span className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-pink-bright to-pink-deep rounded-2xl mr-4">
                  <Rocket className="w-8 h-8 text-white" />
                </span>
                <h2 className="text-3xl md:text-4xl font-bold">
                  <span className="bg-gradient-to-r from-pink-bright to-pink-deep bg-clip-text text-transparent">Mission</span>
                </h2>
              </div>
              <p className="text-lg text-muted-foreground">
                Our preschool and early years program is centered around play, fostering strong bonds between teachers and children. We encourage self-reliance, resilience, empathy, and a love for nature through engaging indoor and outdoor play with natural materials. We celebrate childhood every day with fun activities, storytelling, field trips, and sensory play, all while integrating family values, social awareness, and environmental consciousness. Our mission is to nurture each child like a seed, helping them grow into resilient, compassionate individuals who will positively impact society
              </p>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-background to-pink-soft/20">
        <div className="container mx-auto px-4">
          <ScrollAnimation className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose <span className="bg-gradient-to-r from-pink-bright to-pink-deep bg-clip-text text-transparent">euroWiskids</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We provide the perfect foundation for your child's educational journey
            </p>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <ScrollAnimation key={index} delay={index * 0.1}>
                <Card className="text-center border-blue-soft/20 shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-2">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-br from-pink-bright to-blue-deep rounded-2xl mx-auto flex items-center justify-center mb-4">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* School Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation className="">
              <img
                src={schoolBuilding}
                alt="euroWiskids School Building"
                className="rounded-2xl shadow-card w-full h-auto "
              />
            </ScrollAnimation>
            <ScrollAnimation className="space-y-6" delay={0.2}>
              <h2 className="text-3xl md:text-4xl font-bold">
                Our Beautiful <span className="bg-gradient-to-r from-pink-bright to-pink-deep bg-clip-text text-transparent">Learning Environment</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                At euroWiskids, we believe that a beautiful, safe, and stimulating environment is essential for optimal learning. Our state-of-the-art facilities are designed with children in mind.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground">Modern classrooms with age-appropriate furniture</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground">Safe outdoor playground areas</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground">Interactive learning zones</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground">Nutritious meal preparation areas</span>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>



      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ScrollAnimation className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Parents <span className="bg-gradient-to-r from-pink-bright to-pink-deep bg-clip-text text-transparent">Say About Us</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Real experiences from our euroWiskids family
            </p>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <ScrollAnimation key={index} delay={index * 0.1}>
                <Card className="text-center shadow-card hover:shadow-hover transition-all duration-300">
                  <CardContent className="pt-6">
                    <div className="flex justify-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-6 italic">"{testimonial.text}"</p>
                    <div className="text-center">
                      <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">Parent</p>
                    </div>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;