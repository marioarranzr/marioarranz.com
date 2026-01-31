"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { SendHorizonal } from "lucide-react";

// Simplified form schema
const FormSchema = z.object({
  email: z
    .string()
    .email({ message: "Please enter a valid email address." })
    .transform((email) => email.toLowerCase()),
  message: z
    .string()
    .min(5, "Message must be at least 5 characters")
    .max(500, "Message must be less than 500 characters"),
});

export function EmailForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      message: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      const subject = encodeURIComponent("Contact Form Message");
      const body = encodeURIComponent(`${data.message}\n\nFrom: ${data.email}`);
      const to = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "hello@marioarranz.com";
      window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        variant: "destructive",
        title: "Failed to send message",
        description: error instanceof Error ? error.message : "Please try again later.",
      });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-3">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  className="border-neutral-500 text-sm h-10"
                  placeholder="your@email.com"
                  type="email"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  className="border-neutral-500 text-sm min-h-[80px] resize-none"
                  placeholder="Your message..."
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          variant="default"
          className="w-full h-10 text-sm font-medium"
        >
          <div className="flex items-center gap-2">
            Send Message
            <SendHorizonal className="h-4 w-4" />
          </div>
        </Button>
      </form>
    </Form>
  );
}
