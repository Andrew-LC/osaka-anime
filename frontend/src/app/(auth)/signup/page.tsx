"use client"
import React from "react";
import { useForm } from "react-hook-form";
import { signUp } from "@/lib/auth";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage,
} from "@/components/ui/form";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

const formSchema = z.object({
    username: z.string().min(2, {
        message: "Username should be at least 2 characters",
    }),
    fullname: z.string(),
    email: z.string().email({ message: "Invalid email address" }),
    role: z.string().nonempty({ message: "Role is required" }),
    password: z.string().min(6, { message: "Password should be at least 6 characters" }),
});

export default function SignUp() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            fullname: "",
            email: "",
            role: "",
            password: "",
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        signUp(values)
    }

    return (
        <Card className="dark:bg-black dark:text-white md:w-[500px] p-4">
            <CardHeader>
                <CardTitle className="text-center">Signup</CardTitle>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-8">
                        {["Username", "Fullname", "Email"].map((label) => (
                            <FormField
                                key={label}
                                control={form.control}
                                name={label.toLowerCase()}
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="font-bold text-lg">{label}</FormLabel>
                                        <FormControl>
                                            <Input className="bg-[rgb(39, 39, 42)]" {...field} placeholder={label.toLowerCase()} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        ))}
                        <FormField
                            control={form.control}
                            name="role"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="font-bold text-lg">Role</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger className="bg-[rgb(39, 39, 42)]">
                                                <SelectValue placeholder="Select role" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent >
                                            <SelectItem value="admin">Admin</SelectItem>
                                            <SelectItem value="user">User</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="font-bold text-lg">Password</FormLabel>
                                    <FormControl>
                                        <Input className="bg-[rgb(39, 39, 42)]" {...field} type="password" placeholder="Password" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button className="dark:bg-white dark:text-black font-bold" type="submit">Sign Up</Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
    );
}
