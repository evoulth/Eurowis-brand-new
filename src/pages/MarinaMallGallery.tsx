import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ScrollAnimation from "@/components/ScrollAnimation";

// Import Marina Mall Activity Images
import marina1 from "@/assets/activities/merinamall-activity1.jpg";
import marina2 from "@/assets/activities/merinamall-activity2.jpg";
import marina3 from "@/assets/activities/merinamall-activity3.jpg";
import marina4 from "@/assets/activities/merinamall-activity4.jpg";
import marina5 from "@/assets/activities/merinamall-activity5.jpg";

// Import Marina Mall Activity Videos
import marinaVideo1 from "@/assets/activities/merina mall-activity-video1.mp4";
import marinaVideo2 from "@/assets/activities/merinamall-activity2.mp4";
import marinaVideo3 from "@/assets/activities/merinamall-activity3.mp4";
import marinaVideo4 from "@/assets/activities/merinamall-activity4.mp4";

const MarinaMallGallery = () => {
    const images = [
        { src: marina1, alt: "Christmas Celebration at Marina Mall 1" },
        { src: marina2, alt: "Christmas Celebration at Marina Mall 2" },
        { src: marina3, alt: "Christmas Celebration at Marina Mall 3" },
        { src: marina4, alt: "Christmas Celebration at Marina Mall 4" },
        { src: marina5, alt: "Christmas Celebration at Marina Mall 5" },
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
                        Christmas Day Celebration on the Chennai{" "}
                        <span className="font-bold bg-gradient-to-r from-pink-bright to-pink-deep bg-clip-text text-transparent">
                            Marina Mall
                        </span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-3xl">
                        Joyful moments from our Christmas Day celebration at the Chennai Marina Mall.
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

                {/* Videos Section */}
                <ScrollAnimation className="mt-16">
                    <h2 className="text-2xl font-bold mb-8 font-bold bg-gradient-to-r from-pink-bright to-pink-deep bg-clip-text text-transparent">
                        Videos
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[marinaVideo1, marinaVideo2, marinaVideo3, marinaVideo4].map((video, index) => (
                            <motion.div
                                key={index}
                                className="rounded-2xl overflow-hidden shadow-lg"
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                            >
                                <video
                                    src={video}
                                    controls
                                    className="w-full h-full object-cover rounded-2xl"
                                />
                            </motion.div>
                        ))}
                    </div>
                </ScrollAnimation>
            </div>
        </div>
    );
};

export default MarinaMallGallery;
