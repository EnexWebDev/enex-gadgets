import { Phone, Instagram, MapPin, Users, Award, Clock, Shield, MessageCircle, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navigation from "@/components/navigation"
import { decodeLink } from "@/lib/utils"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-600 via-purple-500 to-pink-600 text-white overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white opacity-10 rounded-full"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white opacity-10 rounded-full"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <Badge className="mb-4 bg-white/20 text-white hover:bg-white/30">About Us</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About ENEX GADGETS</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Your trusted technology partner in the heart of Lagos - Dedicated to providing fast, affordable, and
              reliable gadget services
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-200">Our Story</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Who We Are</h2>
              <div className="space-y-4 text-gray-600 text-lg mb-8">
                <p>
                  Located at{" "}
                  <strong>11 Shomoye Osundiro Street, Foramot Plaza, Shop 004, Computer Village, Ikeja, Lagos</strong>,
                  ENEX Gadgets is your trusted gadget hub for buying, selling, swapping, and repairing electronics.
                </p>
                <p>
                  We pride ourselves on <strong>fast, affordable, and reliable service</strong>, backed by expert
                  technicians and an unwavering commitment to customer satisfaction.
                </p>
                <p>
                  Whether you're looking to upgrade your device, need a quick repair, or want to sell your old gadget,
                  we're here to provide professional service with a personal touch.
                </p>
              </div>
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 font-semibold">
                <Phone className="mr-2 h-5 w-5" />
                Get in Touch
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Card className="border-gray-200 hover:border-purple-500 hover:shadow-xl transition-all overflow-hidden group">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-purple-600 mb-2 group-hover:scale-110 transition-transform inline-block">
                    1000+
                  </div>
                  <p className="text-gray-700 font-medium">Happy Customers</p>
                </CardContent>
              </Card>
              <Card className="border-gray-200 hover:border-purple-500 hover:shadow-xl transition-all overflow-hidden group">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-purple-600 mb-2 group-hover:scale-110 transition-transform inline-block">
                    500+
                  </div>
                  <p className="text-gray-700 font-medium">Devices Fixed</p>
                </CardContent>
              </Card>
              <Card className="border-gray-200 hover:border-purple-500 hover:shadow-xl transition-all overflow-hidden group">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-purple-600 mb-2 group-hover:scale-110 transition-transform inline-block">
                    10+
                  </div>
                  <p className="text-gray-700 font-medium">Years Experience</p>
                </CardContent>
              </Card>
              <Card className="border-gray-200 hover:border-purple-500 hover:shadow-xl transition-all overflow-hidden group">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-purple-600 mb-2 group-hover:scale-110 transition-transform inline-block">
                    100%
                  </div>
                  <p className="text-gray-700 font-medium">Satisfaction</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Location Card */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 border-y">
        <div className="max-w-7xl mx-auto">
          <Card className="border-gray-300 shadow-lg overflow-hidden">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="p-8 lg:p-12 bg-gradient-to-br from-purple-50 to-pink-50">
                  <div className="flex items-center gap-3 mb-6">
                    <MapPin className="h-8 w-8 text-purple-600" />
                    <h3 className="text-2xl font-bold text-gray-900">Our Location</h3>
                  </div>
                  <div className="space-y-4 mb-8">
                    <div className="text-lg text-gray-700">
                      <p className="font-semibold mb-2">ENEX GADGETS</p>
                      <p className="text-gray-600">11 Shomoye Osundiro Street</p>
                      <p className="text-gray-600">Foramot Plaza, Shop 004</p>
                      <p className="text-gray-600">Computer Village, Ikeja</p>
                      <p className="text-gray-600">Lagos, Nigeria</p>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full border-purple-600 text-purple-600 hover:bg-purple-50 bg-white"
                    asChild
                  >
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=11+Shomoye+Osundiro+Street,+Foramot+Plaza,+Shop+004,+Computer+Village,+Ikeja,+Lagos"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MapPin className="mr-2 h-4 w-4" />
                      Get Directions
                    </a>
                  </Button>
                </div>
                <div className="bg-gray-300 h-64 lg:h-auto flex items-center justify-center">
                  <p className="text-gray-500 text-center">📍 Computer Village, Ikeja Lagos</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-orange-100 text-orange-800 hover:bg-orange-200">Our Values</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Why Choose ENEX GADGETS?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're committed to excellence in every interaction
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Clock, title: "Fast Service", desc: "Quick turnaround times for all services", color: "orange" },
              { icon: Award, title: "Affordable", desc: "Competitive pricing without compromise", color: "yellow" },
              { icon: Shield, title: "Reliable", desc: "Trusted by 1000+ customers across Lagos", color: "green" },
              {
                icon: Users,
                title: "Expert Team",
                desc: "Skilled technicians with years of experience",
                color: "blue",
              },
            ].map((item, i) => (
              <Card
                key={i}
                className={`group border-gray-200 hover:border-${item.color}-500 hover:shadow-xl transition-all overflow-hidden`}
              >
                <CardContent className="p-8 text-center">
                  <div
                    className={`bg-${item.color}-100 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <item.icon className={`h-8 w-8 text-${item.color}-600`} />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Promise */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Promise to You</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Transparent pricing with no hidden charges",
              "Expert repair service with warranty",
              "Fast response time on all inquiries",
              "Quality products sourced responsibly",
              "Professional and courteous service",
              "Always customer-first approach",
            ].map((promise, i) => (
              <Card key={i} className="border-gray-200 hover:border-purple-500 hover:shadow-lg transition-all">
                <CardContent className="p-6 flex gap-4">
                  <CheckCircle className="h-6 w-6 text-purple-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700 font-medium">{promise}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-200">Team</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Meet Our Experts</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our dedicated team is here to serve you with professionalism and expertise
            </p>
          </div>

          <Card className="border-gray-200 shadow-lg overflow-hidden">
            <CardContent className="p-12">
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { role: "Founder & CEO", desc: "10+ years in gadget retail and service industry" },
                  { role: "Technical Lead", desc: "Expert in phone and laptop repairs" },
                  { role: "Customer Care", desc: "Dedicated to exceptional customer service" },
                ].map((member, i) => (
                  <div key={i} className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Users className="h-12 w-12 text-purple-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{member.role}</h3>
                    <p className="text-gray-600">{member.desc}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Business Hours */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">Hours</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">When to Find Us</h2>
          </div>

          <Card className="border-gray-200 shadow-lg max-w-2xl mx-auto">
            <CardContent className="p-8">
              <div className="space-y-6">
                {[
                  { day: "Monday - Friday", time: "9:00 AM - 7:00 PM" },
                  { day: "Saturday", time: "9:00 AM - 6:00 PM" },
                  { day: "Sunday", time: "Closed", closed: true },
                ].map((hours, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center pb-6 border-b border-gray-100 last:border-b-0"
                  >
                    <span className="text-lg font-semibold text-gray-900">{hours.day}</span>
                    <span className={`text-lg font-semibold ${hours.closed ? "text-red-600" : "text-green-600"}`}>
                      {hours.time}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-8 bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="text-green-800 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  <strong>We're open today! Come visit us.</strong>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Experience Our Service?</h2>
          <p className="text-xl opacity-90 mb-10">
            Visit us at Computer Village or get in touch - we're always ready to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100 font-semibold">
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
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/20 bg-transparent font-semibold"
              asChild
            >
              <a
                href={decodeLink("aHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9lbmV4X2dhZGdldHNfMDAxLw==")}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="mr-2 h-5 w-5" />
                Follow Us
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
              <h3 className="text-xl font-bold text-purple-400 mb-4">ENEX GADGETS</h3>
              <p className="text-gray-400">Your trusted gadget plug in Lagos, Nigeria.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="/services" className="hover:text-purple-400">
                    Buy & Sell Gadgets
                  </a>
                </li>
                <li>
                  <a href="/services" className="hover:text-purple-400">
                    Gadget Swapping
                  </a>
                </li>
                <li>
                  <a href="/services" className="hover:text-purple-400">
                    Repairs & Maintenance
                  </a>
                </li>
                <li>
                  <a href="/services" className="hover:text-purple-400">
                    Laptop Services
                  </a>
                </li>
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
                  <a href="tel:07062300213" className="hover:text-purple-400">
                    0706 230 0213
                  </a>
                </p>
                <p>
                  💬{" "}
                  <a
                    href="https://wa.me/2347062300213"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-purple-400"
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
                    className="hover:text-purple-400"
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
