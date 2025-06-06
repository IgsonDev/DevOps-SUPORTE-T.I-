
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CoverSlide from './slides/CoverSlide';
import ObjectivesSlide from './slides/ObjectivesSlide';
import TeamSlide from './slides/TeamSlide';
import TechnologiesSlide from './slides/TechnologiesSlide';
import RepositorySlide from './slides/RepositorySlide';
import ArchitectureSlide from './slides/ArchitectureSlide';
import SystemScreensSlide from './slides/SystemScreensSlide';
import CICDSlide from './slides/CICDSlide';
import ConclusionSlide from './slides/ConclusionSlide';

const slides = [
  { id: 1, component: CoverSlide, title: 'Capa' },
  { id: 2, component: ObjectivesSlide, title: 'Objetivos' },
  { id: 3, component: TeamSlide, title: 'Equipe' },
  { id: 4, component: TechnologiesSlide, title: 'Tecnologias' },
  { id: 5, component: RepositorySlide, title: 'Repositório' },
  { id: 6, component: ArchitectureSlide, title: 'Arquitetura' },
  { id: 7, component: SystemScreensSlide, title: 'Sistema' },
  { id: 8, component: CICDSlide, title: 'CI/CD' },
  { id: 9, component: ConclusionSlide, title: 'Conclusão' }
];

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const CurrentSlideComponent = slides[currentSlide].component;

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <div className="fixed top-6 left-6 z-50">
        <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-lg p-2 shadow-lg">
          <Button
            variant="ghost"
            size="sm"
            onClick={prevSlide}
            disabled={currentSlide === 0}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <span className="text-sm font-medium text-slate-600 min-w-[60px] text-center">
            {currentSlide + 1} / {slides.length}
          </span>
          <Button
            variant="ghost"
            size="sm"
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
        <div className="flex gap-2 bg-white/90 backdrop-blur-sm rounded-lg p-2 shadow-lg">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? 'bg-blue-500 scale-110'
                  : 'bg-slate-300 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Current slide */}
      <CurrentSlideComponent />

      {/* Keyboard navigation */}
      <div className="fixed inset-0 pointer-events-none">
        <div
          className="absolute inset-0 pointer-events-auto opacity-0"
          onKeyDown={(e) => {
            if (e.key === 'ArrowRight') nextSlide();
            if (e.key === 'ArrowLeft') prevSlide();
          }}
          tabIndex={0}
        />
      </div>
    </div>
  );
};

export default Presentation;
