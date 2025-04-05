
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { education, experience, skills } from '@/constants'

const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState("frontend");

  return (
    <section id="skills" className="py-20 md:py-32 relative grid-bg">
      <div className="container max-w-5xl">
        <div className="space-y-4 mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="text-gradient">Skills</span> & Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and professional journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12">
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Technical Proficiency</h3>
              <Tabs defaultValue="frontend" value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="grid grid-cols-4 mb-8">
                  <TabsTrigger value="frontend">Frontend</TabsTrigger>
                  <TabsTrigger value="backend">Backend</TabsTrigger>
                  <TabsTrigger value="tools">Tools</TabsTrigger>
                  <TabsTrigger value="soft">Soft Skills</TabsTrigger>
                </TabsList>
                <TabsContent value="frontend" className="mt-0">
                  <div className="flex flex-wrap gap-2">
                    {skills.frontend.map((skill, index) => (
                      <Badge 
                        key={index} 
                        variant="secondary" 
                        className="px-3 py-1 text-base bg-muted backdrop-blur-sm hover:bg-muted/80"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="backend" className="mt-0">
                  <div className="flex flex-wrap gap-2">
                    {skills.backend.map((skill, index) => (
                      <Badge 
                        key={index} 
                        variant="secondary" 
                        className="px-3 py-1 text-base bg-muted backdrop-blur-sm hover:bg-muted/80"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="tools" className="mt-0">
                  <div className="flex flex-wrap gap-2">
                    {skills.tools.map((skill, index) => (
                      <Badge 
                        key={index} 
                        variant="secondary" 
                        className="px-3 py-1 text-base bg-muted backdrop-blur-sm hover:bg-muted/80"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="soft" className="mt-0">
                  <div className="flex flex-wrap gap-2">
                    {skills.soft.map((skill, index) => (
                      <Badge 
                        key={index} 
                        variant="secondary" 
                        className="px-3 py-1 text-base bg-muted backdrop-blur-sm hover:bg-muted/80"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Work Experience</h3>
              <div className="space-y-8">
                {experience.map((job, index) => (
                  <Card key={index} className="border-border/50 bg-background/50 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                        <div>
                          <h4 className="text-xl font-bold">{job.title}</h4>
                          <p className="text-electric">{job.company}</p>
                        </div>
                        <span className="text-muted-foreground">{job.period}</span>
                      </div>
                      <ul className="space-y-2">
                        {job.responsibilities.map((item, i) => (
                          <li key={i} className="flex gap-2">
                            <span className="text-electric">▹</span>
                            <span className="text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Education</h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <Card key={index} className="border-border/50 bg-background/50 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <h4 className="text-lg font-bold">{edu.degree}</h4>
                      <p className="text-electric">{edu.institution}</p>
                      <p className="text-muted-foreground">{edu.period}</p>
                      <p className="text-sm mt-2">{edu.details}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Certifications</h3>
              <div className="space-y-4">
                <div className="p-4 glass rounded-lg">
                  <h4 className="font-bold">Advanced React Patterns</h4>
                  <p className="text-sm text-muted-foreground">Frontend Masters, 2023</p>
                </div>
                <div className="p-4 glass rounded-lg">
                  <h4 className="font-bold">AWS Certified Developer</h4>
                  <p className="text-sm text-muted-foreground">Amazon Web Services, 2022</p>
                </div>
                <div className="p-4 glass rounded-lg">
                  <h4 className="font-bold">Professional Scrum Master I</h4>
                  <p className="text-sm text-muted-foreground">Scrum.org, 2021</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
