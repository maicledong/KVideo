import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Icons } from '@/components/ui/Icon';
import { siteConfig } from '@/lib/config/site-config';

export function PlayerNavbar({ isPremium }: { isPremium?: boolean }) {
    const router = useRouter();

    // 环境变量
    const HOME_URL = process.env.NEXT_PUBLIC_HOME_URL || 'https://zxdai.ccwu.cc';
    const PLATFORM_URL = process.env.NEXT_PUBLIC_PLATFORM_URL || 'https://www.taobao.com';

    return (
        <nav className="sticky top-0 z-50 pt-4 pb-2 px-4" style={{ transform: 'translateZ(0)' }}>
            <div className="max-w-7xl mx-auto bg-[var(--glass-bg)] border border-[var(--glass-border)] rounded-[var(--radius-2xl)] shadow-[var(--shadow-sm)] px-4 sm:px-6 py-4">
                <div className="flex items-center justify-between gap-2">
                    
                    <div className="flex items-center gap-2 sm:gap-4 min-w-0">
                        <Button
                            variant="secondary"
                            onClick={() => router.back()}
                            className="flex items-center gap-2"
                        >
                            <Icons.ChevronLeft size={20} />
                            <span className="hidden sm:inline">返回</span>
                        </Button>
                    </div>

                    <div className="flex items-center gap-3">
                        {/* 平台文字链接（变量版） */}
                        <a
                            href={PLATFORM_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-medium text-[var(--text-color)] hover:text-[var(--accent-color)]"
                        >
                            🔥进入私密空间
                        </a>

                        {/* 主页按钮 */}
                        <a
                            href={HOME_URL}
                            className="w-10 h-10 flex items-center justify-center rounded-[var(--radius-full)] bg-[var(--glass-bg)] border border-[var(--glass-border)] text-[var(--text-color)] hover:bg-[color-mix(in_srgb,var(--accent-color)_10%,transparent)] transition-all duration-200 cursor-pointer"
                            aria-label="主页"
                        >
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2L2 9l1 1v11h18V10l1-1L12 2z"/>
                            </svg>
                        </a>

                        <a
                            href={`${HOME_URL}/premium`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 flex items-center justify-center rounded-[var(--radius-full)] bg-[var(--glass-bg)] border border-[var(--glass-border)] text-[var(--text-color)] hover:bg-[color-mix(in_srgb,var(--accent-color)_10%,transparent)] transition-all duration-200 cursor-pointer"
                            aria-label="Premium"
                        >
                            <Icons.Github size={20} />
                        </a>
                    </div>

                </div>
            </div>
        </nav>
    );
}
