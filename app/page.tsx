"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Users, TrendingDown, DollarSign, Shield } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { ChallengePreview } from "@/components/challenge-preview"

// Placeholder data - would be replaced with API calls
const roiStats = [
  { label: "Drop in sick days", value: "15%", icon: TrendingDown },
  { label: "Reduction in healthcare claims", value: "22%", icon: DollarSign },
  { label: "Increase in productivity", value: "18%", icon: TrendingDown },
  { label: "Employee retention improvement", value: "25%", icon: Users },
]

const pricingTiers = [
  {
    name: "Small Business",
    price: "$5,000",
    period: "annually",
    employees: "50-200 employees",
    features: [
      "Basic sobriety support program",
      "Monthly progress reports",
      "Email support",
      "Basic analytics dashboard",
    ],
  },
  {
    name: "Mid-Market",
    price: "$12,000",
    period: "annually",
    employees: "200-1,000 employees",
    features: [
      "Comprehensive sobriety program",
      "Weekly progress reports",
      "Priority phone support",
      "Advanced analytics & insights",
      "Custom integration support",
      "Dedicated account manager",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$20,000",
    period: "annually",
    employees: "1,000+ employees",
    features: [
      "Full-scale sobriety platform",
      "Real-time reporting & alerts",
      "24/7 dedicated support",
      "Custom analytics & reporting",
      "Full API access",
      "On-site implementation",
      "Executive quarterly reviews",
    ],
  },
]

const testimonials = [
  {
    quote: "SoberShift helped us reduce absenteeism by 20% in just 6 months. The ROI was immediate and substantial.",
    author: "Sarah Johnson",
    title: "VP of Human Resources",
    company: "TechCorp Industries",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    quote:
      "Our healthcare costs dropped significantly after implementing SoberShift. It's been a game-changer for our organization.",
    author: "Michael Chen",
    title: "Chief People Officer",
    company: "Global Manufacturing Co.",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    quote:
      "The platform is intuitive and our employees actually engage with it. We've seen remarkable improvements in workplace culture.",
    author: "Lisa Rodriguez",
    title: "Director of Employee Wellness",
    company: "Financial Services Group",
    avatar: "/placeholder.svg?height=60&width=60",
  },
]

const clientLogos = [
  { name: "TechCorp", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Global Manufacturing", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Financial Services", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Healthcare Plus", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Retail Solutions", logo: "/placeholder.svg?height=60&width=120" },
]

export default function SoberShiftLanding() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <Shield className="h-8 w-8 text-emerald-600" />
              <span className="ml-2 text-2xl font-bold text-gray-900">SoberShift</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">
                Features
              </Link>
              <Link href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">
                Pricing
              </Link>
              <Link href="#testimonials" className="text-gray-600 hover:text-gray-900 transition-colors">
                Testimonials
              </Link>
              <Link href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">
                Contact
              </Link>
            </nav>
            <Button variant="outline" className="hidden md:inline-flex bg-transparent">
              Sign In
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-8">
              Reduce Absenteeism & Healthcare Claims.{" "}
              <span className="text-emerald-600">Boost Workplace Productivity.</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              SoberShift's evidence-based sobriety platform helps HR leaders create healthier workplaces, reduce costs,
              and improve employee well-being through comprehensive addiction support programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 text-lg"
                onClick={() => (window.location.href = "/onboarding")}
              >
                Start Your Challenge
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg bg-transparent">
                View Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Statistics */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Proven Results That Impact Your Bottom Line
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Companies using SoberShift see measurable improvements in key HR metrics within months.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {roiStats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <Card key={index} className="text-center border-0 shadow-lg">
                  <CardContent className="pt-8 pb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-4">
                      <IconComponent className="h-8 w-8 text-emerald-600" />
                    </div>
                    <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                    <div className="text-gray-600 font-medium">{stat.label}</div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Challenge Preview Section */}
      <ChallengePreview />

      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Flexible Pricing for Every Organization
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the plan that fits your company size and needs. All plans include our core sobriety support
              features.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <Card
                key={index}
                className={`relative ${tier.popular ? "border-emerald-500 border-2 shadow-xl" : "border-gray-200"}`}
              >
                {tier.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-emerald-600 text-white">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl font-bold text-gray-900">{tier.name}</CardTitle>
                  <CardDescription className="text-gray-600 mt-2">{tier.employees}</CardDescription>
                  <div className="mt-6">
                    <span className="text-4xl font-bold text-gray-900">{tier.price}</span>
                    <span className="text-gray-600 ml-2">/{tier.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${tier.popular ? "bg-emerald-600 hover:bg-emerald-700 text-white" : "bg-gray-900 hover:bg-gray-800 text-white"}`}
                    size="lg"
                    onClick={() => (window.location.href = "/onboarding")}
                  >
                    Start Your Challenge
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-lg font-semibold text-gray-600 mb-8">Trusted by Leading Organizations</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center">
              {clientLogos.map((client, index) => (
                <div key={index} className="grayscale hover:grayscale-0 transition-all duration-300">
                  <Image
                    src={client.logo || "/placeholder.svg"}
                    alt={`${client.name} logo`}
                    width={120}
                    height={60}
                    className="max-h-12 w-auto"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">What HR Leaders Are Saying</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See how SoberShift has transformed workplaces and improved employee well-being.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="pt-8">
                  <blockquote className="text-gray-700 mb-6 text-lg leading-relaxed">"{testimonial.quote}"</blockquote>
                  <div className="flex items-center">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.author}
                      width={60}
                      height={60}
                      className="rounded-full mr-4"
                    />
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.author}</div>
                      <div className="text-gray-600 text-sm">{testimonial.title}</div>
                      <div className="text-gray-500 text-sm">{testimonial.company}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-emerald-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Ready to Transform Your Workplace?</h2>
          <p className="text-xl text-emerald-100 mb-10 max-w-2xl mx-auto">
            Join hundreds of companies that have reduced costs and improved employee well-being with SoberShift.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-4 text-lg"
              onClick={() => (window.location.href = "/onboarding")}
            >
              Start Your Challenge
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-emerald-600 px-8 py-4 text-lg bg-transparent"
              onClick={() => (window.location.href = "/onboarding")}
            >
              Download ROI Calculator
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-4">
                <Shield className="h-8 w-8 text-emerald-400" />
                <span className="ml-2 text-2xl font-bold">SoberShift</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Empowering HR leaders to create healthier, more productive workplaces through evidence-based sobriety
                support programs.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  Privacy Policy
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  Terms of Service
                </Button>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    ROI Calculator
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Book a Demo
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Implementation
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} SoberShift. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
