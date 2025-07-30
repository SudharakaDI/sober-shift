"use client"

import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import type { OnboardingData } from "../onboarding-flow"
import { Target } from "lucide-react"

interface GoalSettingStepProps {
  data: OnboardingData
  updateData: (data: Partial<OnboardingData>) => void
}

export function GoalSettingStep({ data, updateData }: GoalSettingStepProps) {
  const goalOptions = [
    {
      id: "better-sleep",
      label: "Improve Sleep Quality",
      icon: "😴",
      description: "Get deeper, more restful sleep",
    },
    {
      id: "more-energy",
      label: "Increase Energy Levels",
      icon: "⚡",
      description: "Feel more energetic throughout the day",
    },
    {
      id: "mental-clarity",
      label: "Enhance Mental Clarity",
      icon: "🧠",
      description: "Improve focus and cognitive function",
    },
    {
      id: "save-money",
      label: "Save Money",
      icon: "💰",
      description: "Reduce spending on alcohol",
    },
    {
      id: "health-improvement",
      label: "Improve Overall Health",
      icon: "❤️",
      description: "Better physical and mental wellbeing",
    },
    {
      id: "work-performance",
      label: "Boost Work Performance",
      icon: "📈",
      description: "Enhanced productivity and creativity",
    },
    {
      id: "social-confidence",
      label: "Build Social Confidence",
      icon: "🤝",
      description: "Feel more confident in social situations",
    },
    {
      id: "stress-management",
      label: "Better Stress Management",
      icon: "🧘",
      description: "Develop healthier coping mechanisms",
    },
  ]

  const handleGoalToggle = (goalId: string) => {
    const currentGoals = data.personalGoals
    const updatedGoals = currentGoals.includes(goalId)
      ? currentGoals.filter((id) => id !== goalId)
      : [...currentGoals, goalId]

    updateData({ personalGoals: updatedGoals })
  }

  return (
    <>
      <CardHeader className="text-center pb-6">
        <div className="mx-auto mb-4 w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center">
          <Target className="h-8 w-8 text-emerald-600" />
        </div>
        <CardTitle className="text-2xl font-bold text-gray-900 mb-3">Set Your Personal Goals</CardTitle>
        <CardDescription className="text-lg text-gray-600">
          What do you hope to achieve during your 30-day journey? Select all that apply.
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        <div className="grid md:grid-cols-2 gap-4">
          {goalOptions.map((goal) => (
            <div
              key={goal.id}
              className={`p-4 rounded-lg border-2 cursor-pointer transition-all hover:shadow-md ${
                data.personalGoals.includes(goal.id)
                  ? "border-emerald-500 bg-emerald-50"
                  : "border-gray-200 hover:border-gray-300"
              }`}
              onClick={() => handleGoalToggle(goal.id)}
            >
              <div className="flex items-start space-x-3">
                <Checkbox
                  checked={data.personalGoals.includes(goal.id)}
                  onChange={() => handleGoalToggle(goal.id)}
                  className="mt-1"
                />
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="text-lg">{goal.icon}</span>
                    <h3 className="font-semibold text-gray-900">{goal.label}</h3>
                  </div>
                  <p className="text-sm text-gray-600">{goal.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-3">
          <Label htmlFor="custom-goal" className="text-base font-semibold text-gray-900">
            Any other personal goals? (Optional)
          </Label>
          <Textarea
            id="custom-goal"
            placeholder="Describe any additional goals you'd like to achieve..."
            value={data.customGoal}
            onChange={(e) => updateData({ customGoal: e.target.value })}
            className="min-h-[100px] resize-none"
          />
        </div>

        {(data.personalGoals.length > 0 || data.customGoal.trim()) && (
          <div className="bg-emerald-50 rounded-lg p-4">
            <p className="text-emerald-800 font-medium text-center">
              Great choices! We'll help you track progress toward these goals.
            </p>
          </div>
        )}
      </CardContent>
    </>
  )
}
