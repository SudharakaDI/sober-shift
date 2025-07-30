"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Users, Trophy, Target, Activity, Shield } from "lucide-react"

export function ChallengePreview() {
  const handleStartChallenge = () => {
    window.location.href = "/onboarding"
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-emerald-100 text-emerald-800 hover:bg-emerald-200">30-Day Challenge</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Workplace Wellness?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of employees who have already experienced the benefits of our 30-day alcohol-free challenge.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                  <Target className="h-5 w-5 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Personalized Goal Setting</h3>
                  <p className="text-gray-600">
                    Set private, meaningful goals that align with your personal wellness journey.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                  <Activity className="h-5 w-5 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Health Tracking</h3>
                  <p className="text-gray-600">
                    Monitor your baseline health metrics and watch them improve over 30 days.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                  <Users className="h-5 w-5 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Community Support</h3>
                  <p className="text-gray-600">
                    Connect with colleagues on the same journey for motivation and accountability.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                  <Shield className="h-5 w-5 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Privacy First</h3>
                  <p className="text-gray-600">
                    Your data is secure and private. You control what you share and with whom.
                  </p>
                </div>
              </div>
            </div>

            <Button
              onClick={handleStartChallenge}
              size="lg"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 text-lg"
            >
              Start Your 30-Day Challenge
            </Button>
          </div>

          <div className="space-y-6">
            <Card className="border-2 border-emerald-200 shadow-lg">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Calendar className="h-6 w-6 text-emerald-600" />
                  <CardTitle className="text-xl">Quick 5-Minute Setup</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center text-xs font-semibold text-emerald-600">
                      1
                    </div>
                    <span className="text-gray-700">Welcome & program overview</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center text-xs font-semibold text-emerald-600">
                      2
                    </div>
                    <span className="text-gray-700">Learn about the benefits</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center text-xs font-semibold text-emerald-600">
                      3
                    </div>
                    <span className="text-gray-700">Set your personal goals</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center text-xs font-semibold text-emerald-600">
                      4
                    </div>
                    <span className="text-gray-700">Baseline health check-in</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center text-xs font-semibold text-emerald-600">
                      5
                    </div>
                    <span className="text-gray-700">Privacy & consent</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center">
                      <Trophy className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-gray-700 font-semibold">Start your challenge!</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-emerald-50 rounded-lg p-6 text-center">
              <p className="text-emerald-800 font-medium mb-2">
                Join 10,000+ employees who have completed the challenge
              </p>
              <div className="flex justify-center space-x-6 text-sm text-emerald-700">
                <span>✓ 85% report better sleep</span>
                <span>✓ 78% feel more energetic</span>
                <span>✓ 73% improved focus</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
