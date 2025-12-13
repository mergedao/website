import { Logos3 } from "@/components/ui/logos3"

const demoData = {
  heading: "Trusted by these companies",
  logos: [
    {
      id: "logo-1",
      description: "Astro",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=200&q=80",
      className: "h-7 w-auto",
    },
    {
      id: "logo-2",
      description: "Figma",
      image: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?w=200&q=80",
      className: "h-7 w-auto",
    },
    {
      id: "logo-3",
      description: "Next.js",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=200&q=80",
      className: "h-7 w-auto",
    },
    {
      id: "logo-4",
      description: "React",
      image: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?w=200&q=80",
      className: "h-7 w-auto",
    },
    {
      id: "logo-5",
      description: "shadcn/ui",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=200&q=80",
      className: "h-7 w-auto",
    },
    {
      id: "logo-6",
      description: "Supabase",
      image: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?w=200&q=80",
      className: "h-7 w-auto",
    },
    {
      id: "logo-7",
      description: "Tailwind CSS",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=200&q=80",
      className: "h-4 w-auto",
    },
    {
      id: "logo-8",
      description: "Vercel",
      image: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?w=200&q=80",
      className: "h-7 w-auto",
    },
  ],
};

function Logos3Demo() {
  return <Logos3 {...demoData} />;
}

export { Logos3Demo };

