
import React from 'react';

const ProcessStep = ({ 
  number, 
  title, 
  description, 
  isLast = false 
}: { 
  number: number; 
  title: string; 
  description: string; 
  isLast?: boolean;
}) => {
  return (
    <div className="flex relative reveal-on-scroll">
      {/* Step Number */}
      <div className="flex-shrink-0 mr-6">
        <div className="w-12 h-12 bg-loudega-accent text-white rounded-full flex items-center justify-center font-medium text-xl z-10 relative">
          {number}
        </div>
        {!isLast && (
          <div className="absolute top-12 bottom-0 left-6 transform -translate-x-1/2 w-1 bg-loudega-200"></div>
        )}
      </div>
      
      {/* Step Content */}
      <div className="pb-12">
        <h3 className="text-xl font-medium mb-2">{title}</h3>
        <p className="text-loudega-700">{description}</p>
      </div>
    </div>
  );
};

const Process = () => {
  const steps = [
    {
      title: "Application & Selection",
      description: "Interested community members and organizations apply to the Loudega program. We select participants based on community need, commitment, and capacity."
    },
    {
      title: "Training & Development",
      description: "Selected participants receive comprehensive business training, covering retail operations, inventory management, financial planning, and community engagement."
    },
    {
      title: "Location & Space Planning",
      description: "We work together to identify and secure the perfect location for your bodega, then design a space that meets the specific needs of your neighborhood."
    },
    {
      title: "Funding & Resources",
      description: "Participants receive financial support, equipment, and inventory to launch their bodega, along with connections to suppliers and community partners."
    },
    {
      title: "Grand Opening",
      description: "Celebrate the launch of your community bodega with promotional support, community events, and ongoing marketing assistance."
    },
    {
      title: "Ongoing Support",
      description: "Benefit from continued training, business coaching, and participation in the growing Loudega network of community-owned bodegas across Louisville."
    }
  ];

  return (
    <section id="process" className="content-section bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title reveal-on-scroll">How It Works</h2>
          <p className="section-subtitle reveal-on-scroll">
            The journey from application to opening your community bodega
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {steps.map((step, index) => (
            <ProcessStep
              key={index}
              number={index + 1}
              title={step.title}
              description={step.description}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
