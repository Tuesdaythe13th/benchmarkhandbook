/*
 * MasterDoctrine — ZERO-DAY ETHICS
 * A Metrological Framework for AI Evaluation, Benchmark Governance, and Evidentiary Assurance
 * Project: Deus Ex Dolore · ARTIFEX Labs Master Doctrine
 * Author: Tues Day, Director of Research, ARTIFEX Labs
 * Version: Final Integrated Synthesis — Full Landscape (35 Sections)
 * Design: Industrial Manifesto Brutalism
 */

import DoctrineHero from "./doctrine/DoctrineHero";
import DoctrineSections1to5 from "./doctrine/DoctrineSections1to5";
import DoctrineTransparency from "./doctrine/DoctrineTransparency";
import DoctrineGovernanceFrameworks from "./doctrine/DoctrineGovernanceFrameworks";
import DoctrineSections6to10 from "./doctrine/DoctrineSections6to10";
import DoctrineSections11to16 from "./doctrine/DoctrineSections11to16";
import DoctrineEthicsAndChallenges from "./doctrine/DoctrineEthicsAndChallenges";
import DoctrineSections17to21 from "./doctrine/DoctrineSections17to21";

export default function MasterDoctrine() {
  return (
    <div style={{ background: "#FFFFFF", minHeight: "100vh" }}>
      {/* Hero + Abstract + Attribution */}
      <DoctrineHero />
      {/* §1 Evidentiary Mismatch, §2 State of AI Eval, §3 Kinetic Threshold, §4 Metrological Foundations, §16 BBOM */}
      <DoctrineSections1to5 />
      {/* §5 Model Transparency, §6 Post-Deployment, §7 Data Provenance, §8 Privacy & Formal Safety */}
      <DoctrineTransparency />
      {/* §9 Multi-Modal, §10 Economics, §11 Standards, §12 Human Rights, §13 Open-Source, §14 Emergent Risk, §15 NIST/ISO */}
      <DoctrineGovernanceFrameworks />
      {/* §17 Void & Access Stack, §18 Tripartite Harm, §19 Cross-Cultural, §20 Methods, §21 Systems Thinking */}
      <DoctrineSections6to10 />
      {/* §22 Garcia, §23 Intimacy, §24 Child Safety, §25 Moral Competence, §27 Cemetery, §28 Burden */}
      <DoctrineSections11to16 />
      {/* §26 Broader Ethics, §31 Limitations, §32 Open Challenges, §34 Glossary */}
      <DoctrineEthicsAndChallenges />
      {/* §29 Governance/Liability, §30 Ecological, §33 Conclusion, §35 Bibliography */}
      <DoctrineSections17to21 />
    </div>
  );
}
