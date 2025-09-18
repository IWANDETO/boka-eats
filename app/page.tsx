import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-primary">BOKA EATS</h1>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/" className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                  Home
                </Link>
                <Link
                  href="/story"
                  className="text-muted-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
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
              Transforming Bananas Into <span className="text-primary">Opportunity</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              We turn surplus bananas into nutritious products while creating jobs and supporting smallholder farmers in
              rural Kenya.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Shop Our Products
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                Learn Our Story
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* The Reality Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">The Reality Right Now</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">📊</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">40% Food Waste</h3>
                    <p className="text-muted-foreground">
                      Over 40% of bananas produced by smallholder farmers in Kenya are lost due to poor post-harvest
                      handling, limited market access, and lack of value addition.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">👥</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">30% Youth Unemployment</h3>
                    <p className="text-muted-foreground">
                      Rural youth unemployment in Kenya remains above 30%, and most agribusiness opportunities are
                      underexploited due to lack of innovation, investment, and training.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Card className="bg-card border-border">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-primary mb-4">Our Solution</h3>
                  <p className="text-foreground leading-relaxed">
                    At BOKA EATS, we transform surplus and rejected bananas into nutritious, market-ready products, such
                    as banana crisps and cookies, while utilizing the by-products to produce sustainable animal feed and
                    organic fertilizer through black soldier fly farming.
                  </p>
                  <div className="mt-6 p-4 bg-primary/5 rounded-lg">
                    <p className="text-foreground font-medium">
                      Our circular model reduces food waste, supports smallholder farmers, and creates dignified jobs
                      for youth and women in rural Kenya.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Creating Real Impact</h2>
            <p className="text-xl text-muted-foreground">Every product you buy supports our mission</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center bg-card border-border">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🌱</span>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">Reduce Waste</h3>
                <p className="text-muted-foreground">
                  Transforming surplus bananas into valuable products instead of letting them go to waste
                </p>
              </CardContent>
            </Card>

            <Card className="text-center bg-card border-border">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">👨‍🌾</span>
                </div>
                <h3 className="text-2xl font-bold text-accent mb-2">Support Farmers</h3>
                <p className="text-muted-foreground">
                  Providing fair prices and reliable markets for smallholder banana farmers
                </p>
              </CardContent>
            </Card>

            <Card className="text-center bg-card border-border">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">💼</span>
                </div>
                <h3 className="text-2xl font-bold text-secondary mb-2">Create Jobs</h3>
                <p className="text-muted-foreground">
                  Generating dignified employment for youth and women in rural communities
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Eat Healthy. Stay Healthy.</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Every BOKA EATS product you buy supports a more sustainable, inclusive food system.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Shop Now
          </Button>
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
