import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Zap, Moon, Smile, DollarSign, Briefcase } from "lucide-react"

export function BenefitsStep() {
  const benefits = [
    {
      icon: Brain,
      title: "Mental Clarity",
      description: "Improved focus and cognitive function",
      stat: "73% report better concentration",
    },
    {
      icon: Zap,
      title: "More Energy",
      description: "Sustained energy throughout the day",
      stat: "85% feel more energetic",
    },
    {
      icon: Moon,
      title: "Better Sleep",
      description: "Deeper, more restorative sleep",
      stat: "78% sleep quality improvement",
    },
    {
      icon: Smile,
      title: "Mood Boost",
      description: "Reduced anxiety and improved mood",
      stat: "82% report mood improvements",
    },
    {
      icon: DollarSign,
      title: "Save Money",
      description: "Keep more money in your pocket",
      stat: "Average savings: $200/month",
    },
    {
      icon: Briefcase,
      title: "Work Performance",
      description: "Enhanced productivity and creativity",
      stat: "67% report better work performance",
    },
  ]

  return (
    <>
      <CardHeader className="text-center pb-6">
        <CardTitle className="text-2xl font-bold text-gray-900 mb-3">What You Can Expect</CardTitle>
        <CardDescription className="text-lg text-gray-600">
          Here's what thousands of participants have experienced during their 30-day journey
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon
            return (
              <div
                key={index}
                className="flex items-start space-x-4 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                  <IconComponent className="h-5 w-5 text-emerald-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">{benefit.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{benefit.description}</p>
                  <Badge variant="secondary" className="text-xs">
                    {benefit.stat}
                  </Badge>
                </div>
              </div>
            )
          })}
        </div>

        <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg p-6 text-white text-center">
          <h3 className="font-bold text-lg mb-2">Ready to Transform Your Life?</h3>
          <p className="text-emerald-100">
            Join thousands of employees who have already experienced these amazing benefits!
          </p>
        </div>
      </CardContent>
    </>
  )
}
