
import { Cell, Pie, PieChart } from 'recharts';

const Analytics = () => {


    const data = [
        {
          "name": "Good",
          "value": 400
        },
        {
          "name": "Bad",
          "value": 300
        },
        {
          "name": "Good",
          "value": 500
        },
        {
          "name": "Bad",
          "value": 200
        },
        {
          "name": "Good",
          "value": 278
        }
      ]
    return (
        <div className='bg-base-300 w-full container mx-auto text-center mt-20 py-10'>
            
            <PieChart width={730} height={250}>
                <Pie data={data} cx="50%" cy="50%" outerRadius={80} label>
                    {
                        data.map((entry, index) => (
                            <Cell key={`cell-${index}`}  />
                        ))
                    }
                </Pie>
            </PieChart>
        </div>
    );
};

export default Analytics;