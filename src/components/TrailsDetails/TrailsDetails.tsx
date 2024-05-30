// src/components/TrailsDetails/TrailsDetails.tsx
import React from "react";

// Definește tipul Trail
interface Trail {
  name: string;
  location?: string; // Adaugă alte proprietăți necesare, dacă există
}

// Definește tipul pentru props
interface TrailsDetailsProps {
  trail: Trail;
}

const TrailsDetails: React.FC<TrailsDetailsProps> = ({ trail }) => {
  return <h1>{trail.name}</h1>;
};

export default TrailsDetails;
