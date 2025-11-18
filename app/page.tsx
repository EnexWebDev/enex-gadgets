import {
  Phone,
  MessageCircle,
  Smartphone,
  Laptop,
  Watch,
  ArrowRight,
  Star,
  Shield,
  Clock,
  Users,
  Zap,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navigation from "@/components/navigation"
import { decodeLink } from "@/lib/utils"
export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section - Enhanced */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-600 via-orange-500 to-amber-600 text-white overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white opacity-10 rounded-full"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white opacity-10 rounded-full"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/30">
                <span className="text-sm font-semibold">🚀 Lagos' #1 Gadget Hub</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">Your Trusted Gadget Plug in Lagos</h1>
              <p className="text-xl opacity-90 mb-8">
                Buy • Sell • Swap • Repair - All in one place with fast, affordable, and reliable service
              </p>

              <div className="flex flex-wrap gap-4 mb-8 text-sm font-medium">
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                  <Smartphone className="h-4 w-4" />
                  iPhones & Samsungs
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                  <Laptop className="h-4 w-4" />
                  Laptops
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                  <Watch className="h-4 w-4" />
                  Smartwatches
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 font-semibold" asChild>
                  <a href="/contact">
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 font-semibold bg-transparent"
                  asChild
                >
                  <a href="https://wa.me/2347062300213" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Chat on WhatsApp
                  </a>
                </Button>
              </div>

              <div className="flex gap-6">
                <div className="flex items-center gap-2 text-sm">
                  <Zap className="h-5 w-5" />
                  <span>Fast Service</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Shield className="h-5 w-5" />
                  <span>Trusted Quality</span>
                </div>
              </div>
            </div>

            {/* Right Side - Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 transition-all">
                <div className="text-4xl font-bold mb-2">1000+</div>
                <p className="text-sm opacity-80">Happy Customers</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 transition-all">
                <div className="text-4xl font-bold mb-2">500+</div>
                <p className="text-sm opacity-80">Devices Fixed</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 transition-all">
                <div className="text-4xl font-bold mb-2">10+</div>
                <p className="text-sm opacity-80">Years Experience</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 transition-all">
                <div className="text-4xl font-bold mb-2">24/7</div>
                <p className="text-sm opacity-80">Available</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Service Banner */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-50 to-emerald-50 border-b">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <Badge className="mb-4 bg-white/20 text-white hover:bg-white/30">New Service</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">🎉 Laptop Sales & Repairs Now Available!</h2>
              <p className="text-lg opacity-90">
                Quality laptops and professional repair services to keep you productive
              </p>
            </div>
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-green-600 hover:bg-gray-100 font-semibold flex-shrink-0"
            >
              <Laptop className="mr-2 h-5 w-5" />
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid - Enhanced */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-orange-100 text-orange-800 hover:bg-orange-200">Our Services</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Everything You Need in One Place</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From buying to selling, swapping to repairing - we've got all your gadget needs covered
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Buy & Sell */}
            <Card className="group border-gray-200 hover:border-orange-500 hover:shadow-xl transition-all duration-300 overflow-hidden">
              <CardContent className="p-6">
                <div className="bg-gradient-to-br from-orange-100 to-amber-100 w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Smartphone className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">Buy & Sell</h3>
                <p className="text-gray-600 mb-4">Brand new and UK-used gadgets with quality guarantee</p>
                <Button variant="link" className="text-orange-600 hover:text-orange-700 p-0 h-auto" asChild>
                  <a href="/services">
                    Explore
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Swap */}
            <Card className="group border-gray-200 hover:border-blue-500 hover:shadow-xl transition-all duration-300 overflow-hidden">
              <CardContent className="p-6">
                <div className="bg-gradient-to-br from-blue-100 to-cyan-100 w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <ArrowRight className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">Swap Gadgets</h3>
                <p className="text-gray-600 mb-4">Easy trade-in with fair valuations and zero hassle</p>
                <Button variant="link" className="text-blue-600 hover:text-blue-700 p-0 h-auto" asChild>
                  <a href="/services">
                    Get Quote
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Repairs */}
            <Card className="group border-gray-200 hover:border-green-500 hover:shadow-xl transition-all duration-300 overflow-hidden">
              <CardContent className="p-6">
                <div className="bg-gradient-to-br from-green-100 to-emerald-100 w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Shield className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">Repairs</h3>
                <p className="text-gray-600 mb-4">Expert repairs using genuine parts with warranty</p>
                <Button variant="link" className="text-green-600 hover:text-green-700 p-0 h-auto" asChild>
                  <a href="/services">
                    Book Now
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Laptops */}
            <Card className="group border-gray-200 hover:border-purple-500 hover:shadow-xl transition-all duration-300 overflow-hidden">
              <CardContent className="p-6">
                <div className="bg-gradient-to-br from-purple-100 to-pink-100 w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Laptop className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">Laptops</h3>
                <p className="text-gray-600 mb-4">Quality laptops and professional repair services</p>
                <Button variant="link" className="text-purple-600 hover:text-purple-700 p-0 h-auto" asChild>
                  <a href="/services">
                    Browse
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Enhanced */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">Why Us</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Why Choose ENEX GADGETS?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're committed to providing the best gadget experience in Lagos
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Clock, title: "Fast Service", desc: "Quick turnaround times" },
              { icon: Star, title: "Affordable", desc: "Competitive pricing" },
              { icon: Shield, title: "Reliable", desc: "Trusted by 1000+ customers" },
              { icon: Users, title: "Expert Team", desc: "Skilled technicians" },
            ].map((item, i) => (
              <Card key={i} className="group border-gray-300 hover:border-orange-500 hover:shadow-lg transition-all">
                <CardContent className="p-6 text-center">
                  <div className="bg-orange-100 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <item.icon className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-200">Featured</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Popular Gadgets in Stock</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Check out our latest arrivals and bestsellers</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "iPhone 17 pro max", price: "₦1.1m+", img: "/images/17-pro-max.jpg"},
              { name: "MacBook Air M2", price: "₦1.2m+", img: "/images/Mac-book.jpg"},
              { name: "Samsung S24", price: "₦450k+", img: "/images/S24-ULTRA.jpg"},
              { name: "iPad Pro", price: "₦600k+", img: "/images/ipad-pro.jpg"}
            ].map((product, i) => (
              <Card
                key={i}
                className="group border-gray-200 hover:border-orange-500 hover:shadow-xl transition-all overflow-hidden"
              >
                <CardContent className="p-6">
                  {/* product image - replace placeholders in /public/images or use your CDN links */}
                  <div className="w-full h-48 rounded-xl mb-4 overflow-hidden bg-gray-100">
                    <img
                      src={product.img}
              
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-xl font-bold text-orange-600 mb-4">{product.price}</p>
                  <Button size="sm" className="w-full bg-orange-600 hover:bg-orange-700" asChild>
                    <a href="https://wa.me/2347062300213" target="_blank" rel="noopener noreferrer">
                      Inquire
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700" asChild>
              <a href="/services">
                View All Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-orange-50 border-y">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            {[
              { number: "1000+", label: "Happy Customers" },
              { number: "500+", label: "Devices Repaired" },
              { number: "100%", label: "Satisfaction Rate" },
              { number: "24/7", label: "Customer Support" },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">{stat.number}</div>
                <p className="text-gray-700 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-600 to-amber-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl opacity-90 mb-10">
            Contact us today for all your gadget needs - UK-Used & Brand New available!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-orange-600 hover:bg-gray-100 font-semibold">
              <Phone className="mr-2 h-5 w-5" />
              0706 230 0213
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
