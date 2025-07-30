"use client"

import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Calendar, Trophy, Users } from "lucide-react"

export function CompletionStep() {
  const handleGetStarted = () => {
    // Navigate to main app dashboard
    window.location.href = "/dashboard"
  }

  return (
    <>
      <CardHeader className="text-center pb-8">
        <div className="mx-auto mb-6 w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center">
          <CheckCircle className="h-10 w-10 text-emerald-600" />
        </div>
        <CardTitle className="text-3xl font-bold text-gray-900 mb-4">You're All Set! 🎉</CardTitle>
        <CardDescription className="text-lg text-gray-600 max-w-md mx-auto leading-relaxed">
          Congratulations! Your 30-day alcohol-free challenge starts now. We're excited to support you on this journey.
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-8">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center p-4">
            <div className="mx-auto mb-3 w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
              <Calendar className="h-6 w-6 text-emerald-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Daily Check-ins</h3>
            <p className="text-sm text-gray-600">Track your progress with quick daily updates</p>
          </div>

          <div className="text-center p-4">
            <div className="mx-auto mb-3 w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
              <Trophy className="h-6 w-6 text-emerald-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Milestone Rewards</h3>
            <p className="text-sm text-gray-600">Celebrate your achievements along the way</p>
          </div>

          <div className="text-center p-4">
            <div className="mx-auto mb-3 w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
              <Users className="h-6 w-6 text-emerald-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Community Support</h3>
            <p className="text-sm text-gray-600">Connect with colleagues on the same journey</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg p-6 text-white text-center">
          <h3 className="font-bold text-lg mb-2">Your Challenge Starts Today!</h3>
          <p className="text-emerald-100 mb-4">
            Remember, every day is a step toward a healthier, happier you. We're here to support you every step of the
            way.
          </p>
          <Button
            onClick={handleGetStarted}
            className="bg-white text-emerald-600 hover:bg-gray-100 font-semibold px-8 py-2"
          >
            Go to Dashboard
          </Button>
        </div>

        <div className="text-center space-y-2">
          <p className="text-sm text-gray-600">
            Need help? Contact our support team at{" "}
            <a href="mailto:support@sobershift.com" className="text-emerald-600 hover:text-emerald-700">
              support@sobershift.com
            </a>
          </p>
          <p className="text-xs text-gray-500">You can update your preferences anytime in your account settings.</p>
        </div>
      </CardContent>
    </>
  )
}
