import Link from "next/link";
import { Button } from "@/components/ui/button";
import { UserButton, SignedIn, SignedOut } from "@clerk/nextjs";
import {
  ArrowRight,
  BookOpen,
  Users,
  Lightbulb,
  Handshake,
} from "lucide-react";
import Image from "next/image";
import Navbar from "@/components/ui/navbar";

export default function Home() {
  return (
    <>
      {/* <header className="border-b fixed top-0 left-0 right-0 z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Handshake className="h-6 w-6" />
            <span className="font-bold text-xl">SkillSwap</span>
          </Link>
          <div className="flex items-center space-x-4">
            <SignedIn>
              <Link href="/dashboard">
                <Button variant="ghost">Dashboard</Button>
              </Link>
              <Link href="/skills">
                <Button variant="ghost">Browse Skills</Button>
              </Link>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
            <SignedOut>
              <Link href="/sign-in">
                <Button variant="ghost">Sign In</Button>
              </Link>
              <Link href="/sign-up">
                <Button variant="default">Get Started</Button>
              </Link>
            </SignedOut>
          </div>
        </div>
      </header> */}

      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="w-full min-h-[800px] flex items-center justify-center relative">
          <div className="w-full h-full absolute top-0 left-0">
            <div className="w-full h-full">
              <img
                src="/assets/backgrounds/bg2.png"
                alt="Hero Image"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="relative flex flex-col md:flex-row md:items-center justify-center md:justify-between gap-4">
            <div className="w-full flex justify-center">
              <img
                src="/assets/backgrounds/bg1.png"
                alt="Hero Image"
                className="w-[60%] h-[50%] md:w-[100%] md:h-[100%] object-cover"
              />
            </div>
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-6xl md:text-6xl font-bold mb-6">
                Share Skills, Grow Together
              </h1>
              <p className="text-xl text-neutral-100 mb-10 max-w-3xl mx-auto">
                Connect with people in your community to exchange skills and
                knowledge. Teach what you know, learn what you don't.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <SignedOut>
                  <Link href="/sign-up">
                    <Button
                      size="lg"
                      className="w-full sm:w-auto hover:scale-105 transition-all duration-300"
                    >
                      Join SkillSwap <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </SignedOut>
                <Link href="/skills">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto text-white bg-gradient-to-r from-blue-500 to-teal-400 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                  >
                    Browse Skills
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20   h-auto md:h-[650px]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 md:mb-28">
              How It Works
            </h2>
            <div className="grid md:grid-cols-3 mt-10 gap-10">
              <div className="bg-card rounded-lg p-6 text-center shadow-sm">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Share Your Skills
                </h3>
                <p className="text-muted-foreground text-gray-600">
                  List the skills you're willing to teach others. Whether it's
                  coding, cooking, or carpentry, your knowledge is valuable.
                </p>
              </div>
              <div className="bg-card rounded-lg p-6 text-center shadow-sm">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Connect with Others
                </h3>
                <p className="text-muted-foreground text-gray-600">
                  Find people with complementary skills. Message them to arrange
                  skill exchange sessions.
                </p>
              </div>
              <div className="bg-card rounded-lg p-6 text-center shadow-sm">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Learn & Grow</h3>
                <p className="text-muted-foreground text-gray-600">
                  Exchange skills in person or virtually. Rate your experience
                  and build your reputation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Skill Sharing Benefits Section */}
        <section className="bg-gradient-to-r from-purple-500 to-indigo-600 py-16 h-auto md:h-[650px] flex items-center justify-around ">
          <div className="container mx-auto px-4 text-center text-white">
            <h2 className="text-4xl font-bold mb-8">
              Why Skill Sharing Matters
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Skill sharing is a powerful way to grow as a person and as a
              community. By exchanging knowledge and experience, we uplift one
              another and build stronger connections.
            </p>
            <div className="grid md:grid-cols-3 gap-10">
              <div className="bg-card text-center p-6 rounded-lg shadow-md hover:bg-gray-800 transition-all duration-300">
                <div className="mb-4">
                  <Lightbulb className="h-10 w-10 text-yellow-300 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Unlock New Opportunities
                </h3>
                <p className="text-muted-foreground">
                  Gain new skills and knowledge that can open doors to personal
                  and professional growth.
                </p>
              </div>
              <div className="bg-card text-center p-6 rounded-lg shadow-md hover:bg-gray-800 transition-all duration-300">
                <div className="mb-4">
                  <Users className="h-10 w-10 text-teal-300 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Expand Your Network
                </h3>
                <p className="text-muted-foreground">
                  Connect with people who share similar interests and passions,
                  building valuable relationships.
                </p>
              </div>
              <div className="bg-card text-center p-6 rounded-lg shadow-md hover:bg-gray-800 transition-all duration-300">
                <div className="mb-4">
                  <BookOpen className="h-10 w-10 text-blue-300 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Enhance Your Skillset
                </h3>
                <p className="text-muted-foreground">
                  Learn from others' experiences and grow your knowledge in new
                  areas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary flex items-center justify-around py-16 h-auto md:h-[650px]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to start exchanging skills?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90 text-zinc-600">
              Join our community today and discover the power of skill sharing.
            </p>
            <SignedOut>
              <Link href="/sign-up">
                <Button size="lg" variant="secondary" className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:scale-105 transition-all duration-300 text-white ">
                  Create Your Account
                </Button>
              </Link>
            </SignedOut>
            <SignedIn>
              <Link href="/dashboard">
                <Button size="lg" variant="secondary">
                  Go to Dashboard
                </Button>
              </Link>
            </SignedIn>
          </div>
        </section>
      </main>

      <footer className="bg-muted py-10 bg-gradient-to-r from-indigo-500 text-neutral-100 to-purple-600 h-auto">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Handshake className="h-6 w-6" />
              <span className="font-bold text-xl">SkillSwap</span>
            </div>
            <div className="flex space-x-6">
              <Link href="/about" className="text-muted-foreground hover:text-foreground">
                About
              </Link>
              <Link href="/privacy" className="text-muted-foreground hover:text-foreground">
                Privacy
              </Link>
              <Link href="/terms" className="text-muted-foreground hover:text-foreground">
                Terms
              </Link>
              <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                Contact
              </Link>
            </div>
          </div>
          <div className="mt-8 text-center text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} SkillSwap. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
