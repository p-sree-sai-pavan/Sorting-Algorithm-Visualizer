import React, { useState, useRef } from 'react';
import './visualise.css'
import bubbleSortOnePass from '../Algorithms/boubblesort.jsx';
import quickSort from '../Algorithms/quicksort.jsx';
import insertionSort from '../Algorithms/insertionsort.jsx';
import mergeSort from '../Algorithms/mergesort.jsx';
import selectionSort from '../Algorithms/selectionsort.jsx';

function Visualise() {

    const [array, setArray] = useState([])
    const [currentComp, setcurrentComp] = useState([])
    const [isSorted, setIsSorted] = useState(false);
    const [algorithm, setAlgorithm] = useState('bubble');
    const speedRef = useRef(500);
    const [speed, setSpeed] = useState(1);
    const isRunningRef = useRef(false)
    const [isRunning, setIsRunning] = useState(false)
    const [isPaused, setIsPaused] = useState(false)
    const originalArrayRef = useRef([])
    const isStoppedRef = useRef(false);


    const genratearray = () => {
        const size = Number(document.getElementById('arraysize').value) || 10;
        const array = [];
        for(let i = 0; i < size; i++){
            array.push(Math.floor(Math.random() * 100))
        }
        setArray(array)
        originalArrayRef.current = [...array]
        setIsSorted(false)
    }
    
    const delay = async (ms) => {
        const startTime = Date.now();
        while (Date.now() - startTime < ms) {
            // Check if stopped
            if (isStoppedRef.current) {
                return;
            }

            // Check if paused
            while (!isRunningRef.current) {
                if (isStoppedRef.current) return;
                await new Promise(resolve => setTimeout(resolve, 50));
            }

            // Wait a small chunk (50ms) then check again
            await new Promise(resolve => setTimeout(resolve, 50));
        }
    };


    const handleSpeedChange = (e) => {
        const val = Number(e.target.value)
        const actualdelay = 500 / val
        setSpeed(val)
        speedRef.current = actualdelay
    }

    const handleStart = () => {
        isStoppedRef.current = false;
        isRunningRef.current = true;
        setIsRunning(true);
        setIsPaused(false);
        
        const params = [array, setArray, setcurrentComp, setIsSorted, delay, speedRef,  isRunningRef, isStoppedRef];
        
        if (algorithm === 'bubble') {
            bubbleSortOnePass(...params).then(() => setIsRunning(false));
        } else if (algorithm === 'quick') {
            quickSort(...params).then(() => setIsRunning(false));
        } else if (algorithm === 'merge') {
            mergeSort(...params).then(() => setIsRunning(false));
        } else if (algorithm === 'insertion') {
            insertionSort(...params).then(() => setIsRunning(false));
        } else if (algorithm === 'selection') {
            selectionSort(...params).then(() => setIsRunning(false));
        }
    }

    const handlePause = () => {
        isRunningRef.current = !isRunningRef.current;
        setIsPaused(!isPaused);
    }

    const handleStop = () => {
        isStoppedRef.current = true
        isRunningRef.current = false
        setIsPaused(false);
        setIsRunning(false)
        setArray([...originalArrayRef.current])
        setcurrentComp([])
        setIsSorted(false)
    }

    const handleManualInput = () => {
        const input = document.getElementById('manualInput').value

        const arr = input.split(',')
                         .map(num => parseInt(num.trim()))
                         .filter(num => !isNaN(num) && num > 0 && num <= 100);
        if (arr.length > 0) {
            setArray(arr);
            originalArrayRef.current = [...arr];
            setIsSorted(false);
            setcurrentComp([]);
        } else {
            alert('Please enter valid numbers separated by commas (1-100)');
        }
    }

    return (
        <div className="visualizer-container">
            <h2>Algorithm Visualizer</h2>

            <div className="controls-section">
                <div className="control-group">
                    <label>Algorithm: </label>
                    <select 
                        value={algorithm} 
                        onChange={(e) => setAlgorithm(e.target.value)}
                        disabled={isRunning}
                    >
                        <option value="bubble">Bubble Sort</option>
                        <option value="quick">Quick Sort</option>
                        <option value="merge">Merge Sort</option>
                        <option value="insertion">Insertion Sort</option>
                        <option value="selection">Selection Sort</option>
                    </select>
                </div>

                {/* Array Size */}
                <div className="control-group">
                    <label>Array Size: </label>
                    <input 
                        type="number" 
                        defaultValue={10} 
                        id="arraysize"
                        min="5"
                        max="50"
                        disabled={isRunning}
                    />
                    <button 
                        onClick={genratearray} 
                        disabled={isRunning}
                    >
                        Generate Random Array
                    </button>
                </div>

                {/* Manual Input */}
                <div className="control-group">
                    <label>Custom Array: </label>
                    <input 
                        type="text" 
                        id="manualInput"
                        placeholder="e.g., 45,23,67,12,89"
                        disabled={isRunning}
                    />
                    <button 
                        onClick={handleManualInput}
                        disabled={isRunning}
                    >
                        Set Custom Array
                    </button>
                </div>

                {/* Speed Control */}
                <div className="control-group">
                    <label>Speed: </label>
                    <input 
                        type="range" 
                        id="speed" 
                        value={speed}
                        step={0.5}
                        min={0.5} 
                        max={100}
                        onChange={handleSpeedChange}
                    />
                    <span className="speed-display">{speed}x</span>
                </div>
            </div>

            {/* Control Buttons */}
            <div className="button-controls">
                <button 
                    onClick={handleStart}
                    disabled={isRunning}
                    className="btn-start"
                >
                    Start
                </button>

                <button 
                    onClick={handlePause}
                    disabled={!isRunning}
                    className="btn-pause"
                >
                    {isPaused ? 'Resume' : 'Pause'}
                </button>

                <button 
                    onClick={handleStop}
                    disabled={!isRunning}
                    className="btn-stop"
                >
                    Stop
                </button>
            </div>

            {/* Graph */}
            <div className='graphsection'>
                {array.map((value, index) => {
                    let barColor = 'lightblue';
                    if(isSorted){
                        barColor = 'lightgreen';
                    } else if(currentComp.includes(index)){
                        barColor = 'red';
                    }

                    return(
                        <div 
                            key={index} 
                            className='bars' 
                            style={{ 
                                height: `${value * 3}px`, 
                                backgroundColor: barColor 
                            }}
                        >
                        </div>
                    ) 
                })}
            </div>
            
            <p className="array-display">Array: {array.join(", ")}</p>
        </div>
    )
}

export default Visualise