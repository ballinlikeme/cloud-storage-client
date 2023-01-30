import React, {useEffect, useState} from 'react';
import Flex from "../../../../ui/Flex";

interface PaginationBarProps {
    amountOfPages: number
}

const PaginationBar: React.FC<PaginationBarProps> = ({amountOfPages}) => {
    const [numbers, setNumbers] = useState<number[]>([])
    useEffect(() => {
        const arr = []
        for (let i = 1; i <= amountOfPages; i++) {
            arr.push(i)
        }
        setNumbers(arr)
    }, [])

    return (
        <Flex gap={5}>
            {numbers.map(number => <span>{number}</span>)}
        </Flex>
    );
};

export default PaginationBar;