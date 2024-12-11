import aerialView from "@/images/aerial-view.avif";
import industry from "@/images/industry.avif";
import machines from "@/images/machines.avif";
import tools from "@/images/tools.avif";

export const materials = [
  {
    title: "Construção Civil",
    materials: [
      "Vergalhões para Construção",
      "Fio Máquina",
      "Arames",
      "Pregos",
      "Telas",
      "Treliças",
      "Telas Coluna",
    ],
    image: aerialView,
    alt: "Construção civil",
  },
  {
    title: "Indústria",
    materials: [
      "Tubos",
      "Chapas de aço",
      "Bobinas",
      "Perfis",
      "Slytyer",
      "Telhas",
      "Barras Chatas",
      "Barras quadradas",
      "Barras Redondas",
      "Cantoneiras",
    ],
    image: industry,
    alt: "Indústria",
  },
  {
    title: "Máquinas",
    materials: [
      "Eletrodos",
      "Abrasivos",
      "Máquinas de solda",
      "Varetas",
      "Arames",
      "Insumos e Acessórios",
    ],
    image: machines,
    alt: "Máquinas",
  },
  {
    title: "Ferramentas",
    materials: [
      "Parafusadeiras",
      "Furadeiras, marteletes e chaves de impacto",
      "Misturados de acessórios",
      "Brocas",
      "Sopradores, lavadoras e aparador de grama",
      "Máquinas para cortes",
      "Soldas",
      "Discos",
      "Ferro e aço",
      "Ferramentas manuais",
      "Jogos de ferramentas",
      "Jogos de soquetes",
      "Medição",
      "Ventosa",
      "Pistolas de pintura",
      "Armazenagem",
      "Automotivo",
      "Linha gourmet",
      "Camping",
      "Sola",
      "Bauma",
    ],
    image: tools,
    alt: "Ferramentas",
  },
];
