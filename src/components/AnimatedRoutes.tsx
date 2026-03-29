import React from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Home from "../pages/Home";
import About from "../pages/About";
import VisionMission from "../pages/VisionMission";
import Contact from "../pages/Contact";
import Albums from "../pages/Albums";
import Admission from "../pages/Admission";
import ClassroomGallery from "../pages/ClassroomGallery";
import ActivitiesGallery from "../pages/ActivitiesGallery";
import EnactPlayGallery from "../pages/EnactPlayGallery";
import MarinaMallGallery from "../pages/MarinaMallGallery";
import NotFound from "../pages/NotFound";

const PageWrapper = ({ children }: { children: React.ReactNode }) => (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        style={{ willChange: "opacity" }}
    >
        {children}
    </motion.div>
);

const AnimatedRoutes = () => {
    const location = useLocation();
    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
                <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
                <Route path="/vision-mission" element={<PageWrapper><VisionMission /></PageWrapper>} />
                <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
                <Route path="/albums" element={<PageWrapper><Albums /></PageWrapper>} />
                <Route path="/albums/classrooms" element={<PageWrapper><ClassroomGallery /></PageWrapper>} />
                <Route path="/albums/activities" element={<PageWrapper><ActivitiesGallery /></PageWrapper>} />
                <Route path="/albums/enact-play" element={<PageWrapper><EnactPlayGallery /></PageWrapper>} />
                <Route path="/albums/marina-mall" element={<PageWrapper><MarinaMallGallery /></PageWrapper>} />
                <Route path="/admission" element={<PageWrapper><Admission /></PageWrapper>} />
                <Route path="*" element={<PageWrapper><NotFound /></PageWrapper>} />
            </Routes>
        </AnimatePresence>
    );
}

export default AnimatedRoutes;
