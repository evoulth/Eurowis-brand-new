import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ScrollAnimation from "@/components/ScrollAnimation";
import classroom1 from "@/assets/classrooms/class-room1.jpg";
import classroom2 from "@/assets/classrooms/class-room2.jpg";
import classroom3 from "@/assets/classrooms/class-room3.jpg";
import classroom4 from "@/assets/classrooms/class-room4.jpg";

const ClassroomGallery = () => {
    const images = [classroom1, classroom2, classroom3, classroom4];

    return (
        <div className="min-h-screen py-20">
            <div className="container mx-auto px-4">
                <ScrollAnimation className="mb-8">
                    <Link to="/albums" className="inline-block">
                        <Button variant="ghost" className="gap-2 pl-0 hover:pl-2 transition-all">
                            <ArrowLeft className="w-4 h-4" />
                            Back to Albums
                        </Button>
                    </Link>
                </ScrollAnimation>

                <ScrollAnimation className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        Our <span className="bg-gradient-to-r from-pink-bright to-pink-deep bg-clip-text text-transparent">Classrooms</span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-3xl">
                        A peek into our vibrant and engaging learning environments where creativity blooms.
                    </p>
                </ScrollAnimation>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {images.map((img, index) => (
                        <ScrollAnimation key={index} delay={index * 0.1}>
                            <motion.div
                                className="group relative overflow-hidden rounded-2xl shadow-lg aspect-video"
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                            >
                                <img
                                    src={img}
                                    alt={`Classroom view ${index + 1}`}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                            </motion.div>
                        </ScrollAnimation>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ClassroomGallery;
