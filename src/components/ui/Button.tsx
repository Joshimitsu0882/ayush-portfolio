import React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary";
    children: React.ReactNode;
    href?: string;
    target?: string;
}

export const Button: React.FC<ButtonProps> = ({
    variant = "primary",
    children,
    className = "",
    href,
    ...props
}) => {
    const baseStyles =
        "inline-flex items-center justify-center px-6 py-3 rounded-md font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

    const variants = {
        primary:
            "bg-muted-teal text-white hover:bg-[#256663] focus:ring-muted-teal",
        secondary:
            "bg-white text-dark-charcoal border border-gray-300 hover:bg-gray-50 focus:ring-gray-400",
    };

    const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

    if (href) {
        if (href.startsWith("http") || href.startsWith("mailto")) {
            return (
                <a href={href} className={combinedClassName} {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
                    {children}
                </a>
            );
        }
        return (
            <Link href={href} className={combinedClassName} {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
                {children}
            </Link>
        );
    }

    return (
        <button
            className={combinedClassName}
            {...props}
        >
            {children}
        </button>
    );
};
