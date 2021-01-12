import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
    new Vue({
        el: '#app',
        data: {
            countries: [],
            worldPopulation: 0
        },
        mounted(){
            this.fetchCountries()
        },
        computed: {
            calculateWorldPopulation: function() {
                    return this.countries.reduce( (runningTotal, countries) => {
                        return (runningTotal + countries.population);
                    }, 0);
                },
            allCountryNames : function() {
                return this.countries.forEach(country => {
                    return this.countries.name;
                });
            }
        },
        methods: {
            fetchCountries: function(){
                fetch("https://restcountries.eu/rest/v2/all")
                    .then(response => response.json())
                        .then(data => this.countries = data)
            }
        }
    })
});