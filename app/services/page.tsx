"use client"

import { Phone, Smartphone, ArrowRight, Shield, Laptop, CheckCircle, MessageCircle, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navigation from "@/components/navigation"
import { decodeLink } from "@/lib/utils"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-600 text-white overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white opacity-10 rounded-full"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white opacity-10 rounded-full"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <Badge className="mb-4 bg-white/20 text-white hover:bg-white/30">Our Services</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Complete Gadget Solutions</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
              From buying to selling, swapping to repairing - we provide comprehensive gadget services designed to meet
              all your technology needs
            </p>
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold">
              <Phone className="mr-2 h-5 w-5" />
              Get Started Today
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">What We Offer</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Choose the service that best fits your needs</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* Buy & Sell */}
            <Card className="border-gray-200 shadow-lg hover:shadow-xl transition-all overflow-hidden group">
              <CardHeader className="bg-gradient-to-r from-orange-50 to-amber-50 border-b">
                <div className="flex items-center gap-4">
                  <div className="bg-orange-100 w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Smartphone className="h-8 w-8 text-orange-600" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Buy & Sell Gadgets</CardTitle>
                    <Badge className="mt-2 bg-green-100 text-green-800">Most Popular</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-8">
                <p className="text-gray-600 mb-6 text-lg">
                  Wide selection of brand new and UK-used phones, laptops, smartwatches, and accessories with quality
                  guarantee.
                </p>
                <div className="space-y-3 mb-8">
                  {[
                    "Brand new and UK-used options",
                    "Quality guaranteed products",
                    "Competitive pricing",
                    "Wide variety of brands",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
                <Button className="w-full bg-orange-600 hover:bg-orange-700 font-semibold" asChild>
                  <a href="/contact">
                    Browse Gadgets
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Swap */}
            <Card className="border-gray-200 shadow-lg hover:shadow-xl transition-all overflow-hidden group">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-cyan-50 border-b">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <ArrowRight className="h-8 w-8 text-blue-600" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Swap Your Gadget</CardTitle>
                    <Badge className="mt-2 bg-blue-100 text-blue-800">Hassle-Free</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-8">
                <p className="text-gray-600 mb-6 text-lg">
                  Easy trade-in options to upgrade your device hassle-free with fair valuations and transparent pricing.
                </p>
                <div className="space-y-3 mb-8">
                  {["Fair device valuation", "Quick swap process", "Upgrade to latest models", "No hidden charges"].map(
                    (item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ),
                  )}
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 font-semibold" asChild>
                  <a href="https://wa.me/2347062300213" target="_blank" rel="noopener noreferrer">
                    Get Swap Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Repairs */}
            <Card className="border-gray-200 shadow-lg hover:shadow-xl transition-all overflow-hidden group">
              <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50 border-b">
                <div className="flex items-center gap-4">
                  <div className="bg-green-100 w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Shield className="h-8 w-8 text-green-600" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Repairs & Maintenance</CardTitle>
                    <Badge className="mt-2 bg-green-100 text-green-800">Expert Service</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-8">
                <p className="text-gray-600 mb-6 text-lg">
                  Fast, reliable repairs for phones and laptops using genuine parts with comprehensive warranty
                  coverage.
                </p>
                <div className="space-y-3 mb-8">
                  {[
                    "Genuine replacement parts",
                    "Expert technicians",
                    "Fast turnaround time",
                    "Repair warranty included",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
                <Button className="w-full bg-green-600 hover:bg-green-700 font-semibold" asChild>
                  <a href="https://wa.me/2347062300213" target="_blank" rel="noopener noreferrer">
                    Book Repair Service
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Laptop Services */}
            <Card className="border-gray-200 shadow-lg hover:shadow-xl transition-all overflow-hidden group">
              <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50 border-b">
                <div className="flex items-center gap-4">
                  <div className="bg-purple-100 w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Laptop className="h-8 w-8 text-purple-600" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Laptop Sales & Repairs</CardTitle>
                    <Badge className="mt-2 bg-purple-100 text-purple-800">New Service</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-8">
                <p className="text-gray-600 mb-6 text-lg">
                  Quality laptops and professional repair services to keep you connected and productive every day.
                </p>
                <div className="space-y-3 mb-8">
                  {[
                    "Quality laptop sales",
                    "Professional repairs",
                    "Hardware & software issues",
                    "Data recovery services",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
                <Button className="w-full bg-purple-600 hover:bg-purple-700 font-semibold" asChild>
                  <a href="/contact">
                    Explore Laptops
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Products Showcase */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-orange-100 text-orange-800 hover:bg-orange-200">Featured Products</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Latest Gadgets in Stock</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Browse through our collection of trending gadgets</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "iPhone 15 Pro max",
                img: "/images/15-pro-max.jpg",
              },
              {
                name: "Samsung S24 Ultra",
                img: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&h=400&fit=crop",
              },
              {
                name: "MacBook Pro M3",
                img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop",
              },
              {
                name: "iPad Air 2024",
                img: "/images/Ipad Air.jpg",
              },
            ].map((item, i) => (
              <Card
                key={i}
                className="border-gray-200 hover:border-orange-500 hover:shadow-xl transition-all overflow-hidden group"
              >
                <CardContent className="p-0">
                  <div className="aspect-square bg-gray-100 overflow-hidden">
                    <img
                      src={item.img || "/placeholder.svg"}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.name}</h3>
                    <Button size="sm" className="w-full bg-orange-600 hover:bg-orange-700" asChild>
                      <a
                        href={`https://wa.me/2347062300213?text=I'm%20interested%20in%20the%20${item.name}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Inquire Now
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">Can't find what you're looking for? We have many more in stock!</p>
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 font-semibold">
              <Phone className="mr-2 h-5 w-5" />
              Call for More Options: 0706 230 0213
            </Button>
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Why Our Services Stand Out</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: "Lightning Fast", desc: "Quick turnaround times on all services" },
              { icon: Shield, title: "Quality Assured", desc: "Genuine parts and expert workmanship" },
              { icon: CheckCircle, title: "100% Warranty", desc: "All repairs come with warranty coverage" },
            ].map((item, i) => (
              <Card key={i} className="border-gray-200 hover:border-orange-500 hover:shadow-lg transition-all group">
                <CardContent className="p-8 text-center">
                  <div className="bg-orange-100 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <item.icon className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready for Expert Gadget Service?</h2>
          <p className="text-xl mb-10 opacity-90">
            Contact us today for fast, affordable, and reliable gadget services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold">
              <Phone className="mr-2 h-5 w-5" />
              Call: 0706 230 0213
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/20 bg-transparent font-semibold"
              asChild
            >
              <a href="https://wa.me/2347062300213" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp Business
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-bold text-orange-400 mb-4">ENEX GADGETS</h3>
              <p className="text-gray-400">Your trusted gadget plug in Lagos, Nigeria.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Buy & Sell Gadgets</li>
                <li>Gadget Swapping</li>
                <li>Repairs & Maintenance</li>
                <li>Laptop Services</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>iPhones & Samsungs</li>
                <li>iPads & Laptops</li>
                <li>Smartwatches</li>
                <li>AirPods & Accessories</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-gray-400 text-sm">
                <p>📍 11 Shomoye Osundiro Street, Foramot Plaza, Shop 004, Computer Village, Ikeja, Lagos</p>
                <p>
                  📞{" "}
                  <a href="tel:07062300213" className="hover:text-orange-400">
                    0706 230 0213
                  </a>
                </p>
                <p>
                  💬{" "}
                  <a
                    href="https://wa.me/2347062300213"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-orange-400"
                  >
                    WhatsApp Business
                  </a>
                </p>
                <p>
                  📸{" "}
                  <a
                    href={decodeLink("aHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9lbmV4X2dhZGdldHNfMDAxLw==")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-orange-400"
                  >
                    @enexgadgets
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 ENEX GADGETS. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
