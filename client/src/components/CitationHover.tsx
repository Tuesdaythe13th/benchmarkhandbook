import React, { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ExternalLink } from "lucide-react";

interface Citation {
  authors: string;
  year: number;
  title: string;
  publication?: string;
  doi?: string;
  url?: string;
  pages?: string;
}

interface CitationHoverProps {
  citation: Citation;
  children: React.ReactNode;
  className?: string;
}

/**
 * CitationHover Component
 * Displays an inline citation with a hover tooltip showing full reference details
 * Supports DOI links and external URLs
 */
export const CitationHover: React.FC<CitationHoverProps> = ({
  citation,
  children,
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const formatCitation = () => {
    let formatted = `${citation.authors} (${citation.year}). ${citation.title}`;

    if (citation.publication) {
      formatted += `. ${citation.publication}`;
    }

    if (citation.pages) {
      formatted += `, pp. ${citation.pages}`;
    }

    return formatted;
  };

  const getExternalLink = () => {
    if (citation.doi) {
      return `https://doi.org/${citation.doi}`;
    }
    return citation.url;
  };

  return (
    <Tooltip open={isOpen} onOpenChange={setIsOpen}>
      <TooltipTrigger asChild>
        <span
          className={`inline-flex items-center gap-1 cursor-help border-b border-dashed border-orange-500 hover:border-orange-600 transition-colors ${className}`}
        >
          {children}
          <span className="text-xs text-orange-500 font-semibold">
            [{citation.year}]
          </span>
        </span>
      </TooltipTrigger>
      <TooltipContent side="top" className="max-w-xs bg-slate-900 text-white border border-orange-500">
        <div className="space-y-2">
          <p className="text-sm font-semibold">{citation.authors}</p>
          <p className="text-xs text-slate-300">{formatCitation()}</p>
          {getExternalLink() && (
            <a
              href={getExternalLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-orange-400 hover:text-orange-300 transition-colors"
            >
              View Source
              <ExternalLink size={12} />
            </a>
          )}
        </div>
      </TooltipContent>
    </Tooltip>
  );
};

export default CitationHover;
