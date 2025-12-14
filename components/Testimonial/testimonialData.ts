import image1 from "@/public/images/user/user-01.png";
import image2 from "@/public/images/user/user-02.png";
import { Testimonial } from "@/types/testimonial";

export const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "David Smith",
    designation: "Founder @TechStartup",
    image: image1,
    content:
      "Highly recommended! The team delivered exactly what we needed on time and exceeded our expectations.",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    designation: "CTO @InnovateCo",
    image: image2,
    content:
      "Professional, reliable, and results-driven. They understood our vision and brought it to life beautifully. A pleasure to work with.",
  },
  {
    id: 3,
    name: "Michael Chen",
    designation: "Director @DigitalAgency",
    image: image1,
    content:
      "The quality of work speaks for itself. They transformed our project with creativity and expertise. Couldn't be happier with the results.",
  },
  {
    id: 4,
    name: "Emily Rodriguez",
    designation: "Manager @CreativeStudio",
    image: image2,
    content:
      "Responsive team that cares about client success. Smooth and stress-free. Excellent communication throughout.",
  },
];
