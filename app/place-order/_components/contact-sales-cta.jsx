import { Button } from "@/components/ui/button";

export default function ContactSalesCTA() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      <div className="bg-muted rounded-xl p-8 text-center space-y-4">
        <h2 className="text-xl md:text-2xl font-semibold">Facing an issue?</h2>
        <p className="text-muted-foreground">
          Don't hesitate to contact us — our team is available 24/7.
        </p>
        <Button variant="outline" className="mt-2">
          Contact us
        </Button>
      </div>
    </section>
  );
}
