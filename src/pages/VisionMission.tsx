import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, Target, Heart, Star, Lightbulb, Shield } from "lucide-react";
import ScrollAnimation from "@/components/ScrollAnimation";

const VisionMission = () => {
  const coreValues = [
    {
      icon: Heart,
      title: "Love & Care",
      description: "Every child is nurtured with unconditional love and personalized attention",
    },
    {
      icon: Star,
      title: "Excellence",
      description: "We strive for the highest standards in everything we do",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Creative teaching methods that inspire curiosity and learning",
    },
    {
      icon: Shield,
      title: "Safety",
      description: "Providing a secure and protected environment for all children",
    },
  ];

  const objectives = [
    "Foster a love for learning through engaging and age-appropriate activities",
    "Develop strong foundations in language, mathematics, and social skills",
    "Encourage creativity, critical thinking, and problem-solving abilities",
    "Build confidence, independence, and emotional intelligence",
    "Promote cultural awareness and respect for diversity",
    "Establish strong partnerships with families and the community",
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <ScrollAnimation className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Vision & <span className="bg-gradient-to-r from-pink-bright to-pink-deep bg-clip-text text-transparent">Mission</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Guiding principles that shape our commitment to early childhood education and development
          </p>
        </ScrollAnimation>

        {/* Vision & Mission Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {/* Vision Card */}
          <ScrollAnimation className="h-full">
            <Card className="shadow-card hover:shadow-hover transition-all duration-300 h-full">
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-pink-bright to-blue-deep rounded-3xl mx-auto flex items-center justify-center mb-4">
                  <Eye className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <div className="text-lg leading-relaxed text-foreground">
                  <p className="mb-4">
                    Our vision is to establish a Christ-centered preschool that serves children under six years old in a metropolitan area. Rooted in biblical principles, our early years program is entirely driven by play, leveraging the natural resources around us to foster creativity, social skills, and a lifelong love of learning. We also support working parents by providing a safe, welcoming environment, ensuring their children receive a strong educational foundation for the future.
                  </p>

                  <p className="text-muted-foreground italic">
                    "Building tomorrow's leaders, one child at a time."
                  </p>
                </div>
              </CardContent>
            </Card>
          </ScrollAnimation>

          {/* Mission Card */}
          <ScrollAnimation delay={0.2} className="h-full">
            <Card className="shadow-card hover:shadow-hover transition-all duration-300 h-full">
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-deep to-pink-bright rounded-3xl mx-auto flex items-center justify-center mb-4">
                  <Target className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <div className="text-lg leading-relaxed text-foreground">
                  <p className="mb-4">
                    Our preschool and early years program is centered around play, fostering strong bonds between teachers and children. We encourage self-reliance, resilience, empathy, and a love for nature through engaging indoor and outdoor play with natural materials. We celebrate childhood every day with fun activities, storytelling, field trips, and sensory play, all while integrating family values, social awareness, and environmental consciousness. Our mission is to nurture each child like a seed, helping them grow into resilient, compassionate individuals who will positively impact society
                  </p>

                  <p className="text-muted-foreground italic">
                    "Excellence in education through love, care, and innovation."
                  </p>
                </div>
              </CardContent>
            </Card>
          </ScrollAnimation>
        </div>

        {/* Core Values Section */}
        <section className="mb-20">
          <ScrollAnimation className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Core <span className="bg-gradient-to-r from-pink-bright to-pink-deep bg-clip-text text-transparent">Values</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              The fundamental principles that guide everything we do
            </p>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <ScrollAnimation key={index} delay={index * 0.1}>
                <Card className="text-center shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-2">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-br from-pink-bright to-blue-deep rounded-2xl mx-auto flex items-center justify-center mb-4">
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </section>

        {/* Educational Objectives */}
        <section className="mb-20">
          <ScrollAnimation className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Educational <span className="bg-gradient-to-r from-pink-bright to-pink-deep bg-clip-text text-transparent">Objectives</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              What we aim to achieve for every child in our care
            </p>
          </ScrollAnimation>

          <ScrollAnimation>
            <Card className="shadow-card max-w-4xl mx-auto">
              <CardContent className="pt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {objectives.map((objective, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-gradient-to-br from-pink-bright to-blue-deep rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-xs font-bold">{index + 1}</span>
                      </div>
                      <p className="text-foreground leading-relaxed">{objective}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </ScrollAnimation>
        </section>

        {/* Philosophy Statement */}
        <ScrollAnimation>
          <Card className="bg-gradient-to-br from-blue-soft/30 to-background shadow-card">
            <CardContent className="pt-8 text-center">
              <h2 className="text-3xl font-bold mb-6">
                Our Educational <span className="bg-gradient-to-r from-pink-bright to-pink-deep bg-clip-text text-transparent">Philosophy</span>
              </h2>
              <div className="max-w-4xl mx-auto space-y-6 text-lg leading-relaxed">
                <p className="text-foreground">
                  At euroWiskids, we believe that every child is a unique individual with unlimited potential. Our educational philosophy is rooted in the understanding that children learn best in an environment that is both challenging and supportive, where they feel valued, respected, and loved.
                </p>
                <p className="text-foreground">
                  We embrace a holistic approach to education that recognizes the importance of developing the whole child - intellectually, emotionally, socially, physically, and creatively. Through play-based learning, hands-on experiences, and meaningful interactions, we help children develop the skills, knowledge, and confidence they need to succeed in school and in life.
                </p>
                <p className="bg-gradient-to-r from-pink-bright to-pink-deep bg-clip-text text-transparent font-semibold italic text-xl">
                  "Every child deserves to be nurtured, challenged, and celebrated for who they are and who they can become."
                </p>
              </div>
            </CardContent>
          </Card>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default VisionMission;