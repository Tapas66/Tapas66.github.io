import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Heart, AlertTriangle, Cloud, Coffee, Users } from 'lucide-react';

const CauseCard = ({ icon: Icon, title, description }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-white p-6 rounded-lg shadow-lg"
  >
    <div className="flex items-center space-x-4 mb-4">
      <div className="bg-purple-100 p-3 rounded-full">
        <Icon className="h-6 w-6 text-purple-600" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
    </div>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

const CausesSection = () => {
  const causes = [
    {
      icon: Brain,
      title: "Genetic Factors",
      description: "Family history and genetic predisposition can influence mental health conditions, affecting neurotransmitter function and brain chemistry."
    },
    {
      icon: Heart,
      title: "Emotional Trauma",
      description: "Past traumatic experiences, abuse, or significant loss can trigger various mental health challenges and emotional disorders."
    },
    {
      icon: AlertTriangle,
      title: "Chronic Stress",
      description: "Prolonged exposure to stress can lead to anxiety, depression, and other mental health issues through constant activation of stress responses."
    },
    {
      icon: Cloud,
      title: "Environmental Factors",
      description: "Social environment, living conditions, and exposure to violence or discrimination can significantly impact mental well-being."
    },
    {
      icon: Coffee,
      title: "Lifestyle Factors",
      description: "Poor sleep habits, substance use, lack of physical activity, and unhealthy diet can contribute to mental health problems."
    },
    {
      icon: Users,
      title: "Social Isolation",
      description: "Lack of social connections and support systems can lead to loneliness and increased risk of mental health issues."
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Understanding the Causes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mental health challenges can arise from various factors. Understanding these causes is crucial for prevention and effective treatment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {causes.map((cause, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <CauseCard {...cause} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CausesSection;