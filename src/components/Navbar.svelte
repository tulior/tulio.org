<!-- Navbar.svelte -->
<script lang="ts">
  import {onMount} from 'svelte';

  let mobileMenuOpen = false;
  let currentPath = '';

  onMount(() => {
    if (typeof window !== 'undefined') {
      currentPath = window.location.pathname;
    }
  });

  const isActive = (path: string): boolean => currentPath === path;

  function generateBreadcrumbs(path: string) {
    const segments = path.split('/').filter(segment => segment !== '');
    const breadcrumbs = [];

    // Always start with Home
    breadcrumbs.push({name: 'Home', path: '/'});

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

<header class="fixed top-0 left-0 w-full z-50 bg-[var(--color-surface)]/80 backdrop-blur-sm shadow-md">
    <div class="relative">
        <nav class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <div class="text-2xl font-bold">
                <div class="flex items-center space-x-1">
                    {#each breadcrumbs as crumb, index}
                        {#if index !== 0}
                            <span class="text-[var(--color-text-primary)] mx-1">/</span>
                        {/if}
                        {#if index === breadcrumbs.length - 1}
                            <span class="text-[var(--color-primary)]">{crumb.name}</span>
                        {:else}
                            <a
                                    href={crumb.path}
                                    class="text-[var(--color-primary)] hover:text-[var(--color-secondary)] transition-colors"
                            >
                                {crumb.name}
                            </a>
                        {/if}
                    {/each}
                </div>
            </div>

            <!-- Desktop Menu -->
            <ul class="hidden md:flex items-center space-x-6">
                <li>
                    <a
                            href="/resume"
                            class="text-lg font-medium transition-colors {isActive('/resume') ? 'text-[var(--color-primary)]' : 'text-[var(--color-text-primary)] hover:text-[var(--color-primary)]'}"
                    >
                        Resume
                    </a>
                </li>
                <li>
                    <a
                            href="/blog"
                            class="text-lg font-medium transition-colors {isActive('/blog') ? 'text-[var(--color-primary)]' : 'text-[var(--color-text-primary)] hover:text-[var(--color-primary)]'}"
                    >
                        Blog
                    </a>
                </li>
                <li>
                    <a
                            href="mailto:mail@tulio.org"
                            class="px-4 py-2 border border-[var(--color-primary)] rounded-full text-[var(--color-primary)] font-mono hover:bg-[var(--color-secondary)] hover:border-[var(--color-secondary)] hover:text-[var(--color-surface)] transition-colors"
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
                <svg class="w-6 h-6 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            <div class="absolute top-full left-0 w-full md:hidden transition-all duration-300">
                <ul class="px-6 py-4 space-y-4 bg-[var(--color-surface)]">
                    <li>
                        <a
                                href="/resume"
                                class="block text-lg font-medium transition-colors {isActive('/resume') ? 'text-[var(--color-primary)]' : 'text-[var(--color-text-primary)] hover:text-[var(--color-primary)]'}"
                        >
                            Resume
                        </a>
                    </li>
                    <li>
                        <a
                                href="/blog"
                                class="block text-lg font-medium transition-colors {isActive('/blog') ? 'text-[var(--color-primary)]' : 'text-[var(--color-text-primary)] hover:text-[var(--color-primary)]'}"
                        >
                            Blog
                        </a>
                    </li>
                    <li>
                        <a
                                href="mailto:mail@tulio.org"
                                class="block px-4 py-2 border border-[var(--color-primary)] rounded-full text-[var(--color-primary)] font-mono hover:bg-[var(--color-secondary)] hover:border-[var(--color-secondary)] hover:text-[var(--color-surface)] transition-colors"
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        {/if}
    </div>
</header>