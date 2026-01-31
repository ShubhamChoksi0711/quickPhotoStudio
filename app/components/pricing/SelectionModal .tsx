'use client';

import { useState } from 'react';
import { X } from 'lucide-react';

interface AppointmentOption {
  title: string;
  subtitle: string;
  eventType: string;
}

interface SelectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (eventType: string) => void;
  options: AppointmentOption[];
}

export function SelectionModal({ isOpen, onClose, onSelect, options }: SelectionModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Select Appointment Type</h2>
            <p className="text-gray-600 text-sm mt-1">Choose the option that best fits your needs</p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Options */}
        <div className="p-6 space-y-4">
          {options.map((option, index) => (
            <button
              key={index}
              onClick={() => {
                onSelect(option.eventType);
                onClose();
              }}
              className="w-full bg-gray-50 hover:bg-blue-50 border-2 border-gray-200 hover:border-blue-500 rounded-xl p-6 flex items-center justify-between transition-all duration-200 group"
            >
              <div className="text-left">
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-900">
                  {option.title}
                </h3>
                <p className="text-sm text-gray-600 mt-1">{option.subtitle}</p>
              </div>
              <div className="bg-blue-900 group-hover:bg-blue-800 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
                Choose
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}