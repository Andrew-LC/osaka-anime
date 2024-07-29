"use client"
import {
    Card,
    CardContent,
    CardDescription,
    CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import Image from "next/image";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"

export default function ProfilePage() {
    const form = useForm();

    return (
        <Card className="p-4">
            <CardTitle>Profile</CardTitle>
            <CardDescription>Manage settings for your GymMan profile</CardDescription>
            <Separator className="mt-2 mb-2" />
            <CardContent className="flex flex-col gap-4">
                <div className="flex gap-4 pt-2">
                    <Image
                        className="rounded-full h-[80px] w-[80px]"
                        src="https://images.unsplash.com/photo-1721646120400-2411520f303a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        width={80}
                        height={80}
                        alt="avatar"
                    />
                    <div className="grid grid-cols-2 gap-2">
                        <span className="col-span-2">Profile Picture</span>
                        <Button>Upload Avatar</Button>
                        <Button className="hover:bg-red-600">Replace</Button>
                    </div>
                </div>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit((data) => console.log(data))} className="space-y-4">
                        <FormField
                            control={form.control}
                            name="fullName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Full Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="John Doe" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        Your full name as it appears on official documents.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="username"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Username</FormLabel>
                                    <FormControl>
                                        <Input placeholder="johndoe123" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        This is your public display name.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input type="email" placeholder="johndoe@example.com" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        Your email address for account-related communications.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input type="password" placeholder="••••••••" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        Enter a new password if you want to change it.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Separator className="my-4" />
                        <Button type="submit">Update Profile</Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
    );
}
