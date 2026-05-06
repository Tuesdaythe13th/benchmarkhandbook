/*
 * MasterDoctrine — ZERO-DAY ETHICS
 * A Metrological Framework for AI Evaluation, Benchmark Governance, and Evidentiary Assurance
 * Project: Deus Ex Dolore · ARTIFEX Labs Master Doctrine
 * Author: Tues Day, Director of Research, ARTIFEX Labs
 * Design: Industrial Manifesto Brutalism
 */

import DoctrineHero from "./doctrine/DoctrineHero";
import DoctrineSections1to5 from "./doctrine/DoctrineSections1to5";
import DoctrineSections6to10 from "./doctrine/DoctrineSections6to10";
import DoctrineSections11to16 from "./doctrine/DoctrineSections11to16";
import DoctrineSections17to21 from "./doctrine/DoctrineSections17to21";

export default function MasterDoctrine() {
  return (
    <div style={{ background: "#FFFFFF", minHeight: "100vh" }}>
      <DoctrineHero />
      <DoctrineSections1to5 />
      <DoctrineSections6to10 />
      <DoctrineSections11to16 />
      <DoctrineSections17to21 />
    </div>
  );
}
