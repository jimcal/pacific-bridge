import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Bar, BarChart, CartesianGrid, Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const fundingData = [
  { year: "2018", megaRounds: 35, others: 65 },
  { year: "2020", megaRounds: 45, others: 55 },
  { year: "2022", megaRounds: 55, others: 45 },
  { year: "2024", megaRounds: 62, others: 38 },
  { year: "2025", megaRounds: 70, others: 30 },
];

const aiConcentrationData = [
  { name: "AI Related", value: 67, color: "var(--chart-1)" },
  { name: "Others", value: 33, color: "var(--chart-5)" },
];

const graduationRateData = [
  { stage: "Historical", rate: 35 },
  { stage: "Current", rate: 22 },
];

export default function Trends() {
  return (
    <Layout>
      <div className="bg-muted/30 py-12">
        <div className="container max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-foreground">US VC Market Trends</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              "Capital is back, but it's highly concentrated in fewer, larger deals—especially in AI."
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Chart 1: Mega Rounds */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full shadow-lg border-t-4 border-t-primary">
                <CardHeader>
                  <CardTitle className="font-serif text-2xl">Capital Concentration ($100M+ Rounds)</CardTitle>
                  <p className="text-sm text-muted-foreground">Percentage of total funding going to mega-rounds</p>
                </CardHeader>
                <CardContent className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={fundingData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border)" />
                      <XAxis dataKey="year" stroke="var(--muted-foreground)" fontSize={12} tickLine={false} axisLine={false} />
                      <YAxis stroke="var(--muted-foreground)" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}%`} />
                      <Tooltip 
                        contentStyle={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)', borderRadius: 'var(--radius)' }}
                        itemStyle={{ color: 'var(--foreground)' }}
                      />
                      <Legend />
                      <Bar dataKey="megaRounds" name="$100M+ Rounds" fill="var(--chart-1)" radius={[4, 4, 0, 0]} />
                      <Bar dataKey="others" name="Others" fill="var(--chart-5)" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </motion.div>

            {/* Chart 2: AI Dominance */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="h-full shadow-lg border-t-4 border-t-primary">
                <CardHeader>
                  <CardTitle className="font-serif text-2xl">AI Dominance in Mega Rounds</CardTitle>
                  <p className="text-sm text-muted-foreground">Share of capital in large deals</p>
                </CardHeader>
                <CardContent className="h-[300px] flex items-center justify-center">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={aiConcentrationData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={100}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {aiConcentrationData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip 
                         contentStyle={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)', borderRadius: 'var(--radius)' }}
                         itemStyle={{ color: 'var(--foreground)' }}
                      />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Key Insights Section */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-card shadow-md hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-4xl font-bold text-primary mb-2">70%</h3>
                <h4 className="font-bold text-lg mb-2">Capital Concentration</h4>
                <p className="text-muted-foreground">Of all funding now flows into $100M+ mega-rounds, a historic high.</p>
              </CardContent>
            </Card>
            <Card className="bg-card shadow-md hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-4xl font-bold text-primary mb-2">$40B</h3>
                <h4 className="font-bold text-lg mb-2">OpenAI's Impact</h4>
                <p className="text-muted-foreground">A single company accounted for 25% of all mega-round funding in 2025.</p>
              </CardContent>
            </Card>
            <Card className="bg-card shadow-md hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-4xl font-bold text-destructive mb-2">20%</h3>
                <h4 className="font-bold text-lg mb-2">Seed "Graduation" Rate</h4>
                <p className="text-muted-foreground">Only ~20% of seed companies now make it to Series A, down from 35% historically.</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 bg-background rounded-2xl p-8 md:p-12 shadow-inner border border-border">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <img 
                  src="/images/investment-growth.jpg" 
                  alt="Investment Growth Visualization" 
                  className="rounded-lg shadow-lg w-full object-cover h-64"
                />
              </div>
              <div className="md:w-1/2">
                <h3 className="font-serif text-3xl font-bold mb-4">The "Seed Crunch" Opportunity</h3>
                <p className="text-lg text-muted-foreground mb-4">
                  Many promising early-stage companies are stuck. They have technology but lack the commercial traction to raise Series A in this new environment.
                </p>
                <p className="text-lg font-medium text-primary">
                  They don't just need money. They need strategic partners who can unlock markets and solve production challenges. That is where Taiwan comes in.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
