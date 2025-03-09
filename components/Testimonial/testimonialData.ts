import image1 from "@/public/images/user/user-01.png";
import image2 from "@/public/images/user/user-02.png";
import { Testimonial } from "@/types/testimonial";

export const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Sophia Williams",
    designation: "CEO @TechSolutions",
    image: image1,
    content:
      "Intelion has completely transformed our SaaS operations. Their enterprise software solution is intuitive and powerful, helping us scale our business with ease. The seamless integration and personalized support have been invaluable to us.",
  },
  {
    id: 2,
    name: "Liam Johnson",
    designation: "CTO @InnovativeTech",
    image: image2,
    content:
      "The team at Intelion delivered exactly what we needed. Their IT services are top-notch, with robust security and efficiency. The AI-driven solutions they offer are truly cutting-edge, making complex tasks simpler for our team.",
  },
  {
    id: 3,
    name: "Emma Taylor",
    designation: "Co-Founder @EnterpriseX",
    image: image1,
    content:
      "Working with Intelion has been an exceptional experience. Their expertise in enterprise software is unmatched. The level of customization and the attention to detail in the solutions they provide is incredible.",
  },
  {
    id: 4,
    name: "Noah Davis",
    designation: "VP of Engineering @NextGen Solutions",
    image: image2,
    content:
      "Intelion’s SaaS solutions helped us optimize our infrastructure and reduce operational costs significantly. The support and expertise we received during the deployment process were stellar, and we’ve seen immediate benefits in our workflows.",
  },
];
