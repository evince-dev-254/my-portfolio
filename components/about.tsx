import { Card, CardContent } from "@/components/ui/card"
import { MapPin, GraduationCap, Calendar, Heart } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-sans font-black text-foreground mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Driven by curiosity and powered by code</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-foreground">
              I am a passionate and motivated computer science student with a strong interest in software development,
              web design, and digital innovation. I aim to apply technology to solve real-world problems by building
              user-friendly, efficient, and scalable solutions.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              <Card className="border-border/50 hover:border-primary/50 transition-colors">
                <CardContent className="p-4 flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-medium text-card-foreground">Location</p>
                    <p className="text-sm text-muted-foreground">Meru, Kenya</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50 hover:border-primary/50 transition-colors">
                <CardContent className="p-4 flex items-center gap-3">
                  <GraduationCap className="w-5 h-5 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-medium text-card-foreground">Education</p>
                    <p className="text-sm text-muted-foreground">Diploma Level 6</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50 hover:border-primary/50 transition-colors">
                <CardContent className="p-4 flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-medium text-card-foreground">Graduation</p>
                    <p className="text-sm text-muted-foreground">Expected 2025</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50 hover:border-primary/50 transition-colors">
                <CardContent className="p-4 flex items-center gap-3">
                  <Heart className="w-5 h-5 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-medium text-card-foreground">Passion</p>
                    <p className="text-sm text-muted-foreground">Web Innovation</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto pulse-glow">
                  <GraduationCap className="w-16 h-16 text-primary" />
                </div>
                <h3 className="text-xl font-sans font-black text-foreground mb-2">Meru National Polytechnic</h3>
                <p className="text-muted-foreground">Computer Science Diploma</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
