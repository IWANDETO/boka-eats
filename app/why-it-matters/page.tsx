import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function WhyItMattersPage() {
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
                  className="text-muted-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
                >
                  What We Do
                </Link>
                <Link
                  href="/why-it-matters"
                  className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
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
              Why It <span className="text-primary">Matters</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Understanding the critical challenges we're addressing and the impact we're making together.
            </p>
          </div>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">The Numbers Tell the Story</h2>
            <p className="text-xl text-muted-foreground">These statistics drive our mission every day</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-destructive/5 border-destructive/20 text-center">
              <CardContent className="p-8">
                <div className="text-6xl md:text-7xl font-bold text-destructive mb-4">40%</div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Food Waste Crisis</h3>
                <p className="text-muted-foreground">
                  Of bananas in Kenya go to waste every year due to poor post-harvest handling and limited market access
                </p>
              </CardContent>
            </Card>

            <Card className="bg-destructive/5 border-destructive/20 text-center">
              <CardContent className="p-8">
                <div className="text-6xl md:text-7xl font-bold text-destructive mb-4">30%</div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Youth Unemployment</h3>
                <p className="text-muted-foreground">
                  Rural youth unemployment remains alarmingly high, with limited opportunities for meaningful work
                </p>
              </CardContent>
            </Card>

            <Card className="bg-destructive/5 border-destructive/20 text-center">
              <CardContent className="p-8">
                <div className="text-6xl md:text-7xl font-bold text-destructive mb-4">60%</div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Food Insecurity</h3>
                <p className="text-muted-foreground">
                  Of rural households lack consistent access to nutritious, affordable food options
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">The Challenge We Face</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="bg-card border-border">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-6">Food Waste Impact</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-4 h-4 bg-destructive rounded-full flex-shrink-0"></div>
                      <p className="text-foreground">Millions of bananas wasted annually</p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-4 h-4 bg-destructive rounded-full flex-shrink-0"></div>
                      <p className="text-foreground">Lost income for smallholder farmers</p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-4 h-4 bg-destructive rounded-full flex-shrink-0"></div>
                      <p className="text-foreground">Environmental impact from decomposing waste</p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-4 h-4 bg-destructive rounded-full flex-shrink-0"></div>
                      <p className="text-foreground">Missed opportunities for value addition</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="bg-card border-border">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-6">Social Challenges</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-4 h-4 bg-destructive rounded-full flex-shrink-0"></div>
                      <p className="text-foreground">Limited job opportunities for youth</p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-4 h-4 bg-destructive rounded-full flex-shrink-0"></div>
                      <p className="text-foreground">Gender inequality in employment</p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-4 h-4 bg-destructive rounded-full flex-shrink-0"></div>
                      <p className="text-foreground">Lack of access to healthy, affordable food</p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-4 h-4 bg-destructive rounded-full flex-shrink-0"></div>
                      <p className="text-foreground">Rural-urban economic disparity</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Impact */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Impact So Far</h2>
            <p className="text-xl text-muted-foreground">Every product sold creates positive change</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <Card className="bg-primary/5 border-primary/20 text-center">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-primary mb-2">2,500+</div>
                <p className="text-muted-foreground">Kilograms of bananas rescued</p>
              </CardContent>
            </Card>

            <Card className="bg-accent/5 border-accent/20 text-center">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-accent mb-2">150+</div>
                <p className="text-muted-foreground">Farmers supported</p>
              </CardContent>
            </Card>

            <Card className="bg-secondary/5 border-secondary/20 text-center">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-secondary mb-2">75+</div>
                <p className="text-muted-foreground">Jobs created</p>
              </CardContent>
            </Card>

            <Card className="bg-primary/5 border-primary/20 text-center">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-primary mb-2">5,000+</div>
                <p className="text-muted-foreground">Families reached</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Consumers Need This */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Consumers Need This</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-background border-border">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🥗</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Healthy Options</h3>
                <p className="text-muted-foreground">
                  Consumers need healthy, affordable food options that don't compromise on nutrition or taste.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background border-border">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌍</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Sustainable Choices</h3>
                <p className="text-muted-foreground">
                  More people want to make purchasing decisions that positively impact the environment and communities.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background border-border">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💝</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Meaningful Impact</h3>
                <p className="text-muted-foreground">
                  Every purchase supports farmers, creates jobs, and contributes to a more sustainable food system.
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
            Every BOKA EATS product you buy supports a more sustainable, inclusive food system. Together, we can
            transform challenges into opportunities.
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
              <Link href="/get-involved">Join Our Mission</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* The Ripple Effect */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">The Ripple Effect</h2>
            <p className="text-xl text-muted-foreground">How your purchase creates lasting change</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-card border-border text-center">
              <CardContent className="p-6">
                <div className="text-2xl font-bold text-primary mb-2">1</div>
                <h3 className="text-lg font-semibold text-foreground mb-2">You Buy</h3>
                <p className="text-muted-foreground text-sm">Purchase healthy BOKA EATS products for your family</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border text-center">
              <CardContent className="p-6">
                <div className="text-2xl font-bold text-accent mb-2">2</div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Farmers Benefit</h3>
                <p className="text-muted-foreground text-sm">
                  Smallholder farmers receive fair prices for surplus bananas
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border text-center">
              <CardContent className="p-6">
                <div className="text-2xl font-bold text-secondary mb-2">3</div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Jobs Created</h3>
                <p className="text-muted-foreground text-sm">Youth and women gain dignified employment opportunities</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border text-center">
              <CardContent className="p-6">
                <div className="text-2xl font-bold text-primary mb-2">4</div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Communities Thrive</h3>
                <p className="text-muted-foreground text-sm">
                  Entire communities benefit from reduced waste and increased income
                </p>
              </CardContent>
            </Card>
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
            <p className="text-muted-foreground">© 2024 BOKA EATS. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
