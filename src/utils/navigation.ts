// An array of links for navigation bar
const navBarLinks = [
  { name: "Home", url: "/" },
  { name: "Produtos", url: "/produtos" },
  { name: "Serviços", url: "/servicos" },
  { name: "Sobre", url: "/sobre" },
  { name: "Contatos", url: "/contactos" },
];
// An array of links for footer
const footerLinks = [
  {
    section: "Empresa",
    links: [
      { name: "Sobre nós", url: "/sobre" },
      { name: "Produtos", url: "/produtos" },
      { name: "Serviços", url: "/servicos" },
      { name: "Contatos", url: "/contactos" },
    ],
  },
  {
    section: "Produtos",
    links: [
      { name: "Construção Civil", url: "/produtos" },
      { name: "Indústria", url: "/produtos" },
      { name: "Máquinas", url: "/produtos" },
      { name: "Ferramentas", url: "/produtos" },
    ],
  },
  {
    section: "Informações",
    links: [
      { name: "FAQ", url: "/#faq" },
      { name: "Testemunhos", url: "/produtos/#testemunhos" },
    ],
  },
];
// An object of links for social icons
const socialLinks = {
  facebook: "https://www.facebook.com/",
  x: "https://twitter.com/",
  github: "https://github.com/mearashadowfax/ScrewFast",
  google: "https://www.google.com/",
  whatsApp: "https://whatsapp.com/",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};
