const quickSort = async (array, setArray, setcurrentComp, setIsSorted, delay, speedRef, isRunningRef, isStoppedRef) => {
    const arr = [...array];
    
    const partition = async (low, high) => {
        if (isStoppedRef.current) return -1;
        
        const pivot = arr[high];
        let i = low - 1;
        
        for (let j = low; j < high; j++) {
            if (isStoppedRef.current) return -1;
            
            setcurrentComp([j, high]);
            await delay(speedRef.current);
            
            if (arr[j] < pivot) {
                i++;
                [arr[i], arr[j]] = [arr[j], arr[i]];
                setArray([...arr]);
                await delay(speedRef.current);
            }
            
            setcurrentComp([]);
        }
        
        [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
        setArray([...arr]);
        await delay(speedRef.current);
        
        return i + 1;
    };
    
    const quickSortRecursive = async (low, high) => {
        if (low < high && !isStoppedRef.current) {
            const pivotIndex = await partition(low, high);
            
            if (pivotIndex === -1) return;
            
            await quickSortRecursive(low, pivotIndex - 1);
            await quickSortRecursive(pivotIndex + 1, high);
        }
    };
    
    await quickSortRecursive(0, arr.length - 1);
    
    if (!isStoppedRef.current) {
        setIsSorted(true);
    }
};

export default quickSort;