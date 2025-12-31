import { CreditCard } from "lucide-react";

export default function HowItWorks() {
  return (
    <section id="howItWorks" className="">
      <div className="container mx-auto text-center">
        <h2 className="text-[105px] text-primary text-center px-4 font-bold">
          How It Works
        </h2>
        <h3 className="text-[60px] text-primary"> Get Started in <span className="text-secondary">3</span>Simple Steps</h3>
        <div className="flex items-center justify-center gap-4 py-2">
          <p className="text-lg text-gray-500">No credit card required</p>
          <CreditCard className="w-10 h-10 text-gray-500" />
          <p className="text-lg text-gray-500">Setup in 5 minutes</p>
        </div>
      </div>
    </section>
  );
}
