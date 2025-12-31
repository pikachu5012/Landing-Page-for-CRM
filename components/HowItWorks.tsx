'use client';

import { CreditCard } from "lucide-react";
import { useState, useEffect, useRef, useCallback } from "react";
import StackedCard, { StepCard } from "./StackedCard";

const initialSteps: StepCard[] = [
  { id: 'step1', number: 'One', title: 'Create Your Project', buttonText: 'Add Project' },
  { id: 'step2', number: 'Two', title: 'Invite Your Team', buttonText: 'Invite Member' },
  { id: 'step3', number: 'Three', title: 'Add Your Clients', buttonText: 'Add Client' },
];

export default function HowItWorks() {
  // ============================================
  // STATE MANAGEMENT
  // ============================================
  // Store the current order of cards in state
  // When cards are reordered, this state updates and triggers re-render
  const [steps, setSteps] = useState<StepCard[]>(initialSteps);

  // Track if a card is currently being dragged (to pause auto-rotation)
  const [isDragging, setIsDragging] = useState(false);

  // Reference to the interval for auto-rotation
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // ============================================
  // CARD REORDERING LOGIC
  // ============================================
  // This function is called when a card is dragged far enough (>150px)
  // or when auto-rotation triggers it
  // It moves the front card (index 0) to the back of the stack
  // Using useCallback to prevent unnecessary re-renders
  const handleDragEnd = useCallback(() => {
    setSteps((prevSteps) => {
      // Create a copy of the current steps array
      const newSteps = [...prevSteps];

      // Remove the first card from the array (the one that was dragged)
      // shift() removes and returns the first element
      const firstCard = newSteps.shift();

      // If a card was successfully removed, add it to the end
      // This creates a circular rotation: [Card1, Card2, Card3] → [Card2, Card3, Card1]
      if (firstCard) {
        newSteps.push(firstCard);
      }

      // Return the new order, which triggers React to re-render
      // Framer Motion will animate the cards to their new positions
      return newSteps;
    });
  }, []);

  // ============================================
  // DRAG STATE HANDLERS
  // ============================================
  // Called when user starts dragging a card
  const handleDragStart = () => {
    setIsDragging(true);
  };

  // Called when user stops dragging (after onDragEnd completes)
  const handleDragStop = () => {
    setIsDragging(false);
  };

  // ============================================
  // AUTO-ROTATION EFFECT
  // ============================================
  // Automatically rotate cards every 300ms when not being dragged
  useEffect(() => {
    // Clear any existing interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    // Only start auto-rotation if not currently dragging
    if (!isDragging) {
      // Set up interval to rotate cards every 300ms
      intervalRef.current = setInterval(() => {
        handleDragEnd(); // Rotate the cards
      }, 2000);
    }

    // Cleanup: clear interval when component unmounts or when dragging state changes
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isDragging, handleDragEnd]); // Re-run when dragging state changes

  return (
    <section id="howItWorks" className="py-20 bg-background">
      <div className="container mx-auto text-center mb-16">
        <h2 className="text-[105px] text-primary text-center px-4 font-bold">
          How It Works
        </h2>
        <h3 className="text-[60px] text-primary">
          Get Started in <span className="text-secondary">3</span> Simple Steps
        </h3>
        <div className="flex items-center justify-center gap-4 py-2">
          <p className="text-lg text-gray-500">No credit card required</p>
          <CreditCard className="w-10 h-10 text-gray-500" />
          <p className="text-lg text-gray-500">Setup in 5 minutes</p>
        </div>
      </div>

      {/* ============================================
          STACKED CARDS CONTAINER
          ============================================ */}
      <div className="relative flex items-center justify-center min-h-[700px]">
        <div className="relative" style={{ width: '490px', height: '636px' }}>
          {/* Render each card in the current order */}
          {steps.map((step, index) => (
            <StackedCard
              key={step.id}
              index={index}           // Position in stack (0 = front, 1 = middle, 2 = back)
              step={step}            // Card data (number, title, button text)
              onDragEnd={() => {
                handleDragEnd();
                handleDragStop(); // Resume auto-rotation after manual drag
              }}
              onDragStart={handleDragStart}  // Pause auto-rotation when dragging starts
              isDraggable={index === 0}  // Only the front card (index 0) can be dragged
            />
          ))}
        </div>
      </div>
    </section>
  );
}
