import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Sun, Moon, Utensils, Heart, BookOpen, Users, Timer } from 'lucide-react';

const PrecautionCard = ({ icon: Icon, title, description, tips }) => (
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
    <p className="text-gray-600 mb-4">{description}</p>
    <ul className="space-y-2">
      {tips.map((tip, index) => (
        <li key={index} className="flex items-start space-x-2">
          <div className="text-purple-600 mt-1">•</div>
          <span className="text-gray-600">{tip}</span>
        </li>
      ))}
    </ul>
  </motion.div>
);

const PrecautionsSection = () => {
  const precautions = [
    {
      icon: Sun,
      title: "Daily Routine",
      description: "Maintain a structured daily routine for better mental health.",
      tips: [
        "Wake up at the same time daily",
        "Plan your day ahead",
        "Include breaks and relaxation time"
      ]
    },
    {
      icon: Moon,
      title: "Sleep Hygiene",
      description: "Prioritize quality sleep for mental wellness.",
      tips: [
        "Aim for 7-9 hours of sleep",
        "Create a calming bedtime routine",
        "Limit screen time before bed"
      ]
    },
    {
      icon: Utensils,
      title: "Healthy Diet",
      description: "Nutrition plays a crucial role in mental health.",
      tips: [
        "Eat balanced meals",
        "Stay hydrated",
        "Limit caffeine and alcohol"
      ]
    },
    {
      icon: Heart,
      title: "Physical Activity",
      description: "Regular exercise benefits mental health.",
      tips: [
        "30 minutes of daily exercise",
        "Include both cardio and strength training",
        "Try mindful movement like yoga"
      ]
    },
    {
      icon: BookOpen,
      title: "Mindfulness",
      description: "Practice mindfulness for emotional balance.",
      tips: [
        "Daily meditation practice",
        "Breathing exercises",
        "Present moment awareness"
      ]
    },
    {
      icon: Users,
      title: "Social Connection",
      description: "Maintain healthy relationships and support systems.",
      tips: [
        "Regular check-ins with loved ones",
        "Join support groups",
        "Share feelings with trusted friends"
      ]
    },
    {
      icon: Timer,
      title: "Time Management",
      description: "Effective time management reduces stress.",
      tips: [
        "Set realistic goals",
        "Use time-blocking techniques",
        "Include buffer time for unexpected tasks"
      ]
    },
    {
      icon: Shield,
      title: "Boundaries",
      description: "Set and maintain healthy boundaries.",
      tips: [
        "Learn to say no when needed",
        "Respect your limits",
        "Communicate boundaries clearly"
      ]
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-block p-3 bg-purple-100 rounded-full mb-4"
          >
            <Shield className="h-8 w-8 text-purple-600" />
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Preventive Measures
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Taking proactive steps to maintain mental wellness is crucial. Here are key practices and strategies to help protect and enhance your mental health.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {precautions.map((precaution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <PrecautionCard {...precaution} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PrecautionsSection;