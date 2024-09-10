import React, { ReactNode } from "react";

import Link from "next/link";
import { Button } from "../ui/button";

interface Props {
	href?: string;
	children: ReactNode;
}

const HeaderNavButton = ({ children, href = "#" }: Props) => {
	return (
		<Link
			href={href}
			className="h-full lg:w-ful flex flex-col hover:after:w-full after:transition-all after:duration-100 after:content-[''] after:w-0 after:h-[1px] after:bg-foreground"
		>
			<Button
				variant={"ghost"}
				className="rounded-none py-2 px-6 h-full w-ful hover:bg-transparent hover:text-primary"
			>
				{children}
			</Button>
		</Link>
	);
};

export default HeaderNavButton;
