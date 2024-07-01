import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

function Index() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-16 bg-white">
        <div className="container mx-auto">
          <img
            src="/images/developer-photo.jpg"
            alt="Developer"
            className="mx-auto rounded-full w-32 h-32 mb-4"
          />
          <h1 className="text-4xl font-bold mb-2">John Doe</h1>
          <p className="text-lg text-muted-foreground mb-4">
            Full Stack Developer
          </p>
          <Button variant="primary">Download Resume</Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto py-16">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-muted-foreground mb-4">
          I am a passionate full stack developer with experience in building
          web applications using modern technologies. I love solving complex
          problems and creating efficient solutions.
        </p>
        <p className="text-muted-foreground">
          In my free time, I enjoy hiking, reading, and exploring new
          technologies.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container mx-auto py-16">
        <h2 className="text-3xl font-bold mb-4">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Project One</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-2">
                A brief description of Project One.
              </p>
              <p className="text-muted-foreground">Technologies: React, Node.js</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Project Two</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-2">
                A brief description of Project Two.
              </p>
              <p className="text-muted-foreground">Technologies: Vue, Firebase</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Project Three</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-2">
                A brief description of Project Three.
              </p>
              <p className="text-muted-foreground">Technologies: Angular, AWS</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="container mx-auto py-16">
        <h2 className="text-3xl font-bold mb-4">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="text-center">
            <img
              src="/images/skills/react.png"
              alt="React"
              className="mx-auto w-12 h-12 mb-2"
            />
            <p className="text-muted-foreground">React</p>
          </div>
          <div className="text-center">
            <img
              src="/images/skills/node.png"
              alt="Node.js"
              className="mx-auto w-12 h-12 mb-2"
            />
            <p className="text-muted-foreground">Node.js</p>
          </div>
          <div className="text-center">
            <img
              src="/images/skills/vue.png"
              alt="Vue"
              className="mx-auto w-12 h-12 mb-2"
            />
            <p className="text-muted-foreground">Vue</p>
          </div>
          <div className="text-center">
            <img
              src="/images/skills/angular.png"
              alt="Angular"
              className="mx-auto w-12 h-12 mb-2"
            />
            <p className="text-muted-foreground">Angular</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto py-16">
        <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-muted-foreground">
              Name
            </label>
            <Input id="name" type="text" required />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-muted-foreground">
              Email
            </label>
            <Input id="email" type="email" required />
          </div>
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-muted-foreground">
              Subject
            </label>
            <Input id="subject" type="text" required />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-muted-foreground">
              Message
            </label>
            <Textarea id="message" rows="4" required />
          </div>
          <Button type="submit" variant="primary">
            Submit
          </Button>
        </form>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 bg-white">
        <div className="container mx-auto">
          <div className="flex justify-center space-x-4 mb-4">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src="/images/social/linkedin.png" alt="LinkedIn" className="w-6 h-6" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <img src="/images/social/github.png" alt="GitHub" className="w-6 h-6" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src="/images/social/twitter.png" alt="Twitter" className="w-6 h-6" />
            </a>
          </div>
          <p className="text-muted-foreground">&copy; 2023 John Doe. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Index;