import WidthWrapper from "@/components/WidthWrapper";
import { buttonVariants, Button } from "@/components/ui/button";
import { ArrowDownToLine, CheckCircle, Leaf } from "lucide-react";
import Link from "next/link";

const perks = [
  {
    name: "Instant Delivery",
    icons: ArrowDownToLine,
    description:
      "Get your assets deliver to your email in seconds and download them  right now",
  },
  {
    name: "Guaranteed Quality",
    icons: CheckCircle,
    description:
      "Every asset on our platform is vertified by our team to ensure our highest quality standart.Not happy? We offer a 30-day guarantee.",
  },
  {
    name: "For the planet",
    icons: Leaf,
    description:
      "we've pledged 1% of sales to the preservation and restoration of the natural ",
  },
];

export default function Home() {
  return (
    <>
      <WidthWrapper>
        <div className="py-20 mx-auto text-center flex flex-col max-w-3xl items-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Your marketplace for high-quality{" "}
            <span className="text-orange-500">digital assets</span>
          </h1>
          <p className="mt-6 text-lg max-w-prose text-muted-foreground">
            Welcome to OrcaDigital.Every asset on our platform is vertified by
            our team to ensure our highest quality standards
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link href={"/products"} className={buttonVariants()}>
              Broswe Trending
            </Link>
            <Button variant="ghost">Our quality promise &rarr;</Button>
          </div>
          {/* TODO: List Product */}
        </div>
      </WidthWrapper>

      <section className="border-t border-gray-200 bg-gray-50">
        <WidthWrapper className="py-20">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
            {perks.map((perk) => (
              <div
                key={perk.name}
                className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
              >
                <div className="md:flex-shrink-0 flex justify-center">
                  <div className="h-16 w-16 flex items-center justify-center rounded-full bg-orange-400">
                    {<perk.icons className="w-1/3 h-1/3" />}
                  </div>
                </div>
                <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                  <h3 className="text-base font-medium text-gray-900">
                    {perk.name}
                  </h3>
                  <p className=" text-sm mt-3 text-muted-foreground">
                    {perk.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </WidthWrapper>
      </section>
    </>
  );
}
