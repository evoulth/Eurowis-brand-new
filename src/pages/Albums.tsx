import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Image as ImageIcon } from "lucide-react";
import ScrollAnimation from "@/components/ScrollAnimation";
import classroomImg from "@/assets/classrooms/class-room1.jpg";

import activityImg from "@/assets/activities/Animal-Safari.jpg";
import enactPlayImg from "@/assets/enact-play/enact-play2.jpeg";

const Albums = () => {
  const navigate = useNavigate();

  const albums = [
    {
      id: 1,
      title: "Our Classrooms",
      date: "2024",
      count: 4,
      thumbnail: classroomImg,
      description: "A peek into our vibrant and engaging learning environments where creativity blooms.",
      link: "/albums/classrooms"
    },
    {
      id: 2,
      title: "School Activities",
      date: "2024",
      count: 9,
      thumbnail: activityImg,
      description: "Capturing the joy of discovery and learning through our diverse range of school activities.",
      link: "/albums/activities"
    },
    {
      id: 3,
      title: "Enact Play",
      date: "2024",
      count: 12,
      thumbnail: enactPlayImg,
      description: "A beautiful display of our children engaging in imaginative and creative play sessions.",
      link: "/albums/enact-play"
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <ScrollAnimation className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            School <span className="bg-gradient-to-r from-pink-bright to-pink-deep bg-clip-text text-transparent">Albums</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Capturing precious moments and memories from our school events, celebrations, and daily activities
          </p>
        </ScrollAnimation>

        {/* Albums Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {albums.map((album, index) => (
            <ScrollAnimation key={album.id} delay={index * 0.1}>
              <Card className="group shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-2 overflow-hidden h-full">
                {/* Album Thumbnail */}
                <div className="relative overflow-hidden cursor-pointer" onClick={() => navigate(album.link)}>
                  <img
                    src={album.thumbnail}
                    alt={album.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button size="sm" className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30">
                      <ImageIcon className="w-4 h-4 mr-2" />
                      View Photos
                    </Button>
                  </div>

                  {/* Type Badge */}
                  <div className="absolute top-3 right-3">
                    <Badge variant="secondary" className="bg-white/90 text-foreground">
                      <ImageIcon className="w-3 h-3 mr-1" />
                      {album.count} Photos
                    </Badge>
                  </div>
                </div>

                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg group-hover:bg-gradient-to-r from-pink-bright to-pink-deep bg-clip-text text-transparent transition-colors cursor-pointer" onClick={() => navigate(album.link)}>
                      {album.title}
                    </CardTitle>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {album.description}
                  </p>

                  <Button size="sm" className="w-full" onClick={() => navigate(album.link)}>
                    View Album
                  </Button>
                </CardContent>
              </Card>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Albums;
