import React from 'react';
import Image from 'next/image';
import { Calendar, Tag, ArrowRight, Star } from 'lucide-react';

// Types and Interfaces for Component Props
interface ImpactStory {
  date: string;
  category: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

interface Testimonial {
  rating: number;
  quote: string;
  authorName: string;
  authorRole: string;
  avatar: string;
}

// Section 1 Data: Impact Stories
const impactStories: ImpactStory[] = [
  {
    date: "May 15, 2026",
    category: "Health",
    title: "Blood Letting Drive 2026",
    description: "Our annual blood donation drive helped save over 200 lives this year, partnering with local hospitals.",
    image: "/community1.jpg",
    link: "#",
  },
  {
    date: "April 22, 2026",
    category: "Environment",
    title: "Going Green Partnership",
    description: "Planted 5,000 trees in partnership with local communities to combat climate change and restore forests.",
    image: "/community2.jpg",
    link: "#",
  },
  {
    date: "March 10, 2026",
    category: "Community",
    title: "Uncle John's Family Partnership",
    description: "Supporting local families with education scholarships and livelihood programs in underserved communities.",
    image: "/community3.jpg",
    link: "#",
  },
];

// Section 2 Data: Testimonials
const testimonials: Testimonial[] = [
  {
    rating: 5,
    quote: "PK Holdings has been an exceptional partner for our business. Their logistics solutions are reliable, efficient, and truly world-class. The team goes above and beyond every time.",
    authorName: "Jennifer Lim",
    authorRole: "CEO, Tech Innovations Inc.",
    avatar: "/avater1.jpg",
  },
  {
    rating: 5,
    quote: "Our stay at The Apartments at El Nido was absolutely perfect. From booking to check-out, everything was seamless. The personal touch and attention to detail made all the difference.",
    authorName: "Michael Torres",
    authorRole: "Travel Blogger",
    avatar: "/avater2.jpg",
  },
  {
    rating: 5,
    quote: "Working with PK Holdings feels like working with family. They understand our needs, deliver on promises, and truly care about our success. A partnership we can count on.",
    authorName: "Sofia Ramirez",
    authorRole: "Director, Global Exports Ltd.",
    avatar: "/avater3.jpg",
  },
];

export default function CommunityAndPartners() {
  return (
    <div className="w-full bg-[#FAF8F5] font-sans antialiased">
      
      {/* ==========================================
          SECTION 1: OUR COMMUNITY IMPACT
         ========================================== */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-[#e06141] text-xs font-bold tracking-widest uppercase block mb-3">
            Giving Back
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#052e1e] tracking-tight">
            Our Community Impact
          </h2>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {impactStories.map((story, index) => (
            <article 
              key={index} 
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col border border-gray-100"
            >
              {/* Image Container */}
              <div className="relative w-full aspect-[16/10] bg-gray-100">
                <Image
                  src={story.image}
                  alt={story.title}
                  fill
                  sizes="(max-w-768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>

              {/* Card Content */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Meta Row */}
                <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{story.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Tag className="w-3.5 h-3.5" />
                    <span>{story.category}</span>
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-[#052e1e] mb-3 line-clamp-2">
                  {story.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow line-clamp-4">
                  {story.description}
                </p>

                {/* Inline Interaction Link */}
                <a 
                  href={story.link}
                  className="inline-flex items-center gap-1.5 text-[#e06141] hover:text-[#c84e30] text-sm font-semibold transition-colors duration-200 mt-auto group"
                >
                  <span>Read more</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA Button */}
        <div className="text-center">
          <button className="inline-flex items-center justify-center px-6 py-2.5 border-2 border-[#052e1e] text-[#052e1e] font-semibold text-sm rounded-lg hover:bg-[#052e1e] hover:text-white transition-colors duration-200">
            View All CSR Stories
          </button>
        </div>
      </section>

      {/* ==========================================
          SECTION 2: WHAT OUR PARTNERS SAY
         ========================================== */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-gray-200/40">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#052e1e] tracking-tight">
            What Our Partners Say
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 shadow-md flex flex-col justify-between border border-gray-100"
            >
              <div>
                {/* Star Ratings Row */}
                <div className="flex items-center gap-1 mb-5">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#e06141] stroke-[#e06141]" />
                  ))}
                </div>

                {/* Main Quote Paragraph */}
                <p className="text-zinc-600 text-sm italic leading-relaxed mb-8">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
              </div>

              {/* Author Section */}
              <div className="flex items-center gap-4 mt-auto pt-4 border-t border-gray-50">
                <div className="relative w-11 h-11 rounded-full overflow-hidden bg-gray-100 flex-shrink-0">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.authorName}
                    fill
                    sizes="44px"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-[#052e1e]">
                    {testimonial.authorName}
                  </span>
                  <span className="text-xs text-gray-400 font-medium">
                    {testimonial.authorRole}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

    </div>
  );
}