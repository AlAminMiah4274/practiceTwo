const loadPhotos = async () => {
    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/photos`);
        const data = await res.json();
        displayPhotos(data);
    }
    catch (err) {
        console.log(err);
    }
}

const displayPhotos = photos => {
    const photosContainer = document.getElementById('photos-container');

    // show only 9
    photos = photos.slice(0, 9);

    // dispaly photo
    photos.forEach(photo => {
        // console.log(photo);
        const photosDiv = document.createElement('div');
        photosDiv.classList.add('col');
        photosDiv.innerHTML = `
        <div onclick="loadPhotoDetail(${photo.id})" class="card h-100">
            <img src="${photo.thumbnailUrl}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${photo.title}</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in
                to additional content. This content is a little bit longer.</p>
            </div>
        </div>
        `;
        photosContainer.appendChild(photosDiv);
    })
}

const loadPhotoDetail = async (id) => {
    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`);
        const data = await res.json();
        displayPhotoDetail(data);
    }
    catch (err) {
        console.log(err);
    }
}

const displayPhotoDetail = photo => {
    console.log(photo);
}

loadPhotos();