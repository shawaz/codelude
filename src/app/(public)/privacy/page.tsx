import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Codelude",
  description: "Privacy Policy for Advanced Future Information Technology LLC (Codelude)",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background pt-16">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="prose prose-lg max-w-none dark:prose-invert">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          
          <p className="text-muted-foreground mb-8">
            <strong>Last updated:</strong> {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p className="mb-4">
              Advanced Future Information Technology LLC (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) 
              operates the Codelude website and services. This Privacy Policy 
              explains how we collect, use, disclose, and safeguard your information 
              when you visit our website or use our services.
            </p>
            <p className="mb-4">
              We are committed to protecting your privacy and ensuring the security 
              of your personal information in accordance with applicable data 
              protection laws, including the UAE Data Protection Law.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
            
            <h3 className="text-xl font-semibold mb-3">2.1 Personal Information</h3>
            <p className="mb-4">We may collect the following types of personal information:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Name and contact information (email, phone number)</li>
              <li>Company information and job title</li>
              <li>Project requirements and specifications</li>
              <li>Communication preferences</li>
              <li>Payment and billing information</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">2.2 Technical Information</h3>
            <p className="mb-4">We automatically collect certain technical information:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>IP address and location data</li>
              <li>Browser type and version</li>
              <li>Device information</li>
              <li>Website usage patterns and analytics</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
            <p className="mb-4">We use your information for the following purposes:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Providing and improving our services</li>
              <li>Communicating with you about projects and services</li>
              <li>Processing payments and managing accounts</li>
              <li>Responding to inquiries and support requests</li>
              <li>Marketing and promotional communications (with consent)</li>
              <li>Legal compliance and regulatory requirements</li>
              <li>Website analytics and performance optimization</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Information Sharing and Disclosure</h2>
            <p className="mb-4">We do not sell, trade, or rent your personal information. We may share your information only in the following circumstances:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>With your explicit consent</li>
              <li>With service providers who assist in our operations (under strict confidentiality agreements)</li>
              <li>When required by law or legal process</li>
              <li>To protect our rights, property, or safety</li>
              <li>In connection with a business transfer or merger</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Data Security</h2>
            <p className="mb-4">
              We implement appropriate technical and organizational measures to protect 
              your personal information against unauthorized access, alteration, disclosure, 
              or destruction. These measures include:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Encryption of sensitive data</li>
              <li>Secure servers and databases</li>
              <li>Regular security assessments</li>
              <li>Access controls and authentication</li>
              <li>Staff training on data protection</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Data Retention</h2>
            <p className="mb-4">
              We retain your personal information only for as long as necessary to 
              fulfill the purposes outlined in this Privacy Policy, unless a longer 
              retention period is required or permitted by law. When we no longer 
              need your information, we will securely delete or anonymize it.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Your Rights</h2>
            <p className="mb-4">Under applicable data protection laws, you have the right to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Access your personal information</li>
              <li>Correct inaccurate or incomplete information</li>
              <li>Request deletion of your personal information</li>
              <li>Object to processing of your information</li>
              <li>Request data portability</li>
              <li>Withdraw consent at any time</li>
              <li>Lodge a complaint with supervisory authorities</li>
            </ul>
            <p className="mb-4">
              To exercise these rights, please contact us using the information 
              provided in the Contact section.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Cookies and Tracking Technologies</h2>
            <p className="mb-4">
              We use cookies and similar technologies to enhance your browsing 
              experience, analyze website traffic, and personalize content. 
              For detailed information about our cookie usage, please see our 
              <a href="/cookie" className="text-primary hover:underline"> Cookie Policy</a>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Third-Party Services</h2>
            <p className="mb-4">
              Our website may contain links to third-party websites or services. 
              We are not responsible for the privacy practices of these third parties. 
              We encourage you to review their privacy policies before providing 
              any personal information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">10. International Data Transfers</h2>
            <p className="mb-4">
              Your information may be transferred to and processed in countries 
              other than your country of residence. We ensure that such transfers 
              comply with applicable data protection laws and implement appropriate 
              safeguards to protect your information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">11. Children&apos;s Privacy</h2>
            <p className="mb-4">
              Our services are not directed to children under 13 years of age. 
              We do not knowingly collect personal information from children under 13. 
              If we become aware that we have collected personal information from a 
              child under 13, we will take steps to delete such information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">12. Changes to This Privacy Policy</h2>
            <p className="mb-4">
              We may update this Privacy Policy from time to time. We will notify 
              you of any changes by posting the new Privacy Policy on this page and 
              updating the &quot;Last updated&quot; date. We encourage you to review this 
              Privacy Policy periodically.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">13. Contact Information</h2>
            <p className="mb-4">
              If you have any questions about this Privacy Policy or our data 
              practices, please contact us:
            </p>
            <div className="bg-muted p-4 rounded-lg mb-4">
              <p><strong>Company:</strong> Advanced Future Information Technology LLC</p>
              <p><strong>Brand:</strong> Codelude</p>
              <p><strong>Location:</strong> Dubai, United Arab Emirates</p>
              <p><strong>Contact:</strong> Available through our website contact form</p>
            </div>
          </section>

          <div className="border-t pt-8 mt-12">
            <p className="text-sm text-muted-foreground">
              This Privacy Policy is effective as of the date listed above and 
              will remain in effect except with respect to any changes in its 
              provisions in the future.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
