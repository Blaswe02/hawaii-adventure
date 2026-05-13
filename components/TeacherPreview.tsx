import React from 'react';
import { LocationData } from '../types';
import Button from './Button';
import { getIcon } from './Inventory';
import { Check, X, BookOpen, HelpCircle, LayoutGrid, TextCursorInput } from 'lucide-react';

interface Props { locations: LocationData[]; onClose: () => void; }

const TeacherPreview: React.FC<Props> = ({ locations, onClose }) => (
  <div className="min-h-screen bg-slate-950 text-slate-100">
    <div className="sticky top-0 z-10 bg-slate-950/95 backdrop-blur border-b border-yellow-900/50 px-4 py-3 flex justify-between items-center shadow-lg">
      <div>
        <h1 className="text-xl font-serif text-yellow-400">Teacher Preview</h1>
        <p className="text-slate-400 text-xs">Honu's Quest — all content & answer keys</p>
      </div>
      <Button variant="secondary" onClick={onClose} className="text-sm py-2 px-4">
        <X className="w-4 h-4" /> Exit Preview
      </Button>
    </div>
    <div className="max-w-4xl mx-auto p-4 md:p-8 space-y-12">
      {locations.map((loc, locIdx) => (
        <div key={loc.id} className="bg-slate-900 rounded-2xl border border-slate-700 overflow-hidden shadow-xl">
          <div className="relative h-36 overflow-hidden">
            <img src={loc.introImage} alt={loc.name} className="w-full h-full object-cover opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-transparent flex items-center px-6">
              <div>
                <span className="text-yellow-500 text-xs font-bold uppercase tracking-widest">Location {locIdx + 1} · {loc.symbol}</span>
                <h2 className="text-3xl font-serif text-white">{loc.name}</h2>
                <p className="text-slate-300 text-sm italic">{loc.symbolMeaning}</p>
              </div>
            </div>
          </div>
          <div className="p-6 space-y-8">
            <section>
              <h3 className="flex items-center gap-2 text-base font-bold text-yellow-400 mb-4 border-b border-slate-700/60 pb-2"><BookOpen className="w-4 h-4" /> Reading Text</h3>
              <div className="space-y-2 text-sm">
                {loc.readingText.map((s, i) => {
                  const isMystery = s === loc.mysterySentence;
                  return (
                    <div key={i} className={`flex gap-3 p-2 rounded ${isMystery ? 'bg-yellow-900/25 border border-yellow-700/40' : ''}`}>
                      <span className="text-slate-600 w-5 shrink-0 text-right">{i + 1}.</span>
                      <span className={isMystery ? 'text-yellow-200' : 'text-slate-300'}>{s}</span>
                      {isMystery && <span className="ml-auto shrink-0 text-yellow-500 text-xs font-bold bg-yellow-900/40 px-2 py-0.5 rounded border border-yellow-700/50 self-center">MYSTERY</span>}
                    </div>
                  );
                })}
              </div>
            </section>
            <section>
              <h3 className="flex items-center gap-2 text-base font-bold text-yellow-400 mb-4 border-b border-slate-700/60 pb-2"><HelpCircle className="w-4 h-4" /> Questions ({loc.questions.length})</h3>
              <div className="space-y-3">
                {loc.questions.map((q, qi) => (
                  <div key={q.id} className="bg-slate-800/70 rounded-xl p-4 border border-slate-700/50">
                    <p className="font-bold text-white text-sm mb-3">{qi + 1}. {q.text}</p>
                    <div className="space-y-1.5 ml-2">
                      {q.options.map((opt, oi) => (
                        <div key={oi} className={`flex items-center gap-2 text-sm px-2 py-1 rounded ${oi === q.correctIndex ? 'bg-green-900/30 text-green-300 font-semibold border border-green-800/50' : 'text-slate-400'}`}>
                          {oi === q.correctIndex ? <Check className="w-3.5 h-3.5 shrink-0" /> : <span className="w-3.5 h-3.5 shrink-0" />}
                          {opt}
                        </div>
                      ))}
                    </div>
                    <p className="text-slate-500 text-xs mt-3 italic pl-2">Hint: {q.hint}</p>
                  </div>
                ))}
              </div>
            </section>
            <section>
              <h3 className="flex items-center gap-2 text-base font-bold text-yellow-400 mb-4 border-b border-slate-700/60 pb-2"><LayoutGrid className="w-4 h-4" /> Sentence Builder</h3>
              <div className="space-y-3">
                {loc.sentenceBuilderTasks.map((t, ti) => (
                  <div key={t.id} className="bg-slate-800/70 rounded-xl p-4 border border-slate-700/50">
                    <p className="text-slate-500 text-xs mb-2">Task {ti + 1} — correct order:</p>
                    <p className="text-white font-semibold mb-3">{t.blocks.join(' ')}</p>
                    <div className="flex flex-wrap gap-2">
                      {t.blocks.map((b, bi) => (
                        <span key={bi} className="flex items-center gap-1 bg-slate-700 text-slate-200 px-2.5 py-1 rounded text-xs border border-slate-600">
                          <span className="text-slate-500 font-bold">{bi + 1}</span> {b}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
            <section>
              <h3 className="flex items-center gap-2 text-base font-bold text-yellow-400 mb-4 border-b border-slate-700/60 pb-2"><TextCursorInput className="w-4 h-4" /> Missing Words</h3>
              <div className="space-y-3">
                {loc.missingWordsTasks.map((t, ti) => (
                  <div key={t.id} className="bg-slate-800/70 rounded-xl p-4 border border-slate-700/50">
                    <p className="text-slate-500 text-xs mb-2">Task {ti + 1}</p>
                    <p className="text-slate-200 text-sm leading-relaxed">
                      {t.sentenceParts[0]}
                      <span className="inline-block mx-1 px-2.5 py-0.5 bg-green-900/40 text-green-300 font-bold rounded border border-green-700/60">{t.correctOption}</span>
                      {t.sentenceParts[1]}
                    </p>
                    <p className="text-slate-500 text-xs mt-2">Options: {t.options.map((o, oi) => (
                      <span key={oi} className={`mr-2 ${o === t.correctOption ? 'text-green-400 font-bold' : ''}`}>{o}{o === t.correctOption ? ' ✓' : ''}</span>
                    ))}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default TeacherPreview;
