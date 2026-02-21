import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ScrollAnimation from "@/components/ScrollAnimation";

// Import Enact Play Images
import enactPlay2 from "@/assets/enact-play/enact-play2.jpeg";
import enactPlay3 from "@/assets/enact-play/enact-play3.jpeg";
import enactPlay4 from "@/assets/enact-play/enact-play4.jpeg";
import enactPlay5 from "@/assets/enact-play/enact-play5.jpeg";
import enactPlay6 from "@/assets/enact-play/enact-play6.jpeg";
import enactPlay7 from "@/assets/enact-play/enact-play7.jpeg";
import enactPlay9 from "@/assets/enact-play/enact-play9.jpeg";
import enactPlay10 from "@/assets/enact-play/enact-play10.jpeg";
import enactPlay11 from "@/assets/enact-play/enact-play11.jpeg";
import enactPlay13 from "@/assets/enact-play/enact-play13.jpeg";
import enactPlay21 from "@/assets/enact-play/enact-play21.jpeg";
import enactPlay22 from "@/assets/enact-play/enact-play22.jpeg";

const EnactPlayGallery = () => {
    const images = [
        { src: enactPlay2, alt: "Enact Play Moment 1" },
        { src: enactPlay3, alt: "Enact Play Moment 2" },
        { src: enactPlay4, alt: "Enact Play Moment 3" },
        { src: enactPlay5, alt: "Enact Play Moment 4" },
        { src: enactPlay6, alt: "Enact Play Moment 5" },
        { src: enactPlay7, alt: "Enact Play Moment 6" },
        { src: enactPlay9, alt: "Enact Play Moment 7" },
        { src: enactPlay10, alt: "Enact Play Moment 8" },
        { src: enactPlay11, alt: "Enact Play Moment 9" },
        { src: enactPlay13, alt: "Enact Play Moment 10" },
        { src: enactPlay21, alt: "Enact Play Moment 11" },
        { src: enactPlay22, alt: "Enact Play Moment 12" },
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
                        Enact <span className="bg-gradient-to-r from-pink-bright to-pink-deep bg-clip-text text-transparent">Play</span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-3xl">
                        A beautiful display of our children engaging in imaginative and creative play sessions.
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

export default EnactPlayGallery;
