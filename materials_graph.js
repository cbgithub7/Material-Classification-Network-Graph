var color = "gray";
var len = undefined;

var nodes = [
    { id: 0, label: "All Materials", group: 0 },
    { id: 1, label: "Natural Materials", group: 2 },
    { id: 2, label: "Organic", group: 3 },
    { id: 3, label: "Polymers", group: 4 },
    { id: 4, label: "Thermoplastics", group: 5 },
    { id: 5, label: "Polyethylene", group: 6 },
    { id: 6, label: "Polypropylene", group: 6 },
    { id: 7, label: "Polystyrene", group: 6 },
    { id: 8, label: "PVC", group: 6 },
    { id: 9, label: "PET", group: 6 },
    { id: 10, label: "Thermosets", group: 5 },
    { id: 11, label: "Epoxy", group: 7 },
    { id: 12, label: "Phenolic", group: 7 },
    { id: 13, label: "Polyurethane", group: 7 },
    { id: 14, label: "Silicone", group: 7 },
    { id: 15, label: "Elastomers", group: 5 },
    { id: 16, label: "Natural Rubber", group: 8 },
    { id: 17, label: "Synthetic Rubber", group: 8 },
    { id: 18, label: "Biopolymers", group: 4 },
    { id: 19, label: "Cellulose", group: 9 },
    { id: 20, label: "Starch-based polymers", group: 9 },
    { id: 21, label: "PLA (polylactic acid)", group: 9 },
    { id: 22, label: "PHA (polyhydroxyalkanoates)", group: 9 },
    { id: 23, label: "Inorganic", group: 3 },
    { id: 24, label: "Minerals", group: 10 },
    { id: 25, label: "Quartz", group: 11 },
    { id: 26, label: "Feldspar", group: 11 },
    { id: 27, label: "Calcite", group: 11 },
    { id: 28, label: "Talc", group: 11 },
    { id: 29, label: "Kaolin", group: 11 },
    { id: 30, label: "Metals", group: 10 },
    { id: 31, label: "Ferrous", group: 12 },
    { id: 32, label: "Iron", group: 13 },
    { id: 33, label: "Steel (Carbon, Stainless)", group: 13 },
    { id: 34, label: "Cast Iron", group: 13 },
    { id: 35, label: "Non-ferrous", group: 12 },
    { id: 36, label: "Aluminum", group: 14 },
    { id: 37, label: "Copper", group: 14 },
    { id: 38, label: "Zinc", group: 14 },
    { id: 39, label: "Lead", group: 14 },
    { id: 40, label: "Ceramics", group: 10 },
    { id: 41, label: "Silicates", group: 15 },
    { id: 42, label: "Oxides", group: 15 },
    { id: 43, label: "Carbides", group: 15 },
    { id: 44, label: "Nitrides", group: 15 },
    { id: 45, label: "Synthetic Materials", group: 2 },
    { id: 46, label: "Polymers", group: 16 },
    { id: 47, label: "Thermoplastics", group: 17 },
    { id: 48, label: "Engineering Plastics", group: 18 },
    { id: 49, label: "Nylon", group: 19 },
    { id: 50, label: "ABS", group: 19 },
    { id: 51, label: "Polycarbonate", group: 19 },
    { id: 52, label: "PEEK", group: 19 },
    { id: 53, label: "PMMA", group: 19 },
    { id: 54, label: "Commodity Plastics", group: 18 },
    { id: 55, label: "Polyethylene", group: 19 },
    { id: 56, label: "Polypropylene", group: 19 },
    { id: 57, label: "Polystyrene", group: 19 },
    { id: 58, label: "PVC", group: 19 },
    { id: 59, label: "PET", group: 19 },
    { id: 60, label: "Thermosets", group: 17 },
    { id: 61, label: "Epoxies", group: 20 },
    { id: 62, label: "Phenolics", group: 20 },
    { id: 63, label: "Polyurethanes", group: 20 },
    { id: 64, label: "Silicones", group: 20 },
    { id: 65, label: "Elastomers", group: 17 },
    { id: 66, label: "SBR (Styrene Butadiene Rubber)", group: 21 },
    { id: 67, label: "NBR (Nitrile Butadiene Rubber)", group: 21 },
    { id: 68, label: "CR (Chloroprene Rubber)", group: 21 },
    { id: 69, label: "EPDM (Ethylene Propylene Diene Monomer)", group: 21 },
    { id: 70, label: "Composites", group: 16 },
    { id: 71, label: "Fiber-Reinforced", group: 22 },
    { id: 72, label: "Glass Fiber", group: 23 },
    { id: 73, label: "Carbon Fiber", group: 23 },
    { id: 74, label: "Aramid Fiber", group: 23 },
    { id: 75, label: "Particle-Reinforced", group: 22 },
    { id: 76, label: "Polymer Matrix Composites", group: 24 },
    { id: 77, label: "Metal Matrix Composites", group: 24 },
    { id: 78, label: "Ceramic Matrix Composites", group: 24 },
    { id: 79, label: "Foams", group: 16 },
    { id: 80, label: "Polyurethane foam", group: 25 },
    { id: 81, label: "Polystyrene foam", group: 25 },
    { id: 82, label: "Polyethylene foam", group: 25 },
    { id: 83, label: "Advanced Materials", group: 2 },
    { id: 84, label: "Nanostructured Materials", group: 26 },
    { id: 85, label: "Carbon Nanotubes", group: 27 },
    { id: 86, label: "Graphene", group: 27 },
    { id: 87, label: "Nanocomposites", group: 27 },
    { id: 88, label: "Smart Materials", group: 26 },
    { id: 89, label: "Shape Memory Alloys", group: 28 },
    { id: 90, label: "Piezoelectric Materials", group: 28 },
    { id: 91, label: "Magnetostrictive Materials", group: 28 },
    { id: 92, label: "Functional Materials", group: 26 },
    { id: 93, label: "Conductive Polymers", group: 29 },
    { id: 94, label: "Photovoltaic Materials", group: 29 },
    { id: 95, label: "Luminescent Materials", group: 29 },
    { id: 96, label: "Magnetic Materials", group: 29 },
  ];

