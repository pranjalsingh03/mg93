"use client";
import React from 'react';
import './Lang.css';
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaPython, FaJs, FaJava, FaPhp, FaGitAlt, FaGithub, FaDocker, FaCloud, FaAws, FaGoogle, FaMicrosoft } from 'react-icons/fa';
import { SiDart, SiTypescript, SiCplusplus, SiExpress, SiAngular, SiFlutter, SiNextdotjs, SiGetx, SiCloudflare, SiVercel, SiPostgresql, SiMongodb, SiTerraform, SiKubernetes, SiJenkins } from 'react-icons/si';

const Lang = () => {
  // Skill icon map
  const skillIcons: { [key: string]: JSX.Element } = {
    'JavaScript': <FaJs className="text-yellow-400" />, 'HTML': <FaHtml5 className="text-orange-500" />, 'CSS': <FaCss3Alt className="text-blue-400" />, 'Dart': <SiDart className="text-cyan-400" />, 'Node.js': <FaNodeJs className="text-green-500" />, 'Python': <FaPython className="text-blue-300" />, 'C/C++': <SiCplusplus className="text-blue-200" />, 'Java': <FaJava className="text-red-400" />, 'TypeScript': <SiTypescript className="text-blue-500" />, 'PHP': <FaPhp className="text-indigo-400" />,
    'React': <FaReact className="text-cyan-400" />, 'Express.js': <SiExpress className="text-gray-200" />, 'Angular': <SiAngular className="text-red-500" />, 'REST API': <FaCloud className="text-teal-400" />, 'Flutter': <SiFlutter className="text-blue-400" />, 'Next.js': <SiNextdotjs className="text-black dark:text-white" />, 'GetX': <SiGetx className="text-pink-400" />,
    'Git': <FaGitAlt className="text-orange-400" />, 'GitHub': <FaGithub className="text-gray-200" />, 'Docker': <FaDocker className="text-blue-400" />, 'Cloudflare': <SiCloudflare className="text-yellow-400" />, 'Vercel': <SiVercel className="text-black dark:text-white" />, 'PostgreSQL': <SiPostgresql className="text-blue-500" />, 'MongoDB': <SiMongodb className="text-green-400" />, 'Jenkins': <SiJenkins className="text-red-400" />, 'Kubernetes': <SiKubernetes className="text-blue-400" />, 'Terraform': <SiTerraform className="text-purple-400" />,
    'AWS': <FaAws className="text-yellow-400" />, 'GCP': <FaGoogle className="text-blue-400" />, 'Azure': <FaMicrosoft className="text-blue-500" />, 'Github Actions': <FaGithub className="text-gray-200" />, 'Cloud/DevOps': <FaCloud className="text-teal-400" />
  };

  // Skill groups
  const skillGroups = [
    {
      title: 'Languages',
      color: 'from-yellow-400 to-orange-400',
      skills: ['JavaScript', 'HTML', 'CSS', 'Dart', 'Node.js', 'Python', 'C/C++', 'Java', 'TypeScript', 'PHP']
    },
    {
      title: 'Frameworks',
      color: 'from-cyan-400 to-blue-400',
      skills: ['React', 'Express.js', 'Angular', 'REST API', 'Flutter', 'Next.js', 'GetX']
    },
    {
      title: 'Tools',
      color: 'from-pink-400 to-yellow-300',
      skills: ['Git', 'GitHub', 'Docker', 'Cloudflare', 'Vercel', 'PostgreSQL', 'MongoDB', 'Jenkins', 'Kubernetes', 'Terraform']
    },
    {
      title: 'Cloud/DevOps',
      color: 'from-green-400 to-blue-400',
      skills: ['AWS', 'GCP', 'Azure', 'Github Actions']
    }
  ];

  return (
    <div className="container py-12">
      <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#181c2b] to-[#232b36] rounded-3xl shadow-2xl p-8">
        <h2 className="text-4xl font-bold text-center mb-8 text-teal-300 tracking-tight">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillGroups.map(group => (
            <div key={group.title} className={`rounded-2xl p-6 bg-gradient-to-tr ${group.color} bg-opacity-10 shadow-lg`}> 
              <h3 className="text-2xl font-semibold mb-4 text-white drop-shadow">{group.title}</h3>
              <div className="flex flex-wrap gap-3">
                {group.skills.map(skill => (
                  <span key={skill} className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#232b36] text-white font-medium shadow hover:scale-105 transition-transform text-base">
                    {skillIcons[skill] || null}
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Lang;
