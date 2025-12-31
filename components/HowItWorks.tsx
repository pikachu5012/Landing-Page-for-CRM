export default function HowItWorks() {
  return (
    <section id="howItWorks" className="py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">Step 1</h3>
            <p>Description of service 1.</p>
          </div>
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">Step 2</h3>
            <p>Description of service 2.</p>
          </div>
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">Service 3</h3>
            <p>Description of service 3.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
