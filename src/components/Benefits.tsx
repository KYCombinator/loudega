
import React from 'react';
import { Heart, Home, Users, ShoppingBag, TrendingUp, Coffee } from 'lucide-react';

const BenefitCard = ({ icon: Icon, title, description }: { 
  icon: React.ElementType; 
  title: string; 
  description: string;
}) => {
  return (
    <div className="glass-panel p-8 rounded-xl hover-card reveal-on-scroll">
      <div className="w-12 h-12 bg-loudega-accent/10 rounded-lg flex items-center justify-center mb-5">
        <Icon className="text-loudega-accent" size={24} />
      </div>
      <h3 className="text-xl font-medium mb-3">{title}</h3>
      <p className="text-loudega-700">{description}</p>
    </div>
  );
};

const Benefits = () => {
  const benefits = [
    {
      icon: ShoppingBag,
      title: "Food Accessibility",
      description: "Provide easy access to fresh food and everyday necessities within walking distance of homes."
    },
    {
      icon: Users,
      title: "Job Creation",
      description: "Create sustainable employment opportunities for local residents within their own neighborhoods."
    },
    {
      icon: Home,
      title: "Stronger Communities",
      description: "Build neighborhood cohesion through community-owned spaces that serve as local gathering points."
    },
    {
      icon: Heart,
      title: "Improved Health",
      description: "Promote healthier eating habits by making nutritious food options readily available."
    },
    {
      icon: TrendingUp,
      title: "Economic Development",
      description: "Circulate dollars within the community and build neighborhood-based wealth."
    },
    {
      icon: Coffee,
      title: "Social Connection",
      description: "Foster relationships between neighbors and strengthen community bonds."
    }
  ];

  return (
    <section id="benefits" className="content-section bg-loudega-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title reveal-on-scroll">Community Benefits</h2>
          <p className="section-subtitle reveal-on-scroll">
            Discover how Loudega's community bodegas create positive change in Louisville neighborhoods
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
