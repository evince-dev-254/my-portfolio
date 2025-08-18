"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Lock, Users } from "lucide-react"

export function AuthSection() {
  const handleGithubLogin = () => {
    // This would integrate with your authentication system
    window.open("https://github.com/login/oauth/authorize", "_blank")
  }

  return (
    <section id="auth" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Connect & Collaborate</h2>
          <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto">
            Join the community and explore exclusive content. Connect with GitHub to access project repositories and
            collaborate on exciting developments.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
          <Card className="text-center">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Github className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>GitHub Integration</CardTitle>
              <CardDescription>Access source code and contribute to open-source projects</CardDescription>
            </CardHeader>
            <CardContent>
              <Button onClick={handleGithubLogin} className="w-full">
                <Github className="mr-2 h-4 w-4" />
                Connect GitHub
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Lock className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Secure Access</CardTitle>
              <CardDescription>Protected content and exclusive project insights</CardDescription>
            </CardHeader>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Community</CardTitle>
              <CardDescription>Connect with fellow developers and tech enthusiasts</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  )
}
