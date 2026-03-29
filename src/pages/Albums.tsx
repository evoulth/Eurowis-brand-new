import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Image as ImageIcon } from "lucide-react";
import ScrollAnimation from "@/components/ScrollAnimation";
import classroomImg from "@/assets/classrooms/class-room1.jpg";

import activityImg from "@/assets/activities/Animal-Safari.jpg";
import enactPlayImg from "@/assets/enact-play/enact-play2.jpeg";
import marinaMallImg from "@/assets/activities/merinamall-activity1.jpg";

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
    },
    {
      id: 4,
      title: "Christmas Day Celebration on the Chennai Marina Mall",
      date: "2024",
      count: 5,
      thumbnail: marinaMallImg,
      description: "Joyful moments from our Christmas Day celebration at the Chennai Marina Mall.",
      link: "/albums/marina-mall"
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
              <div className="group relative rounded-2xl p-[2px] bg-transparent hover:bg-gradient-to-br hover:from-pink-bright hover:to-blue-deep transition-all duration-500">
                <Card className="rounded-2xl overflow-hidden h-full shadow-card group-hover:shadow-hover transition-all duration-500">
                  {/* Album Thumbnail */}
                  <div className="relative overflow-hidden cursor-pointer" onClick={() => navigate(album.link)}>
                    <img
                      src={album.thumbnail}
                      alt={album.title}
                      className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                      <Button size="sm" className="bg-white/20 backdrop-blur-md border border-white/40 text-white hover:bg-white/30 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                        <ImageIcon className="w-4 h-4 mr-2" />
                        View Photos
                      </Button>
                    </div>

                    {/* Type Badge */}
                    <div className="absolute top-3 right-3">
                      <Badge variant="secondary" className="bg-white/90 text-foreground backdrop-blur-sm">
                        <ImageIcon className="w-3 h-3 mr-1" />
                        {album.count} Photos
                      </Badge>
                    </div>
                  </div>

                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-lg cursor-pointer transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-pink-bright group-hover:to-pink-deep group-hover:bg-clip-text group-hover:text-transparent" onClick={() => navigate(album.link)}>
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
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Albums;
