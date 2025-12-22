const insertionSort = async (array, setArray, setcurrentComp, setIsSorted, delay, speedRef, isRunningRef, isStoppedRef) => {
    const arr = [...array];
    const n = arr.length;
    
    for (let i = 1; i < n; i++) {
        if (isStoppedRef.current) {
            setcurrentComp([]);
            return;
        }
        
        const key = arr[i];
        let j = i - 1;
        
        // Highlight the element being inserted
        setcurrentComp([i]);
        await delay(speedRef.current);
        
        // Move elements greater than key one position ahead
        while (j >= 0 && arr[j] > key) {
            if (isStoppedRef.current) {
                setcurrentComp([]);
                return;
            }
            
            // Highlight comparison
            setcurrentComp([j, j + 1]);
            await delay(speedRef.current);
            
            // Shift element
            arr[j + 1] = arr[j];
            setArray([...arr]);
            await delay(speedRef.current);
            
            j--;
        }
        
        // Insert key at correct position
        arr[j + 1] = key;
        setArray([...arr]);
        await delay(speedRef.current);
        
        setcurrentComp([]);
    }
    
    setIsSorted(true);
};

export default insertionSort;