import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ScrollAnimation from "@/components/ScrollAnimation";

// Import Activity Images
import adjectives from "@/assets/activities/Adjectives.jpg";
import animalSafari from "@/assets/activities/Animal-Safari.jpg";
import sparrows from "@/assets/activities/Bringing-back-the-sparrows-into-our-place.jpg";
import activity4 from "@/assets/activities/Class-Activity-4.jpg";
import activities1 from "@/assets/activities/class-activies1.jpg..jpeg";
import activities2 from "@/assets/activities/class-activies2.jpg..jpeg";
import activities3 from "@/assets/activities/class-activies3.jpg";
import activities4 from "@/assets/activities/class-activies4.jpg";
import activities5 from "@/assets/activities/class-activies5.jpg";

const ActivitiesGallery = () => {
    const images = [
        { src: adjectives, alt: "Learning Adjectives" },
        { src: animalSafari, alt: "Animal Safari Activity" },
        { src: sparrows, alt: "Bringing back the sparrows" },
        { src: activity4, alt: "Class Activity" },
        { src: activities1, alt: "Activity Moment 1" },
        { src: activities2, alt: "Activity Moment 2" },
        { src: activities3, alt: "Activity Moment 3" },
        { src: activities4, alt: "Activity Moment 4" },
        { src: activities5, alt: "Activity Moment 5" },
    ];

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
                        School <span className="bg-gradient-to-r from-pink-bright to-pink-deep bg-clip-text text-transparent">Activities</span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-3xl">
                        Capturing the joy of discovery and learning through our diverse range of school activities.
                    </p>
                </ScrollAnimation>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {images.map((image, index) => (
                        <ScrollAnimation key={index} delay={index * 0.1}>
                            <motion.div
                                className="group relative overflow-hidden rounded-2xl shadow-lg aspect-square"
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                            >
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <p className="text-white text-sm font-medium">{image.alt}</p>
                                </div>
                            </motion.div>
                        </ScrollAnimation>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ActivitiesGallery;
