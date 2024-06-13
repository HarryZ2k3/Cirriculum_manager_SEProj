import Transition from '../../utils/Transition';
import { Doughnut } from 'react-chartjs-2';

export default function Grade() {
    // Data for the grades
    const gradesData = {
        labels: ['Inclass', 'Midterm', 'Final'],
        datasets: [
            {
                label: '# of Votes',
                data: [100, 90, 80], // Sample data
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)'
                ],
                borderWidth: 1,
            },
        ],
    };

    return (
        <Transition className="flex flex-grow bg-gradient-to-b from-background_top from-0% via-background_mid via-66% to-background_bottom to-100%">
            <div className="flex flex-grow flex-col overflow-y-auto">
                <div className="my-4">
                    <h2 className="text-1.75xl font-bold text-text_blue mb-2"></h2>
                    <Doughnut data={gradesData} />
                </div>
                <table className='rounded-lg px-3 text-[2rem] table-fixed border-separate border-spacing-[20px] border-slate-500 text-center'>
                    {/* table content */}
                </table>
                <table className="rounded-lg px-3 text-[1.5rem] table-fixed border-separate border-spacing-[10px] border-slate-500 text-left">
                    {/* table content */}
                </table>
            </div>
        </Transition>
    );
}
