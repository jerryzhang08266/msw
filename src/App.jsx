import './App.css'
import { useState } from 'react'
import { Menu, X, ArrowRight, CheckCircle, Star, Users, Globe, Shield } from 'lucide-react'
import { Button } from './components/ui/button'
import { Card, CardContent } from './components/ui/card'

// Import images
import brandZLogo from './assets/brandz_logo.png'
import brandZLogoWhite from './assets/brandz_logo_white.png'
import heroImage from './assets/hero_image.png'
import officeStationeryDetailed from './assets/office_stationery_detailed.png'
import tech3cDetailed from './assets/tech_3c_detailed.png'
import creativeCulturalDetailed from './assets/creative_cultural_detailed.png'
import beverageProducts from './assets/beverage_products.png'
import apparelProducts from './assets/apparel_products.png'
import diningProducts from './assets/dining_products.png'
import ecoProducts from './assets/eco_products.png'
import creativeGifts from './assets/creative_gifts.png'
import travelSafety from './assets/travel_safety.png'
import processIllustration from './assets/process_illustration.png'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const productCategories = [
    {
      title: "Office & Stationery",
      description: "Complete range of custom office supplies and stationery items",
      image: officeStationeryDetailed,
      items: ["Custom Pens", "Notebooks & Planners", "File Folders", "Desk Accessories", "USB Drives", "Business Cards"]
    },
    {
      title: "Tech & 3C Products", 
      description: "Modern technology accessories and electronic promotional items",
      image: tech3cDetailed,
      items: ["Power Banks", "Wireless Mice", "Bluetooth Earphones", "Phone Cases", "Chargers", "Computer Accessories"]
    },
    {
      title: "Creative & Cultural",
      description: "Artistic and lifestyle products for brand expression",
      image: creativeCulturalDetailed,
      items: ["Custom Mugs", "Canvas Bags", "T-Shirts & Apparel", "Water Bottles", "Scarves", "Desktop Decorations"]
    },
    {
      title: "Beverage Products",
      description: "Drinkware and beverage-related promotional items",
      image: beverageProducts,
      items: ["Thermal Cups", "Water Bottles", "Tea Sets", "Eco Straws", "Coffee Mugs", "Sports Bottles"]
    },
    {
      title: "Apparel & Fashion",
      description: "Custom clothing and fashion accessories",
      image: apparelProducts,
      items: ["Custom Hats", "T-Shirts & Polos", "Jackets", "Socks", "Scarves", "Workwear"]
    },
    {
      title: "Dining & Tableware",
      description: "Custom dining products and restaurant supplies",
      image: diningProducts,
      items: ["Tableware Sets", "Lunch Boxes", "Coffee Cups", "Napkins", "Cutlery", "Food Containers"]
    },
    {
      title: "Eco-Friendly Products",
      description: "Sustainable and environmentally conscious promotional items",
      image: ecoProducts,
      items: ["Eco Shopping Bags", "Recyclable Masks", "Bamboo Products", "Sustainable Pens", "Green Office Supplies"]
    },
    {
      title: "Creative Gifts & Awards",
      description: "Premium gifts, awards, and creative promotional items",
      image: creativeGifts,
      items: ["Custom Puzzles", "Gaming Accessories", "Plant Kits", "Holiday Decorations", "Trophies & Awards", "Luxury Gift Boxes"]
    },
    {
      title: "Travel & Safety",
      description: "Travel accessories and safety equipment for businesses",
      image: travelSafety,
      items: ["Custom Luggage", "Travel Accessories", "Safety Vests", "Emergency Kits", "Conference Materials", "ID Badges"]
    }
  ]

  const features = [
    {
      icon: <Globe className="w-8 h-8 text-blue-600" />,
      title: "Global Supply Chain",
      description: "Direct access to premium Chinese manufacturers with international quality standards"
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Quality Assurance",
      description: "Rigorous quality control processes and third-party inspections for every order"
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Enterprise Support",
      description: "Dedicated account managers and professional customer service for B2B clients"
    }
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechCorp Inc.",
      role: "Marketing Director",
      content: "BrandZ has transformed how we handle our promotional merchandise. The quality is exceptional and the process is seamless.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "Global Solutions",
      role: "Procurement Manager",
      content: "Outstanding service and competitive pricing. BrandZ is now our go-to partner for all branded merchandise needs.",
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <img src={brandZLogo} alt="BrandZ" className="h-20 w-auto" />
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#home" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Home</a>
                <a href="#products" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Products</a>
                <a href="#how-it-works" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">How It Works</a>
                <a href="#about" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">About</a>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">Get Quote</Button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600 p-2"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="text-gray-900 block px-3 py-2 text-base font-medium">Home</a>
              <a href="#products" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium">Products</a>
              <a href="#how-it-works" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium">How It Works</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium">About</a>
              <div className="px-3 py-2">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full">Get Quote</Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Your Brand's
                  <span className="text-blue-600"> One-Stop</span>
                  <br />
                  Custom Merchandise Platform
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Connect directly with premium Chinese suppliers to create high-quality branded merchandise for your business. From small batches to large orders, we make custom branding simple and affordable.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
                  Start Your Order
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg">
                  View Products
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">1500+</div>
                  <div className="text-sm text-gray-600">Products</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">2000+</div>
                  <div className="text-sm text-gray-600">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">80+</div>
                  <div className="text-sm text-gray-600">Countries</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Custom branded merchandise" 
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section id="products" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Explore Our Product Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From promotional materials to tech accessories, we offer a comprehensive range of customizable products to elevate your brand presence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((category, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-0 bg-white">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img 
                      src={category.image} 
                      alt={category.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{category.title}</h3>
                    <p className="text-gray-600 mb-4">{category.description}</p>
                    <ul className="space-y-1">
                      {category.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center text-sm text-gray-500">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              How BrandZ Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our streamlined process makes ordering custom branded merchandise simple and efficient for businesses of all sizes.
            </p>
          </div>

          <div className="mb-12">
            <img 
              src={processIllustration} 
              alt="BrandZ Process" 
              className="w-full max-w-4xl mx-auto h-auto"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Choose Products</h3>
              <p className="text-gray-600">Browse our extensive catalog and select the perfect products for your brand.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Upload Design</h3>
              <p className="text-gray-600">Upload your logo or use our design tools to create the perfect branded merchandise.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Review & Order</h3>
              <p className="text-gray-600">Review your customized products, get instant pricing, and place your order.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">4</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Receive Products</h3>
              <p className="text-gray-600">Your custom branded merchandise is produced and delivered directly to your door.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose BrandZ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine the cost advantages of Chinese manufacturing with Western-style service and quality standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center p-8 border-0 bg-white hover:shadow-lg transition-shadow">
                <CardContent className="space-y-4">
                  <div className="flex justify-center">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Trusted by businesses worldwide for quality and service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8 border-0 bg-gray-50">
                <CardContent className="space-y-4">
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Ready to Elevate Your Brand?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Join thousands of businesses worldwide who trust BrandZ for their custom merchandise needs. Get started today with a free quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg">
                Get Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <img src={brandZLogoWhite} alt="BrandZ" className="h-20 w-auto" />
              <p className="text-gray-400">
                Your trusted partner for custom branded merchandise, connecting businesses with premium suppliers worldwide.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Products</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Office & Stationery</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Tech & 3C Products</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Creative & Cultural</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Eco-Friendly Products</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">How It Works</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Quality Assurance</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Shipping Info</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 BrandZ. All rights reserved. | Connecting brands with premium suppliers worldwide.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
