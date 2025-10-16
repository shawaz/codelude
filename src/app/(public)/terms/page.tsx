import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - Codelude",
  description: "Terms of Service for Advanced Future Information Technology LLC (Codelude)",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background pt-16">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="prose prose-lg max-w-none dark:prose-invert">
          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
          
          <p className="text-muted-foreground mb-8">
            <strong>Last updated:</strong> {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p className="mb-4">
              Welcome to Codelude, operated by Advanced Future Information Technology LLC, 
              a company registered in Dubai, United Arab Emirates. These Terms of Service 
              (&quot;Terms&quot;) govern your use of our website and services.
            </p>
            <p className="mb-4">
              By accessing or using our services, you agree to be bound by these Terms. 
              If you disagree with any part of these terms, you may not access our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Company Information</h2>
            <div className="bg-muted p-4 rounded-lg mb-4">
              <p><strong>Company Name:</strong> Advanced Future Information Technology LLC</p>
              <p><strong>Brand Name:</strong> Codelude</p>
              <p><strong>Location:</strong> Dubai, United Arab Emirates</p>
              <p><strong>Contact:</strong> Available through our website contact form</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Services</h2>
            <p className="mb-4">
              Codelude provides technology consulting and development services including:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Web application development</li>
              <li>Mobile application development</li>
              <li>Digital content creation</li>
              <li>Digital marketing and automation</li>
              <li>Technology consulting</li>
              <li>Software architecture and design</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. User Responsibilities</h2>
            <p className="mb-4">When using our services, you agree to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Provide accurate and complete information</li>
              <li>Not use our services for any unlawful purpose</li>
              <li>Respect intellectual property rights</li>
              <li>Not attempt to gain unauthorized access to our systems</li>
              <li>Comply with all applicable laws and regulations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Intellectual Property</h2>
            <p className="mb-4">
              All content, trademarks, and intellectual property on this website are 
              owned by Advanced Future Information Technology LLC or our licensors. 
              You may not use, reproduce, or distribute our content without written permission.
            </p>
            <p className="mb-4">
              Any work created for clients remains the property of the client upon 
              full payment, unless otherwise specified in a separate agreement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Payment Terms</h2>
            <p className="mb-4">
              Payment terms will be specified in individual project agreements. 
              Generally, we require:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Initial deposit before project commencement</li>
              <li>Milestone-based payments for larger projects</li>
              <li>Final payment upon project completion</li>
            </ul>
            <p className="mb-4">
              All prices are in USD unless otherwise specified. Late payments may 
              incur additional charges.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Limitation of Liability</h2>
            <p className="mb-4">
              To the maximum extent permitted by law, Advanced Future Information 
              Technology LLC shall not be liable for any indirect, incidental, 
              special, consequential, or punitive damages, including but not limited 
              to loss of profits, data, or business opportunities.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Confidentiality</h2>
            <p className="mb-4">
              We respect the confidentiality of client information and maintain 
              strict confidentiality agreements. All client data and project 
              information will be kept confidential unless required by law.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Termination</h2>
            <p className="mb-4">
              Either party may terminate services with reasonable notice. 
              Upon termination, all outstanding payments become due immediately.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">10. Governing Law</h2>
            <p className="mb-4">
              These Terms are governed by the laws of the United Arab Emirates. 
              Any disputes will be resolved in the courts of Dubai.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">11. Changes to Terms</h2>
            <p className="mb-4">
              We reserve the right to modify these Terms at any time. 
              Changes will be posted on this page with an updated revision date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">12. Contact Information</h2>
            <p className="mb-4">
              If you have any questions about these Terms, please contact us through 
              our website or the contact information provided.
            </p>
          </section>

          <div className="border-t pt-8 mt-12">
            <p className="text-sm text-muted-foreground">
              By using our services, you acknowledge that you have read and 
              understood these Terms of Service.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
