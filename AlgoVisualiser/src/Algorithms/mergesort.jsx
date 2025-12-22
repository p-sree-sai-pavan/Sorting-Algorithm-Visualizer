const mergeSort = async (array, setArray, setcurrentComp, setIsSorted, delay, speedRef, isRunningRef, isStoppedRef) => {
    const arr = [...array];
    
    const merge = async (left, mid, right) => {
        if (isStoppedRef.current) return;
        
        const leftArr = arr.slice(left, mid + 1);
        const rightArr = arr.slice(mid + 1, right + 1);
        
        let i = 0, j = 0, k = left;
        
        while (i < leftArr.length && j < rightArr.length) {
            if (isStoppedRef.current) return;
            
            // Highlight elements being compared
            setcurrentComp([left + i, mid + 1 + j]);
            await delay(speedRef.current);
            
            if (leftArr[i] <= rightArr[j]) {
                arr[k] = leftArr[i];
                i++;
            } else {
                arr[k] = rightArr[j];
                j++;
            }
            
            setArray([...arr]);
            await delay(speedRef.current);
            k++;
        }
        
        // Copy remaining elements from left
        while (i < leftArr.length) {
            if (isStoppedRef.current) return;
            arr[k] = leftArr[i];
            setArray([...arr]);
            await delay(speedRef.current);
            i++;
            k++;
        }
        
        // Copy remaining elements from right
        while (j < rightArr.length) {
            if (isStoppedRef.current) return;
            arr[k] = rightArr[j];
            setArray([...arr]);
            await delay(speedRef.current);
            j++;
            k++;
        }
        
        setcurrentComp([]);
    };
    
    const mergeSortRecursive = async (left, right) => {
        if (left < right && !isStoppedRef.current) {
            const mid = Math.floor((left + right) / 2);
            
            // Sort left half
            await mergeSortRecursive(left, mid);
            
            // Sort right half
            await mergeSortRecursive(mid + 1, right);
            
            // Merge the sorted halves
            await merge(left, mid, right);
        }
    };
    
    await mergeSortRecursive(0, arr.length - 1);
    
    if (!isStoppedRef.current) {
        setIsSorted(true);
    }
};

export default mergeSort;