import { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  ExternalLink,
  Code,
  Briefcase,
  GraduationCap,
  Award,
  Download,
  Twitter,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
const pdfUrl =
  "https://drive.google.com/file/d/1lcdx5LDs9vqeW6KBXp6bjLrdt6CBcp7M/view?usp=sharing";
const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = {
    languages: [
      "C/C++",
      "JavaScript",
      "TypeScript",
      "Python",
      "SQL",
      "HTML5",
      "PHP",
    ],
    libraries: ["Next.js", "React.js", "Node.js", "TailWind CSS"],
    tools: ["Visual Studio Code", "Git/Github", "Postman"],
    fundamentals: ["Operating System", "DBMS", "Networking", "DSA"],
  };

  const experiences = [
    {
      title: "Technical Head - Idea Lab AKGEC",
      duration: "Oct 2023 - Present",
      achievements: [
        "Led 5+ startup-related workshops, attracting over 200 attendees and generating 15 new startup ideas",
        "Organized key events, including an alumni meet with 1000+ attendees, hackathons, workshops, and the upcoming TedX",
        "Managed technical operations for 10+ incubated startups by regularly monitoring progress and mentoring emerging entrepreneurial ideas",
      ],
    },
    {
      title: "Web Developer — Mgadz INC",
      duration: "Jun 2023 - Oct 2024",
      achievements: [
        "Spearheaded the development of multiple Websites utilizing WordPress, Shopify and React.js, resulting in a 50 Percentage increase in site speed and enhancing user experience for 1,500+ monthly visitors",
        "Optimized website performance, boosting page load speed from 3s to 1.5s, leading to a 20 Percent increase in organic traffic",
        "Collaborated with a 3-member team to deliver 50+ client-focused solutions, boosting customer satisfaction and Project Timeline",
      ],
    },
  ];

  const projects = [
    {
      title: "Sangam",
      tech: ["ReactJs", "Tailwind CSS", "Node.js", "API's"],
      description:
        "Developed a real-time 3-layer dashboard for project analysis and inter-departmental coordination. Enabled task and project creation with double authentication, live status updates, and detailed reporting.",
      Github: "https://github.com/devopsdeepaks/Sangam-frontend.git",
      liveLink: "https://sangam-frontend-two.vercel.app/",
    },
    {
      title: "PrepGenie",
      tech: ["NextJs", "ReactJs", "PostgreSQL", "OpenAI API"],
      description:
        "Developed an AI-powered mock interview platform processing 100+ sessions with real-time feedback. Designed a career roadmap section engaging 200+ users with structured learning paths.",
      Github: "https://github.com/devopsdeepaks/prepgenie",
      liveLink: "https://prepgenie-sigma.vercel.app/",
    },
  ];

  const achievements = [
    {
      title: "Smart India Hackathon Finalist",
      description:
        "Led a 6-member team in the Smart India Hackathon, securing 2nd place out of 500+ teams. Successfully delivered a complex project within 36 hours, earning national recognition from the Government of India.",
      image: "/1.jpeg",
    },
    {
      title: "Startup Conclave Winner",
      description:
        "Recognized for PureWash, a platform connecting consumers with 15+ dhobis and 500+ Customers, secured seed funding of INR 2 Lakhs, a 3-month incubation period, and official registration under Startup India.",
      image: "/2.jpeg",
    },
    {
      title: "IDE Bootcamp Winner",
      description:
        "Achieved first place in IDE Bootcamp by developing a scalable startup model and mastering business strategy investor pitching under expert guidance.",
      image: "3.jpeg",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/40 relative overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_1px_1px,rgb(15_23_42)_1px,transparent_0)] bg-[length:40px_40px]"></div>
      </div>

      {/* Improved Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-200/25 to-purple-200/25 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute top-80 right-20 w-96 h-96 bg-gradient-to-br from-indigo-200/20 to-cyan-200/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-40 left-1/4 w-80 h-80 bg-gradient-to-br from-purple-200/15 to-pink-200/15 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 right-1/4 w-64 h-64 bg-gradient-to-br from-emerald-200/15 to-teal-200/15 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      {/* Header/Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 py-12">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-transparent to-purple-600/5"></div>
        <div
          className={`relative z-10 text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="mb-8">
            <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-2xl sm:text-4xl font-bold shadow-2xl relative group">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 animate-pulse opacity-75 group-hover:opacity-90 transition-opacity"></div>
              <span className="relative z-10">D</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-4 tracking-tight">
              DEEPAK
            </h1>
            <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
          </div>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed font-medium px-4">
            AI-enthusiast & Full Stack Developer passionate about building
            innovative solutions and leading technical teams
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 mb-8 px-4">
            <Button
              variant="outline"
              size="lg"
              className="group hover:bg-blue-600 hover:text-white transition-all duration-300 border-blue-200 text-sm sm:text-base"
              onClick={() => (window.location.href = "tel:+918650589386")}
            >
              <Phone className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
              +91-8650580386
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="group hover:bg-purple-600 hover:text-white transition-all duration-300 border-purple-200 text-sm sm:text-base"
              onClick={() => window.open(`mailto:deepaksinghalgpg@gmail.com`)}
            >
              <Mail className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
              deepaksinghalgpg@gmail.com
            </Button>
            <Button
              size="lg"
              className="group bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              onClick={() => {
                const link = document.createElement("a");
                link.href = pdfUrl;
                link.download = "My_Resume.pdf"; // optional custom filename
                link.click();
              }}
            >
              <Download className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
              Download Resume
            </Button>
          </div>
          <div className="flex justify-center gap-4">
            <Button
              variant="ghost"
              size="lg"
              className="hover:scale-110 transition-all duration-300 hover:bg-blue-100 hover:text-blue-600"
              onClick={() =>
                window.open(`https://www.linkedin.com/in/devopsdeepak/`)
              }
            >
              <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="hover:scale-110 transition-all duration-300 hover:bg-gray-100 hover:text-gray-800"
              onClick={() => window.open(`https://github.com/devopsdeepaks`)}
            >
              <Github className="w-5 h-5 sm:w-6 sm:h-6" />
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="hover:scale-110 transition-all duration-300 hover:bg-gray-100 hover:text-gray-800"
              onClick={() =>
                window.open(
                  `https://x.com/DevopsDeepak1?t=OrbbsZ0xavBPcBoQZWhmwQ&s=09`
                )
              }
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </Button>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white/70 backdrop-blur-sm border-y border-white/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg">
                <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              Education
            </h2>
            <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 mx-auto"></div>
          </div>
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
            <Card className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-xl bg-white/95 backdrop-blur-sm hover:bg-white group">
              <CardHeader className="pb-4">
                <CardTitle className="text-gray-900 text-lg sm:text-xl group-hover:text-emerald-600 transition-colors">
                  Abdul Kalam Technical University
                </CardTitle>
                <CardDescription className="text-base sm:text-lg text-gray-600">
                  Bachelor of Technology in Computer Science
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                  <span className="text-gray-500 font-medium">2023 - 2026</span>
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-200 text-xs sm:text-sm">
                    Current CGPA: 7.6/10
                  </Badge>
                </div>
              </CardContent>
            </Card>
            <Card className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-xl bg-white/95 backdrop-blur-sm hover:bg-white group">
              <CardHeader className="pb-4">
                <CardTitle className="text-gray-900 text-lg sm:text-xl group-hover:text-emerald-600 transition-colors">
                  Board of Technical Education Uttar Pradesh
                </CardTitle>
                <CardDescription className="text-base sm:text-lg text-gray-600">
                  Polytechnic Diploma in Computer Science
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                  <span className="text-gray-500 font-medium">2020 - 2023</span>
                  <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 text-xs sm:text-sm">
                    CGPA: 8.1/10
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/30 to-transparent"></div>
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg">
                <Code className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              Technical Skills
            </h2>
            <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto"></div>
          </div>
          <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {Object.entries(skills).map(([category, items], index) => (
              <Card
                key={category}
                className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-xl bg-white/95 backdrop-blur-sm hover:bg-white group animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="pb-3 sm:pb-4">
                  <CardTitle className="capitalize text-gray-900 text-base sm:text-lg group-hover:text-blue-600 transition-colors">
                    {category.replace(/([A-Z])/g, " $1").trim()}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {items.map((skill) => (
                      <Badge
                        key={skill}
                        variant="outline"
                        className="hover:bg-blue-50 hover:text-blue-700 hover:border-blue-300 transition-colors text-xs"
                      >
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
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white/70 backdrop-blur-sm border-y border-white/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center shadow-lg">
                <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              Experience
            </h2>
            <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-600 mx-auto"></div>
          </div>
          <div className="space-y-6 sm:space-y-8">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-xl bg-white/95 backdrop-blur-sm hover:bg-white group"
              >
                <CardHeader className="pb-3 sm:pb-4">
                  <div className="flex flex-col gap-3 sm:gap-4 md:flex-row md:justify-between md:items-start">
                    <div className="flex-1">
                      <CardTitle className="text-gray-900 text-lg sm:text-xl mb-2 group-hover:text-purple-600 transition-colors">
                        {exp.title}
                      </CardTitle>
                    </div>
                    <Badge
                      variant="outline"
                      className="bg-purple-50 text-purple-700 border-purple-200 self-start text-xs sm:text-sm"
                    >
                      {exp.duration}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 sm:space-y-3">
                    {exp.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-gray-600 leading-relaxed text-sm sm:text-base"
                      >
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
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
      <section className="py-12 sm:py-16 px-4 sm:px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-50/30 to-transparent"></div>
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center shadow-lg">
                <Code className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              Projects
            </h2>
            <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-orange-500 to-red-600 mx-auto"></div>
          </div>
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group border-0 shadow-xl bg-white/95 backdrop-blur-sm hover:bg-white"
              >
                <CardHeader className="pb-3 sm:pb-4">
                  <div className="flex justify-between items-start mb-3 gap-3">
                    <CardTitle className="text-gray-900 group-hover:text-orange-700 transition-colors text-lg sm:text-xl flex-1">
                      {project.title}
                    </CardTitle>
                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="hover:bg-gray-50 hover:text-gray-800"
                        onClick={() => window.open(project.Github, "_blank")}
                      >
                        <Github className="w-4 h-4" />
                      </Button>

                      <Button
                        variant="ghost"
                        size="sm"
                        className="hover:bg-orange-50 hover:text-orange-600"
                        onClick={() => window.open(project.liveLink, "_blank")}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        className="bg-orange-100 text-orange-800 hover:bg-orange-200 text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    {project.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white/70 backdrop-blur-sm border-y border-white/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-yellow-500 to-orange-600 flex items-center justify-center shadow-lg">
                <Award className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              Achievements
            </h2>
            <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-yellow-500 to-orange-600 mx-auto"></div>
          </div>
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-xl bg-white/95 backdrop-blur-sm hover:bg-white group overflow-hidden"
              >
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src={achievement.image}
                    alt={achievement.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="pb-3 sm:pb-4">
                  <CardTitle className="text-gray-900 text-base sm:text-lg leading-tight group-hover:text-yellow-600 transition-colors">
                    {achievement.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 sm:py-16 px-4 sm:px-6 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,transparent_50%)]"></div>
        <div className="max-w-6xl mx-auto text-center relative">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
            Let's Build Something Amazing Together
          </h3>
          <p className="text-gray-300 mb-6 sm:mb-8 text-base sm:text-lg px-4">
            Always open to discussing new opportunities and innovative projects
          </p>
          <div className="flex justify-center">
            <Button
              className="bg-white text-gray-900 hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform"
              onClick={() => window.open(`mailto:deepaksinghalgpg@gmail.com`)}
            >
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
