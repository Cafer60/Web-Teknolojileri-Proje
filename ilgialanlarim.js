const { createApp } = Vue;

createApp({
    data() {
        return {
            news: [],
            loading: true
        }
    },
    mounted() {
        this.getTechNews();
    },
    methods: {
        async getTechNews() {
            try {
                // Popüler haberlerin listesini al
                const response = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json');
                const storyIds = await response.json();

                // İlk 10 tanesini seç
                const top10 = storyIds.slice(0, 10);
                
                // Her ID için detay verisini çek
                const promises = top10.map(id => 
                    fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(res => res.json())
                );

                const results = await Promise.all(promises);
                this.news = results;
                this.loading = false;
            } catch (error) {
                console.error("Sistem Hatası:", error);
                this.loading = false;
            }
        }
    }
}).mount('#app');