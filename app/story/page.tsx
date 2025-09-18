import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function StoryPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/">
                <h1 className="text-2xl font-bold text-primary">BOKA EATS</h1>
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </Link>
                <Link
                  href="/story"
                  className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
                >
                  Our Story
                </Link>
                <Link
                  href="/what-we-do"
                  className="text-muted-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
                >
                  What We Do
                </Link>
                <Link
                  href="/why-it-matters"
                  className="text-muted-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
                >
                  Why It Matters
                </Link>
                <Link
                  href="/get-involved"
                  className="text-muted-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
                >
                  Get Involved
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary/10 to-accent/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Turning Bananas Into <span className="text-primary">Opportunity</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              At BOKA EATS, we believe no good food should go to waste.
            </p>
          </div>
        </div>
      </section>

      {/* Story Content */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {/* The Problem */}
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h2 className="text-3xl font-bold text-foreground mb-6">The Challenge We Saw</h2>
                    <p className="text-foreground leading-relaxed mb-4">
                      Based in Kisii County, Kenya, we saw local farmers losing income because up to 40% of bananas are
                      rejected or wasted due to poor market access or post-harvest losses.
                    </p>
                    <p className="text-foreground leading-relaxed">
                      At the same time, communities were struggling with youth unemployment and limited access to
                      healthy, affordable food.
                    </p>
                  </div>
                  <div className="bg-muted/30 p-6 rounded-lg">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-destructive rounded-full"></div>
                        <span className="text-foreground font-medium">40% banana waste</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-destructive rounded-full"></div>
                        <span className="text-foreground font-medium">Poor market access</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-destructive rounded-full"></div>
                        <span className="text-foreground font-medium">Youth unemployment</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-destructive rounded-full"></div>
                        <span className="text-foreground font-medium">Limited healthy food access</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Our Decision */}
            <div className="text-center py-8">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">We Set Out to Change That</h2>
              <div className="w-24 h-1 bg-primary mx-auto"></div>
            </div>

            {/* Our Solution */}
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-foreground mb-6 text-center">Our Solution Today</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-4">Food Products</h3>
                    <p className="text-foreground leading-relaxed mb-4">
                      Today, BOKA EATS transforms surplus bananas into nutritious, delicious products like:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-foreground">Banana crisps</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-foreground">Banana cookies</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-foreground">Porridge flour</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-foreground">Banana flour</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-accent mb-4">Beyond Food</h3>
                    <p className="text-foreground leading-relaxed mb-4">
                      But we go beyond food—we use by-products to create additional value:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span className="text-foreground">Black soldier fly farming</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span className="text-foreground">High-protein animal feed</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span className="text-foreground">Organic fertilizer for local farms</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Mission Statement */}
            <div className="text-center bg-muted/30 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
              <p className="text-lg text-foreground leading-relaxed max-w-3xl mx-auto">
                We transform surplus bananas into opportunity, creating sustainable livelihoods for farmers, meaningful
                employment for youth and women, and nutritious food options for communities across Kenya and beyond.
              </p>
            </div>

            {/* Call to Action */}
            <div className="text-center py-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Join Our Journey</h3>
              <p className="text-muted-foreground mb-6">
                Every product you buy supports our mission to reduce waste and create opportunity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/what-we-do">See What We Do</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                >
                  <Link href="/get-involved">Get Involved</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold text-primary mb-4">BOKA EATS</h3>
              <p className="text-muted-foreground">
                Transforming surplus bananas into opportunity for farmers and communities in Kenya.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/story" className="text-muted-foreground hover:text-primary">
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link href="/what-we-do" className="text-muted-foreground hover:text-primary">
                    What We Do
                  </Link>
                </li>
                <li>
                  <Link href="/why-it-matters" className="text-muted-foreground hover:text-primary">
                    Why It Matters
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-4">Products</h4>
              <ul className="space-y-2">
                <li>
                  <span className="text-muted-foreground">Banana Crisps</span>
                </li>
                <li>
                  <span className="text-muted-foreground">Banana Cookies</span>
                </li>
                <li>
                  <span className="text-muted-foreground">Banana Flour</span>
                </li>
                <li>
                  <span className="text-muted-foreground">Porridge Flour</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-4">Contact</h4>
              <ul className="space-y-2">
                <li>
                  <span className="text-muted-foreground">eatsboka@gmail.com</span>
                </li>
                <li>
                  <span className="text-muted-foreground">+254 719 833 700</span>
                </li>
                <li>
                  <span className="text-muted-foreground">Kisii County, Kenya</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center">
            <p className="text-muted-foreground">© 2025 BOKA EATS. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
