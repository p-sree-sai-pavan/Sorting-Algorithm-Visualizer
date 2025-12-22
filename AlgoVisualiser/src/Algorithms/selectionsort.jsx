const selectionSort = async (array, setArray, setcurrentComp, setIsSorted, delay, speedRef, isRunningRef, isStoppedRef) => {
    const arr = [...array];
    const n = arr.length;
    
    for (let i = 0; i < n - 1; i++) {
        if (isStoppedRef.current) {
            setcurrentComp([]);
            return;
        }
        
        let minIndex = i;
        
        // Find minimum element in unsorted part
        for (let j = i + 1; j < n; j++) {
            if (isStoppedRef.current) {
                setcurrentComp([]);
                return;
            }
            
            // Highlight elements being compared
            setcurrentComp([minIndex, j]);
            await delay(speedRef.current);
            
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        
        // Swap minimum element with first element
        if (minIndex !== i) {
            setcurrentComp([i, minIndex]);
            await delay(speedRef.current);
            
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
            setArray([...arr]);
            await delay(speedRef.current);
        }
        
        setcurrentComp([]);
    }
    
    setIsSorted(true);
};

export default selectionSort;