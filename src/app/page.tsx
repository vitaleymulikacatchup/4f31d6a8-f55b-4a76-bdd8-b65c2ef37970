"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroOverlay from '@/components/sections/hero/HeroOverlay';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Coffee, Star, MessageCircle, TrendingUp, Users, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

const assetMap = [
  {
    id: "hero-background",
    url: "https://images.pexels.com/photos/14134083/pexels-photo-14134083.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "Modern premium coffee shop interior"
  },
  {
    id: "house-blend",
    url: "https://images.pexels.com/photos/302902/pexels-photo-302902.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "Premium espresso coffee"
  },
  {
    id: "cold-brew",
    url: "https://images.pexels.com/photos/7282737/pexels-photo-7282737.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "Cold brew coffee"
  },
  {
    id: "specialty-blend",
    url: "https://images.pexels.com/photos/669161/pexels-photo-669161.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "Specialty coffee blend"
  },
  {
    id: "sarah-portrait",
    url: "https://images.pexels.com/photos/3801426/pexels-photo-3801426.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "Sarah Johnson portrait"
  },
  {
    id: "michael-portrait",
    url: "https://images.pexels.com/photos/15444413/pexels-photo-15444413.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "Michael Chen portrait"
  },
  {
    id: "emma-portrait",
    url: "https://images.pexels.com/photos/3801426/pexels-photo-3801426.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "Emma Wilson portrait"
  },
  {
    id: "david-portrait",
    url: "https://images.pexels.com/photos/13013733/pexels-photo-13013733.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "David Rodriguez portrait"
  },
  {
    id: "alex-portrait",
    url: "https://images.pexels.com/photos/15444413/pexels-photo-15444413.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "Alex Rivera portrait"
  },
  {
    id: "maria-portrait",
    url: "https://images.pexels.com/photos/4354193/pexels-photo-4354193.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "Maria Santos portrait"
  },
  {
    id: "coffee-beans-bg",
    url: "https://images.pexels.com/photos/1844687/pexels-photo-1844687.png?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "Premium coffee beans background"
  }
];

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
      contentWidth="large"
      sizing="medium"
      background="floatingGradient"
      cardStyle="glass-elevated"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="solid"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            { name: "About", id: "about" },
            { name: "Coffee", id: "products" },
            { name: "Stories", id: "testimonials" },
            { name: "Visit", id: "contact" },
            { name: "Menu", id: "menu" }
          ]}
          brandName="Onana Coffee"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroOverlay
          title="Premium Coffee Experience"
          description="Discover the finest artisanal coffee crafted with passion, served in a warm atmosphere where every cup tells a story of quality and tradition."
          tag="Artisanal Coffee"
          tagIcon={Coffee}
          buttons={[
            { text: "Explore Menu", href: "products" },
            { text: "Visit Us", href: "contact" }
          ]}
          imageSrc={assetMap.find(asset => asset.id === "hero-background")?.url || ""}
          imageAlt={assetMap.find(asset => asset.id === "hero-background")?.alt || "Modern premium coffee shop interior"}
          textPosition="center"
          showBlur={true}
          showDimOverlay={true}
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="Our Story"
          description={[
            "Founded with a passion for exceptional coffee, Onana Coffee Shop represents the perfect blend of traditional brewing methods and modern innovation.",
            "Every bean is carefully selected from sustainable farms, roasted to perfection, and crafted into memorable experiences that bring people together."
          ]}
          buttons={[
            { text: "Learn More", href: "about" }
          ]}
          showBorder={true}
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardOne
          title="Signature Coffee Selection"
          description="Discover our carefully curated collection of premium coffee blends, each with its own unique character and story."
          tag="Featured"
          tagIcon={Star}
          products={[
            {
              id: "1",
              name: "House Blend Espresso",
              price: "$4.50",
              imageSrc: assetMap.find(asset => asset.id === "house-blend")?.url || "",
              imageAlt: assetMap.find(asset => asset.id === "house-blend")?.alt || "Premium espresso coffee"
            },
            {
              id: "2",
              name: "Cold Brew Special",
              price: "$5.25",
              imageSrc: assetMap.find(asset => asset.id === "cold-brew")?.url || "",
              imageAlt: assetMap.find(asset => asset.id === "cold-brew")?.alt || "Cold brew coffee"
            },
            {
              id: "3",
              name: "Artisan Specialty Blend",
              price: "$6.00",
              imageSrc: assetMap.find(asset => asset.id === "specialty-blend")?.url || "",
              imageAlt: assetMap.find(asset => asset.id === "specialty-blend")?.alt || "Specialty coffee blend"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Our Customers Say"
          description="Real experiences from coffee lovers who have made Onana Coffee their daily ritual."
          tag="Reviews"
          tagIcon={MessageCircle}
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "Marketing Director",
              company: "Creative Studio",
              rating: 5,
              imageSrc: assetMap.find(asset => asset.id === "sarah-portrait")?.url || "",
              imageAlt: assetMap.find(asset => asset.id === "sarah-portrait")?.alt || "Sarah Johnson portrait"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Business Owner",
              company: "Tech Startup",
              rating: 5,
              imageSrc: assetMap.find(asset => asset.id === "michael-portrait")?.url || "",
              imageAlt: assetMap.find(asset => asset.id === "michael-portrait")?.alt || "Michael Chen portrait"
            },
            {
              id: "3",
              name: "Emma Wilson",
              role: "Graphic Designer",
              company: "Design Agency",
              rating: 5,
              imageSrc: assetMap.find(asset => asset.id === "emma-portrait")?.url || "",
              imageAlt: assetMap.find(asset => asset.id === "emma-portrait")?.alt || "Emma Wilson portrait"
            },
            {
              id: "4",
              name: "David Rodriguez",
              role: "Coffee Enthusiast",
              company: "Local Community",
              rating: 5,
              imageSrc: assetMap.find(asset => asset.id === "david-portrait")?.url || "",
              imageAlt: assetMap.find(asset => asset.id === "david-portrait")?.alt || "David Rodriguez portrait"
            }
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardTwo
          title="Our Impact"
          description="Numbers that tell the story of our commitment to quality and community."
          tag="Statistics"
          tagIcon={TrendingUp}
          metrics={[
            {
              id: "1",
              value: "10K+",
              description: "Happy Customers Served"
            },
            {
              id: "2",
              value: "50+",
              description: "Premium Coffee Blends"
            },
            {
              id: "3",
              value: "5",
              description: "Years of Excellence"
            },
            {
              id: "4",
              value: "98%",
              description: "Customer Satisfaction"
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardTwo
          title="Meet Our Baristas"
          description="The talented coffee artisans who craft every perfect cup with skill and passion."
          tag="Our Team"
          tagIcon={Users}
          members={[
            {
              id: "1",
              name: "Alex Rivera",
              role: "Head Barista",
              description: "Coffee expert with 8 years of experience in specialty brewing techniques and latte art mastery.",
              imageSrc: assetMap.find(asset => asset.id === "alex-portrait")?.url || "",
              imageAlt: assetMap.find(asset => asset.id === "alex-portrait")?.alt || "Alex Rivera portrait",
              socialLinks: [
                { icon: Instagram, url: "https://instagram.com/alexrivera" },
                { icon: Coffee, url: "https://linkedin.com/in/alexrivera" }
              ]
            },
            {
              id: "2",
              name: "Maria Santos",
              role: "Coffee Roaster",
              description: "Passionate roaster specializing in single-origin beans and custom blend development for unique flavor profiles.",
              imageSrc: assetMap.find(asset => asset.id === "maria-portrait")?.url || "",
              imageAlt: assetMap.find(asset => asset.id === "maria-portrait")?.alt || "Maria Santos portrait",
              socialLinks: [
                { icon: Instagram, url: "https://instagram.com/mariasantos" },
                { icon: Twitter, url: "https://twitter.com/mariasantos" }
              ]
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Visit Us"
          title="Experience Onana Coffee"
          description="Join our community of coffee lovers. Subscribe to our newsletter for updates on new blends, events, and exclusive offers."
          tagIcon={MapPin}
          inputPlaceholder="Enter your email"
          buttonText="Subscribe"
          termsText="By subscribing, you agree to receive updates about our coffee, events, and special offers. Unsubscribe anytime."
          imageSrc={assetMap.find(asset => asset.id === "coffee-beans-bg")?.url || ""}
          imageAlt={assetMap.find(asset => asset.id === "coffee-beans-bg")?.alt || "Premium coffee beans background"}
          mediaPosition="right"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="Onana Coffee"
          columns={[
            {
              title: "Coffee",
              items: [
                { label: "Our Blends", href: "products" },
                { label: "Brewing Guide", href: "brewing" },
                { label: "Coffee Origins", href: "origins" }
              ]
            },
            {
              title: "Visit",
              items: [
                { label: "Location", href: "location" },
                { label: "Hours", href: "hours" },
                { label: "Events", href: "events" }
              ]
            },
            {
              title: "About",
              items: [
                { label: "Our Story", href: "about" },
                { label: "Sustainability", href: "sustainability" },
                { label: "Careers", href: "careers" }
              ]
            },
            {
              title: "Support",
              items: [
                { label: "Contact", href: "contact" },
                { label: "FAQ", href: "faq" },
                { label: "Wholesale", href: "wholesale" }
              ]
            }
          ]}
          socialLinks={[
            {
              icon: Instagram,
              href: "https://instagram.com/onanacoffee",
              ariaLabel: "Follow us on Instagram"
            },
            {
              icon: Facebook,
              href: "https://facebook.com/onanacoffee",
              ariaLabel: "Follow us on Facebook"
            },
            {
              icon: Twitter,
              href: "https://twitter.com/onanacoffee",
              ariaLabel: "Follow us on Twitter"
            }
          ]}
          copyrightText="© 2025 Onana Coffee Shop. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}