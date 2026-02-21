    import { useState, useEffect } from "react";
    import { cn } from "@/lib/utils";

    const BackToTop = () => {
        const [isVisible, setIsVisible] = useState(false);
        const [scrolled, setScrolled] = useState(0);

        useEffect(() => {
            const handleScroll = () => {
                // Precise scroll percentage calculation from user's example
                const scrollTop = window.scrollY || window.pageYOffset;
                const docHeight = document.documentElement.scrollHeight - window.innerHeight;
                const scrollPercent = docHeight > 0 ? scrollTop / docHeight : 0;

                setScrolled(scrollPercent);

                // 300px threshold for visibility
                if (scrollTop > 300) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            };

            window.addEventListener("scroll", handleScroll);
            // Initial run to set state correctly on load
            handleScroll();

            return () => window.removeEventListener("scroll", handleScroll);
        }, []);

        const scrollToTop = () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        };

        return (
            <button
                id="backToTop"
                onClick={scrollToTop}
                className={cn(
                    "fixed right-[20px] bottom-[20px] w-[48px] h-[48px] rounded-full border-2 border-pink-bright bg-white flex items-center justify-center overflow-hidden z-[999] transition-all duration-300 shadow-xl group",
                    isVisible ? "opacity-100 translate-y-0 visible" : "opacity-0 translate-y-[20px] invisible pointer-events-none"
                )}
                aria-label="Back to top"
            >
                {/* The filling progress bar - exactly matching user logic with gradient */}
                <span
                    className="absolute inset-0 bg-gradient-to-t from-pink-bright to-pink-deep origin-bottom transition-transform duration-150 ease-linear z-0"
                    style={{
                        transform: `scaleY(${scrolled})`,
                        transformOrigin: 'bottom'
                    }}
                />

                {/* User's custom icon - mix-blend-difference ensures it stays visible over any background */}
                <svg
                    width="14"
                    height="18"
                    viewBox="0 0 8 10"
                    fill="none"
                    className="relative z-10 text-white mix-blend-difference pointer-events-none"
                >
                    <path
                        fill="currentColor"
                        d="M7.797 4.203h.016A.636.636 0 0 1 8 4.672a.67.67 0 0 1-.188.469.69.69 0 0 1-.484.187.67.67 0 0 1-.469-.187L4 2.28l-2.86 2.86a.69.69 0 0 1-.484.187.617.617 0 0 1-.453-.187A.644.644 0 0 1 0 4.67c0-.187.068-.343.203-.468L3.531.86A.636.636 0 0 1 4 .672c.188 0 .344.062.469.187l3.328 3.344Zm0 4.656h.016A.69.69 0 0 1 8 9.344a.617.617 0 0 1-.188.453.661.661 0 0 1-.953 0L4 6.937l-2.86 2.86A.661.661 0 0 1 .657 10a.594.594 0 0 1-.453-.203A.594.594 0 0 1 0 9.344c0-.188.068-.35.203-.485l3.328-3.328A.611.611 0 0 1 4 5.328c.188 0 .344.068.469.203L7.797 8.86Z"
                    />
                </svg>
            </button>
        );
    };

    export default BackToTop;
