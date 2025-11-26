const galleryItems = [
    {
        title: "Razer DeathAdder V3 Pro",
        description: "A victory for the pros, this ultra-lightweight ergonomic esports mouse is refined with top-tier pros. It features the Razer Focus Pro 30K Optical Sensor for flawless tracking on any surface, including glass.",
        image: "images/mouse1.jpg",
        specs: {
            weight: "63g",
            max_dpi: "30,000 DPI",
            battery_life: "Up to 90 hours",
            connection_type: "Wireless (Razer HyperSpeed)"
        },
        url: "https://www.rtings.com/mouse/reviews/razer/deathadder-v3-pro"
    },
    {
        title: "Logitech G Pro X Superlight 2",
        description: "The next evolution of the championship-winning icon. Now faster and more precise with LIGHTFORCE hybrid switches and the HERO 2 sensor, all in a 60g design.",
        image: "images/mouse2.jpg",
        specs: {
            weight: "60g",
            max_dpi: "32,000 DPI",
            battery_life: "Up to 95 hours",
            connection_type: "Wireless (LIGHTSPEED)"
        },
        url: "https://www.rtings.com/mouse/reviews/logitech/g-pro-x-superlight-2"
    },
    {
        title: "Logitech G502 X Lightspeed",
        description: "The legendary G502 design, reinvented. Now featuring hybrid optical-mechanical LIGHTFORCE switches for incredible speed and reliability, plus the HERO 25K sensor for sub-micron precision.",
        image: "images/mouse3.jpg",
        specs: {
            weight: "102g",
            max_dpi: "25,600 DPI",
            battery_life: "Up to 140 hours",
            connection_type: "Wireless (LIGHTSPEED)"
        },
        url: "https://www.pcgamer.com/logitech-g502-x-lightspeed-review/"
    },
    {
        title: "Razer Viper V3 Pro",
        description: "The GOAT of wireless esports mice returns with a new, ultra-lightweight design. Validated by top pros, it features the Focus Pro 35K Optical Sensor Gen-2 for unmatched accuracy.",
        image: "images/mouse4.jpg",
        specs: {
            weight: "54g",
            max_dpi: "35,000 DPI",
            battery_life: "Up to 95 hours",
            connection_type: "Wireless (Razer HyperSpeed)"
        },
        url: "https://www.rtings.com/mouse/reviews/razer/viper-v3-pro"
    },
    {
        title: "SteelSeries Aerox 3 Wireless",
        description: "Lightning fast and ultra-lightweight, the Aerox 3 Wireless features a holey design to cut weight to 68g. AquaBarrier protection ensures it's safe from dust and water spills.",
        image: "images/mouse5.jpg",
        specs: {
            weight: "68g",
            max_dpi: "18,000 DPI",
            battery_life: "Up to 200 hours (Bluetooth) / 80 hours (2.4GHz)",
            connection_type: "Wireless (2.4GHz & Bluetooth)"
        },
        url: "https://www.rtings.com/mouse/reviews/steelseries/aerox-3-wireless"
    },
    {
        title: "Corsair Scimitar Elite Wireless SE",
        description: "The ultimate MMO mouse, now wireless. With 16 programmable buttons and the Key Slider control system, you can customize your layout for maximum efficiency in any raid.",
        image: "images/mouse6.jpg",
        specs: {
            weight: "114g",
            max_dpi: "26,000 DPI",
            battery_life: "Up to 150 hours (Bluetooth)",
            connection_type: "Wireless (SLIPSTREAM & Bluetooth)"
        },
        url: "https://www.rtings.com/mouse/reviews/corsair/scimitar-elite-wireless"
    },
    {
        title: "HyperX Pulsefire Haste 2",
        description: "Built for speeders who need every millisecond, the Pulsefire Haste 2 weighs just 53g. It houses the precision HyperX 26K sensor and custom switches rated for 100 million clicks.",
        image: "images/mouse7.jpg",
        specs: {
            weight: "53g",
            max_dpi: "26,000 DPI",
            battery_life: "N/A (Wired)",
            connection_type: "Wired"
        },
        url: "https://www.techpowerup.com/review/hyperx-pulsefire-haste-2/"
    },
    {
        title: "Razer Basilisk V3",
        description: "The quintessential ergonomic gaming mouse with 10+1 programmable buttons and an intelligent scroll wheel. Customize it with 11 Razer Chroma RGB lighting zones.",
        image: "images/mouse8.jpg",
        specs: {
            weight: "101g",
            max_dpi: "26,000 DPI",
            battery_life: "N/A (Wired)",
            connection_type: "Wired"
        },
        url: "https://www.rtings.com/mouse/reviews/razer/basilisk-v3"
    },
    {
        title: "SteelSeries Rival 3",
        description: "Engineered for durability and performance, the Rival 3 features a TrueMove Core optical sensor and brilliant prism lighting. Its high-grade polymer build ensures it withstands the most intense gaming sessions.",
        image: "images/mouse9.jpg",
        specs: {
            weight: "77g (excluding cable)",
            max_dpi: "8,500 DPI",
            battery_life: "N/A (Wired)",
            connection_type: "Wired"
        },
        url: "https://www.techpowerup.com/review/steelseries-rival-3/"
    },
    {
        title: "Corsair Sabre RGB Pro Wireless",
        description: "Designed for and tested by esports pros, this mouse features an ultra-lightweight ergonomic shape and SLIPSTREAM WIRELESS technology for sub-1ms transmission speeds.",
        image: "images/mouse10.jpg",
        specs: {
            weight: "79g",
            max_dpi: "26,000 DPI",
            battery_life: "Up to 90 hours (no lighting)",
            connection_type: "Wireless (SLIPSTREAM & Bluetooth)"
        },
        url: "https://www.rtings.com/mouse/reviews/corsair/sabre-rgb-pro-wireless"
    }
];

function loadGallery() {
    const galleryContainer = document.getElementById('gallery-container');
    
    for (let i = 0; i < galleryItems.length; i++) {
        const item = galleryItems[i];
        
        const colDiv = document.createElement('div');
        colDiv.className = 'col-md-4 col-sm-6 mb-4';
        
        colDiv.innerHTML = `
            <div class="card">
                <img src="${item.image}" class="card-img-top" alt="${item.title}">
                <div class="card-body">
                    <h5 class="card-title">${item.title}</h5>
                    <p class="card-text">${item.description}</p>
                    <button class="btn btn-primary btn-sm view-details-btn" data-index="${i}">View Details</button>
                </div>
            </div>
        `;
        
        galleryContainer.appendChild(colDiv);
    }

    const buttons = document.querySelectorAll('.view-details-btn');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const index = this.getAttribute('data-index');
            openModal(index);
        });
    });
}

function openModal(index) {
    const item = galleryItems[index];
    
    document.getElementById('mouseModalLabel').innerText = item.title;
    document.getElementById('modal-image').src = item.image;
    document.getElementById('modal-description').innerText = item.description;
    
    document.getElementById('modal-weight').innerText = item.specs.weight;
    document.getElementById('modal-dpi').innerText = item.specs.max_dpi;
    document.getElementById('modal-battery').innerText = item.specs.battery_life;
    document.getElementById('modal-connection').innerText = item.specs.connection_type;
    
    document.getElementById('modal-link').href = item.url;
    
    const myModal = new bootstrap.Modal(document.getElementById('mouseModal'));
    myModal.show();
}

document.addEventListener('DOMContentLoaded', loadGallery);
