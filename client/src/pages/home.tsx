import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { insertContactSchema, type InsertContact } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Briefcase, 
  ShoppingBag,
  Users, 
  Plane, 
  Map, 
  Ship, 
  Handshake, 
  Globe, 
  Award,
  CheckCircle,
  ChevronDown,
  ExternalLink,
  Wifi,
  Car,
  Shield,
  Building,
  Ticket,
  Smartphone
} from "lucide-react";

// Import cruise line logos
import azamaraLogo from "@assets/AZAMARA_1753415316391.png";
import carnivalLogo from "@assets/CARNIVAL_1753415316398.png";
import crystalLogo from "@assets/CRYSTAL_1753415316398.png";
import cunardLogo from "@assets/CUNARD_1753415316398.png";
import hollandAmericaLogo from "@assets/HOLLAND AMERICA_1753415316399.png";
import norwegianLogo from "@assets/NORWEGIAN_1753415316399.png";
import oceaniaLogo from "@assets/OCEANIA CRUISES_1753415316399.png";
import poAustraliaLogo from "@assets/P&O AUSTRALIA_1753415316399.jpg";
import poUkLogo from "@assets/P&O UK_1753415316399.jpeg";
import princessLogo from "@assets/PRINCESS CRUISES_1753415316399.png";
import regentLogo from "@assets/REGENT CRUISES_1753414915235.png";
import seabournLogo from "@assets/SEABOURN_1753414915235.png";
import silverseaLogo from "@assets/SILVERSEA_1753414915235.png";
import vikingLogo from "@assets/VIKING_1753414915235.png";

// Import professional photos and hero images
import rodneyPhoto from "@assets/RODNEY_1753414915235.png";
import nuchPhoto from "@assets/NUCH_1753415316399.png";
import heroImage1 from "@assets/HERO IMAGE1_1753415316398.jpg";
import heroImage2 from "@assets/HERO IMAGE2_1753415316399.jpg";

