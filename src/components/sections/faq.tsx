'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import bgVideo from "../../assets/bgVideo.mp4"

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: '1',
    question: 'What is the purpose of this website?',
    answer: 'This website serves as a comprehensive platform for exploring our products and services. We are here to help you find everything you need in one place.',
  },
  {
    id: '2',
    question: 'What is the purpose of this website?',
    answer: 'This website is designed to provide seamless access to our full range of offerings, from products to customer support. We strive to make your experience smooth and satisfying.',
  },
  {
    id: '3',
    question: 'What is the purpose of this website?',
    answer: 'Our website aims to connect customers with innovative solutions and expert guidance. Everything is organized to help you find answers quickly and easily.',
  },
  {
    id: '4',
    question: 'What is your policy on product returns for office spaces?',
    answer: 'We offer a 30-day return policy on all office space products. Items must be in original condition with all packaging intact.',
  },
  {
    id: '5',
    question: 'What is your policy on product returns for office spaces?',
    answer: 'Product returns for office spaces can be initiated within 30 days of purchase. Please ensure items are unused and in their original packaging.',
  },
  {
    id: '6',
    question: 'How do I contact support?',
    answer: 'You can reach our support team at support@example.com or use the contact form on our website. We typically respond within 24 hours.',
  },
  {
    id: '7',
    question: 'How do I contact support?',
    answer: 'Support is available via email at support@example.com, through our website contact form, or by phone during business hours.',
  },
  {
    id: '8',
    question: 'Do you offer installation services?',
    answer: 'Yes, we offer professional installation services for all our products. Please contact our support team for pricing and availability.',
  },
  {
    id: '9',
    question: 'Do you offer discounts for bulk purchases?',
    answer: 'Absolutely! We provide competitive discounts for bulk orders. Contact our sales team for a custom quote.',
  },
  {
    id: '10',
    question: 'Are there membership benefits available?',
    answer: 'Yes, we offer various membership tiers with exclusive benefits including early access to new products and special discounts.',
  },
  {
    id: '11',
    question: 'What payment methods are accepted?',
    answer: 'We accept all major credit cards, PayPal, bank transfers, and cryptocurrency payments for your convenience.',
  },
];

// Animation variants
const fadeInUpVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const animateOnView = (delay = 0) => ({
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: false, margin: "-100px" },
  variants: fadeInUpVariants,
  transition: { delay }
});

export default function FAQSection() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="relative overflow-hidden w-full py-16 px-4 md:px-8">
      {/* Animated Background Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute top-20 right-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.2 }}
        className="absolute top-40 right-32 w-64 h-64 bg-blue-300/20 rounded-full blur-2xl"
      />

      {/* Full Width Header Section */}
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        className="w-full mb-16"
      >
        <motion.p 
          variants={fadeInUpVariants}
          className="text-blue-400 text-sm font-medium mb-4 tracking-wide px-4 md:px-8"
        >
          FAQ's
        </motion.p>
        
        {/* Heading with Left Separator */}
        <div className="flex gap-4 items-start mb-6 px-4 md:px-8">
          <motion.div 
            variants={fadeInUpVariants}
            className="w-2 h-[120px] shrink-0 bg-[rgba(189,216,233,0.59)] rounded-[10px]"
          />
          <motion.h1 
            variants={fadeInUpVariants}
            className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight max-w-4xl"
          >
            We are here to help you with any questions you may have.
          </motion.h1>
        </div>
        
        <motion.p 
          variants={fadeInUpVariants}
          className="text-slate-600 text-lg mb-8 leading-relaxed px-4 md:px-8 max-w-4xl"
        >
          If you don't find what you need, please contact us at{' '}
          <a href="mailto:support@example.com" className="text-blue-500 font-medium">
            support@example.com
          </a>
        </motion.p>
      </motion.div>

      {/* FAQ Grid */}
      <div className="max-w-7xl mx-auto">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {faqData.map((item) => {
            const isExpanded = expandedId === item.id;

            return (
              <motion.div
                key={item.id}
                variants={fadeInUpVariants}
                className={`relative rounded-lg overflow-hidden transition-all duration-300 ${
                  isExpanded ? 'bg-white' : ''
                }`}
              >
                {/* Video Background - Only show when not expanded */}
                {!isExpanded && (
                  <>
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover"
                    >
                      <source src={bgVideo} type="video/mp4" />
                    </video>

                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black/50" />
                  </>
                )}

                {/* Content */}
                <div className="relative z-10">
                  <motion.button
                    onClick={() => toggleAccordion(item.id)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full px-6 py-4 text-left font-medium flex items-center justify-between transition-colors duration-300 ${
                      isExpanded
                        ? 'text-black'
                        : 'text-white'
                    }`}
                  >
                    <span className="text-base md:text-lg leading-snug">
                      {item.question}
                    </span>
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-5 h-5 flex-shrink-0 ml-4" />
                    </motion.div>
                  </motion.button>

                  {/* Answer Content */}
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ 
                      opacity: isExpanded ? 1 : 0,
                      height: isExpanded ? 'auto' : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 py-4 bg-white border-t border-gray-200">
                      <p className="text-black text-sm md:text-base leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
