import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function WhatWeDoPage() {
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
                  className="text-muted-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
                >
                  Our Story
                </Link>
                <Link
                  href="/what-we-do"
                  className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
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
              What We <span className="text-primary">Do</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Transforming surplus bananas into delicious, healthy products while creating value from waste through our
              circular model.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {/* Our Process */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">Our Process</h2>
              <Card className="bg-card border-border">
                <CardContent className="p-8">
                  <p className="text-lg text-foreground leading-relaxed text-center mb-8">
                    At BOKA EATS, we transform surplus bananas from local smallholder farmers into delicious, healthy
                    products like banana crisps, cookies, and banana flour.
                  </p>
                  <p className="text-lg text-foreground leading-relaxed text-center">
                    We don't just reduce food waste—we create value from it. Through our circular model, the by-products
                    from banana processing are used to raise black soldier flies for animal feed, and produce organic
                    fertilizer for farming communities.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Our Products */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">Our Products</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <Card className="bg-card border-border hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <img src="/crisps.jpg" alt="Banana Crisps" className="w-10 h-10" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Banana Crisps</h3>
                    <p className="text-muted-foreground">
                      Crispy, nutritious snacks made from surplus bananas. Perfect for healthy snacking anytime.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <img src="/cookies.jpeg" alt="Banana Cookies" className="w-10 h-10" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Banana Cookies</h3>
                    <p className="text-muted-foreground">
                      Delicious cookies made with banana flour, providing natural sweetness and nutrition.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <img src="/flour.jpeg" alt="Banana Flour" className="w-10 h-10" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Banana Flour</h3>
                    <p className="text-muted-foreground">
                      Gluten-free flour alternative rich in potassium and fiber, perfect for baking and cooking.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <img src="/healthy-porridge-flour.png" alt="Porridge Flour" className="w-10 h-10" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Porridge Flour</h3>
                    <p className="text-muted-foreground">
                      Nutritious porridge mix for healthy breakfast options, packed with essential nutrients.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Circular Model */}
            <div className="bg-muted/30 p-8 rounded-lg">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">Our Circular Model</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="bg-background border-border">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">🍌</span>
                    </div>
                    <h3 className="text-xl font-semibold text-primary mb-3">Step 1: Transform</h3>
                    <p className="text-muted-foreground">
                      We collect surplus bananas from local farmers and transform them into nutritious food products.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-background border-border">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">🐛</span>
                    </div>
                    <h3 className="text-xl font-semibold text-accent mb-3">Step 2: Repurpose</h3>
                    <p className="text-muted-foreground">
                      By-products are used to farm black soldier flies, creating high-protein animal feed.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-background border-border">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">🌱</span>
                    </div>
                    <h3 className="text-xl font-semibold text-secondary mb-3">Step 3: Regenerate</h3>
                    <p className="text-muted-foreground">
                      Waste is converted into organic fertilizer, supporting local farming communities.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Impact */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-8">Our Impact</h2>
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-8">
                  <p className="text-lg text-foreground leading-relaxed text-center mb-8">
                    Our work supports local farmers, creates jobs for rural youth and women, and delivers nutritious
                    food to Kenyan homes and beyond.
                  </p>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary mb-2">40%</div>
                      <p className="text-muted-foreground">Banana waste reduced</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-accent mb-2">100+</div>
                      <p className="text-muted-foreground">Farmers supported</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-secondary mb-2">50+</div>
                      <p className="text-muted-foreground">Jobs created</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Why It Matters */}
            <div className="bg-card p-8 rounded-lg border border-border">
              <h2 className="text-3xl font-bold text-foreground text-center mb-8">Why It Matters</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📊</span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Food Waste Crisis</h3>
                  <p className="text-muted-foreground">40% of bananas in Kenya go to waste every year</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">👥</span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Employment Challenge</h3>
                  <p className="text-muted-foreground">Rural youth unemployment remains alarmingly high</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🥗</span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Nutrition Gap</h3>
                  <p className="text-muted-foreground">Consumers need healthy, affordable food options</p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center bg-primary/5 p-8 rounded-lg">
              <h2 className="text-3xl font-bold text-foreground mb-4">Eat Healthy. Stay Healthy.</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Every BOKA EATS product you buy supports a more sustainable, inclusive food system.
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
                  <Link href="/get-involved">Partner With Us</Link>
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