export default function Home() {
  const { toast } = useToast();
  const [isVisible, setIsVisible] = useState({});


  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: ""
    }
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. We'll get back to you soon.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Error sending message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    }
  });

  const onSubmit = (data: InsertContact) => {
    contactMutation.mutate(data);
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };



  useEffect(() => {
    document.title = "Global Leaders in Travel, Tours & Logistics - Rodney & Nuch Pattison";
    
    // Add meta description
    const metaDescription = document.createElement("meta");
    metaDescription.name = "description";
    metaDescription.content = "Rodney & Nuch Pattison - Trusted advisors with decades of international experience in cruise logistics, group touring, and travel operations. Supporting the global travel community.";
    document.head.appendChild(metaDescription);

    return () => {
      document.head.removeChild(metaDescription);
    };
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Partners Bar */}
      <div className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 text-white py-3 px-6 border-b border-gold/20">
        <div className="max-w-7xl mx-auto">
          <div className="affiliate-row flex flex-wrap justify-center items-center gap-4 text-sm p-4">
            <div className="flex items-center gap-2">
              <Handshake className="w-4 h-4 text-gold" />
              <span className="font-semibold text-gold">Our Trusted Partners:</span>
            </div>
            <a href="https://trip.tpk.mx/qhlnnQh8" 
               target="_blank" rel="noopener noreferrer" 
               className="flex items-center gap-1 hover:text-gold transition-colors duration-200 hover:scale-105 transform">
              <Building className="w-3 h-3" />
              Trip.com
              <ExternalLink className="w-2 h-2 opacity-50" />
            </a>
            <a href="https://tpk.mx/NGGoA86T" 
               target="_blank" rel="noopener noreferrer" 
               className="flex items-center gap-1 hover:text-gold transition-colors duration-200 hover:scale-105 transform">
              <Car className="w-3 h-3" />
              Welcome Pickups
              <ExternalLink className="w-2 h-2 opacity-50" />
            </a>
            <a href="https://yesim.tpk.mx/RyZzDsxA" 
               target="_blank" rel="noopener noreferrer" 
               className="flex items-center gap-1 hover:text-gold transition-colors duration-200 hover:scale-105 transform">
              <Smartphone className="w-3 h-3" />
              Yesim
              <ExternalLink className="w-2 h-2 opacity-50" />
            </a>
            <a href="https://ektatraveling.tpk.mx/IUGS6Ovk" 
               target="_blank" rel="noopener noreferrer" 
               className="flex items-center gap-1 hover:text-gold transition-colors duration-200 hover:scale-105 transform">
              <Globe className="w-3 h-3" />
              EKTA
              <ExternalLink className="w-2 h-2 opacity-50" />
            </a>
            <a href="https://kiwitaxi.tpk.mx/NGL3ovB3" 
               target="_blank" rel="noopener noreferrer" 
               className="flex items-center gap-1 hover:text-gold transition-colors duration-200 hover:scale-105 transform">
              <Car className="w-3 h-3" />
              Kiwitaxi
              <ExternalLink className="w-2 h-2 opacity-50" />
            </a>
            <a href="https://airalo.tpk.mx/M99krJZy" 
               target="_blank" rel="noopener noreferrer" 
               className="flex items-center gap-1 hover:text-gold transition-colors duration-200 hover:scale-105 transform">
              <Wifi className="w-3 h-3" />
              Airalo
              <ExternalLink className="w-2 h-2 opacity-50" />
            </a>
            <a href="https://getrentacar.tpk.mx/I3FuOWfB" 
               target="_blank" rel="noopener noreferrer" 
               className="flex items-center gap-1 hover:text-gold transition-colors duration-200 hover:scale-105 transform">
              <Car className="w-3 h-3" />
              GetRentacar.com
              <ExternalLink className="w-2 h-2 opacity-50" />
            </a>
            <a href="https://get.surfshark.net/aff_c?offer_id=926&aff_id=39802" 
               target="_blank" rel="noopener noreferrer" 
               className="flex items-center gap-1 hover:text-gold transition-colors duration-200 hover:scale-105 transform">
              <Shield className="w-3 h-3" />
              Surfshark VPN
              <ExternalLink className="w-2 h-2 opacity-50" />
            </a>
            <a href="https://get.surfshark.net/aff_c?offer_id=1249&aff_id=39802" 
               target="_blank" rel="noopener noreferrer" 
               className="flex items-center gap-1 hover:text-gold transition-colors duration-200 hover:scale-105 transform">
              <Shield className="w-3 h-3" />
              Surfshark One
              <ExternalLink className="w-2 h-2 opacity-50" />
            </a>
          </div>
        </div>
      </div>
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy/90 via-navy/80 to-soft-blue/70"></div>
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `url(${heroImage1})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        
        <motion.div 
          className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Global Leaders in Travel, Tours & Logistics
          </h1>
          <h2 className="text-xl md:text-2xl font-light mb-8 leading-relaxed max-w-4xl mx-auto">
            Rodney & Nuch Pattison – Trusted advisors with decades of international experience in cruise logistics, group touring, and travel operations.
          </h2>
          <Button 
            onClick={scrollToContact}
            className="bg-gold hover:bg-gold/90 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            size="lg"
          >
            Get in Touch
          </Button>
        </motion.div>
        
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </section>

      {/* Our Professional Journey */}
      <section id="journey" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy mb-6">Our Professional Journey</h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              A distinguished husband-and-wife team bringing together over 60 years of combined expertise in corporate travel, retail operations, group touring, cruise coordination, and airline experience. Our partnership represents decades of trusted service to the global travel community.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.div className="text-center" variants={fadeInUp}>
              <div className="w-20 h-20 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Handshake className="text-navy w-8 h-8" />
              </div>
              <h3 className="font-semibold text-xl mb-4">Partnership Excellence</h3>
              <p className="text-gray-600">30+ years each of collaborative expertise in travel logistics and operations</p>
            </motion.div>

            <motion.div className="text-center" variants={fadeInUp}>
              <div className="w-20 h-20 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="text-navy w-8 h-8" />
              </div>
              <h3 className="font-semibold text-xl mb-4">Global Reach</h3>
              <p className="text-gray-600">International experience spanning multiple continents and cultures</p>
            </motion.div>

            <motion.div className="text-center" variants={fadeInUp}>
              <div className="w-20 h-20 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="text-navy w-8 h-8" />
              </div>
              <h3 className="font-semibold text-xl mb-4">Industry Recognition</h3>
              <p className="text-gray-600">Trusted advisors supporting major cruise lines and travel operations</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* World-Class Expertise Section */}
      <section id="expertise" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy mb-6">Our Expertise</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-gold to-navy mx-auto mb-8"></div>
            <h4 className="text-xl text-gray-700 max-w-3xl mx-auto">
              Decades of hands-on leadership across every major sector of the travel industry.
            </h4>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.div 
              className="bg-white border border-gray-200 rounded-xl p-8 text-center shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              variants={fadeInUp}
            >
              <div className="w-12 h-12 text-navy mx-auto mb-6">
                <Briefcase className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-semibold text-navy mb-4">Corporate Travel</h3>
              <p className="text-gray-600 leading-relaxed">Strategic programme design and cost-optimised, enterprise-grade travel management.</p>
            </motion.div>

            <motion.div 
              className="bg-white border border-gray-200 rounded-xl p-8 text-center shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              variants={fadeInUp}
            >
              <div className="w-12 h-12 text-navy mx-auto mb-6">
                <ShoppingBag className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-semibold text-navy mb-4">Retail Travel</h3>
              <p className="text-gray-600 leading-relaxed">High-touch consumer service and frontline retail expertise.</p>
            </motion.div>

            <motion.div 
              className="bg-white border border-gray-200 rounded-xl p-8 text-center shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              variants={fadeInUp}
            >
              <div className="w-12 h-12 text-navy mx-auto mb-6">
                <Users className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-semibold text-navy mb-4">Group Travel</h3>
              <p className="text-gray-600 leading-relaxed">Seamless logistics for incentive groups, conferences, and large-scale movements.</p>
            </motion.div>

            <motion.div 
              className="bg-white border border-gray-200 rounded-xl p-8 text-center shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              variants={fadeInUp}
            >
              <div className="w-12 h-12 text-navy mx-auto mb-6">
                <Plane className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-semibold text-navy mb-4">Airline Operations</h3>
              <p className="text-gray-600 leading-relaxed">Deep operational know-how spanning ground handling, IROP response, and network planning support.</p>
            </motion.div>

            <motion.div 
              className="bg-white border border-gray-200 rounded-xl p-8 text-center shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              variants={fadeInUp}
            >
              <div className="w-12 h-12 text-navy mx-auto mb-6">
                <Map className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-semibold text-navy mb-4">Escorted Tours</h3>
              <p className="text-gray-600 leading-relaxed">Culturally rich, end-to-end guided tour design and execution.</p>
            </motion.div>

            <motion.div 
              className="bg-white border border-gray-200 rounded-xl p-8 text-center shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              variants={fadeInUp}
            >
              <div className="w-12 h-12 text-navy mx-auto mb-6">
                <Ship className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-semibold text-navy mb-4">Cruise Logistics</h3>
              <p className="text-gray-600 leading-relaxed">Complete cruise-turnaround solutions, port agency liaison, and passenger movement control.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Individual Profiles */}
      <section id="profiles" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy mb-6">Meet Our Team</h2>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </motion.div>

          <motion.div 
            className="grid lg:grid-cols-2 gap-12 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            {/* Rodney Profile */}
            <motion.div 
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              variants={fadeInUp}
            >
              <div className="flex flex-col items-center text-center">
                <img 
                  src={rodneyPhoto} 
                  alt="Rodney Pattison" 
                  className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg mb-6" 
                />
                <div>
                  <h3 className="font-serif text-2xl font-bold text-navy mb-2">Rodney Pattison</h3>
                  <p className="text-gold font-semibold mb-4">Senior Travel Advisor & Operations Specialist</p>
                  <div className="flex justify-center gap-2 mb-4">
                    <span className="bg-navy text-white text-sm px-3 py-1 rounded-full font-medium">English</span>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    With over 30 years in the travel industry, Rodney brings extensive experience in corporate travel management, cruise operations, and international logistics. His deep understanding of global travel networks and operational excellence has made him a trusted advisor to major cruise lines and travel organizations worldwide.
                  </p>
                  <div className="border-t-2 border-gray-200 pt-6">
                    <h4 className="text-lg font-semibold text-navy mb-3 flex items-center justify-center gap-2">
                      🎤 Extra Talents
                    </h4>
                    <p className="text-gray-600">
                      <strong className="text-navy">Emcee | Stand-up Comedian | Comedy Hypnotist</strong><br />
                      Rodney energises conferences and cruise sail-aways with interactive comedy, professional MC work, and crowd-friendly hypnosis shows.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Nuch Profile */}
            <motion.div 
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              variants={fadeInUp}
            >
              <div className="flex flex-col items-center text-center">
                <img 
                  src={nuchPhoto} 
                  alt="Nuch Pattison" 
                  className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg mb-6" 
                />
                <div>
                  <h3 className="font-serif text-2xl font-bold text-navy mb-2">Nuch Pattison</h3>
                  <p className="text-gold font-semibold mb-4">International Travel Consultant & Cultural Liaison</p>
                  <div className="flex justify-center gap-2 mb-4">
                    <span className="bg-navy text-white text-sm px-3 py-1 rounded-full font-medium">English</span>
                    <span className="bg-navy text-white text-sm px-3 py-1 rounded-full font-medium">Thai</span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Nuch's 30+ years of experience spans retail travel operations, group tour coordination, and cultural consulting. Her multilingual capabilities and deep understanding of Asian markets have been instrumental in developing successful international travel programs and fostering cross-cultural business relationships.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Expertise */}
      <section id="expertise" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy mb-6">Our Expertise</h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Comprehensive travel industry expertise spanning multiple sectors and decades of hands-on experience
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.div 
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              variants={fadeInUp}
            >
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <Briefcase className="text-white w-10 h-10" />
              </div>
              <h3 className="font-semibold text-xl mb-4 text-center">Corporate Travel</h3>
              <p className="text-gray-600 text-center">Strategic corporate travel management and logistics coordination for business operations</p>
            </motion.div>

            <motion.div 
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              variants={fadeInUp}
            >
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <ShoppingBag className="text-white w-10 h-10" />
              </div>
              <h3 className="font-semibold text-xl mb-4 text-center">Retail Travel</h3>
              <p className="text-gray-600 text-center">Consumer-focused travel services and retail operations management expertise</p>
            </motion.div>

            <motion.div 
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              variants={fadeInUp}
            >
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <Users className="text-white w-10 h-10" />
              </div>
              <h3 className="font-semibold text-xl mb-4 text-center">Group Travel</h3>
              <p className="text-gray-600 text-center">Large-scale group coordination and specialized travel program development</p>
            </motion.div>

            <motion.div 
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              variants={fadeInUp}
            >
              <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <Plane className="text-white w-10 h-10" />
              </div>
              <h3 className="font-semibold text-xl mb-4 text-center">Airline Operations</h3>
              <p className="text-gray-600 text-center">Deep airline industry knowledge and operational coordination experience</p>
            </motion.div>

            <motion.div 
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              variants={fadeInUp}
            >
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <Map className="text-white w-10 h-10" />
              </div>
              <h3 className="font-semibold text-xl mb-4 text-center">Escorted Tours</h3>
              <p className="text-gray-600 text-center">Guided tour operations with cultural expertise and guest experience focus</p>
            </motion.div>

            <motion.div 
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              variants={fadeInUp}
            >
              <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <Ship className="text-white w-10 h-10" />
              </div>
              <h3 className="font-semibold text-xl mb-4 text-center">Cruise Logistics</h3>
              <p className="text-gray-600 text-center">Comprehensive cruise operations management for thousands of passengers</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Cruise Lines We've Supported */}
      <section id="cruise-lines" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy mb-6">Cruise Lines We've Supported</h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Trusted partners with the world's leading cruise operators
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.div 
              className="flex justify-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              variants={fadeInUp}
            >
              <img 
                src={azamaraLogo} 
                alt="Azamara Cruises" 
                className="h-12 object-contain" 
              />
            </motion.div>

            <motion.div 
              className="flex justify-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              variants={fadeInUp}
            >
              <img 
                src={carnivalLogo} 
                alt="Carnival Cruise Line" 
                className="h-12 object-contain" 
              />
            </motion.div>

            <motion.div 
              className="flex justify-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              variants={fadeInUp}
            >
              <img 
                src={crystalLogo} 
                alt="Crystal Cruises" 
                className="h-12 object-contain" 
              />
            </motion.div>

            <motion.div 
              className="flex justify-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              variants={fadeInUp}
            >
              <img 
                src={cunardLogo} 
                alt="Cunard Line" 
                className="h-12 object-contain" 
              />
            </motion.div>

            <motion.div 
              className="flex justify-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              variants={fadeInUp}
            >
              <img 
                src={hollandAmericaLogo} 
                alt="Holland America Line" 
                className="h-12 object-contain" 
              />
            </motion.div>

            <motion.div 
              className="flex justify-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              variants={fadeInUp}
            >
              <img 
                src={norwegianLogo} 
                alt="Norwegian Cruise Line" 
                className="h-12 object-contain" 
              />
            </motion.div>

            <motion.div 
              className="flex justify-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              variants={fadeInUp}
            >
              <img 
                src={oceaniaLogo} 
                alt="Oceania Cruises" 
                className="h-12 object-contain" 
              />
            </motion.div>

            <motion.div 
              className="flex justify-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              variants={fadeInUp}
            >
              <img 
                src={poAustraliaLogo} 
                alt="P&O Australia" 
                className="h-12 object-contain" 
              />
            </motion.div>

            <motion.div 
              className="flex justify-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              variants={fadeInUp}
            >
              <img 
                src={poUkLogo} 
                alt="P&O UK" 
                className="h-12 object-contain" 
              />
            </motion.div>

            <motion.div 
              className="flex justify-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              variants={fadeInUp}
            >
              <img 
                src={princessLogo} 
                alt="Princess Cruises" 
                className="h-12 object-contain" 
              />
            </motion.div>

            <motion.div 
              className="flex justify-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              variants={fadeInUp}
            >
              <img 
                src={regentLogo} 
                alt="Regent Seven Seas Cruises" 
                className="h-12 object-contain" 
              />
            </motion.div>

            <motion.div 
              className="flex justify-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              variants={fadeInUp}
            >
              <img 
                src={seabournLogo} 
                alt="Seabourn" 
                className="h-12 object-contain" 
              />
            </motion.div>

            <motion.div 
              className="flex justify-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              variants={fadeInUp}
            >
              <img 
                src={silverseaLogo} 
                alt="Silversea" 
                className="h-12 object-contain" 
              />
            </motion.div>

            <motion.div 
              className="flex justify-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              variants={fadeInUp}
            >
              <img 
                src={vikingLogo} 
                alt="Viking Cruises" 
                className="h-12 object-contain" 
              />
            </motion.div>

            <motion.div 
              className="col-span-2 md:col-span-3 lg:col-span-4 xl:col-span-5 flex justify-center items-center p-6 bg-gradient-to-br from-navy/5 to-gold/5 rounded-lg mt-4"
              variants={fadeInUp}
            >
              <div className="text-center">
                <p className="text-sm font-semibold text-navy">Plus additional partnerships including:</p>
                <p className="text-xs text-gray-600 mt-1">The World, Hapag-Lloyd, and other premium cruise operators</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20 bg-gradient-to-br from-navy to-soft-blue overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${heroImage2})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <motion.div 
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">Get in Touch</h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-6">
              Interested in learning more about how we support travel professionals and operations? We'd love to hear from you.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-white/80">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-gold" />
                <span className="text-sm">Free Consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-gold" />
                <span className="text-sm">Industry Expertise</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-gold" />
                <span className="text-sm">Global Network</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="bg-white rounded-2xl shadow-2xl p-8 md:p-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <Label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Name
                </Label>
                <Input
                  id="name"
                  {...form.register("name")}
                  placeholder="Your full name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent transition-colors"
                />
                {form.formState.errors.name && (
                  <p className="text-red-500 text-sm mt-1">{form.formState.errors.name.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  {...form.register("email")}
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent transition-colors"
                />
                {form.formState.errors.email && (
                  <p className="text-red-500 text-sm mt-1">{form.formState.errors.email.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Message
                </Label>
                <Textarea
                  id="message"
                  {...form.register("message")}
                  rows={5}
                  placeholder="Tell us about your travel industry needs or questions..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent transition-colors"
                />
                {form.formState.errors.message && (
                  <p className="text-red-500 text-sm mt-1">{form.formState.errors.message.message}</p>
                )}
              </div>

              <Button
                type="submit"
                disabled={contactMutation.isPending}
                className="w-full bg-gold hover:bg-gold/90 text-white font-semibold py-4 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                {contactMutation.isPending ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-lg font-light text-gray-300">
            Proudly supporting the global travel community.
          </p>
          <div className="mt-6 pt-6 border-t border-gray-700">
            <p className="text-sm text-gray-400">
              © 2024 Rodney & Nuch Pattison. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
