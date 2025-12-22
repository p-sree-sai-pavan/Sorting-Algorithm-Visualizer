const bubbleSortOnePass = async (array, setArray, setcurrentComp, setIsSorted, delay, speedRef, isRunningRef, isStoppedRef) => {
    const n = array.length;
    const arr = [...array];

    for(let i = 0; i < n - 1; i++){
        for(let j = 0; j < n - i - 1; j++){
            
            if(isStoppedRef.current){
                setcurrentComp([]);
                return;
            }

            setcurrentComp([j, j + 1]);
            await delay(speedRef.current);

            if(arr[j] > arr[j + 1]){
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                setArray([...arr]);
                await delay(speedRef.current);
            }
            
            setcurrentComp([]);
        }
    }
    
    setIsSorted(true);
}

export default bubbleSortOnePass;