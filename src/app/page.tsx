import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Mission } from "@/components/Mission";
import { TestingMenu } from "@/components/TestingMenu";
import { OrderFlow } from "@/components/OrderFlow";
import { Instrumentation } from "@/components/Instrumentation";
import { OrdersDashboard } from "@/components/OrdersDashboard";
import { AccountPreview } from "@/components/AccountPreview";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { PageLoader } from "@/components/loading/PageLoader";

export default function Home() {
  return (
    <PageLoader>
      <Navbar />
      <main>
        <Hero />
        <Mission />
        <TestingMenu />
        <OrderFlow />
        <Instrumentation />
        <OrdersDashboard />
        <AccountPreview />
        <CTA />
      </main>
      <Footer />
    </PageLoader>
  );
}
