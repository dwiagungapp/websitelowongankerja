import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const WorkList = () => {

        const navigate = useNavigate()

        const [data, setData] = useState(null)
      
        useEffect(() => {
          axios.get("https://dev-example.sanbercloud.com/api/job-vacancy")
            .then((res) => {
                setData([...res.data.data])
            })
            .catch((error) => {
            })
        }, [])

        /* Fungsi formatRupiah */
		function formatRupiah(angka, prefix){
			var number_string = angka.replace(/[^,\d]/g, '').toString(),
			split   		= number_string.split(','),
			sisa     		= split[0].length % 3,
			rupiah     		= split[0].substr(0, sisa),
			ribuan     		= split[0].substr(sisa).match(/\d{3}/gi);
 
			// tambahkan titik jika yang di input sudah menjadi angka ribuan
			if(ribuan){
				let separator = sisa ? '.' : '';
				rupiah += separator + ribuan.join('.');
			}
 
			rupiah = split[1] != undefined ? rupiah + ',' + split[1] : rupiah;
			return prefix == undefined ? rupiah : (rupiah ? 'Rp. ' + rupiah : '');
		}

    const handleText = (text, max) => {
      if(text === null){
        return ""
      } else if (text.length > 10) {
        return text.slice(0, max) + "..."
      } else {
        return text
      }
    }

      
        return (
            <>
            <div className='ml-10 mt-20'>
            <p className='text-2x1 font-bold'>Lowongan pekerjaan yang tersedia</p></div>
            <div className="flex flex-wrap mx-10 mb-10 py-8 gap-7">
            
            
            
            
                    { data !== null && data.map((res, index) => {
              
              return (
                <>   
                
                <Link to={`/lowongan/${res.id}`} key={res.id} className="flex flex-col shadow-lg rounded-xl w-full lg:max-w-xs p-6 bg-white overflow-hidden">
  <div className="flex flex-col md:flex-row items-center justify-between">
    <div className="flex items-center justify-start w-full flex-grow">
      
        <img alt="profil" src={res.company_image_url} className="mx-auto object-cover rounded-full h-10 w-10 " />
      
      <div className="flex flex-col items-start ml-4">
        <span className="text-gray-700">
          {res.company_name}
        </span>
        <span className="text-gray-400 font-light text-sm dark:text-gray-300">
          {res.company_city}
        </span>
        <span className="text-gray-400 font-light text-sm dark:text-gray-300">
          {res.created_at}
        </span>
      </div>
    </div>
  </div>
  <br/><p className="text-gray-700">
    {res.title}
  </p>
  <p className="text-gray-400 font-normal text-sm grow">
    {handleText(res.job_description, 150) }
  </p>
  <div className="flex items-center rounded justify-between p-2 bg-blue-100 my-6">
    <div className="flex items-start w-full justify-between">
      <p className="flex-grow w-full text-2xl text-gray-700">
        <span className="text-gray-400 font-light text-md">
          IDR
        </span>
        {formatRupiah(res?.salary_min + "") }
        <span className="text-sm font-light text-gray-400">
          /Month
        </span>
      </p>
      <span className="px-3 py-1 flex-none text-sm rounded-full text-indigo-500  border border-indigo-500 ">
        {res.job_tenure}
      </span>
    </div>
  </div>
</Link>
                
                </>
              )
            })}
                    
                    {
                        data === null && <div className="radial-progress" style={{"--value":70}}>70%</div>
                      
                      
                    }
</div>
            
            </>
            
              )
}

export default WorkList
