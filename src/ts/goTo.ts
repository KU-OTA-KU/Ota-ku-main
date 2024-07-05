export function goToAnime(animeId: string): void {
    this.$router.push(`/anime?animeId=${animeId}`);
}

export function openAnime(animeId: number) {
    this.loading = true;
    setTimeout(() => (this.loading = false), 2000);
    this.$router.push(`/anime?animeId=${animeId}`);
}

