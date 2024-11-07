import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Wifi,
  Router,
  Shield,
  Users,
  ArrowRight,
  CheckCircle2,
  BarChart3,
  Headphones,
} from "lucide-react";

const features = [
  {
    name: "High-Speed Internet",
    description: "Experience lightning-fast internet speeds up to 1Gbps for seamless streaming and gaming.",
    icon: Wifi,
  },
  {
    name: "Advanced Equipment",
    description: "Get the latest routers and modems for optimal network performance.",
    icon: Router,
  },
  {
    name: "Secure Connection",
    description: "Stay protected with our advanced network security features.",
    icon: Shield,
  },
  {
    name: "24/7 Support",
    description: "Our dedicated support team is always ready to help you.",
    icon: Headphones,
  },
];

const stats = [
  { name: "Active Users", value: "1M+", icon: Users },
  { name: "Network Coverage", value: "95%", icon: BarChart3 },
  { name: "Customer Satisfaction", value: "98%", icon: CheckCircle2 },
];

const plans = [
  {
    name: "Basic",
    price: "49.99",
    speed: "20 Mbps",
    features: [
      "Unlimited Data",
      "Basic Router",
      "Email Support",
      "Standard Installation",
    ],
  },
  {
    name: "Premium",
    price: "79.99",
    speed: "100 Mbps",
    features: [
      "Unlimited Data",
      "Advanced Router",
      "24/7 Priority Support",
      "Free Installation",
      "Static IP",
    ],
    popular: true,
  },
  {
    name: "Business",
    price: "149.99",
    speed: "1 Gbps",
    features: [
      "Unlimited Data",
      "Enterprise Router",
      "Dedicated Support Team",
      "Priority Installation",
      "Multiple Static IPs",
      "Service Level Agreement",
    ],
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
          <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
            <h1 className="mt-10 text-4xl font-bold tracking-tight sm:text-6xl">
              Connect to the Future with Telecom Tunisie
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Experience lightning-fast internet, cutting-edge technology, and exceptional service. Join Tunisia's most trusted telecommunications provider today.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Button size="lg" asChild>
                <Link href="/products">
                  Explore Plans
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">Contact Sales</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {stats.map((stat) => (
              <Card key={stat.name} className="p-6 flex items-center gap-x-4">
                <stat.icon className="h-8 w-8 flex-none text-primary" />
                <div>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.name}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">Why Choose Us</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Everything you need for seamless connectivity
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            We provide comprehensive internet solutions backed by cutting-edge technology and exceptional customer service.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2 xl:grid-cols-4">
            {features.map((feature) => (
              <Card key={feature.name} className="flex flex-col p-6">
                <div className="mb-6">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">{feature.name}</h3>
                <p className="mt-4 text-sm text-muted-foreground flex-1">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Plans Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">Pricing Plans</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Choose the perfect plan for you
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            From basic connectivity to enterprise solutions, we have a plan that fits your needs.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
          {plans.map((plan) => (
            <Card key={plan.name} className={`flex flex-col p-8 ${plan.popular ? 'ring-2 ring-primary' : ''}`}>
              {plan.popular && (
                <p className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary leading-6">
                  Most Popular
                </p>
              )}
              <h3 className="mt-4 text-2xl font-bold">{plan.name}</h3>
              <p className="mt-2 text-muted-foreground">Speed up to {plan.speed}</p>
              <p className="mt-6">
                <span className="text-4xl font-bold">${plan.price}</span>
                <span className="text-sm text-muted-foreground">/month</span>
              </p>
              <ul role="list" className="mt-8 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckCircle2 className="h-6 w-5 flex-none text-primary" aria-hidden="true" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="mt-8" variant={plan.popular ? "default" : "outline"} asChild>
                <Link href="/signup">Get Started</Link>
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}