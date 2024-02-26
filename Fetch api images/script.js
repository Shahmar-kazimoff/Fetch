const container = document.querySelector(".container");

fetch(`https://api.tvmaze.com/shows`)
    .then(response => response.json())
    .then(data => {
        data.forEach(element => {
            const name = document.createElement("h2")
            name.innerHTML = `<span style="color:darkgreen">Name</span> : ${element.name}`
            name.style.color = "red"
            const card = document.createElement("div");
            card.style.width = "20%"
            const language = document.createElement("p")
            language.style.color = "red"
            language.innerHTML = `<span style="color:darkgreen">Language : </span>${element.language}`
            const image = document.createElement("img");
            const rating = document.createElement("p")
            const genres = document.createElement("p")
            const status = document.createElement("p")
            const runtime = document.createElement("p")
            const premiered = document.createElement("p")
            const ended = document.createElement("p")
            const network = document.createElement("p")
            genres.style.color = "red"
            rating.style.color = "red"
            status.style.color = "red"
            runtime.style.color = "red"
            premiered.style.color = "red"
            ended.style.color = "red"
            network.style.color = "red"
            network.innerHTML = `<span style="color:darkgreen">Country : </span>${element.network && element.network.country.name}`
            ended.innerHTML = `<span style="color:darkgreen">Ended :</span> ${element.ended}`
            premiered.innerHTML = `<span style="color:darkgreen">Premier : </span>${element.premiered}`
            runtime.innerHTML = `<span style="color:darkgreen">Runtime : </span>${element.runtime} min`
            status.innerHTML = `<span style="color:darkgreen">Status : </span>${element.status}`
            genres.innerHTML = `<span style="color:darkgreen">Genres: </span>${element.genres}`
            rating.innerHTML = `<span style="color:darkgreen">Rating :</span> ${element.rating && element.rating.average}`
            if (element.image.medium) {
                image.src = element.image.medium;
                image.alt = element.name
            }
            card.appendChild(image);
            card.append(name)
            card.append(rating)
            card.append(language)
            card.append(genres)
            card.append(status)
            card.append(runtime)
            card.append(premiered)
            card.append(ended)
            card.append(network)
            container.appendChild(card);
        });
    })
    .catch(error => {
        console.error("Veri çekme hatası:", error);
    });
