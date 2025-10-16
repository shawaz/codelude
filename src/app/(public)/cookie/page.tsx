import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy - Codelude",
  description: "Cookie Policy for Advanced Future Information Technology LLC (Codelude)",
};

export default function CookiePage() {
  return (
    <div className="min-h-screen bg-background pt-16">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="prose prose-lg max-w-none dark:prose-invert">
          <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>
          
          <p className="text-muted-foreground mb-8">
            <strong>Last updated:</strong> {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. What Are Cookies?</h2>
            <p className="mb-4">
              Cookies are small text files that are stored on your device when you 
              visit our website. They help us provide you with a better browsing 
              experience by remembering your preferences and analyzing how you use 
              our website.
            </p>
            <p className="mb-4">
              Advanced Future Information Technology LLC (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) 
              uses cookies and similar technologies on the Codelude website to 
              enhance your experience and provide our services effectively.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Types of Cookies We Use</h2>
            
            <h3 className="text-xl font-semibold mb-3">2.1 Essential Cookies</h3>
            <p className="mb-4">
              These cookies are necessary for the website to function properly. 
              They enable basic functions like page navigation, access to secure 
              areas, and remembering your preferences. These cookies cannot be 
              disabled as they are essential for the website to work.
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Session management cookies</li>
              <li>Security and authentication cookies</li>
              <li>Load balancing cookies</li>
              <li>User interface customization cookies</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">2.2 Analytics Cookies</h3>
            <p className="mb-4">
              These cookies help us understand how visitors interact with our website 
              by collecting and reporting information anonymously. This helps us 
              improve our website&apos;s performance and user experience.
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Google Analytics cookies</li>
              <li>Website performance monitoring</li>
              <li>User behavior analysis</li>
              <li>Traffic source identification</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">2.3 Functional Cookies</h3>
            <p className="mb-4">
              These cookies enable enhanced functionality and personalization, 
              such as remembering your language preferences and region settings.
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Language preference cookies</li>
              <li>Theme and display preferences</li>
              <li>Form data retention</li>
              <li>User interface preferences</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">2.4 Marketing Cookies</h3>
            <p className="mb-4">
              These cookies are used to track visitors across websites to display 
              relevant and engaging advertisements. They may be set by us or by 
              third-party advertising partners.
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Social media integration cookies</li>
              <li>Advertising platform cookies</li>
              <li>Remarketing cookies</li>
              <li>Conversion tracking cookies</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Third-Party Cookies</h2>
            <p className="mb-4">
              We may use third-party services that set their own cookies. These 
              services help us provide better functionality and analyze our website 
              performance. Some of the third-party cookies we use include:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Google Analytics:</strong> For website analytics and performance monitoring</li>
              <li><strong>Social Media Platforms:</strong> For social sharing and integration features</li>
              <li><strong>Content Delivery Networks:</strong> For faster content delivery</li>
              <li><strong>Security Services:</strong> For website security and protection</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Cookie Duration</h2>
            <p className="mb-4">Cookies can be categorized by their duration:</p>
            
            <h3 className="text-xl font-semibold mb-3">4.1 Session Cookies</h3>
            <p className="mb-4">
              These cookies are temporary and are deleted when you close your browser. 
              They are used to maintain your session while browsing our website.
            </p>

            <h3 className="text-xl font-semibold mb-3">4.2 Persistent Cookies</h3>
            <p className="mb-4">
              These cookies remain on your device for a set period or until you 
              delete them. They help us remember your preferences for future visits.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Managing Your Cookie Preferences</h2>
            <p className="mb-4">
              You have several options for managing cookies:
            </p>

            <h3 className="text-xl font-semibold mb-3">5.1 Browser Settings</h3>
            <p className="mb-4">
              Most web browsers allow you to control cookies through their settings. 
              You can:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Block all cookies</li>
              <li>Allow only first-party cookies</li>
              <li>Delete existing cookies</li>
              <li>Set up notifications for new cookies</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">5.2 Browser-Specific Instructions</h3>
            <div className="bg-muted p-4 rounded-lg mb-4">
              <p><strong>Chrome:</strong> Settings → Privacy and Security → Cookies and other site data</p>
              <p><strong>Firefox:</strong> Options → Privacy & Security → Cookies and Site Data</p>
              <p><strong>Safari:</strong> Preferences → Privacy → Manage Website Data</p>
              <p><strong>Edge:</strong> Settings → Cookies and site permissions → Cookies and site data</p>
            </div>

            <h3 className="text-xl font-semibold mb-3">5.3 Opt-Out Links</h3>
            <p className="mb-4">
              For specific third-party cookies, you can opt out directly:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li><a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener" className="text-primary hover:underline">Google Analytics Opt-out</a></li>
              <li><a href="https://www.facebook.com/settings?tab=ads" target="_blank" rel="noopener" className="text-primary hover:underline">Facebook Ad Preferences</a></li>
              <li><a href="https://twitter.com/settings/account/personalization" target="_blank" rel="noopener" className="text-primary hover:underline">Twitter Personalization Settings</a></li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Impact of Disabling Cookies</h2>
            <p className="mb-4">
              Please note that disabling certain cookies may affect the functionality 
              of our website. You may experience:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Reduced website performance</li>
              <li>Loss of personalized features</li>
              <li>Need to re-enter information repeatedly</li>
              <li>Limited access to certain website features</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Updates to This Cookie Policy</h2>
            <p className="mb-4">
              We may update this Cookie Policy from time to time to reflect changes 
              in our practices or for other operational, legal, or regulatory reasons. 
              We will notify you of any material changes by posting the updated policy 
              on our website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Contact Information</h2>
            <p className="mb-4">
              If you have any questions about our use of cookies or this Cookie Policy, 
              please contact us:
            </p>
            <div className="bg-muted p-4 rounded-lg mb-4">
              <p><strong>Company:</strong> Advanced Future Information Technology LLC</p>
              <p><strong>Brand:</strong> Codelude</p>
              <p><strong>Location:</strong> Dubai, United Arab Emirates</p>
              <p><strong>Contact:</strong> Available through our website contact form</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Related Policies</h2>
            <p className="mb-4">
              This Cookie Policy should be read in conjunction with our:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li><a href="/privacy" className="text-primary hover:underline">Privacy Policy</a></li>
              <li><a href="/terms" className="text-primary hover:underline">Terms of Service</a></li>
            </ul>
          </section>

          <div className="border-t pt-8 mt-12">
            <p className="text-sm text-muted-foreground">
              By continuing to use our website, you consent to our use of cookies 
              as described in this Cookie Policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
