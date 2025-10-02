import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';

const resultData =[
  { "id": 1, "name": "Rahim", "physics": 85, "chemistry": 78, "math": 92 },
  { "id": 2, "name": "Karim", "physics": 72, "chemistry": 65, "math": 80 },
  { "id": 3, "name": "Sajid", "physics": 90, "chemistry": 88, "math": 95 },
  { "id": 4, "name": "Nabila", "physics": 67, "chemistry": 70, "math": 60 },
  { "id": 5, "name": "Shakib", "physics": 78, "chemistry": 75, "math": 82 },
  { "id": 6, "name": "Rumi", "physics": 95, "chemistry": 92, "math": 98 },
  { "id": 7, "name": "Imran", "physics": 60, "chemistry": 55, "math": 65 },
  { "id": 8, "name": "Tanvir", "physics": 88, "chemistry": 85, "math": 90 },
  { "id": 9, "name": "Ayesha", "physics": 82, "chemistry": 80, "math": 85 },
  { "id": 10, "name": "Mithila", "physics": 74, "chemistry": 68, "math": 72 }
]


const ResultCarts = () => {
    return (
        <div>
            <LineChart width={500} height={500} data={resultData}>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
            <Line dataKey="math"></Line>
            <Line dataKey={'chemistry'} stroke='red'></Line>
            </LineChart>
        </div>
    );
};

export default ResultCarts;