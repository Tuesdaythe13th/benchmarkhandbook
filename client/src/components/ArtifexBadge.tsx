import React, { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Lightbulb } from "lucide-react";

interface ArtifexBadgeProps {
  conceptName: string;
  description?: string;
  className?: string;
  variant?: "inline" | "block";
}

/**
 * ArtifexBadge Component
 * Marks proprietary Artifex Labs concepts with an interactive badge
 * Hover to see concept description
 */
export const ArtifexBadge: React.FC<ArtifexBadgeProps> = ({
  conceptName,
  description,
  className = "",
  variant = "inline",
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const baseStyles =
    "inline-flex items-center gap-1 px-2 py-1 rounded-full bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-xl transition-all duration-200";

  const blockStyles = "flex items-center gap-2 px-3 py-2 rounded-lg";

  const containerClass = variant === "block" ? blockStyles : baseStyles;

  return (
    <Tooltip open={isOpen} onOpenChange={setIsOpen}>
      <TooltipTrigger asChild>
        <span className={`${containerClass} ${className} cursor-help`}>
          <Lightbulb size={variant === "block" ? 16 : 12} />
          <span>ARTIFEX LABS</span>
          {variant === "block" && <span className="text-sm font-normal">{conceptName}</span>}
        </span>
      </TooltipTrigger>
      <TooltipContent side="top" className="max-w-sm bg-slate-900 text-white border border-orange-500">
        <div className="space-y-1">
          <p className="font-semibold text-orange-400">{conceptName}</p>
          {description && (
            <p className="text-xs text-slate-300">{description}</p>
          )}
          <p className="text-xs text-slate-400 italic pt-1">
            Proprietary to ARTIFEX Labs — Deus Ex Dolore Research Program
          </p>
        </div>
      </TooltipContent>
    </Tooltip>
  );
};

export default ArtifexBadge;
