"use client"

import type React from "react"

import { MapPin, Phone, MessageCircle, Clock, CheckCircle, ArrowRight, Zap, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import Navigation from "@/components/navigation"
import { useState } from "react"
import { decodeLink } from "@/lib/utils"

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)
    const message = `Hello ENEX GADGETS! 
Name: ${formData.get("firstName")} ${formData.get("lastName")}
Email: ${formData.get("email")}
Phone: ${formData.get("phone")}
Service: ${formData.get("service")}
Message: ${formData.get("message")}`
    window.open(`https://wa.me/2347062300213?text=${encodeURIComponent(message)}`, "_blank")
    setFormSubmitted(true)
    form.reset()
    setTimeout(() => setFormSubmitted(false), 3000)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section - Redesigned */}
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
                <span className="text-sm font-semibold">📞 Get In Touch</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                We're Here to Help Your Gadget Journey
              </h1>
              <p className="text-xl opacity-90 mb-8">
                Whether you need to buy, sell, repair, or swap gadgets, our expert team is ready to assist you with
                fast, affordable, and reliable service.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-white text-orange-600 hover:bg-gray-100 font-semibold"
                  onClick={() => document.getElementById("contact-section")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Start Chatting
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 font-semibold bg-transparent"
                  asChild
                >
                  <a href="tel:07062300213">
                    <Phone className="mr-2 h-5 w-5" />
                    Call Now
                  </a>
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="mt-12 flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <Zap className="h-5 w-5" />
                  <span className="text-sm font-medium">Instant Response</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  <span className="text-sm font-medium">Trusted Service</span>
                </div>
              </div>
            </div>

            {/* Right Side - Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold mb-2">24/7</div>
                <p className="text-sm opacity-80">Always Available</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold mb-2">1000+</div>
                <p className="text-sm opacity-80">Happy Customers</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold mb-2">500+</div>
                <p className="text-sm opacity-80">Devices Fixed</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold mb-2">100%</div>
                <p className="text-sm opacity-80">Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Methods */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {/* WhatsApp */}
            <div className="group bg-white rounded-xl p-6 border border-gray-200 hover:border-green-500 hover:shadow-lg transition-all duration-300">
              <div className="bg-green-100 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <MessageCircle className="h-7 w-7 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">WhatsApp Business</h3>
              <p className="text-gray-600 mb-4">Instant messaging for quick responses</p>
              <Button className="w-full bg-green-600 hover:bg-green-700" asChild>
                <a
                  href="https://wa.me/2347062300213?text=Hello%20ENEX%20GADGETS!%20I'd%20like%20to%20inquire%20about%20your%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Chat Now
                </a>
              </Button>
            </div>

            {/* Phone */}
            <div className="group bg-white rounded-xl p-6 border border-gray-200 hover:border-orange-500 hover:shadow-lg transition-all duration-300">
              <div className="bg-orange-100 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Phone className="h-7 w-7 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Direct Call</h3>
              <p className="text-gray-600 mb-4">Speak to our team directly</p>
              <Button className="w-full bg-orange-600 hover:bg-orange-700" asChild>
                <a href="tel:07062300213">
                  <Phone className="mr-2 h-4 w-4" />
                  0706 230 0213
                </a>
              </Button>
            </div>

            {/* Email/Location */}
            <div className="group bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all duration-300">
              <div className="bg-blue-100 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <MapPin className="h-7 w-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Visit Us</h3>
              <p className="text-gray-600 mb-4">Come see us at Computer Village</p>
              <Button
                variant="outline"
                className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
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
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section id="contact-section" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Get In Touch With Us</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose your preferred way to contact us and we'll get back to you as soon as possible
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-gray-200 shadow-lg">
                <CardHeader className="bg-gradient-to-r from-orange-50 to-amber-50 border-b">
                  <CardTitle className="text-2xl">Send us a Message</CardTitle>
                  <p className="text-gray-600 mt-2">Fill out the form and we'll respond within the hour</p>
                </CardHeader>
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Fields */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName" className="font-semibold text-gray-700 mb-2 block">
                          First Name *
                        </Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          placeholder="John"
                          required
                          className="border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName" className="font-semibold text-gray-700 mb-2 block">
                          Last Name *
                        </Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          placeholder="Doe"
                          required
                          className="border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                        />
                      </div>
                    </div>

                    {/* Contact Fields */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email" className="font-semibold text-gray-700 mb-2 block">
                          Email *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="john@example.com"
                          required
                          className="border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone" className="font-semibold text-gray-700 mb-2 block">
                          Phone Number *
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="0706 230 0213"
                          required
                          className="border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                        />
                      </div>
                    </div>

                    {/* Service Selection */}
                    <div>
                      <Label htmlFor="service" className="font-semibold text-gray-700 mb-2 block">
                        What service do you need? *
                      </Label>
                      <select
                        id="service"
                        name="service"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500 bg-white"
                      >
                        <option value="">Select a service...</option>
                        <option value="buy">Buy Gadgets</option>
                        <option value="sell">Sell Gadgets</option>
                        <option value="swap">Swap Gadgets</option>
                        <option value="repair">Repair Service</option>
                        <option value="laptop">Laptop Service</option>
                        <option value="other">Other Inquiry</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <Label htmlFor="message" className="font-semibold text-gray-700 mb-2 block">
                        Tell us more *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us about your gadget needs, specific device, or any questions you have..."
                        rows={5}
                        required
                        className="border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                      />
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white font-semibold text-lg"
                    >
                      <MessageCircle className="mr-2 h-5 w-5" />
                      Send via WhatsApp
                    </Button>

                    {/* Success Message */}
                    {formSubmitted && (
                      <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                        <p className="text-green-800">Message sent! We'll respond shortly on WhatsApp.</p>
                      </div>
                    )}
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Side Information */}
            <div className="space-y-6">
              {/* Business Hours */}
              <Card className="border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="bg-gradient-to-br from-blue-50 to-blue-100 border-b">
                  <div className="flex items-center gap-3">
                    <Clock className="h-6 w-6 text-blue-600" />
                    <CardTitle>Business Hours</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-6 space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="font-medium text-gray-700">Mon - Fri</span>
                    <span className="text-gray-600">9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="font-medium text-gray-700">Saturday</span>
                    <span className="text-gray-600">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="font-medium text-gray-700">Sunday</span>
                    <span className="text-red-600 font-semibold">Closed</span>
                  </div>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mt-4">
                    <p className="text-sm text-blue-800 flex items-center gap-2">
                      <CheckCircle className="h-4 w-4" />
                      <strong>We're open today!</strong>
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Location */}
              <Card className="border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="bg-gradient-to-br from-green-50 to-green-100 border-b">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-6 w-6 text-green-600" />
                    <CardTitle>Our Location</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="space-y-2">
                    <p className="font-semibold text-gray-900">ENEX GADGETS</p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      11 Shomoye Osundiro Street
                      <br />
                      Foramot Plaza, Shop 004
                      <br />
                      Computer Village
                      <br />
                      Ikeja, Lagos
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full border-green-600 text-green-600 hover:bg-green-50 bg-transparent"
                    asChild
                  >
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=11+Shomoye+Osundiro+Street,+Foramot+Plaza,+Shop+004,+Computer+Village,+Ikeja,+Lagos"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MapPin className="mr-2 h-4 w-4" />
                      View on Map
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Response Time */}
              <Card className="border-gray-200 shadow-lg bg-gradient-to-br from-purple-50 to-pink-50">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Zap className="h-6 w-6 text-purple-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Quick Response</h3>
                      <p className="text-sm text-gray-600">
                        We typically respond to messages within 1 hour during business hours
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Hint Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-orange-50 border-t border-b">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Common Questions?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Check out our FAQ or reach out directly - our team is always ready to help!
          </p>
          <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
            View FAQ
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-600 to-amber-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">Don't wait! Connect with us today via your preferred method</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-orange-600 hover:bg-gray-100" asChild>
              <a href="https://wa.me/2347062300213" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp Now
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/20 bg-transparent"
              asChild
            >
              <a href="tel:07062300213">
                <Phone className="mr-2 h-5 w-5" />
                Call: 0706 230 0213
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold text-orange-400 mb-4">ENEX GADGETS</h3>
              <p className="text-gray-400">Your trusted gadget plug in Lagos, Nigeria.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Buy & Sell Gadgets</li>
                <li>Gadget Swapping</li>
                <li>Repairs & Maintenance</li>
                <li>Laptop Services</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-gray-400">
                <li>iPhones & Samsungs</li>
                <li>iPads & Laptops</li>
                <li>Smartwatches</li>
                <li>AirPods & Accessories</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-gray-400">
                <p>📍 11 Shomoye Osundiro Street, Foramot Plaza, Shop 004, Computer Village, Ikeja, Lagos</p>
                <p>📞 0706 230 0213</p>
                <p>💬 WhatsApp Business: +234 706 230 0213</p>
                <p>
                  📸{" "}
                  <a
                    href={decodeLink("aHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9lbmV4X2dhZGdldHNfMDAxLw==")}
                    className="hover:text-orange-400"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @enexgadgets
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 ENEX GADGETS. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
