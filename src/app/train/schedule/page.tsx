'use client';

export const dynamic = "force-dynamic";

export default function WeeklySchedulePage() {
  return (
    <div className="min-h-screen bg-black text-white font-satoshi">
      {/* Premium header accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="space-y-16">
          {/* Hero Section */}
          <div className="text-center space-y-8">
            <p className="uppercase tracking-[0.4em] text-yellow-500/90 text-sm mb-4 font-light font-satoshi">Weekly Training • Daily Movement • Sustainable Fitness</p>
            <h1 className="text-center">
              <span className="text-6xl md:text-8xl font-bold text-yellow-500 tracking-tight [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)] font-satoshi">
                Weekly Schedule
              </span>
            </h1>
            <div className="flex items-center justify-center mt-6">
              <div className="h-px w-24 bg-yellow-500/30"></div>
              <p className="mx-6 text-lg text-white/70 font-light italic font-satoshi">Structured Training for Optimal Results</p>
              <div className="h-px w-24 bg-yellow-500/30"></div>
            </div>
          </div>

          {/* General Guidelines */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h4 className="text-2xl font-bold text-yellow-500 mb-6">General Guidelines</h4>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h5 className="text-xl font-bold text-yellow-500 mb-3">Exercise Focus</h5>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>Low-impact, high-resistance exercises</li>
                  <li>Daily movement integration</li>
                  <li>Outdoor activities when possible</li>
                  <li>Progressive overload</li>
                </ul>
              </div>
              <div>
                <h5 className="text-xl font-bold text-yellow-500 mb-3">Lifestyle</h5>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>7-9 hours of quality sleep</li>
                  <li>High-protein, high-fat nutrition</li>
                  <li>Consistent daily movement</li>
                  <li>Proper hydration</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Monday */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-4xl">🌅</span>
              <h4 className="text-2xl font-bold text-yellow-500">Monday - Strength & Daily Movement</h4>
            </div>
            <div className="space-y-4 text-gray-300">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h5 className="text-xl font-bold text-yellow-500 mb-3">Morning (20-25 min)</h5>
                  <ul className="list-disc list-inside space-y-2">
                    <li>3 min dynamic stretches</li>
                    <li>Rowing: 5 min warm-up (Zone 2)</li>
                    <li>Bodyweight Circuit (3 rounds):</li>
                    <li>• Squats: 12-15 reps</li>
                    <li>• Push-ups: 10-12 reps</li>
                    <li>• Plank: 20-30 sec</li>
                  </ul>
                </div>
                <div>
                  <h5 className="text-xl font-bold text-yellow-500 mb-3">Throughout Day</h5>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Walk/cycle to work (15-20 min)</li>
                    <li>Take stairs instead of elevator</li>
                    <li>1 min standing stretches during breaks</li>
                    <li>Evening: Optional 20-30 min workout</li>
                    <li>Rowing: 10 min steady state (optional)</li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 p-4 bg-yellow-500/10 rounded-lg">
                <h5 className="text-lg font-bold text-yellow-500 mb-2">KPI Tracking</h5>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h6 className="font-bold text-yellow-500/90 mb-2">Devices & Metrics</h6>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Apple Watch: Heart rate Zone 2 (60-70% max)</li>
                      <li>Oura Ring: Readiness score & sleep stages</li>
                      <li>Rowing: Split time & stroke rate</li>
                    </ul>
                  </div>
                  <div>
                    <h6 className="font-bold text-yellow-500/90 mb-2">Targets</h6>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Steps: 8,000-10,000</li>
                      <li>Sleep: 7-9 hours (85+ score)</li>
                      <li>Deep sleep: 20-25%</li>
                      <li>Rowing: 2,000m benchmark</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tuesday */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-4xl">🚶</span>
              <h4 className="text-2xl font-bold text-yellow-500">Tuesday - Outdoor Activity & Mobility</h4>
            </div>
            <div className="space-y-4 text-gray-300">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h5 className="text-xl font-bold text-yellow-500 mb-3">Morning/Evening (30-45 min)</h5>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Choose one activity:</li>
                    <li>• Brisk walk (20-30 min)</li>
                    <li>• Hill walking (15-20 min)</li>
                    <li>• Cycling (20-30 min)</li>
                    <li>Mobility work (5-10 min)</li>
                  </ul>
                </div>
                <div>
                  <h5 className="text-xl font-bold text-yellow-500 mb-3">Throughout Day</h5>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Park farther from destinations</li>
                    <li>Stand and stretch every hour</li>
                    <li>Shoulder rolls and side bends</li>
                    <li>Active breaks during work</li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 p-4 bg-yellow-500/10 rounded-lg">
                <h5 className="text-lg font-bold text-yellow-500 mb-2">KPI Tracking</h5>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h6 className="font-bold text-yellow-500/90 mb-2">Devices & Metrics</h6>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Apple Watch: GPS tracking & Zone 2-3</li>
                      <li>Oura Ring: HRV (30-50ms) & RHR</li>
                    </ul>
                  </div>
                  <div>
                    <h6 className="font-bold text-yellow-500/90 mb-2">Targets</h6>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Distance: 5-7km</li>
                      <li>HRV: Above baseline</li>
                      <li>RHR: 50-70 bpm</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Wednesday */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-4xl">💪</span>
              <h4 className="text-2xl font-bold text-yellow-500">Wednesday - Strength & Core</h4>
            </div>
            <div className="space-y-4 text-gray-300">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h5 className="text-xl font-bold text-yellow-500 mb-3">Morning (20-25 min)</h5>
                  <ul className="list-disc list-inside space-y-2">
                    <li>3 min jumping jacks/high knees</li>
                    <li>Rowing: 5 min warm-up</li>
                    <li>Strength Circuit (3 rounds):</li>
                    <li>• Lunges: 10-12 reps/leg</li>
                    <li>• Push-ups: 10-12 reps</li>
                    <li>• Russian twists: 20 reps</li>
                    <li>• Plank taps: 20-30 sec</li>
                  </ul>
                </div>
                <div>
                  <h5 className="text-xl font-bold text-yellow-500 mb-3">Evening (Optional)</h5>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Rowing: 10 min intervals</li>
                    <li>Kettlebell swings: 3x10-12</li>
                    <li>Core workout: 3x12-15</li>
                    <li>15 min cool-down stretch</li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 p-4 bg-yellow-500/10 rounded-lg">
                <h5 className="text-lg font-bold text-yellow-500 mb-2">KPI Tracking</h5>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h6 className="font-bold text-yellow-500/90 mb-2">Devices & Metrics</h6>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Apple Watch: Workout zones 2-3</li>
                      <li>Oura Ring: Recovery metrics</li>
                      <li>Rowing: Power output & efficiency</li>
                    </ul>
                  </div>
                  <div>
                    <h6 className="font-bold text-yellow-500/90 mb-2">Targets</h6>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Exercise: 20-30 min</li>
                      <li>HRV: Stable/rising</li>
                      <li>Muscle gain: 0.5-1 lb/month</li>
                      <li>Rowing: 500m split time</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Thursday */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-4xl">🧘</span>
              <h4 className="text-2xl font-bold text-yellow-500">Thursday - Active Recovery & Outdoor Fun</h4>
            </div>
            <div className="space-y-4 text-gray-300">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h5 className="text-xl font-bold text-yellow-500 mb-3">Morning/Evening (30-45 min)</h5>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Choose one activity:</li>
                    <li>• Yoga/stretching (15-20 min)</li>
                    <li>• Paddleboarding/kayaking</li>
                    <li>• Leisurely walk/bike ride</li>
                    <li>Focus: Hips, back, shoulders</li>
                  </ul>
                </div>
                <div>
                  <h5 className="text-xl font-bold text-yellow-500 mb-3">Throughout Day</h5>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Stand and move every 30-60 min</li>
                    <li>Walk to nearby errands</li>
                    <li>Light stretching breaks</li>
                    <li>Active recovery focus</li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 p-4 bg-yellow-500/10 rounded-lg">
                <h5 className="text-lg font-bold text-yellow-500 mb-2">KPI Tracking</h5>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h6 className="font-bold text-yellow-500/90 mb-2">Devices & Metrics</h6>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Oura Ring: Sleep quality focus</li>
                      <li>Apple Watch: HRV</li>
                    </ul>
                  </div>
                  <div>
                    <h6 className="font-bold text-yellow-500/90 mb-2">Targets</h6>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Steps: 6,000-8,000</li>
                      <li>Sleep score: 90+</li>
                      <li>Body temp: ±0.5°C</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Friday */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-4xl">🏋️</span>
              <h4 className="text-2xl font-bold text-yellow-500">Friday - Full-Body Strength</h4>
            </div>
            <div className="space-y-4 text-gray-300">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h5 className="text-xl font-bold text-yellow-500 mb-3">Morning (20-25 min)</h5>
                  <ul className="list-disc list-inside space-y-2">
                    <li>3 min dynamic stretches</li>
                    <li>Rowing: 5 min warm-up</li>
                    <li>Full-Body Circuit (3 rounds):</li>
                    <li>• Squats: 12-15 reps</li>
                    <li>• Push-ups: 10-12 reps</li>
                    <li>• Rows: 10-12 reps</li>
                    <li>• Plank: 30-45 sec</li>
                  </ul>
                </div>
                <div>
                  <h5 className="text-xl font-bold text-yellow-500 mb-3">Evening (Optional)</h5>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Rowing: 15 min steady state</li>
                    <li>Compound lifts: 3x10-12</li>
                    <li>Resistance band circuit</li>
                    <li>15 min cool-down</li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 p-4 bg-yellow-500/10 rounded-lg">
                <h5 className="text-lg font-bold text-yellow-500 mb-2">KPI Tracking</h5>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h6 className="font-bold text-yellow-500/90 mb-2">Devices & Metrics</h6>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Apple Watch: Heart rate</li>
                      <li>Oura Ring: Training impact</li>
                      <li>Rowing: 2,000m time & pace</li>
                    </ul>
                  </div>
                  <div>
                    <h6 className="font-bold text-yellow-500/90 mb-2">Targets</h6>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Heart rate: Zone 2-4</li>
                      <li>Body fat: Track trend</li>
                      <li>Recovery: 24h</li>
                      <li>Rowing: Weekly distance goal</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Saturday */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-4xl">🏃</span>
              <h4 className="text-2xl font-bold text-yellow-500">Saturday - Outdoor Adventure</h4>
            </div>
            <div className="space-y-4 text-gray-300">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h5 className="text-xl font-bold text-yellow-500 mb-3">Morning/Afternoon (45-60 min)</h5>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Choose one activity:</li>
                    <li>• Hiking (45-60 min)</li>
                    <li>• Kayaking (45 min)</li>
                    <li>• Cycling (30-45 min)</li>
                    <li>Post-activity stretch (5-10 min)</li>
                  </ul>
                </div>
                <div>
                  <h5 className="text-xl font-bold text-yellow-500 mb-3">Throughout Day</h5>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Stay active with light tasks</li>
                    <li>Stand or move every hour</li>
                    <li>Light stretching as needed</li>
                    <li>Focus on recovery</li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 p-4 bg-yellow-500/10 rounded-lg">
                <h5 className="text-lg font-bold text-yellow-500 mb-2">KPI Tracking</h5>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h6 className="font-bold text-yellow-500/90 mb-2">Devices & Metrics</h6>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Apple Watch: GPS & Zone 3</li>
                      <li>Oura Ring: Recovery status</li>
                    </ul>
                  </div>
                  <div>
                    <h6 className="font-bold text-yellow-500/90 mb-2">Targets</h6>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Distance: 5-10km</li>
                      <li>Calories: 500+</li>
                      <li>Body temp: Monitor</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sunday */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-4xl">🌙</span>
              <h4 className="text-2xl font-bold text-yellow-500">Sunday - Recovery & Preparation</h4>
            </div>
            <div className="space-y-4 text-gray-300">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h5 className="text-xl font-bold text-yellow-500 mb-3">Morning (15-20 min)</h5>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Light yoga/stretching</li>
                    <li>Focus on full-body mobility</li>
                    <li>Optional short walk</li>
                    <li>Deep breathing exercises</li>
                  </ul>
                </div>
                <div>
                  <h5 className="text-xl font-bold text-yellow-500 mb-3">Day Focus</h5>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Minimal but consistent movement</li>
                    <li>Foam rolling (10-15 min)</li>
                    <li>Meal prep for week</li>
                    <li>Early bedtime routine</li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 p-4 bg-yellow-500/10 rounded-lg">
                <h5 className="text-lg font-bold text-yellow-500 mb-2">KPI Tracking</h5>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h6 className="font-bold text-yellow-500/90 mb-2">Devices & Metrics</h6>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Apple Watch: Weekly review</li>
                      <li>Oura Ring: Sleep analysis</li>
                    </ul>
                  </div>
                  <div>
                    <h6 className="font-bold text-yellow-500/90 mb-2">Targets</h6>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Weekly exercise: 150-300 min</li>
                      <li>Sleep: 7-9 hours</li>
                      <li>Body comp: Weekly trend</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Notes */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h4 className="text-2xl font-bold text-yellow-500 mb-6">Additional Notes</h4>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h5 className="text-xl font-bold text-yellow-500 mb-3">Progression</h5>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>Start with 2-3 rounds of circuits</li>
                  <li>Increase reps/weight gradually</li>
                  <li>Add sets as strength improves</li>
                  <li>Track progress in journal</li>
                  <li>Build rowing duration gradually</li>
                </ul>
              </div>
              <div>
                <h5 className="text-xl font-bold text-yellow-500 mb-3">Rowing Integration</h5>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>Use as warm-up before strength work</li>
                  <li>Add intervals for cardio variety</li>
                  <li>Focus on form and technique</li>
                  <li>Track split times and stroke rate</li>
                  <li>Set weekly distance goals</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 