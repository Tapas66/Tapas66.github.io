import React from 'react';
import { motion } from 'framer-motion';
import { Brain, TrendingUp, Users, Heart, Activity, Target, Shield, Lightbulb } from 'lucide-react';

const StatCard = ({ icon: Icon, title, value, description }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-purple-600"
  >
    <div className="flex items-center space-x-4">
      <div className="bg-purple-100 p-3 rounded-full">
        <Icon className="h-6 w-6 text-purple-600" />
      </div>
      <div>
        <h3 className="text-3xl font-bold text-gray-900 mb-1">{value}</h3>
        <p className="text-sm font-medium text-purple-600">{title}</p>
      </div>
    </div>
    <p className="mt-4 text-gray-600">{description}</p>
  </motion.div>
);

const FeatureCard = ({ icon: Icon, title, description }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="bg-white p-6 rounded-lg shadow-lg"
  >
    <div className="flex items-center space-x-3 mb-4">
      <div className="bg-purple-100 p-2 rounded-lg">
        <Icon className="h-5 w-5 text-purple-600" />
      </div>
      <h4 className="text-lg font-semibold text-gray-900">{title}</h4>
    </div>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

const AboutSection = () => {
  const stats = [
    {
      icon: Brain,
      title: "Mental Health Cases",
      value: "1 in 4",
      description: "People experience mental health issues each year globally"
    },
    {
      icon: TrendingUp,
      title: "Recovery Rate",
      value: "80%",
      description: "Of people improve with proper treatment and support"
    },
    {
      icon: Users,
      title: "Support Network",
      value: "10M+",
      description: "People in our global mental health community"
    },
    {
      icon: Heart,
      title: "Success Stories",
      value: "50K+",
      description: "Individuals helped through our programs"
    }
  ];

  const features = [
    {
      icon: Activity,
      title: "Early Intervention",
      description: "Identifying and addressing mental health concerns early leads to better outcomes and faster recovery."
    },
    {
      icon: Target,
      title: "Personalized Care",
      description: "Tailored treatment plans that consider individual needs, circumstances, and goals."
    },
    {
      icon: Shield,
      title: "Evidence-Based",
      description: "Our approaches are backed by scientific research and proven clinical effectiveness."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Incorporating the latest therapeutic techniques and technological advancements."
    }
  ];

  return (
    <div className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <span className="bg-purple-100 text-purple-600 text-sm font-medium px-4 py-2 rounded-full">
              Our Mission
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Making Mental Health a Priority
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our mission is to break down barriers, provide support, and create a world where mental health is treated with the same importance as physical health.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <StatCard {...stat} />
            </motion.div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <FeatureCard {...feature} />
            </motion.div>
          ))}
        </div>

        {/* Trends Section */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Mental Health Trends</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

            {/* Progress Circles */}
            <div className="grid grid-cols-2 gap-8">
  {[
    { label: "Seek Help", percentage: 75, color: "url(#gradient1)" },
    { label: "Recovery", percentage: 85, color: "url(#gradient2)" },
    { label: "Prevention", percentage: 60, color: "url(#gradient3)" },
    { label: "Awareness", percentage: 90, color: "url(#gradient4)" }
  ].map((item, index) => (
    <motion.div
      key={index}
      className="relative flex flex-col items-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
    >
      <svg className="w-32 h-32" viewBox="0 0 36 36">
        <defs>
          <linearGradient id={`gradient${index + 1}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: "#9333EA", stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: "#7C3AED", stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <path
          d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
          fill="none"
          stroke="#E2E8F0"
          strokeWidth="3"
        />
        <motion.path
          d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
          fill="none"
          stroke={`url(#gradient${index + 1})`}
          strokeWidth="3"
          initial={{ strokeDasharray: "0, 100" }}
          whileInView={{ strokeDasharray: `${item.percentage}, 100` }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: index * 0.2 }}
        />
        <text
          x="18"
          y="20"
          fontSize="6"
          fontWeight="bold"
          textAnchor="middle"
          fill="#1F2937"
        >
          <motion.tspan
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            {item.percentage}%
          </motion.tspan>
        </text>
      </svg>
      <p className="text-center font-medium text-sm text-gray-900 mt-2">
        {item.label}
      </p>
    </motion.div>
  ))}
</div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
