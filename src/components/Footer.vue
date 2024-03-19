<template>
    <footer v-if="isHomePage" class="bg-gray-100 dark:bg-gray-900">
        <div class="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
            <div class="flex justify-center text-teal-600 dark:text-teal-300">
               <img src="data:image/webp;base64,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">
            </div>
            <p class="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 dark:text-gray-400">
                موقع غير ربحي لقراءة وسماع القراءن الكريم.
            </p>
            <ul class="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
                <li>
                    <a class="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75" href="#">
                        عن الموقع
                    </a>
                </li>
                <li>
                    <a class="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75" href="#">
                        من نحن
                    </a>
                </li>
                <li>
                    <a class="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75" href="#">
                        خدماتنا
                    </a>
                </li>
                <li>
                    <a class="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75" href="#">
                        مشاريعنا
                    </a>
                </li>
                <li>
                    <a class="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75" href="#">
                        المزيد
                    </a>
                </li>
            </ul>
            <ul class="mt-12 flex justify-center gap-6 md:gap-8">
                <li>
                    <a href="https://www.facebook.com/profile.php?id=100091409661941" rel="noreferrer" target="_blank" class="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75">
                        <span class="sr-only">Facebook</span>
                        <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" />
                        </svg>
                    </a>
                </li>
                <li>
                    <a href="#" rel="noreferrer" target="_blank" class="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75">
                        <span class="sr-only">Instagram</span>
                        <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" />
                        </svg>
                    </a>
                </li>
                <li>
                    <a href="#" rel="noreferrer" target="_blank" class="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75">
                        <span class="sr-only">Twitter</span>
                        <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                    </a>
                </li>
                <li>
                    <a href="#" rel="noreferrer" target="_blank" class="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75">
                        <span class="sr-only">GitHub</span>
                        <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
                        </svg>
                    </a>
                </li>
                <li>
                    <a href="#" rel="noreferrer" target="_blank" class="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75">
                        <span class="sr-only">Dribbble</span>
                        <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fill-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clip-rule="evenodd" />
                        </svg>
                    </a>
                </li>
            </ul>
        </div>
    </footer>
</template>


<script type="text/javascript">
  export default {
    computed: {
      isHomePage(){
        const isHomePage = this.$route.path === '/'
        return isHomePage;
      }
    }
  }
</script>
