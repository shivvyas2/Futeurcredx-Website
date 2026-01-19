import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactSales() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    company: '',
    website: '',
    annualRevenue: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Sales form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-[#faf8f5]">
      {/* Hero Section - PayPal-inspired minimalistic design */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Left Column - Headline & Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-10"
            >
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                  Get in touch<br />with sales
                </h1>
                <p className="text-lg md:text-xl text-gray-600 max-w-md">
                  Tell us a little about your business so we can connect you with the right team.
                </p>
              </div>

              <div className="space-y-8 pt-8">
                <div>
                  <p className="text-gray-900 font-medium mb-1">Have a specialized request?</p>
                  <a 
                    href="mailto:sales@futeurcredx.com" 
                    className="text-gray-900 font-semibold text-lg hover:text-orange-600 transition-colors underline underline-offset-4"
                  >
                    sales@futeurcredx.com
                  </a>
                </div>

                <div>
                  <p className="text-gray-900 font-medium mb-1">Need help with your existing account?</p>
                  <Link 
                    to="/support" 
                    className="text-gray-900 font-semibold hover:text-orange-600 transition-colors underline underline-offset-4 inline-flex items-center gap-1"
                  >
                    Visit our support center
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Form Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg">
                <p className="text-sm text-gray-500 mb-6">All fields are required.</p>
                
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Input
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        className="w-full border-gray-300 focus:border-gray-900 focus:ring-gray-900 rounded-lg h-14 text-base"
                        placeholder="First name"
                      />
                    </div>
                    <div>
                      <Input
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        className="w-full border-gray-300 focus:border-gray-900 focus:ring-gray-900 rounded-lg h-14 text-base"
                        placeholder="Last name"
                      />
                    </div>
                  </div>

                  <Input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full border-gray-300 focus:border-gray-900 focus:ring-gray-900 rounded-lg h-14 text-base"
                    placeholder="Phone number"
                  />

                  <Input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full border-gray-300 focus:border-gray-900 focus:ring-gray-900 rounded-lg h-14 text-base"
                    placeholder="Business email"
                  />

                  <Input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full border-gray-300 focus:border-gray-900 focus:ring-gray-900 rounded-lg h-14 text-base"
                    placeholder="Business name"
                  />

                  <Input
                    type="url"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    className="w-full border-gray-300 focus:border-gray-900 focus:ring-gray-900 rounded-lg h-14 text-base"
                    placeholder="Business website"
                  />

                  <select
                    value={formData.annualRevenue}
                    onChange={(e) => setFormData({ ...formData, annualRevenue: e.target.value })}
                    className="w-full border border-gray-300 focus:border-gray-900 focus:ring-gray-900 rounded-lg h-14 text-base px-4 bg-white text-gray-900"
                    required
                  >
                    <option value="" disabled>Estimated annual revenue</option>
                    <option value="under-100k">Under $100K</option>
                    <option value="100k-500k">$100K - $500K</option>
                    <option value="500k-1m">$500K - $1M</option>
                    <option value="1m-10m">$1M - $10M</option>
                    <option value="10m-50m">$10M - $50M</option>
                    <option value="50m-plus">$50M+</option>
                  </select>

                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full border-gray-300 focus:border-gray-900 focus:ring-gray-900 min-h-[100px] rounded-lg text-base"
                    placeholder="How can we help? (Optional)"
                  />

                  <Button
                    type="submit"
                    className="w-full bg-gray-900 hover:bg-gray-800 text-white py-4 h-14 rounded-full text-base font-semibold transition-colors"
                  >
                    Submit
                  </Button>

                  <p className="text-xs text-gray-500 leading-relaxed">
                    By clicking Submit, you agree to receive calls, emails, or texts from FuteurCredX about our products or services. You can opt out anytime.
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
