import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function GetInvolvedPage() {
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
                  className="text-muted-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
                >
                  Why It Matters
                </Link>
                <Link
                  href="/get-involved"
                  className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
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
              Get <span className="text-primary">Involved</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Join us in reducing food waste and creating impact. There are many ways you can support BOKA EATS and
              become part of our mission.
            </p>
          </div>
        </div>
      </section>

      {/* Ways to Get Involved */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Ways to Support Our Mission</h2>
            <p className="text-xl text-muted-foreground">
              Transform banana waste into nutritious products, jobs, and opportunity across rural Kenya
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="bg-primary/5 border-primary/20 hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🛒</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Buy Our Products</h3>
                <p className="text-muted-foreground mb-4">
                  Support us by purchasing our healthy banana-based snacks and flours. Every purchase makes a
                  difference.
                </p>
                <Button className="bg-primary hover:bg-primary/90">Shop Now</Button>
              </CardContent>
            </Card>

            <Card className="bg-accent/5 border-accent/20 hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏪</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Become a Retailer</h3>
                <p className="text-muted-foreground mb-4">
                  Stock our products in your shop, school, or supermarket. Join our growing network of partners.
                </p>
                <Button
                  variant="outline"
                  className="border-accent text-accent hover:bg-accent hover:text-white bg-transparent"
                >
                  Partner With Us
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-secondary/5 border-secondary/20 hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Invest or Donate</h3>
                <p className="text-muted-foreground mb-4">
                  Support our mission with investment or donations to help us scale our impact across Kenya.
                </p>
                <Button
                  variant="outline"
                  className="border-secondary text-secondary hover:bg-secondary hover:text-white bg-transparent"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-primary/5 border-primary/20 hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">👨‍🌾</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Farmer Partnerships</h3>
                <p className="text-muted-foreground mb-4">
                  Are you a banana farmer? Join our network and turn your surplus bananas into steady income.
                </p>
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-white bg-transparent"
                >
                  Apply Now
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-accent/5 border-accent/20 hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📢</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Spread the Word</h3>
                <p className="text-muted-foreground mb-4">
                  Help us reach more people by sharing our story and mission with your network and community.
                </p>
                <Button
                  variant="outline"
                  className="border-accent text-accent hover:bg-accent hover:text-white bg-transparent"
                >
                  Share Our Story
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-secondary/5 border-secondary/20 hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎓</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Educational Programs</h3>
                <p className="text-muted-foreground mb-4">
                  Partner with us for educational programs about sustainability, nutrition, and food waste reduction.
                </p>
                <Button
                  variant="outline"
                  className="border-secondary text-secondary hover:bg-secondary hover:text-white bg-transparent"
                >
                  Collaborate
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Where to Find Our Products */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Where to Find Our Products</h2>
            <p className="text-xl text-muted-foreground">You can find BOKA EATS products at these locations</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-6">Major Retailers</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-foreground">Gurdmart Supermarket</h4>
                      <p className="text-muted-foreground">Kisii & Nyamira branches</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-accent mb-6">Local Stores</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-foreground">Mini-marts</h4>
                      <p className="text-muted-foreground">
                        Available in all mini-marts in Kisii, Nyamira, and some parts of Homabay and Narok county
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Become a Retailer */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-8 text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4">Want to Stock Our Products?</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Join our growing network of retailers and bring healthy, sustainable products to your customers.
              </p>
              <div className="bg-background p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">Perfect for:</h3>
                <div className="grid md:grid-cols-3 gap-4 text-left">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground">Supermarkets</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground">Schools</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground">Mini-marts</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground">Health stores</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground">Cafeterias</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground">Wholesalers</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <a href="mailto:eatsboka@gmail.com">Email Us</a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                >
                  <a href="tel:+254719833700">Call +254 719 833 700</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Get in Touch</h2>
            <p className="text-xl text-muted-foreground">Ready to join our mission? We'd love to hear from you.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-background border-border text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📧</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Email Us</h3>
                <p className="text-muted-foreground mb-4">For partnerships, orders, and general inquiries</p>
                <a href="mailto:eatsboka@gmail.com" className="text-primary hover:text-primary/80 font-medium">
                  eatsboka@gmail.com
                </a>
              </CardContent>
            </Card>

            <Card className="bg-background border-border text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📞</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Call Us</h3>
                <p className="text-muted-foreground mb-4">Speak directly with our team</p>
                <a href="tel:+254719833700" className="text-accent hover:text-accent/80 font-medium">
                  +254 719 833 700
                </a>
              </CardContent>
            </Card>

            <Card className="bg-background border-border text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📍</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Visit Us</h3>
                <p className="text-muted-foreground mb-4">Our operations are based in</p>
                <span className="text-secondary font-medium">Kisii County, Kenya</span>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-16 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Ready to Make a Difference?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of people who are already supporting sustainable food systems and creating opportunities for
            rural communities in Kenya.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Start Shopping
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
            >
              <a href="mailto:eatsboka@gmail.com">Contact Us Today</a>
            </Button>
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
