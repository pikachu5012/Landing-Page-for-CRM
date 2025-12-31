'use client';

import { FolderMinus, Plus, Users } from "lucide-react";
import { motion } from "framer-motion";

export interface StepCard {
  id: string;
  number: string;
  title: string;
  buttonText: string;
}

interface StackedCardProps {
  index: number;
  step: StepCard;
  onDragEnd: () => void;
  isDraggable: boolean;
  onDragStart: () => void;
}

export default function StackedCard({ index, step, onDragEnd, isDraggable, onDragStart }: StackedCardProps) {
  // ============================================
  // CARD STACKING VISUAL PROPERTIES
  // ============================================
  // Calculate scale: Each card behind is 5% smaller (creates depth effect)
  // Front card (index 0) = 100%, Second = 95%, Third = 90%
  const scale = 1 - (index * 0.05);

  // Opacity: Only the front card is fully visible, others are semi-transparent
  const opacity = index === 0 ? 1 : 0.4;

  // Vertical offset: Each card is offset 30px down to create stacking effect
  const translateY = index * 30;

  // Horizontal offset: Each card is offset 20px to the right for depth
  const translateX = index * 20;

  // Map step numbers to their specific drop-shadow filters
  const shadowFilters: Record<string, string> = {
    'One': 'drop-shadow(0 2px 4.5px rgba(1, 87, 155, 0.58))', // Blue
    'Two': 'drop-shadow(0 2px 4.5px rgba(13, 166, 31, 0.58))', // Green
    'Three': 'drop-shadow(0 2px 4.5px rgba(174, 37, 37, 0.58))', // Red
  };

  // Map step numbers to their specific text colors
  const textColors: Record<string, string> = {
    'One': '#01579B', // Blue
    'Two': '#0DA61F', // Green
    'Three': '#AE2525', // Red
  };

  const shadowFilter = shadowFilters[step.number] || shadowFilters['One'];
  const textColor = textColors[step.number] || textColors['One'];

  return (
    <motion.div
      id={step.id}
      className="absolute inset-0 flex items-center justify-center"
      style={{
        // ============================================
        // Z-INDEX LAYERING
        // ============================================
        // Front card (index 0) = z-index 3 (topmost)
        // Second card (index 1) = z-index 2 (middle)
        // Third card (index 2) = z-index 1 (bottom)
        // This ensures proper stacking order with front card always on top
        zIndex: 3 - index,

        // Initial position values (will be animated by framer-motion)
        x: translateX,
        y: translateY,
        scale,
        opacity,
      }}

      // ============================================
      // DRAG FUNCTIONALITY
      // ============================================
      // Only allow dragging for the top card (index 0)
      // Other cards are not draggable to maintain stack order
      drag={isDraggable}

      // Define drag boundaries: card can be dragged within these limits
      // Allows movement in all directions (left/right/up/down)
      dragConstraints={{ left: -200, right: 200, top: -200, bottom: 400 }}

      // Elastic effect: card slightly bounces back when released near boundaries
      dragElastic={0.2}

      // ============================================
      // DRAG START DETECTION
      // ============================================
      // When user starts dragging, pause auto-rotation
      onDragStart={onDragStart}

      // ============================================
      // DRAG END DETECTION & TRIGGER
      // ============================================
      // When user releases the card after dragging
      onDragEnd={(event, info) => {
        // Calculate total distance dragged using Pythagorean theorem
        // This measures how far the card moved from its starting position
        const distance = Math.sqrt(info.offset.x ** 2 + info.offset.y ** 2);

        // If card was dragged more than 150px in any direction, move it to back
        // This threshold ensures intentional drags trigger the reorder
        if (distance > 150) {
          onDragEnd(); // Trigger parent function to reorder cards
        }
        // If dragged less than 150px, card will spring back to original position
      }}

      // ============================================
      // ANIMATION PROPERTIES
      // ============================================
      // Animate to these values when card position changes
      // When a card moves to back, these values update and animate smoothly
      animate={{
        x: translateX,    // Horizontal position
        y: translateY,    // Vertical position
        scale,            // Size (smaller for cards behind)
        opacity,          // Transparency (less visible for cards behind)
      }}

      // ============================================
      // SPRING ANIMATION CONFIGURATION
      // ============================================
      // Spring physics for natural, bouncy animations
      transition={{
        type: "spring",      // Use spring physics (like a rubber band)
        stiffness: 300,      // How "stiff" the spring is (higher = faster/snappier)
        damping: 30,         // How much the spring resists motion (prevents bouncing forever)
      }}
    >
      {/* ============================================
          CARD CONTENT CONTAINER
          ============================================ */}
      <motion.div
        className="relative bg-white rounded-2xl shadow-2xl p-10 flex flex-col justify-between border border-primary cursor-grab active:cursor-grabbing"
        style={{ width: '490px', height: '636px' }}
        // Change cursor to "grabbing" while actively dragging
        whileDrag={{ cursor: 'grabbing' }}
      >
        {/* Number with colored glow effect - centered at top */}
        <div className="text-center">
          <h3
            className="text-5xl font-bold"
            style={{
              color: textColor,
              filter: shadowFilter,
            }}
          >
            {step.number}
          </h3>
        </div>

        {/* Title with icon - centered in middle */}
        <div className="flex items-center justify-center gap-3">
          <h4 className="text-4xl font-bold text-gray-800">{step.title}</h4>
          {step.number === 'Two' ? (
            <Users className="w-8 h-8 text-gray-600" />
          ) : (
            <FolderMinus className="w-8 h-8 text-gray-600" />
          )}
        </div>

        {/* Button - centered at bottom */}
        <div className="flex justify-center">
          <button className="bg-gray-800 text-white px-8 py-4 rounded-xl flex items-center gap-3 shadow-lg hover:bg-gray-700 transition-colors">
            <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
              <Plus className="w-5 h-5" />
            </div>
            <span className="font-semibold text-lg">{step.buttonText}</span>
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

