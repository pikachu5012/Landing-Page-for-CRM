export default function Pricing() {
  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-4 border rounded">
            <h3 className="text-xl font-semibold mb-2">Basic</h3>
            <p>$10/month</p>
          </div>
          <div className="p-4 border rounded">
            <h3 className="text-xl font-semibold mb-2">Pro</h3>
            <p>$20/month</p>
          </div>
          <div className="p-4 border rounded">
            <h3 className="text-xl font-semibold mb-2">Enterprise</h3>
            <p>$50/month</p>
          </div>
        </div>
      </div>
    </section>
  );
}
