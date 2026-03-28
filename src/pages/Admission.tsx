import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import {
  FileText,
  Calendar,
  Users,
  IndianRupee,
  CheckCircle2,
  Clock,
  Upload,
  User,
  Mail,
  Phone,
  MapPin
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import ScrollAnimation from "@/components/ScrollAnimation";

const Admission = () => {
  const [formData, setFormData] = useState({
    childName: "",
    dateOfBirth: "",
    gender: "",
    level: "",
    parentName: "",
    relation: "",
    email: "",
    phone: "",
    alternatePhone: "",
    address: "",
    emergencyContact: "",
    emergencyPhone: "",
    previousSchool: "",
    medicalConditions: "",
    allergies: "",
    specialNeeds: "",
    agreeTerms: false,
    agreePrivacy: false,
  });

  const { toast } = useToast();

  const admissionProcess = [
    {
      step: 1,
      title: "Submit Application",
      description: "Fill out the online admission form with all required details",
      icon: FileText,
    },
    {
      step: 2,
      title: "Document Verification",
      description: "Submit required documents for verification",
      icon: CheckCircle2,
    },
    {
      step: 3,
      title: "School Visit",
      description: "Schedule a visit to meet our team and tour the facilities",
      icon: Users,
    },
    {
      step: 4,
      title: "Admission Confirmation",
      description: "Complete the admission process and fee payment",
      icon: Calendar,
    },
  ];

  const requiredDocuments = [
    "Child's Birth Certificate",
    "Recent Passport-size Photographs (4 copies)",
    "Photograph of parents",
    "Parent/Guardian Aadhar Card",
  ];

  const feeStructure = [
    { level: "Level 1 (Age 2-3)", monthly: "₹8,000", annual: "₹90,000", admission: "₹25,000" },
    { level: "Level 2 (Age 3-4)", monthly: "₹9,000", annual: "₹1,00,000", admission: "₹25,000" },
    { level: "Level 3 (Age 4-5)", monthly: "₹10,000", annual: "₹1,10,000", admission: "₹30,000" },
    { level: "Level 4 (Age 5-6)", monthly: "₹11,000", annual: "₹1,20,000", admission: "₹30,000" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agreeTerms || !formData.agreePrivacy) {
      toast({
        title: "Please agree to terms",
        description: "You must agree to the terms and privacy policy to submit the application.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Application Submitted!",
      description: "Thank you for your application. We will contact you within 2-3 business days.",
    });
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const isFormComplete =
    formData.childName.trim() !== "" &&
    formData.dateOfBirth !== "" &&
    formData.gender !== "" &&
    formData.level !== "" &&
    formData.parentName.trim() !== "" &&
    formData.relation !== "" &&
    formData.email.trim() !== "" &&
    formData.phone.trim() !== "" &&
    formData.address.trim() !== "" &&
    formData.emergencyContact.trim() !== "" &&
    formData.emergencyPhone.trim() !== "" &&
    formData.agreeTerms &&
    formData.agreePrivacy;

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <ScrollAnimation className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Admission <span className="bg-gradient-to-r from-pink-bright to-pink-deep bg-clip-text text-transparent">Form</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join the euroWiskids family! Start your child's educational journey with us by completing the admission process.
          </p>
        </ScrollAnimation>

        {/* Admission Process */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            Admission <span className="bg-gradient-to-r from-pink-bright to-pink-deep bg-clip-text text-transparent">Process</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {admissionProcess.map((process, index) => (
              <ScrollAnimation key={index} delay={index * 0.1} className="h-full">
                <Card className="text-center shadow-card hover:shadow-hover transition-all duration-300 h-full">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-pink-bright to-blue-deep rounded-2xl mx-auto flex items-center justify-center mb-4">
                      <process.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                      {process.step}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{process.title}</h3>
                    <p className="text-muted-foreground text-sm">{process.description}</p>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Admission Form */}
          {/* Admission Form */}
          <div className="lg:col-span-2">

            <ScrollAnimation className="lg:col-span-2">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <FileText className="w-6 h-6 bg-gradient-to-r from-pink-bright to-pink-deep bg-clip-text text-transparent" />
                    Admission Enquiry Form
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Child Information */}
                    <div>
                      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                        <User className="w-5 h-5 bg-gradient-to-r from-pink-bright to-pink-deep bg-clip-text text-transparent" />
                        Child Information
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-medium block mb-2">Child's Full Name *</label>
                          <Input
                            placeholder="Enter child's full name"
                            value={formData.childName}
                            onChange={(e) => handleInputChange("childName", e.target.value)}
                            required
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium block mb-2">Date of Birth *</label>
                          <Input
                            type="date"
                            value={formData.dateOfBirth}
                            onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
                            required
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium block mb-2">Gender *</label>
                          <select
                            className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                            value={formData.gender}
                            onChange={(e) => handleInputChange("gender", e.target.value)}
                            required
                          >
                            <option value="">Select gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                          </select>
                        </div>
                        <div>
                          <label className="text-sm font-medium block mb-2">Applying for Level *</label>
                          <select
                            className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                            value={formData.level}
                            onChange={(e) => handleInputChange("level", e.target.value)}
                            required
                          >
                            <option value="">Select level</option>
                            <option value="level1">Level 1 (Age 2-3)</option>
                            <option value="level2">Level 2 (Age 3-4)</option>
                            <option value="level3">Level 3 (Age 4-5)</option>
                            <option value="level4">Level 4 (Age 5-6)</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Parent/Guardian Information */}
                    <div>
                      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                        <Users className="w-5 h-5 bg-gradient-to-r from-pink-bright to-pink-deep bg-clip-text text-transparent" />
                        Parent/Guardian Information
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-medium block mb-2">Parent/Guardian Name *</label>
                          <Input
                            placeholder="Enter parent/guardian name"
                            value={formData.parentName}
                            onChange={(e) => handleInputChange("parentName", e.target.value)}
                            required
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium block mb-2">Relation to Child *</label>
                          <select
                            className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                            value={formData.relation}
                            onChange={(e) => handleInputChange("relation", e.target.value)}
                            required
                          >
                            <option value="">Select relation</option>
                            <option value="father">Father</option>
                            <option value="mother">Mother</option>
                            <option value="guardian">Guardian</option>
                          </select>
                        </div>
                        <div>
                          <label className="text-sm font-medium block mb-2">Email Address *</label>
                          <Input
                            type="email"
                            placeholder="your.email@example.com"
                            value={formData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            required
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium block mb-2">Phone Number *</label>
                          <Input
                            placeholder="+91 9087225486"
                            value={formData.phone}
                            onChange={(e) => handleInputChange("phone", e.target.value)}
                            required
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium block mb-2">Alternate Phone</label>
                          <Input
                            placeholder="+91 9087225486"
                            value={formData.alternatePhone}
                            onChange={(e) => handleInputChange("alternatePhone", e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="mt-4">
                        <label className="text-sm font-medium block mb-2">Address *</label>
                        <Textarea
                          placeholder="Enter complete address"
                          value={formData.address}
                          onChange={(e) => handleInputChange("address", e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    {/* Emergency Contact */}
                    <div>
                      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                        <Phone className="w-5 h-5 bg-gradient-to-r from-pink-bright to-pink-deep bg-clip-text text-transparent" />
                        Emergency Contact
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-medium block mb-2">Emergency Contact Name *</label>
                          <Input
                            placeholder="Emergency contact person"
                            value={formData.emergencyContact}
                            onChange={(e) => handleInputChange("emergencyContact", e.target.value)}
                            required
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium block mb-2">Emergency Phone Number *</label>
                          <Input
                            placeholder="+91 9087225486"
                            value={formData.emergencyPhone}
                            onChange={(e) => handleInputChange("emergencyPhone", e.target.value)}
                            required
                          />
                        </div>
                      </div>
                    </div>
                    {/* Terms and Conditions */}
                    <div className="space-y-4">
                      <div className="flex items-start space-x-2">
                        <Checkbox
                          id="terms"
                          checked={formData.agreeTerms}
                          onCheckedChange={(checked) => handleInputChange("agreeTerms", !!checked)}
                        />
                        <label htmlFor="terms" className="text-sm text-muted-foreground">
                          I agree to the <Button variant="link" className="p-0 h-auto bg-gradient-to-r from-pink-bright to-pink-deep bg-clip-text text-transparent">terms and conditions</Button> of euroWiskids Preschool
                        </label>
                      </div>
                      <div className="flex items-start space-x-2">
                        <Checkbox
                          id="privacy"
                          checked={formData.agreePrivacy}
                          onCheckedChange={(checked) => handleInputChange("agreePrivacy", !!checked)}
                        />
                        <label htmlFor="privacy" className="text-sm text-muted-foreground">
                          I agree to the <Button variant="link" className="p-0 h-auto bg-gradient-to-r from-pink-bright to-pink-deep bg-clip-text text-transparent">privacy policy</Button> and consent to data processing
                        </label>
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={!isFormComplete}
                      style={{
                        background: isFormComplete
                          ? "linear-gradient(to right, #ec4899, #8b5cf6)"
                          : "#d1d5db",
                        cursor: isFormComplete ? "pointer" : "not-allowed",
                      }}
                      className={`w-full py-3 px-6 text-white font-semibold text-base rounded-md transition-all duration-300 ${isFormComplete ? "hover:scale-[1.02] hover:shadow-lg hover:brightness-110" : ""
                        }`}
                    >
                      Submit Admission Application
                    </button>
                  </form>
                </CardContent>
              </Card>
            </ScrollAnimation>

          </div>

          {/* Sidebar Information */}
          <div className="space-y-8">
            <ScrollAnimation delay={0.2}>
              {/* Required Documents */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Upload className="w-5 h-5 bg-gradient-to-r from-pink-bright to-pink-deep bg-clip-text text-transparent" />
                    Required Documents
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {requiredDocuments.map((doc, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <CheckCircle2 className="w-4 h-4 bg-gradient-to-r from-pink-bright to-pink-deep bg-clip-text text-transparent mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{doc}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </ScrollAnimation>

            {/* Fee Structure */}


            {/* Contact Information */}
            <ScrollAnimation delay={0.4}>
              <Card className="shadow-card bg-gradient-to-br from-blue-soft/30 to-background">
                <CardHeader>
                  <CardTitle>Need Help?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Have questions about the admission process? We're here to help!
                  </p>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center space-x-2">
                      <Phone className="w-4 h-4 bg-gradient-to-r from-pink-bright to-pink-deep bg-clip-text text-transparent" />
                      <span>+91 9087225486</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="w-4 h-4 bg-gradient-to-r from-pink-bright to-pink-deep bg-clip-text text-transparent" />
                      <span>info@eurowiskids.com</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Clock className="w-4 h-4 bg-gradient-to-r from-pink-bright to-pink-deep bg-clip-text text-transparent mt-0.5" />
                      <span>Mon-Fri: 08:30 AM - 06:00 PM</span>

                    </div>
                    <div className="flex items-start space-x-2">
                      <Clock className="w-4 h-4 bg-gradient-to-r from-pink-bright to-pink-deep bg-clip-text text-transparent mt-0.5" />
                      <span>Sat: 09:00 AM - 04:00 PM</span>
                    </div>
                  </div>
                  <Button size="sm" className="w-full">
                    Schedule a Visit
                  </Button>
                </CardContent>
              </Card>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admission;