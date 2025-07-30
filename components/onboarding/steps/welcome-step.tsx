import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Users, Trophy } from "lucide-react"

export function WelcomeStep() {
  return (
    <>
      <CardHeader className="text-center pb-8">
        <div className="mx-auto mb-6 w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center">
          <Heart className="h-10 w-10 text-emerald-600" />
        </div>
        <CardTitle className="text-3xl font-bold text-gray-900 mb-4">Welcome to Your 30-Day Journey!</CardTitle>
        <CardDescription className="text-lg text-gray-600 max-w-md mx-auto leading-relaxed">
          You're about to embark on a transformative 30-day alcohol-free challenge that will boost your health, energy,
          and well-being.
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center p-4">
            <div className="mx-auto mb-3 w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
              <Users className="h-6 w-6 text-emerald-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Community Support</h3>
            <p className="text-sm text-gray-600">Join colleagues on the same journey</p>
          </div>

          <div className="text-center p-4">
            <div className="mx-auto mb-3 w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
              <Trophy className="h-6 w-6 text-emerald-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Track Progress</h3>
            <p className="text-sm text-gray-600">Monitor your health improvements</p>
          </div>

          <div className="text-center p-4">
            <div className="mx-auto mb-3 w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
              <Heart className="h-6 w-6 text-emerald-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Feel Amazing</h3>
            <p className="text-sm text-gray-600">Experience better sleep and energy</p>
          </div>
        </div>

        <div className="bg-emerald-50 rounded-lg p-6 text-center">
          <p className="text-emerald-800 font-medium">
            Let's set you up for success! This quick setup will personalize your experience.
          </p>
        </div>
      </CardContent>
    </>
  )
}
