import React, { useState, useEffect, useRef } from 'react';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  Cpu, 
  Shuffle, 
  Sliders, 
  CheckCircle2, 
  Code2, 
  Sparkles, 
  Volume2,
  Layers,
  ArrowRight
} from 'lucide-react';
import { sound } from '../utils/audio';

type AlgorithmType = 'bubble' | 'binary_search' | 'quick_sort' | 'dijkstra';

export const DsaVisualizer: React.FC = () => {
  const [algo, setAlgo] = useState<AlgorithmType>('bubble');
  const [array, setArray] = useState<number[]>([45, 12, 85, 32, 89, 39, 69, 44, 42, 10, 78, 25, 96, 54, 63]);
  const [activeIndices, setActiveIndices] = useState<number[]>([]);
  const [sortedIndices, setSortedIndices] = useState<number[]>([]);
  const [pivotIndex, setPivotIndex] = useState<number | null>(null);
  const [isRunning, setIsRunning] = useState(false);
  const [comparisons, setComparisons] = useState(0);
  const [swaps, setSwaps] = useState(0);
  const [speedMs, setSpeedMs] = useState(120);

  // Binary search specific state
  const [searchTarget, setSearchTarget] = useState(44);
  const [searchPointers, setSearchPointers] = useState<{ low: number; mid: number; high: number } | null>(null);
  const [foundIndex, setFoundIndex] = useState<number | null>(null);

  const abortControllerRef = useRef(false);

  const resetArray = (type: 'random' | 'sorted' | 'reversed' = 'random') => {
    sound.playClick();
    abortControllerRef.current = true;
    setIsRunning(false);
    setActiveIndices([]);
    setSortedIndices([]);
    setPivotIndex(null);
    setSearchPointers(null);
    setFoundIndex(null);
    setComparisons(0);
    setSwaps(0);

    const size = 15;
    let newArr: number[] = [];
    if (type === 'random') {
      newArr = Array.from({ length: size }, () => Math.floor(Math.random() * 85) + 12);
    } else if (type === 'sorted') {
      newArr = Array.from({ length: size }, (_, i) => Math.floor((i + 1) * (90 / size)) + 10);
    } else {
      newArr = Array.from({ length: size }, (_, i) => Math.floor((size - i) * (90 / size)) + 10);
    }
    setArray(newArr);
    if (algo === 'binary_search') {
      // binary search requires sorted array
      const sorted = [...newArr].sort((a, b) => a - b);
      setArray(sorted);
      setSearchTarget(sorted[Math.floor(sorted.length / 2)]);
    }
  };

  useEffect(() => {
    resetArray('random');
  }, [algo]);

  const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

  // ================= BUBBLE SORT =================
  const runBubbleSort = async () => {
    abortControllerRef.current = false;
    setIsRunning(true);
    const arr = [...array];
    const n = arr.length;
    let compCount = 0;
    let swapCount = 0;

    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (abortControllerRef.current) {
          setIsRunning(false);
          return;
        }

        setActiveIndices([j, j + 1]);
        compCount++;
        setComparisons(compCount);
        sound.playStep(arr[j], 100);
        await sleep(speedMs);

        if (arr[j] > arr[j + 1]) {
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          swapCount++;
          setSwaps(swapCount);
          setArray([...arr]);
          sound.playStep(arr[j + 1], 100);
          await sleep(speedMs);
        }
      }
      setSortedIndices(prev => [...prev, n - 1 - i]);
    }
    setSortedIndices(Array.from({ length: n }, (_, idx) => idx));
    setActiveIndices([]);
    setIsRunning(false);
    sound.playSuccess();
  };

  // ================= BINARY SEARCH =================
  const runBinarySearch = async () => {
    abortControllerRef.current = false;
    setIsRunning(true);
    setFoundIndex(null);

    const sorted = [...array].sort((a, b) => a - b);
    setArray(sorted);

    let low = 0;
    let high = sorted.length - 1;
    let compCount = 0;

    while (low <= high) {
      if (abortControllerRef.current) {
        setIsRunning(false);
        return;
      }

      const mid = Math.floor((low + high) / 2);
      setSearchPointers({ low, mid, high });
      setActiveIndices([mid]);
      compCount++;
      setComparisons(compCount);
      sound.playStep(sorted[mid], 100);
      await sleep(speedMs * 3);

      if (sorted[mid] === searchTarget) {
        setFoundIndex(mid);
        setSortedIndices([mid]);
        setIsRunning(false);
        sound.playSuccess();
        return;
      }

      if (sorted[mid] < searchTarget) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }

    setFoundIndex(-1);
    setIsRunning(false);
  };

  const handleStart = () => {
    sound.playClick();
    if (algo === 'bubble') {
      runBubbleSort();
    } else if (algo === 'binary_search') {
      runBinarySearch();
    } else {
      runBubbleSort();
    }
  };

  const handleStop = () => {
    sound.playClick();
    abortControllerRef.current = true;
    setIsRunning(false);
  };

  const getAlgoDetails = () => {
    switch (algo) {
      case 'bubble':
        return {
          title: 'Bubble Sort (Comparison Sorting)',
          time: 'O(N²) Worst/Avg • O(N) Best',
          space: 'O(1) Auxiliary Space',
          desc: 'Repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. Sound tone reflects magnitude of swapped values.'
        };
      case 'binary_search':
        return {
          title: 'Binary Search (Divide & Conquer)',
          time: 'O(log N) Time Complexity',
          space: 'O(1) Iterative Space',
          desc: 'Finds the position of a target value within a sorted array by halving the search interval on every step.'
        };
      case 'quick_sort':
        return {
          title: 'QuickSort (Partitioning Algorithm)',
          time: 'O(N log N) Avg • O(N²) Worst',
          space: 'O(log N) Call Stack Space',
          desc: 'Selects a pivot element and partitions the array into sub-arrays according to whether they are less than or greater than the pivot.'
        };
      case 'dijkstra':
        return {
          title: "Dijkstra's Shortest Path",
          time: 'O((V + E) log V) with Min-Heap',
          space: 'O(V) Distance Array',
          desc: 'Finds the shortest paths between nodes in a weighted graph using greedy priority queue relaxation.'
        };
    }
  };

  const details = getAlgoDetails();

  return (
    <section id="dsa" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-xs font-mono font-semibold">
            <Cpu className="w-3.5 h-3.5 text-emerald-400" />
            <span>Interactive Algorithmic Sandbox</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            DSA Studio & <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
              Real-Time Visualizer
            </span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Experience algorithmic execution in real-time. Watch array elements shift, pointers narrow, 
            and synthesized harmonic sound frequencies pulse with every comparison.
          </p>
        </div>

        {/* Visualizer Workbench */}
        <div className="rounded-3xl glass-card border border-emerald-500/30 shadow-2xl p-6 sm:p-8 space-y-8">
          
          {/* Top Control Bar: Algorithm Switcher & Control Buttons */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-white/10">
            
            {/* Algorithm Selector Tabs */}
            <div className="flex flex-wrap gap-2">
              {[
                { id: 'bubble', label: 'Bubble Sort' },
                { id: 'binary_search', label: 'Binary Search' },
                { id: 'quick_sort', label: 'QuickSort Theory' },
                { id: 'dijkstra', label: "Dijkstra's Graph" }
              ].map((item) => {
                const isActive = algo === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      sound.playClick();
                      setAlgo(item.id as AlgorithmType);
                    }}
                    onMouseEnter={() => sound.playHover()}
                    className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all cursor-pointer ${
                      isActive
                        ? 'bg-emerald-500 text-black font-bold shadow-lg shadow-emerald-500/25'
                        : 'bg-slate-900/80 text-slate-300 hover:text-white border border-white/10 hover:border-emerald-500/30'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>

            {/* Execution Controls */}
            <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
              {!isRunning ? (
                <button
                  id="dsa-run-btn"
                  onClick={handleStart}
                  onMouseEnter={() => sound.playHover()}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-black font-bold text-xs flex items-center gap-2 shadow-lg shadow-emerald-500/25 hover:scale-105 active:scale-95 transition-all cursor-pointer"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Execute Algorithm</span>
                </button>
              ) : (
                <button
                  id="dsa-stop-btn"
                  onClick={handleStop}
                  className="px-5 py-2.5 rounded-xl bg-rose-600 text-white font-bold text-xs flex items-center gap-2 shadow-lg shadow-rose-600/25 hover:bg-rose-500 transition-all cursor-pointer"
                >
                  <Pause className="w-3.5 h-3.5" />
                  <span>Halt Execution</span>
                </button>
              )}

              <button
                id="dsa-reset-btn"
                onClick={() => resetArray('random')}
                onMouseEnter={() => sound.playHover()}
                title="Randomize Array"
                className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-white/10 transition-colors flex items-center gap-1.5 text-xs font-mono"
              >
                <Shuffle className="w-3.5 h-3.5 text-cyan-400" />
                <span className="hidden sm:inline">Shuffle</span>
              </button>

              {/* Speed Slider */}
              <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-900/80 border border-white/10 text-xs font-mono text-slate-400">
                <Sliders className="w-3.5 h-3.5 text-emerald-400" />
                <span className="hidden sm:inline">Speed:</span>
                <input
                  type="range"
                  min="20"
                  max="400"
                  step="20"
                  value={speedMs}
                  onChange={(e) => setSpeedMs(Number(e.target.value))}
                  className="w-20 accent-emerald-400 cursor-pointer"
                />
              </div>
            </div>

          </div>

          {/* Visual Array Canvas / Bars */}
          <div className="relative h-64 sm:h-72 w-full bg-[#07090e] rounded-2xl border border-white/10 p-6 flex items-end justify-between gap-1 sm:gap-2 overflow-hidden">
            
            {/* Background Grid Lines */}
            <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

            {/* Bars */}
            {array.map((val, idx) => {
              const isActive = activeIndices.includes(idx);
              const isSorted = sortedIndices.includes(idx);
              const isPivot = pivotIndex === idx;
              const isLow = searchPointers?.low === idx;
              const isMid = searchPointers?.mid === idx;
              const isHigh = searchPointers?.high === idx;
              const isFound = foundIndex === idx;

              let barColor = 'bg-slate-700/80 border-slate-600';
              if (isFound) {
                barColor = 'bg-emerald-400 border-emerald-300 shadow-lg shadow-emerald-500/50';
              } else if (isActive) {
                barColor = 'bg-amber-400 border-amber-300 shadow-lg shadow-amber-500/50';
              } else if (isSorted) {
                barColor = 'bg-cyan-500 border-cyan-400';
              } else if (isMid) {
                barColor = 'bg-purple-500 border-purple-400';
              } else if (isLow || isHigh) {
                barColor = 'bg-blue-500 border-blue-400';
              }

              return (
                <div
                  key={idx}
                  className="flex-1 flex flex-col items-center justify-end h-full group/bar relative"
                >
                  {/* Tooltip value */}
                  <span className="text-[10px] font-mono text-slate-300 opacity-80 mb-1 group-hover/bar:opacity-100 font-bold">
                    {val}
                  </span>

                  {/* The vertical bar */}
                  <div
                    className={`w-full rounded-t-lg transition-all duration-150 border-t border-x ${barColor}`}
                    style={{ height: `${(val / 100) * 85}%` }}
                  />

                  {/* Pointer Marker Labels for Binary Search */}
                  {searchPointers && (
                    <div className="absolute -bottom-6 text-[9px] font-mono font-bold">
                      {isMid && <span className="text-purple-400">MID</span>}
                      {isLow && !isMid && <span className="text-blue-400">LOW</span>}
                      {isHigh && !isMid && <span className="text-blue-400">HIGH</span>}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Real-time Diagnostics & Complexity Card */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            
            {/* Live Metrics */}
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-white/10 space-y-2">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                Execution Telemetry
              </span>
              <div className="flex items-center justify-between text-sm font-mono">
                <span className="text-slate-400">Comparisons:</span>
                <span className="text-amber-400 font-bold text-base">{comparisons}</span>
              </div>
              <div className="flex items-center justify-between text-sm font-mono">
                <span className="text-slate-400">Array Swaps:</span>
                <span className="text-cyan-400 font-bold text-base">{swaps}</span>
              </div>
              <div className="flex items-center justify-between text-sm font-mono">
                <span className="text-slate-400">Audio Sync:</span>
                <span className="text-emerald-400 font-medium">Real-time WebAudio</span>
              </div>
            </div>

            {/* Time & Space Complexity */}
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-white/10 space-y-2">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                Theoretical Complexity
              </span>
              <div className="text-sm font-mono text-emerald-300 font-bold">
                {details.time}
              </div>
              <div className="text-xs font-mono text-slate-300">
                {details.space}
              </div>
              <div className="text-[11px] text-slate-400 pt-1">
                Optimized C++ & Java STL implementation standards
              </div>
            </div>

            {/* Explanation Note */}
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-white/10 space-y-1.5">
              <span className="text-xs font-mono text-cyan-400 font-bold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> {details.title}
              </span>
              <p className="text-xs text-slate-300 leading-relaxed">
                {details.desc}
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
