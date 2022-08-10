import React from 'react'
import { Line } from 'react-chartjs-2'
import{Col,Row,Typography} from 'antd';
const{Title}=Typography;

const LineChart = ({data,coinPrice,coinName}) => {


  const currentPrice=[];
  const coinTimestamp=[];
  for(let i=0;i<data?.data?.coin?.sparkline?.length; i+=1){
  currentPrice.push("23203.683172606205")
  }
  for(let i=0;i<data?.data?.coin?.sparkline?.length; i+=1){
    coinTimestamp.push(new Date(59792300).toLocaleDateString())
    }
  const datta={
    lables:coinTimestamp,
    datasets:[
      {
        label :'Price in USD',
        data : currentPrice,
        fill: false,
        backgroundColor: '#0071bd',
        borderColor: '#0071bd'

      }
    ]
  }
  const options={
    scales:{
      yAxes:[

        {
          ticks:{
            beginAtZero: true
          },
        },
      ],
    },
  }

  return (
    <div>
      <>
        <Row className='chart-header'>
          <Title level={2} className='chart-title'>{coinName} Price Analysis</Title>
          <Col className='price-container'>
            <Title level={5} className='price-change'>Change: {data.data?.coin?.change}%</Title>
            <Title level={5} className='current-price'>Current {coinName} Price: ${coinPrice}</Title>
          </Col>
        </Row>
        {/* <Line data={datta} options={options} /> */}
      </>
    </div>
  );
}

export default LineChart