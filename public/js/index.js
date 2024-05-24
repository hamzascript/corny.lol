document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById('buttonPress');

    async function getJoke() {
        try {
            const response = await fetch('http://aus.serverdeploy.pro:25002');
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching the joke:', error);
            return { error: 'Failed to fetch the joke' };
        }
    }

    async function showJoke() {
        const jokeData = await getJoke();
        document.getElementById('jokeJson').innerHTML = JSON.stringify(jokeData, null, 2); // Pretty print JSON
    }

    button.addEventListener('click', showJoke);
});
