import React from 'react'
import { SocialIcon } from 'react-social-icons';

export default function Footer({theme}) {
	return (
		<footer class="py-2 px-4 bg-slate-50 dark:bg-zinc-800 shadow md:flex md:items-center md:justify-between">
    <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 Omar Osorio. All Rights Reserved.
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
						<SocialIcon bgColor={theme === "dark" ? "#f5f5f5" : ""} url="https://github.com/OmarOsorio14"/>
        </li>
        <li>
					<SocialIcon className="ml-2" url="https://www.linkedin.com/in/omar-hern%C3%A1n-osorio-porras/"/>
        </li>
    </ul>
</footer>
	)
}
