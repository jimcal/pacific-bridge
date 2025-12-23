import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { ArrowRight, Briefcase, Building2, Users } from "lucide-react";
import { Link } from "wouter";

export default function Strategies() {
  return (
    <Layout>
      <div className="bg-muted/30 py-12">
        <div className="container max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-foreground">How to Participate</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              "Small, Smart, Long-term. Not a gamble."
            </p>
          </motion.div>

          <div className="mb-16">
            <img 
              src="/images/handshake-deal.jpg" 
              alt="Strategic Partnership" 
              className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg mb-12"
            />
            
            <Tabs defaultValue="lp" className="w-full">
              <TabsList className="grid w-full grid-cols-3 h-auto p-1 bg-muted rounded-lg">
                <TabsTrigger value="lp" className="py-4 text-base md:text-lg data-[state=active]:bg-background data-[state=active]:shadow-sm">Path 1: LP Investment</TabsTrigger>
                <TabsTrigger value="follow" className="py-4 text-base md:text-lg data-[state=active]:bg-background data-[state=active]:shadow-sm">Path 2: Follow-on</TabsTrigger>
                <TabsTrigger value="cvc" className="py-4 text-base md:text-lg data-[state=active]:bg-background data-[state=active]:shadow-sm">Path 3: Corporate VC</TabsTrigger>
              </TabsList>
              
              <div className="mt-8">
                <TabsContent value="lp">
                  <Card className="border-t-4 border-t-primary">
                    <CardHeader>
                      <div className="flex items-center gap-4 mb-2">
                        <div className="p-3 bg-primary/10 rounded-full">
                          <Users className="h-6 w-6 text-primary" />
                        </div>
                        <CardTitle className="text-2xl font-serif">Limited Partner (LP)</CardTitle>
                      </div>
                      <p className="text-muted-foreground">Invest in reputable funds as a Limited Partner.</p>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="font-bold text-lg mb-2 text-primary">Pros</h4>
                          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                            <li>Learning from professionals</li>
                            <li>Risk diversification (20-30 companies)</li>
                            <li>Low operational effort</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-bold text-lg mb-2 text-destructive">Cons</h4>
                          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                            <li>Passive role</li>
                            <li>No direct access to startups initially</li>
                          </ul>
                        </div>
                      </div>
                      <div className="mt-6 p-4 bg-muted rounded-lg">
                        <p className="font-medium">Recommendation: Start small with a reputable US fund. Treat it as tuition.</p>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="follow">
                  <Card className="border-t-4 border-t-primary">
                    <CardHeader>
                      <div className="flex items-center gap-4 mb-2">
                        <div className="p-3 bg-primary/10 rounded-full">
                          <Briefcase className="h-6 w-6 text-primary" />
                        </div>
                        <CardTitle className="text-2xl font-serif">Strategic Follow-on</CardTitle>
                      </div>
                      <p className="text-muted-foreground">Co-invest alongside the main fund in specific deals.</p>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="font-bold text-lg mb-2 text-primary">Pros</h4>
                          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                            <li>Select companies relevant to your core business</li>
                            <li>Build direct partnerships</li>
                            <li>Strategic synergy beyond financial return</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-bold text-lg mb-2 text-destructive">Cons</h4>
                          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                            <li>Requires internal evaluation capability</li>
                            <li>Concentrated risk on specific deals</li>
                          </ul>
                        </div>
                      </div>
                      <div className="mt-6 p-4 bg-muted rounded-lg">
                        <p className="font-medium">Recommendation: Focus on startups that can leverage your manufacturing or supply chain strengths.</p>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="cvc">
                  <Card className="border-t-4 border-t-primary">
                    <CardHeader>
                      <div className="flex items-center gap-4 mb-2">
                        <div className="p-3 bg-primary/10 rounded-full">
                          <Building2 className="h-6 w-6 text-primary" />
                        </div>
                        <CardTitle className="text-2xl font-serif">Corporate Venture Capital (CVC)</CardTitle>
                      </div>
                      <p className="text-muted-foreground">Establish your own investment arm.</p>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="font-bold text-lg mb-2 text-primary">Pros</h4>
                          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                            <li>Full control over strategy</li>
                            <li>Direct integration with R&D and Strategy</li>
                            <li>Maximum strategic impact</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-bold text-lg mb-2 text-destructive">Cons</h4>
                          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                            <li>Most complex and costly to set up</li>
                            <li>Requires dedicated professional team</li>
                          </ul>
                        </div>
                      </div>
                      <div className="mt-6 p-4 bg-muted rounded-lg">
                        <p className="font-medium">Recommendation: Don't run it as a financial VC. Run it as an extension of your R&D and Strategy departments.</p>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </div>
            </Tabs>
          </div>

          <div className="text-center">
            <Link href="/conclusion">
              <Button size="lg" className="text-lg px-8 py-6 rounded-full">
                Final Thoughts <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
