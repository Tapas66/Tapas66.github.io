import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail, Users } from 'lucide-react';

const ExpertCard = ({ name, role, image, description, linkedin }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-white p-6 rounded-lg shadow-lg"
  >
    <div className="relative mb-6">
      <img
        src={image}
        alt={name}
        className="w-full h-64 object-cover rounded-lg"
      />
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        className="absolute inset-0 bg-purple-600 bg-opacity-80 rounded-lg flex items-center justify-center"
      >
        <div className="text-white text-center p-4">
          <p className="text-sm">{description}</p>
          <div className="mt-4 flex justify-center space-x-4">
            <a
              href={linkedin}
              className="text-white hover:text-purple-200 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href={`mailto:${name.toLowerCase().replace(' ', '.')}@mindfulcare.com`}
              className="text-white hover:text-purple-200 transition-colors"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
    <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
    <p className="text-purple-600">{role}</p>
  </motion.div>
);

const TeamSection = () => {
  const experts = [
    {
      name: "Tapas Pandey",
      role: "Student",
      image: "https://st3.depositphotos.com/5934840/14226/v/380/depositphotos_142263918-stock-illustration-man-cartoon-icon.jpg",
      description: "Taking care of your mind is just as important as taking care of your body.",
      linkedin: "#"
    },
    {
      name: "Pari Khandelwal",
      role: "Student",
      image: "https://i.pinimg.com/originals/84/5f/57/845f57c5f50322ee947f80ee8eab2631.jpg",
      description: "Taking care of your mind is just as important as taking care of your body.",
      linkedin: "#"
    },
    {
      name: "Sneha Gupta",
      role: "Student",
      image: "https://i.pinimg.com/originals/84/5f/57/845f57c5f50322ee947f80ee8eab2631.jpg",
      description: "Taking care of your mind is just as important as taking care of your body.",
      linkedin: "#"
    },
    {
      name: "Ambuj",
      role: "Student",
      image: "https://st3.depositphotos.com/5934840/14226/v/380/depositphotos_142263918-stock-illustration-man-cartoon-icon.jpg",
      description: "Taking care of your mind is just as important as taking care of your body.",
      linkedin: "#"
    },
    {
      name: "Riddhi",
      role: "Student",
      image: "https://i.pinimg.com/originals/84/5f/57/845f57c5f50322ee947f80ee8eab2631.jpg",
      description: "Taking care of your mind is just as important as taking care of your body.",
      linkedin: "#"
    },
    {
      name: "Divyanka",
      role: "Student",
      image: "https://i.pinimg.com/originals/84/5f/57/845f57c5f50322ee947f80ee8eab2631.jpg",
      description: "Taking care of your mind is just as important as taking care of your body.",
      linkedin: "#"
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-block p-3 bg-purple-100 rounded-full mb-4"
          >
            <Users className="h-8 w-8 text-purple-600" />
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our team of dedicated studets have developed this website to promote mental health among the individuals viewing the website.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {experts.map((expert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <ExpertCard {...expert} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;