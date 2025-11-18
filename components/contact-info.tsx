import { Phone, MessageCircle, Instagram, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { decodeLink } from "@/lib/utils"

export default function ContactInfo() {
  return (
    <div className="space-y-6">
      {/* Primary Contact Methods */}
      <div className="grid md:grid-cols-2 gap-4">
        {/* Phone */}
        <Card className="hover:shadow-lg transition-shadow border-orange-100">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center">
                <Phone className="h-6 w-6 text-orange-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900">Call Us</h3>
                <p className="text-gray-600">0706 230 0213</p>
              </div>
              <Button size="sm" className="bg-orange-600 hover:bg-orange-700" asChild>
                <a href="tel:07062300213">Call</a>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* WhatsApp Business */}
        <Card className="hover:shadow-lg transition-shadow border-green-100">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center">
                <MessageCircle className="h-6 w-6 text-green-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900">WhatsApp Business</h3>
                <p className="text-gray-600">0706 230 0213</p>
              </div>
              <Button size="sm" className="bg-green-600 hover:bg-green-700" asChild>
                <a
                  href="https://wa.me/2347062300213?text=Hello%20ENEX%20GADGETS!%20I'm%20interested%20in%20your%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chat
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* WhatsApp Business Highlight */}
      <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0">
              <MessageCircle className="h-8 w-8 text-green-600" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-2 text-green-800">Connect Instantly via WhatsApp Business</h3>
              <p className="text-green-700 mb-4">
                Get instant responses to your gadget inquiries! Our WhatsApp Business provides quick support, product
                information, and seamless communication for all your technology needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 items-start">
                <Button className="bg-green-600 hover:bg-green-700 text-white" asChild>
                  <a
                    href="https://wa.me/2347062300213?text=Hello%20ENEX%20GADGETS!%20I'm%20interested%20in%20your%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Start WhatsApp Chat
                  </a>
                </Button>
                <div className="flex items-center gap-2 text-green-700 font-medium">
                  <Phone className="h-4 w-4" />
                  <span>+234 706 230 0213</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Additional Contact Info */}
      <div className="grid md:grid-cols-2 gap-4">
        {/* Location */}
        <Card className="hover:shadow-lg transition-shadow border-orange-100">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin className="h-6 w-6 text-orange-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Visit Our Store</h3>
                <p className="text-gray-600 text-sm">
                  11 Shomoye Osundiro Street
                  <br />
                  Foramot Plaza, Shop 004
                  <br />
                  Computer Village, Ikeja, Lagos
                </p>
              </div>
            </div>
            <Button
              variant="outline"
              className="w-full border-orange-600 text-orange-600 hover:bg-orange-50 bg-transparent"
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
          </CardContent>
        </Card>

        {/* Business Hours */}
        <Card className="hover:shadow-lg transition-shadow border-orange-100">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                <Clock className="h-6 w-6 text-orange-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Business Hours</h3>
                <div className="text-gray-600 text-sm space-y-1">
                  <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
                  <p>Saturday: 9:00 AM - 6:00 PM</p>
                  <p className="text-green-600 font-medium">✅ Open Today</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Social Media */}
      <Card className="hover:shadow-lg transition-shadow border-orange-100">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center">
                <Instagram className="h-6 w-6 text-orange-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Follow Us</h3>
                <p className="text-gray-600">@enexgadgets</p>
              </div>
            </div>
            <Button
              variant="outline"
              className="border-orange-600 text-orange-600 hover:bg-orange-50 bg-transparent"
              asChild
            >
              <a
                href={decodeLink("aHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9lbmV4X2dhZGdldHNfMDAxLw==")}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="mr-2 h-4 w-4" />
                Follow
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
