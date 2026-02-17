import bmw from "../assets/images/BMW.png";
import logistikos from "../assets/images/logistikos.png";
import spotify from "../assets/images/spotify.png";
import stock from "../assets/images/stock.png";
import logins from "../assets/images/loginS.png";
import cmir from "../assets/images/CIMR.png";
import ecommerce from "../assets/images/ecommerce.png";


const work_data = [
    {
        id: 1,
        w_name: "Stock Management",
        slug: "stock-management-system",
        category: "Inventory management system",
        technologies: [ "LARAVEL", "MySQL", "JavaScript","Tailwind CSS"],
        demo: "",
        repo: null,
        sections: [
            {
                img: stock,
                description: "",
            },
        ],
    },
    {
        id: 2,
        w_name: "ecommerce",
        slug: "Ecommerce-Platform",
        category: "E-commerce platform",
        technologies: ["React", "Tailwind CSS","Stripe"],
        demo: "",
        repo: null,
        sections: [
            {
                img: ecommerce,
                description: "E-commerce platform with responsive design, product catalog, shopping cart, and checkout process.",
            },
        ],
    },
    {
        id: 3,
        w_name: "Spotify",
        slug: "spotify-clone",
        category: "Music streaming platform",
        technologies: ["React", "CSS"],
        demo: "https://spotify-react-css.netlify.app/",
        repo: null,
        sections: [
            {
                img: spotify,
                description: "Hero section with responsive banner, animated CTA and slider.",
            },
        ],
    },
    {
        id: 4,
        w_name: "BMW",
        slug: "bmw-marketing-site",
        category: "Marketing site",
        technologies: ["React", "Tailwind CSS"],
        demo: "https://bmw-clone-react-tailwind.netlify.app/",
        repo: null,
        sections: [
            {
                img: bmw,
                description:
                    "Hero section with responsive banner, animated CTA and slider.",
            },
        ],
    },
    {
        id: 5,
        w_name: "logistikos",
        slug: "logistikos-website",
        category: "Logistics company website",
        technologies: ["laravel", "MySQL", "JavaScript","Bootstrap"],
        demo: "",
        repo: null,
        sections: [
            {
                img: logistikos,
                description: "",
            },
        ],
    },
    {
        id: 6,
        w_name: "loginS",
        slug: "login-system",
        category: "Login system",
        technologies: ["PHP", "MySQL","Bootstrap","JavaScript","JQuery"],
        demo: "",
        repo: null,
        sections: [
            {
                img: logins,
                description: "",
            },
        ],
    },
    {
        id: 7,
        w_name: "cimr",
        slug: "cimr-website",
        category: "CIMR website",
        technologies: ["React", "MySQL","Bootstrap","CSS"],
        demo: "",
        repo: null,
        sections: [
            {
                img: cmir,
                description: "",
            },
        ],
    },
];

export default work_data;