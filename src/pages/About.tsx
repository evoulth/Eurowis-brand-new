import schoolHead from "@/assets/general/school-head.jpg";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  GraduationCap,
  Award,
  Clock,
  BookOpen,
  Heart,
  Rocket,
} from "lucide-react";
import teamPhoto from "@/assets/general/team-photo.jpg";
import ScrollAnimation from "@/components/ScrollAnimation";

// Faculty Images
import vinothini from "@/assets/faculty/Vinothini.jpg";
import dhanalakshmi from "@/assets/faculty/Dhanalakshmi.jpg";
import rajalakshmi from "@/assets/faculty/Rajalakshmi.jpg";
import deepa from "@/assets/faculty/Deepa.jpg";
import sangeetha from "@/assets/faculty/Sangeetha.jpg";
import sharonSangeetha from "@/assets/faculty/Sharon Sangeetha.jpg";
import abirami from "@/assets/faculty/Abirami.jpg";
import abinaya from "@/assets/faculty/Abinaya.jpg";
import bhavani from "@/assets/faculty/Bhavani.jpg";
import durgaDevi from "@/assets/faculty/Durga devi.jpg";
import kala from "@/assets/faculty/kala.jpg";
import kumari from "@/assets/faculty/Kumari.jpg";
import lakshmiPriya from "@/assets/faculty/Lakshmi priya.jpg";
import mythili from "@/assets/faculty/Mythili.jpg";
import padmavathy from "@/assets/faculty/Padmavathy.jpg";
import pavithra from "@/assets/faculty/Pavithra.jpg";
import priya from "@/assets/faculty/Priya.jpg";
import punitha from "@/assets/faculty/Punitha.jpg";
import sivaShankari from "@/assets/faculty/Sivasankari.jpg";
import sowmiya from "@/assets/faculty/Sowmiya.jpg";
import vrindha from "@/assets/faculty/Vrindha.jpg";