var edges = [
  // Additional connections for All Materials
  { from: 0, to: 1 }, // All Materials -> Natural Materials
  { from: 0, to: 45 }, // All Materials -> Synthetic Materials
  { from: 0, to: 83 }, // All Materials -> Advanced Materials

  // Natural Materials connections
  { from: 1, to: 2 }, // Natural Materials -> Organic
  { from: 1, to: 23 }, // Natural Materials -> Inorganic

  // Organic connections
  { from: 2, to: 3 }, // Organic -> Polymers
  { from: 2, to: 18 }, // Organic -> Biopolymers

  // Polymers connections
  { from: 3, to: 4 }, // Polymers -> Thermoplastics
  { from: 3, to: 10}, // Polymers -> Thermosets
  { from: 3, to: 15 }, // Polymers -> Elastomers

  // Thermoplastics connections
  { from: 4, to: 5 }, // Thermoplastics -> Polyethylene
  { from: 4, to: 6 }, // Thermoplastics -> Polypropylene
  { from: 4, to: 7 }, // Thermoplastics -> Polystyrene
  { from: 4, to: 8 }, // Thermoplastics -> PVC
  { from: 4, to: 9 }, // Thermoplastics -> PET
  
  // Thermosets connections
  { from: 10, to: 11 }, // Thermosets -> Epoxy
  { from: 10, to: 12 }, // Thermosets -> Phenolic
  { from: 10, to: 13 }, // Thermosets -> Polyurethane
  { from: 10, to: 14 }, // Thermosets -> Silicone

  // Elastomers connections
  { from: 15, to: 16 }, // Elastomers -> Natural Rubber
  { from: 15, to: 17 }, // Elastomers -> Synthetic Rubber

  // Biopolymers connections
  { from: 18, to: 19 }, // Biopolymers -> Cellulose
  { from: 18, to: 20 }, // Biopolymers -> Starch-based polymers
  { from: 18, to: 21 }, // Biopolymers -> PLA (polylactic acid)
  { from: 18, to: 22 }, // Biopolymers -> PHA (polyhydroxyalkanoates)

  // Inorganic connections
  { from: 23, to: 24 }, // Inorganic -> Minerals
  { from: 23, to: 30 }, // Inorganic -> Metals
  { from: 23, to: 40 }, // Inorganic -> Ceramics

  // Minerals connections
  { from: 24, to: 25 }, // Minerals -> Quartz
  { from: 24, to: 26 }, // Minerals -> Feldspar
  { from: 24, to: 27 }, // Minerals -> Calcite
  { from: 24, to: 28 }, // Minerals -> Talc
  { from: 24, to: 29 }, // Minerals -> Kaolin

  // Metals connections
  { from: 30, to: 31 }, // Metals -> Ferrous
  { from: 30, to: 35 }, // Metals -> Non-ferrous

  // Ferrous connections
  { from: 31, to: 32 }, // Ferrous -> Iron
  { from: 31, to: 33 }, // Ferrous -> Steel (Carbon, Stainless)
  { from: 31, to: 34 }, // Ferrous -> Cast Iron

  // Non-ferrous connections
  { from: 35, to: 36 }, // Non-ferrous -> Aluminum
  { from: 35, to: 37 }, // Non-ferrous -> Copper
  { from: 35, to: 38 }, // Non-ferrous -> Zinc
  { from: 35, to: 39 }, // Non-ferrous -> Lead

  // Ceramics connections
  { from: 40, to: 41 }, // Ceramics -> Silicates
  { from: 40, to: 42 }, // Ceramics -> Oxides
  { from: 40, to: 43 }, // Ceramics -> Carbides
  { from: 40, to: 44 }, // Ceramics -> Nitrides

  // Synthetic Materials connections
  { from: 45, to: 46 }, // Synthetic Materials -> Polymers
  { from: 45, to: 70 }, // Synthetic Materials -> Composites
  { from: 45, to: 79 }, // Synthetic Materials -> Foams

  // Polymers connections
  { from: 46, to: 47 }, // Polymers -> Thermoplastics
  { from: 46, to: 60 }, // Polymers -> Thermosets
  { from: 46, to: 65 }, // Polymers -> Elastomers
  
  // Thermoplastics connections
  { from: 47, to: 48 }, // Thermoplastics -> Engineering Plastics
  { from: 47, to: 54 }, // Thermoplastics -> Commodity Plastics
  
  // Engineering Plastics connections
  { from: 48, to: 49 }, // Engineering Plastics -> Nylon
  { from: 48, to: 50 }, // Engineering Plastics -> ABS
  { from: 48, to: 51 }, // Engineering Plastics -> Polycarbonate
  { from: 48, to: 52 }, // Engineering Plastics -> PEEK
  { from: 48, to: 53 }, // Engineering Plastics -> PMMA
  
  // Commodity Plastics connections
  { from: 54, to: 55 }, // Commodity Plastics -> Polyethylene
  { from: 54, to: 56 }, // Commodity Plastics -> Polypropylene
  { from: 54, to: 57 }, // Commodity Plastics -> Polystyrene
  { from: 54, to: 58 }, // Commodity Plastics -> PVC
  { from: 54, to: 59 }, // Commodity Plastics -> PET
  
  // Synthetic Thermosets connections
  { from: 60, to: 61}, // Synthetic Thermosets -> Epoxies
  { from: 60, to: 62}, // Synthetic Thermosets -> Phenolics
  { from: 60, to: 63}, // Synthetic Thermosets -> Polyurethanes
  { from: 60, to: 64}, // Synthetic Thermosets -> Silicones
  
  // Syntheic Elastomers connections
  { from: 65, to: 66}, // Synthetic Elastomers -> SBR (Styrene Butadiene Rubber)
  { from: 65, to: 67}, // Synthetic Elastomers -> NBR (Nitrile Butadiene Rubber)
  { from: 65, to: 68}, // Synthetic Elastomers -> CR (Chloroprene Rubber)
  { from: 65, to: 69}, // Synthetic Elastomers -> EPDM (Ethylene Propylene Diene Monomer)

  // Composites connections
  { from: 70, to: 71 }, // Composites -> Fiber-Reinforced
  { from: 70, to: 75 }, // Composites -> Particle-Reinforced

  // Fiber-Reinforced connections
  { from: 71, to: 72 }, // Fiber-Reinforced -> Glass Fiber
  { from: 71, to: 73 }, // Fiber-Reinforced -> Carbon Fiber
  { from: 71, to: 74 }, // Fiber-Reinforced -> Aramid Fiber

  // Particle-Reinforced connections
  { from: 75, to: 76 }, // Particle-Reinforced -> Polymer Matrix Composites
  { from: 75, to: 77 }, // Particle-Reinforced -> Metal Matrix Composites
  { from: 75, to: 78 }, // Particle-Reinforced -> Ceramic Matrix Composites

  // Foams connections
  { from: 79, to: 80 }, // Foams -> Polyurethane foam
  { from: 79, to: 81 }, // Foams -> Polystyrene foam
  { from: 79, to: 82 }, // Foams -> Polyethylene foam

  // Advanced Materials connections
  { from: 83, to: 84 }, // Advanced Materials -> Nanostructured Materials
  { from: 83, to: 88 }, // Advanced Materials -> Smart Materials
  { from: 83, to: 92 }, // Advanced Materials -> Functional Materials

  // Nanostructured Materials connections
  { from: 84, to: 85 }, // Nanostructured Materials -> Carbon Nanotubes
  { from: 84, to: 86 }, // Nanostructured Materials -> Graphene
  { from: 84, to: 87 }, // Nanostructured Materials -> Nanocomposites

  // Smart Materials connections
  { from: 88, to: 89 }, // Smart Materials -> Shape Memory Alloys
  { from: 88, to: 90 }, // Smart Materials -> Piezoelectric Materials
  { from: 88, to: 91 }, // Smart Materials -> Magnetostrictive Materials

  // Functional Materials connections
  { from: 92, to: 93 }, // Functional Materials -> Conductive Polymers
  { from: 92, to: 94 }, // Functional Materials -> Photovoltaic Materials
  { from: 92, to: 95 }, // Functional Materials -> Luminescent Materials
  { from: 92, to: 96 }, // Functional Materials -> Magnetic Materials
];

// create a network
var container = document.getElementById("mynetwork");
var data = {
  nodes: nodes,
  edges: edges,
};
var options = {
  nodes: {
    shape: "dot",
    size: 30,
    font: {
      size: 32,
      color: "#ffffff",
    },
    borderWidth: 2,
  },
  edges: {
    width: 2,
  },
};
network = new vis.Network(container, data, options);
