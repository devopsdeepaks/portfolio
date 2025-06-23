
import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, ExternalLink, Code, Briefcase, GraduationCap, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = {
    languages: ['C/C++', 'JavaScript', 'TypeScript', 'Python', 'SQL', 'HTML5', 'PHP'],
    libraries: ['Next.js', 'React.js', 'Node.js', 'TailWind CSS'],
    tools: ['Visual Studio Code', 'Git/Github', 'Postman'],
    fundamentals: ['Operating System', 'DBMS', 'Networking', 'DSA']
  };

  const experiences = [
    {
      title: 'Technical Head - Idea Lab AKGEC',
      duration: 'Oct 2023 - Present',
      achievements: [
        'Led 5+ startup-related workshops, attracting over 200 attendees and generating 15 new startup ideas',
        'Organized key events, including an alumni meet with 1000+ attendees, hackathons, workshops, and the upcoming TedX',
        'Managed technical operations for 10+ incubated startups by regularly monitoring progress and mentoring emerging entrepreneurial ideas'
      ]
    },
    {
      title: 'Web Developer — Mgadz INC',
      duration: 'Jun 2023 - Oct 2024',
      achievements: [
        'Spearheaded the development of multiple Websites utilizing WordPress, Shopify and React.js, resulting in a 50 Percentage increase in site speed and enhancing user experience for 1,500+ monthly visitors',
        'Optimized website performance, boosting page load speed from 3s to 1.5s, leading to a 20 Percent increase in organic traffic',
        'Collaborated with a 3-member team to deliver 50+ client-focused solutions, boosting customer satisfaction and Project Timeline'
      ]
    }
  ];

  const projects = [
    {
      title: 'Sangam Link',
      tech: ['ReactJs', 'Tailwind CSS', 'Node.js', "API's"],
      description: 'Developed a real-time 3-layer dashboard for project analysis and inter-departmental coordination. Enabled task and project creation with double authentication, live status updates, and detailed reporting.',
      github: true
    },
    {
      title: 'PerfectMe Link',
      tech: ['ReactJs', 'PostgreSQL', 'OpenAI API'],
      description: 'Developed an AI-powered mock interview platform processing 100+ sessions with real-time feedback. Designed a career roadmap section engaging 200+ users with structured learning paths.',
      github: true
    }
  ];

  const achievements = [
    {
      title: 'Smart India Hackathon Finalist',
      description: 'Led a 6-member team in the Smart India Hackathon, securing 2nd place out of 500+ teams. Successfully delivered a complex project within 36 hours, earning national recognition from the Government of India.'
    },
    {
      title: 'Startup Conclave Winner',
      description: 'Recognized for PureWash, a platform connecting consumers with 15+ dhobis and 500+ Customers, secured seed funding of INR 2 Lakhs, a 3-month incubation period, and official registration under Startup India.'
    },
    {
      title: 'IDE Bootcamp Winner',
      description: 'Achieved first place in IDE Bootcamp by developing a scalable startup model and mastering business strategy investor pitching under expert guidance.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header/Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-6xl md:text-8xl font-bold text-slate-800 mb-6 tracking-tight">
            DEEPAK
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Technical Head & Full Stack Developer passionate about building innovative solutions and leading technical teams
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button variant="outline" size="lg" className="group hover:bg-slate-800 hover:text-white transition-all duration-300">
              <Phone className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
              +91-8650580386
            </Button>
            <Button variant="outline" size="lg" className="group hover:bg-slate-800 hover:text-white transition-all duration-300">
              <Mail className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
              deepaksinghakgec@gmail.com
            </Button>
          </div>
          <div className="flex justify-center gap-6">
            <Button variant="ghost" size="lg" className="hover:scale-110 transition-all duration-300">
              <Linkedin className="w-6 h-6" />
            </Button>
            <Button variant="ghost" size="lg" className="hover:scale-110 transition-all duration-300">
              <Github className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-800 mb-12 flex items-center gap-3">
            <GraduationCap className="w-8 h-8" />
            Education
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="text-slate-800">Abdul Kalam Technical University</CardTitle>
                <CardDescription className="text-lg">Bachelor of Technology in Computer Science</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">2023 - 2026</span>
                  <Badge variant="secondary">Current CGPA: 9.6/10</Badge>
                </div>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="text-slate-800">Board of Technical Education Uttar Pradesh</CardTitle>
                <CardDescription className="text-lg">Polytechnic Diploma in Computer Science</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">2020 - 2023</span>
                  <Badge variant="secondary">CGPA: 8.1/10</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-800 mb-12 flex items-center gap-3">
            <Code className="w-8 h-8" />
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, items], index) => (
              <Card key={category} className={`hover:shadow-lg transition-all duration-300 hover:-translate-y-1 delay-${index * 100}`}>
                <CardHeader>
                  <CardTitle className="capitalize text-slate-800">{category.replace(/([A-Z])/g, ' $1').trim()}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <Badge key={skill} variant="outline" className="hover:bg-slate-800 hover:text-white transition-colors">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-800 mb-12 flex items-center gap-3">
            <Briefcase className="w-8 h-8" />
            Experience
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-slate-800">{exp.title}</CardTitle>
                    </div>
                    <Badge variant="outline">{exp.duration}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-600">
                        <div className="w-2 h-2 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-6 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-800 mb-12 flex items-center gap-3">
            <Code className="w-8 h-8" />
            Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-slate-800 group-hover:text-slate-900">{project.title}</CardTitle>
                    {project.github && (
                      <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <Github className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary">{tech}</Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-800 mb-12 flex items-center gap-3">
            <Award className="w-8 h-8" />
            Achievements
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="text-slate-800 text-lg">{achievement.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-slate-800 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Let's Build Something Amazing Together</h3>
          <p className="text-slate-300 mb-6">Always open to discussing new opportunities and innovative projects</p>
          <div className="flex justify-center gap-4">
            <Button variant="outline" className="text-white border-white hover:bg-white hover:text-slate-800">
              <Mail className="w-4 h-4 mr-2" />
              Get In Touch
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
