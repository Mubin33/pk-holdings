import React from 'react';
import Image from 'next/image';
import { Mail } from 'lucide-react';

// Interfaces for our static data types
interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

interface TeamMember {
  name: string;
  role: string;
  image: string;
  linkedinUrl: string;
  emailUrl: string;
}

// Section 1: Data Definitions
const processSteps: ProcessStep[] = [
  {
    step: "STEP 01",
    title: "Onboarding",
    description: "We take time to understand your needs, goals, and vision to create a tailored partnership approach.",
  },
  {
    step: "STEP 02",
    title: "Planning",
    description: "Our team develops a strategic roadmap with clear milestones, timelines, and measurable outcomes.",
  },
  {
    step: "STEP 03",
    title: "Implementation",
    description: "We execute with precision, maintaining open communication and adapting to ensure success.",
  },
];

// Section 2: Data Definitions
const teamMembers: TeamMember[] = [
  {
    name: "Maria Santos",
    role: "Chief Executive Officer",
    image: "/people-1.jpg",
    linkedinUrl: "#",
    emailUrl: "mailto:maria@example.com",
  },
  {
    name: "Carlos Reyes",
    role: "Chief Operating Officer",
    image: "/people-2.jpg",
    linkedinUrl: "#",
    emailUrl: "mailto:carlos@example.com",
  },
  {
    name: "Isabel Cruz",
    role: "Chief Financial Officer",
    image: "/people-3.jpg",
    linkedinUrl: "#",
    emailUrl: "mailto:isabel@example.com",
  },
  {
    name: "Rafael Garcia",
    role: "Chief Technology Officer",
    image: "/people-4.jpg",
    linkedinUrl: "#",
    emailUrl: "mailto:rafael@example.com",
  },
];

export default function AboutSections() {
  return (
    <div className="w-full font-sans antialiased">
      
      {/* ==========================================
          SECTION 1: WORKING PROCESS (Dark Green)
         ========================================== */}
      <section className="bg-[#052e1e] text-white py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          
          {/* Header */}
          <span className="text-[#10b981] text-xs font-semibold tracking-widest uppercase block mb-3">
            Working Process
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-12 md:mb-16">
            How We Build Lasting Partnerships
          </h2>

          {/* Process Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {processSteps.map((item, index) => (
              <div 
                key={index} 
                className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col items-start transition-all hover:border-white/20"
              >
                {/* Step Badge */}
                <span className="bg-[#0A2419] text-[#10b981] text-xs font-bold px-3 py-1.5 rounded-full mb-6 tracking-wide">
                  {item.step}
                </span>
                
                {/* Content */}
                <h3 className="text-xl font-bold mb-3 tracking-wide">
                  {item.title}
                </h3>
                <p className="text-emerald-100/70 text-sm leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ==========================================
          SECTION 2: OUR LEADERSHIP (Light Cream)
         ========================================== */}
      <section className="bg-[#FAF8F5] text-[#052e1e] py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          
          {/* Header */}
          <span className="text-[#f97316] text-xs font-semibold tracking-widest uppercase block mb-3">
            Our Leadership
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-12 md:mb-16">
            Meet the People Behind PK
          </h2>

          {/* Team Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col overflow-hidden border border-gray-100/50"
              >
                {/* Image Wrapper */}
                <div className="relative w-full aspect-[4/5] bg-gray-100">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-w-700px) 100vw, (max-w-1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 hover:scale-[1.02]"
                    priority={index === 0} // Prioritize above-the-fold image loading
                  />
                </div>

                {/* Info Area */}
                <div className="p-6 flex flex-col items-center flex-grow">
                  <h3 className="text-lg font-bold text-[#052e1e] mb-1">
                    {member.name}
                  </h3>
                  <p className="text-xs text-gray-500 font-medium mb-5">
                    {member.role}
                  </p>

                  {/* Social Icons Row */}
                  <div className="flex items-center gap-3 mt-auto">
                    <a 
                      href={member.linkedinUrl} 
                      aria-label={`${member.name}'s LinkedIn profile`}
                      className="text-gray-400 hover:text-gray-600 transition-colors duration-200 p-1"
                    >
                      {/* <Linkedin className="w-4 h-4 stroke-[1.75]" /> */}
                      <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
  <g clip-path="url(#clip0_339_310)">
    <path d="M12.5156 6.2583C13.7605 6.2583 14.9543 6.7528 15.8345 7.63303C16.7147 8.51325 17.2092 9.70709 17.2092 10.9519V16.4278H14.0802V10.9519C14.0802 10.537 13.9153 10.139 13.6219 9.84562C13.3285 9.55221 12.9306 9.38737 12.5156 9.38737C12.1007 9.38737 11.7027 9.55221 11.4093 9.84562C11.1159 10.139 10.9511 10.537 10.9511 10.9519V16.4278H7.82202V10.9519C7.82202 9.70709 8.31653 8.51325 9.19675 7.63303C10.077 6.7528 11.2708 6.2583 12.5156 6.2583Z" stroke="#99A1AF" stroke-width="1.56454" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M4.69353 7.04053H1.56445V16.4278H4.69353V7.04053Z" stroke="#99A1AF" stroke-width="1.56454" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M3.12899 4.69353C3.99306 4.69353 4.69353 3.99306 4.69353 3.12899C4.69353 2.26492 3.99306 1.56445 3.12899 1.56445C2.26492 1.56445 1.56445 2.26492 1.56445 3.12899C1.56445 3.99306 2.26492 4.69353 3.12899 4.69353Z" stroke="#99A1AF" stroke-width="1.56454" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
  <defs>
    <clipPath id="clip0_339_310">
      <rect width="18.7744" height="18.7744" fill="white"/>
    </clipPath>
  </defs>
</svg>
                    </a>
                    <a 
                      href={member.emailUrl} 
                      aria-label={`Email ${member.name}`}
                      className="text-gray-400 hover:text-gray-600 transition-colors duration-200 p-1"
                    >
                      <Mail className="w-4 h-4 stroke-[1.75]" />
                    </a>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}