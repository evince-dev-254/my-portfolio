import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Palette, Users } from "lucide-react"

export function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["HTML", "CSS", "JavaScript", "Python", "PHP"],
      color: "text-primary",
    },
    {
      title: "Tools & Technologies",
      icon: Database,
      skills: ["MySQL", "Figma", "VS Code", "Git"],
      color: "text-secondary",
    },
    {
      title: "Design Skills",
      icon: Palette,
      skills: ["UI/UX Design", "Responsive Design", "Visual Branding", "Prototyping"],
      color: "text-accent",
    },
    {
      title: "Soft Skills",
      icon: Users,
      skills: ["Problem-solving", "Teamwork", "Adaptability", "Attention to Detail"],
      color: "text-primary",
    },
  ]

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-sans font-black text-foreground mb-4">Technical Skills</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A diverse toolkit for building modern web solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={category.title}
              className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg float-animation"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg bg-muted ${category.color}`}>
                    <category.icon className="w-5 h-5" />
                  </div>
                  <CardTitle className="text-lg font-sans font-black">{category.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
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
  )
}
