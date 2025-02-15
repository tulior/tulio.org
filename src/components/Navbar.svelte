<!-- Navbar.svelte -->
<script lang="ts">
  import { onMount } from 'svelte';

  let mobileMenuOpen = false;
  let currentPath = '';

  onMount(() => {
    if (typeof window !== 'undefined') {
      currentPath = window.location.pathname;
      // Close mobile menu on route change:
      window.addEventListener('click', (e: MouseEvent) => {
        if (mobileMenuOpen) {
          const navElement = document.querySelector('nav');
          if(navElement && !navElement.contains(e.target as Node))
            mobileMenuOpen = false;
        }
      });
    }
  });

  const isActive = (path: string): boolean => currentPath === path || (currentPath.startsWith(path) && path !== '/');

  function generateBreadcrumbs(path: string) {
    const segments = path.split('/').filter(segment => segment !== '');
    const breadcrumbs = [];

    breadcrumbs.push({ name: 'Home', path: '/' });

    let accumulatedPath = '';
    for (const segment of segments) {
      accumulatedPath += `/${segment}`;
      const formattedName = segment
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      breadcrumbs.push({
        name: formattedName,
        path: accumulatedPath,
      });
    }

    return breadcrumbs;
  }

  $: breadcrumbs = generateBreadcrumbs(currentPath);
</script>

<header class="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-md">
    <div class="relative">
        <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex justify-between items-center">
            <!-- Breadcrumbs -->
            <div class="text-base sm:text-lg font-medium text-gray-700 truncate">
                <div class="flex items-center space-x-1 overflow-x-auto">
                    {#each breadcrumbs as crumb, index}
                        {#if index !== 0}
                            <span class="text-gray-400 mx-1">/</span>
                        {/if}
                        {#if index === breadcrumbs.length - 1}
                <span class="text-blue-600 truncate max-w-[120px] sm:max-w-none">
                  {crumb.name}
                </span>
                        {:else}
                            <a
                                    href={crumb.path}
                                    class="text-gray-700 hover:text-blue-600 transition-colors truncate max-w-[80px] sm:max-w-none"
                            >
                                {crumb.name}
                            </a>
                        {/if}
                    {/each}
                </div>
            </div>

            <!-- Desktop Menu -->
            <ul class="hidden md:flex items-center space-x-8">
                <li>
                    <a
                            href="/resume"
                            class:active={isActive('/resume')}
                            class="text-base font-medium transition-colors hover:text-blue-600 {isActive('/resume') ? 'text-blue-600' : 'text-gray-700'}"
                    >
                        Resume
                    </a>
                </li>
                <li>
                    <a
                            href="/blog"
                            class:active={isActive('/blog')}
                            class="text-base font-medium transition-colors hover:text-blue-600 {isActive('/blog') ? 'text-blue-600' : 'text-gray-700'}"
                    >
                        Blog
                    </a>
                </li>
                <li>
                    <a
                            href="mailto:mail@tulio.org"
                            class="px-4 py-2 border border-blue-600 rounded-full text-blue-600 font-medium hover:bg-blue-600 hover:text-white transition-colors"
                    >
                        Contact
                    </a>
                </li>
            </ul>

            <!-- Mobile Menu Toggle -->
            <button
                    on:click={() => (mobileMenuOpen = !mobileMenuOpen)}
                    class="md:hidden focus:outline-none"
                    aria-label="Toggle mobile menu"
            >
                <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16"
                    />
                </svg>
            </button>
        </nav>

        <!-- Mobile Menu -->
        {#if mobileMenuOpen}
            <div class="absolute top-full left-0 w-full bg-white shadow-lg md:hidden transition-all duration-300 ease-in-out">
                <ul class="px-4 py-3 space-y-3">
                    <li>
                        <a
                                href="/resume"
                                class:active={isActive('/resume')}
                                class="block text-base font-medium transition-colors hover:text-blue-600 {isActive('/resume') ? 'text-blue-600' : 'text-gray-700'}"
                        >
                            Resume
                        </a>
                    </li>
                    <li>
                        <a
                                href="/blog"
                                class:active={isActive('/blog')}
                                class="block text-base font-medium transition-colors hover:text-blue-600 {isActive('/blog') ? 'text-blue-600' : 'text-gray-700'}"
                        >
                            Blog
                        </a>
                    </li>
                    <li>
                        <a
                                href="mailto:mail@tulio.org"
                                class="block px-4 py-2 border border-blue-600 rounded-full text-blue-600 font-medium hover:bg-blue-600 hover:text-white transition-colors"
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        {/if}
    </div>
</header>