const About = () => {
  const stats = [
    { icon: Users, label: "Happy Students", value: "200+" },
    { icon: GraduationCap, label: "Expert Teachers", value: "15+" },
    { icon: Award, label: "Years of Excellence", value: "10+" },
    { icon: Clock, label: "Operating Hours", value: "10+" },
  ];

  const teachers = [
    {
      name: "CHRISTINA MARY EMERALD",
      role: "Early Years Centre Director | Parent–Child Development Specialist & Early Years Program Designer",
      image: deepa,
    },
    {
      name: "SHARON SANGEETHA",
      role: "Centre Head, Operations Lead & Early Childhood Program Specialist",
      image: sharonSangeetha,
    },
    {
      name: "VINOTHINI",
      role: "Early Years Specialist – Infants & Toddlers",
      image: vinothini,
    },
    {
      name: "ABIRAMI",
      role: "Children's Creative Character Artist",
      image: abirami,
    },
    {
      name: "DHANALAKSHMI",
      role: "Specialist in Early Years Art and Craft Activities",
      image: dhanalakshmi,
    },
    {
      name: "RAJALAKSHMI",
      role: "Highly Skilled Early Childhood Programmer in Language and Communication",
      image: rajalakshmi,
    },
    {
      name: "DURGA DEVI",
      role: "Early Childhood Programmer & Expressive Storyteller",
      image: durgaDevi,
    },
    {
      name: "ABINAYA",
      role: "Creative Storytelling Educator with Character Voice Skills",
      image: abinaya,
    },
    {
      name: "SIVA SHANKARI",
      role: "Early Years Rhyme and Music Educator",
      image: sivaShankari,
    },
    {
      name: "SANGEETHA",
      role: "Honorary Early Childhood Educator – Child Connection & Creative Dance Specialist",
      image: sangeetha,
    },
  ];

  const caregivers = [
    {
      name: "LAKSHMIPRIYA",
      role: "Early Childhood Art-Integrated Program Facilitator",
      image: lakshmiPriya,
    },
    {
      name: "BHAVANI",
      role: "Caregiver",
      image: bhavani,
    },
    {
      name: "KALA",
      role: "Caregiver",
      image: kala,
    },
    {
      name: "KUMARI",
      role: "Caregiver",
      image: kumari,
    },
    {
      name: "MYTHILI",
      role: "Caregiver",
      image: mythili,
    },
    {
      name: "PADMAVATHY",
      role: "Caregiver",
      image: padmavathy,
    },
    {
      name: "PAVITHRA",
      role: "Caregiver",
      image: pavithra,
    },
    {
      name: "PRIYA",
      role: "Caregiver",
      image: priya,
    },
    {
      name: "PUNITHA",
      role: "Caregiver",
      image: punitha,
    },
    {
      name: "SOWMIYA",
      role: "Caregiver",
      image: sowmiya,
    },
    {
      name: "VRINDHA",
      role: "Caregiver",
      image: vrindha,
    },
  ];

  const aboutPoints = [
    "A Purpose-Driven Early Childhood Education.",
    "A Family-Centered Preschool Rooted in Love and Care.",
    "A Safe Haven for Little Hearts to Grow, Explore, and Belong.",
    "A Christ-Reflecting Community Touching Lives Beyond Classrooms.",
    "A Play-Based, Nature-Inspired Learning Journey.",
    "A Team of 24 Hearts Working as One Family.",
    "A Space Where Every Child Is Seen, Heard, and Valued.",
    "A Gentle Hand for Special Children and an Open Heart for All.",
    "A Support System for Young Parents Walking Through Challenges.",
    "A Culture of Creativity, Innovation, and Freedom to Explore.",
    "A Bridge Between Childhood Joy and Lifelong Values.",
    "A Movement That Nurtures Children Like Seeds for the Future.",
    "A Living Testimony of Jesus’ Love Through Service.",
    "A Meaningful Impact on Families and Society.",
    "A Foundation of Faith, Compassion, and Excellence in Early Years.",
    "No curriculum books till 4 years of age.",
    "A program centered on love, learning, and legacy.",
  ];

  const levels = [
    {
      level: "Level 1",
      age: "2–3 Years",
      title: " Early Childhood Program – Level 1",
      intro:
        "Level 1 marks a child’s gentle entry into structured early learning through play-based experiences.",
      focus: [
        "Guided play and sensory learning",
        "Action songs and Bible value songs",
        "Storytelling and language development",
        "Vocabulary building",
        "Creative and exploratory activities",
        "Social interaction and sharing habits",
        "Faith-based value introduction",
      ],
      closing:
        "We create a warm, curious, and encouraging environment where children feel safe, loved, and confident.",
    },
    {
      level: "Level 2",
      age: "3–4 Years",
      title: " Early Childhood Program – Level 2",
      intro:
        "Level 2 helps children come to school happily through inviting and curiosity-driven classroom environments.",
      focus: [
        "Joyful classroom participation",
        "Daily interest-based learning setups",
        "Language growth through conversation",
        "Hands-on learning with safe materials",
        "Art, clay, sand, mud, and natural resources",
        "Learning process valued over product",
        "Individual learning pace respected",
        "Fine motor skill development",
        "Independent thinking and problem-solving",
        "Dramatic play and role enactment",
        "Strong teacher–child emotional bonding",
      ],
      closing:
        "The focus is joyful learning through relationships, creativity, and exploration.",
    },
    {
      level: "Level 3",
      age: "4–5 Years",
      title: " Early Childhood Program – Level 3 (Lower Kindergarten)",
      intro:
        "Level 3 introduces structured literacy and numeracy through joyful, process-based learning.",
      focus: [
        "10-month school readiness program",
        "Literacy and numeracy foundations",
        "All 26 uppercase and lowercase letters",
        "Phonics and letter-sound recognition",
        "Step-by-step letter learning process",
        "Writing readiness with tracing and patterns",
        "Nature-based learning and outdoor exploration",
        "Simple experiments and model-making",
        "Field visits and real-world learning",
        "Activity-based classroom engagement",
      ],
      closing:
        "Children build strong early academic skills while preserving curiosity and joy.",
    },
    {
      level: "Level 4",
      age: "5–6 Years",
      title: " Early Childhood Program – Level 4 (Upper Kindergarten)",
      intro:
        "Level 4 strengthens literacy and numeracy foundations and prepares children for primary school.",
      focus: [
        "Advanced phonics and reading fluency",
        "Sound blending and word decoding",
        "Reading with comprehension",
        "Sentence formation and vocabulary building",
        "Basic addition and subtraction",
        "Math concepts: more/less, before/after",
        "Hands-on math learning through games",
        "Environmental awareness and responsibility",
        "Outdoor exploration and experiments",
      ],
      closing:
        "Children leave Level 4 confident, independent, and ready for Grade 1 and lifelong learning.",
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">

        {/* HERO */}
        <ScrollAnimation className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="bg-gradient-to-r from-pink-bright to-pink-deep bg-clip-text text-transparent">euroWiskids</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Dedicated to nurturing young minds through innovative education,
            compassionate care, and excellence in early childhood development.
          </p>

          {/* VALUES */}
          <div className="mt-12 max-w-4xl mx-auto grid md:grid-cols-2 gap-4 text-left">
            {aboutPoints.map((point, i) => (
              <div key={i} className="flex gap-3 p-4 rounded-xl bg-muted/40">
                <div className="w-2 h-2 mt-2 bg-primary rounded-full" />
                <p className="text-muted-foreground font-medium">{point}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 space-y-3">
            <p className="italic text-primary text-lg">
              “A preschool where childhood is celebrated and God’s love is lived.”
            </p>
            <p className="font-bold text-xl">
              “Growing little lives with big love.”
            </p>
          </div>
        </ScrollAnimation>

        {/* PROGRAM ABOUT */}
        <ScrollAnimation className="mb-24 ">
          <Card className="max-w-5xl mx-auto ">
            <CardHeader>
              <CardTitle className="text-2xl flex gap-2">
                🌱 <span className="font-Bold bg-gradient-to-r from-pink-bright to-pink-deep bg-clip-text text-transparent ">About EUROWISKIDS Preschool & Early Childhood Program</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground text-lg">
              <p>
                EUROWISKIDS nurtures children from birth to six years through
                developmentally designed learning levels rooted in Biblical values.
              </p>
              <p>
                Our approach blends joyful play, character-building, safety,
                hygiene, and strong parent partnerships.
              </p>
              <p>
                Children learn through songs, stories, creative exploration,
                nature-based activities, and loving relationships.
              </p>
            </CardContent>
          </Card>
        </ScrollAnimation>

        {/* STATS */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
          {stats.map((stat, i) => (
            <ScrollAnimation key={i} delay={i * 0.1}>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-bright to-blue-deep rounded-2xl mx-auto flex items-center justify-center mb-4">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">{stat.value}</h3>
                  <p className="text-muted-foreground text-sm">{stat.label}</p>
                </CardContent>
              </Card>
            </ScrollAnimation>
          ))}
        </section>


        {/* LEVELS */}
        <section className="mb-24">
          <ScrollAnimation className="text-center mb-12">
            <h2 className="text-3xl font-bold ">
              <span className="bg-gradient-to-r from-pink-bright to-pink-deep bg-clip-text text-transparent">Our Learning Levels</span>
            </h2>
          </ScrollAnimation>

          {/* GRID CONTROLLER */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {levels.map((lvl, index) => (
              <ScrollAnimation
                key={index}
                delay={index * 0.1}
                className="bg-gradient-to-br from-pink-bright to-blue-deep p-[2px] rounded-2xl"
              >
                <Card className="rounded-2xl bg-background shadow-card hover:shadow-hover transition-all duration-300 h-full">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl font-bold bg-gradient-to-r from-pink-bright to-pink-deep bg-clip-text text-transparent">
                        {lvl.title}
                      </CardTitle>
                      <Badge>{lvl.age}</Badge>
                    </div>
                    <p className="text-muted-foreground mt-2">
                      {lvl.intro}
                    </p>
                  </CardHeader>

                  <CardContent>
                    <h4 className="font-semibold mb-4 flex items-center gap-2 bg-gradient-to-r from-pink-bright to-pink-deep bg-clip-text text-transparent">
                      <BookOpen className="w-4 h-4 text-primary" />
                      Focus Areas
                    </h4>

                    <ul className="space-y-2">
                      {lvl.focus.map((item: string, idx: number) => (
                        <li key={idx} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>

                    <p className="mt-6 text-sm font-medium italic">
                      {lvl.closing}
                    </p>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </section>

        {/* TEAM */}
        <ScrollAnimation className="mb-24">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-pink-bright to-pink-deep bg-clip-text text-transparent">
            Meet Our Expert Team
          </h2>

          <img
            src={teamPhoto}
            alt="EuroWiskids Team"
            className="w-full max-w-4xl mx-auto rounded-2xl"
          />
        </ScrollAnimation>

        {/* EDUCATORS SECTION */}
        <section className="mb-24">
          <ScrollAnimation className="text-center mb-12">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-bright to-pink-deep bg-clip-text text-transparent">
              Our Expert Educators
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Meet our passionate team of early childhood educators committed to nurturing every child's potential
            </p>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {teachers.map((member, index) => (
              <ScrollAnimation key={index} delay={index * 0.1}>
                <div className="bg-gradient-to-br from-pink-bright to-blue-deep p-[2px] rounded-2xl">
                  <Card className="rounded-2xl bg-background h-full hover:shadow-hover transition-all duration-300">
                    {member.image ? (
                      <div className="p-6 pb-0">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-auto object-contain rounded-xl"
                        />
                      </div>
                    ) : (
                      <div className="p-6 pb-0">
                        <div className="w-full h-64 bg-gradient-to-br from-pink-soft to-blue-soft rounded-xl flex items-center justify-center">
                          <div className="text-center p-6">
                            <div className="w-20 h-20 bg-gradient-to-br from-pink-bright to-blue-deep rounded-full mx-auto mb-4 flex items-center justify-center">
                              <Users className="w-10 h-10 text-white" />
                            </div>
                            <p className="text-lg font-semibold text-muted-foreground">
                              {member.name}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                    <CardContent className="pt-6 pb-8">
                      <h3 className="text-xl font-bold bg-gradient-to-r from-pink-bright to-pink-deep bg-clip-text text-transparent mb-3">
                        {member.name}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {member.role}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </section>

        {/* CAREGIVERS SECTION */}
        <section className="mb-24">
          <ScrollAnimation className="text-center mb-12">
            <h2 className="text-3xl font-bold ">
              Our Caregivers – <span className="bg-gradient-to-r from-pink-bright to-pink-deep bg-clip-text text-transparent">The Heart of Our Early Years Environment</span>
            </h2>
            <div className="text-muted-foreground mt-6 max-w-4xl mx-auto text-lg leading-relaxed space-y-4 text-left">
              <p>
                At our preschool, our caregivers are an essential and valued part of the early childhood program. They are not support staff alone — they are well-trained early years caregivers who work closely alongside our educators and contribute meaningfully to each child’s daily learning and wellbeing.
              </p>
              <p>
                We invest dedicated training and guidance to equip our caregivers with early childhood understanding, child safety awareness, emotional support skills, and responsive care practices. Their role goes beyond supervision — they nurture, observe, comfort, and build strong, trusting bonds with every child.
              </p>
              <p>
                Our caregivers are known for their compassion, patience, and motherly warmth. They are often the first to comfort a child, reassure a concerned parent, and notice small changes in a child’s health or behavior. With genuine love and attentiveness, they support children through emotional moments, health needs, and adjustment phases, helping each child feel secure and cared for.
              </p>
              <p>
                Children naturally connect with them, and this special bond creates a safe and loving environment that supports healthy development. Their presence brings emotional stability, continuity of care, and a sense of family within the school.
              </p>
              <p>
                We proudly consider our caregivers as pillars of our preschool community. Their dedication, empathy, and tireless effort play a vital role in helping every child grow with confidence, comfort, and joy.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {caregivers.map((member, index) => (
              <ScrollAnimation key={index} delay={index * 0.1}>
                {/* Consistent pink-to-blue border like teachers */}
                <div className="bg-gradient-to-br from-pink-bright to-blue-deep p-[2px] rounded-2xl shadow-sm">
                  <Card className="rounded-2xl bg-background h-full hover:shadow-lg transition-all duration-300 border-none">
                    {member.image ? (
                      <div className="p-6 pb-0">
                        <div className="bg-gradient-to-br from-pink-bright to-blue-deep p-[3px] rounded-xl">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-auto object-contain rounded-lg bg-white"
                          />
                        </div>
                      </div>
                    ) : (
                      <div className="p-6 pb-0">
                        <div className="w-full h-64 bg-[#F5EEDC] rounded-xl flex items-center justify-center">
                          <div className="text-center p-6">
                            <div className="w-20 h-20 bg-gradient-to-br from-pink-bright to-blue-deep rounded-full mx-auto mb-4 flex items-center justify-center shadow-md">
                              <Heart className="w-10 h-10 text-white" />
                            </div>
                            <p className="text-lg font-semibold text-[#8B7355]">
                              {member.name}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                    <CardContent className="pt-6 pb-8">
                      <h3 className="text-xl font-bold bg-gradient-to-r from-pink-bright to-pink-deep bg-clip-text text-transparent mb-3">
                        {member.name}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {member.role}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </section>

        {/* School Head Section */}
        <ScrollAnimation className="mt-24">
          <div className="max-w-6xl mx-auto">
            <Card className="shadow-card">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">

                  {/* Image – LEFT */}
                  <div className="flex justify-start">
                    <div className="bg-gradient-to-br from-pink-bright to-blue-deep p-[3px] rounded-2xl">
                      <img
                        src={schoolHead}
                        alt="School Head - EuroWiskids"
                        className="w-64 h-auto rounded-2xl object-cover bg-white"
                      />
                    </div>
                  </div>

                  {/* Text – RIGHT */}
                  <div className="md:col-span-2 text-left space-y-4">
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-bright to-pink-deep bg-clip-text text-transparent">
                      School Head
                    </h3>

                    <p className="text-lg font-semibold">
                      EURO WISKIDS Preschool & Early Years Program
                    </p>

                    <p className="text-muted-foreground">
                      Kelambakkam, Chennai
                    </p>

                    <div className="pt-4 space-y-1">
                      <p className="font-medium">
                        Child–Parent Counsellor
                      </p>
                      <p className="font-medium">
                        Early Childhood Programmer
                      </p>
                    </div>
                  </div>

                </div>
              </CardContent>
            </Card>
          </div>
        </ScrollAnimation>

      </div>
    </div>
  );

};

export default About;
