import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import type { OnboardingData } from "../onboarding-flow"
import { Shield, Eye, Bell } from "lucide-react"

interface ConsentStepProps {
  data: OnboardingData
  updateData: (data: Partial<OnboardingData>) => void
}

export function ConsentStep({ data, updateData }: ConsentStepProps) {
  return (
    <>
      <CardHeader className="text-center pb-6">
        <div className="mx-auto mb-4 w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center">
          <Shield className="h-8 w-8 text-emerald-600" />
        </div>
        <CardTitle className="text-2xl font-bold text-gray-900 mb-3">Privacy & Consent</CardTitle>
        <CardDescription className="text-lg text-gray-600">
          Your privacy is important to us. Please review and consent to how we'll use your data.
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Progress Tracking Consent */}
        <div className="border rounded-lg p-6 space-y-4">
          <div className="flex items-start space-x-3">
            <Eye className="h-5 w-5 text-emerald-600 mt-1 flex-shrink-0" />
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 mb-2">Progress Tracking</h3>
              <p className="text-sm text-gray-600 mb-4">
                We'll track your daily check-ins, mood changes, and goal progress to provide personalized insights and
                support. This data helps us show you how you're improving over the 30 days.
              </p>
              <div className="flex items-start space-x-2">
                <Checkbox
                  id="tracking-consent"
                  checked={data.trackingConsent}
                  onCheckedChange={(checked) => updateData({ trackingConsent: !!checked })}
                />
                <Label htmlFor="tracking-consent" className="text-sm cursor-pointer">
                  <strong>I consent to progress tracking</strong> to help monitor my journey and provide personalized
                  insights. *
                </Label>
              </div>
            </div>
          </div>
        </div>

        {/* Data Processing Consent */}
        <div className="border rounded-lg p-6 space-y-4">
          <div className="flex items-start space-x-3">
            <Shield className="h-5 w-5 text-emerald-600 mt-1 flex-shrink-0" />
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 mb-2">Data Processing & Storage</h3>
              <p className="text-sm text-gray-600 mb-4">
                Your data will be securely stored and processed to provide you with the best possible experience. We use
                industry-standard encryption and never share your personal information with third parties without your
                explicit consent.
              </p>
              <div className="flex items-start space-x-2">
                <Checkbox
                  id="data-processing-consent"
                  checked={data.dataProcessingConsent}
                  onCheckedChange={(checked) => updateData({ dataProcessingConsent: !!checked })}
                />
                <Label htmlFor="data-processing-consent" className="text-sm cursor-pointer">
                  <strong>I consent to secure data processing and storage</strong> as described in our privacy policy. *
                </Label>
              </div>
            </div>
          </div>
        </div>

        {/* Communication Consent */}
        <div className="border rounded-lg p-6 space-y-4">
          <div className="flex items-start space-x-3">
            <Bell className="h-5 w-5 text-emerald-600 mt-1 flex-shrink-0" />
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 mb-2">Communication Preferences</h3>
              <p className="text-sm text-gray-600 mb-4">
                We'd like to send you helpful tips, encouragement, and progress updates via email or app notifications.
                You can change these preferences anytime in your settings.
              </p>
              <div className="flex items-start space-x-2">
                <Checkbox
                  id="communication-consent"
                  checked={data.communicationConsent}
                  onCheckedChange={(checked) => updateData({ communicationConsent: !!checked })}
                />
                <Label htmlFor="communication-consent" className="text-sm cursor-pointer">
                  I'd like to receive helpful tips and progress updates (optional)
                </Label>
              </div>
            </div>
          </div>
        </div>

        {/* Privacy Policy Link */}
        <div className="bg-gray-50 rounded-lg p-4 text-center">
          <p className="text-sm text-gray-600">
            By proceeding, you agree to our{" "}
            <a href="/privacy-policy" className="text-emerald-600 hover:text-emerald-700 underline">
              Privacy Policy
            </a>{" "}
            and{" "}
            <a href="/terms-of-service" className="text-emerald-600 hover:text-emerald-700 underline">
              Terms of Service
            </a>
            .
          </p>
        </div>

        {/* Validation Message */}
        {(!data.trackingConsent || !data.dataProcessingConsent) && (
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <p className="text-amber-800 text-sm">
              <strong>Required:</strong> Please consent to progress tracking and data processing to continue with your
              30-day challenge setup.
            </p>
          </div>
        )}
      </CardContent>
    </>
  )
}
