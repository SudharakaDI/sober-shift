"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { WelcomeStep } from "./steps/welcome-step"
import { BenefitsStep } from "./steps/benefits-step"
import { GoalSettingStep } from "./steps/goal-setting-step"
import { HealthCheckStep } from "./steps/health-check-step"
import { ConsentStep } from "./steps/consent-step"
import { CompletionStep } from "./steps/completion-step"

export interface OnboardingData {
  personalGoals: string[]
  customGoal: string
  currentDrinkingFrequency: string
  motivationLevel: number
  stressLevel: number
  sleepQuality: number
  energyLevel: number
  overallMood: number
  healthConcerns: string[]
  trackingConsent: boolean
  dataProcessingConsent: boolean
  communicationConsent: boolean
}

const TOTAL_STEPS = 6

export function OnboardingFlow() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [onboardingData, setOnboardingData] = useState<OnboardingData>({
    personalGoals: [],
    customGoal: "",
    currentDrinkingFrequency: "",
    motivationLevel: 5,
    stressLevel: 5,
    sleepQuality: 5,
    energyLevel: 5,
    overallMood: 5,
    healthConcerns: [],
    trackingConsent: false,
    dataProcessingConsent: false,
    communicationConsent: false,
  })

  const updateData = (newData: Partial<OnboardingData>) => {
    setOnboardingData((prev) => ({ ...prev, ...newData }))
  }

  const handleNext = async () => {
    if (currentStep === TOTAL_STEPS - 1) {
      // Submit data on the last step before completion
      setIsSubmitting(true)
      try {
        await submitOnboardingData(onboardingData)
        setCurrentStep(currentStep + 1)
      } catch (error) {
        console.error("Failed to submit onboarding data:", error)
        // Handle error (show toast, etc.)
      } finally {
        setIsSubmitting(false)
      }
    } else {
      setCurrentStep(currentStep + 1)
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const submitOnboardingData = async (data: OnboardingData) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // In a real app, this would be an actual API call:
    // const response = await fetch('/api/onboarding', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(data)
    // })
    // if (!response.ok) throw new Error('Failed to submit')

    console.log("Onboarding data submitted:", data)
  }

  const canProceed = () => {
    switch (currentStep) {
      case 3: // Goal setting
        return onboardingData.personalGoals.length > 0 || onboardingData.customGoal.trim() !== ""
      case 4: // Health check
        return onboardingData.currentDrinkingFrequency !== ""
      case 5: // Consent
        return onboardingData.trackingConsent && onboardingData.dataProcessingConsent
      default:
        return true
    }
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <WelcomeStep />
      case 2:
        return <BenefitsStep />
      case 3:
        return <GoalSettingStep data={onboardingData} updateData={updateData} />
      case 4:
        return <HealthCheckStep data={onboardingData} updateData={updateData} />
      case 5:
        return <ConsentStep data={onboardingData} updateData={updateData} />
      case 6:
        return <CompletionStep />
      default:
        return <WelcomeStep />
    }
  }

  const progressPercentage = ((currentStep - 1) / (TOTAL_STEPS - 1)) * 100

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Progress Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold text-gray-900">30-Day Challenge Setup</h1>
            <span className="text-sm text-gray-600">
              Step {currentStep} of {TOTAL_STEPS}
            </span>
          </div>
          <Progress value={progressPercentage} className="h-2" />
        </div>

        {/* Step Content */}
        <Card className="mb-8 shadow-lg border-0">{renderStep()}</Card>

        {/* Navigation */}
        {currentStep < TOTAL_STEPS && (
          <div className="flex justify-between items-center">
            <Button
              variant="outline"
              onClick={handleBack}
              disabled={currentStep === 1}
              className="flex items-center gap-2 bg-transparent"
            >
              <ChevronLeft className="h-4 w-4" />
              Back
            </Button>

            <Button
              onClick={handleNext}
              disabled={!canProceed() || isSubmitting}
              className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700"
            >
              {isSubmitting ? (
                "Submitting..."
              ) : currentStep === TOTAL_STEPS - 1 ? (
                "Complete Setup"
              ) : (
                <>
                  Next
                  <ChevronRight className="h-4 w-4" />
                </>
              )}
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
