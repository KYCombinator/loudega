
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="content-section bg-loudega-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title reveal-on-scroll">Get In Touch</h2>
          <p className="section-subtitle reveal-on-scroll">
            Interested in starting a community bodega or learning more about the program? Contact us today.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-lg border-0 reveal-on-scroll">
            <CardContent className="p-8">
              <h3 className="text-2xl font-medium mb-6">Send Us a Message</h3>
              <form className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Your Name
                    </label>
                    <Input 
                      id="name" 
                      placeholder="John Doe" 
                      className="focus:ring-loudega-accent focus:border-loudega-accent"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email Address
                    </label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="johndoe@example.com" 
                      className="focus:ring-loudega-accent focus:border-loudega-accent"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input 
                    id="subject" 
                    placeholder="How can we help you?" 
                    className="focus:ring-loudega-accent focus:border-loudega-accent"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your interest in the program..." 
                    className="min-h-[150px] focus:ring-loudega-accent focus:border-loudega-accent" 
                  />
                </div>
                
                <Button className="bg-loudega-accent hover:bg-loudega-accent/90 w-full">
                  <Send className="mr-2 h-4 w-4" /> Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
          
          {/* Contact Information */}
          <div className="space-y-8 reveal-on-scroll">
            <div>
              <h3 className="text-2xl font-medium mb-6">Contact Information</h3>
              <p className="text-loudega-700 mb-8">
                Have questions or want to learn more about our program? Reach out to us directly or fill out the contact form.
              </p>
            </div>
            
            <div className="space-y-5">
              <div className="flex items-start">
                <div className="mr-4 p-3 bg-loudega-accent/10 rounded-full">
                  <MapPin className="text-loudega-accent h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Address</h4>
                  <p className="text-loudega-700">Louisville, KY 40202</p>
                </div>
              </div>
              
            </div>
            
            <div className="pt-8">
              <h3 className="text-xl font-medium mb-4">Ready to Apply?</h3>
              <p className="text-loudega-700 mb-6">
                If you're ready to take the first step toward opening a community bodega, apply to our program today.
              </p>
              <Button 
                className="bg-loudega-accent hover:bg-loudega-accent/90 px-8 py-6 text-lg"
                onClick={() => window.open('https://kycombinator.typeform.com/loudega', '_blank')}
              >
                Apply to the Program
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
