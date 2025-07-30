"use client"

import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import type { OnboardingData } from "../onboarding-flow"
import { Activity } from "lucide-react"

interface HealthCheckStepProps {
  data: OnboardingData
  updateData: (data: Partial<OnboardingData>) => void
}

export function HealthCheckStep({ data, updateData }: HealthCheckStepProps) {
  const healthConcernOptions = [
    { id: "sleep-issues", label: "Sleep problems" },
    { id: "stress-anxiety", label: "Stress or anxiety" },
    { id: "low-energy", label: "Low energy levels" },
    { id: "digestive-issues", label: "Digestive issues" },
    { id: "mood-swings", label: "Mood swings" },
    { id: "concentration", label: "Difficulty concentrating" },
    { id: "weight-concerns", label: "Weight concerns" },
    { id: "none", label: "None of the above" },
  ]

  const handleHealthConcernToggle = (concernId: string) => {
    const currentConcerns = data.healthConcerns
    let updatedConcerns

    if (concernId === "none") {
      updatedConcerns = currentConcerns.includes("none") ? [] : ["none"]
    } else {
      updatedConcerns = currentConcerns.includes(concernId)
        ? currentConcerns.filter((id) => id !== concernId && id !== "none")
        : [...currentConcerns.filter((id) => id !== "none"), concernId]
    }

    updateData({ healthConcerns: updatedConcerns })
  }

  const getSliderLabel = (value: number, type: string) => {
    const labels = {
      motivation: ["Very Low", "Low", "Moderate", "High", "Very High"],
      stress: ["Very Low", "Low", "Moderate", "High", "Very High"],
      sleep: ["Very Poor", "Poor", "Fair", "Good", "Excellent"],
      energy: ["Very Low", "Low", "Moderate", "High", "Very High"],
      mood: ["Very Poor", "Poor", "Fair", "Good", "Excellent"],
    }
    return labels[type as keyof typeof labels][Math.floor((value - 1) / 2)] || labels[type as keyof typeof labels][2]
  }

  return (
    <>
      <CardHeader className="text-center pb-6">
        <div className="mx-auto mb-4 w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center">
          <Activity className="h-8 w-8 text-emerald-600" />
        </div>
        <CardTitle className="text-2xl font-bold text-gray-900 mb-3">Baseline Health Check-In</CardTitle>
        <CardDescription className="text-lg text-gray-600">
          Help us understand your current state so we can track your progress effectively.
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-8">
        {/* Current Drinking Frequency */}
        <div className="space-y-4">
          <Label className="text-base font-semibold text-gray-900">How often do you currently drink alcohol? *</Label>
          <RadioGroup
            value={data.currentDrinkingFrequency}
            onValueChange={(value) => updateData({ currentDrinkingFrequency: value })}
            className="space-y-3"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="daily" id="daily" />
              <Label htmlFor="daily">Daily</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="several-times-week" id="several-times-week" />
              <Label htmlFor="several-times-week">Several times a week</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="weekly" id="weekly" />
              <Label htmlFor="weekly">Once a week</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="occasionally" id="occasionally" />
              <Label htmlFor="occasionally">Occasionally (few times a month)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="rarely" id="rarely" />
              <Label htmlFor="rarely">Rarely</Label>
            </div>
          </RadioGroup>
        </div>

        {/* Motivation Level */}
        <div className="space-y-4">
          <Label className="text-base font-semibold text-gray-900">
            How motivated are you for this challenge? ({data.motivationLevel}/10)
          </Label>
          <div className="px-3">
            <Slider
              value={[data.motivationLevel]}
              onValueChange={(value) => updateData({ motivationLevel: value[0] })}
              max={10}
              min={1}
              step={1}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>Not motivated</span>
              <span className="font-medium text-emerald-600">{getSliderLabel(data.motivationLevel, "motivation")}</span>
              <span>Extremely motivated</span>
            </div>
          </div>
        </div>

        {/* Current Wellness Metrics */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <Label className="text-base font-semibold text-gray-900">
              Current Stress Level ({data.stressLevel}/10)
            </Label>
            <div className="px-3">
              <Slider
                value={[data.stressLevel]}
                onValueChange={(value) => updateData({ stressLevel: value[0] })}
                max={10}
                min={1}
                step={1}
                className="w-full"
              />
              <div className="text-center text-sm text-emerald-600 font-medium mt-1">
                {getSliderLabel(data.stressLevel, "stress")}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <Label className="text-base font-semibold text-gray-900">Sleep Quality ({data.sleepQuality}/10)</Label>
            <div className="px-3">
              <Slider
                value={[data.sleepQuality]}
                onValueChange={(value) => updateData({ sleepQuality: value[0] })}
                max={10}
                min={1}
                step={1}
                className="w-full"
              />
              <div className="text-center text-sm text-emerald-600 font-medium mt-1">
                {getSliderLabel(data.sleepQuality, "sleep")}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <Label className="text-base font-semibold text-gray-900">Energy Level ({data.energyLevel}/10)</Label>
            <div className="px-3">
              <Slider
                value={[data.energyLevel]}
                onValueChange={(value) => updateData({ energyLevel: value[0] })}
                max={10}
                min={1}
                step={1}
                className="w-full"
              />
              <div className="text-center text-sm text-emerald-600 font-medium mt-1">
                {getSliderLabel(data.energyLevel, "energy")}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <Label className="text-base font-semibold text-gray-900">Overall Mood ({data.overallMood}/10)</Label>
            <div className="px-3">
              <Slider
                value={[data.overallMood]}
                onValueChange={(value) => updateData({ overallMood: value[0] })}
                max={10}
                min={1}
                step={1}
                className="w-full"
              />
              <div className="text-center text-sm text-emerald-600 font-medium mt-1">
                {getSliderLabel(data.overallMood, "mood")}
              </div>
            </div>
          </div>
        </div>

        {/* Health Concerns */}
        <div className="space-y-4">
          <Label className="text-base font-semibold text-gray-900">
            Any current health concerns? (Select all that apply)
          </Label>
          <div className="grid md:grid-cols-2 gap-3">
            {healthConcernOptions.map((concern) => (
              <div key={concern.id} className="flex items-center space-x-2 p-2 rounded hover:bg-gray-50">
                <Checkbox
                  id={concern.id}
                  checked={data.healthConcerns.includes(concern.id)}
                  onCheckedChange={() => handleHealthConcernToggle(concern.id)}
                />
                <Label htmlFor={concern.id} className="cursor-pointer">
                  {concern.label}
                </Label>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </>
  )
}
