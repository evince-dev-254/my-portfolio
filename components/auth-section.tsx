"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Lock, Users, Terminal } from "lucide-react"

export function AuthSection() {
  const handleGithubLogin = () => {
    try {
      // Direct to Paul's GitHub profile for now - can be enhanced with OAuth later
      window.open("https://github.com/kihiu254", "_blank", "noopener,noreferrer")
    } catch (error) {
      console.error("Failed to open GitHub profile:", error)
    }
  }

  return (
    <section id="auth" className="py-20 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-10" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="font-mono text-sm text-primary mb-4">
            <span className="text-muted-foreground">$</span> connect --secure
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 glitch-text" data-text="Connect & Collaborate">
            Connect & Collaborate
          </h2>
          <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto">
            Join the digital network and explore exclusive content. Connect with GitHub to access project repositories
            and collaborate on cutting-edge developments.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
          <Card className="text-center hover-glow border-primary/20">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 border border-primary/30">
                <Github className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="font-mono">GitHub Integration</CardTitle>
              <CardDescription>Access source code and contribute to open-source projects</CardDescription>
            </CardHeader>
            <CardContent>
              <Button onClick={handleGithubLogin} className="w-full hover-glow font-mono">
                <Github className="mr-2 h-4 w-4" />
                Connect GitHub
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center hover-glow border-primary/20">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 border border-primary/30">
                <Lock className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="font-mono">Secure Access</CardTitle>
              <CardDescription>Protected content and exclusive project insights</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="font-mono text-sm text-primary">
                <Terminal className="inline h-4 w-4 mr-1" />
                Encrypted Connection
              </div>
            </CardContent>
          </Card>

          <Card className="text-center hover-glow border-primary/20">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 border border-primary/30">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="font-mono">Community</CardTitle>
              <CardDescription>Connect with fellow developers and tech enthusiasts</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="font-mono text-sm text-primary">
                <Users className="inline h-4 w-4 mr-1" />
                Network Active
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
