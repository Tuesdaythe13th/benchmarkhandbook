import React, { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { HelpCircle } from "lucide-react";

interface DefinitionTooltipProps {
  term: string;
  definition: string;
  children?: React.ReactNode;
  className?: string;
  showIcon?: boolean;
}

/**
 * DefinitionTooltip Component
 * Provides hover definitions for glossary terms and core concepts
 * Can wrap text or display as standalone icon
 */
export const DefinitionTooltip: React.FC<DefinitionTooltipProps> = ({
  term,
  definition,
  children,
  className = "",
  showIcon = true,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Tooltip open={isOpen} onOpenChange={setIsOpen}>
      <TooltipTrigger asChild>
        {children ? (
          <span
            className={`inline-flex items-center gap-1 cursor-help border-b border-dashed border-blue-400 hover:border-blue-500 transition-colors ${className}`}
          >
            {children}
            {showIcon && (
              <HelpCircle size={14} className="text-blue-400 opacity-60" />
            )}
          </span>
        ) : (
          <button
            className={`inline-flex items-center gap-1 text-blue-500 hover:text-blue-600 transition-colors ${className}`}
            onClick={(e) => e.preventDefault()}
          >
            <HelpCircle size={16} />
            {term}
          </button>
        )}
      </TooltipTrigger>
      <TooltipContent side="top" className="max-w-sm bg-blue-950 text-white border border-blue-500">
        <div className="space-y-2">
          <p className="font-semibold text-blue-300">{term}</p>
          <p className="text-sm text-blue-100">{definition}</p>
        </div>
      </TooltipContent>
    </Tooltip>
  );
};

export default DefinitionTooltip;
